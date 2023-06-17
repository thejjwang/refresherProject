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
      alert(`This form has been successfully submitted with a username of ${name.value} and email of ${email.value}`);
      name.value = "";
      email.value = "";
    }
  });

  let slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    let slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 5000;
    slides[index].classList.add('active');  
    
    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
//   let imgSrc = document.getElementById("imgSrc");
//   // Apply to all slideshows that you define with the markup wrote
//   slideshows.forEach(initSlideShow);

//   function initSlideShow(slideshow) {

//     let slides = ["https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&w=800", "https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=800"];
//     imgSrc.src = slides[0];
//     var index = 0, time = 5000;
//     slides[index].classList.add('active');  
    
//     setInterval( () => {
//       slides[index].classList.remove('active');
      
//       //Go over each slide incrementing the index
//       index++;
      
//       // If you go over all slides, restart the index to show the first slide and start again
//       if (index === slides.length) index = 0; 
      
//       slides[index].classList.add('active');

//     }, time);
//   }