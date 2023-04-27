
export function loadImage(src: string): Promise<HTMLImageElement> {
  let img = new Image()
  img.crossOrigin = null

  return new Promise((resolve, reject) => {
    img.onload = () => {
      resolve(img)
      img.onload = null
      img.onerror = null
      img = null!
    }
    img.onerror = (e) => {
      reject(e)
      img.onload = null
      img.onerror = null
      img = null!
    }
    img.src = src
  })
}

export function generateRGBKs(img: HTMLImageElement): any[] {
  var w = img.width
  var h = img.height
  var rgbks = []

  var canvas = document.createElement("canvas")
  canvas.width = w
  canvas.height = h

  var ctx = canvas.getContext("2d")!
  ctx.drawImage(img, 0, 0)

  var pixels = ctx.getImageData(0, 0, w, h).data

  // 4 is used to ask for 3 images: red, green, blue and
  // black in that order.
  for (var rgbI = 0; rgbI < 4; rgbI++) {
    var canvas = document.createElement("canvas")
    canvas.width = w
    canvas.height = h

    var ctx = canvas.getContext("2d")!
    ctx.drawImage(img, 0, 0)
    var to = ctx.getImageData(0, 0, w, h)
    var toData = to.data

    for (var i = 0, len = pixels.length; i < len; i += 4) {
      toData[i] = rgbI === 0 ? pixels[i] : 0
      toData[i + 1] = rgbI === 1 ? pixels[i + 1] : 0
      toData[i + 2] = rgbI === 2 ? pixels[i + 2] : 0
      toData[i + 3] = pixels[i + 3]
    }

    ctx.putImageData(to, 0, 0)

    // image is _slightly_ faster then canvas for this, so convert
    var imgComp = new Image()
    imgComp.src = canvas.toDataURL()

    rgbks.push(imgComp)
  }

  return rgbks
}
export function hexToRGB(hex: string) {
  var r = parseInt(hex.slice(2, 4), 16)
  var g = parseInt(hex.slice(4, 6), 16)
  var b = parseInt(hex.slice(6, 8), 16)

  return [r, g, b]
}

export function generateTintImage(
  img: HTMLImageElement,
  rgbks: any[],
  red: number,
  green: number,
  blue: number
) {
  var buff = document.createElement("canvas")
  buff.width = img.width
  buff.height = img.height

  var ctx = buff.getContext("2d")!

  ctx.globalAlpha = 1
  ctx.globalCompositeOperation = "copy"
  ctx.drawImage(rgbks[3], 0, 0)
  //console.log(red,green,blue);
  ctx.globalCompositeOperation = "lighter"
  if (red > 0) {
    ctx.globalAlpha = red / 255.0
    ctx.drawImage(rgbks[0], 0, 0)
  }
  if (green > 0) {
    ctx.globalAlpha = green / 255.0
    ctx.drawImage(rgbks[1], 0, 0)
  }
  if (blue > 0) {
    ctx.globalAlpha = blue / 255.0
    ctx.drawImage(rgbks[2], 0, 0)
  }

  return buff
}

export async function changeImageColor(img: HTMLImageElement, red: number, green: number, blue: number) {
  var rgbks = await generateRGBKs(img)
  return generateTintImage(img, rgbks, red, green, blue)
}
