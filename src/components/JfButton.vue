<template>
  <button class="jf-button" @click="updateEvent">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'JfButton',
  methods: {
    updateEvent() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-button {
    background-color: $pelorous;
    height: 30px;
    min-width: 70px;
    color: $white;
    outline: none;
    border: none;
    &__field {
      height: 26px;
      width: 312px;
      padding: 0 10px;
      line-height: 26px;
      border: 1px solid $catskill-white;
      outline: none;
      background-color: $catskill-white-light;
      &:focus {
        border-color: $pelorous
      }
    }
    &__label {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: $font-size-form;
      font-weight: bold;
    }
  }
</style>
