import jobListingImage from '$lib/assets/img/jobs/super_woman.svg'
import type { BlockContent, JobPosting } from '$lib/components/TypeDefinitions'
import juniorDev from '$lib/assets/img/jobs/junior-dev.svg'
import beHero from '$lib/assets/img/jobs/be_the_hero.svg'
import cloud from '$lib/assets/img/jobs/cloud_hosting.svg'
import initiative from '$lib/assets/img/jobs/exploring.svg'
import checklist from '$lib/assets/img/jobs/list.svg'

// Serialized to json
export const JobPostings: JobPosting[] = [
  {
    content:
      'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. ',
    claim: 'Senior Software Engineer',
    img: jobListingImage,
    open: false,
    responsibilities:
      'sind so breit gefächert und abwechslungsreich wie die Arbeit, die dich bei uns erwartet: vom Design bis zur Lösungsfindung ist alles dabei, individuell angepasst auf unsere branchenübergreifenden Kunden. In unserem Team aus den qualifiziertesten Entwicklern profitierst du von unserer jahrelangen Erfahrung, und wir von deiner. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobile-Anwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
    skills: [
      'Leidenschaft für die Software Entwicklung',
      'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
      'Hohe Methodenkompetenz und logisches, vernetztes Denken',
      'Spass an der Arbeit im Team',
      'Lösungsorientiertes Denken und Handeln',
      'Lernfähigkeit und kontinuierliche Weiterentwicklung',
      'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
      '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
    ],
    experienceRequirements: '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
  },
  // {
  //   content:
  //     'Wir sind Ingenieure: bestausgebildete und praxiserfahrene IT-Fachleute. Wir können, was wir tun. Und tun für unsere Kunden alles, was wir können. Willst du mittun?',
  //   claim: 'Professional Software Engineer',
  //   img: 'img/jobs/be_the_hero.svg',
  //   open: false,
  //   responsiblities:
  //     'umfassen das ganze Spektrum vom Design bis zur Lösungsfindung, individuell angepasst auf unsere branchenübergreifenden Kunden. Das ist herausfordernd, ja, aber das bringt dich auch weiter. Und du bist nicht allein: In unserem Team aus den qualifiziertesten Entwicklern profitierst du von unserer jahrelangen Erfahrung. Durch die agile Entwicklung nach SCRUM arbeiten wir effizient und motiviert. Du arbeitest an Web- und Mobileanwendungen (inkl. Backend) und wendest dabei Clean Code an. Du bist vertraut mit unserem aktuell eingesetzten <a class="underline" href="/#technology">Stack</a>.',
  //   skills: [
  //     'Leidenschaft für die Software Entwicklung',
  //     'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
  //     'Hohe Methodenkompetenz und logisches, vernetztes Denken',
  //     'Spass an der Arbeit im Team',
  //     'Lösungsorientiertes Denken und Handeln',
  //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
  //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
  //     '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
  //   ],
  //   experienceRequirements: '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
  // },
  // {
  //  content:
  //     'Möchtest du die Teams im Infrastrukturbereich unterstützen und dich um unsere Kubernetes Cluster und unseren Tech-Stack kümmern? Dann fehlt dir jetzt nur noch ein Klick zum Glück: <a class="underline" href="mailto:development@triarc-labs.com">development@triarc-labs.com</a>',
  //   claim: 'DevOps / Operation Engineer',
  //   img: 'img/jobs/cloud_hosting.svg',
  //   open: false,
  //   responsiblities:
  //     'sind breit gefächert. Unterstütze das Team in der Infrastruktur unserer vielzähligen Projekte. Dazu gehört die Wartung von OnPremise Maschinen mit Linux und kubeadm sowie gemanagte Kubernetes-Cluster auf Google Cloud. Du hilfst im Support von unserem Produkt μLink und arbeitest mit der Entwicklung eng zusammen, um die Stabilität und Verfügbarkeit zu gewährleisten.',
  //   skills: [
  //     'Leidenschaft für die Software Entwicklung',
  //     'Praktische Erfahrung mit Kubernetes, Docker und GCP',
  //     'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
  //     'Spass an der Arbeit im Team',
  //     'Lösungsorientiertes Denken und Handeln',
  //     'Lernfähigkeit und kontinuierliche Weiterentwicklung',
  //     'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
  //   ],
  //   experienceRequirements:
  //     'Praktische Erfahrung mit Kubernetes, Docker und GCP, Gute Deutsch- sowie Englisch-Kenntnisse in Wort und Schrift',
  // },
]

export const DetailedJobListings: { slug: string; BasicJobInfo: BlockContent; ExtendedJobInfo?: BlockContent }[] = [
  {
    slug: 'junior',
    BasicJobInfo: {
      jobDetails: { currentlyHiring: false, slug: 'junior', jobName: 'Junior Software Engineer' },
      title: '<span class="text-sm">wir suchen</span><br/>Junior Software Engineer',
      content:
        'Als Junior bist hast du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
      image: { src: juniorDev, alt: 'Junior Software Engineer' },
      bulletPoints: [
        'Erste Erfahrungen mit C# oder Java',
        'Erste Erfahrungen im Bereich Web / Single Page Applications',
      ],
    },
    ExtendedJobInfo: {
      title: 'Anforderungen',
      content: 'Was erwarten wir konkret von dir?',
      image: { src: checklist, alt: 'Requirements' },
      bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
    },
  },
  {
    slug: 'professional',
    BasicJobInfo: {
      jobDetails: { currentlyHiring: false, slug: 'professional', jobName: 'Professional Software Engineer' },
      title: '<span class="text-sm">wir suchen</span><br/>Professional Software Engineer',
      content:
        'Als Professional hast du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig und übernimmst Verantwortung für deine Aufgaben.',
      image: { src: beHero, alt: 'Professional Software Engineer' },
      bulletPoints: [
        "Erfahrungen mit C# in der Entwicklung von API's",
        'Erfahrungen im Bereich Web und Angular',
        'Kentnisse von Elasticsearch / Postgres / MongoDB von Vorteil',
      ],
    },
    ExtendedJobInfo: {
      title: 'Anforderungen',
      content: 'Was erwarten wir konkret von dir?',
      image: { src: checklist, alt: 'Requirements' },
      bulletPoints: [
        'Leidenschaft für die Software Entwicklung',
        'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
        'Hohe Methodenkompetenz und logisches, vernetztes Denken',
        'Spass an der Arbeit im Team',
        'Lösungsorientiertes Denken und Handeln',
        'Lernfähigkeit und kontinuierliche Weiterentwicklung',
        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
        '2 Jahre Erfahrung mit Angular und einer objektorientierten Sprache wie C# / Java',
      ],
    },
  },
  {
    slug: 'senior',
    BasicJobInfo: {
      jobDetails: { currentlyHiring: true, slug: 'senior', jobName: 'Senior Software Engineer' },
      title: '<span class="text-sm">Wir suchen</span><br/>Senior Software Engineer',
      content:
        'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
      image: { src: jobListingImage, alt: 'Senior Software Engineer' },
      bulletPoints: [
        "Erfahrungen mit C# in der Entwicklung von API's",
        'Erfahrungen im Bereich Web und Angular',
        'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
        'Erfahrungen Docker / Kubernetes / Gitlab CI',
      ],
    },
    ExtendedJobInfo: {
      title: 'Anforderungen',
      content: 'Was erwarten wir konkret von dir?',
      image: { src: checklist, alt: 'Requirements' },
      bulletPoints: [
        'Leidenschaft für die Software Entwicklung',
        'Hochschulabschluss in Informatik (ETH/FH/vergleichbarer Leistungsnachweis)',
        'Hohe Methodenkompetenz und logisches, vernetztes Denken',
        'Spass an der Arbeit im Team',
        'Lösungsorientiertes Denken und Handeln',
        'Lernfähigkeit und kontinuierliche Weiterentwicklung',
        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
        '5 Jahre Erfahrung mit Angular, dotnet, Postgres, Docker und Kubernetes',
      ],
    },
  },
  {
    slug: 'devops',
    BasicJobInfo: {
      jobDetails: {
        currentlyHiring: false,
        slug: 'devops',
        jobName: '(Dev)Ops Engineer',
      },
      title: '<span class="text-sm">Wir suchen</span><br/>(Dev)Ops Engineer',
      content:
        'Als (Dev)Ops betreust du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',

      image: { src: cloud, alt: 'Dev/Ops Engineer' },
      bulletPoints: [
        'Erfahrungen Docker / Kubernetes / Gitlab CI',
        'Erfahrungen mit Google Cloud / Azure von Vorteil',
        'Erfahrungen mit Cypress / E2E Testing von Vorteil',
      ],
    },
    ExtendedJobInfo: {
      title: 'Anforderungen',
      content: 'Was erwarten wir konkret von dir?',
      image: { src: checklist, alt: 'Requirements' },
      bulletPoints: [
        'Leidenschaft für die Software Entwicklung',
        'Praktische Erfahrung mit Kubernetes, Docker und GCP',
        'Wünscheswerte Erfahrung mit Cert Manager, Postgres, Elasticsearch und MongoDB',
        'Spass an der Arbeit im Team',
        'Lösungsorientiertes Denken und Handeln',
        'Lernfähigkeit und kontinuierliche Weiterentwicklung',
        'Gute Deutsch- sowie Englisch- Kenntnisse in Wort und Schrift',
      ],
    },
  },
]
// Page content
//TODO: Add Initiativbewerbung, PL, Sales
export const JobListings: BlockContent[] = [
  {
    jobDetails: { currentlyHiring: false, slug: 'junior', jobName: 'Junior Software Engineer' },
    title: '<span class="text-sm">wir suchen</span><br/>Junior Software Engineer',
    content:
      'Als Junior bist hast du bereits erste Erfahrungen in der Softwareentwicklung gesammelt. Du verstehst die Basics, kannst jedoch noch nicht viel praktische Erfahrung vorweisen. Du bist motiviert und begeistert dies zu ändern.',
    image: { src: juniorDev, alt: 'Junior Software Engineer' },
    bulletPoints: ['Erste Erfahrungen mit C# oder Java', 'Erste Erfahrungen im Bereich Web / Single Page Applications'],
  },
  {
    jobDetails: { currentlyHiring: false, slug: 'professional', jobName: 'Professional Software Engineer' },
    title: '<span class="text-sm">wir suchen</span><br/>Professional Software Engineer',
    content:
      'Als Professional hast du bereits mehrjährige Erfahrung in Softwareentwicklungsprojekten. Dir fehlen jedoch noch das Know-How zu einigen Technologien in unserem Stack. Du bist selbstständig und übernimmst Verantwortung für deine Aufgaben.',
    image: { src: beHero, alt: 'Professional Software Engineer' },
    bulletPoints: [
      "Erfahrungen mit C# in der Entwicklung von API's",
      'Erfahrungen im Bereich Web und Angular',
      'Kentnisse von Elasticsearch / Postgres / MongoDB von Vorteil',
    ],
  },
  {
    jobDetails: { currentlyHiring: true, slug: 'senior', jobName: 'Senior Software Engineer' },
    title: '<span class="text-sm">Wir suchen</span><br/>Senior Software Engineer',
    content:
      'Als Senior begleitest du Projekte vom Requirements-Engineering bis in den Betrieb. Du bist der Vermittler zwischen dem Kunden und deinen Entwickler-KollegInnen. Und du machst das nicht zum ersten Mal. Du kannst im Team unterstützen, wo es an was fehlt.',
    image: { src: jobListingImage, alt: 'Senior Software Engineer' },
    bulletPoints: [
      "Erfahrungen mit C# in der Entwicklung von API's",
      'Erfahrungen im Bereich Web und Angular',
      'Erfahrungen mit Elasticsearch / Postgres / MongoDB',
      'Erfahrungen Docker / Kubernetes / Gitlab CI',
    ],
  },
  {
    jobDetails: {
      currentlyHiring: false,
      slug: 'devops',
      jobName: '(Dev)Ops Engineer',
    },
    title: '<span class="text-sm">Wir suchen</span><br/>(Dev)Ops Engineer',
    content:
      'Als (Dev)Ops betreust du unsere Projekte im Unterhalt. Du reagierst auf Meldungen in unserem Monitoringsystem und verbesserst dieses laufend. Du hilfst im Team Infrastrukturen in unserer Projekte aufzubauen und diese zu automatisieren. Dein Ziel ist eine stabile Umgebung für die Entwicklung und den Kunden zu liefern.',

    image: { src: cloud, alt: 'Dev/Ops Engineer' },
    bulletPoints: [
      'Erfahrungen Docker / Kubernetes / Gitlab CI',
      'Erfahrungen mit Google Cloud / Azure von Vorteil',
      'Erfahrungen mit Cypress / E2E Testing von Vorteil',
    ],
  },
]

export const Initiativbewerbung: BlockContent = {
  title: 'Initiativ bewerben',
  content:
    'Auch wenn wir derzeit keine offenen Stellen ausgeschrieben haben oder keine der derzeitigen Stellen deine Fähigkeiten passend abbildet, sind wir stets an talentierten und motivierten Bewerbern interessiert. Wenn Du der Meinung bist, dass Deine Fähigkeiten und Erfahrungen gut zu uns passen, freuen wir uns auf Deine Initiativbewerbung.',

  image: { src: initiative, alt: 'Initiativbewerbung' },
  bulletPoints: ['Lorem Ipsum', 'Lorem Ipsum', 'Lorem Ipsum'],
}
