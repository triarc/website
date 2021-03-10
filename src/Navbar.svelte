<style>
    .mobile-nav {
        height: calc(100vh - 300px)
    }

    @media (min-width: 768px) {
        .mobile-nav {
            height: 0;
            padding: 0;
        }
    }

    .mobile-nav-item {
        @apply text-base leading-6 text-2xl font-medium p-3 text-gray-700 transition ease-in-out duration-150;
    }
    .mobile-nav-item:hover {
        @apply text-gray-900;
    }
    .mobile-nav-item:focus {
        @apply outline-none text-gray-900;
    }

    .desktop-nav {
        @apply relative bg-black;

        position: sticky;
        top: 0;
    }

    .desktop-nav-item {
        @apply text-base leading-6 font-medium text-gray-400 transition ease-in-out duration-150
    }
    .desktop-nav-item:hover {
        @apply text-white;
    }
    .desktop-nav-item:focus {
        @apply outline-none text-gray-900
    }
</style>

<div class="flex flex-col p-6 mobile-nav text-2xl bg-gray-200 sm:visible md:invisible">
    <a href="#services" class="mobile-nav-item">Dienstleistungen</a>
    <a href="#projects" class="mobile-nav-item">Projekte</a>
    <a href="#customers" class="mobile-nav-item">Kunden & Partner</a>
    <a href="#aboutUs" class="mobile-nav-item">Über uns</a>
    <a href="#jobs" class="mobile-nav-item">Jobs</a>
    <a href="#contact" class="mobile-nav-item">Kontakt</a>
</div>

<div class="desktop-nav">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6 md:justify-start md:space-x-10">
            <div class="-mr-2 -my-2 md:hidden">
                <a type="button" href="#triarc"
                        class="inline-flex items-center justify-center p-2 rounded-md text-gray-100 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"/>
                    </svg>
                </a>
            </div>
            <nav class="hidden md:flex space-x-10">
                <a href="#services" class="desktop-nav-item">Dienstleistungen</a>
                <a href="#projects" class="desktop-nav-item">Projekte</a>
                <a href="#customers" class="desktop-nav-item">Kunden & Partner</a>
                <a href="#aboutUs" class="desktop-nav-item">Über uns</a>
                <a href="#services" class="desktop-nav-item">Jobs</a>
            </nav>
            <div class="hidden md:flex items-center justify-end space-x-8 md:flex-1 lg:w-0">
                <a href="#contact" class="desktop-nav-item">Kontakt</a>
            </div>
        </div>
    </div>
</div>
