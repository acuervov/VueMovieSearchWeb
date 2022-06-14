import Vue from "vue";
import Vuex from "vuex";

import {
  findMoviesFormated,
  getMovieGendersFormated,
  movieByIdFormated
} from "./API/formatedResponse";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movieList: [],
    genderList: [],
    favoriteList: [],
    detailedMovie: {}
  },
  mutations: {
    setGenderList(state, payload) {
      const genders = payload.map(gender => {
        return gender.uuid;
      });
      state.genderList = genders;
    },
    setMovieList(state, payload) {
      state.movieList = payload;
    },
    orderMovieList(state, payload) {
      const upperCasedTitles = state.movieList.map(movie => {
        movie.title = movie.title.toUpperCase();
        return movie;
      });

      upperCasedTitles.sort(function(a, b) {
        if (a[payload] < b[payload]) {
          return -1;
        }
        if (a[payload] > b[payload]) {
          return 1;
        }
        return 0;
      });

      state.movieList = upperCasedTitles;
    },
    addToFavorite(state, payload) {
      console.log("entro al mutation", payload);
      if (payload.favoriteList) {
        const copyStr = payload.favoriteList;
        const copy = JSON.parse(copyStr);
        copy.push({ ...state.detailedMovie });
        payload.setItem("favoriteList", JSON.stringify(copy));
      } else {
        const newArray = [{ ...state.detailedMovie }];
        payload.setItem("favoriteList", JSON.stringify(newArray));
      }
    },
    removeFromFavorite(state, payload) {
      const copyStr = payload.favoriteList;
      const copy = JSON.parse(copyStr);
      const removedMovieList = copy.filter(
        movie => movie._id !== state.detailedMovie._id
      );
      payload.setItem("favoriteList", JSON.stringify(removedMovieList));
    },
    seeFavoriteList(state) {
      state.movieList = state.favoriteList;
    },
    setDetail(state, payload) {
      state.detailedMovie = payload;
    },
    cleanMovieList(state) {
      state.movieList = [];
    }
  },
  actions: {
    async searchMovies({ commit }, payload) {
      const response = await findMoviesFormated({ ...payload });
      commit("setMovieList", response);
    },
    orderMovieListAction({ commit }, payload) {
      console.log("payloard, ", payload);
      commit("orderMovieList", payload);
    },
    async findById({ commit }, payload) {
      const response = await movieByIdFormated(payload);
      commit("setDetail", response);
    },
    async getMovieGenders({ commit }) {
      const response = await getMovieGendersFormated();
      commit("setGenderList", response);
    }
  },
  getters: {
    getDetailMovie(state) {
      return state.detailedMovie;
    }
  }
});
