import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    applicants: [],
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
  mutations: {
    setApplicant(state, payload) {
      state.applicants.push(payload);
    },
  },
  actions: {
    saveApplicant({ commit, state }, applicant) {
      const exist = state.applicants.some(
        (stateApplicant) => (stateApplicant.email === applicant.email),
      );
      if (!exist) {
        commit('setApplicant', applicant);
        return {
          success: true,
          message: 'Applicant added',
        };
      }
      return {
        success: false,
        message: 'Applicant already exist',
      };
    },
  },
});
