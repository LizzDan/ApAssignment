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

const body = document.body
const div = document.createElement("div")
div.innerHTML = "<fieldset>\
<legend><b> Retrieve Dog Data</legend>\
<input placeholder= Dog-Breed/Type>\<button>Retrieve</button>"

body.append(div)

const Dogs = document.createElement('Dogs')
Dogs.innerHTML = "<h3>Are you a Dog lovers <br> See below different breeds/types of Dogs in every few seconds</h3>"
div.append(Dogs)


function fetchDog(){
  fetch('https://dog.ceo/api/breeds/image/random')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    //const canvas = document.createElement("canvas");
    const dogImage = document.createElement('img');
    dogImage.src = data.message;
    //canvas.width = 200;
    //canvas.height = 150;

    document.body.appendChild(dogImage);
  })
  .catch(e => console.error(e))
}
fetchDog();

var moon = document.getElementById('moon');
moon.onclick = function(){
  document.body.classList.toggle('dark-theme');
  if (document.body.classList.contains('dark-theme')){
    
  moon.src = "sun-icon.png";
} else{
  moon.src = "moon-icon.png";
}
}

setTimeout(() => {
  document.location.reload();
}, 5000);