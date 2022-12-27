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

<div class="bg-green-triarc bg-opacity-10">
  <div class="px-8 md:px-16 py-32 max-w-screen-lg mx-auto">
    <div class="mx-auto">
      <h2 class="text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">Manifest</h2>
      <dl class="mt-6 space-y-6 divide-y divide-green-triarc text-gray-800">
        {#each values as { id, title, content }}
          <div class="pt-6">
            <dt class="text-lg">
              <button
                class="text-left w-full flex justify-between items-start focus:outline-none cursor-pointer"
              >
                <span class="font-medium flex items-center">
                  {title}
                </span>
              </button>
            </dt>
            <dd class="mt-2">
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
