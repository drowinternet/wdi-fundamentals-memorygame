// let cards = [{
// 	rank: 'queen',
// 	suit: 'hearts',
// 	cardImage: 'images/queen-of-hearts.png'
// },{
// 	rank: 'queen',
// 	suit: 'diamonds',
// 	cardImage: 'images/queen-of-diamonds.png'
// },{
// },{
// 	rank: 'king',
// 	suit: 'hearts',
// 	cardImage: 'images/king-of-hearts.png'
// },{
// },{
// 	rank: 'king',
// 	suit: 'diamonds',
// 	cardImage: 'images/queen-of-hearts.png'
// },];

// let cardsInPlay = [];

// let cardOne = cards[0];
// cardsInPlay.push(cardOne);
// console.log("User flipped " + cardOne);

// let cardTwo = cards[2];
// cardsInPlay.push(cardTwo);
// console.log("User flipped " + cardTwo);

// function checkForMatch(){
// 		if (cardsInPlay[0] === cardsInPlay[1]) {
// 	  console.log("You found a match!");
// 	} else {
// 	  console.log("Sorry, try again.");
// 	}
// }

// function flipCard(cardId){
// 	console.log("User flipped" + cards[cardId].rank);
// 	console.log(cards[cardId].cardImage);
// 	console.log(cards[cardId].suit);
// 	cardsInPlay.push(cards[cardId].rank);
// 	checkForMatch();
// }


// function createBoard(){
// 	for (let i = 0; i < cards.length; i++) {
// 		let cardElement = document.createElement('img');
// 		 cardElement.setAttribute('src', 'images/back.png');
// 		 cardElement.setAttribute('data-id', cards[i]);
// 		 cardElement.addEventListener('click', flipCard());
// 		 appendChild().cardElement;
// 	}
// }

// createBoard()

console.log("Up and running!");


const cards = [{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},{
	rank: 'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-hearts.png'
},{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}];

let cardsInPlay = [];

function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
		  alert("You found a match! User flipped " + cardsInPlay[0] + " and " + cardsInPlay[1]);

		} else {
		  alert("Sorry, try again. User flipped " + cardsInPlay[0] + " and " + cardsInPlay[1]);

		}
}


function flipCard(){

 	let cardId = this.getAttribute('data-Id');
		console.log(cardId);
	this.setAttribute('src', cards[cardId].cardImage);

	cardsInPlay.push(cards[cardId].rank);

	 if(cardsInPlay.length === 2){
	 	checkForMatch();
	}
}

function createBoard(){
	for (let i = 0; i < cards.length; i++) {
		let cardElement = document.createElement('img');
		 cardElement.setAttribute('src', 'images/back.png');
		 cardElement.setAttribute('data-id', i);
		 cardElement.addEventListener('click', flipCard);
		 document.querySelector('#game-board').appendChild(cardElement);
	}
}

createBoard();