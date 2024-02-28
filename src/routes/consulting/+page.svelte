<script lang="ts">
  import Hero from '$lib/components/Hero.svelte'
  import iris from '../../../static/team/iris.jpg?width=500&format=webp;png&metadata'
  import BlogPostFeatures from '$lib/components/BlogPostFeatures.svelte'
  import FooterNoContact from '$lib/components/FooterNoContact.svelte'
  import heroImage from '/src/lib/assets/hero/Beratung.jpg?width=300;600;1000;2000&format=webp&metadata'
  import type {MappedPost} from "./+page";
  import ContactForm from "$lib/components/ContactForm.svelte";



  export let data
  export let contactString: string = 'Iris direkt kontaktieren'
  let content =
    {
      quote: {
        content:
          'Der Mensch digitalisiert für die Menschen - wir stellen den User in den Mittelpunkt damit der Wandel von allen getragen und gelebt wird. Nur dann ist die Digitalisierung nachhaltig. ',
        person: 'Iris Zenegaglia',
        images: iris,
        personTitle: 'Digitalisierungs/Organisationsberaterin <br> ' +
                'Coach (bso i.A) <br> Partnerin',
        linkedin: 'https://www.linkedin.com/in/iriszenegagliagloor/',
        email: 'iris@triarc-labs.com',
        highlight: 'green',
        contactButton: 'Kontaktiere mich',
        customLogos: ['/img/partners/bso_logo_desktop.svg']
      },
      categories: [
        {
          title: 'Beratung',
          content:
            'Unser Digitalisierungsberatungsteam stellt sicher, dass die Digitalisierung für ein Unternehmen zum Erfolg wird. <br/><br/>Dafür ist nicht nur eine hochwertige Software relevant, sondern vor allem, dass sie genutzt wird und ihren Zweck erfüllt. Dies wird erreicht, wenn die Prozesse, Strukturen, Organisationskultur und Mitarbeiter sich mit dem technischen Fortschritt weiterentwickeln. <br/><br/>Wir unterstützen unsere Kunden bei der Analyse und Identifizierung von Chancen, Erstellung einer Transformations-Roadmap und der Umsetzung der definierten Massnahmen.',
          posts: data.posts.consulting as MappedPost[],
        },
        {
          title: 'Analysieren sie ihr Digitalisierungspotential',
          content:'',
          quote: '<p class="text-gray-900 text-md">Patric Masar von Helvetas: </p> \n' +
                  '<i>"Dank der effizienten und zielorientierten Methodik konnten wir in nur zwei von Triarc moderierten halbtägigen Workshops ' +
                  'ein umfassendes Konzept für eine Zeiterfassunges und Spesenapp mit dem Erweiterungspotential für eine vielzahl weiterer ' +
                  'Anwendung erarbeiten. Neben dem definieren der Kernanforderungen haben wir in Brainstormingsessions auch Ideen für zukünftige ' +
                  'Anwendungsgebiete der App erarbeitet. Es ist erstaunlich welche Vielzahl an guten und realisierbaren Ideen daraus resultierten."</i>',
            posts: data.posts.potential as MappedPost[]
        },
        {
          title: 'Visions-und Strategieentwicklung',
          content:
            'Für eine Transformation braucht es ein konkretes Zielbild. Wir entwickeln zusammen mit unseren Kunden eine Vision und Strategie ihrer Digitalisierung. Daraus entstehen Massnahmen für die konkrete Umsetzung und schlussendlich Erreichung des Zielbildes. So wird die massgeschneiderte Software für das ganze Unternehmen zum vollen Erfolg! ',
          quote: '<p class="text-gray-900 text-md">Andrea Isler von Analytica: </p> \n' +
                  '<i>"Dank der Organisationsanalyse der Firma Triarc konnten wir die komplexe Struktur unserer ICT-Organisation besser verstehen und in der Folge die Effizienz unserer Abläufe verbessern sowie deren Innovation fördern."\n' +
                  '"Der didaktische Ansatz der Berater:innen einerseits Wissen zu vermitteln und andererseits unsere Fachkräfte persönlich zu coachen wurde als besonders gewinnbringend eingeschätzt.\n' +
                  'Zusammenfassend beurteilt war der Einsatz der Firma Triarc für uns ein voller Erfolg."</i>',
          posts: data.posts.vision as MappedPost[]
        },
        {
          title: 'Change Management. Der Mensch steht im Mittelpunkt.',
          content:
            'Eine Veränderung ist erst dann erfolgreich, wenn sie sich nachhaltig im Unternehmen verankert. Dabei spielen die Mitarbeiter eine zentrale Rolle. Nur mit einer gemeinsamen Vision und der Erkennung der Notwendigkeit blicken die Mitarbeiter der Veränderung motiviert entgegen. <br/><br/>Wir begleiten die Mitarbeiter durch die Transformation, nehmen ihr Ängste und Befürchtungen ernst, binden sie im Entwicklungsprozess mit ein und unterstützen sie bei der Einführung der neuen Technologie.',
          posts: data.posts.changeManagement as MappedPost[]
        },
        {
          title: 'Strukturen und Prozesse',
          content:
            'Ein verbundenes IT-Ökosystem, das passende Organisationsmodell und die richtigen Qualifikationen ebnen den Weg der Digitalisierung. Wir analysieren den Status quo und zeigen Chancen auf.<br/><br/>Bevor wir neue Technologien und Software einführen analysieren und optimieren wir die betroffenen Geschäftsprozesse und passen sie an das neue digitale Arbeitsmodell an.',
        },
        {
          title: '<a class="flex flex-row items-center gap-x-2" target="_blank" href="https://www.coaching-digitalisierung.ch">Führungs-, Team- und Mitarbeiter Coaching <img class="inline-block"  width="20px" height="20px" src="src/lib/assets/icons/up-right-from-square-solid.svg" alt="external link icon"></a>',
          content:
            'Die digitale Transformation birgt unzählige und vielschichtige Herausforderungen und Stolpersteine. Wir begleiten und befähigen Führungskräfte, Mitarbeiter und Teams auf dem Weg durch den Wandel. <br/><br/>Wir arbeiten mit einem systemisch-lösungsorientierten Beratungsansatz und verfolgen das Ziel der Selbstbefähigung. Je nach Bedarf agieren wir auch als Sparring-Partner.',
          posts: data.posts.coaching as MappedPost[]
        },
      ],
    }
</script>


<svelte:head>
  <title>Beratung - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  <Hero
    title="Beratung"
    content="Erfolgreiche Digitalisierung braucht das Miteinander. Wir bauen Brücken."
    imageSrc="Beratung"
    imageAlt="Triarc Consulting Header"
    image={heroImage}
  />
  <BlogPostFeatures bind:content />
<!--  <Partners />-->
  <ContactForm {contactString}/>
  <FooterNoContact />
</div>
