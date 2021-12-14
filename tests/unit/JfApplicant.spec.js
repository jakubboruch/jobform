import { shallowMount } from '@vue/test-utils';
import JfApplicant from '@/components/JfApplicant.vue';

describe('JfApplicant.vue', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(JfApplicant, {
      propsData: {
        applicant: {
          name: 'John Doe',
          email: 'john@doe.pl',
          skills: [
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
      },
    });
  });
  it('should have "applicant" of type Object with default values.', () => {
    const { applicant } = wrapper.vm.$options.props;
    expect(applicant.required).toBeTruthy();
    expect(applicant.type).toBe(Object);
    expect(applicant.default()).toEqual({ name: '', email: '', skills: [] });
  });
  it('"skills" should return concatenated values', () => {
    expect(wrapper.vm.skills).toEqual('Vue.js + React.js + Angular + Svelte.js + Bootstrap + Three.js + Webpack + Gulp + Grunt + D3');
  });
});
