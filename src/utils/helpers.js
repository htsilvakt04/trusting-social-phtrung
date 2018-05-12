export function isObject (item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage (count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export function generateImgUrl(item) {
    const url = item.multimedia[0].url;
    return `https://www.nytimes.com/${url}`;
}
