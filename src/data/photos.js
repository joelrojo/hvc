let photos = [];
for (let i = 1; i <= 65; i++) {
  if (i !== 48) {
    photos.push({
      src: require(`../assets/images/tales/${i}.jpg`),
      width: 1,
      height: 1,
    });
  }
}

export default photos;
