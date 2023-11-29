// START:: IMPORTING ROOT FILES
import rootMutations from "./rootMutations.js";
import rootActions from "./rootActions.js";
import rootGetters from "./rootGetters.js";
// END:: IMPORTING ROOT FILES

export const state = () =>({
  posts: [
    {
      id: 1,
      title: "Post 1 Title",
      desc: "Post 1 Desc",
    },
  ],
});
export const mutations = rootMutations;
export const actions = rootActions;
export const getters = rootGetters;
