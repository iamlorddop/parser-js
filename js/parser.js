window.addEventListener('DOMContentLoaded',() => {
	const body = document.querySelector('body');
	let textNodes = []; // result

	function findNodes(element) {
		element.childNodes.forEach(node => {
			if (node.nodeName.match(/^H\d/)) { // find all headers
				const obj = {
					header: node.nodeName,
					content: node.textContent
				}
				textNodes.push(obj);
			} else {
				findNodes(node);
			}
		});
	}

	findNodes(body);

	fetch('https://jsonplaceholder.typicode.com/posts', { // send data to server
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(textNodes)
	})
	.then(response => response.json())
	.then(json => console.log(json));
});