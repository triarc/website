<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Video from '$lib/components/Video.svelte'
  import type { BlockContent } from '$lib/components/Block.svelte'
  import Container from '$lib/components/Container.svelte'

  let contents: BlockContent[] = [
    {
      title: 'μLink Data Broker <br /><span class="text-3xl">Bereit für die Zukunft</span>',
      content:
        'μLink ist eine Kommunikationsschnittstelle mit dem Fokus, Informationen schnell auffindbar und schnell\n' +
        '              lesbar zu machen. Es erlaubt fliessende Prozesse über Systemgrenzen hinweg und gewährleistet, dass\n' +
        '              Informationen auf allen verbundenen Systemen identisch und in Echtzeit verfügbar sind. Mit μLink lassen\n' +
        '              sich unbegrenzt Umsysteme in ein Software Ökosystem integrieren.',
      image: { src: 'img/mlink/tree.svg', alt: 'mlink logo' },
    },
    {
      title: 'Dies löst Aufgaben wie:',
      image: { src: 'img/mlink/diagram.svg', alt: 'mlink architecture' },
      bulletPoints: [
        'Der neu eintretende Mitarbeiter kann am selben Tag seine Zeit korrekt und vor allem digital erfassen.',
        'Das Backoffice eröffnet ein neues Projekt. Die Projektleiter beginnen umgehend mit der visuellen Planung.',
        'Die Geschäftsstelle und der Mitarbeiter im Feld kollaborieren in Echtzeit am selben Prozess.',
      ],
    },
    {
      title: 'μLink der Kommunikationshub',
      video: {
        poster: 'img/thumbnail/mlink-1080-poster.png',
        sources: [
          {
            src: 'https://storage.googleapis.com/triarc-website/mlink-1080-v2.webm',
            type: 'video/webm',
          },
          {
            src: 'https://storage.googleapis.com/triarc-website/mlink-v2.mp4',
            type: 'video/mp4',
          },
        ],
      },
    },
    {
      title: 'Klare Grenzen',
      content:
        'Das ERP muss nicht verschiedenste Systeme mit Exporten bedienen und kann seine Ressourcen\n' +
        '                  ausschliesslich für den eigenen Betrieb verwenden. Die Last durch die Kommunikation mit Umsystemen\n' +
        '                  wird transparent. Datentransformationen, welche Umsystem-spezifisch sind, sind nicht mehr Teil des ERP\n' +
        '                  internen Ablaufs.',
      image: { src: 'img/mlink/mind-map.svg', alt: 'borders' },
    },
    {
      title: 'Skalierbarkeit',
      content:
        'Die Verfügbarkeit der Informationen kann unabhängig vom ERP ausgebaut werden. Man muss bei komplexen\n' +
        '                  Anforderungen nicht das ganze ERP skalieren und μLink ist auch nicht von Auslastungsspitzen des ERP\n' +
        '                  betroffen. Es ist dank der Microservice Architektur von μLink sogar möglich einzelne Aspekte der\n' +
        '                  Schnittstelle einzeln zu skalieren. μLink kann On-Premise oder in der Cloud betrieben werden.',
      image: { src: 'img/mlink/scale.svg', alt: 'scale' },
    },
    {
      title: 'Schnittstellen',
      content:
        'μLink bietet mit REST und AMQP offene und vielseitige Schnittstellen an. Das Knowhow kann so mit wenig\n' +
        '                  Aufwand intern aufgebaut werden.',
      image: { src: 'img/mlink/interface.svg', alt: 'interface' },
    },
    {
      title: 'Versionierung',
      content:
        'Die von μLink für die Umsysteme zur Verfügung gestellte Schnittstelle ist versionssicher, d.h.\n' +
        '                  Anpassungen und Updates am ERP führen nicht zu Tests und Anpassungen an allen abhängigen Systemen,\n' +
        '                  sondern beschränken sich auf μLink. Die Komplexität der Kommunikation wird mit dem ERP gekapselt.\n' +
        '                  μLink setzt bewusst auf offene Standards um keine, nur für mLink zu erlernende, Hürde einzuführen.',
      image: { src: 'img/mlink/versioning.svg', alt: 'versioning' },
    },
    {
      title: 'Sicherheit',
      content:
        'Sämtliche Kommunikation erfolgt ausschliesslich via Https und TLS und bedarf einer Authentifizierung.\n' +
        '                  Die Komponenten von μLink sind hochverfügbar und erlauben einen Ausfall von einzelnen Containern, ohne\n' +
        '                  die Funktion zu mindern. Es besteht die Möglichkeit μLink in ein Monitoring System für kritische\n' +
        '                  Systeme zu integrieren. μLink bietet eine manuelle Analyse z.B. zur Kontrolle des Zugriffs und der\n' +
        '                  Verwendung der Schnittstellen durch Umsysteme.',
      image: { src: 'img/mlink/security.svg', alt: 'security' },
    },
  ]
</script>

<svelte:head>
  <title>mLink Data Broker - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  {#each contents as content}
    {#if content.video}
      <Container>
        <Video bind:content={content.video} />
      </Container>
    {:else}
      <Block bind:content />
    {/if}
  {/each}
</div>
