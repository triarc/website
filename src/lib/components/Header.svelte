<div class="bg-gray-900 py-4 px-4 xm:px-6 lg:px-8 fixed top-0 z-30 w-full">
  <div class="max-w-4xl lg:max-w-7xl mx-auto mx-4">
    <a href="/" class="flex items-center">
      <svg
        aria-hidden="true"
        focusable="false"
        role="img"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        class="text-white"
      >
        <path
          fill="currentColor"
          d="M136.97 380.485l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113l83.928-83.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-116.485 116c-4.686 4.686-4.686 12.284 0 16.971l116.485 116c4.686 4.686 12.284 4.686 16.97-.001z"
          class=""
        />
      </svg>
      <div class="flex flex-col ml-4 flex-grow text-white">
        <h1 class="text-xl">
          <slot />
        </h1>
        <p class="text-sm">Hautpseite</p>
      </div>
      <img src="/icons/triarc-logo.svg" class="h-10" alt='triarc laboratories logo' />
    </a>
  </div>
</div>
