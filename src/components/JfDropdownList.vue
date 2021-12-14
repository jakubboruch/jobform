<template>
  <div class="jf-dropdown-list">
    <slot name="filter"></slot>
    <div class="jf-dropdown-list__wrapper">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'JfDropdownList',
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-dropdown-list {
    min-height: 26px;
    max-width: 312px;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    margin-left: -1px;
    line-height: 26px;
    outline: none;
    border: 1px solid $catskill-white;
    background-color: $catskill-white-light;
    &__wrapper {
      padding: 0 0 7px 0;
      position: relative;
    }
    &__field {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;

      &:focus {
        border-color: $pelorous
      }
    }
    &__indicator {
      display: flex;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 4px 4.5px 0 4.5px;
      border-color: $pelorous transparent transparent transparent;
      &--rotated {
        transform: rotateZ(180deg);
      }
    }
    &__text {
      display: flex;
    }
    &__label {
      margin-top: 10px;
      margin-bottom: 5px;
      font-size: $font-size-form;
      font-weight: bold;
      display: flex;
    }
    &__info {
      margin-left: 8px;
    }
    &__list {
      position: absolute;
      top: 100%;
    }
  }
</style>
