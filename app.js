window.addEventListener('scroll', () => {
  // let parent = document.querySelector('.parallax');
  let children = document.getElementsByClassName('parallax__layer');
  let eagle = document.querySelector(".parallax__layer--eagle");
  for(let i = 0; i < children.length; i++) {
    children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
  }
  eagle.style.transform = `translate(-${window.pageYOffset*2.5}px, ${window.pageYOffset/2}px)`;
}, false)