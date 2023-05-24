var animateSections = document.querySelectorAll('.animate-section');
var observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.2
};


var observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add('animate');
    } else {
      entry.target.classList.remove('animate');
    }
  });
}, observerOptions);

animateSections.forEach(function(section) {
  observer.observe(section);
});


var videoContainer = document.querySelector('.video-container');

window.addEventListener('scroll', function() {
  var videoRect = videoContainer.getBoundingClientRect();
  var windowHeight = window.innerHeight;

  if (videoRect.top < windowHeight && videoRect.bottom > 0) {
    videoContainer.classList.add('video-active');
  } else {
    videoContainer.classList.remove('video-active');
  }
});

var video = videoContainer.querySelector('video');

videoContainer.addEventListener('mouseenter', function() {
  video.play();
});

videoContainer.addEventListener('mouseleave', function() {
  video.pause();
  video.currentTime = 0;
});


/*  */

