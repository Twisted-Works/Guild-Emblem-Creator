<script lang="ts">
  import state from "$lib/store"

  let canvas: HTMLCanvasElement

  $: $state.drawTo(canvas)
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
    z-index: 100;
  }
</style>