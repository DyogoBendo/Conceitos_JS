// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");
var newStory;

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

let storyText = `It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.`;

let insertX = [`Willy the Goblin`, `Big Daddy`, `Father Christmas`];

let insertY = [`the soup kitchen`, `Disneyland`, `the White House`];

let insertZ = [
  `spontaneously combusted`,
  `melted into a puddle on the sidewalk`,
  `turned into a slug and crawled away`,
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  if (customName.value !== "") {
    let name = customName.value;
    newStory = storyText;
    let xItem = randomValueFromArray(insertX),
      yItem = randomValueFromArray(insertY),
      zItem = randomValueFromArray(insertZ);
    storyText = newStory.replace("Bob", name);
    newStory = newStory.replace(":insertx", xItem);
    newStory = newStory.replace(":inserty", yItem);
    newStory = newStory.replace(":insertz", zItem);

    storyText = storyText.replace(":insertx", xItem);
    storyText = storyText.replace(":inserty", yItem);
    storyText = storyText.replace(":insertz", zItem);

  }

  if (document.getElementById("uk").checked) {
    let celsius = (94 - 32) * 5 / 9;
    let kilo = 300 * 0.45359237;
    let weight = Math.round(kilo) + " kilograms";
    let temperature = Math.round(celsius) + " centigrade";

    storyText = storyText.replace("94 fahrenheit", temperature);
    storyText = storyText.replace("300 pounds", weight);
  }

  story.textContent = newStory;
  story.style.visibility = "visible";
}
