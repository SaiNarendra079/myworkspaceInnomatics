let Inputfield= document.querySelector('.end-point-api')
let btn=document.querySelector('.search')
let movie_title=document.querySelector('.movie_name')
let movie_description=document.querySelector('.movie_desc')
let poster=document.querySelector('.poster')


function searchmovie(MovieName){

const url = `https://api.themoviedb.org/3/search/movie?query=${MovieName}&include_adult=false&language=en-US&page=1`;
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZTIyM2VjMDEwYjYzOGQ1MjgzNTRlYmI4ODczMzZjYyIsIm5iZiI6MTcyNDMwNjY2My42NzMzMjQsInN1YiI6IjY2YzZkMThjNGZhODI1MTAzZGIyZGZjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dOa66gFUmGyYI3vccWEVAoKPMxT1GV_3OlutO4HtDp8'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));
}
const apiButton= document.querySelector('.search')
apiButton.addEventListener('click',()=>{
  searchmovie(Inputfield.value)
})
