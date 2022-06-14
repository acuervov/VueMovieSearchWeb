<template>
  <div class="cardContainer">
    <Filters />
    <div
      v-if="$store.state.movieList.length > 0"
      class="cardContainer-container"
    >
      <Card
        v-for="(item, index) in $store.state.movieList"
        :key="index"
        :id="item._id"
        :title="item.title"
        :img="item.image"
        :year="item.year"
        :description="item.description"
      />
    </div>
    <div v-else class="cardContainer-container">
      <LoaderRole />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
import Filters from "./Filters.vue";
import LoaderRole from "./LoaderRole.vue";

export default {
  name: "cardContainer",
  components: {
    Card,
    Filters,
    LoaderRole
  },
  beforeMount() {
    if (this.$route.name === "home") {
      this.getMovies();
    } else if (this.$route.name === "favorites") {
      this.getFavorites();
    }
  },
  created() {
    this.$watch(
      () => this.$route.params.search,
      () => {
        this.getMovies();
      }
    );
  },
  methods: {
    async getMovies() {
      this.$store.commit("cleanMovieList");
      this.$store.dispatch("searchMovies", {
        name: this.$route.params.search,
        page: 1,
        genres: "",
        type: ""
      });
    },
    getFavorites() {
      this.$store.commit("cleanMovieList");
      const storageStr = localStorage.favoriteList;
      const storage = JSON.parse(storageStr);
      this.$store.commit("setMovieList", storage);
    }
  }
};
</script>

<style>
h4 {
  margin-right: 5px;
}

.cardContainer-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
