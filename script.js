
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

