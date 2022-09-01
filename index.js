const destinationURL = "http://localhost:3000/users";

function appendToDOM(msg) {
	const body = document.querySelector("body");
	const p = document.createElement("p");
	const txt = document.createTextNode(msg);
	p.appendChild(txt);
	body.appendChild(p);
}

function submitData(username, email) {
	const userData = {
		name: username,
		email: email
	};
	const configurationObject = { 
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json"
		},
		body: JSON.stringify(userData)
	};
	return fetch(destinationURL, configurationObject)
		.then(response => response.json())
		.then(data => {
			appendToDOM(data.id);
		})
		.catch(error => {
			appendToDOM(error.msg);
		});
} 
