const form = document.getElementById("login__form");
const emailInput = document.getElementById("email");
const idadeInput = document.getElementById("Idade");
const errorMessage = document.getElementById("error-message");
const chatSection = document.getElementById("chat");


function validadeEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = emailInput.value.trim();
    const idade = parseInt(idadeInput.value.trim());
    let isValid = true;

    emailInput.style.border = "";
    idadeInput.style.border = "";
    errorMessage.className = "error-hidden";

    if (!validadeEmail(email)) {
        emailInput.style.border = "2px solid red";
        errorMessage.textContent = "Email inválido.";
        errorMessage.className = "error-show";
        isValid = false;
    }

    if (isNaN(idade) || idade < 13 || idade > 120) {
        idadeInput.style.border = "2px solid red";
        errorMessage.textContent = "Idade deve ser entre 13 e 120 anos.";
        errorMessage.className = "error-show";
        isValid = false;
    }

    if (isValid) {
        chatSection.style.display = "block"; // Mostra o chat
        document.getElementById("Login").style.display = "none"; // Esconde o login
    }
});