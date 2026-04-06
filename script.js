function toggleMenu() {
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}

function toggleChat() {
  let body = document.getElementById("chat-body");
  body.style.display = body.style.display === "block" ? "none" : "block";
}

function sendMessage() {
  let input = document.getElementById("chat-input");
  let chatBox = document.getElementById("chat-box");

  if (input.value.trim() === "") return;

  let msg = input.value;
  chatBox.innerHTML += "<p><b>You:</b> " + msg + "</p>";

  let reply = "Ask about projects, skills or contact 🙂";

  if (msg.toLowerCase().includes("hello")) reply = "Hey there 👋";
  if (msg.toLowerCase().includes("project")) reply = "Check my projects section 🚀";
  if (msg.toLowerCase().includes("contact")) reply = "Scroll to contact section 📩";

  chatBox.innerHTML += "<p><b>Bot:</b> " + reply + "</p>";

  input.value = "";
}