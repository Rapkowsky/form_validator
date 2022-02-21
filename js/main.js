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

sendBtn.addEventListener("click", (el) => {
	el.preventDefault();

	checkForm([username, password, password2, email]);
});

clearBtn.addEventListener("click", (el) => {
	el.preventDefault();

	[username, password, password2, email].forEach((el) => {
		el.value = "";
	});
});
