document.getElementById("start-btn").addEventListener("click", () => {
  document.getElementById("start-screen").style.display = "none";
  document.getElementById("chat-screen").style.display = "block";
  renderMessages();
});

function renderMessages() {
  const container = document.getElementById("chat-container");
  const pinnedArea = document.getElementById("pinned-area");

  messages.forEach(msg => {
    const bubble = document.createElement("div");
    bubble.className = "bubble " + msg.sender;
    bubble.id = msg.id;
    bubble.innerHTML = `
      <div>${msg.text}</div>
      <span class="time">${msg.time}</span>
    `;
    container.appendChild(bubble);

    if (msg.pinned) {
      const pin = document.createElement("div");
      pin.className = "pin";
      pin.innerText = msg.text;
      pin.onclick = () => {
        document.getElementById(msg.id).scrollIntoView({behavior: "smooth"});
      };
      pinnedArea.appendChild(pin);
    }
  });
}