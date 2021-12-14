import JfDropdownList from '@/components/JfDropdownList.vue';
import { shallowMount } from '@vue/test-utils';

describe('JfDropdownList.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfDropdownList, {
      slots: {
        default: '<div class="content">content</div>',
        filter: '<div class="filter">filter</div>',
      },
    });
  });
  it('"JfDropdownList" should render correctly', () => {
    expect(wrapper.find('.content')
      .text())
      .toBe('content');
    expect(wrapper.find('.filter')
      .text())
      .toBe('filter');
  });
});
