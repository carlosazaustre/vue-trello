<template>
  <section>
    <h3>{{ name }}</h3>
    <input
      type="text"
      placeholder="✚ New List"
      v-model="listName"
      @keyup.enter="add()"
    />
    <div class="container">
      <column
        v-for="(list, index) in boardLists"
        :key="index"
        :listId="list.id"
        :name="list.name">
      </column>
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Column from './Column'

export default {
  name: 'board',
  components: { Column },

  props: {
    name: String,
    id: String
  },

  data () {
    return {
      listName: ''
    }
  },

  computed: {
    ...mapGetters([
      'getListsByBoard'
    ]),
    boardLists () {
      return this.getListsByBoard(this.id)
    }
  },

  methods: {
    ...mapActions([
      'addColumn'
    ]),
    add () {
      this.addColumn({ board: this.id, name: this.listName })
      this.listName = ''
    }
  }
}
</script>

<style scoped lang="scss">
  h3 {
    font-size: 1.2rem;
    padding: 0.5rem;
    border-bottom: 2px solid #43A077;
  }

  .container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
  }

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

    &:active,
    &:focus {
      background-color: white;
      color: #43A077;
      border-bottom: 2px solid #43A077;
    }

    &::placeholder {
      color: white;
    }
  }
</style>
