<div class="bg-gray-50">
  <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200">
      <h2 class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
        Werte
      </h2>
      <dl class="mt-6 space-y-6 divide-y divide-gray-200">
        {#each values as { id, title, content }}
          <div class="pt-6">
            <dt class="text-lg">
              <button on:click={handleAccordion(id)} class="text-left w-full flex justify-between items-start text-gray-400">
                <span class="font-medium text-gray-900">
                  {title}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <svg class=" -rotate-180 h-6 w-6 transform" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
            </dt>
            <dd class="mt-2 pr-12 ">
              {#each content as p }
                <p class="text-base text-gray-500">TEXT1 { p }</p>
              {/each}
            </dd>
          </div>
        {/each}
      </dl>
    </div>
  </div>
</div>
<script>
  let values = [
    {
      id: "value-1",
      title: "Starkes Team",
      content: [
        "Unsere Firmenkultur beruht auf den Grundsätzen der Gleichberechtigung, Mitbestimmung und Partizipation. Entscheide werden soziokratisch gemeinsam gefällt. In wöchentlichen Meetings verfeinern wir unsere Arbeitsweise, lösen Probleme und passen unsere Strategie an. Wir investieren viel in Teambildung und gutes Arbeitsklima und motivieren damit die Mitarbeiter zu Höchstleistungen.",
        "abc"
      ],
    },
    {
      id: "value-2",
      title: "Transparenz",
      content: ["Durch offene, ehrliche und klare Kommunikation schaffen wir gegenseitiges Vertrauen und fördern Respekt und Toleranz. Wir verstehen jedes Projekt als Kooperation und binden alle Beteiligten in den Entwicklungsprozess mit ein. Wir rapportieren unsere Arbeit transparent und präsentieren kontinuierlich Zwischenergebnisse."],
    },
    {
      id: "value-3",
      title: "Innovationslust",
      content: [
        "Kreativität und Innovationshunger prägen unsere Unternehmenskultur. Wir lassen Raum für unkonventionelle Ideen und fördern gezielt mit permanentem Hinterfragen. (hier fehlt ein Satz)",
        "Der technische Wandel gibt uns die Chance neue Strategien auszuprobieren und bestehende Geschäftsmodelle weiterzuentwickeln. ",
        "Gemeinsam erfinden wir uns täglich neu und schaffen mit unseren Lösungen den entscheidenden Wettbewerbsvorteil für Ihr Unternehmen. "
      ],
    },
    {
      id: "value-4",
      title: "Qualität (standards)",
      content: ["Unser Qualitätsverständnis ist einfach: Wir betrachten unsere Arbeit erst dann als erledigt, wenn wir und unsere Kunden mit dem finalen Produkt zufrieden und sämtliche Anforderung erfüllt sind. Die berühmte „Extrameile“ gehen wir dabei aus eigenem Antrieb. Durch umfangreiches Testen schaffen wir Vertrauen (in die Qualität der Software). Wir messen die Qualität an Funktionalität, Effizienz, Zuverlässigkeit, Benutzbarkeit, Änderbarkeit, Kompatibilität und Sicherheit."],
    },
    {
      id: "value-5",
      title: "Nachhaltig",
      content: [
        "Der bewusste Umgang mit Ressourcen bestimmt unser Handeln. Als Unternehmen sind wir klimaneutral. Dabei halten wir den Konsum so tief wie möglich und kompensieren unvermeidbare Emissionen. Unseren Energiebedarf decken wir zu 100% durch erneuerbare Energien. Bei der Beschaffung achten wir darauf hochwertige langlebige Produkte einzukaufen und schenken ihnen nach der Ausmusterung ein zweites Leben ausserhalb von triarc. Wir motivieren unsere Mitarbeiter und Kunden zu umweltgerechtem Verhalten, reisen mit den öffentlichen Verkehrsmitteln und stellen unseren Mitarbeitern Velos zur Verfügung. Soziale Projekte unterstützen wir mit Kostenreduktion und Zusatzleistungen.",
        "In der Softwareentwicklung achten wir besonders auf die digitale Nachhaltigkeit. Unsere Produkte müssen effizient, ausgereift, modular, wartungsarm und langlebig sein. Wir verwenden möglichst Open Source Software. "
      ],
    }
  ];
  let currentOpenAccordion = 'value-1';
  const handleAccordion = (id) => currentOpenAccordion = id;
</script>
