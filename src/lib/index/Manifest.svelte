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
        'Der technische Wandel eröffnet uns Chancen, neue Strategien der digitalen Transformation auszuprobieren und bestehende Geschäftsmodelle weiter zu entwickeln. Durch umfangreiches Testen stärken wir das Vertrauen in die Qualität unserer Produkte und messen die Ergebnisse an den Kriterien Funktionalität, Effizienz, Zuverlässigkeit, Benutzbarkeit, Änderbarkeit, Kompatibilität und Sicherheit. Unsere Arbeit betrachten wir erst dann als erledigt, wenn wir und unsere Kunden mit dem finalen Produkt zufrieden sind und es sämtlichen Anforderungen genügt.',
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
</script>

<div class="bg-gray-100">
  <div class="max-w-7xl mx-auto py-24 px-4 md:py-32 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">Manifest</h2>
      <dl class="mt-6 space-y-6 divide-y divide-gray-200">
        {#each values as { id, title, content }}
          <div class="pt-6">
            <dt class="text-lg">
              <button
                class="text-left w-full flex justify-between items-start text-gray-400 focus:outline-none cursor-pointer"
              >
                <span class="font-medium text-gray-700 flex items-center">
                  {title}
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-8">
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
