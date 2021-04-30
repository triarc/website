<script lang="ts">
  let values = [
    {
      id: 'value-1',
      title: 'ANALYZE!',
      content: [
        'Kreativität und Innovationshunger prägen unsere Unternehmenskultur. Gemeinsam erfinden wir uns täglich neu. Unkonventionelle Ideen fördern wir, indem wir Konventionen gezielt hinterfragen. Dabei denken und handeln wir unternehmerisch, denn mit unseren Lösungen wollen wir den entscheidenden Wettbewerbsvorsprung für unsere Kunden gewinnen. Und für uns.',
      ],
    },
    {
      id: 'value-2',
      title: 'DIGITIZE!',
      content: [
        'Der technische Wandel eröffnet uns Chancen, neue Strategien der digitalen Transformation auszuprobieren und bestehende Geschäftsmodelle weiter zu entwickeln. Durch umfangreiches Testen stärken wir das Vertrauen in die Qualität unserer Produkte und messen die Ergebnisse an den Kriterien Funktionalität, Effizienz, Zuverlässigkeit, Benutzbarkeit, Änderbarkeit, Kompatibilität und Sicherheit. Unsere Arbeit betrachten wir erst dann als erledigt, wenn wir und unsere Kunden mit dem finalen Produkt zufrieden sind und es sämtlichen Anforderungen genügt.'
        ],
    },
    {
      id: 'value-3',
      title: 'REALIZE!',
      content: [
        'Jedes Projekt verstehen wir als Kooperation und binden alle Beteiligten in den Entwicklungsprozess mit ein. Wir rapportieren zu jeder Zeit transparent und präsentieren kontinuierlich Zwischenergebnisse. Wir arbeiten nach den Grundsätzen der Gleichberechtigung, Mitbestimmung und Partizipation. Darum investieren wir viel in Teambildung und gutes Arbeitsklima und motivieren uns damit gegenseitig zu Höchstleistungen.',
      ],
    },
  ]
  let currentOpenAccordion = 'value-1'
  const handleAccordion = (id) => {
    currentOpenAccordion = currentOpenAccordion === id ? undefined : id
  }
</script>

<div class="bg-gray-100">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Werte</h2>
      <dl class="mt-6 space-y-6 divide-y divide-gray-200">
        {#each values as { id, title, content }}
          <div class="pt-6" on:click={() => handleAccordion(id)}>
            <dt class="text-lg">
              <button class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none cursor-pointer">
                <span class="font-medium text-gray-700 flex items-center">
                  {title}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <svg
                    class="{currentOpenAccordion === id
                      ? '-rotate-180'
                      : 'rotate-0'}  h-6 w-6 transform transition-all text-green-triarc"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd
              class="mt-2 pr-8 transform transition-all duration-500 {currentOpenAccordion === id
                ? 'translate-y-0 text-gray-500 h-54'
                : '-translate-y-12 text-transparent h-0'}"
            >
              {#each content as p}
                <p class="text-base pb-2 text-justify cursor-pointer">{p}</p>
              {/each}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>
