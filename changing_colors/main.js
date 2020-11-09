const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function () {
  const choice = select.value;
    console.log(choice);
  switch (choice) {
    case "black":
      uptade("black", "white");
      break;
    case "white":
      uptade("white", "black");
      break;
    case "green":
      uptade("green", "blue");
      break;
    case "purple":
      uptade("purple", "pink");
      break;
    default:
        uptade("red", "yellow")
  }
}

function uptade (bgColor, txtColor){
    html.style.backgroundColor = bgColor;
    html.style.color = txtColor;
}
