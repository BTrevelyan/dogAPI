/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */


function getDogImage(dogs) {
  fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
    .then(response => response.json())
    .then(responseJson => 
      displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(responseJson, dogs) {
  console.log(responseJson);

  for(let dog of responseJson.message){
    $('.results').append(`<img src="${dog}" class="results-img" width="200" height="auto">`);
  }
  $('.results').removeClass('hidden');
  
}

function getDogBreed(breed){
  let dog = breed.toLowerCase();
  const baseUrl = `https://dog.ceo/api/breed/${breed}/images/random`;

  fetch(baseUrl).then((response)=>response.json()).then((json)=>{
    if(json.code){
      $('.breed').html(json.message);
    }
    else(
      $('.breed').html('<img src=""')
    )
    console.log(breed);
  })
  .catch(err=>{
    console.log(err);
    $('.breed').html(err.message);
  })
}


function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    let dogs = $(event.currentTarget).find('input').val();
    getDogImage(dogs);
  });
}

function main() {
  console.log('App loaded! Waiting for submit!');
  watchForm();
  getDogBreed();
}

$(main);