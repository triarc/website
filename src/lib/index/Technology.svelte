<script lang="ts">
  import angularIcon from '$lib/assets/img/technology/angular.svg';
  import netcoreIcon from '$lib/assets/img/technology/netcore.svg';
  import nodejsIcon from '$lib/assets/img/technology/nodejs.svg';
  import postgresqlIcon from '$lib/assets/img/technology/postgresql.svg';
  import mongodbIcon from '$lib/assets/img/technology/mongodb.svg';
  import elasticsearchIcon from '$lib/assets/img/technology/elasticsearch.svg';
  import dockerIcon from '$lib/assets/img/technology/docker.svg';
  import kubernetesIcon from '$lib/assets/img/technology/kubernetes.svg';
  import gitlabIcon from '$lib/assets/img/technology/gitlab.svg';
  import prometheusIcon from '$lib/assets/img/technology/prometheus.svg';
  import kibanaIcon from '$lib/assets/img/technology/kibana.svg';
  import sentryIcon from '$lib/assets/img/technology/sentry.svg';
  import digitaloceanIcon from '$lib/assets/img/technology/digitalocean.svg';
  import gcloudIcon from '$lib/assets/img/technology/gcloud.svg';
  import azureIcon from '$lib/assets/img/technology/azure.svg';

  let technologies = [
    {
      icon: angularIcon,
      iconAlt: 'angular',
      title: 'Angular',
      text: 'Unser treuer Begleiter seit 10 Jahren. Hilft uns unsere Software für alle Geräte einheitlich anzubieten.',
    },
    {
      icon: netcoreIcon,
      iconAlt: 'dotnet core',
      title: 'dotnet core',
      text: 'Damit es auch hinter der Bühne rund läuft, arbeiten unsere Server mit dotnet 24/7 für unsere Kunden.',
    },
    {
      icon: nodejsIcon,
      iconAlt: 'node.js',
      title: 'node.js',
      text: 'Kundenideen blitzschnell umsetzen und flexibel bleiben, auch für die kleinen Features im Leben.',
    },
    {
      icon: postgresqlIcon,
      iconAlt: 'postgresql',
      title: 'PostgreSQL',
      text: 'Daten hält PostgreSQL für uns in Struktur und Ordnung. Beziehungen sind der Datenbank dabei sehr wichtig.',
    },
    {
      icon: mongodbIcon,
      iconAlt: 'mongodb',
      title: 'MongoDB',
      text: 'Damit auch unstrukturierte Informationen ihren Platz finden. MongoDB ist nicht wählerisch und speichert alles!',
    },
    {
      icon: elasticsearchIcon,
      iconAlt: 'elasticsearch',
      title: 'Elasticsearch',
      text: 'Elasticsearch findet in noch so grossen Datenmengen die relevanten Resultate. Datenmessies können wieder aufatmen.',
    },
    {
      icon: dockerIcon,
      iconAlt: 'docker',
      title: 'Docker',
      text: 'Jede Anwendung braucht klare Grenzen. Docker hilft uns dabei und regelt die Softwareverteilung.',
    },
    {
      icon: kubernetesIcon,
      iconAlt: 'kubernetes',
      title: 'Kubernetes',
      text: 'Der Chef in unserer IT Infrastruktur, welcher den Laden schmeisst und sagt, wo es lang geht. In der Cloud sowie bei unsere Kunden Vorort.',
    },
    {
      icon: gitlabIcon,
      iconAlt: 'gitlab',
      title: 'Gitlab',
      text: 'Verwaltet unseren Sourcecode und produziert daraus Software. Die Landkarte und der Compass in unseren Projekten, zeigt uns, wohin es geht.',
    },
    {
      icon: prometheusIcon,
      iconAlt: 'prometheus',
      title: 'Prometheus',
      text: 'Jemand der uns erinnert, wann es mal nicht rund läuft. Hält stets Kontakt mit den Entwicklern und ist (fast) Teil der Familie.',
    },
    {
      icon: kibanaIcon,
      iconAlt: 'kibana',
      title: 'Kibana',
      text: 'Unser Verbündeter im Kampf gegen die kniffligen Bugs. Zeichnet die Lebenszeichen aller Anwendungen auf.',
    },
    {
      icon: sentryIcon,
      iconAlt: 'sentry',
      title: 'Sentry',
      text: 'Ein Insider, welcher die Probleme unserer Anwendungen vor den Anwendern erkennt.',
    },
    {
      icon: digitaloceanIcon,
      iconAlt: 'digitalocean',
      title: 'Digitalocean',
      text: 'Die Plattform für Infrastruktur in der Cloud mit kleinem Budget und viel Herz. ',
    },
    {
      icon: gcloudIcon,
      iconAlt: 'google cloud',
      title: 'Google Cloud',
      text: 'Die Plattform für Infrastruktur in der Cloud mit Standorten in der Schweiz.',
    },
    {
      icon: azureIcon,
      iconAlt: 'azure',
      title: 'Azure Cloud',
      text: 'Die Plattform für Infrastruktur in der Cloud verknüpft mit ihrem Office Paket.',
    },
  ]
</script>

<div class="bg-blue-triarc text-gray-800 bg-opacity-20">
  <div class="max-w-screen-xl mx-auto py-12 px-4 text-center sm:px-6 lg:px-8 lg:py-24">
    <div class="space-y-8 sm:space-y-12">
      <div class="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 class="text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl">Unsere Technologien</h2>
        <p class="text-xl leading-7">
          Unsere Team bringen ein breites Fachwissen mit und beherrscht <span class="underline">fast</span>
          alle gängigen Programmiersprachen. <br />
          Wir freuen uns auf deine Unterstützung in unseren Projekten, welche wir über mehrere Technologien hinweg zum Erfolg
          führen.
        </p>
      </div>
      <div class="grid self-center mt-8 grid-cols-1 gap-6 gap-y-6 md:grid-cols-2 lg:grid-cols-3" id="technology">
        {#each technologies as technology}
          <div class="flex items-center">
            <img width="48" height="48" src={technology.icon} loading="lazy" alt={technology.iconAlt} />
            <div class="text-left ml-4">
              <div class="text-xl font-bold">{technology.title}</div>
              <div class="">
                {technology.text}
              </div>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</div>
