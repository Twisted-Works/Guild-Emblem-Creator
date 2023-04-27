<script lang="ts">
  import "$lib/reset.css"

  import TabardViewer from "./tabard-viewer.svelte"
  import FactionPicker from "./faction-picker.svelte"
  import ColorPickers from "./color-pickers.svelte"
  import BorderPicker from "./border-picker.svelte"
  import IconPicker from "./icon-picker.svelte"
</script>

<svelte:head>
  <title>World of Warcraft Guild Tabard Designer</title>
</svelte:head>

<TabardViewer />

<div class="container">
  <div id="the_settings">
    <FactionPicker />
    <ColorPickers />

    <BorderPicker />
    <IconPicker />
  </div>
</div>

<style>
  :global(body) {
    background-color: #fff;
  }

  .container {
    margin: 300px auto 30px;
    max-width: 900px;
    text-align: center;
  }

  @media all and (max-width: 460px) {
    .container {
      margin: 350px auto 30px;
    }
  }
</style>