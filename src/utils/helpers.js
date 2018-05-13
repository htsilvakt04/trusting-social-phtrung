export function isObject (item) {
  return Object.prototype.toString.call(item) === '[object Object]'
}

export function getPercentage (count, total) {
  return total === 0 ? 0 : parseInt(count / total * 100, 10)
}

export function generateImgUrl(item) {
    let url = 'https://picsum.photos/200/300/?blur';
    if (item.multimedia[0]) {
        url = item.multimedia[0].url;
        return `https://www.nytimes.com/${url}`;
    }
    return url;
}
