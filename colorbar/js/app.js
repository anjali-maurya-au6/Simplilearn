const getColor = () => {
  //Hex code
  const randomNumber = Math.floor(Math.random() * 16777215);
  const randomCode = "#" + randomNumber.toString(16);
  //we multiply for this number beacuse we want to make hexadecimal number
  document.body.style.backgroundColor = randomCode;
  document.getElementById("color-code").innerText = randomCode;
  navigator.clipboard.writeText(randomCode);
};

document.getElementById("btn").addEventListener("click", getColor);
getColor();
