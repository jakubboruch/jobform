<template>
  <div class="jf-dropdown-item">
    <jf-checkbox class="js-dropdown-item__label"
                 :name="name"
                 :id="id"
                 v-model="localValue"
                 @change="updateValue">{{ name }}</jf-checkbox>
  </div>
</template>

<script>
import JfCheckbox from '@/components/JfCheckbox.vue';

export default {
  name: 'JfDropdownItem',
  components: {
    JfCheckbox,
  },
  data() {
    return {
      localValue: this.value,
    };
  },
  props: {
    name: {
      type: String,
      default: '',
    },
    id: {
      type: Number,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
  watch: {
    value(newValue) {
      this.localValue = newValue;
    },
  },
  methods: {
    updateValue($event) {
      this.$emit('input', this.localValue, $event);
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';
  .jf-dropdown-item {
    padding: 3px 12px;
    font-size: $font-size-form;
    color: $font-color-form;
    &:hover {
      background-color: $catskill-white;
      color: $body-font-color;
    }
  }
</style>
