function avatarImageLoader({ src, width,quality }) {
    return `https://robohash.org${src}?w=${width}&q=${quality || 75}`
  }
 

export default avatarImageLoader;