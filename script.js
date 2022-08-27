const panels = document.querySelectorAll('.panel');

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active');
    })
}

var myButton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

}

