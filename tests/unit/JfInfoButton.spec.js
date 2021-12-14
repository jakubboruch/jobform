import JfInfoButton from '@/components/JfInfoButton.vue';
import { mount } from '@vue/test-utils';

describe('JfInfoButton.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(JfInfoButton, {});
  });
  it('Should display message when mouse is over it and hide it when mouse is out', () => {
    wrapper.find('.jf-info-button').trigger('mouseover');
    wrapper.vm.$nextTick(() => {
      expect(wrapper.find('.jf-info-button__message')
        .classes()).toContain('jf-info-button__message--active');
      wrapper.find('.jf-info-button').trigger('mouseout');
      wrapper.vm.$nextTick(() => {
        expect(wrapper.find('.jf-info-button__message')
          .classes()).not.toContain('jf-info-button__message--active');
      });
    });
  });
});
