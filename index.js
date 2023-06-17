let btn = document.querySelector('button');
let content = document.querySelector('.content');
btn.addEventListener('click', changeContent);

function changeContent() {
    content.innerText = "Hello World!";
}

let loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    let name = document.getElementById("name");
    let email = document.getElementById("email");
  
    if (name.value == "" || email.value == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      alert("This form has been successfully submitted!");
      console.log(
        `This form has a username of ${name.value} and email of ${email.value}`
      );
      name.value = "";
      email.value = "";
    }
  });