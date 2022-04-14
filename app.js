let pageLoaded=false;

class Player {
	constructor(name, age, description, type, strength, imageLink="placeholder.png") {
		this.name=name;
		this.age=age;
		this.description=description;
		this.type=type;
		this.strength=strength;
		this.imageLink=imageLink;
	}
}

let playersArr = [] // Initialisation du tableau qui va contenir tous les joueurs.

playersArr.push(new Player("Manu", 44, "L'archéologue", "normal", 27.85, "macron.jpg"));
playersArr.push(new Player("Marine", 53, "A des actions dans l'aviation", "normal", 23.15, "lepen.jpg"));
playersArr.push(new Player("Jean-Luc", 70, "La république, c'est lui", "normal", 21.95, "melenchon.jpg"));
playersArr.push(new Player("Eric", 63, "Paye des sommes astronomiques pour changer son wiki", "normal", 7.07, "zemmour.jpg"));
playersArr.push(new Player("Valérie", 54, "A perdu 5 millions", "normal", 4.78, "regresse.jpg"));
playersArr.push(new Player("Yannick", 54, "Ecolo vite fait", "normal", 4.63, "jadot.jpg"));
playersArr.push(new Player("Jean", 66, "Possède une magnifique tondeuse", "normal", 3.13, "lasalle.jpg"));
playersArr.push(new Player("Fabien", 52, "Kiffe les dégradés de couleurs", "normal", 2.28, "roussel.jpg"));
playersArr.push(new Player("Nico", 61, "Est de droite", "normal", 2.06, "dupont-aignan.jpg"));
playersArr.push(new Player("Anne", 62, "Est de gauche", "normal", 1.75, "hidalgo.jpg"));
playersArr.push(new Player("Philou", 55, "Le crack sous crack", "normal", 0.77, "poutou.jpg"));
playersArr.push(new Player("Nath", 52, "C'est qui ?", "normal", 0.56, "arthaud.jpg"));
playersArr.push(new Player("Sylvain Pierre Durif", 1664, "Il voit danser des serpents et des singes", "superpremium", 10000, "durif.jpg"));
playersArr.push(new Player("Jacky", 86, "Change la durée de sa propre présidence", "premium", 19.88, "chirac.jpg"));
playersArr.push(new Player("Jacky (skin alternatif)", 86, "A l\'air plus vivant que ça femme", "premium", 82.21, "chirac_alt.jpg"));
playersArr.push(new Player("François", 67, "We can be do what we want to do", "premium", 28.63, "hollande.jpg"));
playersArr.push(new Player("L'autre Nico", 67, "Veut dégager la racaille au Kärcher", "premium", 31.18, "sarkozy.jpg"));
playersArr.push(new Player("Valery", 94, "Le clutcher", "premium", 32.6, "vge.jpg"));
playersArr.push(new Player("Valery (skin alternatif)", 94, "A perdu son duel contre Elisabeth II", "premium", 50.81, "vge_alt2.jpg"));
playersArr.push(new Player("Quentin", 35, "Il est dans le jeu lui ?", "superpremium", 100, "walter_white.jpg"));
playersArr.push(new Player("François Mitterand", 79, "Collectionne les premiers ministres", "premium", 34.10, "mitterand.jpg"));


// Affichage du tableau des joueurs en décommantant la ligne ci-dessous.
//console.log(playersArr);

function displayJoueur(joueur, reverseName=false) { //Cette fonction retourne le code HTML permettant d'afficher les joueurs.
//reverseName sert ici pour la blague : faire un mode mirroir de la carte du joueur2 si c'est le meme combattant que joueur 1.
	let resultStr="";
	let reverser=""

	if(reverseName) {
		reverser=" reversed";
	}
	resultStr+="<img class=\"playerImage"+reverser+"\" src=\"images/"+joueur.imageLink+"\">\n";
	resultStr+="<div class=\"playerName"+reverser+"\">"+joueur.name+"</div>\n";
	resultStr+="<div class=\"playerAge"+reverser+"\">"+joueur.age+" Ans</div>\n";
	resultStr+="<div class=\"playerDesc"+reverser+"\">"+joueur.description+"</div>\n";	

	return resultStr;
}

function loader() {
	// On affiche la notification de mise à jour si c'est le premier chargement de la page.
	if(!pageLoaded) {
		let refNotif = document.getElementById("updateNotifier");
		refNotif.style.bottom="20px";
		pageLoaded=true;
	}

	//On choisit quels joueurs se battront selon le tableau des joueurs (playersArr).
	joueur1=playersArr[Math.floor(Math.random()*playersArr.length)];
	joueur2=playersArr[Math.floor(Math.random()*playersArr.length)];
	let revName=false; //On initialise ce booléen pour savoir si on inverse le nom du joueur 2. De base on ne le fait pas, donc faux (false).
	//Puis on vérifie si les deux joueurs sont les mêmes afin de passer le booléen a vrai (true).
	if(joueur1===joueur2) {
		revName=true;
	}
	//Affichage des joueurs dans la console en décommentant les lignes ci-dessous.
	/*console.log(joueur1);
	console.log(joueur2);*/

	//On récupére les références aux éléments que l'on va vouloir modifier dans le DOM.
	refDivJ1 = document.getElementById("joueur1");
	refDivJ2 = document.getElementById("joueur2");
	refResultat = document.getElementById("resultat");

	// On change le contenu des elements que l'on a récupéré ci-dessus.
	refDivJ1.innerHTML = displayJoueur(joueur1); //On affiche le joueur1
	refDivJ2.innerHTML = displayJoueur(joueur2, revName); //On affiche le joueur2
	refResultat.innerHTML = ""; //On réinitialise le résultat.

	// On réinitialise les propriéts CSS des cartes joueurs.
	refDivJ1.style.transform = "none";
	refDivJ2.style.transform = "none";
	refDivJ1.style.color = "#1D1D1D";
	refDivJ2.style.color = "#1D1D1D";
	refDivJ1.style.backgroundColor="#c6c4b8";
	refDivJ2.style.backgroundColor="#c6c4b8";
}

function startFight() {
	//On tourne de 3 degrés les cartes des joueurs l'une vers l'autre.
	refDivJ1.style.transform="rotate(3deg)";
	refDivJ2.style.transform="rotate(-3deg)";

	// On vérifie si le joueur a gagné.
	if((joueur1.type>joueur2.type) || ((joueur1.strength>joueur2.strength) && (joueur1.type===joueur1.type))) {
		// En décommentant la ligne ci-dessus, on produit une alerte du gagnant.
		//window.alert(joueur1.name+" a gagné");

		// On change les couleurs de la carte du perdant pour du blanc sur rouge.
		refDivJ2.style.backgroundColor="darkred";
		refDivJ2.style.color="white";

		// On change les couleurs de la carte du perdant pour du blanc sur vert.
		refDivJ1.style.backgroundColor="green";
		refDivJ1.style.color="white";

		// On récupère le prénom du vainqueur et on l'affiche dans la case résultat
		refResultat.innerHTML=joueur1.name.split(" ")[0]+"<br>a gagné";

	} else if((joueur2.type>joueur1.type) || ((joueur2.strength>joueur1.strength) && (joueur2.type===joueur1.type))) {
		// En décommentant la ligne ci-dessus, on produit une alerte du gagnant.
		//window.alert(joueur2.name+" a gagné");

		// On change les couleurs de la carte du perdant pour du blanc sur rouge.
		refDivJ1.style.backgroundColor="darkred";
		refDivJ1.style.color="white";

		// On change les couleurs de la carte du perdant pour du blanc sur vert.
		refDivJ2.style.backgroundColor="green";
		refDivJ2.style.color="white";

		// On récupère le prénom du vainqueur et on l'affiche dans la case résultat
		refResultat.innerHTML=joueur2.name.split(" ")[0]+"<br>a gagné";

	} else {
		// En décommentant la ligne ci-dessus, on produit une alerte qui annonce l'égalité.
		//window.alert("Egalité !");

		// On affiche l'égaité dans la div des résultats.
		refResultat.innerHTML="Egalité";
	}
}

function hideNotifier() {
	let refNotif = document.getElementById("updateNotifier");
	refNotif.style.bottom="-100%";
}