const  message = [
  "Te amo Muchísimo", 
  "Gracias por estar en mi vida",
  "Eres mi persona favorita",
  "Juntos por siempre",
  "Tu y yo, para siempre",
  "Tu sonrisa me ilumina",
  "Eres lo mejor que me ha pasado",
  "Cada momento contigo es mágico",
  "Siempre pienso en ti",
  "Mi corazon es tuyo",
];

function createTextBubble(){
    const bubble = document.createElement("div");
    bubble.className = "text-bubble";
    bubble.innerText = message[Math.floor(Math.random() * message.length)];

    const left = Math.random() * 80 + 10;
    const top = Math.random() *80 + 10;

    bubble.style.position = "absolute";
    bubble.style.left = left + "vw";
    bubble.style.top = top + "vh";

    const container = document.getElementById("bubbles-text");
    container.appendChild(bubble);

    setTimeout(()=> {
        const rect = bubble.getBoundingClientRect();
        if (rect.right > window.innerWidth) {
            const newLeft = window.innerWidth - rect.width - 10;
            bubble.style.left = '${newLeft}px';
        }
        if (rect.bottom > window.innerHeight) {
            const newTop = window.innerheight - rect.height - 10;
            bubble.style.top = '${newTop}px';
        }
        if (rect.left < 0) {
            bubble.style.left = '10px';
        }
        if (rect.top < 0) {
            bubble.style.top = '10px';
        }
    },10);

    setTimeout(() => {
        bubble.remove();
    }, 8000);
}

setInterval(createTextBubble, 500);

