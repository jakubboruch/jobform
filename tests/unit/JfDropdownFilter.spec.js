import { shallowMount } from '@vue/test-utils';
import JfDropdownFilter from '@/components/JfDropdownFilter.vue';

describe('JfDropdownFilter.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfDropdownFilter, {
      propsData: {
        placeholder: 'Search',
        value: [
          {
            id: '0',
            name: 'Vue.js',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '1',
            name: 'React.js',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '2',
            name: 'Angular',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '3',
            name: 'Svelte.js',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '4',
            name: 'Bootstrap',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '5',
            name: 'Three.js',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '6',
            name: 'Webpack',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '7',
            name: 'Gulp',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '8',
            name: 'Grunt',
            group_name: 'Front-end',
            group_id: 0,
          },
          {
            id: '9',
            name: 'D3',
            group_name: 'Front-end',
            group_id: 0,
          },
        ],
      },
    });
  });
  it('Should have "placeholder" of type String with default values.', () => {
    const prop = wrapper.vm.$options.props.placeholder;
    expect(prop.type).toBe(String);
    expect(prop.default).toEqual('Search');
  });
  it('Should emit "input" event after changing search value', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-dropdown-filter__field').setValue('Vue');
    expect(emitted.input).toBeTruthy();
  });
  it('Should filter value after changing search value', () => {
    const emitted = wrapper.emitted();
    wrapper.find('.jf-dropdown-filter__field').setValue('Vue');
    expect(emitted.input[0][0][0].name).toBe('Vue.js');
  });
});
