'use strict';
export default class CustomApp {

	constructor(arr) {
		console.log('CustomApp instance created...');
		this.arr = arr;
		this.start(this.arr);
	};

	start(array) {
		for (var i = 0; i < array.length; i++) {
			for (var n = 0; n < array[i].length; n++) {
				var totals = this.addItems(
					this.calculateNeighbours({
						x: n,
						y: i
					}));
				this.arr[i][n] = (totals > 0) ? totals : this.arr[i][n];
			}
		}

		this.draw();
	};

	calculateNeighbours(cell) {
		const cValue = this.getCValue(cell.y, cell.x).toUpperCase();
		if (cValue === "X") return [];

		let i, j;
		let data = [];

		for (i = cell.y - 1; i <= cell.y + 1; i++) {
			if (i < 0 || i >= this.arr.length) continue;
			for (j = cell.x - 1; j <= cell.x + 1; j++) {
				if (j < 0 || j >= this.arr[0].length) continue;
				data.push(this.getCValue(i, j));
			}
		}
		return data;
	};

	addItems(items) {
		let count = 0;
		for (var i = 0; i < items.length; i++) {
			count += (items[i] === "X") ? 1 : 0;
		}
		return count;
	};

	getCValue(i, j) {
		return this.arr[i][j];
	};

	draw() {
		for (var i = 0; i < this.arr.length; i++) {
			let line = '';
			for (var n = 0; n < this.arr[i].length; n++) {
				line += this.arr[i][n] + " ";
			}
			console.log(line);
		}
	};

}
