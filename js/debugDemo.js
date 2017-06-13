/********************
INITIAL CODE
********************/
var user;
var numTimesRun = 0;

user = {
	username: "anonymous",
	age: 16,
	hobbies: []
};

function initializeApp() {
	numTimesRun++;

	user.username = prompt('What is your name?');
	user.age = parseInt(prompt('What is your age?'));

	while (user.hobbies.length < 3) {
		var hobby = prompt("Enter a hobby...");
		user.hobbies.push(hobby);
	}

	updatePage();
}

function updatePage() {
	var greetingEl = document.querySelector('#greeting');
	var ageEl;

	greetingEl.innerText = getGreeting(user.username);

	ageEl = document.querySelector('#age');
	ageEl.innerText = user.age;

	updateHobbies();
}

function updateHobbies() {
	var itemsHTML = "";
	for (hobby of user.hobbies) {
		itemsHTML += `<li>${ hobby }</li>`;
	}
	document.querySelector('#hobbiesList').innerHTML = itemsHTML;
}

function getGreeting(username) {
	var lastChar = username.substr(username.length - 1);
	if (lastChar === 's') {
		return "Let's debug " + username + "' Code";
	} else {
		return "Let's debug " + username + "'s Code";
	}
}

function restart(event) {
	console.log('event.target: ', event.target);
	console.log('event.currentTarget: ', event.currentTarget);

	console.log('user before: ', user);
	user = {
		username: "anonymous",
		age: 16,
		hobbies: []
	};
	console.log('user after:  ', user);

	initializeApp();
};

initializeApp();

alert("ROUTINES COMPLETE");



/********************
THE PROM PUZZLE
********************/

// function yes(x){
//   return x();
// }
// function no(x){
//   return 'yes';
// }
// function maybe(no){
//   return no;
// }
// var definitely = maybe(yes(no));
