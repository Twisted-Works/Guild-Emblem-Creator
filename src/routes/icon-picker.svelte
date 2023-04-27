<script lang="ts">
  import state from "$lib/store"
  import * as images from "$lib/images"
</script>

<div id="icon">
  <h2>Choose Emblem</h2>

  {#each images.icon as { key, src }}
    <label class:selected={$state.icon === key} data-icon="{key}">
      <input type="radio" value={key} bind:group={$state.icon} />
      <img {src} />
    </label>
  {/each}
</div>

<style>
  input[type=radio] {
    display: none;
  }

  #icon {
    border-bottom: 1px solid #009def;
    padding: 20px 0;
  }

  label {
    cursor: pointer;
  }

  #icon label img {
    padding: 3px;
    border-radius: 2px;
    border: 3px solid #eee;
    margin: 1px;
  }
  #icon label.selected img {
    border-color: #666;
  }
  #border label img {
    width: 99px;
    height: 106px;
  }
  #icon label img {
    width: 60px;
    height: 60px;
  }
</style>