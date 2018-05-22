import axios from 'axios';

function movieService() {
  function getMovies() {
    return new Promise((resolve, reject) => {
      axios.get('/movies')
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  return { getMovies };
}

export default movieService();
