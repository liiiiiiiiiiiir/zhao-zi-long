const GreetWords = [
  "nice to see you",
  "how do you do",
  "how are you",
  "pleasure to see you"
];

module.exports = () => GreetWords[Math.floor(Math.random() * GreetWords.length)];
