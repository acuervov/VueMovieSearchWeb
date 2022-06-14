<template>
  <div class="NavBar">
    <img alt="Vue logo" src="../assets/logo.png" />
    <router-link key="/" to="/">Home</router-link> |
    <router-link key="/favorites" to="/favorites">Favorites</router-link> |
    <router-link :key="`/detail/${this.data}`" :to="`/detail/${this.data}`"
      >Random</router-link
    >
    |
    <SearchBar />
  </div>
</template>

<script>
import { findMoviesFormated } from "../API/formatedResponse";
import SearchBar from "./SearchBar.vue";

export default {
  name: "NavBar",
  components: {
    SearchBar
  },
  data() {
    return {
      data: "",
      randomPage: Math.floor(Math.random() * 348),
      randomIndex: Math.floor(Math.random() * 25)
    };
  },
  beforeMount() {
    this.getRandomMovie();
  },
  methods: {
    getRandomMovie() {
      findMoviesFormated({
        page: this.randomPage,
        genres: "",
        name: "",
        type: "movies"
      }).then(movieList => (this.data = movieList[this.randomIndex]._id));
    }
  },
  created() {
    this.$watch(
      () => this.$route.name,
      () => {
        this.randomPage = Math.floor(Math.random() * 348);
        this.randomIndex = Math.floor(Math.random() * 25);
        this.$router.go();
        this.getRandomMovie();
      }
    );
  }
};
</script>

<style>
.NavBar {
  padding: 10px;
  height: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 500px) {
  .NavBar {
    margin-bottom: 30px;
  }
}
@media screen and (max-width: 300px) {
  .NavBar {
    margin-bottom: 45px;
  }
}

.NavBar a {
  font-weight: bold;
  color: #2c3e50;
  margin: 10px;
}

.NavBar a.router-link-exact-active {
  color: #42b983;
}

.NavBar img {
  height: 100%;
}
</style>
