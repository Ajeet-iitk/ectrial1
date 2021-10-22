var i;

const name = ["Ajeet","Big Bro","Sis"];
for(i=0; i < 3 ; i++)
{




var card1 = document.createElement("div");
card1.id = "see";
card1.classList.add('w3-card-4');

var header1 = document.createElement('header');
header1.classList.add('w3-container' , 'w3-light-grey');
var h3text = document.createElement('h3');
var h3text1 = document.createTextNode("hola");
h3text.appendChild(h3text1);
header1.appendChild(h3text);
card1.appendChild(header1);

var card2 = document.createElement('div');
card2.classList.add('w3-container');
var img1 = document.createElement('img');
img1.src = "Aj-img.jpg";
img1.style.width = "200px";
img1.style.height = "200px";
card2.appendChild(img1);
card1.appendChild(card2);

var h1text = document.createElement('P');
var text1 = document.createTextNode("Name : " +name[i]);
h1text.appendChild(text1);
card1.appendChild(h1text);
//document.getElementById('see').setAttribute("class", w3-cards-4);
document.getElementsByTagName("body")[0].appendChild(card1);







document.getElementsByTagName("body")[0].appendChild(card1);
}