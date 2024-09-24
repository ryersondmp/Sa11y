
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 4.0.0
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var fi = {
  // Finish
  strings: {
    LANG_CODE: 'fi',
    MAIN_TOGGLE_LABEL: 'Tarkista saavutettavuus',
    CONTAINER_LABEL: 'Esteettömyyden tarkistusohjelma',
    ERROR: 'Virhe',
    ERRORS: 'Virheet',
    WARNING: 'Varoitus',
    WARNINGS: 'Varoitukset',
    GOOD: 'Hyvä',
    ON: 'Päällä',
    OFF: 'Pois päältä',
    ALERT_TEXT: 'Hälytys',
    ALERT_CLOSE: 'Sulje',
    OUTLINE: 'Sivuluettelo',
    TITLE: 'Otsikko',
    ALT: 'ALT',
    IMAGES: 'Kuvat',
    EDIT: 'Muokkaa',
    NO_IMAGES: 'Ei kuvia löytynyt.',
    DECORATIVE: 'Koristeellinen',
    MISSING: 'Puuttuva',
    PAGE_ISSUES: 'Sivukysymykset',
    SETTINGS: 'Asetukset',
    DEVELOPER_CHECKS: 'Kehittäjä tarkistukset',
    DEVELOPER_DESC: 'Tarkistaa ongelmat, jotka saattavat vaatia ohjelmointitaitoja korjaamiseen.',
    DARK_MODE: 'Tumma tila',
    SHORTCUT_SR: 'Siirry aiheeseen. Pikanäppäin: S',
    SKIP_TO_ISSUE: 'Siirry asiaan',
    NEW_TAB: 'Avaa uuden välilehden',
    LINKED: 'Liitetty',
    PANEL_HEADING: 'Esteettömyyden tarkistus',
    NO_ERRORS_FOUND: 'Virheitä ei löytynyt.',
    WARNINGS_FOUND: 'varoituksia löytyi.',
    TOTAL_FOUND: 'löydettyjen ongelmien kokonaismäärä.',
    NOT_VISIBLE: 'Kohde, jota yrität tarkastella, ei ole näkyvissä; se voi olla piilossa tai harmonikka- tai välilehtikomponentin sisällä. Tässä on esikatselu:',
    MISSING_ROOT: 'Koko sivun saavutettavuus tarkistettiin, koska kohdealuetta <code>%(root)</code> ei ole olemassa.',
    HEADING_NOT_VISIBLE: 'Otsikko ei ole näkyvissä; se voi olla piilotettu tai harmonikka- tai välilehtiosan sisällä.',
    SKIP_TO_PAGE_ISSUES: 'Siirry sivulle Issues',
    CONSOLE_ERROR: 'Anteeksi, mutta tämän sivun saavutettavuuden tarkistuksessa on ongelma. Voisitko <a href="%(link)">ilmoittaa siitä tällä lomakkeella</a> tai <a href="%(link)">GitHubissa</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Näytä %(dismissCount) ohitetut',
    DISMISS: 'Ohita',
    DISMISS_ALL: 'Ohita kaikki',
    DISMISSED: 'Ohitettu',
    DISMISS_REMINDER: 'Huomaa, että varoitukset on vain <strong>väliaikaisesti</strong> ohitettu. Selaushistorian ja evästeiden poistaminen palauttaa kaikki aikaisemmin ohitetut varoitukset kaikilla sivuilla.',

    // Export
    DATE: 'Päivämäärä',
    PAGE_TITLE: 'Sivun otsikko',
    RESULTS: 'Tulokset',
    EXPORT_RESULTS: 'Vie tulokset',
    GENERATED: 'Tulokset luotu %(tool)-työkalulla.',
    PREVIEW: 'Esikatselu',
    ELEMENT: 'Elementti',
    PATH: 'Polku',

    // Colour filters
    COLOUR_FILTER: 'Värisuodatin',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monokromaattisuus',
    COLOUR_FILTER_MESSAGE: 'Tarkista, onko elementtejä vaikea havaita tai erottaa muista väreistä.',
    RED_EYE: 'Punainen sokea.',
    GREEN_EYE: 'Vihreä sokea.',
    BLUE_EYE: 'Sininen sokea.',
    MONO_EYE: 'Punainen, sininen ja vihreä sokea.',
    COLOUR_FILTER_HIGH_CONTRAST: 'Värisuodattimet eivät toimi korkean kontrastin tilassa.',

    // Alternative text stop words
    SUS_ALT_STOPWORDS: [
      'kuva',
      'graafinen',
      'image',
      'photo',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'kuva',
      'koristeellinen',
      'paikanhaltija',
      'mielikuvamerkki',
      'välikappale',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'klikkaa',
      'klikkaa tästä',
      'klikkaa tästä lisää',
      'klikkaa tästä saadaksesi lisätietoja',
      'klikkaamalla tästä',
      'tsekkaa',
      'yksityiskohtaisesti täällä',
      'lataa',
      'lataa tästä',
      'selvittää',
      'lisätietoja',
      'lomake',
      'täällä',
      'info',
      'tiedot',
      'linkki',
      'oppia',
      'lisää',
      'sivu',
      'paperi',
      'lue lisää',
      'lue',
      'lue tämä',
      'tämä',
      'tämä sivu',
      'tämä sivusto',
      'katso',
      'katso meidän',
      'verkkosivusto',
    ],
    WARNING_ALT_STOPWORDS: [
      'klikkaa tästä',
    ],
    NEW_WINDOW_PHRASES: [
      'ulkoinen',
      'uusi välilehti',
      'uusi ikkuna',
      'pop-up',
      'ponnahtaa esiin',
    ],
    FILE_TYPE_PHRASES: ['asiakirja', 'taulukkolaskenta', 'laskentataulukko', 'pakattu tiedosto', 'arkistoitu tiedosto', 'laskentataulukko', 'powerpoint', 'esitys', 'asennus', 'video', 'audio', 'pdf'],

    // Readability
    READABILITY: 'Luettavuus',
    AVG_SENTENCE: 'Keskimääräiset sanat per lause:',
    COMPLEX_WORDS: 'Monimutkaiset sanat:',
    TOTAL_WORDS: 'Sanat:',
    VERY_DIFFICULT: 'Erittäin vaikeaa',
    DIFFICULT: 'Vaikea',
    FAIRLY_DIFFICULT: 'Melko vaikeaa',
    READABILITY_NO_CONTENT: 'Luettavuuspistemäärää ei pystytä laskemaan. Kappaletta <code>&lt;p&gt;</code> tai luettelon sisältöä <code>&lt;li&gt;</code> ei löytynyt.',
    READABILITY_NOT_ENOUGH: 'Ei tarpeeksi sisältöä luettavuuspisteiden laskemiseksi.',

    // Headings
    HEADING_SKIPPED_LEVEL: 'Käytetään muuta kuin peräkkäistä otsikkotasoa. Otsikot eivät saisi koskaan ohittaa tasoja tai siirtyä <strong>otsikko %(prevLevel)</strong>:stä <strong {C}>otsikko %(level)</strong>:iin.',
    HEADING_EMPTY: 'Tyhjä otsikko löytyi! Korjaa ongelma poistamalla tämä rivi tai muuttamalla sen muoto <strong {C}>otsikko %(level)</strong> muotoon <strong>Normaali</strong> tai <strong>Paragraph</strong>.',
    HEADING_LONG: 'Otsikko on pitkä! Otsikoita tulisi käyttää sisällön järjestämiseen ja rakenteen välittämiseen. Niiden tulisi olla lyhyitä, informatiivisia ja ainutlaatuisia. Pidä otsikot alle 160 merkin pituisina (enintään lause). <hr> <strong {B}>%(HEADING_LENGTH) Merkkiä</strong>',
    HEADING_FIRST: 'Sivun ensimmäisen otsikon tulisi yleensä olla Otsikko 1 tai Otsikko 2. Otsikon 1 tulisi olla pääsisältöosion alku, ja se on pääotsikko, joka kuvaa sivun yleistä tarkoitusta. Lue lisää <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Otsikon rakenteesta.</a>',
    HEADING_MISSING_ONE: 'Puuttuva otsikko 1. Otsikon 1 pitäisi olla pääsisältöalueen alku, ja se on pääotsikko, joka kuvaa sivun yleistä tarkoitusta. Lue lisää <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Ohjeiden rakenne.</a>.',
    HEADING_EMPTY_WITH_IMAGE: 'Otsikossa ei ole tekstiä, mutta se sisältää kuvan. Jos tämä ei ole otsikko, muuta sen muotoa <strong {C}>Otsikko %(level)</strong> muotoon <strong>Normaali</strong> tai <strong>Kappale</strong>. Muussa tapauksessa, lisää alt-teksti kuvaan, jos se ei ole koristeellinen.',
    PANEL_HEADING_MISSING_ONE: 'Otsikko 1 puuttuu!',
    PANEL_NO_HEADINGS: 'Otsikoita ei löytynyt.',

    // Links
    LINK_EMPTY: 'Poista tyhjät linkit ilman tekstiä.',
    LINK_EMPTY_LABELLEDBY: 'Linkillä on arvo <code>aria-labelledby</code>, joka on tyhjä tai ei vastaa toisen sivun elementin <code>id</code>-ominaisuuden arvoa.',
    LINK_EMPTY_NO_LABEL: 'Linkissä ei ole erottuvaa tekstiä, joka näkyy ruudunlukijoille ja muille apuvälineille. Korjaus: <ul><li>Lisää tiivis teksti, joka kuvaa, minne linkki vie.</li><li>Jos kyseessä on <a href="https://a11y-101.com/development/icons-and-links">kuvakkeellinen linkki tai SVG,</a> siitä puuttuu todennäköisesti kuvaava merkintä.</li><li>Jos luulet, että linkki on kopiointi/liitä-virheestä johtuva virhe, harkitse sen poistamista.</li></ul>',
    LINK_STOPWORD: 'Linkkiteksti ei ehkä ole riittävän kuvaava asiayhteydestään: <strong {C}>%(ERROR)</strong> <hr> <strong>Vinkki!</strong> Linkkitekstin tulisi aina olla selkeä, yksilöllinen ja merkityksellinen. Vältä yleisiä sanoja, kuten &quot;klikkaa tästä&quot; tai &quot;opi lisää&quot;;',
    LINK_BEST_PRACTICES: 'Harkitse linkkitekstin korvaamista: <strong {C}>%(ERROR)</strong> <hr> <ul><li>&quot;Klikkaa tästä&quot; painottaa hiiren mekaniikkaa, vaikka monet ihmiset eivät käytä hiirtä tai saattavat tarkastella verkkosivustoa mobiililaitteella. Harkitse eri verbin käyttöä, joka liittyy tehtävään.</li><li>Vältä HTML-symbolien käyttöä toimintakutsuina, elleivät ne ole piilossa avustavia teknologioita varten.</li></ul>',
    LINK_URL: 'Linkkitekstinä käytetyt pidemmät, vaikeaselkoiset URL-osoitteet saattavat olla vaikeasti ymmärrettäviä, kun niitä käytetään apuvälineillä. Useimmissa tapauksissa on parempi käyttää URL-osoitteen sijasta ihmisen luettavissa olevaa tekstiä. Lyhyet URL-osoitteet (kuten sivuston etusivu) ovat ok. <hr> <strong>Vinkki!</strong> Linkkitekstin tulisi aina olla selkeä, yksilöllinen ja merkityksellinen, jotta se voitaisiin ymmärtää asiayhteydestä irrotettuna.',
    LINK_DOI: 'Verkkosivujen tai vain verkossa olevien resurssien osalta <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">APA:n tyyliopas</a> suosittelee kuvailevien linkkien käyttämistä kietomalla teoksen URL-osoite tai DOI-osoite sen otsikon ympärille. Linkkitekstinä käytetyt pidemmät, vaikeaselkoiset URL-osoitteet saattavat olla vaikeasti ymmärrettäviä, kun niitä käytetään apuvälineillä.',
    LINK_NEW_TAB: 'Linkki avautuu uuteen välilehteen tai ikkunaan ilman varoitusta. Tämä voi olla hämmentävää erityisesti henkilöille, joilla on vaikeuksia visuaalisen sisällön hahmottamisessa. Toiseksi, ei ole aina hyvä käytäntö hallita toisen kokemusta tai tehdä päätöksiä hänen puolestaan. Ilmoita linkkitekstissä, että linkki avautuu uuteen ikkunaan<hr><strong>Vinkki!</strong> Opi parhaat käytännöt: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">Linkkien avaaminen uusissa selainikkunoissa ja välilehdissä.</a>',
    LINK_FILE_EXT: 'Linkki osoittaa PDF-tiedostoon tai ladattavaan tiedostoon (esim. MP3, Zip, Word Doc) ilman varoitusta. Ilmoita tiedostotyyppi linkkitekstissä. Jos kyseessä on suuri tiedosto, harkitse tiedoston koon ilmoittamista. <hr> <strong>Esimerkki:</strong> Toimitusjohtajan raportti (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'Linkillä on sama teksti kuin toisella linkillä, vaikka se osoittaa eri sivulle. Useat linkit, joissa on sama teksti, voivat aiheuttaa sekaannusta ruudunlukuohjelmia käyttäville henkilöille. <strong>Harkitse seuraavan linkin tekemistä kuvaavammaksi, jotta se erottuu paremmin muista linkeistä.</strong> <hr> <strong {B}>Saavutettava nimi</strong> <strong {C}>%(TEXT)</strong>',

    // Images
    MISSING_ALT_LINK_HAS_TEXT: 'Kuvaa käytetään linkkinä ympäröivän tekstin kanssa, vaikka alt-attribuutti pitäisi merkitä koristeelliseksi tai nollaksi.',
    MISSING_ALT_LINK: 'Kuvaa käytetään linkkinä, mutta siitä puuttuu alt-teksti! Varmista, että alt-teksti kuvaa, minne linkki vie.',
    MISSING_ALT: 'Puuttuva alt-teksti! Jos kuva välittää tarinan, tunnelman tai tärkeää tietoa - muista kuvata kuva.',
    LINK_ALT_FILE_EXT: 'Alt-tekstissä oleva tiedostopääte löydetty. Varmista, että alt-teksti kuvaa linkin määränpäätä, ei kuvan kirjaimellista kuvausta. Poista: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: 'Linkitetyn kuvan sisältämä ei-kuvaava tai sijoitettu alt-teksti löydetty. Varmista, että alt-teksti kuvaa linkin määränpäätä, ei kuvan kirjaimellista kuvausta. Korvaa seuraava alt-teksti. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>.',
    LINK_SUS_ALT: 'Avustavat teknologiat osoittavat jo, että kyseessä on kuva, joten &quot;<strong {C}>%(ERROR)</strong>&quot; voi olla tarpeeton. Varmista, että alt-teksti kuvaa linkin määränpäätä, ei kuvan kirjaimellista kuvausta. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: 'Alt-tekstissä oleva tiedostopääte löydetty. Jos kuva välittää tarinan, tunnelman tai tärkeän tiedon - muista kuvata kuva. Poista: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: 'Ei-kuvaava tai paikannettu alt-teksti löydetty. Korvaa seuraava alt-teksti jollain merkityksellisemmällä. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    SUS_ALT: 'Avustavat teknologiat osoittavat jo, että kyseessä on kuva, joten &quot;<strong {C}>%(ERROR)</strong>&quot; voi olla tarpeeton. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_NO_ALT_TEXT: 'Linkissä oleva kuva on merkitty koristeeksi, eikä linkkitekstiä ole. Lisää kuvaan alt-teksti, joka kuvaa linkin kohdetta.',
    LINK_IMAGE_TEXT: 'Kuva on merkitty koristeelliseksi, vaikka linkki käyttää ympäröivää tekstiä kuvaavana merkintänä.',
    LINK_IMAGE_LONG_ALT: 'Linkitetyn kuvan Alt-tekstin kuvaus on <strong>liian pitkä</strong>. Linkitettyjen kuvien alt-tekstin tulisi kuvata, minne linkki vie, ei kirjaimellista kuvausta kuvasta. <strong>Harkitse sen sivun otsikon käyttämistä alt-tekstinä, johon linkki johtaa.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Merkkiä</strong> <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: 'Kuvalinkki sisältää alt-tekstin. <strong>Kuvaako alt-teksti, minne linkki vie?</strong> Harkitse linkin sisältämän sivun otsikon käyttämistä alt-tekstinä. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: 'Kuvalinkki sisältää <strong> sekä alt-tekstin että ympäröivän linkkitekstin.</strong> Jos kuva on koristeellinen ja sitä käytetään toiminnallisena linkkinä toiselle sivulle, harkitse kuvan merkitsemistä koristeelliseksi tai nollaksi - ympäröivän linkkitekstin pitäisi riittää. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Saavutettava nimi</strong> {L} <strong {C}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'Kuva on merkitty <strong>koristeelliseksi</strong> ja avustava teknologia jättää sen huomiotta. <hr> Vaikka <strong>kuvateksti</strong> on annettu, kuvassa pitäisi useimmissa tapauksissa olla myös alt-teksti. <ul><li>Alttitekstin tulisi antaa tiivis kuvaus siitä, mitä kuvassa on.</li><li>Kuvatekstin tulisi yleensä tarjota konteksti, joka liittää kuvan takaisin ympäröivään sisältöön, tai kiinnittää huomiota tiettyyn tietoon.</li></ul> Lisää lisää: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Älä käytä täsmälleen samoja sanoja sekä alt- että kuvatekstissä. Ruudunlukuohjelmat ilmoittavat tiedon kahdesti. <ul><li> Alt-tekstin tulisi antaa tiivis kuvaus siitä, mitä kuvassa on.</li><li>Tekstikuvan kuvatekstin tulisi yleensä tarjota konteksti, joka liittää kuvan ympäröivään sisältöön, tai kiinnittää huomiota tiettyyn tietoon.</li></ul> Lue lisää: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'Kuva on merkitty <strong>koristeelliseksi</strong> ja avustava teknologia jättää sen huomiotta. Jos kuva välittää tarinaa, tunnelmaa tai tärkeää tietoa - muista lisätä alt-teksti.',
    IMAGE_DECORATIVE_CAROUSEL: 'Kuva on merkitty koristeelliseksi, mutta kaikkien karusellissa tai galleriassa olevien kuvien tulisi sisältää kuvaileva vaihtoehtoinen teksti, jotta kaikille taataan tasapuolinen kokemus.',
    IMAGE_ALT_TOO_LONG: 'Alt-tekstin kuvaus on <strong>liian pitkä</strong>. Alt-tekstin tulisi olla tiivis, mutta merkityksellinen kuten <em>tweet</em> (noin 100 merkkiä). Jos kyseessä on monimutkainen kuva tai graafi, harkitse kuvan pitkän kuvauksen sijoittamista alla olevaan tekstiin tai harmonikkaosaan. <hr> {ALT} <strong {B}>%(altLength) Merkkiä</strong> <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',

    // Form labels
    LABELS_MISSING_IMAGE_INPUT: 'Kuvapainikkeesta puuttuu alt-teksti. Lisää alt-tekstiä, jotta nimi on helposti saatavilla. Esimerkiksi: <em>Haku</em> tai <em>Lähetä</em>.',
    LABELS_INPUT_RESET: 'Nollauspainikkeita <strong>ei</strong> tulisi käyttää, ellei niitä erityisesti tarvita, koska ne on helppo aktivoida vahingossa. <hr> <strong>Vinkki!</strong> Lue, miksi <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Reset- ja Cancel-painikkeet aiheuttavat käytettävyysongelmia.</a>',
    LABELS_ARIA_LABEL_INPUT: 'Syötteellä on helppokäyttöinen nimi, mutta varmista, että myös merkintä on näkyvissä. <hr> <strong {B}>Saavutettava nimi</strong> <strong {C}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: 'Tähän syötteeseen ei liity nimikettä. Lisää <code>for</code>-attribuutti labeliin, joka vastaa tämän syötteen <code>id</code>:tä. <hr> Tämän syötteen tunnus on: <strong>id=&#34;%(id)&#34;</strong>.',
    LABELS_MISSING_LABEL: 'Tähän syötteeseen ei liity nimikettä. Lisää tälle syötteelle <code>id</code> ja lisää labeliin vastaava <code>for</code>-attribuutti.',

    // Embedded content
    EMBED_VIDEO: 'Varmista, että <strong>kaikissa videoissa on kuvatekstit.</strong> Kaiken ääni- ja videosisällön tekstittäminen on pakollinen A-tason vaatimus. Kuvatekstit tukevat kuuroja ja huonokuuloisia.',
    EMBED_AUDIO: 'Varmista, että kaikista podcasteista toimitetaan <strong>käännös.</strong> Äänisisällön käännösten toimittaminen on pakollinen tason A vaatimus. Jäljennökset tukevat kuuroja ja huonokuuloisia, mutta niistä on hyötyä kaikille. Harkitse transkriptin sijoittamista alapuolelle tai harmonikkapaneeliin.',
    EMBED_DATA_VIZ: 'Tämänkaltaiset tiedon visualisoinnin widgetit ovat usein ongelmallisia henkilöille, jotka käyttävät näppäimistöä tai ruudunlukijaa navigointiin, ja ne voivat aiheuttaa huomattavia vaikeuksia henkilöille, joilla on heikkonäköisyys tai värisokeus. On suositeltavaa tarjota samat tiedot vaihtoehtoisessa (teksti- tai taulukkomuodossa) widgetin alapuolella. <hr> Lisätietoja <a href="https://www.w3.org/WAI/tutorials/images/complex">monimutkaiset kuvat.</a>',
    EMBED_MISSING_TITLE: 'Sulautettu sisältö edellyttää sen sisältöä kuvaavaa nimeä. Anna <code>iframe</code>-elementille yksilöllinen <code>title</code>- tai <code>aria-label</code>-attribuutti. Lisätietoja <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrameista.</a>',
    EMBED_GENERAL: 'Upotetun sisällön tarkistaminen ei onnistu. Varmista, että kuvissa on alt-teksti, videoissa on kuvateksti, tekstissä on riittävä kontrasti ja vuorovaikutteiset komponentit ovat <a href="https://webaim.org/techniques/keyboard/">näppäimistöllä käytettävissä.</a>.',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> jossa ei ole fokusointikelpoisia elementtejä, ei pitäisi olla <code>tabindex="-1"</code>. Upotettu sisältö ei ole näppäimistöllä saavutettavissa.',

    // QA
    QA_BAD_LINK: 'Huono linkki löytyi. Linkki näyttää osoittavan kehitysympäristöön. <hr> Tämä linkki osoittaa: <br> <strong {C}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Rikkinäinen samalla sivulla oleva linkki. Linkin kohde ei vastaa mitään tämän sivun elementtiä.',
    QA_STRONG_ITALICS: 'Lihavointi- ja kursivointitunnisteilla on semanttinen merkitys, eikä niitä tulisi <strong>ei</strong> käyttää kokonaisten kappaleiden korostamiseen. Lihavoitua tekstiä tulisi käyttää sanan tai lauseen voimakkaaseen <strong>korostamiseen</strong>. Kursivointia tulisi käyttää oikeiden nimien (esim. kirjan ja artikkelin otsikot), vierasperäisten sanojen ja lainausmerkkien korostamiseen. Pitkät lainaukset olisi muotoiltava blokkilainauksiksi.',
    QA_PDF: 'PDF-tiedostojen saavutettavuuden tarkistaminen ei onnistu. PDF-tiedostoja pidetään verkkosisältönä, ja ne on myös saatettava saavutettaviksi. PDF-tiedostoissa on usein ongelmia ruudunlukuohjelmia käyttäville henkilöille (puuttuvat rakennetunnisteet tai lomakekenttien merkinnät) ja heikkonäköisille (teksti ei virtaa uudelleen, kun sitä suurennetaan). <ul><li>Jos kyseessä on lomake, harkitse esteettömän HTML-lomakkeen käyttämistä vaihtoehtona.</li><li>Jos kyseessä on asiakirja, harkitse sen muuntamista verkkosivuksi.</li></ul>Muussa tapauksessa tarkista <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF:n esteettömyys Acrobat DC:ssä.</a>',
    QA_DOCUMENT: 'Asiakirjan saavutettavuuden tarkistaminen ei onnistu. Linkitettyjä asiakirjoja pidetään verkkosisältönä, ja ne on myös saatettava saavutettaviksi. Tarkista asiakirja manuaalisesti. <ul><li>Muuta <a href="https://support.google.com/docs/answer/6199477?hl=fi">Google Workspace -asiakirjasi tai -esityksesi saavutettavammaksi.</a></li><li>Muuta <a href="https://support.microsoft.com/fi/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Office-asiakirjasi saavutettavammaksi.</a></li></ul>',
    QA_BLOCKQUOTE: 'Onko tämä otsikko? <strong {C}>%(TEXT)</strong> <hr> Lainausmerkkejä tulisi käyttää vain lainausmerkeissä. Jos tämän on tarkoitus olla otsikko, vaihda tämä blockquote semanttiseen otsikkoon (esim. otsikko 2 tai otsikko 3).',
    QA_FAKE_HEADING: 'Onko tämä otsikko? <strong {C}>%(TEXT)</strong> <hr> Lihavoitu tai suuri tekstirivi saattaa näyttää otsikolta, mutta ruudunlukuohjelmaa käyttävä ei voi todeta sitä tärkeäksi tai siirtyä sen sisältöön. Lihavoidun tai ison tekstin ei pitäisi koskaan korvata semanttisia otsikoita (otsikot 2-6).',
    QA_FAKE_LIST: 'Yritätkö luoda luettelon? Mahdollinen luettelokohde löytyi: <strong {C}>%(firstPrefix)</strong> <hr> Varmista, että käytät semanttisia luetteloita käyttämällä sen sijaan luettelopainikkeita tai numeromuotoilupainikkeita. Kun käytät semanttista luetteloa, avustavat teknologiat pystyvät välittämään tietoja, kuten kohteiden kokonaismäärän ja kunkin kohteen suhteellisen sijainnin luettelossa. Lisätietoja <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">semanttisista luetteloista.</a>.',
    QA_UPPERCASE: 'Löytyi kaikki suuraakkoset. Jotkin ruudunlukuohjelmat saattavat tulkita isokirjaimellisen tekstin lyhenteeksi ja lukea jokaisen kirjaimen erikseen. Lisäksi joidenkin ihmisten mielestä isokirjaimet ovat vaikeampia lukea, ja ne voivat antaa vaikutelman huutamisesta.',
    QA_UNDERLINE: 'Alleviivattu teksti voidaan sekoittaa linkkeihin. Harkitse eri tyylin, kuten <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> tai <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code> käyttöä.',
    QA_SUBSCRIPT: 'Ala- ja yläindeksin muotoiluvaihtoehtoja tulisi käyttää vain tekstin sijainnin muuttamiseen typografisten konventioiden tai standardien vuoksi. Niitä <strong>ei</strong> pitäisi käyttää pelkästään esitystarkoituksiin tai ulkoasuun. Kokonaisten lauseiden muotoilu aiheuttaa luettavuusongelmia. Sopivia käyttötapauksia olisivat esimerkiksi eksponenttien, järjestyslukujen, kuten 4<sup>th</sup> neljännen sijasta, ja kemiallisten kaavojen (esim. H<sub>2</sub>O) näyttäminen.',
    QA_NESTED_COMPONENTS: 'Vältä interaktiivisten asettelukomponenttien upottamista, kuten akordeonien sijoittamista välilehtiin tai välilehtien sijoittamista akordeoneihin. Tämä voi monimutkaistaa navigointia, lisätä kognitiivista kuormitusta ja johtaa siihen, että ihmiset ohittavat sisällön.',
    QA_JUSTIFY: 'Vältä tasattua tekstiä, joka tasataan sekä vasemmalle että oikealle reunalle. Tämä voi olla joidenkin ihmisten vaikea lukea, koska sanojen välissä on epätasaisia välejä. Käytä vasemmalle tasattua tekstiä paremman luettavuuden takaamiseksi.',
    QA_SMALL_TEXT: 'Pientä tekstiä on vaikeampi lukea, erityisesti heikkonäköisille. Varmistaaksesi paremman luettavuuden, vältä käyttämästä oletusarvoa pienempiä kirjasinkokoja.',

    // Shared
    ACC_NAME: '<strong {B}>Saavutettava nimi</strong> %(TEXT)',
    ACC_NAME_TIP: '<hr> <strong>Vinkki!</strong> "Saavutettava nimi" on lopullinen etiketti, joka viestitään apuvälineitä käyttävien henkilöiden kanssa ja joka lasketaan ARIA:n avulla. Tämä auttaa heitä ymmärtämään linkin tai painikkeen tarkoituksen.',
    HIDDEN_FOCUSABLE: 'Linkillä tai painikkeella on <code>aria-hidden=&quot;true&quot;</code>, mutta se on edelleen näppäimistöllä käytettävissä. Jos aiot piilottaa kaksoislinkin tai -painikkeen, lisää myös <code>tabindex=&quot;-1&quot;</code>. Muuten <code>aria-hidden=&quot;true&quot;</code> -määritettä ei tulisi käyttää elementeissä, jotka voivat vastaanottaa fokuksen. <hr> Lue lisää <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">aria-hidden-attribuutista.</a>',

    // Developer
    DUPLICATE_ID: 'Löytyi <strong>kaksoistunniste</strong>. Kaksoistunnusvirheiden tiedetään aiheuttavan ongelmia avustaville teknologioille, kun ne yrittävät toimia vuorovaikutuksessa sisällön kanssa. <hr> Poista tai vaihda seuraava ID: <strong {C}>%(id)</strong>',
    UNCONTAINED_LI: 'Kaikki <code>&lt;li&gt;</code> luetteloelementit on sijoitettava <code>&lt;ul&gt;</code> järjestämättömien tai <code>&lt;ol&gt;</code> järjestettyjen elementtien sisään. Tämä rakenne auttaa ruudunlukuohjelmia ilmoittamaan luettelon ja sen kohteet tarkasti.',
    TABINDEX_ATTR: 'Elementillä ei tulisi olla <code>tabindex</code>-attribuuttia, joka on suurempi kuin 0.',

    // Meta checks
    META_LANG: 'Sivun kieltä ei ole ilmoitettu! Ole hyvä ja <a href="https://www.w3.org/International/questions/qa-html-language-declarations">ilmoita kieli HTML-tagissa.</a>',
    META_TITLE: 'Sivun otsikko puuttuu! Anna <a href="https://developer.mozilla.org/fi/docs/Web/HTML/Element/title">sivun otsikko.</a>.',
    META_SCALABLE: 'Poista parametri <code>user-scalable="no"</code> <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tagista</a> zoomauksen mahdollistamiseksi.',
    META_MAX: 'Varmista, että <code>maximum-scale</code>-parametri <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tagissa</a> ei ole alle 2.',
    META_REFRESH: 'Sivua ei tule päivittää automaattisesti meta-tagin avulla.',

    // Buttons
    BTN_EMPTY: 'Painikkeesta puuttuu saavutettava nimi, joka kuvaisi sen tarkoitusta.',
    BTN_EMPTY_LABELLEDBY: 'Painikkeessa on <code>aria-labelledby</code>-arvo, joka on tyhjä tai ei vastaa toisen elementin <code>id</code>-arvoa sivulla.',
    BTN: 'painike',
    BTN_TIP: 'Opi, kuinka tehdä <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">saavutettava painike.</a>',
    BTN_ROLE_IN_NAME: 'Älä sisällytä sanaa "painike" painikkeen nimeen. Ruudunlukijat ilmoittavat jo elementin roolin sen nimen lisäksi.',
    LABEL_IN_NAME: 'Tämän elementin näkyvä teksti näyttää olevan erilainen kuin saavutettava nimi, mikä saattaa aiheuttaa hämmennystä avustavien teknologioiden käyttäjille. Tarkista: <hr> <strong {B}>Saavutettava nimi</strong> <strong {C}>%(TEXT)</strong>',

    // Tables
    TABLES_MISSING_HEADINGS: 'Puuttuvat taulukkootsikot! Esteettömät taulukot tarvitsevat HTML-merkintää, joka osoittaa otsikkosolut ja datasolut, jotka määrittelevät niiden välisen suhteen. Tämä tieto antaa kontekstin ihmisille, jotka käyttävät apuvälineteknologiaa. Taulukoita tulisi käyttää vain taulukkomuotoiseen tietoon. <hr> Lisätietoja <a href="https://www.w3.org/WAI/tutorials/tables/">saavutettavista taulukoista.</a>.',
    TABLES_SEMANTIC_HEADING: 'Semanttisia otsikoita, kuten Heading 2 tai Heading 3, tulisi käyttää vain sisällön osioissa; <strong>ei</strong> HTML-taulukoissa. Ilmoita taulukkootsikot sen sijaan <code>&lt;th&gt;</code>-elementillä. <hr> Lisätietoja <a href="https://www.w3.org/WAI/tutorials/tables/">saavutettavista taulukoista.</a>',
    TABLES_EMPTY_HEADING: 'Tyhjä taulukkootsikko löytyi! Taulukkootsikoiden ei pitäisi <strong>ei koskaan</strong> olla tyhjiä. On tärkeää nimetä rivi- ja/tai sarakeotsikot, jotta niiden välinen suhde välittyy. Nämä tiedot tarjoavat kontekstin ihmisille, jotka käyttävät apuvälineteknologiaa. Muista, että taulukoita tulisi käyttää vain taulukkomuotoisiin tietoihin. <hr> Lisätietoja <a href="https://www.w3.org/WAI/tutorials/tables/">saavutettavista taulukoista.</a>',

    // Contrast
    CONTRAST_ERROR: 'Tässä tekstissä ei ole riittävästi kontrastia taustaan nähden. Kontrastisuhteen tulisi olla vähintään 4,5:1 normaalille tekstille ja 3:1 suurelle tekstille. <hr> <strong {B}>Kontrastisuhde</strong> <strong {B}>%(RATIO)</strong> <strong {C}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'Tämän tekstin kontrasti on tuntematon, ja se on tarkistettava manuaalisesti. Varmista, että tekstin ja taustan värit ovat voimakkaan kontrastiset. Kontrastisuhteen tulisi olla vähintään 4,5:1 normaalissa tekstissä ja 3:1 suuressa tekstissä. <hr> Tarkista: <strong {C}>%(TEXT)</strong>',
    CONTRAST_INPUT: 'Tekstin kontrasti taustaan nähden ei ole riittävä. Kontrastisuhteen tulisi olla vähintään 4,5:1 normaalille tekstille ja 3:1 suurelle tekstille. <hr> <strong {B}>Kontrastisuhde</strong> <strong {B}>%(RATIO)</strong>',
  },
};

export { fi as default };
