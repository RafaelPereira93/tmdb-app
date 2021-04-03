export const formatTime = (time) => {
  var sec_num = Number(time);
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return `${minutes}h ${seconds}min`;
};

const setPageToLocalStorage = () => window.localStorage.setItem("page", 0);
setPageToLocalStorage();

export const getAndSetCurrentPage = (incrementPage, decrementPage) => {
  let currentPage = Number(window.localStorage.getItem("page"));

  if (incrementPage) {
    window.localStorage.setItem("page", (currentPage += 1));
  }

  if (decrementPage) {
    window.localStorage.setItem("page", 0);
  }

  return currentPage;
};

export const getRandomicGenre = (arrayGenres) => {
  const randomGenre = Math.round(Math.random() * arrayGenres.length - 1);
  if (randomGenre < 0) return arrayGenres[0]["id"];
  return arrayGenres[randomGenre]["id"];
};

export const getNameGenre = (arrayGenres, idGenre) => {
  const activeGenre = arrayGenres.filter(({ id }) => id === Number(idGenre));
  const nameGenre = activeGenre[0].name;
  return nameGenre;
};

export const saveLastNameMovieToStorage = (nameMovie) => {
  return window.localStorage.setItem("lastNameMovie", nameMovie);
};

export const getLastNameMovieFromStorage = () => {
  return window.localStorage.getItem("lastNameMovie");
};
