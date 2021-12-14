<template>
  <div id="app" class="main">
    <div class="main__wrapper">
      <div id="nav">
        <router-link name="form" to="/">applicant form</router-link>
        |
        <router-link name="list" to="/list">applicants list</router-link>
      </div>
    </div>
    <div class="main__wrapper">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import '@/assets/styles/_variables';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $pelorous;

}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: $font-color-form;
    text-decoration: none;

    &.router-link-exact-active {
      color: $pelorous;
    }
  }
}

.main {
  &__wrapper {
    max-width: 312px;
    margin: 0 auto;
  }
}
</style>
