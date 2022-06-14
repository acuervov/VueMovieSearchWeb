<template>
  <div class="detail">
    <div class="detail-title">
      <h1>
        {{ movieData.title ? movieData.title : "Movie Title" }}
      </h1>
      <button
        v-if="!isFavorites"
        class="favorites-buttons--mod"
        v-on:click="addTofavorites"
      >
        Agregar A favoritos
      </button>
      <button
        v-else
        class="favorites-buttons--mod favorite"
        v-on:click="removeFromFavorite"
      >
        Eliminar de favoritos
      </button>
    </div>
    <div class="detail-trailer">
      <h2>Trailer</h2>
      <!-- <iframe width="320" height="240" :src="`${this.movieData.embedUrls[0].url}`">
    </iframe> -->
    </div>
    <div class="movie-info">
      <div class="movie-description">
        <h2>Description</h2>
        <p>
          {{
            movieData.description
              ? store.state.detailedMovie.description
              : "Movie complete description"
          }}
        </p>
      </div>
      <div class="movie-table">
        <h3>Ficha Tecnica</h3>
        <table id="movie-details-table">
          <tr>
            <th>Tipo</th>
            <th>dato</th>
          </tr>
          <tr>
            <td>Dirección</td>
            <td>
              {{ movieData.directors ? movieData.directors[0] : "Not found" }}
            </td>
          </tr>
          <tr>
            <td>Guion</td>
            <td>
              {{ movieData.escritors ? movieData.escritors[0] : "Not found" }}
            </td>
          </tr>
          <tr>
            <td>Pais</td>
            <td>
              {{ movieData.countries ? movieData.countries[0] : "Not found" }}
            </td>
          </tr>
          <tr>
            <td>Estreno</td>
            <td>
              {{ movieData.release ? movieData.release : "Not found" }}
            </td>
          </tr>
          <tr>
            <td>Rating</td>
            <td>
              {{ movieData.rating ? movieData.rating : "Not found" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  data() {
    return {
      isFavorites: false,
      movieData: this.$store.getters.getDetailMovie
    };
  },
  beforeMount() {
    this.$store.dispatch("findById", this.$route.params.id);
    this.isInFavorites();
    this.movieData = this.$store.getters.getDetailMovie;
  },
  mounted() {
    console.log("mvie data", this.$store.getters.getDetailMovie);
    //Algo esta fallando, el fetch a api movies funciona pero por alguna razón se esta almacenando mal en el store.
    // cuando traigo la información aparece un objeto raro que no tienen la información adentro
  },
  methods: {
    // getTrailer() {

    // },
    addTofavorites() {
      this.$store.commit("addToFavorite", localStorage);
      console.log("local", localStorage);
      this.isInFavorites();
    },
    removeFromFavorite() {
      this.$store.commit("removeFromFavorite", localStorage);
      this.isInFavorites();
    },
    isInFavorites() {
      const storageStr = localStorage.favoriteList;
      const storage = JSON.parse(storageStr);
      console.log("storage detail", storage);
      this.isFavorites = storage.some(
        movie => movie._id === this.$route.params.id
      );
    }
  },
  create() {
    this.$watch(
      () => this.$route.params.id,
      () => {
        this.movieData = this.$store.getters.getDetailMovie;
      }
    );
  }
};
</script>

<style scoped>
.detail-title {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.movie-info {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.movie-description {
  width: 40%;
  min-width: 250px;
  margin: 10px;
  text-align: center;
}

.movie-table {
  width: 40%;
  min-width: 250px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#movie-details-table {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#movie-details-table td,
#movie-details-table th {
  border: 1px solid #ddd;
  padding: 8px;
}

#movie-details-table tr:nth-child(even) {
  background-color: #f2f2f2;
}

#movie-details-table tr:hover {
  background-color: #ddd;
}

#movie-details-table th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
.favorites-buttons--mod {
  background-color: inherit;
  border: solid #2c3e50;
  border-radius: 5px;
  height: 30px;
  cursor: pointer;
  margin: 10px;
}

.favorite {
  background-color: #41b883;
}
</style>
