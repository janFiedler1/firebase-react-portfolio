window.addEventListener("scroll", scrollHandler);

//const endOfPage = window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
const endOfPage = window.innerHeight + window.scrollY >= document.body.offsetHeight;