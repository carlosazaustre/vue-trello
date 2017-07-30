<template>
  <ul>
    <li
      v-for="(task, index) in tasks"
      :key="index"
      :class="{ completed: task.completed }"
      @click="markAsCompleted({ taskId: task.id })"
      @dblclick="deleteTask({ taskId: task.id })">
        {{ task.title }}
    </li>
    <input
      type="text"
      placeholder="New Task"
      v-model="title"
      @keyup.enter="add()"
    />
  </ul>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'task-list',
  props: {
    listId: String,
    tasks: Array
  },

  data () {
    return {
      title: ''
    }
  },

  methods: {
    ...mapActions([
      'addTask',
      'markAsCompleted',
      'deleteTask'
    ]),
    add () {
      this.addTask({ listId: this.listId, title: this.title })
      this.title = ''
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0;
    padding: 1rem;
  }

  li.completed {
    background-color: #C8E6C9;
    color: #2E7D32;
  }

  li:not(:last-child) {
    border-bottom: 1px solid #43A077;
  }

  input {
    margin: 0.5rem;
    padding: 0.75rem;
    border: 1px solid #43A077;
    outline: 0;
    width: 90%;
    transition: background-color 600ms ease;
  }

  input:focus, input:active {
    background-color: #E8F5E9;
  }
</style>
