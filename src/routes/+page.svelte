<script lang="ts">
  import "$lib/reset.css"
  import "$lib/styles.css"
</script>

<svelte:head>
  <title>World of Warcraft Guild Tabard Designer</title>
</svelte:head>

<div id="the_tabard">
  <canvas id="canvas" width="250" height="250">
    Your browser does not support the canvas element.
  </canvas>
</div>

<div class="container">
  <div id="the_settings">
    <div id="faction">
      <h2>Choose your faction</h2>
      <a href="#" data-side="alliance" title="Alliance"><img src="img/alliance.png" /></a>
      <a href="#" data-side="horde" title="Horde"><img src="img/horde.png" /></a>
    </div>

    <div id="colors">
      <div id="bgcolor">
        <h2>Choose Tabard Color</h2>
        <div class="color_sample" style="background-color:#b1002e"><a href="#" data-backgroundcolor="#b1002e" /></div>
        <div class="color_sample" style="background-color:#9e0036"><a href="#" data-backgroundcolor="#9e0036" /></div>
        <div class="color_sample" style="background-color:#006391"><a href="#" data-backgroundcolor="#006391" /></div>
        <div class="color_sample" style="background-color:#232323"><a href="#" data-backgroundcolor="#232323" /></div>
        <div class="color_sample" style="background-color:#ffffff"><a href="#" data-backgroundcolor="#ffffff" /></div>
        <div class="color_sample" style="background-color:#003582"><a href="#" data-backgroundcolor="#003582" /></div>
        <div class="color_sample" style="background-color:#ff38fa"><a href="#" data-backgroundcolor="#ff38fa" /></div>
        <div class="color_sample" style="background-color:#4f2300"><a href="#" data-backgroundcolor="#4f2300" /></div>
        <div class="color_sample" style="background-color:#646464"><a href="#" data-backgroundcolor="#646464" /></div>
        <div class="color_sample" style="background-color:#a30068"><a href="#" data-backgroundcolor="#a30068" /></div>
        <div class="color_sample" style="background-color:#ffb317"><a href="#" data-backgroundcolor="#ffb317" /></div>
        <div class="color_sample" style="background-color:#fc6891"><a href="#" data-backgroundcolor="#fc6891" /></div>
        <div class="color_sample" style="background-color:#b4bba8"><a href="#" data-backgroundcolor="#b4bba8" /></div>
        <div class="color_sample" style="background-color:#875513"><a href="#" data-backgroundcolor="#875513" /></div>
        <div class="color_sample" style="background-color:#d7ddcb"><a href="#" data-backgroundcolor="#d7ddcb" /></div>
        <div class="color_sample" style="background-color:#ff891b"><a href="#" data-backgroundcolor="#ff891b" /></div>
        <div class="color_sample" style="background-color:#009061"><a href="#" data-backgroundcolor="#009061" /></div>
        <div class="color_sample" style="background-color:#d34ac8"><a href="#" data-backgroundcolor="#d34ac8" /></div>
        <div class="color_sample" style="background-color:#ae4b00"><a href="#" data-backgroundcolor="#ae4b00" /></div>
        <div class="color_sample" style="background-color:#21dcff"><a href="#" data-backgroundcolor="#21dcff" /></div>
        <div class="color_sample" style="background-color:#bcf61b"><a href="#" data-backgroundcolor="#bcf61b" /></div>
        <div class="color_sample" style="background-color:#88ba03"><a href="#" data-backgroundcolor="#88ba03" /></div>
        <div class="color_sample" style="background-color:#1ef7c1"><a href="#" data-backgroundcolor="#1ef7c1" /></div>
        <div class="color_sample" style="background-color:#860f9a"><a href="#" data-backgroundcolor="#860f9a" /></div>
        <div class="color_sample" style="background-color:#2c6aae"><a href="#" data-backgroundcolor="#2c6aae" /></div>
        <div class="color_sample" style="background-color:#ff2088"><a href="#" data-backgroundcolor="#ff2088" /></div>
        <div class="color_sample" style="background-color:#808080"><a href="#" data-backgroundcolor="#808080" /></div>
        <div class="color_sample" style="background-color:#00820f"><a href="#" data-backgroundcolor="#00820f" /></div>
        <div class="color_sample" style="background-color:#9b00a6"><a href="#" data-backgroundcolor="#9b00a6" /></div>
        <div class="color_sample" style="background-color:#ff1fbf"><a href="#" data-backgroundcolor="#ff1fbf" /></div>
        <div class="color_sample" style="background-color:#e14500"><a href="#" data-backgroundcolor="#e14500" /></div>
        <div class="color_sample" style="background-color:#ad29ac"><a href="#" data-backgroundcolor="#ad29ac" /></div>
        <div class="color_sample" style="background-color:#c49b00"><a href="#" data-backgroundcolor="#c49b00" /></div>
        <div class="color_sample" style="background-color:#588000"><a href="#" data-backgroundcolor="#588000" /></div>
        <div class="color_sample" style="background-color:#8e9700"><a href="#" data-backgroundcolor="#8e9700" /></div>
        <div class="color_sample" style="background-color:#1eff68"><a href="#" data-backgroundcolor="#1eff68" /></div>
        <div class="color_sample" style="background-color:#c900c3"><a href="#" data-backgroundcolor="#c900c3" /></div>
        <div class="color_sample" style="background-color:#009dc5"><a href="#" data-backgroundcolor="#009dc5" /></div>
        <div class="color_sample" style="background-color:#fffc14"><a href="#" data-backgroundcolor="#fffc14" /></div>
        <div class="color_sample" style="background-color:#4d8eda"><a href="#" data-backgroundcolor="#4d8eda" /></div>
        <div class="color_sample" style="background-color:#f68700"><a href="#" data-backgroundcolor="#f68700" /></div>
        <div class="color_sample" style="background-color:#e3f618"><a href="#" data-backgroundcolor="#e3f618" /></div>
        <div class="color_sample" style="background-color:#b7c003"><a href="#" data-backgroundcolor="#b7c003" /></div>
        <div class="color_sample" style="background-color:#ffff14"><a href="#" data-backgroundcolor="#ffff14" /></div>
        <div class="color_sample" style="background-color:#bd005b"><a href="#" data-backgroundcolor="#bd005b" /></div>
        <div class="color_sample" style="background-color:#04c347"><a href="#" data-backgroundcolor="#04c347" /></div>
        <div class="color_sample" style="background-color:#c58132"><a href="#" data-backgroundcolor="#c58132" /></div>
        <div class="color_sample" style="background-color:#d30087"><a href="#" data-backgroundcolor="#d30087" /></div>
        <div class="color_sample" style="background-color:#04b78f"><a href="#" data-backgroundcolor="#04b78f" /></div>
        <div class="color_sample" style="background-color:#d8dd00"><a href="#" data-backgroundcolor="#d8dd00" /></div>
        <div class="color_sample" style="background-color:#f3ca00"><a href="#" data-backgroundcolor="#f3ca00" /></div>
      </div>
      <div id="bordercolor">
        <h2>Choose Border Color</h2>
        <div class="color_sample" style="background-color:#672300"><a href="#" data-bordercolor="#672300" /></div>
        <div class="color_sample" style="background-color:#670021"><a href="#" data-bordercolor="#670021" /></div>
        <div class="color_sample" style="background-color:#006793"><a href="#" data-bordercolor="#006793" /></div>
        <div class="color_sample" style="background-color:#ffffff"><a href="#" data-bordercolor="#ffffff" /></div>
        <div class="color_sample" style="background-color:#675600"><a href="#" data-bordercolor="#675600" /></div>
        <div class="color_sample" style="background-color:#f9cc30"><a href="#" data-bordercolor="#f9cc30" /></div>
        <div class="color_sample" style="background-color:#54370a"><a href="#" data-bordercolor="#54370a" /></div>
        <div class="color_sample" style="background-color:#674500"><a href="#" data-bordercolor="#674500" /></div>
        <div class="color_sample" style="background-color:#0f1415"><a href="#" data-bordercolor="#0f1415" /></div>
        <div class="color_sample" style="background-color:#63a300"><a href="#" data-bordercolor="#63a300" /></div>
        <div class="color_sample" style="background-color:#00317c"><a href="#" data-bordercolor="#00317c" /></div>
        <div class="color_sample" style="background-color:#00671f"><a href="#" data-bordercolor="#00671f" /></div>
        <div class="color_sample" style="background-color:#639400"><a href="#" data-bordercolor="#639400" /></div>
        <div class="color_sample" style="background-color:#7b0067"><a href="#" data-bordercolor="#7b0067" /></div>
        <div class="color_sample" style="background-color:#6d0077"><a href="#" data-bordercolor="#6d0077" /></div>
        <div class="color_sample" style="background-color:#008e90"><a href="#" data-bordercolor="#008e90" /></div>
      </div>
      <div id="iconcolor">
        <h2>Choose Emblem Color</h2>
        <div class="color_sample" style="background-color:#672300"><a href="#" data-iconcolor="#672300" /></div>
        <div class="color_sample" style="background-color:#670021"><a href="#" data-iconcolor="#670021" /></div>
        <div class="color_sample" style="background-color:#101517"><a href="#" data-iconcolor="#101517" /></div>
        <div class="color_sample" style="background-color:#dfa55a"><a href="#" data-iconcolor="#dfa55a" /></div>
        <div class="color_sample" style="background-color:#b1b8b1"><a href="#" data-iconcolor="#b1b8b1" /></div>
        <div class="color_sample" style="background-color:#376700"><a href="#" data-iconcolor="#376700" /></div>
        <div class="color_sample" style="background-color:#092a5d"><a href="#" data-iconcolor="#092a5d" /></div>
        <div class="color_sample" style="background-color:#ffffff"><a href="#" data-iconcolor="#ffffff" /></div>
        <div class="color_sample" style="background-color:#004867"><a href="#" data-iconcolor="#004867" /></div>
        <div class="color_sample" style="background-color:#516700"><a href="#" data-iconcolor="#516700" /></div>
        <div class="color_sample" style="background-color:#5d094f"><a href="#" data-iconcolor="#5d094f" /></div>
        <div class="color_sample" style="background-color:#54370a"><a href="#" data-iconcolor="#54370a" /></div>
        <div class="color_sample" style="background-color:#00671f"><a href="#" data-iconcolor="#00671f" /></div>
        <div class="color_sample" style="background-color:#808080"><a href="#" data-iconcolor="#808080" /></div>
        <div class="color_sample" style="background-color:#006757"><a href="#" data-iconcolor="#006757" /></div>
        <div class="color_sample" style="background-color:#636700"><a href="#" data-iconcolor="#636700" /></div>
      </div>
    </div>

    <div id="colorsinput">
      <h2>Want to be original? Put your own colors<br />(click on another item to make these colours load after selecting them.)</h2>
      <div>
        <h3>Tabard Color</h3>
        <input type="color" name="inputbackgroundcolor" id="inputbackgroundcolor" value="#036d8b" />
      </div>
      <div>
        <h3>Border Color</h3>
        <input type="color" name="inputbordercolor" id="inputbordercolor" value="#999f95" />
      </div>
      <div>
        <h3>Emblem Color</h3>
        <input type="color" name="inputiconcolor" id="inputiconcolor" value="#d3d3c6" />
      </div>
    </div>

    <div id="border">
      <h2>Choose Border</h2>
      <a href="#" data-border="00"><img src="img/borders/border_00.png" /></a><a href="#" data-border="01"
        ><img src="img/borders/border_01.png" /></a
      ><a href="#" data-border="02"><img src="img/borders/border_02.png" /></a><a href="#" data-border="03"
        ><img src="img/borders/border_03.png" /></a
      ><a href="#" data-border="04"><img src="img/borders/border_04.png" /></a><a href="#" data-border="05"
        ><img src="img/borders/border_05.png" /></a
      ><a href="#" data-border="06"><img src="img/borders/border_06.png" /></a>
    </div>

    <div id="icon">
      <h2>Choose Emblem</h2>
      <a href="#" data-icon="00"><img src="img/icons/emblem_00.png" /></a><a href="#" data-icon="01"
        ><img src="img/icons/emblem_01.png" /></a
      ><a href="#" data-icon="02"><img src="img/icons/emblem_02.png" /></a><a href="#" data-icon="03"
        ><img src="img/icons/emblem_03.png" /></a
      ><a href="#" data-icon="04"><img src="img/icons/emblem_04.png" /></a><a href="#" data-icon="05"
        ><img src="img/icons/emblem_05.png" /></a
      ><a href="#" data-icon="06"><img src="img/icons/emblem_06.png" /></a><a href="#" data-icon="07"
        ><img src="img/icons/emblem_07.png" /></a
      ><a href="#" data-icon="08"><img src="img/icons/emblem_08.png" /></a><a href="#" data-icon="09"
        ><img src="img/icons/emblem_09.png" /></a
      ><a href="#" data-icon="10"><img src="img/icons/emblem_10.png" /></a><a href="#" data-icon="11"
        ><img src="img/icons/emblem_11.png" /></a
      ><a href="#" data-icon="12"><img src="img/icons/emblem_12.png" /></a><a href="#" data-icon="13"
        ><img src="img/icons/emblem_13.png" /></a
      ><a href="#" data-icon="14"><img src="img/icons/emblem_14.png" /></a><a href="#" data-icon="15"
        ><img src="img/icons/emblem_15.png" /></a
      ><a href="#" data-icon="16"><img src="img/icons/emblem_16.png" /></a><a href="#" data-icon="17"
        ><img src="img/icons/emblem_17.png" /></a
      ><a href="#" data-icon="18"><img src="img/icons/emblem_18.png" /></a><a href="#" data-icon="19"
        ><img src="img/icons/emblem_19.png" /></a
      ><a href="#" data-icon="20"><img src="img/icons/emblem_20.png" /></a><a href="#" data-icon="21"
        ><img src="img/icons/emblem_21.png" /></a
      ><a href="#" data-icon="22"><img src="img/icons/emblem_22.png" /></a><a href="#" data-icon="23"
        ><img src="img/icons/emblem_23.png" /></a
      ><a href="#" data-icon="24"><img src="img/icons/emblem_24.png" /></a><a href="#" data-icon="25"
        ><img src="img/icons/emblem_25.png" /></a
      ><a href="#" data-icon="26"><img src="img/icons/emblem_26.png" /></a><a href="#" data-icon="27"
        ><img src="img/icons/emblem_27.png" /></a
      ><a href="#" data-icon="28"><img src="img/icons/emblem_28.png" /></a><a href="#" data-icon="29"
        ><img src="img/icons/emblem_29.png" /></a
      ><a href="#" data-icon="30"><img src="img/icons/emblem_30.png" /></a><a href="#" data-icon="31"
        ><img src="img/icons/emblem_31.png" /></a
      ><a href="#" data-icon="32"><img src="img/icons/emblem_32.png" /></a><a href="#" data-icon="33"
        ><img src="img/icons/emblem_33.png" /></a
      ><a href="#" data-icon="34"><img src="img/icons/emblem_34.png" /></a><a href="#" data-icon="35"
        ><img src="img/icons/emblem_35.png" /></a
      ><a href="#" data-icon="36"><img src="img/icons/emblem_36.png" /></a><a href="#" data-icon="37"
        ><img src="img/icons/emblem_37.png" /></a
      ><a href="#" data-icon="38"><img src="img/icons/emblem_38.png" /></a><a href="#" data-icon="39"
        ><img src="img/icons/emblem_39.png" /></a
      ><a href="#" data-icon="40"><img src="img/icons/emblem_40.png" /></a><a href="#" data-icon="41"
        ><img src="img/icons/emblem_41.png" /></a
      ><a href="#" data-icon="42"><img src="img/icons/emblem_42.png" /></a><a href="#" data-icon="43"
        ><img src="img/icons/emblem_43.png" /></a
      ><a href="#" data-icon="44"><img src="img/icons/emblem_44.png" /></a><a href="#" data-icon="45"
        ><img src="img/icons/emblem_45.png" /></a
      ><a href="#" data-icon="46"><img src="img/icons/emblem_46.png" /></a><a href="#" data-icon="47"
        ><img src="img/icons/emblem_47.png" /></a
      ><a href="#" data-icon="48"><img src="img/icons/emblem_48.png" /></a><a href="#" data-icon="49"
        ><img src="img/icons/emblem_49.png" /></a
      ><a href="#" data-icon="50"><img src="img/icons/emblem_50.png" /></a><a href="#" data-icon="51"
        ><img src="img/icons/emblem_51.png" /></a
      ><a href="#" data-icon="52"><img src="img/icons/emblem_52.png" /></a><a href="#" data-icon="53"
        ><img src="img/icons/emblem_53.png" /></a
      ><a href="#" data-icon="54"><img src="img/icons/emblem_54.png" /></a><a href="#" data-icon="55"
        ><img src="img/icons/emblem_55.png" /></a
      ><a href="#" data-icon="56"><img src="img/icons/emblem_56.png" /></a><a href="#" data-icon="57"
        ><img src="img/icons/emblem_57.png" /></a
      ><a href="#" data-icon="58"><img src="img/icons/emblem_58.png" /></a><a href="#" data-icon="59"
        ><img src="img/icons/emblem_59.png" /></a
      ><a href="#" data-icon="60"><img src="img/icons/emblem_60.png" /></a><a href="#" data-icon="61"
        ><img src="img/icons/emblem_61.png" /></a
      ><a href="#" data-icon="62"><img src="img/icons/emblem_62.png" /></a><a href="#" data-icon="63"
        ><img src="img/icons/emblem_63.png" /></a
      ><a href="#" data-icon="64"><img src="img/icons/emblem_64.png" /></a><a href="#" data-icon="65"
        ><img src="img/icons/emblem_65.png" /></a
      ><a href="#" data-icon="66"><img src="img/icons/emblem_66.png" /></a><a href="#" data-icon="67"
        ><img src="img/icons/emblem_67.png" /></a
      ><a href="#" data-icon="68"><img src="img/icons/emblem_68.png" /></a><a href="#" data-icon="69"
        ><img src="img/icons/emblem_69.png" /></a
      ><a href="#" data-icon="70"><img src="img/icons/emblem_70.png" /></a><a href="#" data-icon="71"
        ><img src="img/icons/emblem_71.png" /></a
      ><a href="#" data-icon="72"><img src="img/icons/emblem_72.png" /></a><a href="#" data-icon="73"
        ><img src="img/icons/emblem_73.png" /></a
      ><a href="#" data-icon="74"><img src="img/icons/emblem_74.png" /></a><a href="#" data-icon="75"
        ><img src="img/icons/emblem_75.png" /></a
      ><a href="#" data-icon="76"><img src="img/icons/emblem_76.png" /></a><a href="#" data-icon="77"
        ><img src="img/icons/emblem_77.png" /></a
      ><a href="#" data-icon="78"><img src="img/icons/emblem_78.png" /></a><a href="#" data-icon="79"
        ><img src="img/icons/emblem_79.png" /></a
      ><a href="#" data-icon="80"><img src="img/icons/emblem_80.png" /></a><a href="#" data-icon="81"
        ><img src="img/icons/emblem_81.png" /></a
      ><a href="#" data-icon="82"><img src="img/icons/emblem_82.png" /></a><a href="#" data-icon="83"
        ><img src="img/icons/emblem_83.png" /></a
      ><a href="#" data-icon="84"><img src="img/icons/emblem_84.png" /></a><a href="#" data-icon="85"
        ><img src="img/icons/emblem_85.png" /></a
      ><a href="#" data-icon="86"><img src="img/icons/emblem_86.png" /></a><a href="#" data-icon="87"
        ><img src="img/icons/emblem_87.png" /></a
      ><a href="#" data-icon="88"><img src="img/icons/emblem_88.png" /></a><a href="#" data-icon="89"
        ><img src="img/icons/emblem_89.png" /></a
      ><a href="#" data-icon="90"><img src="img/icons/emblem_90.png" /></a><a href="#" data-icon="91"
        ><img src="img/icons/emblem_91.png" /></a
      ><a href="#" data-icon="92"><img src="img/icons/emblem_92.png" /></a><a href="#" data-icon="93"
        ><img src="img/icons/emblem_93.png" /></a
      ><a href="#" data-icon="94"><img src="img/icons/emblem_94.png" /></a><a href="#" data-icon="95"
        ><img src="img/icons/emblem_95.png" /></a
      ><a href="#" data-icon="96"><img src="img/icons/emblem_96.png" /></a><a href="#" data-icon="97"
        ><img src="img/icons/emblem_97.png" /></a
      ><a href="#" data-icon="98"><img src="img/icons/emblem_98.png" /></a><a href="#" data-icon="99"
        ><img src="img/icons/emblem_99.png" /></a
      ><a href="#" data-icon="100"><img src="img/icons/emblem_100.png" /></a><a href="#" data-icon="101"
        ><img src="img/icons/emblem_101.png" /></a
      ><a href="#" data-icon="102"><img src="img/icons/emblem_102.png" /></a><a href="#" data-icon="103"
        ><img src="img/icons/emblem_103.png" /></a
      ><a href="#" data-icon="104"><img src="img/icons/emblem_104.png" /></a><a href="#" data-icon="105"
        ><img src="img/icons/emblem_105.png" /></a
      ><a href="#" data-icon="106"><img src="img/icons/emblem_106.png" /></a><a href="#" data-icon="107"
        ><img src="img/icons/emblem_107.png" /></a
      ><a href="#" data-icon="108"><img src="img/icons/emblem_108.png" /></a><a href="#" data-icon="109"
        ><img src="img/icons/emblem_109.png" /></a
      ><a href="#" data-icon="110"><img src="img/icons/emblem_110.png" /></a><a href="#" data-icon="111"
        ><img src="img/icons/emblem_111.png" /></a
      ><a href="#" data-icon="112"><img src="img/icons/emblem_112.png" /></a><a href="#" data-icon="113"
        ><img src="img/icons/emblem_113.png" /></a
      ><a href="#" data-icon="114"><img src="img/icons/emblem_114.png" /></a><a href="#" data-icon="115"
        ><img src="img/icons/emblem_115.png" /></a
      ><a href="#" data-icon="116"><img src="img/icons/emblem_116.png" /></a><a href="#" data-icon="117"
        ><img src="img/icons/emblem_117.png" /></a
      ><a href="#" data-icon="118"><img src="img/icons/emblem_118.png" /></a><a href="#" data-icon="119"
        ><img src="img/icons/emblem_119.png" /></a
      ><a href="#" data-icon="120"><img src="img/icons/emblem_120.png" /></a><a href="#" data-icon="121"
        ><img src="img/icons/emblem_121.png" /></a
      ><a href="#" data-icon="122"><img src="img/icons/emblem_122.png" /></a><a href="#" data-icon="123"
        ><img src="img/icons/emblem_123.png" /></a
      ><a href="#" data-icon="124"><img src="img/icons/emblem_124.png" /></a><a href="#" data-icon="125"
        ><img src="img/icons/emblem_125.png" /></a
      ><a href="#" data-icon="126"><img src="img/icons/emblem_126.png" /></a><a href="#" data-icon="127"
        ><img src="img/icons/emblem_127.png" /></a
      ><a href="#" data-icon="128"><img src="img/icons/emblem_128.png" /></a><a href="#" data-icon="129"
        ><img src="img/icons/emblem_129.png" /></a
      ><a href="#" data-icon="130"><img src="img/icons/emblem_130.png" /></a><a href="#" data-icon="131"
        ><img src="img/icons/emblem_131.png" /></a
      ><a href="#" data-icon="132"><img src="img/icons/emblem_132.png" /></a><a href="#" data-icon="133"
        ><img src="img/icons/emblem_133.png" /></a
      ><a href="#" data-icon="134"><img src="img/icons/emblem_134.png" /></a><a href="#" data-icon="135"
        ><img src="img/icons/emblem_135.png" /></a
      ><a href="#" data-icon="136"><img src="img/icons/emblem_136.png" /></a><a href="#" data-icon="137"
        ><img src="img/icons/emblem_137.png" /></a
      ><a href="#" data-icon="138"><img src="img/icons/emblem_138.png" /></a><a href="#" data-icon="139"
        ><img src="img/icons/emblem_139.png" /></a
      ><a href="#" data-icon="140"><img src="img/icons/emblem_140.png" /></a><a href="#" data-icon="141"
        ><img src="img/icons/emblem_141.png" /></a
      ><a href="#" data-icon="142"><img src="img/icons/emblem_142.png" /></a><a href="#" data-icon="143"
        ><img src="img/icons/emblem_143.png" /></a
      ><a href="#" data-icon="144"><img src="img/icons/emblem_144.png" /></a><a href="#" data-icon="145"
        ><img src="img/icons/emblem_145.png" /></a
      ><a href="#" data-icon="146"><img src="img/icons/emblem_146.png" /></a><a href="#" data-icon="147"
        ><img src="img/icons/emblem_147.png" /></a
      ><a href="#" data-icon="148"><img src="img/icons/emblem_148.png" /></a><a href="#" data-icon="149"
        ><img src="img/icons/emblem_149.png" /></a
      ><a href="#" data-icon="150"><img src="img/icons/emblem_150.png" /></a><a href="#" data-icon="151"
        ><img src="img/icons/emblem_151.png" /></a
      ><a href="#" data-icon="152"><img src="img/icons/emblem_152.png" /></a><a href="#" data-icon="153"
        ><img src="img/icons/emblem_153.png" /></a
      ><a href="#" data-icon="154"><img src="img/icons/emblem_154.png" /></a><a href="#" data-icon="155"
        ><img src="img/icons/emblem_155.png" /></a
      ><a href="#" data-icon="156"><img src="img/icons/emblem_156.png" /></a><a href="#" data-icon="157"
        ><img src="img/icons/emblem_157.png" /></a
      ><a href="#" data-icon="158"><img src="img/icons/emblem_158.png" /></a><a href="#" data-icon="159"
        ><img src="img/icons/emblem_159.png" /></a
      ><a href="#" data-icon="160"><img src="img/icons/emblem_160.png" /></a><a href="#" data-icon="161"
        ><img src="img/icons/emblem_161.png" /></a
      ><a href="#" data-icon="162"><img src="img/icons/emblem_162.png" /></a><a href="#" data-icon="163"
        ><img src="img/icons/emblem_163.png" /></a
      ><a href="#" data-icon="164"><img src="img/icons/emblem_164.png" /></a><a href="#" data-icon="165"
        ><img src="img/icons/emblem_165.png" /></a
      ><a href="#" data-icon="166"><img src="img/icons/emblem_166.png" /></a><a href="#" data-icon="167"
        ><img src="img/icons/emblem_167.png" /></a
      ><a href="#" data-icon="168"><img src="img/icons/emblem_168.png" /></a><a href="#" data-icon="169"
        ><img src="img/icons/emblem_169.png" /></a
      ><a href="#" data-icon="170"><img src="img/icons/emblem_170.png" /></a><a href="#" data-icon="171"
        ><img src="img/icons/emblem_171.png" /></a
      ><a href="#" data-icon="172"><img src="img/icons/emblem_172.png" /></a><a href="#" data-icon="173"
        ><img src="img/icons/emblem_173.png" /></a
      ><a href="#" data-icon="174"><img src="img/icons/emblem_174.png" /></a><a href="#" data-icon="175"
        ><img src="img/icons/emblem_175.png" /></a
      ><a href="#" data-icon="176"><img src="img/icons/emblem_176.png" /></a><a href="#" data-icon="177"
        ><img src="img/icons/emblem_177.png" /></a
      ><a href="#" data-icon="178"><img src="img/icons/emblem_178.png" /></a><a href="#" data-icon="179"
        ><img src="img/icons/emblem_179.png" /></a
      ><a href="#" data-icon="180"><img src="img/icons/emblem_180.png" /></a><a href="#" data-icon="181"
        ><img src="img/icons/emblem_181.png" /></a
      ><a href="#" data-icon="182"><img src="img/icons/emblem_182.png" /></a><a href="#" data-icon="183"
        ><img src="img/icons/emblem_183.png" /></a
      ><a href="#" data-icon="184"><img src="img/icons/emblem_184.png" /></a><a href="#" data-icon="185"
        ><img src="img/icons/emblem_185.png" /></a
      ><a href="#" data-icon="186"><img src="img/icons/emblem_186.png" /></a><a href="#" data-icon="187"
        ><img src="img/icons/emblem_187.png" /></a
      ><a href="#" data-icon="188"><img src="img/icons/emblem_188.png" /></a><a href="#" data-icon="189"
        ><img src="img/icons/emblem_189.png" /></a
      ><a href="#" data-icon="190"><img src="img/icons/emblem_190.png" /></a><a href="#" data-icon="191"
        ><img src="img/icons/emblem_191.png" /></a
      ><a href="#" data-icon="192"><img src="img/icons/emblem_192.png" /></a><a href="#" data-icon="193"
        ><img src="img/icons/emblem_193.png" /></a
      ><a href="#" data-icon="194"><img src="img/icons/emblem_194.png" /></a><a href="#" data-icon="195"
        ><img src="img/icons/emblem_195.png" /></a
      >
    </div>
  </div>
</div>
