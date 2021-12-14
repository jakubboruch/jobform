<template>
  <div class="jf-dropdown-filter">
    <div class="jf-dropdown-filter__wrapper">
      <input :placeholder="placeholder"
             class="jf-dropdown-filter__field"
             type="text"
             @input="update">
    </div>
  </div>
</template>

<script>

export default {
  name: 'JfDropdownFiltert',
  data() {
    return {
      localValue: this.value.map((item) => ({ ...item })),
    };
  },
  props: {
    placeholder: {
      type: String,
      default: 'Search',
    },
    value: {
      type: Array,
      default: () => (
        [{ name: '' }]
      ),
    },
  },
  methods: {
    update($event) {
      let filteredList = [];
      if ($event.target.value && $event.target.value.length) {
        filteredList = this.localValue.filter((item) => (
          item.name.toUpperCase().includes($event.target.value.toUpperCase())
        ));
        this.$emit('input', filteredList, $event);
      } else {
        this.$emit('input', this.localValue, $event);
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-dropdown-filter {
    margin-top: -1px;
    display: flex;
    background-color: $pelorous;
    &__wrapper {
      position: relative;
      padding: 6px;
      display: flex;
      flex-grow: 1;
    }
    &__field {
      display: flex;
      font-size: $font-size-form;
      height: 22px;
      line-height: 22px;
      padding: 0 5px;
      flex-grow: 1;
      outline: none;
      border: none;
      border-radius: 3px;
    }
  }
</style>
