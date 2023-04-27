<script lang="ts">
  import state from "$lib/store"
  import * as images from "$lib/images"
</script>

<div id="faction">
  <h2>Choose your faction</h2>

  {#each images.faction as { src, key }}
    <label data-side="{key}" title="{key}">
      <input type="radio" value={key} bind:group={$state.side} />
      <img {src} />
    </label>
  {/each}
</div>

<style>
  input[type=radio] {
    display: none;
  }

  #faction {
    border-bottom: 1px solid #009def;
    padding: 20px 0;
  }

  label {
    cursor: pointer;
  }

  label img {
    transition: all .15s ease-out;
    opacity: 0.65;
  }

  label input:checked + img {
    opacity: 1;
  }

  label:hover input:not(:checked) + img {
    transform: scale3d(1.1, 1.1, 1);
  }
</style>
