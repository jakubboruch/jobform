import JfButton from '@/components/JfButton.vue';
import { mount } from '@vue/test-utils';

describe('JfButton.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(JfButton, {
      slots: {
        default: 'Send',
      },
    });
  });
  it('"JfButton" should render correct value', () => {
    expect(wrapper.find('.jf-button')
      .text())
      .toBe('Send');
  });
  it('Should emit "click" event after clicking on button', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-button').trigger('click');
    expect(emitted.click).toBeTruthy();
  });
});
