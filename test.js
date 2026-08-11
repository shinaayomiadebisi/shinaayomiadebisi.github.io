function reverseWords() {
  let words = "Hello World".split("");
  let newWords = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newWords += words[i];
  }

  return newWords;
}
reverseWords();
console.log(reverseWords(), "reverseWord");
