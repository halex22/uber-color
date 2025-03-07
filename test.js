const randomAlpha = () => Math.round(Math.random() * 100) / 100

// for (let index = 0; index < 1000; index++) {
//   const alpha = randomAlpha()
//   if (alpha === 0) console.log('found')
  
// }

function fromHexCode(hexStr) {
  const cleanedHexStr = hexStr.slice(1)
  const arrayOfStr = [...cleanedHexStr]
  const groupOfCouples = []

  while (arrayOfStr.length > 0) {
    const coupleStrArray = arrayOfStr.splice(0, 2)
    groupOfCouples.push(coupleStrArray.join(''))
  }

  // if (groupOfCouples[3]) {
  //   console.log(groupOfCouples[3])
  //   groupOfCouples[3] = parseFloat(groupOfCouples[3] ) / 255
  // }
  console.log(groupOfCouples)
  groupOfCouples.forEach(couple => console.log(parseInt(couple, 16)))
  console.log(Math.round(groupOfCouples[3] / 255 *100)/100)
}

fromHexCode('#ff3d0c80')