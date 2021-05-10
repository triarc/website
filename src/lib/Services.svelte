<script lang="ts">
  let sloganList = [
    {
      title: 'Die Software muss zum Kunden passen. Nicht umgekehrt.',
      content: 'Die Vorteile der Digitalisierung lassen sich nur dann voll ausschöpfen, wenn die Software-Lösung exakt Ihren Bedürfnissen entspricht. Basierend auf der Realität Ihres Alltags erarbeiten wir zusammen Anforderungen und Ideen, stets mit dem Nutzer im Fokus. Das Produkt testen wir eingehend und passen es solange an, bis es perfekt sitzt.',
      img: 'img/hero/robotics.svg',
    },
    {
      title: 'Knowhow und Erfahrung sind die Grundzutaten für erfolgreiche Softwareprojekte.',
      content: 'Unsere Kundschaft ist breit gefächert. Unser Portfolio ist es auch: In den über zehn Jahren unseres Bestehens ist ein branchenübergreifendes fundiertes Knowhow entstanden, das in die Projekte der Zukunft einfliesst. In neue Fachgebiete arbeiten wir uns mit derselben Leidenschaft ein, rasch und kompetent.',
      img: 'img/hero/teaching.svg',
    },
    {
      title: 'Perfekt eingebunden in die (Software-)Familie.',
      content: 'Erst mit der Integration in Ihr Software-Ökosystem entfaltet sich das volle Potenzial neuer Applikationen. Mit unseren Schnittstellenlösungen binden wir die Applikation nahtlos ein. Damit entfallen Medienbrüche und Prozesse greifen nahtlos ineinander. Dank Echtzeit-Integration können zahlreiche Anwender mehrerer Systeme parallel und Hand in Hand arbeiten. Gut zu wissen: Für die Zusammenarbeit mit Abacus, SAP und Dynamics bringen wir viel Erfahrung mit.',
      img: 'img/hero/product_teardown.svg',
    },
    {
      title: 'Schnell und flexibel durch agiles Projektmanagement',
      content: 'Kaum ein anderer Prozess ist so sehr von Dynamik geprägt wie die Digitalisierung. In der agilen Softwareentwicklung arbeiten wir deshalb eng mit Ihnen zusammen und halten den Arbeitsprozess schlank. In regelmässigen Intervallen beurteilen wir gemeinsam den Zwischenstand unserer Arbeit. So sind Sie jederzeit auf dem neuesten Stand – und wir können schnell und flexibel auf neue Erkenntnisse und Anforderungen reagieren. Durch dieses iterative Vorgehen behalten Sie stets die Kontrolle.',
      img: 'img/hero/content_team.svg',
    }
  ];
</script>

<div class="py-24 bg-gray-100" id="services">
  <div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="lg:text-center">
      <h2
        class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10 uppercase"
      >
        Custom Software Entwicklung
      </h2>
      <p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">
        damit Sie Ihre Informationen verständlich und überall zur Hand haben
      </p>
    </div>

    <div class="lg:m-10 mt-5">
      <img src="img/smoothie-app.svg" />
    </div>

    <div class="relative z-10 py-8 px-3">
      {#each sloganList as slogan, i}
        <div
          class="flex items-center mb-16 md:mb-24 {i % 2
            ? 'flex-col md:flex-row justify-end'
            : 'flex-col justify-end md:flex-row-reverse'}"
        >
          <div class="md:w-1/2 {i % 2 ? 'md:text-right' : 'md:text-left'}">
            <p class="mt-3 text-2xl font-bold text-gray-600">
              {@html slogan.title}
            </p>
            <p class="mt-2 text-base leading-6 text-gray-600">
              {slogan.content}
            </p>
          </div>
          <img src={slogan.img} class="w-80 mt-8 mx-12" />
        </div>
      {/each}
    </div>
  </div>
</div>
