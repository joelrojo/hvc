const requireContext = require.context('../assets/images/tales', false, /\.(jpg|jpeg|png|gif)$/);

let photos = [];

requireContext.keys().forEach((key) => {
  photos.push({
    src: requireContext(key),
    width: 1,
    height: 1,
  });
});

export default photos;
