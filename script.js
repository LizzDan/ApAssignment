function fetchDog(){
    fetch('https://dog.ceo/api/breeds/list/all')
    .then(reponses => reponses.json())
    .then(details =>{
        console.log(details)
        const dogimage = document.createElement('image');
        dogimage.src = details.message;
        document.body.appendChild(dogimage);
    })
    .catch(e => console.error(e))

}
fetchDog();


var url = 'https://dog.ceo/api/breeds/list/all'
    async function getData(){
    var response = await fetch(url)
    var data = await response.json()
    console.log(data)

}
getData()


var url = 'https://dog.ceo/api/breed/hound/images'
    async function getData(){
    var response = await fetch(url)
    var data = await response.json()
    console.log(data)

}
getData()

var btn = document.querySelector("#btn");
var btn = document.querySelector("btn");

function openMenu() {
  btn.classList.toggle("active");
  btn.classList.toggle("active");
}

var para = document.createElement('p');
para.textContent = 'We hope you enjoyed the ride.';

