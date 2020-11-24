/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


function getDogImage(breed) {
  fetch(`https://dog.ceo/api/breed/${breed}/images/random/1`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson) {
  console.log(responseJson);

  for(let dog of responseJson.message){
    $('.results').append(`<img src="${dog}" class="results-img" width="200" height="auto">`);
  }
  $('.results').removeClass('hidden');
  
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogs = $('#breed').val();
    let breed = dogs.toLowerCase();
    getDogImage(breed);
  });
}

function main() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
}

$(main);