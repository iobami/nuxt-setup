export const state = () => ({
  people: [
    'dev',
    'tammy',
    'ayo',
    'bami'
  ],
  subjects: ['maths', 'eng']
});

export const mutations = {
  SET_STATE(state, { key, value }) {
    state[key] = value;
  }
};

export const getters = {
  getPeople: (state) => state.people,
  getSubjects: (state) => state.subjects
};

export const actions = {
  updatePeople({ commit, state }, value) {
    const people = [...state['people']];
    people.push(value);
    commit('SET_STATE', { key: 'people', value: people });
  },

  pop({ commit, state }) {
    const people = [...state['people']];
    people.pop();
    commit('SET_STATE', { key: 'people', value: people });
  }
};
