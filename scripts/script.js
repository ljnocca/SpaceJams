// 1. Set the stage/Intro
// 2. Name your player
// 3. Choose a specialty
// 4. Scenario + options
// 5. Class check vs option requirements
// 6. Outcome

//************************
//PLAYER AND ALIEN PROFILES
//************************

var player = {
	name: window.prompt('what is your name?'),
	shooting: 5,
	defense: 5
}

function BullyCreator(name, shooting, defense){
	this.name = name;
	this.shooting = shooting;
	this.defense = defense
}

var pound = new BullyCreator('Poud', 1, 9);
var bang = new BullyCreator('Bang', 10, 0);
var bupkus = new BullyCreator('Bupkus', 3, 7);
var blanko = new BullyCreator('Blanko', 7, 3);
var nawt = new BullyCreator('Nawt', 2, 8);

var aliens = [pound, bang, bupkus, blanko, nawt];

//************************
//PLAYER DECIDES HIS STRENGTH
//************************

function introScript(){
	var playerStrength = window.prompt(player.name + ', nice to meet you! As an avid basketball fan, you have been practicing your "game" for quite some time now. However, if you had to pick one attribute to shine in, would you pick a) shooting OR b) defense?').toLowerCase();

	if (playerStrength!== 'shooting' && playerStrength!== 'defense'){
		alert('sorry you must pick either shooting or defense!')
		introScript()
	}
	else if(playerStrength==='shooting'){
		return player.shooting++
	}
	else if(playerStrength==='defense'){
		return player.defense++
	}
}

introScript()

console.log(player)


window.alert('Walking through west Philladelphia on your way home, when you suddenly come accross a group a bully-aliens playing basketball at the playground you walk through as a shortcut. Unfortunately, this is your only way home. They challenge you to a game of 1 on 1. They give you a few sets of rules....')
window.alert('1) After each point, you must randomly pick a number 1 through 5. Each number represents one of the aliens and the number you pick is who you must play each point. 2) Make it, take it. 3) The first player to 10 points wins. 4) If you win, you get to go home. If not, they kidnap all your skills and render you a worthless player!!!')

window.alert('You flip a coin to determine who gets ball first...')

var ballPosession = ''

function coinflip(){
	var coin = Math.random()
	if (coin>=0.5){
		window.alert('Looks like you get the ball first!')
		ballPosession = 'player'
	}
	else{
		window.alert('Looks like the alien gets the ball first!')
		ballPosession = 'alien'
	}	
}

coinflip()

var score = {
	player: 0,
	aliens: 0
}

function randomOpponent(){
	var opponentArr = Math.floor(Math.random()*5);
	var currentOpponent = aliens[opponentArr];
	window.alert("Your random alien opponent for this point is: " + currentOpponent.name + ". His stats are as follows: Shooting - " + currentOpponent.shooting + ", and Defense - " + currentOpponent.defense);
	playPoint(currentOpponent)
}

randomOpponent()

//PLAY GAME & SCORE KEEPING



function playPoint(currentOpponent){
	if (ballPosession === 'player'){
		window.alert("you're on offense. Let's see how you do versus " + currentOpponent.name)
		if (player.shooting > currentOpponent.defense){
			window.alert("Nice! You drill the jumper over " + currentOpponent.name + ". Great Shot! You get the point and keep the ball!")
			score.player++;
			ballPosession = 'player';
			checkScore(score);
		}
		else{
			window.alert("Oh no! " + currentOpponent.name + " blocks your shot and takes the ball. Posession aliens!")
			ballPosession = 'alien';
			checkScore(score);
		}
	}

	else {
		window.alert("you're on defense. Let's see how you do versus " + currentOpponent.name)
		if (currentOpponent.shooting > player.defense){
			window.alert("Oh no! " + currentOpponent.name + " sinks the jumpshot right over you! Point & posession aliens!")
			score.aliens++;
			ballPosession = 'aliens';
			checkScore(score);
		}
		else{
			window.alert("Nice! You block " + currentOpponent.name + "'s shot emphatically and take the ball! Posession is yours!")
			ballPosession = 'player';
			checkScore(score);
		}
	}
}




function checkScore(score){
	if (score.player >= 10){
		window.alert('Congratulations, '+ player.name + ', you defeated the aliens' + score.player + ' to ' + score.aliens +'!')
		return
	}
	else if (score.aliens >= 10){
		window.alert("I'm sorry, but you have been defeated by the aliens " + score.aliens + ' to ' + score.player)
		return
	}
	else{
		window.alert("Current Score:" + player.name + ':' + score.player + ' - ' + score.aliens + ': Aliens')
		randomOpponent(score);
	}
}
