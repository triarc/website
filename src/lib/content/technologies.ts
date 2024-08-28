import angular from '$lib/assets/img/technology/angular.svg'
import netcore from '$lib/assets/img/technology/netcore.svg'
import nodejs from '$lib/assets/img/technology/nodejs.svg'
import postgresql from '$lib/assets/img/technology/postgresql.svg'
import mongodb from '$lib/assets/img/technology/mongodb.svg'
import elasticsearch from '$lib/assets/img/technology/elasticsearch.svg'
import docker from '$lib/assets/img/technology/docker.svg'
import kubernetes from '$lib/assets/img/technology/kubernetes.svg'
import gitlab from '$lib/assets/img/technology/gitlab.svg'
import prometheus from '$lib/assets/img/technology/prometheus.svg'
import kibana from '$lib/assets/img/technology/kibana.svg'
import sentry from '$lib/assets/img/technology/sentry.svg'
import digitalocean from '$lib/assets/img/technology/digitalocean.svg'
import gcloud from '$lib/assets/img/technology/gcloud.svg'
import azure from '$lib/assets/img/technology/azure.svg'

export interface Technology {
  icon: string
  iconAlt: string
  title: string
  text: string
}

export const ourTechnologies: Technology[] = [
  {
    icon: angular,
    iconAlt: 'angular',
    title: 'Angular',
    text: 'Unser treuer Begleiter seit 10 Jahren. Hilft uns unsere Software für alle Geräte einheitlich anzubieten.',
  },
  {
    icon: netcore,
    iconAlt: 'dotnet core',
    title: 'dotnet core',
    text: 'Damit es auch hinter der Bühne rund läuft, arbeiten unsere Server mit dotnet 24/7 für unsere Kunden.',
  },
  {
    icon: nodejs,
    iconAlt: 'node.js',
    title: 'node.js',
    text: 'Kundenideen blitzschnell umsetzen und flexibel bleiben, auch für die kleinen Features im Leben.',
  },
  {
    icon: postgresql,
    iconAlt: 'postgresql',
    title: 'PostgreSQL',
    text: 'Daten hält PostgreSQL für uns in Struktur und Ordnung. Beziehungen sind der Datenbank dabei sehr wichtig.',
  },
  {
    icon: mongodb,
    iconAlt: 'mongodb',
    title: 'MongoDB',
    text: 'Damit auch unstrukturierte Informationen ihren Platz finden. MongoDB ist nicht wählerisch und speichert alles!',
  },
  {
    icon: elasticsearch,
    iconAlt: 'elasticsearch',
    title: 'Elasticsearch',
    text: 'Elasticsearch findet in noch so grossen Datenmengen die relevanten Resultate. Datenmessies können wieder aufatmen.',
  },
  {
    icon: docker,
    iconAlt: 'docker',
    title: 'Docker',
    text: 'Jede Anwendung braucht klare Grenzen. Docker hilft uns dabei und regelt die Softwareverteilung.',
  },
  {
    icon: kubernetes,
    iconAlt: 'kubernetes',
    title: 'Kubernetes',
    text: 'Der Chef in unserer IT Infrastruktur, welcher den Laden schmeisst und sagt, wo es lang geht. In der Cloud sowie bei unsere Kunden Vorort.',
  },
  {
    icon: gitlab,
    iconAlt: 'gitlab',
    title: 'Gitlab',
    text: 'Verwaltet unseren Sourcecode und produziert daraus Software. Die Landkarte und der Compass in unseren Projekten, zeigt uns, wohin es geht.',
  },
  {
    icon: prometheus,
    iconAlt: 'prometheus',
    title: 'Prometheus',
    text: 'Jemand der uns erinnert, wann es mal nicht rund läuft. Hält stets Kontakt mit den Entwicklern und ist (fast) Teil der Familie.',
  },
  {
    icon: kibana,
    iconAlt: 'kibana',
    title: 'Kibana',
    text: 'Unser Verbündeter im Kampf gegen die kniffligen Bugs. Zeichnet die Lebenszeichen aller Anwendungen auf.',
  },
  {
    icon: sentry,
    iconAlt: 'sentry',
    title: 'Sentry',
    text: 'Ein Insider, welcher die Probleme unserer Anwendungen vor den Anwendern erkennt.',
  },
  {
    icon: digitalocean,
    iconAlt: 'digitalocean',
    title: 'Digitalocean',
    text: 'Die Plattform für Infrastruktur in der Cloud mit kleinem Budget und viel Herz. ',
  },
  {
    icon: gcloud,
    iconAlt: 'google cloud',
    title: 'Google Cloud',
    text: 'Die Plattform für Infrastruktur in der Cloud mit Standorten in der Schweiz.',
  },
  {
    icon: azure,
    iconAlt: 'azure',
    title: 'Azure Cloud',
    text: 'Die Plattform für Infrastruktur in der Cloud verknüpft mit ihrem Office Paket.',
  },
]
