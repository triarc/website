<script lang="ts">
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Block from '$lib/components/Block.svelte'
  import Technology from '$lib/index/Technology.svelte'
  import JobIntro from './job-intro.svelte'

  let contents: BlockContent[] = [
    {
      title: '<span class="text-sm">wir suchen</span><br/>Junior Software Engineer',
      content:
        'Als Junior bist hast du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
      image: { src: '/img/jobs/junior-dev.svg', alt: 'Junior Software Engineer' },
      bulletPoints: [
        'Erste Erfahrungen mit C# oder Java',
        'Erste Erfahrungen im Bereich Web / Single Page Applications',
      ],
    },
    {
      title: '<span class="text-sm">wir suchen</span><br/>Professional Software Engineer',
      content:
        'Als Professional hast du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig und übernimmst Verantwortung für deine Aufgaben.',
      image: { src: '/img/jobs/be_the_hero.svg', alt: 'Professional Software Engineer' },
      bulletPoints: [
        "Erfahrungen mit C# in der Entwicklung von API's",
        'Erfahrungen im Bereich Web und Angular',
        'Kentnisse von Elasticsearch / Postgres / MongoDB von Vorteil',
      ],
    },
    {
      title: '<span class="text-sm">wir suchen</span><br/>Senior Software Engineer',
      content:
        'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
      image: { src: '/img/jobs/super_woman.svg', alt: 'Senior Software Engineer' },
      bulletPoints: [
        "Erfahrungen mit C# in der Entwicklung von API's",
        'Erfahrungen im Bereich Web und Angular',
        'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
        'Erfahrungen Docker / Kubernetes / Gitlab CI',
      ],
    },
    // {
    //   title: '(Dev)Ops Engineer',
    //   content:
    //     'Als (Dev)Ops betreust du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',
    //
    //   image: { src: 'img/jobs/cloud_hosting.svg', alt: 'Dev/Ops Engineer' },
    //   bulletPoints: [
    //     'Erfahrungen Docker / Kubernetes / Gitlab CI',
    //     'Erfahrungen mit Google Cloud / Azure von Vorteil',
    //     'Erfahrungen mit Cypress / E2E Testing von Vorteil',
    //   ],
    // },
    {
      title: 'Was wir dir bieten',
      content:
        'Wir sind eine Software-Boutique im Herzen von Zürich, entwickeln leidenschaftlich gerne Software und sind immer auf der Suche nach neuen Talenten die uns ergänzen.',
      cards: [
        {
          title: 'Soziokratie',
          content:
            'Kollektive Intelligenz und Gleichberechtigung. In der Soziokratie wird jeder Einzelne gehört, geschätzt und kann aktiv an Entscheidungen teilnehmen. Zusammen schaffen wir optimale Arbeitsbedingungen, damit alle ihr volles Potenzial entfalten können.',
        },
        {
          title: 'Erfolgsbeteiligung',
          content:
            'Du trägst massgeblich zum Erfolg bei und sollst dafür auch belohnt werden. Ein grosser Teil des Gewinns wird quartalsweise an die Mitarbeiter ausgeschüttet',
        },
        {
          title: 'Coaching',
          content:
            'In regelmässigen Coachingmeetings sprechen wir über Wohlbefinden, Probleme, Blackboxes und Wins. Unser gemeinsames Ziel: Eine optimale Entwicklung jedes Einzelnen zu fördern',
        },
        {
          title: 'Technologie',
          content:
            'Wir bleiben immer aktuell und setzen die Technologie ein, die Sinn macht. Die richtige suchen und finden wir zusammen.',
        },
        {
          title: 'Transparenz für alle',
          content:
            'Alle Löhne werden offen kommuniziert. Es gibt keine individuellen Löhne. Die Löhne richten sich nach deiner Stufe im Trackeesystem. Für Seniors gibt’s aktuell 104k – 136k CHF.',
        },
        {
          title: 'Office Jungle',
          content:
            'Unser Office direkt am Bahnhof Hardbrücke ist eine Oase mitten in der Stadt. Über 100 Pflanzen sorgen für frische Luft und einen zauberhaften Hintergrund in deinen Teams-Calls',
        },

        // {
        //   title: '40 Stunden-Woche',
        //   content:
        //     'Wir arbeiten gern. Damit das so bleibt, brauchen wir genügend Freizeit. Dazu gehören auch 5 Wochen Ferien. Pro Jahr, nicht pro Monat.',
        // },
        {
          title: 'Home-Office',
          content:
            'Arbeite von zuhause aus, wenn du willst. Wieso auch nicht? Wir arbeiten so oder so komplett digital zusammen. Unsere Weisung: Lass dich min. 1 Mal pro Woche im Office blicken (ab 80% zweimal). Guter Kaffee, gute Gesellschaft, Dschungel und Gym bekommst du aber nur im Büro',
        },
        {
          title: 'Hardware',
          content:
            'Wähle das Setup, das zu dir passt. Nutze deine vorhandenen Skills in deinem OS. Egal ob Windows, macOS, PopOS oder Arch, du bist dein eigener Administrator sowie Support. Dazu gibt es deine Lieblingsmaus, Tastatur und Kopfhörer.',
        },
        {
          title: 'Kaffee / Bar',
          content:
            'Bediene dich an der triarc-Bar. Kaffee, Softdrinks, Bier und ein sortiertes Snack-Angebot warten auf deinen Zugriff. Darunter Sachen, die den Futterneid deiner Ernährungsberaterin wecken. Und für den Beerenhunger auch mal frische Früchtchen.',
        },

        {
          title: 'Company Events',
          content:
            'Team-Kochevents via Teams, Legosteine verbauen (streng nach Anleitung, versteht sich) und in besseren Zeiten auch Ausflüge an Festivals oder eine Reise nach Italien...: Du hast Ideen, wir ein Budget dazu.',
        },
        {
          title: 'Office Gym',
          content:
            'Rudere den Bug von der Seele. Pump dir frische Ideen ins Hirn. Stemm dich gegen Widerstand. Inhouse warten Blei und Matten auf Beschäftigung. Unser wöchentliche Gym Session mit Coach hilft dir die nötige Motivation zu finden.',
        },
        {
          title: 'Ein soziales Umfeld',
          content:
            'Work-Life-Balance: Von monatlich veränderbarem Arbeitspensum, über Workation bis zu Einkauf von zusätzlichen Ferientagen. Freiheit und Rücksicht auf individuelle Bedürfnisse sind uns wichtig. Auch gut zu wissen: Wer sich beim Tippen die Finger bricht erholt sich davon in einem netten Einzelzimmer mit Seeblick #privatversichert',
        },
      ],
    },
    {
      title: 'Wie läuft unser Bewerbungsverfahren',
      content: 'Unser Interviewprozess verläuft in vier Schritten.',
      steps: [
        {
          title: 'Bewerbung einreichen',
          content:
            'Nimm den Mut zusammen und schicke uns eine Mail an <a class="underline decoration-red-triarc" href="mailto:development@triarc-labs">development@triarc-labs</a> mit deinen Unterlagen.',
        },
        {
          title: 'Persönliches Interview',
          content:
            'Nach kurzer Prüfung von deinem CV und dem ersten Eindruck, melden wir uns bei dir für ein erstes Vorstellungsgespräch. Remote oder in unserem Office können wir uns gegenseitig austauschen und schauen ob sich synergien ergeben.',
        },
        {
          title: 'Technisches Interview',
          content:
            'Damit wir dich initial in unser Trackeesystem einstufen können, bekommst du die Gelegenheit dich mit einem Entwickler austauschen.',
        },
        {
          title: 'Team Interview',
          content:
            'Das Team hat bei uns das letzte Wort. Lerne den Rest von uns kennen und sprich über deine Passion und warum du Teil vom Team werden willst.',
        },
      ],
    },
  ]
</script>

<JobIntro />

<div class="bg-blue-triarc flex flex-col">
  <div class="text-white bg-opacity-20">
    <div class="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
      <h2 class="text-3xl font-extrabold sm:text-4xl">
        <span class="block">Entwicklerpositionen</span>
      </h2>
      <p class="mt-4 text-lg leading-6">
        Wir bieten unterschiedliche Stufen, in welcher du deine Karriere bei uns starten kannst.
      </p>
    </div>
  </div>
</div>

<div class="bg-white">
  {#each contents as content}
    <Block bind:content />
  {/each}

  <Technology />
</div>
