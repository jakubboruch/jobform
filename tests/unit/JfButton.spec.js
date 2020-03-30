import JfButton from '@/components/JfButton.vue';
import { mount } from '@vue/test-utils';

describe('JfButton.vue', () => {
  const wrapper = mount(JfButton, {
    slots: {
      default: 'Send',
    },
  });
  it("'JfButton' should render correct value", () => {
    expect(wrapper.find('.jf-button')
      .text())
      .toBe('Send');
  });
});
