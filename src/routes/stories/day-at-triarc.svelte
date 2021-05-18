<script>
  import Header from '../../lib/components/Header.svelte'
  import Footer from '../../lib/components/Footer.svelte'
</script>

<svelte:head>
  <title>triarc-labs - Day @ triarc</title>
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
              Es ist 7:57 Uhr. Ich stelle meinen Laptop an, habe eine Tasse Kaffee in der Hand und bin – Corona konform
              - im Homeoffice. Und im Trainer. Mit Bad Hairday.
            </p>
            <p class="mb-4">
              Ich checke im Slack die automatisierten Notify-Channels, die Logs auf dem von mir betreuten System und ob
              Merge Requests pendent sind. Und ob ich mit Wasser meine Haare in Form kriege. Alles in Ordnung auf den
              Systemen. Haare keine Chance. Ok, Cap bereitlegen oder einfach Kamera nicht einschalten. Entspannt öffne
              ich das aktuelle Sprintboard in Gitlab und lege mit einer neuen mir zugewiesenen Story los.
            </p>
            <p class="mb-4">
              Um 9:30 Uhr beginnt im Teams das Daily: unsere Corona-Variante des Treffs an der Kaffeemaschine. Ich
              entscheide mich für die Cap-Variante. Wir machen eine Runde, in der jeder das Highlight des gestrigen
              Tages beschreibt, sowie auf was er/sie sich heute freut und was ihm/ihr heute Sorgen bereitet. Dabei
              erfahre ich über CORS Probleme, komplexe Helm Charts, die Unzuverlässigkeit von Handwerkern als auch dass
              es Daves Waschtag ist.
            </p>
            <p class="mb-4">
              Nach dem Daily beginnt meine Projektleiterin Iris das Teamly: das Daily im Projektteam. Jeder berichtet
              über seine gestrigen Arbeiten sowie den heutigen Todos. Wir besprechen Unklarheiten und prüfen den
              zeitlichen Fortschritt. Danach wartet meine Story wieder auf mich.
            </p>
            <p class="mb-4">Es ist Mittag. Ich überprüfe die Küche nach Essbarem.</p>
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
              Zudem ist es Donnerstag und somit ist um 12:30 Soziokratie-Meeting. Thema heute sind die langsamen und
              unzuverlässigen Gitlab Runners. Das Team diskutiert Alternativen. Es wird entschieden, dass zwei
              Mitarbeiter je eine Alternative evaluieren und dem Team über die Erfahrungen berichten.
            </p>
            <p class="mb-4">
              Ich habe die Story fertig und erstelle einen Merge Request und frage im Projektchat nach einem Review. Max
              gibt mir Feedback und schlägt eine Verbesserung vor. Ich bin nicht einverstanden. Wir schauen es gemeinsam
              an und kommen zu einer besseren Lösung. Ich merge alles zurück auf den Development Branch und starte von
              dort aus ein Deployment auf die Testumgebung.
            </p>
            <p class="mb-4">
              Sobald das fertig ist, teste ich die Funktionalität auf einem Endgerät. «Klappt 1a!» und schiebe ich die
              Story auf dem Gitlab Board weiter zum Testing durch die Projektleitung und beginne mit der nächsten Story.
            </p>
            <p class="mb-4">
              Und als ich den Merge Request für diese Story abschliesse und per Zufall auf die Uhr schaue, ist es
              bereits Feierabend. Das Cap ziehe ich aus und deponiere es auf meiner Tastatur; Für morgen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative mt-16 py-16 bg-blue-triarc">
    <div class="max-w-7xl mx-auto bg-blue-triarc lg:bg-transparent">
      <div
        class="max-w-md mx-auto"
      >
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
