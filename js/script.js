var url = 'http://api.icndb.com/jokes/random',
	button = document.getElementById('get-joke'),
	paragraph = document.getElementById('joke'),
	ident = document.getElementById('identification');

button.addEventListener('click', getJoke);

function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.addEventListener('load', function(){
    var response = JSON.parse(xhr.response).value;
    paragraph.innerText = response.joke;
    ident.innerText = 'joke id: ' +response.id;
  });
  xhr.send();
}