import { shallowMount } from '@vue/test-utils';
import JfDropdownSelect from '@/components/JfDropdownSelect.vue';

describe('JfDropdownSelect.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfDropdownSelect, {
      propsData: {
        label: 'Skills',
        name: 'skills',
        selected: [],
        errors: [],
      },
    });
  });
  it('Should have "label" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.label;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('');
  });
  it('Should have "info" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.info;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('');
  });
  it('Should have "name" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.name;
    expect(prop.type).toBe(String);
    expect(prop.required).toBeTruthy();
  });
  it('Should have "errors" of type Array with default values.', () => {
    const prop = wrapper.vm.$options.props.errors;
    expect(prop.type).toBe(Array);
    expect(prop.default()).toEqual([]);
  });
  it('Should toggle dropdown after click', () => {
    const beforeActive = wrapper.vm.active;
    wrapper.find('.jf-dropdown-select__field').trigger('click');
    const afterActive = wrapper.vm.active;
    expect(beforeActive).not.toEqual(afterActive);
  });
  it('Should toggle dropdown after keyup.space pressed', () => {
    const beforeActive = wrapper.vm.active;
    wrapper.find('.jf-dropdown-select__field').trigger('keyup.space');
    const afterActive = wrapper.vm.active;
    expect(beforeActive).not.toEqual(afterActive);
  });
  it('Should open dropdown after keyup.down pressed', () => {
    wrapper.find('.jf-dropdown-select__field').trigger('keyup.down');
    expect(wrapper.vm.active).toBeTruthy();
  });
  it('Should close dropdown after keyup.up pressed', () => {
    wrapper.vm.active = true;
    wrapper.find('.jf-dropdown-select__field').trigger('keyup.up');
    expect(wrapper.vm.active).toBeFalsy();
  });
});
