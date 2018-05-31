//main.js
import CustomApp from "./CustomApp";

let sArr = [
  ['X', 'O', 'O', 'X', 'X', 'X', 'O', 'O'],
  ['O', 'O', 'O', 'O', 'X', 'O', 'X', 'X'],
  ['X', 'X', 'O', 'X', 'X', 'O', 'O', 'O'],
  ['O', 'X', 'O', 'O', 'O', 'X', 'X', 'X'],
  ['O', 'O', 'X', 'X', 'X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'X', 'O', 'X', 'O'],
  ['O', 'O', 'O', 'X', 'O', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X', 'O', 'X', 'O', 'X'],
];


const draw = () => {
  for (var i = 0; i < sArr.length; i++) {
    let line = '';
    for (var n = 0; n < sArr[i].length; n++) {
      line += sArr[i][n] + " ";
    }
    console.log(line);
  }
}

const getCValue = (i, j) => {
	return sArr[i][j];
}

const addItems = (items) => {
	let count = 0;
	for (var i = 0; i < items.length; i++) {
		count += (items[i] === "X") ? 1 : 0;
	}
	return count;
}

const calculateNeighbours = (cell) => {
  const cValue = getCValue(cell.y, cell.x).toUpperCase();
	if (cValue === "X") return [];

	let i, j;
	let data = [];

	for (i = cell.y - 1; i <= cell.y + 1; i++) {
		if (i < 0 || i >= sArr.length) continue;
		for (j = cell.x - 1; j <= cell.x + 1; j++) {
			if (j < 0 || j >= sArr[0].length) continue;
			data.push(getCValue(i, j));
		}
	}
	return data;
}

const init = (array) => {
	for (var i = 0; i < array.length; i++) {
		for (var n = 0; n < array[i].length; n++) {
			var totals = addItems(calculateNeighbours({	x: n,	y: i}));
			sArr[i][n] = (totals > 0) ? totals : sArr[i][n];
		}
	}

	draw();
}

//init(sArr);

const app = new CustomApp(sArr);
