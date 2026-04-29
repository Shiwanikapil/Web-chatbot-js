function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello 👋 How can I help you?";
    } 
    else if (input.includes("how are you")) {
        return "I'm just code, but I'm doing great 😄";
    } 
    else if (input.includes("your name")) {
        return "I am your AI chatbot 🤖";
    } 
    else if (input.includes("bye")) {
        return "Goodbye! Have a great day 😊";
    } 
    else {
        return "Hmm... I don't understand that yet 🤔";
    }
}