const imageContainer = document.getElementById('image-container');
const image = document.getElementById('image');

const imageUrls = [
  'https://pbs.twimg.com/media/FlPB7XWXoAEn_ki?format=jpg&name=orig',
  'https://pbs.twimg.com/media/FlLNZhBXgAIbgAF?format=png&name=orig',
  'https://pbs.twimg.com/media/FlJZI-dXoAES1kJ?format=jpg&name=orig',
  'https://pbs.twimg.com/media/FlFpmuEWYAEGZm2?format=jpg&name=orig',
];

window.onload = function() {
  // Select a random image URL from the array
  const randomImageUrl = imageUrls[Math.floor(Math.random() * imageUrls.length)];

  // Set the src attribute of the image element to the selected URL
  image.src = randomImageUrl;
}
