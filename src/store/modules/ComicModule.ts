/* eslint-disable */
import { GetterTree, ActionTree, MutationTree } from 'vuex';

import { State } from '../interface/comic';

import ComicTypes  from '../types/ComicTypes';

const namespaced : boolean = true;

const state : State = {
    comics : []
};

const getters : GetterTree<State, any> ={
    [ComicTypes.getters.GETCOMICS]: (state) => {
        return state.comics;
    }
};

const mutations : MutationTree<State> ={
    [ComicTypes.mutations.SETCOMICS]: (state, comics) => {
        state.comics = comics
    }
};

const actions : ActionTree<State, any> ={
[ComicTypes.actions.ACTCOMICS]: ({commit, state}, comic) => {
    commit(ComicTypes.mutations.SETCOMICS, comic)
}
};
export default {
    namespaced,
    state,
    getters,
    mutations,
    actions,
  };