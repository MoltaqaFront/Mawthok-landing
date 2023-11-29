import AppLangMutations from "./mutations";
import AppLangActions from "./actions.js";
import AppLangGetters from "./getters.js";

export const state = () =>({
    // START:: LANGUAGE DATA
    starter_app_lang: process.browser  ? localStorage.getItem("starter_app_lang") : null,
    // END:: LANGUAGE DATA
  });

export const mutations = AppLangMutations;
export const actions = AppLangActions;
export const getters = AppLangGetters;
