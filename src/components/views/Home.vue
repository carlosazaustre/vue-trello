<template>
  <div>
    <h3>My Boards</h3>
    <div class="boards-collection">
      <template v-if="fetchingData">
        <span>Loading...</span>
      </template>
      <input
        type="text"
        placeholder= "Add new board"
        v-model="boardName"
        @keyup.enter="add()"
      />
      <board-card
        v-for="(board, index) in boards"
        :key="index"
        :name="board.name"
        :id="board.id">
      </board-card>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import BoardCard from '@/components/BoardCard'

export default {
  name: 'home-view',
  components: { BoardCard },

  data () {
    return {
      boardName: ''
    }
  },

  computed: {
    ...mapState([
      'boards',
      'fetchingData',
      'error'
    ])
  },

  methods: {
    ...mapActions([
      'fetchBoards',
      'addBoard'
    ]),
    add () {
      this.addBoard({ name: this.boardName })
      this.boardName = ''
    }
  },

  created () {
    this.fetchBoards({ user: 1 })
  }
}
</script>

<style lang="scss" scoped>
  h3 {
    text-align: left;
    margin: 1.5rem;
  }
  .boards-collection {
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-top: 1rem;
  }
</style>
