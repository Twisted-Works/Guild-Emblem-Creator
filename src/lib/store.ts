import { Writable } from "./observables"
import * as images from "$lib/images"
import { loadImage, hexToRGB, changeImageColor } from "$lib/utils"

class PrimaryStore extends Writable {
  side = "horde"
  backgroundColor = "#036d8b"
  icon = "06"
  iconColor = "#b1b7b0"
  border = "01"
  borderColor = "#999f95"
  background = "bg_00"

  async getProcessedImages() {
    const [
      backgroundBase,
      borderBase,
      iconBase
    ] = await Promise.all([
      loadImage(images.bg_00),
      loadImage(images.resolveBorderSrc(this.border)!),
      loadImage(images.resolveIconSrc(this.icon)!)
    ])

    const [
      background,
      icon,
      border,
      ring,
      hooks
    ] = await Promise.all([
      this.getImage(this.backgroundColor.substring(1), backgroundBase),
      this.getImage(this.iconColor.substring(1), iconBase),
      this.getImage(this.borderColor.substring(1), borderBase),
      loadImage(images.resolveRingSrc(this.side)!),
      loadImage(images.hooks)
    ])

    return { background, icon, border, ring, hooks }
  }

  getImage(color: string, image: HTMLImageElement) {
    const rgb = hexToRGB("ff" + color)

    return changeImageColor(image, rgb[0], rgb[1], rgb[2])
  }

  async drawTo(canvas?: HTMLCanvasElement) {
    const context = canvas?.getContext("2d")

    if (!(canvas && context)) return

    const imgs = await this.getProcessedImages()

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(imgs.ring, 17, 17)
    context.drawImage(imgs.background, 37, 47)
    context.drawImage(imgs.hooks, 37, 49)
    context.drawImage(imgs.icon, 55, 75)
    context.drawImage(imgs.border, 50, 60)
  }
}

export default new PrimaryStore()