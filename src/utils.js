const MIN_COLOR = 0;
const MAX_COLOR = 255;


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
    Math.round(60 * h < 0 ? 60 * h + 360 : 60 * h),
    Math.round(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
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
};