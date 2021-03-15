<script>
  let isMobileMenuOpen = false
  const handleMobileIconClick = () => {
    isMobileMenuOpen = !isMobileMenuOpen
  }
  const closeMenu = () => {
    isMobileMenuOpen = false
  }
  let navDisplayClass = 'block'
  let prevScrollPosition = window.pageYOffset
  window.onscroll = function () {
    const navbarElement = document.getElementById('navbar')
    const currentScrollPosition = window.pageYOffset
    if (window.pageYOffset > navbarElement.offsetHeight) {
      if (prevScrollPosition > currentScrollPosition) {
        navDisplayClass = currentScrollPosition === 0 ? 'fixed translate-y-0' : 'fixed bg-white translate-y-0'
      } else {
        navDisplayClass = '-translate-y-12'
      }
    } else {
      navDisplayClass = 'translate-y-0'
    }
    prevScrollPosition = currentScrollPosition
  }
</script>

<div class="z-20 w-full transform transition-all duration-500 {navDisplayClass}" id="navbar">
  <nav class="relative max-w-screen-xl mx-auto">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
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
        <div class="flex-1 flex items-center justify-center sm:items-center sm:justify-start">
          <div class="flex-shrink-0 flex items-center">
            <a href="#"><img class="block h-8 w-auto" src="header.svg" alt="Triarc Logo" /></a>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
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
              href="#jobs"
              class="ml-8 font-medium text-indigo-600 hover:text-indigo-900 transition duration-150 ease-in-out">Jobs</a
            >
          </div>
        </div>
      </div>
    </div>
    <div class={`${isMobileMenuOpen ? 'block' : 'hidden'} bg-white h-screen`} id="mobile-menu">
      <div class="pt-2 pb-4 space-y-1 px-4" on:click={closeMenu}>
        <a href="#services" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Dienstleistungen</a>
        <a href="#projects" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Stories</a>
        <a href="#product" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Produkt</a>
        <a href="#aboutUs" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Über uns</a>
        <a href="#jobs" class="text-gray-500 block pr-4 py-2 border-b text-base font-medium">Jobs</a>
      </div>
    </div>
  </nav>
</div>
