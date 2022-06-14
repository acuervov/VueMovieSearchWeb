<template>
  <div class="filters">
    <form class="filter">
      <h4>Filter</h4>
      <span>Gender</span>
      <select v-model="genre" @change="getMovies">
        <option
          v-for="(genders, index) in $store.state.genderList"
          :key="index"
          >{{ genders }}</option
        >
      </select>
      |
      <span>Type</span>
      <select v-model="type" @change="getMovies">
        <option>movies</option>
        <option>series</option>
      </select>
    </form>
    <form class="filter">
      <h4>Order</h4>
      <span>order</span>
      <select v-model="order" @change="orderIt">
        <option>title</option>
        <option>year</option>
      </select>
    </form>
  </div>
</template>

<script>
export default {
  name: "filters",
  data() {
    return {
      genre: "",
      type: "",
      order: ""
    };
  },
  mounted() {
    this.$store.dispatch("getMovieGenders");
  },
  methods: {
    orderIt() {
      this.$store.commit("orderMovieList", this.order);
    },
    async getMovies() {
      this.$store.commit("cleanMovieList");
      this.$store.dispatch("searchMovies", {
        name: this.$route.params.search,
        page: 1,
        genres: this.genre,
        type: this.type
      });
    }
  }
};
</script>

<style>
.filters {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.filter {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  min-width: 280px;
  margin: 5px;
  border: solid #2c3e50;
  border-radius: 20px;
  padding: 5px;
}

.filter select {
  background-color: #d9dcfc;
  margin: 5px;
}
</style>
