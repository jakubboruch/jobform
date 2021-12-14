<template>
  <div
    class="jf-info-button"
    @mouseover="showMessage"
    @mouseout="hideMessage"
    :class="{ 'jf-info-button--large': large, 'jf-info-button--custom-button': $slots.button }">
    <div v-if="$slots.button">
      <slot name="button"></slot>
    </div>
    <div v-else
         class="jf-info-button__btn">i
    </div>
    <div class="jf-info-button__message"
         ref="jfInfoButtonMessage"
         :class="{
            'jf-info-button__message--active': activeMessage,
            'jf-info-button__message--right': right,
            'jf-info-button__message--left': left,
            'jf-info-button__message--top': top,
            'jf-info-button__message--bottom': bottom
            }">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'jf-info-button',
  props: {
    right: {
      type: Boolean,
      default: false,
    },
    left: {
      type: Boolean,
      default: false,
    },
    top: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false,
    },
    large: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      activeMessage: false,
    };
  },
  methods: {
    showMessage() {
      this.activeMessage = true;
      this.calculatePosition(this.$refs.jfInfoButtonMessage);
    },
    hideMessage() {
      this.activeMessage = false;
    },
    calculatePosition(element) {
      const e = element;
      setTimeout(() => {
        if (e.getBoundingClientRect().left < 0) {
          e.style.right = `-${Math.abs(element.getBoundingClientRect().right)}px`;
        }
        if (document.body.clientWidth < element.getBoundingClientRect().right) {
          e.style.right = `${(-(element.getBoundingClientRect().right
              - document.body.clientWidth)) + 30}px`;
        }
      }, 0);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';

  .jf-info-button {
    display: flex;
    width: 16px;
    height: 16px;
    align-items: center;
    justify-content: center;
    position: relative;
    user-select: none;
    &--custom-button {
      width: 100%;
      height: auto;
      display: inline-block;
      .jf-info-btn__message--top {
        left: 50%;
        transform: translateX(-50%);
        bottom: calc(100% + 20px);
      }
      .jf-info-btn__message--left {
        right: calc(100% + 20px);
        bottom: 50%;
        transform: translateY(50%);
      }
    }
    &__btn {
      display: flex;
      width: 10px;
      height: 10px;
      font-size: $font-size-icon-small;
      color: $white;
      border: 1px solid $wild-blue-yonder;
      background-color: $wild-blue-yonder;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      cursor: pointer;
    }
    &__icon {
      font-size:  $font-size-icon-small;
    }
    &__message {
      position: absolute;
      align-items: center;
      justify-content: center;
      background-color: $blue-bayoux;
      color: $white;
      text-align: left;
      padding: 20px;
      font-size: $font-size-regular;
      min-width: 220px;
      line-height: 1.5em;
      border-radius: 5px;
      display: none;
      &--active {
        display: flex;
        &:after {
          position: absolute;
          content: ' ';
          width: 0;
          height: 0;
        }
      }
      &--right {
        left: 30px;
        &:after {
          right: 100%;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-right: 10px solid $blue-bayoux;
        }
      }
      &--left {
        right: 30px;
        &:after {
          left: 100%;
          border-top: 10px solid transparent;
          border-bottom: 10px solid transparent;
          border-left: 10px solid $blue-bayoux;
        }
      }
      &--top {
        left: -110px;
        bottom: 30px;
        &:after {
          right: calc(50% - 7px);
          top: 100%;
          border-top: 10px solid $blue-bayoux;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
      &--bottom {
        top: 30px;
        &:after {
          bottom: 100%;
          border-bottom: 10px solid $blue-bayoux;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
        }
      }
    }
  }


</style>
