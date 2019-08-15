console.log("Test Succeded");

function changeTextColor() {
  document.getElementById("ctc").style.color = "red";
}

function changeBackgroundColor() {
  const change = document.getElementById("btnch");

  if (change.value == 0) {
    const bg = (document.getElementById("cbc").style.cssText =
      "background:#fff; color:black;");

    change.value = 1;
  } else if (change.value == 1) {
    const bg = (document.getElementById("cbc").style.cssText =
      "background:red; color:#fff;");

    change.value = 0;
  }
}

function hide() {
  const x = document.getElementById("card3");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

let total = 0;
function add() {
  total++;
  document.getElementById("total").innerHTML = total;
}

function decrease() {
  total--;
  document.getElementById("total").innerHTML = total;
}

function reset() {
  total = 0;
  document.getElementById("total").innerHTML = total;
}

function darkMode() {
  const darkBody = document.querySelector("body").classList.add("dark-mode");
  const card = document
    .getElementsByClassName("card")
    .classList.add("dark-mode");
}

var options = {
  bottom: "64px", // default: '32px'
  right: "unset", // default: '32px'
  left: "32px", // default: 'unset'
  time: "0.5s", // default: '0.3s'
  mixColor: "#fff", // default: '#fff'
  backgroundColor: "#fff", // default: '#fff'
  buttonColorDark: "#100f2c", // default: '#100f2c'
  buttonColorLight: "#fff", // default: '#fff'
  saveInCookies: false, // default: true,
  label: "🌓", // default: ''
  autoMatchOsTheme: true // default: true
};

const darkmode = new Darkmode(options);
darkmode.showWidget();
