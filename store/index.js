export const state = () => ({
  isLoading: false,
});

export const mutations = {
  SET_LOADING(state, payload) {
    state.isLoading = payload;
  },
};

export const actions = {
  setLoading({ commit }, payload) {
    commit("SET_LOADING", payload);
  },
};
