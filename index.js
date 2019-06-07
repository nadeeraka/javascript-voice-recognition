const talk = document.querySelector(".talk");
const content = document.querySelector(".content");

const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("voce recognition is started you can speech");
};

recognition.onresult = event => {
  console.log(event);
};

talk.addEventListener("click", () => {
  recognition.start();
});
