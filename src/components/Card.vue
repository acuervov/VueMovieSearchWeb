<template>
  <div class="card">
    <router-link
      :to="`/detail/${id}`"
      style="text-decoration: none; color: inherit;"
    >
      <h2>{{ shortTitle }}</h2>
      <img :src="`${img}`" alt="image" />
      <h3>{{ year }}</h3>
      <p>{{ shortDescription }}</p>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    id: String,
    title: String,
    img: String,
    year: String,
    description: String
  },
  computed: {
    shortTitle() {
      return this.title.slice(0, 20);
    },
    shortDescription() {
      return this.description.slice(0, 25).concat("...");
    }
  }
};
</script>

<style scoped>
.card {
  width: 250px;
  margin: 15px;
  background-color: white;
  border-radius: 5px;
  padding: 5px;
}

.router-link {
  text-decoration: none;
}

h2 {
  white-space: nowrap;
  font-size: 20px;
}

img {
  width: 200px;
  height: 300px;
  box-shadow: 3px 3px 5px 3px #999;
  border-radius: 20px;
}
</style>
