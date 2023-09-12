const input = document.getElementById("todo-input");
const createBtn = document.querySelector("#create-btn");
const todos = document.querySelector(".todos");
const heading = document.getElementById("heading");

createBtn.onclick = () => {
  //TODO elements are created

  const buttonContainer = document.createElement("div");
  const div = document.createElement("div");
  div.className = "single-todo"; //class name verdik
  const p = document.createElement("p");
  const closeBtn = document.createElement("button");

  //TODO checks the input! 
  if (input.value === "") {
    alert("Zəhmət olmasa, birseyler yazin! tenbel olma!");
    return; //if den cixsin 
  }
  // div.classList.add("open"); //bele de elave ede bilerik

  //! Valueler menimsedirik
  //TODO inputda yazdigimiz p elementine kocurulsun:
  p.textContent = input.value;

  //TODO closebtn contenti :
  closeBtn.textContent = "❌";

  //TODO clobtn'a clickleyende ne bas versin?
  closeBtn.onclick = () => {
    if (confirm("qaqa heqiqeten silmek isteyirsen?")) {
      let counter = 1;
      let captcha = getRandomWord();
      let userPrompt = prompt(`Captcha-ni hell edin: ${captcha}`);
      while (userPrompt !== captcha) {
        if (counter > 2) {
          alert("sen get yat!");
          return;
        }
        counter++;
        captcha = getRandomWord();
        userPrompt = prompt(`Captcha-ni hell edin: ${captcha}`);
      }
      div.remove();
    } else {
      alert("diqqetli ol, hormetli ol!");
    }
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "🖋";

  editBtn.onclick = () => {
    const newValue = prompt("enter new value", p.textContent);
    p.textContent = newValue;
  };

  //appendler
  buttonContainer.append(closeBtn, editBtn);
  div.append(p, buttonContainer);
  todos.append(div);

  //   ux -> user experience
  input.value = "";
};

function getRandomLetter() {

  const randomNumBetween65And90 = 65 + Math.floor(Math.random() * 26);

  if (randomNumBetween65And90 % 2 === 0) {
    return String.fromCharCode(randomNumBetween65And90);
  } else {
    return String.fromCharCode(randomNumBetween65And90).toLowerCase();
  }
}

function getRandomWord() {
  let word = "";
  for (let i = 0; i < 5; i++) {
    word = word.concat(getRandomLetter());
  }
  return word;
}
