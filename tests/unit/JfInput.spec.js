import { shallowMount } from '@vue/test-utils';
import JfInput from '@/components/JfInput.vue';

describe('JfInput.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfInput, {
      propsData: {
        label: 'Name',
        info: 'Tel us something about yourself',
        disabled: false,
        name: 'name',
        errors: [],
        value: 'John Doe',
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
    expect(prop.default).toEqual('');
  });
  it('Should have "errors" of type Array with default values.', () => {
    const prop = wrapper.vm.$options.props.errors;
    expect(prop.type).toBe(Array);
    expect(prop.default()).toEqual([]);
  });
  it('Should emit "input" event after changing input value', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-input__field').setValue('Joe');
    expect(emitted.input).toBeTruthy();
  });
});
