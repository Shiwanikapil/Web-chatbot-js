function sendMessage() {
    let inputField = document.getElementById("user-input");
    let input = inputField.value.trim();

    if (input === "") return;

    let chatBox = document.getElementById("chat-box");

    // User message
    chatBox.innerHTML += `<div class="message user">${input}</div>`;

    inputField.value = "";

    // Typing animation
    let typing = document.createElement("div");
    typing.className = "message bot";
    typing.innerText = "Typing...";
    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        typing.remove();

        let response = getBotResponse(input);
        chatBox.innerHTML += `<div class="message bot">${response}</div>`;

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 800);
}

// Enter key support
document.getElementById("user-input")
.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        sendMessage();
    }
});