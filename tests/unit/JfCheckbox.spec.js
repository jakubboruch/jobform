import { shallowMount } from '@vue/test-utils';
import JfCheckbox from '@/components/JfCheckbox.vue';

describe('JfCheckbox.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfCheckbox, {
      propsData: {
        label: 'Vue.js',
        name: 'vue',
        checked: true,
        disabled: false,
      },
    });
  });
  it('Should have "label" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.label;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('');
  });
  it('Should have "name" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.name;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('');
  });
  it('Should have "checked" of type Boolean with default values.', () => {
    const prop = wrapper.vm.$options.props.checked;
    expect(prop.type).toBe(Boolean);
    expect(prop.default).toEqual(false);
  });
  it('Should emit "checkbox:click" event after click', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-checkbox').trigger('click');
    expect(emitted['checkbox:click']).toBeTruthy();
  });
  it('Should emit "change" event after "keyup.space" pressed', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-checkbox').trigger('keyup.space');
    expect(emitted.change).toBeTruthy();
  });
});
