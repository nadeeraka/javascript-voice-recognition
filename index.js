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
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  Cortana(transcript);
  console.log(transcript);
};

talk.addEventListener("click", () => {
  recognition.start();
});

const Cortana = data => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = data;
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  window.speechSynthesis.speak(speech);
};
