class Player {
	constructor(name, age, type, strength, imageLink="placeholder.png") {
		this.name=name;
		this.age=age;
		this.type=type;
		this.strength=strength;
		this.imageLink=imageLink;
	}
}

let playersArr = []
playersArr.push(new Player("Manu", 44, "premium", 27.85, "macron.jpg"));
playersArr.push(new Player("Marine", 53, "premium", 23.15, "lepen.jpg"));
playersArr.push(new Player("Jean-Luc", 70, "premium", 21.95, "melenchon.jpg"));
playersArr.push(new Player("Eric", 63, "normal", 7.07, "zemmour.jpg"));
playersArr.push(new Player("Valérie", 54, "normal", 4.78, "regresse.jpg"));
playersArr.push(new Player("Yannick", 54, "normal", 4.63, "jadot.jpg"));
playersArr.push(new Player("Jean", 66, "normal", 3.13, "lasalle.jpg"));
playersArr.push(new Player("Fabien", 52, "premium", 2.28, "roussel.jpg"));
playersArr.push(new Player("Nico", 61, "normal", 2.06, "dupont-aignan.jpg"));
playersArr.push(new Player("Anne", 62, "normal", 1.75, "hidalgo.jpg"));
playersArr.push(new Player("Philou", 55, "normal", 0.77, "poutou.jpg"));
playersArr.push(new Player("Nath", 52, "normal", 0.56, "arthaud.jpg"));

console.log(playersArr);

function displayJoueur(joueur, reverseName=false) {
	let resultStr="";

	if(reverseName) {
		resultStr+="<img class=\"playerImage\" src=\"images/"+joueur.imageLink+"\">\n";
		resultStr+="<div class=\"playerName\">"+joueur.name.split("").reverse().join("")+"</div>\n";
		resultStr+="<div class=\"playerAge\">snA "+joueur.age.toString().split("").reverse().join("")+"</div>\n";
	} else {
		resultStr+="<img class=\"playerImage\" src=\"images/"+joueur.imageLink+"\">\n";
		resultStr+="<div class=\"playerName\">"+joueur.name+"</div>\n";
		resultStr+="<div class=\"playerAge\">"+joueur.age+" Ans</div>\n";
	}

	return resultStr;
}

function loader() {
	joueur1=playersArr[Math.floor(Math.random()*playersArr.length)];
	joueur2=playersArr[Math.floor(Math.random()*playersArr.length)];
	let revName=false;
	if(joueur1===joueur2) {
		revName=true;
	}
	/*console.log(joueur1);
	console.log(joueur2);*/



	refDivJ1 = document.getElementById("joueur1");
	refDivJ2 = document.getElementById("joueur2");
	refResultat = document.getElementById("resultat");

	refDivJ1.innerHTML = displayJoueur(joueur1);
	refDivJ2.innerHTML = displayJoueur(joueur2, revName);
	refResultat.innerHTML = "";

	refDivJ1.style.transform = "none";
	refDivJ2.style.transform = "none";
	refDivJ1.style.color = "#1D1D1D";
	refDivJ2.style.color = "#1D1D1D";
	refDivJ1.style.backgroundColor="#c6c4b8";
	refDivJ2.style.backgroundColor="#c6c4b8";
}

function startFight() {
	refDivJ1.style.transform="rotate(3deg)";
	refDivJ2.style.transform="rotate(-3deg)";

	if((joueur1.type>joueur2.type) || ((joueur1.strength>joueur2.strength) && (joueur1.type===joueur1.type))) {
		//window.alert(joueur1.name+" a gagné");

		refDivJ2.style.backgroundColor="darkred"
		refDivJ2.style.color="white";

		refDivJ1.style.backgroundColor="green"
		refDivJ1.style.color="white";

		refResultat.innerHTML=joueur1.name+" gagne";

	} else if((joueur2.type>joueur1.type) || ((joueur2.strength>joueur1.strength) && (joueur2.type===joueur1.type))) {
		//window.alert(joueur2.name+" a gagné");

		refDivJ1.style.backgroundColor="darkred"
		refDivJ1.style.color="white";

		refDivJ2.style.backgroundColor="green"
		refDivJ2.style.color="white";

		refResultat.innerHTML=joueur2.name+" gagne";

	} else {
		//window.alert("Egalité !");

		refResultat.innerHTML="Egalité";
	}
}