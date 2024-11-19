const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

function speak(sentence) {
  const text_speak = new SpeechSynthesisUtterance(sentence);

  text_speak.rate = 1;
  text_speak.pitch = 1;

  window.speechSynthesis.speak(text_speak);
}

function wishMe() {
  var day = new Date();
  var hr = day.getHours();

  if (hr >= 0 && hr < 12) {
    speak("Good Morning SIR");
  } else if (hr == 12) {
    speak("Good noon SIR");
  } else if (hr > 12 && hr <= 17) {
    speak("Good Afternoon SIR");
  } else {
    speak("Good Evening SIR");
  }
}

window.addEventListener("load", () => {
  speak("Activating OPTIMUS PRIME");
  speak("Going online");
  wishMe();
});

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  speakThis(transcript.toLowerCase());
};

btn.addEventListener("click", () => {
  recognition.start();
});

function speakThis(message) {
  const speech = new SpeechSynthesisUtterance();

  speech.text = "I did not understand what you said please try again";

  if (message.includes("hey") || message.includes("hello")) {
    const finalText = "Oh Hello SIR";
    speech.text = finalText;
  } else if (message.includes("how are you")) {
    const finalText = "I am fine SIR tell me how can i help you";
    speech.text = finalText;
  } else if (message.includes("how was your day")) {
    const finalText = "My day was good How can i help you";
    speech.text = finalText;
  } else if (message.includes("Who are you")) {
    const finalText = "I am your personel assitant";
    speech.text = finalText;
  } else if (message.includes("What are you doing")) {
    const finalText = "Nothing, tell me what can i do for you";
    speech.text = finalText;
  } else if (message.includes("what can you do")) {
    const finalText = "i can do anything whatever you want";
    speech.text = finalText;
  } else if (message.includes("name")) {
    const finalText = "My name is OPTIMUS PRIME.";
    speech.text = finalText;
  } else if (message.includes("open google")) {
    window.open("https://google.com", "_blank");
    const finalText = "Opening Google";
    speech.text = finalText;
  } else if (message.includes("open youtube")) {
    window.open("https://youtube.com", "_blank");
    const finalText = "Opening youtube";
    speech.text = finalText;
  } else if (message.includes("open amazon")) {
    window.open("https://www.amazon.in", "_blank");
    const finalText = "Opening amazon";
    speech.text = finalText;
  } else if (message.includes("open flipkart")) {
    window.open("https://www.flipkart.com", "_blank");
    const finalText = "Opening flipkart";
    speech.text = finalText;
  } else if (message.includes("open instagram")) {
    window.open("https://instagram.com", "_blank");
    const finalText = "Opening instagram";
    speech.text = finalText;
  } else if (message.includes("open whatsapp")) {
    window.open("https://whatsapp.com", "_blank");
    const finalText = "Opening whatsapp";
    speech.text = finalText;
  } else if (message.includes("open spotify")) {
    window.open("https://spotify.com", "_blank");
    const finalText = "Opening spotify";
    speech.text = finalText;
  } else if (message.includes("open myntra")) {
    window.open("https://myntra.com", "_blank");
    const finalText = "Opening myntra";
    speech.text = finalText;
  } else if (message.includes("open gmail")) {
    window.open("https://gmail.com", "_blank");
    const finalText = "Opening gmail";
    speech.text = finalText;
  } else if (message.includes("open facebook")) {
    window.open("https://facebook.com", "_blank");
    const finalText = "Opening facebook";
    speech.text = finalText;
  } else if (message.includes("open twitter")) {
    window.open("https://twitter.com", "_blank");
    const finalText = "Opening twitter";
    speech.text = finalText;
  } else if (message.includes("open netflix")) {
    window.open("https://netflix.com", "_blank");
    const finalText = "Opening netflix";
    speech.text = finalText;
  } else if (
    message.includes("what is") ||
    message.includes("who is") ||
    message.includes("what are")
  ) {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "This is what i found on internet regarding " + message;
    speech.text = finalText;
  } else if (message.includes("wikipedia")) {
    window.open(
      `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
      "_blank"
    );
    const finalText = "This is what i found on wikipedia regarding " + message;
    speech.text = finalText;
  } else if (message.includes("time")) {
    const time = new Date().toLocaleString(undefined, {
      hour: "numeric",
      minute: "numeric",
    });
    const finalText = time;
    speech.text = finalText;
  } else if (message.includes("date")) {
    const date = new Date().toLocaleString(undefined, {
      month: "short",
      day: "numeric",
    });
    const finalText = date;
    speech.text = finalText;
  } else if (message.includes("calculator")) {
    window.open("Calculator:///");
    const finalText = "Opening Calculator";
    speech.text = finalText;
  } else {
    window.open(
      `https://www.google.com/search?q=${message.replace(" ", "+")}`,
      "_blank"
    );
    const finalText = "I found some information for " + message + " on google";
    speech.text = finalText;
  }

  speech.volume = 1;
  speech.pitch = 1;
  speech.rate = 1;

  window.speechSynthesis.speak(speech);
}

// const btn = document.querySelector(".talk");
// const content = document.querySelector(".content");

// function speak(sentence) {
//   const text_speak = new SpeechSynthesisUtterance(sentence);

//   text_speak.rate = 1;
//   text_speak.pitch = 1;

//   window.speechSynthesis.speak(text_speak);
// }

// function wishMe() {
//   var day = new Date();
//   var hr = day.getHours();

//   if (hr >= 0 && hr < 12) {
//     speak("Good Morning SIR");
//   } else if (hr == 12) {
//     speak("Good noon SIR");
//   } else if (hr > 12 && hr <= 17) {
//     speak("Good Afternoon SIR");
//   } else {
//     speak("Good Evening SIR");
//   }
// }

// window.addEventListener("load", () => {
//   speak("Activating OPTIMUS PRIME");
//   speak("Going online");
//   wishMe();
// });

// const SpeechRecognition =
//   window.SpeechRecognition || window.webkitSpeechRecognition;
// const recognition = new SpeechRecognition();

// recognition.onresult = (event) => {
//   const current = event.resultIndex;
//   const transcript = event.results[current][0].transcript;
//   content.textContent = transcript;
//   speakThis(transcript.toLowerCase());
// };

// btn.addEventListener("click", () => {
//   recognition.start();
// });

// function speakThis(message) {
//   const speech = new SpeechSynthesisUtterance();

//   speech.text = "I did not understand what you said please try again";

//   if (message.includes("hey") || message.includes("hello")) {
//     const finalText = "Oh Hello SIR";
//     speech.text = finalText;
//   } else if (message.includes("how are you")) {
//     const finalText = "I am fine SIR tell me how can i help you";
//     speech.text = finalText;
//   } else if (message.includes("how was your day")) {
//     const finalText = "My day was good How can i help you";
//     speech.text = finalText;
//   } else if (message.includes("Who are you")) {
//     const finalText = "I am your personel assitant";
//     speech.text = finalText;
//   } else if (message.includes("What are you doing")) {
//     const finalText = "Nothing, tell me what can i do for you";
//     speech.text = finalText;
//   } else if (message.includes("what can you do")) {
//     const finalText = "i can do anything whatever you want";
//     speech.text = finalText;
//   } else if (message.includes("name")) {
//     const finalText = "My name is OPTIMUS PRIME.";
//     speech.text = finalText;
//   } else if (message.includes("open google")) {
//     window.open("https://google.com", "_blank");
//     const finalText = "Opening Google";
//     speech.text = finalText;
//   } else if (message.includes("open youtube")) {
//     window.open("https://youtube.com", "_blank");
//     const finalText = "Opening youtube";
//     speech.text = finalText;
//   } else if (message.includes("open amazon")) {
//     window.open("https://www.amazon.in", "_blank");
//     const finalText = "Opening amazon";
//     speech.text = finalText;
//   } else if (message.includes("open flipkart")) {
//     window.open("https://www.flipkart.com", "_blank");
//     const finalText = "Opening flipkart";
//     speech.text = finalText;
//   } else if (message.includes("open instagram")) {
//     window.open("https://instagram.com", "_blank");
//     const finalText = "Opening instagram";
//     speech.text = finalText;
//   } else if (message.includes("open whatsapp")) {
//     window.open("https://whatsapp.com", "_blank");
//     const finalText = "Opening whatsapp";
//     speech.text = finalText;
//   } else if (message.includes("open spotify")) {
//     window.open("https://spotify.com", "_blank");
//     const finalText = "Opening spotify";
//     speech.text = finalText;
//   } else if (message.includes("open myntra")) {
//     window.open("https://myntra.com", "_blank");
//     const finalText = "Opening myntra";
//     speech.text = finalText;
//   } else if (message.includes("open gmail")) {
//     window.open("https://gmail.com", "_blank");
//     const finalText = "Opening gmail";
//     speech.text = finalText;
//   } else if (message.includes("open facebook")) {
//     window.open("https://facebook.com", "_blank");
//     const finalText = "Opening facebook";
//     speech.text = finalText;
//   } else if (message.includes("open twitter")) {
//     window.open("https://twitter.com", "_blank");
//     const finalText = "Opening twitter";
//     speech.text = finalText;
//   } else if (message.includes("open netflix")) {
//     window.open("https://netflix.com", "_blank");
//     const finalText = "Opening netflix";
//     speech.text = finalText;
//   } else if (
//     message.includes("what is") ||
//     message.includes("who is") ||
//     message.includes("what are")
//   ) {
//     window.open(
//       `https://www.google.com/search?q=${message.replace(" ", "+")}`,
//       "_blank"
//     );
//     const finalText = "This is what i found on internet regarding " + message;
//     speech.text = finalText;
//   } else if (message.includes("wikipedia")) {
//     window.open(
//       `https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`,
//       "_blank"
//     );
//     const finalText = "This is what i found on wikipedia regarding " + message;
//     speech.text = finalText;
//   } else if (message.includes("time")) {
//     const time = new Date().toLocaleString(undefined, {
//       hour: "numeric",
//       minute: "numeric",
//     });
//     const finalText = time;
//     speech.text = finalText;
//   } else if (message.includes("date")) {
//     const date = new Date().toLocaleString(undefined, {
//       month: "short",
//       day: "numeric",
//     });
//     const finalText = date;
//     speech.text = finalText;
//   } else if (message.includes("calculator")) {
//     window.open("Calculator:///");
//     const finalText = "Opening Calculator";
//     speech.text = finalText;
//   } else {
//     window.open(
//       `https://www.google.com/search?q=${message.replace(" ", "+")}`,
//       "_blank"
//     );
//     const finalText = "I found some information for " + message + " on google";
//     speech.text = finalText;
//   }

//   speech.volume = 1;
//   speech.pitch = 1;
//   speech.rate = 1;

//   window.speechSynthesis.speak(speech);
// }
