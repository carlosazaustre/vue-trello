<template>
  <header>
    <span class="title">Vue Trello</span>
    <router-link class="btn-header" to="/">My Boards</router-link>
    <template v-if="user">
      <div class="userinfo">
        <img :src="user.photoURL" :alt="user.displayName" />
        <span>{{ user.displayName }}</span>
        <button class="btn-header btn-login">Logout</button>
      </div>
    </template>
    <template v-else>
      <router-link class="btn-header btn-login" to="/auth">Login</router-link>
    </template>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props: {
    user: Object
  }
}
</script>

<style lang="scss" scoped>
  header {
    box-sizing: border-box;
    background-color: #607d8b;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin: 0;
    padding: 1rem;

    .title {
      align-self: center;
      color: #eceff1;
      font-size: 1.2rem;
      font-weight: bold;
      margin-right: 1rem;
    }
  }

  .btn-header {
    background-color: #455A64;
    border: none;
    border-radius: 3px;
    box-shadow: 0 0 0 0.5px rgba(49,49,93,.03),
      0 2px 5px 0 rgba(49,49,93,.1),
      0 1px 2px 0 rgba(0,0,0,.08);
    color: #B0BEC5;
    cursor: pointer;
    text-decoration: none;
    padding: 0.5rem;
    margin: 0 0.5rem
  }

  .btn-login {
    background-color: #00695c;
    color: #fafafa;
  }

  .userinfo {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      color: #fafafa;
      font-size: 0.9rem;
      font-weight: normal;
    }
  }

  img {
    width: 32px;
    border-radius: 50%;
    margin: 0 1rem;
  }
</style>
