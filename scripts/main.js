function displayNumbers(list) {
	displayList.innerHTML =
		'<ul>' +
		list.map(number => `<li class="number${number}">` + number + '</li>').join('') +
		'</ul>';
}

function shuffleNumbers() {
	const newList = [...numberList].sort(() => Math.random() - 0.5);
	displayNumbers(newList);
}

function sortNumbers() {
	displayNumbers(numberList);
}

const myHeading = document.querySelector('h1');
myHeading.textContent = 'Shuffle and Sort';

const numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const displayList = document.querySelector('#list');
displayNumbers(numberList);

document.getElementById('shuffle').onclick = shuffleNumbers;
document.getElementById('sort').onclick = sortNumbers;

const displayFooter = document.querySelector('#footer');
displayFooter.innerHTML += 'Catalina Boznea';
