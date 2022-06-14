import axios from "axios";

export async function findMovies({ name, page, genres, type }) {
  try {
    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/movies",
      params: {
        query: name,
        page: page,
        type: type,
        genres: genres
      },
      headers: {
        "X-RapidAPI-Key": "4a653c543amsh26c3961faae2c0bp1f2648jsnfafa9b7a8964",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com"
      }
    };
    return axios.request(options);
  } catch (error) {
    alert(error);
  }
}

export async function movieById(id) {
  try {
    const options = {
      method: "GET",
      url: `https://movies-app1.p.rapidapi.com/api/movie/${id}`,
      headers: {
        "X-RapidAPI-Key": "4a653c543amsh26c3961faae2c0bp1f2648jsnfafa9b7a8964",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com"
      }
    };
    return axios.request(options);
  } catch (error) {
    alert(error);
  }
}

export async function getGenders() {
  try {
    const options = {
      method: "GET",
      url: "https://movies-app1.p.rapidapi.com/api/genres",
      headers: {
        "X-RapidAPI-Key": "4a653c543amsh26c3961faae2c0bp1f2648jsnfafa9b7a8964",
        "X-RapidAPI-Host": "movies-app1.p.rapidapi.com"
      }
    };
    return axios.request(options);
  } catch (error) {
    alert(error);
  }
}
