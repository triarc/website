<script lang="ts">
  import Block from '$lib/components/Block.svelte'
  import Video from '$lib/components/Video.svelte'
  import Container from '$lib/components/Container.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import type { BlockContent } from '$lib/components/TypeDefinitions'

  let contents: BlockContent[] = [
    {
      title: 'μLink Datahub',
      content:
        'Die Schnittstellenlösung, welche ihre komplette Software-Infrastruktur unter einen Hut bringt! ERP, CRM, Disposition, Zeiterfassung, Projektsoftware, HR Suite, Lagerbewirtschaftung usw. sind mit µLink in einem einzigen digitalen Ökosystem vereint. <br/><br/>' +
        'Unternehmen, die konsequent auf digitale Lösungen setzen, haben einen klaren Wettbewerbsvorteil. Dabei wird mithilfe unterschiedlicher Softwarelösungen ein Prozess nach dem anderen digitalisiert. Durch diese stetig wachsende und sich verändernde Ökosystem entsteht das Bedürfnis die Datenflüsse zu managen. <br/><br/>' +
        'Essenziell sind dabei Bedürfnisse wie das Verhindern manueller Arbeitsschritte, die direkte Zusammenarbeit von Mitarbeitern über Systemgrenzen hinweg, sowie das schnelle Finden aller massgebenden Informationen in den angebundenen Softwarelösungen. µLink liefert dafür die hochmoderne und effiziente Lösung mit dem Fokus auf Echtzeitkommunikation und Sicherheit.',
      image: { src: 'img/mlink/mLink_tree.svg', alt: 'mlink logo' },
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
      title: 'Softwareökosystem',
      image: { src: 'img/mlink/mLink_Datenfluss.svg', alt: 'mlink ecosystem' },
      content:
        'Schritt um Schritt zur perfekten Schnittstelle. Bei der Digitalisierung von Geschäftsprozessen kommen meist mehrere Software Systeme zum Einsatz. Die Schnittstellen zwischen den verschiedenen Systemen mit unterschiedlichen Technologien stellt Unternehmen vor grosse Herausforderungen. µLink vereinfacht als zentrale Instanz die Schnittstellenproblematik, vernetzt die verschiedenen Systeme und ermöglicht damit die ' +
        'zentrale Bewirtschaftung der Schnittstellen. So kann mit minimalem Aufwand neue ' +
        'Software ins Ökosystem integriert oder bestehende abgelöst werden.',
    },
    {
      title: 'Monitoring',
      content:
        'Mit µLink lassen sich die Datenflüsse zwischen Softwaresystemen zentral observieren. Bei einem Ausfall, einer Abnahme der Leistung oder weiterer konfigurierbarer Parameter kann proaktiv alarmiert werden. Über das Grafana-Dashboard lassen sich alle systemrelevanten Komponenten in Echtzeit über-wachen und visualisieren.',
      image: { src: 'img/mlink/Monitoring.svg', alt: 'borders' },
    },
    {
      title: 'Business Intelligence',
      content:
        'In der heutigen Zeit werden Erkenntnisse aufgrund von Daten immer wertvoller. Somit nehmen Systeme, die es ermöglichen aktuelle Daten zu sammeln, kombiniert bereitzustellen und diese zu interpretieren, eine immer wichtigere Rolle für erfolgreiche Unternehmen ein.' +
        'Eine zentrale Funktionalität von µLink ist der Zugriff auf komplexe Daten in Echtzeit. Die Kombination der Daten (wie Stammdaten, Betriebsdaten, temp. Daten) aus verschiedenen Systemen erlauben eine umfassende Einsicht und eröffnen neue Möglichkeiten, um basierend auf Algorithmen oder künstlicher Intelligenz überzeugende Entscheidungen zu treffen. Beispielsweise ermöglicht µLink die einfache Echtzeit-Integration ins Power BI von Microsoft.',
      image: { src: 'img/mlink/BusinessIntelligence.svg', alt: 'scale' },
    },
    {
      title: 'Die Vorteile von µlink im Überblick',
      cards: [
        {
          title: 'Klare Grenzen',
          content:
            'Das ERP muss nicht verschiedenste Systeme mit Exporten bedienen und kann seine Ressourcen ausschliesslich für den eigenen Betrieb verwenden. Die Last, welche durch die Kommunikation mit Umsystemen entsteht, wird transparent und explizit verwaltbar. Datentransformationen, welche Umsystem-spezifisch sind, sind nicht mehr Teil des ERP internen Ablaufs.',
        },
        {
          title: 'Skalierbarkeit',
          content:
            'Die Verfügbarkeit der Informationen kann \n' +
            'unabhängig vom ERP ausgebaut werden. \n' +
            'µLink ist nicht von Auslastungsspitzen des Ökosystems betroffen. Es ist dank der Microservice Architektur von µLink sogar möglich einzelne Aspekte der Schnittstelle einzeln zu skalieren. µLink kann On-Premise oder in der Cloud betrieben werden.\n',
        },
        {
          title: 'Schnittstellen',
          content:
            'µLink bietet mit REST und AMQP offene und vielseitige Schnittstellen an. Das Knowhow kann so mit wenig Aufwand intern aufgebaut werden. µLink setzt bewusst auf offene Standards um keine, nur für µLink zu erlernende, Hürde einzuführen.',
        },
        {
          title: 'Sicherheit',
          content:
            'Sämtliche Kommunikation erfolgt ausschliesslich via HTTPS und TLS und bedarf einer Authentifizierung. Die Komponenten von µLink sind hochverfügbar und erlauben einen Ausfall von einzelnen Containern, ohne die Funktion zu mindern. Es besteht die Möglichkeit µLink in ein Monitoring System für kritische Systeme zu integrieren. µLink bietet Möglichkeiten zur Kontrolle des Zugriffs und der Verwendung der Schnittstellen durch Umsysteme. Sogar Daten lassen sich benutzerspezifisch maskieren.',
        },
        {
          title: 'Versionierung',
          content:
            'Die von µLink für die Umsysteme zur Verfügung gestellte Schnittstelle ist versionssicher, d.h. Anpassungen und Updates am ERP führen nicht zu Tests und Anpassungen an allen abhängigen Systemen, sondern beschränken sich auf µLink. Die Komplexität der Kommunikation wird mit dem ERP gekapselt. ',
        },
        {
          title: 'Kosteneffizienz',
          content:
            'Integratoren bewegen sich immer nur im Umfeld ihrer Applikation, somit fällt der grösste Teil der Einarbeitungskosten und Koordinationsaufwand weg. Wird ein angebotenes System ausgetauscht, muss nur die Schnittstelle zu µLInk entwickelt werden. \n' +
            'Für diverse Applikationen bieten wir Standardmodule an und sind gewillt auf Kundenwunsch weitere zu erarbeiten. \n' +
            'Das Lizenzmodel von µLink könnte nicht simpler sein. Module werden einmalig erworben, danach verwenden sie mLink so oft und mit so vielen Usern wie sie wollen.\n',
        },
      ],
    },
  ]

  let quotes: { left: BlockContent; right: BlockContent }[] = [
    {
      left: {
        quote: {
          image: 'img/customer/ebl-logo.svg',
          imageCss: 'h-24',
          content:
            'μLink ist die Datendrehscheibe, welche Microsoft Dynamics AX und das Data Warehouse mit unseren Applikationen in Echtzeit vernetzt',
          person: 'Philippe Kienner',
          personTitle: 'CIO',
        },
      },
      right: {
        quote: {
          image: 'img/customer/glb-logo.svg',
          imageCss: 'h-24',
          content: 'Mit μLink erweitern wir ABACUS nach Belieben',
          person: 'Ueli Grossen',
          personTitle: 'CIO',
        },
      },
    },
    {
      left: {
        quote: {
          image: 'img/customer/riwax-logo.svg',
          imageCss: 'h-12',
          content: 'μLink bindet unseren Aussendienst eng in unseren Betrieb ein',
          person: 'Michel Scherz',
          personTitle: 'Purchasing Manager',
        },
      },
      right: {
        quote: {
          image: 'img/customer/ortho-team-logo.svg',
          imageCss: 'h-12',
          content: 'μLink verbindet unsere Mitarbeiter von der Kundenberatung ohne Zeitverlust direkt zum Techniker',
          person: 'Patrick Rohrer',
          personTitle: 'CFO',
        },
      },
    },
    {
      left: {
        quote: {
          image: 'img/customer/kibag-logo.svg',
          imageCss: 'h-24 w-24',
          content: 'μLink liefert uns die Grundlage für die digitale Bauakte',
          person: 'Yves Stucki',
          personTitle: 'CIO',
        },
      },
      right: {
        quote: {
          image: 'img/customer/walo-logo.svg',
          imageCss: 'h-24',
          content: 'μLink ist die zentrale Datendrehscheibe in unserem Ökosystem',
          person: 'Roger Bühlmann',
          personTitle: 'Group CIO',
        },
      },
    },
  ]
</script>

<svelte:head>
  <title>mLink Data Broker - triarc-labs</title>
</svelte:head>

<div class="bg-white">
  {#each contents as content}
    {#if content.video}
      <div class="bg-blue-triarc py-8">
        <Container>
          <Video bind:content={content.video} />
        </Container>
      </div>
    {:else}
      <Block bind:content />
    {/if}
  {/each}

  {#each quotes as quote}
    <section class="bg-white even:bg-gray-100">
      <div class="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-16">
        <div class="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div class="flex flex-col pb-10 sm:pb-16 lg:pb-0 lg:pr-8 xl:pr-20">
            <!-- TODO: When reworking page do a proper fix instead of a stopgap fix -->
            {#if typeof quote.left.quote?.image === 'string'}
              <img class="{quote.left.quote?.imageCss} self-start" src={quote.left.quote?.image} alt="" />
              <figure class="mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-8 text-gray-900">
                  <p>“{quote.left.quote?.content}”</p>
                </blockquote>
                <figcaption class="mt-10 flex items-center gap-x-6">
                  <div class="text-base">
                    <div class="font-semibold text-gray-900">{quote.left.quote?.person}</div>
                    <div class="mt-1 text-gray-500">{quote.left.quote?.personTitle}</div>
                  </div>
                </figcaption>
              </figure>
            {/if}
          </div>
          <div
            class="flex flex-col border-t border-gray-900/10 pt-10 sm:pt-16 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:pl-20"
          >
            {#if typeof quote.right.quote?.image === 'string'}
              <img class="{quote.right.quote?.imageCss} self-start" src={quote.right.quote?.image} alt="" />
              <figure class="mt-10 flex flex-auto flex-col justify-between">
                <blockquote class="text-lg leading-8 text-gray-900">
                  <p>“{quote.right.quote?.content}”</p>
                </blockquote>
                <figcaption class="mt-10 flex items-center gap-x-6">
                  <div class="text-base">
                    <div class="font-semibold text-gray-900">{quote.right.quote?.person}</div>
                    <div class="mt-1 text-gray-500">{quote.right.quote?.personTitle}</div>
                  </div>
                </figcaption>
              </figure>
            {/if}
          </div>
        </div>
      </div>
      <hr />
    </section>
  {/each}

  <Footer />
</div>
