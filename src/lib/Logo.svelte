<script lang="ts">
  // import { onMount } from 'svelte';
  // onMount(async () => {
  //     const ids = ['#A1', '#A2', '#A3', '#R1', '#R2', '#T', '#C', '#I', '#A']
  //     for(const id of ids) {
  //         const elm = document.querySelector(id)
  //         console.log(id, elm.getTotalLength())
  //         elm.style.strokeDashArray = elm.getTotalLength()
  //         elm.style.strokeDashoffset = elm.getTotalLength()
  //     }
  // });
</script>

<div class="flex items-center justify-center logo-container" id="triarc">
  <svg
    width="167px"
    height="101px"
    viewBox="0 0 167 101"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="arc"
      transform="translate(83.500000, 50.500000) scale(1, -1) translate(-83.500000, -50.500000) "
      fill-rule="nonzero"
    >
      <g id="red" transform="translate(0.000000, 0.192133)" fill="#DC002E">
        <path
          d="M23.9999994,22.6666661 L23.9999994,22.7573328 C23.9999994,56.1213319 46.1106655,76.0813314 83.1679979,76.0919981 C120.222664,76.0813314 142.343996,56.1213319 142.343996,22.7573328 L142.343996,22.6666661 L142.343996,1.21866664 L166.093329,1.21866664 L166.093329,22.6666661 L166.095996,22.6666661 C166.253329,44.3653322 159.166663,63.0573318 145.603996,76.7319981 C138.074663,84.3266646 128.746663,90.1693311 117.915997,94.1106643 C107.437331,97.9159976 95.7426643,99.8506642 83.1679979,99.8506642 C70.5999982,99.8506642 58.9106652,97.9159976 48.4213321,94.1106643 C37.5839991,90.1693311 28.2719993,84.3266646 20.7413328,76.7319981 C7.17199982,63.0573318 0.0866666645,44.3653322 0.241333327,22.6666661 L0.241333327,1.21866664 L23.9999994,1.21866664 L23.9999994,22.6666661 Z"
          id="path158"
        />
      </g>
      <g id="green" transform="translate(29.408933, 0.153600)" fill="#009534">
        <path
          d="M106.666664,19.9999995 L106.666664,19.9999995 C106.666664,59.6866652 79.307998,70.0186649 53.7586653,70.0186649 C28.2053326,70.0186649 0.865333312,59.6893318 0.865333312,19.9999995 L0.865333312,1.17999997 L18.6719995,1.17999997 L18.6719995,19.9999995 C18.6719995,38.5626657 31.7986659,53.037332 53.7586653,53.037332 C75.7239981,53.037332 88.8359978,38.5493324 88.8359978,19.9999995 L88.8359978,1.17999997 L106.666664,1.17999997 L106.666664,19.9999995 Z"
          id="path162"
        />
      </g>
      <g id="blue" transform="translate(53.834665, -0.000000)" fill="#007BC0">
        <path
          d="M29.3333326,46.6666655 C12.1306664,46.6666655 0.563999986,35.1386658 0.563999986,17.9866662 L0.563999986,1.02666664 L12.4386664,1.02666664 L12.4386664,17.9866662 C12.4386664,28.5039993 18.7559995,34.7826658 29.3333326,34.7826658 C39.9133323,34.7826658 46.2359988,28.5039993 46.2359988,17.9866662 L46.2359988,1.02666664 L58.1079985,1.02666664 L58.1079985,17.9866662 C58.1079985,35.1386658 46.5399988,46.6666655 29.3333326,46.6666655"
          id="path166"
        />
      </g>
    </g>
  </svg>
</div>

<style style lang="postcss">
  #A {
    stroke-dasharray: 335;
    stroke-dashoffset: 335;
    animation: dash 1s linear forwards;
  }

  #A1 {
    stroke-dasharray: 206;
    stroke-dashoffset: 206;
    animation: dash 1s linear forwards;
  }

  #A2 {
    stroke-dasharray: 331;
    stroke-dashoffset: 206;
    animation: dash 1s linear forwards;
  }

  #A3 {
    stroke-dasharray: 494;
    stroke-dashoffset: 494;
    animation: dash 1s linear forwards;
  }

  #R1 {
    stroke-dasharray: 186;
    stroke-dashoffset: 186;
    animation: dash 1s linear forwards;
  }

  #R2 {
    stroke-dasharray: 186;
    stroke-dashoffset: 186;
    animation: dash 1s linear forwards;
  }

  #T {
    stroke-dasharray: 225;
    stroke-dashoffset: 225;
    animation: dash 1s linear forwards;
  }

  #C {
    stroke-dasharray: 279;
    stroke-dashoffset: 279;
    animation: dash 1s linear forwards;
  }

  #I {
    stroke-dasharray: 122;
    stroke-dashoffset: 122;
    animation: dash 1s linear forwards;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0;
    }
  }

  .logo {
    background: transparent;
    height: 300px;
  }

  .logo-container {
    @apply flex items-center justify-center;
    background: url('./zuerich-bg.png') 50% 0% / cover;
  }

  @media (max-width: 768px) {
    .logo {
      padding: 16px;
    }

    .logo-container {
      background: url('./zuerich-bg-768.png') 50% 0% / cover;
    }
  }

  @media (max-width: 1024px) {
    .logo-container {
      background: url('./zuerich-bg-1024.png') 50% 0% / cover;
    }
  }

  @media (max-width: 1440px) {
    .logo-container {
      background: url('./zuerich-bg-1440.png') 50% 0% / cover;
    }
  }

  @media (max-width: 1920px) {
    .logo-container {
      background: url('./zuerich-bg-1920.png') 50% 0% / cover;
    }
  }

  @media (min-width: 1024px) {
    .logo {
      padding: 64px;
    }
  }
</style>
