import Vue from 'vue';
import Vuex from 'vuex';
import * as state from './state';
import * as getters from './getters';
import * as mutations from './mutations'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: state.state,
    getters: getters.getters,
    mutations: mutations.mutations
});