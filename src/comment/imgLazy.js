let observer = new IntersectionObserver((entries) => {
  entries.forEach((entr) => {
    if (entr.isIntersecting) {
      !entr.target.isLoaded && showImg(entr.target, entr.target.data_src);
    }
  });
});

function showImg(el, imgSrc) {
  const img = new Image();
  img.src = imgSrc;
  img.onload = () => {
    el.src = imgSrc;
    el.isLoaded = true;
  };
}

export default {
  insrted(el, binding) {
    el.data_src = binding.value;
    observer.observe(el);
  },
  unbind() {
    observer.disconnect();
  },
};
