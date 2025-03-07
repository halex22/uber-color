# Uber Color Package

 The `UColor` class in JavaScript provides methods for handling RGB and RGBA color values, including
conversion between different color formats, generating random colors, calculating grayscale values,
creating color palettes, and determining contrasting colors. */
export default class UColor {


   * The constructor function initializes an object with RGB color values and an optional alpha value.
   * @param {number} r - The parameter `r` represents the red component of a color in the RGB color model.
   * @param {number} g - The parameter `g` in the constructor function represents the green component of a color
   * in RGB (Red, Green, Blue) format. It is used to define the intensity of the green color in the
   * overall color.
   * @param {number} b - The parameter `b` in the constructor function represents the blue component of a color
   * in RGB (Red, Green, Blue) color model. It is used to define the intensity of the blue color in the
   * color being created.
   * @param {number?} [a=1] - The parameter `a` in the constructor function represents the alpha value of the
   * color, which determines the opacity. It is optional and defaults to 1 if not provided.
   */
  constructor(r, g, b, a = 1) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
    this.colorsArray = [r, g, b];
  }


   * The function `fromHexCode` converts a hexadecimal color code to an array of RGBA values.
   * @param {string} hexStr - The `hexStr` parameter in the `fromHexCode` function is a hexadecimal color code
   * represented as a string. It may start with a "#" symbol followed by six hexadecimal characters
   * representing the RGB values of a color. For example, "#FFA500" represents the color orange.
   * @returns {UColor}The function `fromHexCode` is returning a new instance of `UColor` class with parsed
   * values from the input hexadecimal string `hexStr`. The parsed values are obtained by converting
   * each pair of characters in the hexadecimal string to their decimal equivalent using base 16. If
   * the fourth parsed value exists, it is then normalized to a range between 0 and 1 by dividing it by
   * 255
   
  static fromHexCode(hexStr) {
    const cleanedHexStr = hexStr.slice(1);
    const arrayOfStr = [...cleanedHexStr];
    const groupOfCouples = [];

    while (arrayOfStr.length > 0) {
      const coupleStrArray = arrayOfStr.splice(0, 2);
      groupOfCouples.push(coupleStrArray.join(""));
    }

    const parsedCouples = groupOfCouples.map((couple) => parseInt(couple, 16));
    if (parsedCouples[3]) {
      parsedCouples[3] = Math.round((parsedCouples[3] / 255) * 100) / 100;
    }

    return new UColor(...parsedCouples);
  }


  
   * The function `random` generates a random color with an optional alpha value.
   * @param {number} alpha - The `alpha` parameter in the `random` function is used to specify the alpha
   * (transparency) value of the color. If a value is provided for `alpha`, it will be used as the
   * alpha value for the color. If no value is provided for `alpha`, a random alpha value
   * @returns {UColor} A new `UColor` object is being returned, with the RGB values generated by the
   * `randomBetween()` function for red, green, and blue channels, and the alpha value either provided
   * as an argument or generated by the `randomAlpha()` function.
   
  static random(alpha) {
    const colors = [randomBetween(), randomBetween(), randomBetween()];
    colors.push(alpha ? alpha : randomAlpha());
    return new UColor(...colors);
  }


   * The function `fromRGB` takes a string in the format `rgba(r,g,b,a)` and returns a new `UColor`
   * object with the corresponding color values.
   * @param {string} RGBStr - The `RGBStr` parameter is a string representing an RGB color in the format
   * `rgba(r,g,b,a)`, where:
   * @returns {UColor} An instance of the `UColor` class with the RGB values extracted from the `RGBStr` string.
   */
  static fromRGB(RGBStr) {
    const splittedArray = RGBStr.split("(");
    const colorArraysStr = splittedArray[1].split(")")[0].split(",");
    const colorsArrayInt = colorArraysStr.map((color) => parseFloat(color));
    return new UColor(...colorsArrayInt);
  }



 * The `toHex` function converts RGBA values to a hexadecimal color code.
 * @returns The `toHex()` method is returning a hexadecimal representation of the color values (red,
 * green, blue, alpha) in the format `#RRGGBBAA`, where RR represents the red value, GG represents the
 * green value, BB represents the blue value, and AA represents the alpha value.
 */
  toHex() {
    const r = this.r.toString(16).padStart(2, "0");
    const g = this.g.toString(16).padStart(2, "0");
    const b = this.b.toString(16).padStart(2, "0");
    const a = Math.round(this.a * 255)
      .toString(16)
      .padStart(2, "0");
    return `#${r}${g}${b}${a}`;
  }

  /**
   * The `toRGB()` function returns the RGBA color values in a string format.
   * @returns {string} The `toRGB()` method is returning a string in the format `rgba(r, b, g, a)` where `r`,
   * `b`, `g`, and `a` are the values of the red, blue, green, and alpha components respectively of the
   * object calling the method.
   */
  toRGB() {
    return `rgba(${this.r},${this.b},${this.g}, ${this.a})`;
  }



   * The function `getGrayColor` calculates the grayscale value of a color based on its RGB values.
   * @returns {UColor} A new `UColor` object is being returned with the RGB values converted to a grayscale
   * color. The RGB values are calculated based on the formula `gray = red * 0.3 + green * 0.59 + blue
   * * 0.11`, and then the grayscale value is applied to all RGB components while keeping the alpha
   * value unchanged.
   */
  getGrayColor() {
    const red = Math.round(this.r * 0.3);
    const green = Math.round(this.g * 0.59);
    const blue = Math.round(this.b * 0.11);

    const gray = red + green + blue;

    const arrayGrey = [gray, gray, gray, this.a];

    return new UColor(...arrayGrey);
  }


  /**
   * The function `getPalette` generates a color palette based on the input colors by adjusting the hue
   * values.
   * @returns The `getPalette()` function returns an array called `Palette` containing three UColor
   * objects. The first UColor object is created using the initial colorsArray, and the next two UColor
   * objects are created by modifying the hue value of the initial color and converting it to RGB using
   * the hslToRgb function.
   */
  getPalette() {
    const hslVersion = rgbToHsl(...this.colorsArray);
    const hue = hslVersion[0];
    const s = hslVersion[1];
    const l = hslVersion[2];
    const Palette = [new UColor(this.colorsArray)]
    const movements = 120

    for (let i = 0; i &lt; 2; i++) {
      const newHue = (hue + (movements * (1 + i))) % 360;
      const newHsl = [newHue, s, l]
      const newColor  = hslToRgb(...newHsl)
      Palette.push(new UColor(...newColor))
    }
    

    return Palette
  }



  /**
   * The function `getContrastColor` calculates a contrasting color based on the input RGB color array.
   * @returns {UColor} A new `UColor` object with the RGB values of the color that is the contrast of the
   * original color.
   */
  getContrastColor() {

    const hslVersion = rgbToHsl(...this.colorsArray);
    const hue = hslVersion[0];
    const newHue = (hue + 180) % 360;
    const l = hslVersion[2];
    let newLuminosity = l
    if (l &lt; 20 || l > 80) {
      newLuminosity = 100 - l;
    }
    const newHsl = [newHue, hslVersion[1], newLuminosity]
    const contrastedRGB = hslToRgb(...newHsl)
    return new UColor(...contrastedRGB)
  }

}


/**
 * The function `randomBetween` generates a random number between the values of `MIN_COLOR` and
 * `MAX_COLOR`.
 * @returns The function `randomBetween` returns a random number between the values of `MIN_COLOR` and
 * `MAX_COLOR`, inclusive.
 */
export function randomBetween () {
  return MIN_COLOR + Math.floor(Math.random() * (MAX_COLOR - MIN_COLOR + 1));
}
  

/**
 * The function randomAlpha generates a random decimal number between 0 and 1.
 * @returns The function `randomAlpha` returns a random number between 0 and 1 with two decimal places.
 */
export function randomAlpha () {
  return Math.round(Math.random() * 100) / 100;
}





/**
 *The `rgbToHsl` function is converting RGB (Red, Green, Blue) values to HSL (Hue, Saturation, Luminosity) values. Here's a breakdown of what the function is doing:
 * @param {number} red 
 * @param {number} green 
 * @param {number} blue 
 * @returns {number[]}
 */
export function rgbToHsl (r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return [
    Math.round(60 * h &lt; 0 ? 60 * h + 360 : 60 * h),
    Math.round(
      100 * (s ? (l &lt;= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
    ),
    Math.round((100 * (2 * l - s)) / 2),
  ];
};


/**
 * The function `hslToRgb` converts HSL (Hue, Saturation, Luminosity) values to RGB (Red, Green, Blue)
 * values in JavaScript.
 * @param {number} hue - The `hue` parameter in the `hslToRgb` function represents the hue value of the color in
 * the HSL (Hue, Saturation, Lightness) color model. Hue is a degree on the color wheel from 0 to 360,
 * where 0 (or 360
 * @param {number} saturate - The `saturate` parameter in the `hslToRgb` function represents the saturation
 * value of the HSL (Hue, Saturation, Lightness) color model. It indicates the intensity or purity of
 * the color. In the function, the `saturate` value is divided
 * @param {number} luminosity - The `luminosity` parameter in the `hslToRgb` function represents the lightness
 * or darkness of the color. It ranges from 0 to 100, where 0 is black and 100 is white. A value of 50
 * represents the normal color.
 * @returns {number[]}The function `hslToRgb` is returning an array of three values representing the RGB color
 * values calculated from the input HSL (Hue, Saturation, Luminosity) values. The array contains the
 * red, green, and blue values respectively.
 */
export function hslToRgb (h, s, l) {
  s /= 100;
  l /= 100;
  const k = (n) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [
    Math.round(255 * f(0)),
    Math.round(255 * f(8)),
    Math.round(255 * f(4)),
  ];
}