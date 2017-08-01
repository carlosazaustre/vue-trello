<template>
  <div>
    <h3>My Boards</h3>
    <div class="boards-collection">
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
import { mapState } from 'vuex'
import BoardCard from '@/components/BoardCard'

export default {
  name: 'home-view',
  components: { BoardCard },

  computed: {
    ...mapState(['boards'])
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
