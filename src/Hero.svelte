<div class="relative bg-white overflow-hidden">
    <div class="max-w-screen-xl mx-auto ">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pt-32 lg:pb-28 xl:pb-32 xl:pt-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <main class="mt-20 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-10 lg:px-8 xl:mt-10 lg:pt-6 lg:px-4 lg:px-8">
                <div class="sm:text-center lg:text-left">
                    <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-4xl lg:text-6xl">
                        triarc laboratories
                        <br class="xl:hidden" />
                        <span class="text-indigo-600"></span>
                    </h2>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        { slogan }
                    </p>
                    <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-m sm:max-w-m sm:mx-auto md:mt-5 md:text-m lg:mx-0">
                        Als Innovations-Manufaktur hauchen wir Ihrer Vision digitales Leben ein. Wir transformieren analoge Arbeitsprozesse und kreieren digitale Geschäftsmodelle. Unser Fokus liegt in der Herstellung von (Mobil-)Applikationen mit Echtzeit-Integration in bestehende Ökosysteme. Unsere hochqualifizierten Ingenieure arbeiten mit modernster Technologie und entwickeln massgeschneiderte intuitive Software. Wir begleiten Sie von der Idee, über die Entwicklung bis zum Betrieb und der Wartung.
                    </p>
                    <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div class="rounded-md shadow">
                            <a href="#contacts" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                                Kontaktiere uns
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" alt="" />
    </div>
</div>
<script>
    import Navbar from './Navbar.svelte';
    let heroSloganList = [
        "Wir leben Synergie",
        "Unsere Perspektive hinzufügen",
        "Vision teilen",
        "Begeisterung austauschen."
    ];
    const slogan = heroSloganList[Math.floor(Math.random() * heroSloganList.length)];
</script>
