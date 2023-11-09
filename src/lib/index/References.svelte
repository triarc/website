<script lang="ts">
  // import pascal from '../assets/avatars/pascal.png?width=255&format=webp;png&metadata'
  // import elke from '../assets/avatars/elke.png?width=255&format=webp;png&metadata'
  import FinishedProject2 from '$lib/components/FinishedProject2.svelte'
  import FinishedProjectMobile from '$lib/components/FinishedProjectMobile.svelte'
  let finishedProject = [
    {
      appName: 'µLink',
      companyDescription:
        'Die Schnittstellen zwischen den verschiedenen Systemen mit unterschiedlichen Technologien stellt Unternehmen vor grosse Herausforderungen. ' +
        'µLink vereinfacht als zentrale Instanz die Schnittstellenproblematik, vernetzt die verschiedenen Systeme und ermöglicht damit die zentrale Bewirtschaftung ' +
        'der Schnittstellen. So kann mit minimalem Aufwand neue Software ins Ökosystem integriert oder bestehende abgelöst werden.',
      situation:
        'Innovation kam Historisch bedingt zustande. Wir sind spezialisiert auf Anbindungen an (allgemein ERP’s). Mit unserer Echtzeit Datahub-Lösung µLink umgehen' +
        ' wir die Komplexität und Geschwindigkeitsproblematik der ABA-Connect Schnittstelle. 80% unserer Kunden haben ABACUS im Einsatz.',
      challenges: '???',
      solutions:
        'Mit µLink lassen sich die Datenflüsse zwischen Softwaresystemen zentral observieren. Bei einem Ausfall, einer Abnahme der Leistung oder ' +
        'weiterer konfigurierbarer Parameter kann proaktiv alarmiert werden. Über das Grafana-Dashboard lassen sich alle systemrelevanten Komponenten ' +
        'in Echtzeit über-wachen und visualisieren.',
      imageSource: 'img/references/mLink.png',
      // id: 'porta'
    },
    {
      appName: 'Porta',
      companyDescription:
        'Die Tanne, Schweizerische Stiftung für Taubblinde, ist das Kompetenz-Zentrum bei angeborener Hörseh-Behinderung und verwandter mehrfacher ' +
        'Sinnes-Behinderung. Sie begleitet Betroffene in jedem Lebens-Alter',
      situation:
        'Die Stiftung Tanne verfügte nur über eine Webseite als Informationsquelle. Eine dafür eigens entwickelte App war der Lösungswunsch,' +
        ' um einen persönlichen Zugang (mittels Login) zu verschaffen um Schulungen, Lernstunden zu konsumieren. ',
      challenges:
        'Beim UI/UX fokussierte man sich verstärkt auf die Anforderung/Bedürfnisse von Taubstummen und' +
        ' Analphabeten Menschen, gleichzeitig sollte auch der Spagat zu Usergruppe (Das Umfeld der beeinträchtigten' +
        ' Menschen) gelingen.',
      solutions:
        'Die PORTA App ist eine Lernsoftware mit umfangreicher Funktionalität, mit der es richtig' +
        ' Spass macht zu lernen. Die App ermöglicht neben dem Erlernen der Portagebärden, das Erfassen und' +
        ' Teilen bedürfnisspezifischer Gebärden, benutzerdefinierter Kataloge und Arbeitsblätter. Spielerisch' +
        ' kann das erworbene Wissen mit einem Lernspiel getestet und vertieft werden. Probier es aus und lass' +
        ' dich begeistern!',
      imageSource: 'img/references/tanne-app.png',
      // id: 'porta'
    },
    {
      appName: 'Ortho Client',
      companyDescription:
        'Die ORTHO-TEAM Gruppe ist ein national tätiges Schweizer Unternehmen, welches ein ganzheitliches Versorgungskonzept in der Orthopädie- und Rehatechnik bietet.' +
        ' Hochspezialisiert auf der ganzen Bandbreite der Branche entwickelt der Technologiedienstleister höchst innovative Produkte, um Menschen zu mehr Unabhängigkeit' +
        ' und Lebensqualität zu verhelfen. 23 Standorte in der Schweiz.',

      situation:
        'Man strebte an, gemeinsam eine digitale Plattform zu entwickeln, um den bisherigen papierbasierten Kernprozess von der Anamnese bis zur Produktion zu ersetzen.',
      challenges: '???',
      solutions:
        'Die digitale Kundenbegleiterin, gelöst als mobil einsetzbare Applikation zur Erstellung der Anamese, ' +
        'Analyse bis hin zur fallbezogenen und interdisziplinären Kommunikation. Damit stellt OrthoClient' +
        ' eine effiziente Auftragsabwicklung sowie einen exzellenten Kundenservice sicher. Sämtliche auftragsbezogenen Daten' +
        ' wie die ärztliche Verordnung, Bilder oder erbrachte Leistungen (mobil und digital) können mit der Client App' +
        ' zugeordnet werden. So wurden u.a. die Durchlaufzeiten bei der Leistungsverrechnung wesentlich verkürzt und' +
        'der Aufwand in Backoffice und Administration reduziert.',
      imageSource: 'img/references/wunder-app.png',
      // id: 'ortho-client'
    },
    // {
    //   appName: 'myWalo',
    //   companyDescription:
    //     'Verankert in der Schweiz und international tätig wird WALO als Familienunternehmen in 4. und 5. Generation geführt. ' +
    //     'Seit über 100 Jahren setzt WALO auf die Verbindung von Beständigkeit und Innovation.',
    //   situation:
    //     'Die Walo Baumaschinen waren geografisch irgendwo verteilt. Keine Übersicht der genauen GPS-Daten, wo sich was befindet. Dokumentationen in Anlagen' +
    //     ' immer wieder verschwunden. Zertifikate bei Baustellenprüfung nicht zur Hand. Mühsamer Prozess bei einer Baustellen Eröffnung/Etappe/Gewerk ' +
    //     'via ABACUS. Die Anlagen stehen herum, werden nicht sachgemäss verwendet, zu lange auch ohne Service.',
    //   challenges:
    //     'Daten aus 4 Umsystemen dort verfügbar machen – wo sie gebraucht werden. Datenqualität bei Walo war ebenfalls ein Thema.',
    //   solutions:
    //     'Die Applikation kann dank unserem Datahub verschiedene Prozesse digital im Feld anbieten (Daten aus den vier Umsystemen) ABACUS, Inventar/Verwaltung, ' +
    //     'BauBit, Sharepoint, DMS, Fleetmanagment. Funktionen: nach Anlagen suchen und finden. Indexierung. Dokumente, Bedienungsanleitungen in div. Sprachen, ' +
    //     'Maschinenstunden etc. verfügbar. Baustellen können direkt eröffnet werden und der Mitarbeiter kann persönliche HR-Daten abrufen.',
    //   imageSource: 'img/references/walo-app.png',
    // id: 'myWalo'
    // },
    {
      appName: 'Riwaxique',
      companyDescription:
        'Produktionsanlagen und eine flächendeckende und kompetente Kundenbetreuung zeichnen die RIWAX Chemie AG seit Jahren als ' +
        ' führenden Schweizer Hersteller und Anbieter von Spezialitäten für die Fahrzeugpflege aus.',
      situation:
        'Die Vision der Geschäftsleitung: Die RIWAX Aussendienst Mitarbeitenden sollen mit einer digitalen Kundenapplikation optimal und in' +
        ' Echtzeit draussen im Feld unterstützt werden.',
      challenges:
        'Die Herausforderung bestand darin, den Aussendienst effizient zu leiten, um sicherzustellen, dass die richtigen Kunden zum' +
        ' optimalen Zeitpunkt besucht werden. Dies erforderte die Bereitstellung aktueller und relevanter Daten über Kunden sowie die Stärkung der Selbstorganisation der Außendienstmitarbeiter.',
      solutions:
        'Die intergierte Kontakt- und Routenplanung schlägt den MA automatisch Kunden vor, die sie lange nicht mehr besucht haben oder welche sich' +
        ' ebenfalls auf der jeweiligen Arbeitsroute befinden. Ausserdem können Bestellungen direkt via App aufgenommen und ausgelöst werden.' +
        ' Integriertes Bestellwesen und Produktekatalog. Alle benötigten Kundendaten (CRM) sind ebenfalls jederzeit abrufbar.',
      imageSource: 'img/references/Riwax.png',
      // id: 'riwaxique'
    },
    {
      appName: 'Vademecum',
      companyDescription: 'Dr. Ines Schlienger, Psychologin und Sonderpädagogin, Zürich',
      situation:
        'Die Digitalisierung des VADEMECUM (App und Webapplikation) wurde durch ein Crowdfunding mitfinanziert.',
      challenges: '???',
      solutions:
        'Die VADEMECUM App und Webapplikation unterstützt und vereinfacht das Zusammenwirken von Fachpersonen und' +
        ' Eltern (oder anderen Bezugspersonen) im Bereich der frühen Diagnostik oder Entwicklungsbegleitung bis zu' +
        ' einem Entwicklungsalter von vier Jahren.',
      imageSource: 'img/references/Vademecum.png',
      // id: 'vademecum'
    },
    {
      appName: 'CondAct',
      companyDescription:
        'Die Stiftung IdéeSport engagiert sich im Bereich der Kinder- und Jugendförderung.' +
        ' Sie nutzt Sport als Mittel der Suchtprävention, der Gesundheitsförderung und der gesellschaftlichen Integration.',
      situation:
        'Die Hallenteams, die mit den Kindern im direkten Kontakt sind, brauchten ein Instrument, um den Verhaltenskodex' +
        ' unkompliziert und konsequent während der Veranstaltungen anzuwenden. Dafür wurde eine dreisprachige «CondAct»-App seitens IdeéSport gewünscht.',
      challenges:
        'Präventive Lerninhalte spielerisch der digital anspruchsvollen Usergruppe (Jugendliche) zu vermitteln.',
      solutions: 'Die App bietet eine Vielzahl von Lernvideos zum Thema Verhaltenskodex und Risikosituationen für Coaches (Jugendliche) die mit Kindern arbeiten.' +
        ' Nach der Wissensvermittlung gibt es Kontrollfragen. Um das Ganze spielerischer zu gestalten, stehen verschiedene Level zur Verfügung, ein persönlicher' +
        ' Avatar kann erstellt werden, und ein Buddy steht mit hilfreichen Tipps und Tricks zur Seite.',
      imageSource: 'img/references/CondAct.png',
      //id: 'condAct'
    },
    {
      appName: 'Ortho-Order',
      companyDescription:
        'Die ORTHO-TEAM Gruppe ist ein national tätiges Schweizer Unternehmen, welches ein ganzheitliches Versorgungskonzept' +
        ' in der Orthopädie- und Rehatechnik bietet. Hochspezialisiert auf der ganzen Bandbreite der Branche entwickelt der' +
        ' Technologiedienstleister höchst innovative Produkte, um Menschen zu mehr Unabhängigkeit und Lebensqualität zu verhelfen.' +
        ' 23 Standorte in der Schweiz.',
      situation:
        'Die Orthoteam Geschäftsführung wollte das Bestellwesen revolutionieren, sodass alle MI ohne grosse Vorkenntnisse sofort und schnell,' +
        ' die Lieferanten-Bestellungen vornehmen können. Den Wareneinkauf gesamtschweizerisch zu koordinieren.' +
        ' Wie wird was wann eingekauft.',
      challenges:
              'Unsere Herausforderung bestand darin, die Lieferantenbestellungen für den Materialbedarf an allen 23 Standorten sowie für alle Mitarbeitenden sicherzustellen,' +
              ' um sowohl die internen Unternehmensinteressen als auch die externen Kundenbedürfnisse zu erfüllen. Dabei war es unser Ziel, jedem Mitarbeitenden die eigenständige' +
              ' Materialbeschaffung transparent und benutzerfreundlich zu gestalten, ohne das er dabei die Kontrolle vollständig abgibt.',
      solutions:
              'Preis- und Zeit-optimiertes Bestellwesen. Eine mobile Applikation zum effizienten Bestellen von benötigten Artikeln ohne sich um Details,' +
              ' wie bei welchem Lieferanten bestellt werden soll, kümmern zu müssen. Vom digital koordinierten Einkauf bis zur Benachrichtigung auf Grund von' +
              ' Wareneingängen regelt OrthoOrder alle Details selbst. Der Bestellprozess mit der Order App ist deutlich einfacher, schneller und bei Wareneingang' +
              ' besser nachvollziehbar. Die Interessen des Einkaufs bleiben gewahrt.',
      imageSource: 'img/references/OrthoOrder.png',
      //id: 'ortho-order'
    },
    {
      appName: 'Fastspace',
      companyDescription:
        'Die Espace Real Estate Holding AG (Espace) ist eine Immobilienanlagegesellschaft mit Sitz in Solothurn.' +
        ' Die Gesellschaft investiert in Immobilien in den Kantonen Bern, Solothurn, Aargau, Luzern und Schaffhausen.',
      situation:
        'Der Wunsch war die Immobilienbewirtschaftung ins digitale Zeitalter zu bewegen. Neues Businessmodell für das Jahr 2023.' +
        ' Ihre Mieter sollen ganz unkompliziert ohne grosse Analoge Hürden eine Wohnung, Lagerräume, Parkplatz, Hobbyraum mieten.' +
        ' Papierlos und so schnell, unkompliziert, komplett Digital die Prozesse lösen wollen.',
      challenges:
        'Auf Mieterseite: Einbindung in den neuen Prozess, die Zahlungsabwicklungen via  Stripe' +
        ' (nur Zahlungen mit Kreditkarten sind möglich) dies führte zu Einschränken.\n' +
        'Auf Verwaltungsseite: die gesamte Abwicklung (Mietprozess) digital zu lösen, Konzeptionell Prozesse darstellen' +
        ' ohne grosse Erfahrungswerte.',
      solutions:
        'Mehr Flexibilität auf beiden Seiten (Mieter wie auch Vermieter) schnellere Abwicklungen von des Mietprozesses.' +
        ' Neues Businessmodell / mehr Umsatz zu generieren. Zusätzlicher Services der Verwaltung' +
        ' 24/7 Kommunikationsboard für beide Parteien. Mieterprofil mit allen relevanten Daten hinterlegt und zugänglich bei Bedarf',
      imageSource: 'img/references/Fastspace.png',
      //id: 'fastspace'
    },
    {
      appName: 'CAL',
      companyDescription:
        'Christen Holding AG heute noch von der Gründerfamilie geführt. Als einer der grössten Arbeitgeber' +
        ' im Kanton Schwyz ist sie die erfolgreiche Baupartnerin für private und öffentliche Bauherrschaften.',
      situation:
        'Die alte Logistiklösung für Dispositionen der Fahrzeuge, wurde vom bevorstehenden Anbieter nicht mehr Unterstützt sprich' +
        ' Weiterentwickelt. Dies veranlasste die Christen AG eine eigene Custom Lösung zu bauen, damit der gesamte End to End Prozess' +
        ' von der Logistik, zum Chauffeur und Endkunden digital abgebildet werden kann. ',
      challenges:
        'Der gesamte Fahrzeugpark musste integriert werden. Der sehr komplexe analoge Prozess umfasste viele verschiedene Ausnahmen im' +
        ' Bereich der Anforderungen und Wünsche auf der Userseite.  Ausserdem wurde eine Schnittstelle zwischen ABACUS und der' +
        ' Applikation benötigt, um Daten wie Kundenstamm, Abrechnungsprozess, Auftragsverwaltungen in der Applikation anzubieten. ',
      solutions:
        'Verbesserte und transparentere Kommunikation zwischen Dispo und Chauffeuren. Auftragserteilung erfolgt nun direkt von CAL aus nach TomTom.' +
        ' Eine Echtzeit-Routenberechnung wurde ebenfalls integriert, dies hilft der Dispo die Planung effizienter zu gestalten. ',
      imageSource: 'img/references/CAL.png',
      //id: 'cal'
    },
    {
      appName: 'M3 Express',
      companyDescription:
        'Liver IT AG – möchte die Digitalisierung im Bauwesen vorantreiben. Transparent und' +
        ' zugänglich Schüttgut, Transport und Mulden anbieten.',
      situation:
        'Ivan – Gründer und  leidenschaftlicher Gartenbauer, war ein frustierter Jungunternehmer – viele Prozesse immer noch' +
        ' Analog sind sprich via Telefon koordiniert werden. Es gab diverse Probleme mit vielen Fehlerquellen, keine Transparenz. ',
      challenges:
        'Auf Lieferantenseite: Kies- und Muldentransportunternehmen zu überzeugen, mitzumachen.\n' +
        'Auf Kundenseite: Für die Nutzer, einen effizienten Prozess abzubilden (von der Baustelle bis zum Lieferanten) diverse Zielgruppen' +
        ' (Gartenbauer, Polier, etc.) mit sämtlichen Bedürfnissen abholen zu können – alle sollen Digital arbeiten. Für einen' +
        ' verbesserten Kommunikations- und Informationsfluss.',
      solutions:
        'Lieferantenseiten: Flexible Planung von Fahrer und Fahrzeuge, Kommunikationsfluss vom Kunden bis zum eigentlichen' +
        ' Lieferanten zu gewährleisten. Mehr Transparenz. \n' +
        'Kundenseite: Digital und in Echtzeit alle Information zur Bestellung überwachen können und alle Informationen zugänglich zu haben' +
        'M3 Express vereinfacht den digitalen Zugang zu Schüttgut, Transport und Mulden auch für kleine Unternehmungen.',
      imageSource: 'img/references/M3Express.png',
      //id: 'm3express'
    },
    {
      appName: 'Verba',
      companyDescription:
        'Die Schweizerische Vereinigung Morbus Bechterew (SVMB) wurde 1978 von Betroffenen gegründet und zählt' +
        ' heute über 4300 Mitglieder. Sie berät, unterstützt und vernetzt Menschen mit der chronisch-rheumatischen' +
        ' Erkrankung Morbus Bechterew',
      situation: '???',
      challenges: '???',
      solutions:
        'Verba verwaltet die Dossiers der Mitglieder und begleitet sie im Therapieprozess. Von der digitalen' +
        ' Krankenkassenrechnung bis hin zur vollständigen Integration ins SAGE. Die Vereinslösung in der Schweizer' +
        ' Cloud, damit sich das Bechterew-Team auf die wichtigen Dinge im Alltag fokussieren kann.',
      imageSource: 'img/references/svmb.png',
    },
    {
      appName: 'Chauffeur App',
      companyDescription:
        'Produktionsanlagen und eine flächendeckende und kompetente Kundenbetreuung zeichnen die RIWAX Chemie AG ' +
        'seit Jahren als führenden Schweizer Hersteller und Anbieter von Spezialitäten für die Fahrzeugpflege aus.',
      situation: '???',
      challenges: '???',
      solutions: '???',
      imageSource: 'img/references/Chauffeur.png',
    },
  ]
  let finishedProjectMobile = [
    {
      appName: 'Sutter App',
      companyDescription:
        'Das Leistungsspektrum erstreckt sich über das ganze Bauhauptgewerbe. Sie haben spezialisierte Teams und Maschinen für unterschiedlichste Aufgaben' +
        ' - Sie bieten ein breites Angebot im Hoch- und Tiefbau und sind dabei in vielen Bau-Disziplinen wie zum Beispiel dem Trassebau hochspezialisiert.',
      situation:
        'Die Firma Sutter Bauunternehmung AG wünschte sich eine auf ihr Arbeitsumfeld und Anforderungen optimierte Lösung zur Präsenz- und Projektzeiterfassung' +
        ' für Personen und Material. Zusätzlich sollen Tages/Regie-Rapporte erstellt und verteilt werden können.',
      challenges:
        'Die Mitarbeiter sollen eine möglichst einfach bedienbare Lösung erhalten. Die Applikation soll durchlässig sein, um einen flexiblen Einsatz zu ermöglichen.' +
        ' Die Auswahl der Projekte, Mitarbeiter, Maschinen und Produkte soll aufgrund der Planung oder Konfiguration vereinfacht resp. unterstützt werden.' +
        ' Keine Maschinenstunden sollen mehr vergessen gehen!',
      solutions:
        'Die Erfassung von Tagesrapporten auf den Baustellen wurde durch die gemeinsam entwickelte Applikation «SutterApp» um ein Vielfaches übersichtlicher und' +
        ' effizienter. Mitarbeiter werden im Rapportierungsprozess unterstützt, da die SutterApp Plandaten aus dem ERP-System ABACUS für Rollen, Inventar, Material' +
        ' und Fremdleistungen vorschlägt. Zusätzlich können Schnellbausteine und die Historie-Funktion genutzt werden.',
      imageSources: [
        'img/references/Sutter1.png',
        'img/references/Sutter2.png',
        'img/references/Sutter3.png',
        'img/references/Sutter1.png',
        'img/references/Sutter2.png',
        'img/references/Sutter3.png',
      ],
    },
    {
      appName: 'My Business',
      companyDescription:
        'Planen, Bauen, Einrichten - das Portfolio der GLB ist vielfältig.' +
        ' Mit Standorten in den Kantonen Bern und Zürich und den rund 900 Mitarbeitenden ist die GLB seit über' +
        ' 50 Jahren die kompetente Partnerin für Lebensräume.\n',
      situation:
        'Bis vor Kurzem erfassten alle Berufsgruppen innerhalb der GLB-Gruppe ihre Daten, sei es Arbeitszeit, Spesen, Absenzen oder Material,' +
        ' auf Papier. Die Überprüfung der Berichte erfolgte zunächst durch den Auftraggeber oder den zuständigen Vorgesetzten, und anschliessend ' +
        'mussten die Daten mühsam manuell im Büro erfasst werden. Dieser Prozess musste überdacht werden, um nach einer zukunftsfähigen Lösung zu suchen.',
      challenges:
        'Die Ansprüche waren umfangreich. Die Vereinfachung des bis anhin umständlichen Prozesses und die intuitive sowie effiziente Bedienung bei' +
        ' möglichst minimalem Schulungsaufwand, zählten zu den zentralen Anforderungen. Nur so konnte die Lösung' +
        ' auch zu einem positiven Nutzererlebnis führen, schliesslich gab es Bedenken bezüglich der' +
        ' Akzeptanz einer digitalen Lösung seitens der Mitarbeitenden.',
      solutions:
        'Die interne Kommunikationsplattform «MyBusiness» mit der integrierten digitalen Zeiterfassung «digiZeit» ermöglicht für über 900 Mitarbeitende,' +
        ' von den Bauarbeitenden über die Schreiner bis hin zu den Energieberatern, eine einfache und bedienerfreundliche Rapportierung,' +
        ' reduziert damit erheblich den Administrativaufwands und schafft zeitnah aktuelle Projektdaten',
      imageSources: [
        'img/references/GLB1.png',
        'img/references/GLB2.png',
        'img/references/GLB3.png',
        'img/references/GLB4.png',
        'img/references/GLB5.png',
        'img/references/GLB6.png',
        'img/references/GLB7.png',
      ],
    },
    {
      appName: 'Bienvenu',
      companyDescription:
        'Die Stiftung IdéeSport engagiert sich im Bereich der Kinder- und Jugendförderung.' +
        ' Sie nutzt Sport als Mittel der Suchtprävention, der Gesundheitsförderung und der gesellschaftlichen Integration.',
      situation: 'Die manuelle Eingangskontrolle bei Events, die auf Excel basiert, ist fehleranfällig und zeitaufwändig.' +
        ' Dies führt oft zu langen Warteschlangen beim Check-In der Teilnehmer.',
      challenges: 'Die Übermittlung der Eventdaten an die ERP-Lösung von ABACUS. ' +
        'Offlinenutzung in den Eventhallen mit unzureichender Netzverbindung. ',
      solutions: 'Einfach, bedienbare, intuitive Event-App. Wichtige Teilnehmerdaten in Echtzeit verfügbar.' +
              ' Zb Notfallkontakt, Alter, Schulhaus, usw. Verbesserte Teilnehmer Eingangskontrolle.' +
              ' (Lange Warteschlange werden verhinder Teilnehmer müssen nur noch einmalig erfasst werden,' +
              ' Stammdaten sind hinterlegt und können für zukünftige Events schnell und einfach gesucht werden. ',
      imageSources: [
        'img/references/Bienvenu1.png',
        'img/references/Bienvenu2.png',
        'img/references/Bienvenu3.png',
        'img/references/Bienvenu4.png',
        'img/references/Bienvenu5.png',
        'img/references/Bienvenu6.png',
        'img/references/Bienvenu7.png',
      ],
    },
    {
      appName: 'myWalo',
      companyDescription:
        'Verankert in der Schweiz und international tätig wird WALO als Familienunternehmen in 4. und 5. Generation geführt. ' +
        'Seit über 100 Jahren setzt WALO auf die Verbindung von Beständigkeit und Innovation.',
      situation:
        'Die Walo Baumaschinen waren geografisch verstreut, ohne eine klare Übersicht über die genauen GPS-Daten, um ihren Standort zu bestimmen.' +
        ' Dokumentationen in den Anlagen gingen immer wieder verloren, und Zertifikate für Baustellenprüfungen waren nicht leicht zugänglich.' +
        ' Der Prozess zur Eröffnung von Baustellen, Etappen oder Gewerken über ABACUS gestaltete sich mühsam. Die Maschinen wurden vernachlässigt,' +
        ' nicht sachgemäss verwendet und blieben oft zu lange ohne Wartungsservice.',
      challenges:
        'Daten aus 4 Umsystemen dort verfügbar machen – wo sie gebraucht werden. Datenqualität bei Walo war ebenfalls ein Thema.',
      solutions:
        'Die Applikation kann dank unserem Datahub verschiedene Prozesse digital im Feld anbieten (Daten aus den vier Umsystemen) ABACUS, Inventar/Verwaltung, ' +
        'BauBit, Sharepoint, DMS, Fleetmanagment.<br>' +
        ' <strong>Funktionen</strong>: <br>' +
        ' Nach Anlagen suchen und finden. Indexierung. Dokumente, Bedienungsanleitungen in div. Sprachen, ' +
        'Maschinenstunden etc. verfügbar. Baustellen können direkt eröffnet werden und der Mitarbeiter kann persönliche HR-Daten abrufen.',
      imageSources: [
        'img/references/MyWalo1.png',
        'img/references/MyWalo2.png',
        'img/references/MyWalo3.png',
        'img/references/MyWalo4.png',
        'img/references/MyWalo1.png',
        'img/references/MyWalo2.png',
        'img/references/MyWalo3.png',
        'img/references/MyWalo4.png',
      ],
    },
  ]
</script>

<!--<div class="relative pt-8 md:pb-10 px-4 sm:px-6 lg:pt-16 lg:pb-28 lg:px-8" id="projects">-->
<!--  <div class="relative max-w-7xl mx-auto">-->
<!--    <div class="text-center">-->
<!--      <h2 class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">-->
<!--        Einige unserer Referenzen-->
<!--      </h2>-->
<!--    </div>-->
<!--  </div>-->
<!--</div>-->

{#each finishedProject as project}
  <FinishedProject2
    appName={project.appName}
    companyDescription={project.companyDescription}
    situation={project.situation}
    challenges = {project.challenges}
    solutions={project.solutions}
    imageSource={project.imageSource}
  />
{/each}

{#each finishedProjectMobile as mobileProject}
  <FinishedProjectMobile
    appName={mobileProject.appName}
    companyDescription={mobileProject.companyDescription}
    situation={ mobileProject.situation}
    challenges={mobileProject.challenges}
    solutions={mobileProject.solutions}
    imageSources={mobileProject.imageSources}
  />
{/each}

<!--<FinishedProject2 appName="Porta"-->
<!--                  companyDescription="Die Tanne, Schweizerische Stiftung für Taubblinde, ist das Kompetenz-Zentrum bei angeborener-->
<!--                 Hörseh-Behinderung und verwandter mehrfacher Sinnes-Behinderung. Sie begleitet Betroffene in jedem Lebens-Alter"-->
<!--                  situation="Die Stiftung Tanne verfügte nur über eine Webseite als Informationsquelle. Es gab aber keine Möglichkeit-->
<!--                 sich durch ein Login Zugang zu verschaffen um Schulungen, Lernstunden zu konsumieren. Eine dafür eigens entwickelte-->
<!--                 App war der Lösungswunsch."-->
<!--                  challenges="Beim UI/UX fokussierte man sich verstärkt auf die Anforderung/Bedürfnisse von Taubstummen und-->
<!--                 Analphabeten Menschen, gleichzeitig sollte auch der Spagat zu Usergruppe (Das Umfeld der beeinträchtigten-->
<!--                 Menschen) gelingen."-->
<!--                  solutions="Die PORTA App ist eine Lernsoftware mit umfangreicher Funktionalität, mit der es richtig-->
<!--                 Spass macht zu lernen. Die App ermöglicht neben dem Erlernen der Portagebärden, das Erfassen und-->
<!--                 Teilen bedürfnisspezifischer Gebärden, benutzerdefinierter Kataloge und Arbeitsblätter. Spielerisch-->
<!--                 kann das erworbene Wissen mit einem Lernspiel getestet und vertieft werden. Probier es aus und lass-->
<!--                 dich begeistern!"-->
<!--                  imageSource="img/references/tanne-app.png"></FinishedProject2>-->

<!--<div class="relative bg-white pt-16 pb-32 overflow-hidden">-->
<!--  <div class="relative">-->
<!--    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">-->
<!--      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">-->
<!--        <div>-->
<!--          <div class="mt-6">-->
<!--            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">PORTA</h2>-->
<!--            <p class="mt-4 text-lg text-gray-500 italic">-->
<!--              PORTA ist eine standardisierte Sammlung von Gebärden, die den Möglichkeiten und Bedürfnissen von Menschen-->
<!--              mit geistiger und mehrfacher (Sinnes-)Behinderung entsprechen.-->
<!--            </p>-->
<!--            <p class="mt-4 text-lg text-gray-500">-->
<!--              Zusammen mit «Die Tanne», der Schweizerischen Stiftung für Taubblinde, entwickelte wir für Porta eine-->
<!--              mobile Applikation mit umfangreicher Funktionalität – darunter das Trainieren von Gebärden nach-->
<!--              benutzerspezifischen Katalogen und von eigenen Gebärden – sowie Arbeitsblätter für den Austausch zwischen-->
<!--              Betreuungspersonen.-->
<!--            </p>-->
<!--            <div class="mt-6">-->
<!--              <div class="flex">-->
<!--                <a-->
<!--                  href="https://play.google.com/store/apps/details?id=com.triarclabs.tanne"-->
<!--                  target="_blank"-->
<!--                  rel="noreferrer"-->
<!--                >-->
<!--                  <img alt="Get it on Google Play" src="icons/google-play-btn.svg" class="h-12 mr-3" />-->
<!--                </a>-->
<!--                <a-->
<!--                  href="https://apps.apple.com/ch/app/porta-portmann-tanne/id1355730154"-->
<!--                  target="_blank"-->
<!--                  rel="noreferrer"-->
<!--                >-->
<!--                  <img alt="Get it on Apple AppStore" src="icons/apple-store-btn.svg" class="h-12" />-->
<!--                </a>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="mt-4 pt-4">-->
<!--          <blockquote>-->
<!--            <footer class="">-->
<!--              <div class="flex items-center space-x-3">-->
<!--                <div class="flex-shrink-0">-->
<!--                  <picture class="h-10 w-10">-->
<!--                    {#each pascal as image}-->
<!--                      <source type="image/{image.format}" srcset={image.src} loading="lazy" />-->
<!--                    {/each}-->
<!--                    <img-->
<!--                      src={pascal[1].src}-->
<!--                      alt={pascal.name}-->
<!--                      width="255"-->
<!--                      height="255"-->
<!--                      loading="lazy"-->
<!--                      class="h-10 w-10"-->
<!--                    />-->
<!--                  </picture>-->
<!--                </div>-->
<!--                <div class="cursor-pointer">-->
<!--                  <div class="text-base font-medium text-gray-700">Pascal Bertschi</div>-->
<!--                  <div class="font-light text-gray-500">Software Lead</div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </footer>-->
<!--          </blockquote>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt-12 sm:mt-16 lg:mt-0">-->
<!--        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">-->
<!--          <img-->
<!--            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"-->
<!--            src="img/references/tanne-app.png"-->
<!--            alt="tanne app"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="mt-24">-->
<!--    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">-->
<!--      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">-->
<!--        <div>-->
<!--          <div class="mt-6">-->
<!--            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Ortho Client</h2>-->
<!--            <p class="mt-4 text-lg text-gray-500 italic">-->
<!--              ORTHO-TEAM ist ein gesamtschweizerisch tätiges Unternehmen auf dem Gebiet der Orthopädie- und-->
<!--              Reha-Technik, fokussiert auf ganzheitliche Versorgungskonzepte.-->
<!--            </p>-->
<!--            <p class="mt-4 text-lg text-gray-500">-->
<!--              Die Fertigung von Orthesen und Prothesen ist sehr individuell auf den Kunden zugeschnitten und-->
<!--              anspruchsvoll. Mit den von triarc konzipierten Applikationen Client, Order und Shortcut werden die-->
<!--              Spezialisten während des gesamten Kundenprozesses unterstützt – von der vereinfachten Auftragseröffnung-->
<!--              und der Bearbeitung über die Begleitung des Kunden bis hin zum digitalisierten Bestellwesen.-->
<!--            </p>-->
<!--            <div class="flex pt-4  text-lg text-gray-700 cursor-pointer">-->
<!--              <a-->
<!--                href="/news/die-zusammenarbeit-mit-triarc-labs-ist-fur-uns-nicht-mehr-wegzudenken"-->
<!--                class="rounded bg-blue-triarc text-white px-3 py-1 inline-block mt-2"-->
<!--              >-->
<!--                <span class="">Mehr dazu</span>-->
<!--              </a>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="mt-4 pt-4">-->
<!--          <blockquote>-->
<!--            <footer class="mt-3">-->
<!--              <div class="flex items-center space-x-3">-->
<!--                <div class="flex-shrink-0">-->
<!--                  <picture class="h-10 w-10">-->
<!--                    {#each elke as image}-->
<!--                      <source type="image/{image.format}" srcset={image.src} loading="lazy" />-->
<!--                    {/each}-->
<!--                    <img src={elke[1].src} alt={elke.name} width="255" height="255" loading="lazy" class="h-10 w-10" />-->
<!--                  </picture>-->
<!--                </div>-->
<!--                <div class="cursor-pointer">-->
<!--                  <div class="text-base font-medium text-gray-700">Elke Engel</div>-->
<!--                  <div class="font-light text-gray-500">Project Lead</div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </footer>-->
<!--          </blockquote>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">-->
<!--        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">-->
<!--          <img-->
<!--            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"-->
<!--            src="img/references/wunder-app.png"-->
<!--            alt="tanne app"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="relative mt-24">-->
<!--    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">-->
<!--      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">-->
<!--        <div>-->
<!--          <div class="mt-6">-->
<!--            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">Verba</h2>-->
<!--            <p class="mt-4 text-lg text-gray-500 italic">-->
<!--              Die Schweizerische Vereinigung Morbus Bechterew (SVMB) wurde 1978 von Betroffenen gegründet und zählt-->
<!--              heute über 4300 Mitglieder. Sie berät, unterstützt und vernetzt Menschen mit der chronisch-rheumatischen-->
<!--              Erkrankung Morbus Bechterew-->
<!--            </p>-->
<!--            <p class="mt-4 text-lg text-gray-500">-->
<!--              Verba verwaltet die Dossiers der Mitglieder und begleitet sie im Therapieprozess. Von der digitalen-->
<!--              Krankenkassenrechnung bis hin zur vollständigen Integration ins SAGE. Die Vereinslösung in der Schweizer-->
<!--              Cloud, damit sich das Bechterew-Team auf die wichtigen Dinge im Alltag fokussieren kann.-->
<!--            </p>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="mt-4 pt-4">-->
<!--          <blockquote>-->
<!--            <footer class="">-->
<!--              <div class="flex items-center space-x-3">-->
<!--                <div class="flex-shrink-0">-->
<!--                  <picture class="h-10 w-10">-->
<!--                    {#each pascal as image}-->
<!--                      <source type="image/{image.format}" srcset={image.src} loading="lazy" />-->
<!--                    {/each}-->
<!--                    <img-->
<!--                      src={pascal[1].src}-->
<!--                      alt={pascal.name}-->
<!--                      width="255"-->
<!--                      height="255"-->
<!--                      loading="lazy"-->
<!--                      class="h-10 w-10"-->
<!--                    />-->
<!--                  </picture>-->
<!--                </div>-->
<!--                <div class="cursor-pointer">-->
<!--                  <div class="text-base font-medium text-gray-700">Pascal Bertschi</div>-->
<!--                  <div class="font-light text-gray-500">Software Lead</div>-->
<!--                </div>-->
<!--              </div>-->
<!--            </footer>-->
<!--          </blockquote>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="mt-12 sm:mt-16 lg:mt-0">-->
<!--        <div class="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">-->
<!--          <img-->
<!--            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"-->
<!--            src="img/references/svmb.png"-->
<!--            alt="verba"-->
<!--          />-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  &lt;!&ndash;  <div class="mt-24">&ndash;&gt;-->
<!--  &lt;!&ndash;    <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">&ndash;&gt;-->
<!--  &lt;!&ndash;      <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">&ndash;&gt;-->
<!--  &lt;!&ndash;        <div>&ndash;&gt;-->
<!--  &lt;!&ndash;          <div class="mt-6">&ndash;&gt;-->
<!--  &lt;!&ndash;            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900">myWalo</h2>&ndash;&gt;-->
<!--  &lt;!&ndash;            <p class="mt-4 text-lg text-gray-500 italic">&ndash;&gt;-->
<!--  &lt;!&ndash;              WALO ist ein international tätiges, seit über 100 Jahren familiengeführtes Schweizer Bauunternehmen (heute&ndash;&gt;-->
<!--  &lt;!&ndash;              bereits in dritter und vierter Generation).&ndash;&gt;-->
<!--  &lt;!&ndash;            </p>&ndash;&gt;-->
<!--  &lt;!&ndash;            <p class="mt-4 text-lg text-gray-500">&ndash;&gt;-->
<!--  &lt;!&ndash;              Auf der Baustelle treffen verschiedene analoge und digitale Prozesse aufeinander. Mittels Data Lake&ndash;&gt;-->
<!--  &lt;!&ndash;              Technologie führt die von triarc-labs entwickelte «myWalo» Applikation sämtliche Prozesse in Echtzeit&ndash;&gt;-->
<!--  &lt;!&ndash;              zusammen und erlaubt die Digitalisierung der Baustellen, von der Schaufel bis zum Baukran.&ndash;&gt;-->
<!--  &lt;!&ndash;            </p>&ndash;&gt;-->
<!--  &lt;!&ndash;          </div>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->
<!--  &lt;!&ndash;        <div class="mt-4 pt-4">&ndash;&gt;-->
<!--  &lt;!&ndash;          <blockquote>&ndash;&gt;-->
<!--  &lt;!&ndash;            <footer class="">&ndash;&gt;-->
<!--  &lt;!&ndash;              <div class="flex items-center space-x-3">&ndash;&gt;-->
<!--  &lt;!&ndash;                <div class="flex-shrink-0">&ndash;&gt;-->
<!--  &lt;!&ndash;                  <img class="h-10 w-10" src="img/avatars/serge.png" alt="" />&ndash;&gt;-->
<!--  &lt;!&ndash;                </div>&ndash;&gt;-->
<!--  &lt;!&ndash;                <div>&ndash;&gt;-->
<!--  &lt;!&ndash;                  <div class="text-base font-medium text-gray-700">Serge Müller</div>&ndash;&gt;-->
<!--  &lt;!&ndash;                  <div class="font-light text-gray-500">Software Architect</div>&ndash;&gt;-->
<!--  &lt;!&ndash;                </div>&ndash;&gt;-->
<!--  &lt;!&ndash;              </div>&ndash;&gt;-->
<!--  &lt;!&ndash;            </footer>&ndash;&gt;-->
<!--  &lt;!&ndash;          </blockquote>&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->
<!--  &lt;!&ndash;      </div>&ndash;&gt;-->
<!--  &lt;!&ndash;      <div class="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">&ndash;&gt;-->
<!--  &lt;!&ndash;        <div class="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">&ndash;&gt;-->
<!--  &lt;!&ndash;          <img&ndash;&gt;-->
<!--  &lt;!&ndash;            class="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"&ndash;&gt;-->
<!--  &lt;!&ndash;            src="img/references/walo-app.png"&ndash;&gt;-->
<!--  &lt;!&ndash;            alt="mywalo"&ndash;&gt;-->
<!--  &lt;!&ndash;          />&ndash;&gt;-->
<!--  &lt;!&ndash;        </div>&ndash;&gt;-->
<!--  &lt;!&ndash;      </div>&ndash;&gt;-->
<!--  &lt;!&ndash;    </div>&ndash;&gt;-->
<!--  &lt;!&ndash;  </div>&ndash;&gt;-->
<!--</div>-->
