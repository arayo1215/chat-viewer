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

    // pinned
if (msg.pinned) {
  const pin = document.createElement("div");
  pin.className = "pin";

  const pinText = document.createElement("div");
  pinText.className = "pin-text";
  pinText.textContent = msg.text;

  pin.appendChild(pinText);

  pin.onclick = () => {
    const el = document.getElementById(msg.id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "center" });

    // 讓被跳轉的訊息短暫高亮一下（像 Telegram）
    el.animate(
      [{ filter: "brightness(1.25)" }, { filter: "brightness(1)" }],
      { duration: 550, easing: "ease-out" }
    );
  };

  pinnedArea.appendChild(pin);
}
  });

}
