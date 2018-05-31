//main.js
import CustomApp from "./CustomApp";

const getFileContents = (data) => {
	var arr = [];
  var str = data.trim();
	str.replace(/\r?\n/g, '|').replace(/\r/g, '|').split('|').map((item) => {
		arr.push(item.split(' '));
	});
  const app = new CustomApp(arr);
}

var client = new XMLHttpRequest();
client.open('GET', '/text.txt');

client.onreadystatechange = function (evt) {
	if (client.readyState == 4 && client.status == 200) {
		getFileContents(client.responseText);
	}
}
client.send();

//const app = new CustomApp(sArr);
