<template>
  <div class="jf-input"
       :name="name"
       :class="{'input--disabled': disabled}">
    <p class="jf-input__label" v-if="label">
      <span>{{ label }}</span>
      <jf-info-button class="jf-input__info" right v-if="info">{{ info }}</jf-info-button>
    </p>
    <div class="jf-input__wrapper">
      <input ref="jf-input"
             class="jf-input__field"
             type="text"
             :name="name"
             :value="value"
             :required="required"
             :disabled="disabled"
             @input="update">
    </div>
    <div class="jf-input__errors">
      <div class="jf-input__error" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import JfInfoButton from '@/components/JfInfoButton.vue';

export default {
  name: 'JfInput',
  components: {
    JfInfoButton,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    info: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: '',
      required: true,
    },
    errors: {
      type: Array,
      default: () => ([]),
    },
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    update($event) {
      this.$emit('input', $event.target.value, $event);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';
.jf-input {
  &__wrapper {
    display: flex;
  }
  &__field {
    display: flex;
    flex-grow: 1;
    height: 26px;
    max-width: 312px;
    padding: 0 8px;
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
    display: flex;
  }
  &__info {
    margin-left: 8px;
  }
  &__errors {
    color: $alert-color;
    font-size: $font-size-small;
  }
}
</style>
