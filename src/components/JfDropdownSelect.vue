<template>
  <div class="jf-dropdown-select"
    :name="name">
    <p class="jf-dropdown-select__label" v-if="label">
      <span>{{ label }}</span>
      <jf-info-button class="jf-dropdown-select__info" right v-if="info">{{ info }}</jf-info-button>
    </p>
    <div class="jf-dropdown-select__wrapper"
         v-jf-clickaway="closeDropdown"
         @keyup.escape="closeDropdown">
      <div class="jf-dropdown-select__field"
           @click="toggleDropdown"
           @keyup.space="toggleDropdown"
           @keyup.down="openDropdown"
           @keyup.up="closeDropdown"
           tabindex="0">
        <div class="jf-dropdown-select__text" :title="selectedItemsText">
          <div class="jf-dropdown-select__text-wrapper">
            {{ selectedItemsText }}
          </div>
        </div>
        <div class="jf-dropdown-select__indicator"
             :class="{'jf-dropdown-select__indicator--rotated': active}"></div>
      </div>
      <div class="jf-dropdown-select__list" v-show="active">
        <slot></slot>
      </div>
    </div>
    <div class="jf-dropdown-select__errors">
      <div class="jf-dropdown-select__error" v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script>
import JfInfoButton from '@/components/JfInfoButton.vue';
import JfClickaway from '@/directives/JfClickaway';

export default {
  name: 'JfDropdownSelect',
  components: {
    JfInfoButton,
  },
  directives: {
    JfClickaway,
  },
  data() {
    return {
      active: false,
    };
  },
  props: {
    required: {
      type: Boolean,
      default: false,
    },
    selected: {
      type: Array,
    },
    errors: {
      type: Array,
      default: () => ([]),
    },
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      default: '',
    },
  },
  computed: {
    selectedItemsText() {
      return this.selected.map((item) => (item.name)).join(' + ');
    },
  },
  methods: {
    toggleDropdown() {
      this.active = !this.active;
    },
    openDropdown() {
      this.active = true;
    },
    closeDropdown() {
      this.active = false;
    },
  },
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables';

  .jf-dropdown-select {
    &__wrapper {
      position: relative;
      max-width: 330px;
    }
    &__field {
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 26px;
      padding: 0 8px;
      line-height: 26px;
      border: 1px solid $catskill-white;
      outline: none;
      background-color: $catskill-white-light;
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
    &__selected-item {
      display: flex;
      font-size: $font-size-form;
      &:before {
        display: flex;
        content: '+';
        margin-left: 3px;
        margin-right: 3px;
      }
      &:first-child:before {
        content: '';
        margin-left: 0;
      }
    }
    &__text {
      display: flex;
      min-width: 0;
    }
    &__text-wrapper {
      font-size: $font-size-form;
      color: $body-font-color;
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
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
      left: 0;
      right: 0;
    }
    &__errors {
      color: $alert-color;
      font-size: $font-size-small;
    }
  }
</style>
