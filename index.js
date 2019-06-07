const talk = document.querySelector(".talk");
const content = document.querySelector(".content");
const repo = "https://codeburst.io/html5-speech-recognition-api-670846a50e92";

const greetings = "hello how are you";
const Location = "what is your location";

if (
  (SpeechSynthesisUtterance && window.SpeechRecognition) ||
  window.webkitSpeechRecognition
) {
  console.log("looking good");
} else {
  alert("use google chrome or update your browser");
}
const speechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("voce recognition is started you can speech");
};
//  read only

// recognition.onresult = event => {
//   console.log(event);
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;
//   content.textContent = transcript;
//   Cortana(transcript);
//   console.log(transcript);
// };

recognition.onresult = event => {
  console.log(event);
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  q1(transcript);
  console.log(transcript);
};

talk.addEventListener("click", () => {
  recognition.start();
});

const Hello = data => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = data;
  speech.rate = 1;
  speech.pitch = 1;

  speech.volume = 1;
  //speech.voice =

  window.speechSynthesis.speak(speech);
};
const q1 = data => {
  const speech = new SpeechSynthesisUtterance();
  speech.text = data;
  speech.rate = 1;
  speech.pitch = 1;
  speech.volume = 1;
  //speech.voice =

  window.speechSynthesis.speak(speech);
};

Hello(greetings);
Hello(Location);
