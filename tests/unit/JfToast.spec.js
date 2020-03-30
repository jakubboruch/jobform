import { shallowMount } from '@vue/test-utils';
import JfToast from '@/components/JfToast.vue';

describe('JfToast.vue', () => {
  let wrapper;

  it('Should have "success" of type Boolean with default values.', () => {
    wrapper = shallowMount(JfToast, {
      propsData: {
        success: true,
      },
    });
    const prop = wrapper.vm.$options.props.success;
    expect(prop.required).toBeFalsy();
    expect(prop.type).toBe(Boolean);
    expect(prop.default).toEqual(false);
  });
  it('Should display "success icon" for success === true', () => {
    wrapper = shallowMount(JfToast, {
      propsData: {
        success: true,
      },
    });
    expect(wrapper.find('.jf-toast__icon').classes()).toContain('fa-thumbs-up');
  });
  it('Should display "error icon" for success === false', () => {
    wrapper = shallowMount(JfToast, {
      propsData: {
        success: false,
      },
    });
    expect(wrapper.find('.jf-toast__icon').classes()).toContain('fa-exclamation');
  });
  it('Should emit "hide" event after clicking on toast', () => {
    wrapper = shallowMount(JfToast, {
      propsData: {
        success: false,
      },
    });
    const emitted = wrapper.emitted();
    wrapper.find('.jf-toast').trigger('click');
    expect(emitted.hide).toBeTruthy();
  });
});
