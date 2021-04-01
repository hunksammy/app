const ul = document.querySelector("ul");
const submit = document.querySelector("#submit");
const name = document.querySelector("#name");
const gender = document.querySelectorAll('input[name="gender"]');
const duration = document.querySelector("#duration");
const faveAttribute = document.querySelector("#faveAttribute");
const leastFaveAttribute = document.querySelector("#leastFaveAttribute");
const error = document.querySelector(".error");
var data = JSON.parse(localStorage.getItem("submissions"));
let submissions;

if (localStorage.getItem("submissions")) {
	submissions = data;
} else {
	submissions = [];
}

function clearForm() {
	name.value = "";
	duration.value = "";
	faveAttribute.value = "";
	leastFaveAttribute.value = "";
	for(var i=0;i<gender.length;i++) {
		gender[i].checked = false;
	};
}

submit.addEventListener("click", (e) => {
	e.preventDefault();
	
	//check if radio button is checked
	for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
       var genderChecked = gender[i].value;  
    }
	};
	
	formInput = {
		name: name.value,
		gender: genderChecked,
		duration: duration.value,
		faveAttr: faveAttribute.value,
		LeastFaveAttr: leastFaveAttribute.value
	};
	
	if (name.value === ""|| genderChecked===undefined || duration.value === "" || faveAttribute.value === "" || leastFaveAttribute.value === "") {
		error.classList.add("active");
	} else {
		error.classList.remove("active");
		submissions.push(formInput);
		localStorage.setItem("submissions", JSON.stringify(submissions));
		const li = document.createElement("li");
		li.innerHTML = `<span>Name: ${formInput.name}</span><span class="gender">Gender: ${formInput.gender}</span><span>Length of friendship: ${formInput.duration}</span><span>Favorite Attribute: ${formInput.faveAttr}</span><span>Least Favorite Attribute: ${formInput.LeastFaveAttr}</span>`;
		ul.appendChild(li);
		addGender();
		clearForm();
	};
	
});

// Code for when the page reloads
data.forEach((formInput) => {
	const li = document.createElement("li");
	li.innerHTML = `<span>Name: ${formInput.name}</span><span class="gender">Gender: ${formInput.gender}</span><span>Length of friendship: ${formInput.duration}</span><span>Favorite Attribute: ${formInput.faveAttr}</span><span>Least Favorite Attribute: ${formInput.LeastFaveAttr}</span>`;
	ul.appendChild(li);
});


function addGender() {
	const genderClass = document.querySelectorAll(".gender");
	return genderClass.forEach((element) => {
		if (element.innerText === "Gender: female") {
			element.parentNode.classList.add("female");
		} else if (element.innerText === "Gender: male") {
			element.parentNode.classList.add("male");
		} else {
			element.parentNode.classList.add("nonbinary");
		}
	});
}
addGender();