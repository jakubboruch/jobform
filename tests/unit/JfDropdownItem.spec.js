import { shallowMount } from '@vue/test-utils';
import JfDropdownItem from '@/components/JfDropdownItem.vue';

describe('JfDropdownItem.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfDropdownItem, {
      propsData: {
        name: 'React.js',
        id: 0,
        value: false,
      },
    });
  });
  it('Should have "name" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.name;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('');
  });
  it('Should have required "id" of type Number', () => {
    const prop = wrapper.vm.$options.props.id;
    expect(prop.type).toBe(Number);
    expect(prop.required).toBeTruthy();
  });
});
