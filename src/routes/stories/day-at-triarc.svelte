<script>
  import Header from '../../lib/components/Header.svelte'
  import Footer from '../../lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>Day at triarc - triarc-labs</title>
</svelte:head>

<div class="bg-white h-screen relative">
  <Header>Day @ triarc</Header>

  <div class="bg-white mt-24 overflow-hidden">
    <div class="relative max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
      <div class="mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none">
        <div>
          <h2 class="text-base text-blue-triarc font-semibold tracking-wide uppercase">day @ triarc</h2>
          <h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet triarc-labs
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
            <figure>
              <div class="aspect-w-12 aspect-h-7 lg:aspect-none">
                <img
                  class="rounded-lg shadow-lg object-cover object-center"
                  src="/img/office/teamcall.png"
                  alt=""
                  width="1184"
                  height="1376"
                />
              </div>
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <span class="ml-2">Teams daily call</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="mt-8 lg:mt-0">
          <div class="text-base max-w-prose mx-auto lg:max-w-none text-gray-500">
            <p class="mb-4">
              Es ist 7:57 Uhr. Gähn. Mein Laptop ist in Sekundenschnelle wach. Ich hingegen brauche erst mal einen
              Kaffee. Ich blinzle um mich: Ich bin im Office. Corona-konform im Homeoffice. Und darum noch im Trainer,
              Bad Hair Day inklusive.
            </p>
            <p class="mb-4">
              Ich checke im Slack die automatisierten Notify-Channels, die Logs auf dem von mir betreuten System und, ob
              Merge Requests pendent sind. Und dann, ob ich meine Haare mit Wasser in Form kriege. Alles in Ordnung auf
              den Systemen. Haare: keine Chance. Ok, Cap bereitlegen oder einfach die Kamera nicht einschalten.
              Entspannt öffne ich das aktuelle Sprintboard in Gitlab und starte mit einer neuen mir zugewiesenen Story
              in den Tag.
            </p>
            <p class="mb-4">
              Um 9:30 Uhr beginnt im Teams das Daily. Das ist unsere Corona-Variante des Treffs an der Kaffeemaschine.
              Die «Caps Lock» Taste erinnert mich, mein Haupt zu bedecken: Cap on, Kamera off. Wir machen eine erste
              Runde, in der jeder das Highlight des gestrigen Tages beschreibt und worauf er/sie sich heute freut und
              was ihm/ihr heute Sorgen bereitet. Dabei erfahre ich über CORS Probleme, lerne wieder was zu komplexen
              Helm Charts und über den Umgang mit unzuverlässigen Handwerkern. Und höre, dass Dave heute seinen Waschtag
              hat.
            </p>
            <p class="mb-4">
              Nach dem Daily beginnt meine Projektleiterin Iris das Teamly, das Daily im Projektteam. Jeder berichtet
              über seine gestrigen Arbeiten sowie den heutigen To do’s. Wir besprechen Unklarheiten und prüfen den
              zeitlichen Fortschritt. Danach wartet meine Story darauf, fortgesetzt zu werden.
            </p>
            <p class="mb-4">
              Goto – Kleinhirn meldet an Grosshirn, dass es Mittag geworden ist. Ich überprüfe die Küche nach Essbarem.
            </p>
          </div>
          <div class="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1" />
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white overflow-hidden">
    <div class="relative max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div class="hidden lg:block absolute top-0 bottom-0 left-3/4 w-screen" />
      <div class="lg:grid lg:grid-cols-3 lg:gap-8">
        <div class="mb-8">
          <div class="relative text-base mx-auto max-w-prose lg:max-w-none flex items-center justify-center">
            <figure class="">
              <img
                class="rounded-lg shadow-lg object-cover w-96 object-center rounded-3xl"
                src="/img/office/office_view.jpg"
                alt="office view"
              />
              <figcaption class="mt-3 flex text-sm text-gray-500">
                <span class="ml-2">Alternative Officeaussicht</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div class="relative lg:row-start-1 lg:col-start-2 col-span-2">
          <div class="text-base max-w-prose mx-auto lg:max-w-none text-gray-500">
            <p class="mb-4">
              Zudem ist heute Donnerstag, also steht um 12:30 unser wöchentliches Soziokratie-Meeting an. Thema heute
              sind die langsamen und unzuverlässigen Gitlab Runners. Das Team diskutiert Alternativen. Es wird
              entschieden, dass zwei Mitarbeiter je eine Alternative evaluieren und dem Team über die Erfahrungen
              berichten. An meinem Salat ist eine Spur zu viel Essig.
            </p>
            <p class="mb-4">
              Zwei Espressi später. Mit der Story bin ich durch. Ich erstelle einen Merge Request und frage im
              Projektchat nach einem Review. Max gibt mir Feedback und schlägt eine Verbesserung vor. Ich bin nicht
              einverstanden. Also schauen wir es gemeinsam an und kommen zu einer besseren Lösung. Nichts geht über
              Schwarmintelligenz (danke, Max). Ich merge alles zurück auf den Development Branch und starte von dort aus
              ein Deployment auf die Testumgebung.
            </p>
            <p class="mb-4">
              Sobald das fertig ist, teste ich die Funktionalität auf einem Endgerät. Alles im Lack, klappt 1a! – Zur
              Belohnung spendiert mein Kühlschrank sein letztes Stracciatella-Joghurt. Ich schiebe die Story auf dem
              Gitlab Board weiter zum Testing durch die Projektleitung und beginne mit der nächsten Story.
            </p>
            <p class="mb-4">
              Wie ich den Merge Request auch für diese Story abschliesse und per Zufall auf die Uhr schaue, ist es
              bereits Abend geworden. Feierabend, aus die Maus! Verwende sie zwar nur selten, ich arbeite mit Shortcuts.
              Den Cap deponiere ich auf der Tastatur, Caps Lock für morgen... Oder vielleicht die neue Strickmütze?
              Lassen wir’s erst mal morgen werden.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative mt-16 py-16 bg-blue-triarc px-3">
    <div class="max-w-7xl mx-auto bg-blue-triarc lg:bg-transparent">
      <div class="max-w-md mx-auto">
        <h2 class="text-3xl font-extrabold text-white" id="join-heading">Schliess Dich uns an</h2>
        <p class="text-lg text-white py-4">
          und melde dich auf <a href="mailto:development@triarc-labs.com" class="underline"
            >development@triarc-labs.com</a
          >
        </p>
        <a
          href="/jobs"
          class="block w-full py-3 px-5 text-center bg-white border border-transparent rounded-md shadow-md text-base font-medium text-blue-triarc hover:bg-gray-50 sm:inline-block sm:w-auto"
          >Unsere Jobangebote</a
        >
      </div>
    </div>
  </div>
  <Footer />
</div>
