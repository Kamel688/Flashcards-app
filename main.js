const squareOne = document.querySelector(".one");
const squareTwo = document.querySelector(".two");
const plText = document.querySelector(".pl-text");
const enText = document.querySelector(".en-text");
const rotate = document.querySelector(".rotate");
const textBack = document.querySelector(".back");
const forgottenText = document.querySelector(".forget");
const btn = document.querySelector(".btn");
const body = document.querySelector("body")

const plWords = ["jeść", "iść", "chcieć", "myśleć", "móc"];
const enWords = ["eat", "go", "want", "think", "can"];

let count = 0;

let isNotRemember;

const showText = () => {
	if (!squareOne.classList.contains("one-rotate")) {
		plText.textContent = plWords[count];
		enText.textContent = enWords[count];
		
		if (isNotRemember) {
			let plWord = plWords[count - 1];
			let enWord = enWords[count - 1];

			plWords.push(plWord);
			enWords.push(enWord);
			isNotRemember = false;
		}
		console.log(plWords);
		count++;
	}
};

const squareRotate = () => {
	squareOne.classList.add("one-rotate");
	squareTwo.classList.add("two-rotate");
};

const back = () => {
	squareOne.classList.remove("one-rotate");
	squareTwo.classList.remove("two-rotate");
};

const pushForgottenWords = () => {
	isNotRemember = true;
	console.log('zdarzenie');
};

const checkSpace = (e) => {
	if(e.code === 'Space'){
		pushForgottenWords();
	}
}

squareOne.addEventListener("click", showText);
btn.addEventListener("click", pushForgottenWords);
body.addEventListener("keyup",checkSpace);
rotate.addEventListener("click", squareRotate);
textBack.addEventListener("click", back);
