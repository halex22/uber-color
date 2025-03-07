const bohColor = UColor.fromHexCode("#ff3400");
console.log(bohColor);

// const uColor1 = new UColor()
// const uColor2 = UColor.fromHexCode('#ff3400')
// const uColor3 = UColor.random()
// console.log(uColor3)
// const uColor4 = UColor.fromRGB('rgba(255,61,12,0.5)')
// const uColor4Hex = UColor.
// #ff3d0c80
// const uColor4 = UColor.fromRGB('rgba(5,21,12,0.98)')
// console.log(uColor4.toRGB())
// const uColor5 = UColor.fromRGB('rgb(255,61,12)')
// const uColor6=  UColor.fromRGB('rgb(12, 255, 89)')
// console.log(uColor4.toHex())
// const uColor7 = uColor4.getGrayColor()
// console.log(uColor7.toRGB());

// console.log(uColor2.toHex()) // #ff3400
// console.log(uColor2.toHex()) // rgba(255,52,0,1)
// console.log(uColor2.getContrastColor())
// console.log(uColor2.getPalette())
// rgb(255, 10, 177)

const greenColor = new UColor(12, 255, 89)
const contrastedGreenColor = greenColor.getContrastColor()
console.log(greenColor)
console.log(contrastedGreenColor)


// for (let index = 0; index < 1000; index++) {
//   const alpha = randomAlpha()
//   if (alpha === 0) console.log('found')
  
// }

