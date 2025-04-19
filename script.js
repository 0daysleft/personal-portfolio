
function toggleMenu(){
          const menu = document.querySelector(".menu-links")
          const icon = document.querySelector(".fa-bars");
          icon.innerHTML = `<i class=""></i>`

          if(icon.innerHTML == '<i class="fa-solid fa-bars"></i>'){
               icon.innerHTML = ""
               icon.innerHTML == '<i class="fa-solid fa-x"></i>'
          }
          else{
               icon.innerHTML == '<i class="fa-solid fa-bars"></i>'
          }

           menu.classList.toggle("open")
          // icon.classList.toggle("fa-x")
}

 const form = document.getElementById('contactForm');
    const successMessage = document.getElementById('successMessage');

    form.addEventListener('submit', function (e) {
      e.preventDefault(); // prevent default form submission

      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          form.reset(); // clear the form
          successMessage.style.display = 'block'; // show success message
        } else {
          alert("There was an error. Please try again.");
        }
      }).catch(error => {
        alert("There was an error sending your message." + error);
      });
    });
