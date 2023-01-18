const ham = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

ham.addEventListener("click",() => {
    ham.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n =>{
    n.addEventListener("click",() => {
        ham.classList.remove("active");
        navMenu.classList.remove("active");
    })
})

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        // console.log(entry);
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }
    })
})

const hiddenElement = document.querySelectorAll(".hidden");
hiddenElement.forEach((element)=> observer.observe(element));

    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Updesh012", { responsive: true });

  

let resumeSec = document.querySelectorAll(".drive")
resumeSec.forEach((el)=> el.addEventListener("click",()=>{
    window.open(
        'https://drive.google.com/file/d/1iRW8t7hbsTLrt_S5dZvj2l_PStztDJLF/view?usp=sharing',
        '_blank'
      );
})) 

