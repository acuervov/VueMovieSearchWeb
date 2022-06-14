import { findMovies, getGenders, getTrailer, movieById } from "./searchMovie";

export async function findMoviesFormated({ name, page, genres, type }) {
  const reponse = await findMovies({ name, page, genres, type });
  if (reponse.data.success && reponse.data.results.length) {
    return reponse.data.results;
  } else {
    alert("That movie title was not found");
  }
}

export async function movieByIdFormated(id) {
  const response = await movieById(id);
  if (response.data.success) {
    return response.data.result;
  } else {
    alert("There is no movie with that ID");
  }
}

export async function getMovieGendersFormated() {
  const response = await getGenders();
  if (response.data.success) {
    return response.data.results;
  } else {
    alert("There is no movie with that ID");
  }
}

export async function getTrailerFormated(id) {
  const response = await getTrailer(id);
  if (response.data.success) {
    return response.data.result;
  } else {
    alert("There is no movie with that ID");
  }
}
