<script lang="ts">
  import state from "$lib/store"
  import * as colors from "$lib/colors"
</script>

<div id="colors">
  <div id="bgcolor">
    <label style:display="block">
      Choose Tabard Color
      <input type="color" name="inputbackgroundcolor" id="inputbackgroundcolor" bind:value={$state.backgroundColor} style:width="25px" />
    </label>

    {#each colors.tabard as color}
      <label class="color_sample" class:selected={$state.backgroundColor === color} data-backgroundcolor={color} style:background-color={color}>
        <input type="radio" value={color} bind:group={$state.backgroundColor} />
      </label>
    {/each}
  </div>

  <div id="bordercolor">
    <label style:display="block">
      Choose Border Color
      <input type="color" name="inputbordercolor" id="inputbordercolor" bind:value={$state.borderColor} style:width="25px" />
    </label>

    {#each colors.border as color}
      <label class="color_sample" class:selected={$state.borderColor === color} data-bordercolor={color} style:background-color={color}>
        <input type="radio" value={color} bind:group={$state.borderColor} />
      </label>
    {/each}
  </div>

  <div id="iconcolor">
    <label style:display="block">
      Choose Emblem Color
      <input type="color" name="inputiconcolor" id="inputiconcolor" bind:value={$state.iconColor} style:width="25px" />
    </label>

    {#each colors.icon as color}
      <label class="color_sample" class:selected={$state.iconColor === color} data-iconcolor={color} style:background-color={color}>
        <input type="radio" value={color} bind:group={$state.iconColor} />
      </label>
    {/each}
  </div>
</div>

<style>
  input[type=radio] {
    display: none;
  }

  label {
    font-weight: bold;
  }

  #colors {
    border-bottom: 1px solid #009def;
    padding: 20px 0;
    display: flex;
  }

  #colors > div {
    width: 33%;
    padding-right: 20px;
  }
  #colors > div:last-of-type {
    width: 34%;
    padding-right: 0;
  }
  .color_sample {
    width: 40px;
    height: 40px;
    display: inline-block;
    margin: 1px;
    border-radius: 2px;
    border: 3px solid #bcbcbc;
    cursor: pointer;
  }
  .color_sample.selected {
    border-color: #666;
  }

  @media all and (max-width: 460px) {
    #colors {
      display: block;
    }
    #colors > div {
      width: 100%;
      padding-right: 0;
    }
    #colors > div:last-of-type {
      width: 100%;
    }
  }
</style>
