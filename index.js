var section1 = document.createElement('section');
section1.id = "portfolio";
section1.classList.add("section-bg");

var div1 = document.createElement('div');
div1.classList.add('container');
div1.style.width = "1170px";


var header1 = document.createElement('header');
header1.classList.add('section-header');
header1.style.display = "block";
var h31 = document.createElement('h3');
h31.classList.add('section-title');
var text1 = document.createTextNode("Executive Candidates");
h31.appendChild(text1);
header1.appendChild(h31);
div1.appendChild(header1);

var k;
const name1 = ["Ajeet Kushwaha" , "Vedaant Coin" , "Anshika Sports"];
const posts1 = ["President, Students’ Gymkhana" , "PRESIDENT, STUDENTS’ GYMKHANA" , "GENERAL SECRETARY, GAMES AND SPORTS"];
const link1 = ["Aj-img.jpg" , "Vedaant.jpg" , "Anshika.jpg"];
for(k = 0; k < 3; k++)
{
	var div11 = document.createElement('div');
	//div11.classList.add('col-lg-4' ,  'col-md-6' , 'portfolio-item');

	//var figure1 = document.createElement('figure');
	var img2 = document.createElement('img');
	img2.src = link1[k];
	img2.style.width = "200px";
	img2.style.height = "200px";
	img2.classList.add('img-fluid' , 'center');
	//figure1.appendChild(img2);
	div11.appendChild(img2);

	var div111 = document.createElement('div');
	div111.classList.add("portfolio-info");
	var a1 = document.createElement('h2');
	var a1t = document.createTextNode(name1[k]);
	a1.appendChild(a1t);
	div111.appendChild(a1);

	//var p1 = document.createElement('p');
	//var p1t = document.createTextNode(posts1[k]);
	//p1.appendChild(p1t);
	//div111.appendChild(p1);


	div11.appendChild(div111);


	div1.appendChild(div11);
}
div1.appendChild(div11);

section1.appendChild(div1);
document.getElementsByTagName("body")[0].appendChild(section1);


































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
//document.getElementsByTagName("body")[0].appendChild(card1);


//document.getElementsByTagName("body")[0].appendChild(card1);
}

