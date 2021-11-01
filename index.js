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

var fordiv = document.createElement('div');
fordiv.classList.add('row' , 'portfolio-container');
fordiv.style.position = "relative";
//fordiv.style.height = "1440px";
fordiv.style.display = "flex";
//fordiv.style.margin-right = "-15px";
//fordiv.style.margin-left = "-15px";


var k;
const name1 = ["Ajeet K." , "Vedaant Coin" , "Anshika Sports" , "Deepak Kumar" , "Shloka Patil" , "Anshul Singh" , "Deepesh Garg" , "Utkarsh Gupta" , "Khushbu Kishnani" , "NOTA"];
const posts1 = ["President, Students’ Gymkhana" , "PRESIDENT, STUDENTS’ GYMKHANA" , "GENERAL SECRETARY, GAMES AND SPORTS" , "GENERAL SECRETARY, GAMES AND SPORTS" , "GENERAL SECRETARY, UG ACADEMICS AND CAREER" , "GENERAL SECRETARY, MEDIA AND CULTURE" , "GENERAL SECRETARY, MEDIA AND CULTURE" , "GENERAL SECRETARY, SCIENCE AND TECHNOLOGY" , "GENERAL SECRETARY, PG ACADEMICS AND CAREER" , "NONE OF THE ABOVE"];
const link1 = ["Aj-img.jpg" , "Vedaant.jpg" , "Anshika.jpg" ,  "Deepak_photo.jpg" , "Shloka_Patil.jpg" , "Anshul_Singh.jpg" , "Deepesh_photo.jpg" , "Utkarsh.png" , "Khushbu_kishnani.jpg" , "NOTA.png"];
const html_link = ["https://eciitk.com/candidates/kartikgupta.html", "https://eciitk.com/candidates/vedaantsikka.html", "https://eciitk.com/candidates/anshikachaudhary.html" , "https://eciitk.com/candidates/deepakkumar.html" , "https://eciitk.com/candidates/shlokapatil.html" , "https://eciitk.com/candidates/anshulsingh.html" , "https://eciitk.com/candidates/deepeshgarg.html" , "https://eciitk.com/candidates/utkarshgupta.html" , "https://eciitk.com/candidates/khusbukishnani.html" , "https://eciitk.com/#portfolio"];
for(k = 0; k < 10; k++)
{
	var div11 = document.createElement('div');
	div11.classList.add('col-lg-4','col-md-6','portfolio-item');

		//div11.style.position = "absolute";
		div11.style.left =  "0px";
		div11.style.top = "0";
		//div11.style.visibility = "visible";
		//div11.style.animation-delay = "0.2s";
		//div11.style.animation-name = "fadeInUp";


	var figure1 = document.createElement('figure');
	var img2 = document.createElement('img');
	img2.src = link1[k];
	img2.style.width = "100%";
	//img2.style.height = "200px";
	img2.classList.add('img-fluid' , 'center');
	figure1.appendChild(img2);
	div11.appendChild(figure1);

	var div111 = document.createElement('div');
	div111.classList.add("portfolio-info");
	div111.style.height = "100px";
	var a1 = document.createElement('h4');
	a1.style.lineHeight = "1px";
	a1.style.marginBottom = "18px";
	var a11 = document.createElement('a');
	a11.href = html_link[k];
	a11.target = "_blank";
	a11.innerHTML = name1[k];
	a11.className = "highlight";
	a11.classList.add('HoverClass1' , 'acolor');
	//var a1t = document.createTextNode(name1[k]);
	//a11.appendChild(a1t);
	a1.appendChild(a11);
	div111.appendChild(a1);

	var p1 = document.createElement('p');
	var p1t = document.createTextNode(posts1[k]);
	p1.appendChild(p1t);
	div111.appendChild(p1);


	div11.appendChild(div111);


	
	fordiv.appendChild(div11);
}


div1.appendChild(fordiv);

section1.appendChild(div1);
document.getElementsByTagName("body")[0].appendChild(section1);






































