var gridItems = document.querySelectorAll(".grid-item");
gridItems.forEach(function(item) {
  item.addEventListener("click", function() {
    var text = this.getAttribute("data-text");
    var utterance = new SpeechSynthesisUtterance(text);
    var voices = window.speechSynthesis.getVoices();
    utterance.voice = voices[0];
    window.speechSynthesis.speak(utterance);
  });
});

document.getElementById("toggleButton").addEventListener("click", function() {
  var form = document.getElementById("customTextPopup");
  if (form.style.display === "block") {
    form.style.display = "none";
  } else {
    form.style.display = "block";
  }
});

document.getElementById("TextForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  var text = document.getElementById("customTextInput").value;
  var voiceIndex = document.getElementById("voices").selectedIndex;
  var voices = window.speechSynthesis.getVoices();
  
  var utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voices[voiceIndex];
  window.speechSynthesis.speak(utterance);
});


document.getElementById("closeButton").addEventListener("click", function() {
  var form = document.getElementById("customTextPopup");
  form.style.display = "none";
});