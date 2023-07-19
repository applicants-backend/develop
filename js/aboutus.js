const options = {
    root: null,
    rootMargin: "0px",
    threshold: .5,
  }
  
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
}, options);
  
const titleList = document.querySelectorAll('h2');
  
titleList.forEach(el => observer.observe(el));