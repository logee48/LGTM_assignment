const profile_photo = 'https://imgv3.fotor.com/images/slider-image/Female-portrait-picture-enhanced-with-better-clarity-and-higher-quality-using-Fotors-free-online-AI-photo-enhancer.jpg';


function change_img() {
  const get_image = document.querySelectorAll('img');
  get_image.forEach(img => {
    if (img.src.includes('profile')) {
      img.src = profile_photo;
    }
  });
}

change_img();
window.addEventListener('scroll', change_img);
