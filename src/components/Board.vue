<template>
  <section>
    <template v-for="(list, index) in lists">
      <column
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>
    </template>
    <input
      type="text"
      placeholder="✚ New List"
      v-model="listName"
      @keyup.enter="add(listName)"
    />
  </section>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Column from './Column'

export default {
  name: 'board',
  components: { Column },

  data () {
    return {
      listName: ''
    }
  },

  computed: {
    ...mapState(['lists'])
  },

  methods: {
    add (listName) {
      this.addColumn(listName)
      this.listName = ''
    },
    ...mapActions(['addColumn'])
  }
}
</script>

<style scoped>
  input {
    background-color: #43A077;
    font-size: 1.2rem;
    margin: 1rem;
    padding: 1rem;
    color: white;
    border: 0;
    width: 80%;
    transition: all 600ms ease;
    outline: 0;
  }

  input:active, input:focus {
    background-color: white;
    color: #43A077;
    border-bottom: 2px solid #43A077;
  }

  input::placeholder {
    color: white;
  }
</style>
