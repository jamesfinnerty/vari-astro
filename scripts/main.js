const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/variousastro-logo-bw.png") {
    myImage.setAttribute("src", "images/variousastro-logo-green.png");
  } else {
    myImage.setAttribute("src", "images/variousastro-logo-bw.png");
  }
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Welcome, ${myName} from beyond the outer world!`;
    }
  }
  
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Welcome, ${storedName} from beyond the outer world!`;
  }

  myButton.onclick = () => {
  setUserName();
};
