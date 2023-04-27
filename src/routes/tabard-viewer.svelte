<script lang="ts">
  import state from "$lib/store"
  import { loadImage, hexToRGB, changeImageColor } from "$lib/utils"
  import * as images from "$lib/images"

  let canvas: HTMLCanvasElement

  $: context = canvas?.getContext("2d")
  $: backgroundColor = $state.backgroundColor.substring(1)
  $: iconColor = $state.iconColor.substring(1)
  $: borderColor = $state.borderColor.substring(1)

  $: if (canvas && $state) {
    draw_Tabard()
  }

  function get_Image(color: string, image: HTMLImageElement) {
    const rgb = hexToRGB("ff" + color)

    const tintImg = changeImageColor(image, rgb[0], rgb[1], rgb[2])

    return tintImg
  }

  async function draw_Tabard() {
    const [
      backgroundOrig,
      borderOrig,
      iconOrig,
      ringImage,
      hooksImage
    ] = await Promise.all([
      loadImage(images.bg_00),
      loadImage(images.resolveBorderSrc(state.border)!),
      loadImage(images.resolveIconSrc(state.icon)!),
      loadImage(images.resolveRingSrc($state.side)!),
      loadImage(images.hooks)
    ])

    const [
      backgroundImage,
      iconImage,
      borderImage
    ] = await Promise.all([
      get_Image(backgroundColor, backgroundOrig),
      get_Image(iconColor, iconOrig),
      get_Image(borderColor, borderOrig)
    ])

    context?.clearRect(0, 0, canvas.width, canvas.height)
    context?.drawImage(ringImage, 17, 17)
    context?.drawImage(backgroundImage, 37, 47)
    context?.drawImage(hooksImage, 37, 49)
    context?.drawImage(iconImage, 55, 75)
    context?.drawImage(borderImage, 50, 60)
  }
</script>

<div id="the_tabard">
  <canvas bind:this={canvas} width="250" height="250"></canvas>
</div>

<style>
  #the_tabard {
    position: fixed;
    text-align: center;
    top: 0;
    left: 0;
    right: 0;
    text-align: center;
    padding-bottom: 59px;
  }
</style>