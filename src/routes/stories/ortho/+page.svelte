<script lang="ts">
  import scanBoxesImage from '$lib/assets/img/stories/ortho/scan-boxes-1080.webp'
  import iPadRightViewImage from '$lib/assets/img/stories/ortho/iPad-right-view-1080.webp'
  import deskSmileImage from '$lib/assets/img/stories/ortho/desk-smile-1080.webp'
  import applicationIPadViewImage from '$lib/assets/img/stories/ortho/application-iPad-view-1080.webp'
  import orthoLogo from '$lib/assets/img/stories/ortho/ortho-logo.png'
  import orthoTeamImage from '$lib/assets/img/stories/ortho/ortho-team.jpg'
  let scanBoxes = {
    image: scanBoxesImage,
    imageAlt: 'scan boxes',
  }
  let iPadRightView = {
    image: iPadRightViewImage,
    imageAlt: 'iPad view with application',
  }
  let deskSmile = {
    image: deskSmileImage,
    imageAlt: 'two persons happy with application',
  }
  let applicationIPadView = {
    image: applicationIPadViewImage,
    imageAlt: 'application close up view',
  }
</script>

<svelte:head>
  <title>Success stories - triarc-labs</title>
</svelte:head>

<div class="relative">
  <div class="bg-white overflow-hidden pt-16 md:pt-32">
    <div class="relative max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base text-blue-triarc font-semibold tracking-wide">triarc-labs: Success Story ORTHO-TEAM</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            «Die Zusammenarbeit mit triarc-labs ist für uns nicht mehr wegzudenken.»
          </h3>
        </div>
      </div>
      <div class="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
        <div class="relative lg:row-start-1 lg:col-start-2">
          <svg
            class="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"
            width="404"
            height="384"
            fill="none"
            viewBox="0 0 404 384"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="de316486-4a29-4312-bdfc-fbce2132a2c1"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
          </svg>
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none">
            <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img class="object-cover overflow-hidden" alt="Ortho-Logo" src={orthoLogo} height="100" width="400" />
            </div>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text-lg text-gray-500 pr-4 pt-8">
              50% Zeitersparnis pro Bestellung: ORTHO-TEAM steigert die Effizienz mit den von triarc-labs konzipierten
              Applikationen Order und Client
            </p>
          </div>
          <div class="text-base max-w-prose mx-auto lg:max-w-none">
            <p class="text text-gray-500 mt-4">
              Wie die Digitalisierung nicht nur die Effizienz steigert, sondern auch wirtschaftlichen Mehrwert schafft
              und warum die Einbindung des Kunden für ORTHO-TEAM an erster Stelle steht.
            </p>
          </div>
        </div>
      </div>

      <div class="text-base max-w-prose mx-auto py-4 lg:max-w-none mt-16 md:mt-32">
        <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">Ortho-Order</p>
      </div>
      <div class="relative text-base py-4 max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          Wichtigste Effekte des Wechsels von handschriftlich ausgefüllten Formularen auf digital erstellte
          Bestellungen: Der Bestellprozess mit der Order App ist deutlich einfacher, schneller und bei Wareneingang
          besser nachvollziehbar.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start max-w-prose mx-auto lg:max-w-5xl lg:mx-0">
        <div class="relative">
          <div class="prose text-gray-500 mx-auto lg:max-w-none">
            <ul class="list-disc pl-4">
              <li>50% Zeiteinsparung pro Bestellung</li>
              <li>80'000 Artikel mit über 500'000 Varianten performant verfügbar</li>
              <li>Strategische Interessen der Firma im Einkauf gesichert</li>
            </ul>
            <blockquote class="py-8 max-w-sm">
              <p class="text-gray-900 font-semibold">«Handschriftliches Ausfüllen von Formularen, das war gestern!»</p>
              <p class="pt-2 italic text-sm">Patrick Rohrer, CFO der ORTHO-TEAM Gruppe</p>
            </blockquote>
          </div>
          <div class="flex">
            <div class="bg-gray-300 w-6 h-auto rounded-full my-1" />
            <p class="pl-4 text-gray-900 leading-7 italic">
              Preis- und Zeit-optimiertes Bestellwesen. Eine mobile Applikation zum effizienten Bestellen von benötigten
              Artikeln ohne sich um Details, wie bei welchem Lieferanten bestellt werden soll, kümmern zu müssen. Vom
              digital koordinierten Einkauf bis zur Benachrichtigung auf Grund von Wareneingängen regelt OrthoOrder alle
              Details selbst.
            </p>
          </div>
        </div>
        <div class="mt-12 relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <picture>
              <source
                type="image/webp"
                srcset="{scanBoxes.image}-320.webp 320w, {scanBoxes.image}-640.webp 640w, {scanBoxes.image}-1080.webp 1080w"
              />
              <img
                class="object-cover overflow-hidden"
                alt={scanBoxes.imageAlt}
                srcset="{scanBoxes.image}-320.webp 320w, {scanBoxes.image}-640.webp 640w, {scanBoxes.image}-1080.webp 1080w"
                src="{scanBoxes.image}-1080.webp"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="text-base max-w-prose mx-auto py-4 lg:max-w-none mt-16 md:mt-32">
        <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">Ortho-Client</p>
      </div>
      <div class="relative text-base py-4 max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          Sämtliche auftragsbezogenen Daten wie die ärztliche Verordnung, Bilder oder erbrachte Leistungen (mobil und
          digital) können mit der Client App zugeordnet werden. So wurden u.a. die Durchlaufzeiten bei der
          Leistungsverrechnung wesentlich verkürzt und der Aufwand in Backoffice und Administration reduziert.
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start max-w-prose mx-auto lg:max-w-5xl lg:mx-0">
        <div class="relative">
          <div class="prose text-gray-500 mx-auto lg:max-w-none">
            <ul class="list-disc pl-4">
              <li>7000 Aufträge pro Monat, d.h. 80% aller Aufträge</li>
              <li>Alle Arbeitsprozesse eines Kundenauftrags in einer Applikation</li>
              <li>100% digitale und auftragsfokussierte Zusammenarbeit aller Beteiligten</li>
            </ul>
            <blockquote class="py-8 max-w-sm">
              <p class="text-gray-900 font-semibold">
                «Fokus bei der Entwicklung unserer Client App war, dass Aufträge bereits bei der Entstehung digital
                erfasst werden können, sei es bei Versorgungen im Haus oder auch extern in Spitälern und Heimen.»
              </p>
              <p class="py-2 italic">Patrick Rohrer, CFO der ORTHO-TEAM Gruppe</p>
            </blockquote>
          </div>
          <div class="flex">
            <div class="bg-gray-300 w-6 h-auto rounded-full my-1" />
            <p class="pl-4 text-gray-900 leading-7 italic">
              Die digitale Kundenbegleiterin, gelöst als mobil einsetzbare Applikation zur Erstellung der Anamnese,
              Analyse bis hin zur fallbezogenen und interdisziplinären Kommunikation. Damit stellt OrthoClient eine
              effiziente Auftragsabwicklung sowie einen exzellenten Kundenservice sicher.
            </p>
          </div>
        </div>
        <div class="mt-12 max-h-md relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <picture>
              <source
                type="image/webp"
                srcset="{applicationIPadView.image}-320.webp 320w, {applicationIPadView.image}-640.webp 640w, {applicationIPadView.image}-1080.webp 1080w"
              />
              <img
                class="object-cover overflow-hidden"
                alt={applicationIPadView.imageAlt}
                srcset="{applicationIPadView.image}-320.webp 320w, {applicationIPadView.image}-640.webp 640w, {applicationIPadView.image}-1080.webp 1080w"
                src="{applicationIPadView.image}-1080.webp"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="text-base max-w-prose mx-auto py-4 lg:max-w-none mt-16 md:mt-32">
        <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Die Zusammenarbeit
        </p>
      </div>
      <div class="relative text-base py-4 max-w-prose mx-auto lg:max-w-5xl lg:mx-0 lg:pr-72">
        <p class="text-lg text-gray-500">
          «Dabei haben wir 1:1 mitbekommen, wieviel Kreativität, Erfahrung und Engagement bei der Umsetzung
          unterschiedlichster Anforderungen eingeflossen sind. Mit ein Grund dafür ist sicherlich, dass triarc-labs
          inhabergeführt ist.»
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start max-w-prose mx-auto lg:max-w-5xl lg:mx-0">
        <div class="relative">
          <div class="prose text-gray-500 mx-auto lg:max-w-none">
            <blockquote class="py-8 max-w-sm">
              <p class="text-gray-900 font-semibold">
                «Wir waren maximal und von Beginn an in den Entwicklungsprozess integriert»
              </p>
              <p class="py-2 italic text-sm">Patrick Rohrer, CFO der ORTHO-TEAM Gruppe</p>
            </blockquote>
            <p>
              Patrick Rohrer und sein Team schätzen auch die Transparenz durch konkrete Aufwandschätzungen, klar
              vereinbarte Kosten, Kulanz, die wirtschaftlichen Lizenzmodelle und den raschen, unkomplizierten Support –
              «und die Menschlichkeit: persönlich, offen, erfrischend!»
            </p>
            <p>
              Als nächste Schritte auf dieser Basis plant ORTHO-TEAM mit triarc-labs, neben der generellen Optimierung
              und Weiterentwicklung, mit dem Pilotprojekt «Rechnungskontrolle» die Umstellung auf digitale Rechnungen,
              die Unterstützung des Verordnungsprozesses für Ärzte und Spitäler sowie die Integration zu Spitalsystemen.
            </p>
            <blockquote class="py-8 max-w-sm">
              <p class="text-gray-900 font-semibold">
                «Während des ganzen Prozesses steht für triarc-labs immer im Fokus, dem Kunden innovativen Mehrwert zu
                bieten, von ‘Ideation to Production’»
              </p>
              <p class="py-2 italic text-sm">Serge Müller, CEO und Partner von triarc-labs</p>
            </blockquote>
          </div>
        </div>
        <div class="relative text-base max-w-prose mx-auto lg:mt-0 lg:max-w-none">
          <div class="relative bg-white rounded-lg shadow-lg overflow-hidden">
            <picture>
              <source
                type="image/webp"
                srcset="{deskSmile.image}-320.webp 320w, {deskSmile.image}-640.webp 640w, {deskSmile.image}-1080.webp 1080w"
              />
              <img
                class="object-cover overflow-hidden"
                alt={deskSmile.imageAlt}
                srcset="{deskSmile.image}-320.webp 320w, {deskSmile.image}-640.webp 640w, {iPadRightView.image}-1080.webp 1080w"
                src="{deskSmile.image}-1080.webp"
              />
            </picture>
          </div>
        </div>
      </div>

      <div class="text-base max-w-prose mx-auto py-4 lg:max-w-none mt-16 md:mt-32">
        <p class="mt-2 text-2xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
          Die Kundin: ORTHO-TEAM GRUPPE
        </p>
      </div>
      <div class="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-start max-w-prose mx-auto lg:max-w-5xl lg:mx-0">
        <div class="relative flex py-4">
          <div class="prose text-gray-500 mx-auto lg:max-w-none">
            <figure class="relative bg-white overflow-hidden">
              <img class="object-cover overflow-hidden rounded-lg shadow-lg" alt="Ortho-Team" src={orthoTeamImage} />
              <figcaption class="mt-3 flex flex-col text-sm text-gray-500 ml-2">
                <div class="text-black">Bei der Übergabe des Dankeschöns</div>
                <div class="italic pt-2">
                  Serge Müller, Peter Bartos, Patrick Rohrer, Kristina Michalowski, Ute Kircher
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="relative py-4 text-gray-500">
          <p>
            Mit 15 Standorten und rund 300 Mitarbeitenden in der ganzen Schweiz ist die ORTHO-TEAM Gruppe Innovations-
            und Marktführerin in der Herstellung von Hilfsmitteln der Orthopädie- und Rehatechnik.
          </p>
          <blockquote class="py-8 max-w-sm">
            <p class="text-gray-900 font-semibold">«triarc-labs forever!»</p>
            <p class="py-2 italic text-sm">Patrick Rohrer, CFO der ORTHO-TEAM Gruppe, humorvoll in einer E-Mail</p>
          </blockquote>
        </div>
      </div>
    </div>
  </div>
</div>
