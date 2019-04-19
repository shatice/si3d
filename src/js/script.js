var horizontal = document.querySelector('.container--horizontal'),
    inner = document.querySelector('.container--inner');


window.addEventListener('scroll', function() {
  window.requestAnimationFrame(function() {
    var scrollheight = horizontal.offsetHeight - window.innerHeight,
        position = window.scrollY - horizontal.offsetTop,
        progression = (position / scrollheight);

    if (progression > 0 && progression < 1) {
      horizontal.classList.add('is-fixed');
    } else { 
      horizontal.classList.remove('is-fixed');
    }

    if (progression >= 1) {
      horizontal.classList.add('is-scrolled');
    } else {
      horizontal.classList.remove('is-scrolled');
    }

    setTranslateX(inner, progression);

  });
});

function setTranslateX(element, progression) {
  if (progression > 1) {
    progression = 1;
  } else if (progression < 0) {
    progression = 0;
  }

  var scrollwidth = element.offsetWidth - window.innerWidth;

  var transform = (-1 * scrollwidth * progression) + 'px';
  element.style.transform = 'translateX(' + transform + ')';
};

// SCROLL BEHAVIOUR

// let screenPositions = [],
//     timer = null; 

// window.addEventListener('scroll', function() {

//   let wh = window.innerHeight;
//   let horizontalWidth = horizontal.offsetHeight - wh;
//   screenPositions = [wh, wh + horizontalWidth / 2, wh + horizontalWidth];

//   if (timer !== null) {
//     this.clearTimeout(timer)
//   }
//   console.log(window.scrollY > window.innerHeight)
//   timer = setTimeout(() => {
//     if (window.scrollY > window.innerHeight ||  window.scrollY <) {
//       let closestScreen = getClosestScreen(window.scrollY)
//       document.documentElement.scrollTop = document.body.scrollTop = closestScreen
//     }
//   }, 200);
// })

// function getClosestScreen(scrollPosition) {
//   return screenPositions.reduce(function(prev, curr) {
//     return Math.abs(curr - scrollPosition) < Math.abs(prev - scrollPosition) ? curr : prev;
//   })
// }

// WAIPOINTS 

