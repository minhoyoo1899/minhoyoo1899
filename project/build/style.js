export default function divStyle(div, stArr) {
  for (let i = 0; i < div.length; i++) {
    const stObj = stArr[i];
    for (const keyName in stObj) {
      div[i].style[keyName] = stObj[keyName];
    }
  }
}