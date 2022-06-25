export default {
  namespaced: true,
  state: {
    resorts: [],
    loading: false,
  },
  getters: {
    resorts: (state) => state.resorts,
    loading: (state) => state.loading,
  },
  mutations: {
    setResorts(state, payload) {
      state.resorts = payload;
    },
    setLoading(state, payload) {
      state.loading = payload;
    },
  },
  actions: {
    fetchResorts({ commit }) {
      commit('setLoading', true);
      window
        .axios('/organizations?type=asc&field=name&per_page=10000')
        .then((res) => {
          commit('setResorts', res.data.data);
        })
        .finally(() => {
          commit('setLoading', false);
        });
    },
  },
};
