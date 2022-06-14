<template>
  <form class="searchBar" @submit.prevent="onSubmit">
    <input type="text" v-model="search" />
    <button type="submit">
      Search
    </button>
  </form>
</template>

<script>
export default {
  name: "searchBar",
  data() {
    return {
      search: ""
    };
  },
  methods: {
    onSubmit() {
      // this.$router.go(`/results/${this.search}`) //does not work
      this.$router.push(`/results/${this.search}`); //the one who works better until now
      // window.location.href = `/results/${this.search}`;
      this.search = "";
    }
  }
};
</script>

<style>
.searchBar {
  display: flex;
  align-items: center;
  height: 22px;
  margin: 10px;
}

.searchBar input {
  width: 80%;
  height: 100%;
  border: solid #2c3e50;
  background-color: #d9dcfc;
  border-width: 2px;
  border-radius: 10px;
  margin-right: 5px;
  color: #2c3e50;
  font-weight: 900;
  padding-left: 5px;
  padding-right: 5px;
}

.searchBar input:focus {
  outline: auto #42b983;
}

.searchBar button {
  background-color: #42b983;
  height: 28px;
  border-width: 2px;
  border-radius: 10px;
  border: solid #42b983;
  color: #2c3e50;
  font-weight: 900;
  cursor: pointer;
}

.searchBar button:hover {
  background-color: #2c3e50;
  border: solid #2c3e50;
  color: #42b983;
}
</style>
