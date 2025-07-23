function ValidaRegistro(e) {
    e.preventDefault();
    
    const emailInput = document.getElementById("email");
    const idadeInput = document.getElementById("Idade");
    const errorMessage = document.getElementById("error-message");
    const chatSection = document.getElementById("chat");
    
    const email = emailInput.value.trim();
    const idadeStr = idadeInput.value.trim();
    
    let isValid = true;
    emailInput.style.border = "";
    idadeInput.style.border = "";
    errorMessage.className = "error-hidden";
    errorMessage.textContent = "";

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        emailInput.style.border = "2px solid red";
        errorMessage.textContent = "Email inválido. Use o formato exemplo@dominio.com";
        errorMessage.className = "error-show";
        isValid = false;
    }

    const idade = parseInt(idadeStr, 10);
    if (idadeStr === "" || isNaN(idade)) {
        idadeInput.style.border = "2px solid red";
        errorMessage.textContent = "Por favor, insira uma idade válida";
        errorMessage.className = "error-show";
        isValid = false;
    } else if (idade <= 12) {
        idadeInput.style.border = "2px solid red";
        errorMessage.textContent = "Você deve ter pelo menos 13 anos para acessar";
        errorMessage.className = "error-show";
        isValid = false;
    } else if (idade > 120) {
        idadeInput.style.border = "2px solid red";
        errorMessage.textContent = "Idade inválida. O máximo permitido é 120 anos";
        errorMessage.className = "error-show";
        isValid = false;
    }

    if (isValid) {
        chatSection.style.display = "block";
        document.getElementById("Login").style.display = "none";
        return true;
    }
    
    return false;
}