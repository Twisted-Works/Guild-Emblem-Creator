$(function () {
  var side = "horde",
    backgroundColor = "036d8b",
    icon = "06",
    iconColor = "b1b7b0",
    border = "01",
    borderColor = "999f95",
    background = "img/bg_00.png"

  get_tabard()

  $("#faction a").on("click", function (e) {
    side = $(this).data("side")
    get_tabard()
    e.preventDefault()
  })

  $("#bgcolor a").on("click", function (e) {
    backgroundColor = $(this).data("backgroundcolor").substring(1)
    $(this).parent().siblings().removeClass("selected")
    $(this).parent().toggleClass("selected")
    $("#inputbackgroundcolor").val("#" + backgroundColor)
    get_tabard()
    e.preventDefault()
  })
  $("#inputbackgroundcolor").on("change", function (e) {
    backgroundColor = $(this).val().substring(1)
    get_tabard()
    e.preventDefault()
  })

  $("#border a").on("click", function (e) {
    border = $(this).data("border")
    $(this).siblings().removeClass("selected")
    $(this).toggleClass("selected")
    get_tabard()
    e.preventDefault()
  })
  $("#bordercolor a").on("click", function (e) {
    borderColor = $(this).data("bordercolor").substring(1)
    $(this).parent().siblings().removeClass("selected")
    $(this).parent().toggleClass("selected")
    $("#inputbordercolor").val("#" + borderColor)
    get_tabard()
    e.preventDefault()
  })
  $("#inputbordercolor").on("change", function (e) {
    borderColor = $(this).val().substring(1)
    get_tabard()
    e.preventDefault()
  })

  $("#icon a").on("click", function (e) {
    icon = $(this).data("icon")
    get_tabard()
    e.preventDefault()
  })

  $("#iconcolor a").on("click", function (e) {
    iconColor = $(this).data("iconcolor").substring(1)
    $(this).parent().siblings().removeClass("selected")
    $(this).parent().toggleClass("selected")
    $("#inputiconcolor").val("#" + iconColor)
    get_tabard()
    e.preventDefault()
  })
  $("#inputiconcolor").on("change", function (e) {
    iconColor = $(this).val().substring(1)
    get_tabard()
    e.preventDefault()
  })

  function loadImage(src) {
    let img = new Image()
    img.crossOrigin = null

    return new Promise((resolve, reject) => {
      img.onload = () => {
        resolve(img)
        img.onload = null
        img.onerror = null
        img = null
      }
      img.onerror = (e) => {
        reject(e)
        img.onload = null
        img.onerror = null
        img = null
      }
      img.src = src
    })
  }

  async function get_tabard() {
    var backgroundImage = await loadImage("img/bg_00.png")
    var borderImage = await loadImage("img/borders/border_" + border + ".png")
    var iconImage = await loadImage("img/icons/emblem_" + icon + ".png")

    var draw = draw_Tabard(side, backgroundImage, iconImage, borderImage)
  }

  function get_Image(color, image) {
    var rgb = hexToRGB("ff" + color)

    var tintImg = changeImageColor(image, rgb[0], rgb[1], rgb[2])
    //console.log(tintImg);
    return tintImg
  }

  async function draw_Tabard(faction, background, icon, border) {
    //console.log(faction,background,icon,border);
    background = await get_Image(backgroundColor, background)
    icon = await get_Image(iconColor, icon)
    border = await get_Image(borderColor, border)
    //console.log(faction,background,icon,border);
    var canvas = $("#canvas")
    canvas.removeLayers()
    canvas
      .addLayer({
        type: "image",
        source: "img/ring-" + faction + ".png",
        x: 17,
        y: 17,
        fromCenter: false
      })
      .addLayer({
        type: "image",
        source: background,
        x: 37,
        y: 47,
        fromCenter: false
      })
      .addLayer({
        type: "image",
        source: "img/hooks.png",
        x: 37,
        y: 49,
        fromCenter: false
      })
      .addLayer({
        type: "image",
        source: icon,
        x: 55,
        y: 75,
        fromCenter: false
      })
      .addLayer({
        type: "image",
        source: border,
        x: 50,
        y: 60,
        fromCenter: false
      })
      .drawLayers()
    return "test"
  }
})