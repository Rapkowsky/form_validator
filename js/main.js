const username = document.querySelector("#username");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password-repeat");
const email = document.querySelector("#email");
const sendBtn = document.querySelector(".send");
const clearBtn = document.querySelector(".clear");
const popup = document.querySelector(".popup");

const checkForm = (input) => {
	input.forEach((el) => {
		if (el.value === "") {
			showError(el, el.placeholder);
		} else {
			removeError(el);
		}
	});
};

const showError = (input, msg) => {
	const formBox = input.parentElement;
	const errorMsg = formBox.querySelector(".error-text");
	formBox.classList.add("error");
	errorMsg.textContent = msg;
};

const removeError = (input) => {
	const formBox = input.parentElement;
	formBox.classList.remove("error");
};

const checkLength = (input, minValue) => {
	if (input.value.length < minValue) {
		showError(input, `${input.previousElementSibling.innerText.slice(0, -1)} musi składać się z ${minValue} znaków.`);
	}
};

const checkPassword = (pass1, pass2) => {
	if (pass1.value !== pass2.value) {
		showError(pass2, "Hasła do siebie nie pasują.");
	}
};

const checkMail = (email) => {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

	if (re.test(email.value)) {
		removeError(email);
	} else {
		showError(email, "E-mail jest niepoprawny");
	}
};



sendBtn.addEventListener("click", (el) => {
	el.preventDefault();

	checkForm([username, password, password2, email]);
	checkLength(username, 3);
	checkLength(password, 8);
	checkPassword(password, password2);
	checkMail(email);
});

clearBtn.addEventListener("click", (el) => {
	el.preventDefault();

	[username, password, password2, email].forEach((el) => {
		el.value = "";
		removeError(el);
	});
});
