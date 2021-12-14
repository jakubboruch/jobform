<template>
  <div class="jf-toast"
       :class="{
        'jf-toast--success': success,
        'jf-toast--error': !success
  }"
       @click="hideToast">
    <i class="jf-toast__icon fas fa-thumbs-up" v-if="success"/>
    <i class="jf-toast__icon  fas fa-exclamation" v-if="!success"/>
    <slot/>
  </div>
</template>

<script>
export default {
  name: 'JfToast',
  methods: {
    hideToast() {
      this.$emit('hide');
    },
  },
  props: {
    success: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-toast {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 30px;
    color: $white;
    display: flex;
    justify-content: center;
    font-size: $font-size-large;
    align-items: center;
    &__icon {
      margin-right: 8px;
    }
    &--success {
      background-color: $pelorous;
    }
    &--error {
      background-color: $alert-color;
    }
  }
</style>
