const typedText = document.querySelector(".typed-text");
const words = ["developer", "designer", "dreamer", "reader"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    charIndex--;
    typedText.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    typedText.textContent = currentWord.substring(0, charIndex);
  }

  let typingSpeed = isDeleting ? 70 : 120;
 

  if (!isDeleting && charIndex === currentWord.length) {
    typingSpeed = 1000; ///pause before deleting
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500;
  }

  setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", type);