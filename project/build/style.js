export default function divStyle(divName, stArr) {
  for (let i = 0; i < divName.length; i++) {
    const stObj = stArr[i];
    for (const keyName in stObj) {
      divName[i].style[keyName] = stObj[keyName];
    }
  }
}