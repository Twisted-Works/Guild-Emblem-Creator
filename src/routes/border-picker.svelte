<script lang="ts">
  import state from "$lib/store"
  import * as images from "$lib/images"
</script>

<div id="border">
  <h2>Choose Border</h2>

  {#each images.border as { key, src }}
    <label class:selected={$state.border === key} data-border="{key}" title="{key}">
      <input type="radio" value={key} bind:group={$state.border} />
      <img {src} />
    </label>
  {/each}
</div>

<style>
  input[type=radio] {
    display: none;
  }

  #border {
    border-bottom: 1px solid #009def;
    padding: 20px 0;
  }

  #border:before,
  #border:after {
    content: "";
    display: table;
    clear: both;
  }

  img {
    padding: 3px;
    -webkit-border-radius: 2px;
    -moz-border-radius: 2px;
    border-radius: 2px;
    border: 3px solid #eee;
    margin: 1px;
    width: 99px;
    height: 106px;
  }

  .selected img {
    border-color: #666;
  }
</style>
