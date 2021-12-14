<template>
  <div class="jf-checkbox"
       @click="checkboxClick"
       @keyup.space="updateBefore"
       @keyup.up="move($event, true)"
       @keyup.down="move($event, false)"
       @mouseleave="blur"
       :name="name"
       tabindex="0"
       :class="{'jf-checkbox--disabled' : disabled}">
    <label class="jf-checkbox__label">
      <input type="checkbox"
             ref="checkbox"
             class="jf-checkbox__input"
             :checked="checked"
             @change="update"
             :value="label"
             :disabled="disabled">
      <span class="jf-checkbox__box"
            :class="{'jf-checkbox__box--checked': checked}">
          <i class="jf-checkbox__tick fas fa-check"></i>
      </span>
      <span class="jf-checkbox__slot">
        <slot>{{ label }}</slot>
      </span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'checkbox',
  model: {
    prop: 'checked',
    event: 'change',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    checked: {
      type: Boolean,
      default: false,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    update($event) {
      this.$emit('change', $event.target.checked);
    },
    updateBefore() {
      this.$emit('change', !this.$refs.checkbox.checked);
    },
    checkboxClick() {
      this.$emit('checkbox:click');
    },
    blur($event) {
      $event.target.blur();
    },
    move($event, up) {
      const current = $event.path[0];
      const parent = $event.path[1];
      const parentClassName = $event.path[1].className;
      const container = $event.path[2];
      const htmlList = container.getElementsByClassName(parentClassName);
      const index = Array.from(htmlList).indexOf(parent);
      if (up && index > 0) {
        htmlList[index - 1].getElementsByClassName(current.className)[0].focus();
      } else if (!up && index < htmlList.length - 1) {
        htmlList[index + 1].getElementsByClassName(current.className)[0].focus();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/styles/_variables';
  .jf-checkbox {
    width: 100%;
    outline: none;
    &:focus {
      color: $body-font-color;
    }
    &__input {
      display: none;
    }
    &__box {
      width: 12px;
      height: 12px;
      flex-basis: 12px;
      border: 2px solid $font-color-form;
      border-radius: 3px;
      margin: 0 7px 0 0;
      padding: 0;
      background: $white;
      overflow: hidden;
      vertical-align: -10%;
      user-select: none;
      display: flex;
      align-items: center;
      justify-content: center;

      &--checked {
        background: transparent;
        color: $pelorous;
        border-color: $pelorous;
      }

      &--checked .jf-checkbox__tick {
        opacity: 1;
      }
    }

    &__slot {
      flex: 1;
    }

    &__label {
      display: flex;
      cursor: pointer;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      font-size: $font-size-form;
      user-select: none;

      &--center {
        justify-content: center;
      }
      &--label-top {
        align-items: flex-start;
      }
    }

    &__tick {
      font-size: .8em;
      opacity: 0;
      color: $pelorous;
    }

    &__error-message {
      font-size: $font-size-form;
    }
    &--disabled {
      opacity: .5;
    }
  }
</style>
