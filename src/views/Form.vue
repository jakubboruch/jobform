<template>
  <div class="form">
    <div class="form__column">
      <JfInput
        v-model="name.value"
        :label="'Name'"
        :errors="name.errors"
        :name="'name'"
        :info="'Let\'s be friend, please provide your name so we can get in touch with you!'"/>
      <JfInput
        v-model="email.value"
        :label="'Email'"
        :errors="email.errors"
        :name="'email'"/>
      <JfDropdownSelect
        :label="'Skills'"
        :name="'skills'"
        :errors="listOfSkills.errors"
        :selected="selectedItems">
        <JfDropdownList>
          <JfDropdownFilter v-model="filteredList" slot="filter"/>
          <JfDropdownItem
            v-for="item in filteredList"
            :key="item.id"
            :name="item.name"
            :id="item.id"
            v-model="listOfSkills.value.filter((lItem) => (lItem.id === item.id))[0].selected">
          </JfDropdownItem>
        </JfDropdownList>
      </JfDropdownSelect>
      <div class="form__footer">
        <JfButton @click="validateForm">Send</JfButton>
      </div>
    </div>
    <JfToast v-show="toast.show"
             :success="toast.success"
             @hide="toast.show = false">
      {{ toast.message }}
    </JfToast>
  </div>
</template>

<script>
// @ is an alias to /src
import JfInput from '@/components/JfInput.vue';
import JfButton from '@/components/JfButton.vue';
import JfToast from '@/components/JfToast.vue';
import JfDropdownSelect from '@/components/JfDropdownSelect.vue';
import JfDropdownList from '@/components/JfDropdownList.vue';
import JfDropdownFilter from '@/components/JfDropdownFilter.vue';
import JfDropdownItem from '@/components/JfDropdownItem.vue';

export default {
  name: 'Form',
  components: {
    JfInput, JfButton, JfDropdownSelect, JfDropdownList, JfDropdownFilter, JfDropdownItem, JfToast,
  },
  data() {
    return {
      toast: {
        show: false,
        message: '',
        success: false,
      },
      name: {
        required: true,
        type: 'text',
        value: '',
        min: 2,
        max: 255,
        errors: [],
      },
      email: {
        required: true,
        type: 'email',
        value: '',
        errors: [],
      },
      listOfSkills: {
        required: true,
        type: 'list',
        value: [],
        min: 1,
        errors: [],
      },
      filteredList: [],
    };
  },
  created() {
    this.resetForm();
  },
  computed: {
    selectedItems() {
      return this.listOfSkills.value.filter((item) => (item.selected));
    },
  },
  methods: {
    validateForm() {
      this.resetErrors();
      const form = {
        name: this.name,
        email: this.email,
        listOfSkills: {
          ...this.listOfSkills,
          value: this.listOfSkills.value.filter((skill) => (skill.selected)),
        },
      };
      Object.keys(form).forEach((formType) => {
        if (form[formType].type === 'text') {
          if (form[formType].required && !form[formType].value) {
            form[formType].errors.push('This field is required');
            return;
          }
          if (form[formType].max && form[formType].length > form[formType].max) {
            form[formType].errors.push(`This field should have ${form[formType].max} chars max`);
            return;
          }
          if (form[formType].min && form[formType].length < form[formType].min) {
            form[formType].errors.push(`This field should have ${form[formType].min} chars nin`);
            return;
          }
        }
        if (form[formType].type === 'email') {
          if (form[formType].required && !form[formType].value) {
            form[formType].errors.push('Email required');
            return;
          }
          if (!this.validEmail(form[formType].value)) {
            form[formType].errors.push('Valid e-mail required');
            return;
          }
        }
        if (form[formType].type === 'list') {
          if (form[formType].required && form[formType].value && !form[formType].value.length) {
            form[formType].errors.push('This field is required');
            return;
          }
          if (form[formType].value && form[formType].min
              && form[formType].value && form[formType].value.length < form[formType].min) {
            form[formType].errors.push(`You should select at least ${form[formType].min} elements`);
            return;
          }
          if (form[formType].value && form[formType].max
              && form[formType].value && form[formType].value.length > form[formType].max) {
            form[formType].errors.push(`You should select up to ${form[formType].max} elements`);
          }
        }
      });
      if (!this.name.errors.length
        && !this.email.errors.length
        && !this.listOfSkills.errors.length) {
        this.sendForm(form);
      }
    },
    validEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    showToast(success, message) {
      const displayTime = 5000;
      this.toast.show = true;
      this.toast.success = success;
      this.toast.message = message;
      setTimeout(() => {
        this.resetToast();
      }, displayTime);
    },
    resetToast() {
      this.toast.show = false;
      this.toast.success = false;
      this.toast.message = '';
    },
    sendForm(form) {
      const payload = {
        name: form.name.value,
        email: form.email.value,
        skills: form.listOfSkills.value,
      };
      this.$store.dispatch('saveApplicant', payload).then((result) => {
        if (result.success) {
          this.resetForm();
        }
        this.showToast(result.success, result.message);
      });
    },
    resetErrors() {
      this.name.errors = [];
      this.email.errors = [];
      this.listOfSkills.errors = [];
    },
    resetForm() {
      this.name.value = '';
      this.email.value = '';
      this.listOfSkills.value = this.$store.state.skills.map(
        (item) => ({ ...item, selected: false }),
      );
      this.filteredList = this.listOfSkills.value.map((item) => ({ ...item }));
    },
  },
};
</script>

<style scoped lang="scss">
  @import '@/assets/styles/_variables';
  .form {
    &__footer {
      display: flex;
      justify-content: flex-end;
      margin-top: 18px;
    }
  }
</style>
