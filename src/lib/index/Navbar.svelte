<script lang="ts">
  let isMobileMenuOpen = false
  const handleMobileIconClick = () => {
    isMobileMenuOpen = !isMobileMenuOpen
  }
  const closeMenu = () => {
    isMobileMenuOpen = false
  }
</script>

<div class="z-20 fixed -top-16 w-full bg-white" id="navbar">
  <nav class="relative max-w-screen-xl mx-auto">
    <div class="max-w-7xl mx-auto px-2 lg:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <button
            on:click={handleMobileIconClick}
            type="button"
            class="inline-flex items-center justify-center p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class={`${isMobileMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg
              class={`${isMobileMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center ml-16 mr-4 lg:ml-0 lg:mr-0 justify-center lg:items-center lg:justify-start"
        >
          <img src="img/hero/triarc-labs.svg" class="h-8 flex-grow lg:hidden" />
          <div class="flex-shrink-0 flex items-center">
            <a href="https://triarc-labs.com"
              ><img class="block h-8 w-auto" src="/icons/triarc-logo.svg" height="32" width="53" alt="Triarc Logo" /></a
            >
          </div>
          <div class="hidden lg:ml-6 lg:flex lg:space-x-8 lg:items-center">
            <a
              href="#services"
              class="font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out"
              >Dienstleistungen</a
            >
            <a
              href="#projects"
              class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Stories</a
            >
            <a
              href="#product"
              class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Produkt</a
            >
            <a
              href="#aboutUs"
              class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Über uns</a
            >
            <a
              href="#customers"
              class="ml-8 font-medium text-gray-500 hover:text-gray-900 transition duration-150 ease-in-out">Einige unserer Kunden</a
            >
          </div>
        </div>
        <div class="hidden items-center lg:flex">
          <a href="/jobs" class="ml-8 font-medium text-red-triarc transition duration-150 ease-in-out">Jobs</a>
          <div class="border-r border-gray-300 h-4 mx-4" />
          <a href="/mlink" class="font-medium text-green-triarc transition duration-150 ease-in-out">μLink</a>
        </div>
      </div>
    </div>
    <div class={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white h-screen`} id="mobile-menu">
      <div class="pt-2 pb-4 space-y-1 px-4" on:click={closeMenu}>
        <a href="#services" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Dienstleistungen</a>
        <a href="#projects" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Stories</a>
        <a href="#product" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Produkt</a>
        <a href="#aboutUs" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Über uns</a>
        <a href="#customers" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Einige unserer Kunden</a>
        <a href="/jobs" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Jobs</a>
        <a href="/mlink" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">μLink</a>
      </div>
    </div>
  </nav>
</div>

<style style lang="postcss">
  #navbar {
    transition-property: transform;
    transition: 1.5s ease-in-out;
    transition-delay: 500ms;
    transform: translateY(64px);
  }
</style>
