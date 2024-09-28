
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
var ro = {
  // Romanian
  strings: {
    LANG_CODE: 'ro',
    MAIN_TOGGLE_LABEL: 'Verificați accesibilitatea',
    CONTAINER_LABEL: 'Verificator de accesibilitate',
    ERROR: 'Eroare',
    ERRORS: 'Erori',
    WARNING: 'Avertisment',
    WARNINGS: 'Avertismente',
    GOOD: 'Bun',
    ON: 'Pornit',
    OFF: 'Oprit',
    ALERT_TEXT: 'Alertă',
    ALERT_CLOSE: 'Închideți',
    OUTLINE: 'Schiță',
    TITLE: 'Titlu',
    ALT: 'ALT',
    IMAGES: 'Imagini',
    EDIT: 'Editare',
    NO_IMAGES: 'Nu s-au găsit imagini.',
    DECORATIVE: 'Decorativ',
    MISSING: 'Lipsă',
    PAGE_ISSUES: 'Probleme de pagină',
    SETTINGS: 'Setări',
    DEVELOPER_CHECKS: 'Verificări ale dezvoltatorului',
    DEVELOPER_DESC: 'Verifică problemele care ar putea necesita cunoștințe de programare pentru a fi rezolvate.',
    DARK_MODE: 'Modul întunecat',
    SHORTCUT_SR: 'Treceți la număr. Scurtătură de la tastatură: Alt S',
    SKIP_TO_ISSUE: 'Treci la subiect',
    NEW_TAB: 'Deschide o filă nouă',
    LINKED: 'Legat',
    PANEL_HEADING: 'Verificarea accesibilității',
    NO_ERRORS_FOUND: 'Nu s-au găsit erori.',
    WARNINGS_FOUND: 'avertismente găsite.',
    TOTAL_FOUND: 'numărul total de probleme găsite.',
    NOT_VISIBLE: 'Elementul pe care încercați să îl vizualizați nu este vizibil; este posibil să fie ascuns sau să se afle în interiorul unui acordeon sau al unei componente de tablă. Iată o previzualizare:',
    MISSING_ROOT: 'Pagina completă a fost verificată din punct de vedere al accesibilității deoarece zona țintă <code>%(root)</code> nu există.',
    HEADING_NOT_VISIBLE: 'Rubrica nu este vizibilă; poate fi ascunsă sau în interiorul unui acordeon sau al unei componente de tablă.',
    SKIP_TO_PAGE_ISSUES: 'Treceți la pagina Probleme',
    CONSOLE_ERROR: 'Ne pare rău, dar există o problemă cu verificatorul de accesibilitate de pe această pagină. Puteți vă rog <a href="%(link)">raportați-o prin intermediul acestui formular</a> sau pe <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Arată %(dismissCount) respinse',
    DISMISS: 'Respinge',
    DISMISS_ALL: 'Respinge tot',
    DISMISSED: 'Respins',
    DISMISS_REMINDER: 'Vă rugăm să rețineți că alertele sunt doar <strong>temporar</strong> respinse. Ștergerea istoricului browserului și a cookie-urilor va restabili toate alertele respinse anterior pe toate paginile.',

    // Export
    DATE: 'Data',
    PAGE_TITLE: 'Titlul paginii',
    RESULTS: 'Rezultate',
    EXPORT_RESULTS: 'Exportă rezultatele',
    GENERATED: 'Rezultate generate cu %(tool).',
    PREVIEW: 'Previzualizare',
    ELEMENT: 'Element',
    PATH: 'Cale',

    // Colour filters
    COLOUR_FILTER: 'Filtru de culoare',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monocromie',
    COLOUR_FILTER_MESSAGE: 'Verificați dacă există elemente care sunt greu de perceput sau de distins în raport cu alte culori.',
    RED_EYE: 'Roșu orb.',
    GREEN_EYE: 'Orb verde.',
    BLUE_EYE: 'Orb albastru.',
    MONO_EYE: 'Orbitor roșu, albastru și verde.',
    COLOUR_FILTER_HIGH_CONTRAST: 'Filtrele de culoare nu funcționează în modul de contrast ridicat.',

    // Alternative text stop words
    SUS_ALT_STOPWORDS: [
      'imagine',
      'grafic',
      'imagine',
      'fotografie',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'imagine',
      'fotografie',
      'decorativ',
      'fotografie',
      'placeholder',
      'imagine de tip placeholder',
      'distanțier',
      '.',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'click',
      'click aici',
      'click aici pentru mai multe',
      'click aici pentru a afla mai multe',
      'faceți clic aici pentru a afla mai multe',
      'făcând clic aici',
      'verificați',
      'detaliat aici',
      'detaliate aici',
      'descărcați',
      'descărcați aici',
      'află',
      'aflați mai multe',
      'formular',
      'aici',
      'info',
      'informații',
      'link',
      'învață',
      'aflați mai multe',
      'învățați să',
      'mai mult',
      'pagina',
      'hârtie',
      'citește mai mult',
      'citește',
      'citește asta',
      'acest',
      'această pagină',
      'acest site',
      'vezi',
      'vizualizați pagina noastră',
      'site',
    ],
    WARNING_ALT_STOPWORDS: [
      'click aici',
    ],
    NEW_WINDOW_PHRASES: [
      'extern',
      'fila nouă',
      'fereastră nouă',
      'pop-up',
    ],
    FILE_TYPE_PHRASES: ['document', 'foaie de calcul', 'foaie de calcul', 'fișier comprimat', 'fișier arhivat', 'foaie de lucru', 'powerpoint', 'prezentare', 'instalare', 'video', 'audio', 'pdf'],

    // Readability
    READABILITY: 'Lizibilitate',
    AVG_SENTENCE: 'Numărul mediu de cuvinte pe propoziție:',
    COMPLEX_WORDS: 'Cuvinte complexe:',
    TOTAL_WORDS: 'Cuvinte:',
    VERY_DIFFICULT: 'Foarte dificil',
    DIFFICULT: 'Dificil',
    FAIRLY_DIFFICULT: 'Destul de dificil',
    READABILITY_NO_CONTENT: 'Nu se poate calcula scorul de lizibilitate. Nu s-a găsit niciun paragraf <code>&lt;p&gt;</code> sau conținut de listă <code>&lt;li&gt;</code>.',
    READABILITY_NOT_ENOUGH: 'Nu există suficient conținut pentru a calcula scorul de lizibilitate.',

    // Headings
    HEADING_SKIPPED_LEVEL: 'Nivel de rubrică neconsecutiv utilizat. Titlurile nu trebuie să sară niciodată peste niveluri sau să treacă de la <strong>Antet %(prevLevel)</strong> la <strong {C}>Antet %(level)</strong>.',
    HEADING_EMPTY: 'Rubrica goală găsită! Pentru a remedia problema, ștergeți această linie sau schimbați formatul acesteia din <strong {C}>Antet %(level)</strong> în <strong>Normal</strong> sau <strong>Paragraf</strong>.',
    HEADING_LONG: 'Capul este lung! Titlurile trebuie utilizate pentru a organiza conținutul și a transmite structura. Acestea trebuie să fie scurte, informative și unice. Vă rugăm să păstrați titlurile la mai puțin de 160 de caractere (nu mai mult de o propoziție). <hr> <strong {B}>%(HEADING_LENGTH) Caractere</strong>',
    HEADING_FIRST: 'Primul titlu de pe o pagină trebuie să fie, de obicei, un titlu 1 sau 2. Titlul 1 ar trebui să fie începutul secțiunii principale de conținut și este titlul principal care descrie scopul general al paginii. Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Structura titlurilor.</a>.',
    HEADING_MISSING_ONE: 'Lipsește titlul 1. Titlul 1 ar trebui să fie începutul zonei principale de conținut și este titlul principal care descrie scopul general al paginii. Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Structura titlurilor.</a>.',
    HEADING_EMPTY_WITH_IMAGE: 'Rubrica nu are text, dar conține o imagine. Dacă acesta nu este un titlu, schimbați-i formatul din <strong {C}>Antet %(level)</strong> în <strong>Normal</strong> sau <strong>Paragraf</strong>. În caz contrar, vă rugăm să adăugați text alt la imagine, dacă aceasta nu este decorativă.',
    PANEL_HEADING_MISSING_ONE: 'Lipsește rubrica 1!',
    PANEL_NO_HEADINGS: 'Nu s-au găsit antete.',

    // Links
    LINK_EMPTY: 'Eliminați legăturile goale fără text.',
    LINK_EMPTY_LABELLEDBY: 'Linkul are o valoare pentru <code>aria-labelledby</code> care este goală sau nu se potrivește cu valoarea atributului <code>id</code> al altui element de pe pagină.',
    LINK_EMPTY_NO_LABEL: 'Linkul nu are un text vizibil pentru cititorii de ecran și alte tehnologii de asistență. Pentru a remedia problema: <ul><li>Adaugați un text concis care să descrie unde vă duce linkul.</li><li>Dacă este un <a href="https://a11y-101.com/development/icons-and-links">link cu pictograme sau SVG,</a> este probabil să lipsească o etichetă descriptivă.</li><li>Dacă credeți că acest link este o eroare datorată unui bug de copy/paste, luați în considerare ștergerea lui.</li></ul>',
    LINK_STOPWORD: 'Este posibil ca textul linkului să nu fie suficient de descriptiv în afara contextului: <strong {C}>%(ERROR)</strong> <hr> <strong>Tip!</strong> Textul linkului trebuie să fie întotdeauna clar, unic și semnificativ. Evitați cuvintele comune precum &quot;click aici&quot; sau &quot;află mai multe&quot;',
    LINK_BEST_PRACTICES: 'Luați în considerare înlocuirea textului linkului: <strong {C}>%(ERROR)</strong> <hr> <ul><li>&quot;Click aici&quot; pune accentul pe mecanica mouse-ului, când mulți oameni nu folosesc un mouse sau pot vizualiza acest site web pe un dispozitiv mobil. Luați în considerare utilizarea unui verb diferit care să aibă legătură cu sarcina.</li><li>Evitați utilizarea simbolurilor HTML ca apel la acțiuni, cu excepția cazului în care acestea sunt ascunse pentru tehnologiile de asistență.</li></ul>',
    LINK_URL: 'URL-urile mai lungi și mai puțin inteligibile folosite ca text de link ar putea fi dificil de înțeles atunci când sunt accesate cu ajutorul tehnologiei de asistență. În cele mai multe cazuri, este mai bine să folosiți un text lizibil pentru oameni în locul URL-ului. URL-urile scurte (cum ar fi pagina de pornire a unui site) sunt în regulă. <hr> <strong>Tip!</strong> Textul linkului trebuie să fie întotdeauna clar, unic și semnificativ, astfel încât să poată fi înțeles în afara contextului.',
    LINK_DOI: 'În cazul paginilor web sau al resurselor exclusiv online, <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">ghidul APA Style</a> recomandă utilizarea de linkuri descriptive prin includerea URL-ului sau DOI-ului lucrării în jurul titlului acesteia. URL-urile mai lungi și mai puțin inteligibile folosite ca text de link ar putea fi dificil de înțeles atunci când sunt accesate cu ajutorul tehnologiei de asistență.',
    LINK_NEW_TAB: 'Legătura se deschide într-o fereastră sau într-un tab nou fără avertisment. Acest lucru poate fi dezorientant, în special pentru persoanele care au dificultăți în perceperea conținutului vizual. În al doilea rând, nu este întotdeauna o practică bună să controlați experiența unei persoane sau să luați decizii în locul ei. Indicați că link-ul se deschide într-o fereastră nouă în textul linkului<hr><strong>Tip!</strong> Învățați cele mai bune practici: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">deschiderea linkurilor în ferestre și file noi de browser.</a>.',
    LINK_FILE_EXT: 'Legătura trimite la un fișier PDF sau la un fișier descărcabil (de exemplu, MP3, Zip, Word Doc) fără avertisment. Indicați tipul de fișier în textul linkului. Dacă este un fișier de mari dimensiuni, luați în considerare posibilitatea de a include dimensiunea fișierului. <hr> <strong>Exemplu:</strong> Raport executiv (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'Linkul are un text identic cu cel al unui alt link, deși trimite la o pagină diferită. Mai multe linkuri cu același text pot crea confuzie pentru persoanele care utilizează cititoare de ecran. <strong>Considerați posibilitatea de a face următorul link mai descriptiv pentru a ajuta la distingerea acestuia de alte linkuri.</strong> <hr> <strong {B}>Numele accesibil</strong> <strong {C}>%(TEXT)</strong>',

    // Images
    MISSING_ALT_LINK_HAS_TEXT: 'Imaginea este utilizată ca link cu text în jur, deși atributul alt ar trebui să fie marcat ca fiind decorativ sau nul.',
    MISSING_ALT_LINK: 'Imaginea este folosită ca link, dar lipsește textul alt! Vă rugăm să vă asigurați că textul alternativ descrie unde vă duce link-ul.',
    MISSING_ALT: 'Lipsește alt text! Dacă imaginea transmite o poveste, o stare de spirit sau o informație importantă, nu uitați să descrieți imaginea.',
    LINK_ALT_FILE_EXT: 'Extensia fișierului din textul alternativ găsit. Asigurați-vă că textul alternativ descrie destinația linkului și nu o descriere literală a imaginii. Eliminați: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_PLACEHOLDER_ALT: 'Text alt necorespunzător sau cu caracter de locțiitor într-o imagine legată găsit. Asigurați-vă că textul alternativ descrie destinația linkului și nu o descriere literală a imaginii. Înlocuiți următorul text alt. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>.',
    LINK_SUS_ALT: 'Tehnologiile asistive indică deja că aceasta este o imagine, astfel încât &quot;<strong {C}>%(ERROR)</strong>&quot; poate fi redundant. Asigurați-vă că textul alt descrie destinația linkului, nu o descriere literală a imaginii. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_FILE_EXT: 'Extensia fișierului din textul alternativ găsit. Dacă imaginea transmite o poveste, o stare de spirit sau o informație importantă, nu uitați să descrieți imaginea. Eliminați: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER: 'A fost găsit un text alt nedescriptat sau un text alt de tip placeholder. Înlocuiți următorul text alt cu ceva mai semnificativ. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>.',
    SUS_ALT: 'Tehnologiile asistive indică deja că aceasta este o imagine, astfel încât &quot;<strong {C}>%(ERROR)</strong>&quot; poate fi redundant. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_NO_ALT_TEXT: 'Imaginea din cadrul linkului este marcată ca fiind decorativă și nu există text de link. Vă rugăm să adăugați la imagine un text alt care să descrie destinația linkului.',
    LINK_IMAGE_TEXT: 'Imaginea este marcată ca fiind decorativă, deși link-ul folosește textul din jur ca etichetă descriptivă.',
    LINK_IMAGE_LONG_ALT: 'Descrierea textului Alt de pe o imagine legată este <strong>prea lungă</strong>. Textul alt de pe imaginile cu link ar trebui să descrie unde duce link-ul, nu o descriere literală a imaginii. <strong>Considerați să folosiți titlul paginii către care se face legătura ca text alt.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Caractere</strong> <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT: 'Legătura imaginii conține text alternativ. <strong>Textul alt descrie unde vă duce link-ul?</strong> Luați în considerare utilizarea titlului paginii către care se face legătura ca text alternativ. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT: 'Legătura de imagine conține <strong>atât textul alt cât și textul de legătură din jur.</strong> Dacă această imagine este decorativă și este folosită ca o legătură funcțională către o altă pagină, luați în considerare marcarea imaginii ca fiind decorativă sau nulă - textul de legătură din jur ar trebui să fie suficient. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Numele accesibil</strong> {L} <strong {C}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'Imaginea este marcată ca fiind <strong>decorativă</strong> și va fi ignorată de tehnologia de asistență. <hr> Deși a fost furnizat un <strong>caption</strong>, imaginea ar trebui să aibă, de asemenea, un text alt în majoritatea cazurilor. <ul><li>Textul alt ar trebui să ofere o descriere concisă a ceea ce se află în imagine.</li><li>De obicei, legenda ar trebui să ofere un context pentru a relaționa imaginea cu conținutul din jur sau să atragă atenția asupra unei anumite informații.</li></ul> Aflați mai multe: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Nu folosiți exact aceleași cuvinte atât pentru textul alt, cât și pentru legendă. Cititoarele de ecran vor anunța informațiile de două ori. <ul><li>Textul alt ar trebui să ofere o descriere concisă a ceea ce se află în imagine.</li><li>Legenda ar trebui, de obicei, să ofere un context pentru a relaționa imaginea cu conținutul din jur sau să atragă atenția asupra unei anumite informații.</li></ul> Aflați mai multe: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'Imaginea este marcată ca fiind <strong>decorativă</strong> și va fi ignorată de tehnologia de asistență. Dacă imaginea transmite o poveste, o stare de spirit sau informații importante - asigurați-vă că adăugați text alternativ.',
    IMAGE_DECORATIVE_CAROUSEL: 'Imaginea este marcată ca decorativă, dar toate imaginile dintr-un carusel sau galerie ar trebui să includă un text descriptiv alternativ pentru a asigura o experiență echivalentă pentru toată lumea.',
    IMAGE_ALT_TOO_LONG: 'Descrierea textului Alt este <strong>prea lungă</strong>. Textul Alt ar trebui să fie concis, dar semnificativ, ca un <em>tweet</em> (aproximativ 100 de caractere). Dacă este vorba de o imagine complexă sau de un grafic, luați în considerare posibilitatea de a pune descrierea lungă a imaginii în textul de mai jos sau într-o componentă acordeon. <hr> {ALT} <strong {B}>%(altLength) Caractere</strong> <strong {C}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',

    // Form labels
    LABELS_MISSING_IMAGE_INPUT: 'Butonul de imagine nu are text alternativ. Vă rugăm să adăugați un alt text pentru a oferi un nume accesibil. De exemplu: <em>Cercetare</em> sau <em>Submitere</em>.',
    LABELS_INPUT_RESET: 'Butoanele de resetare nu ar trebui <strong>nu</strong> utilizate decât dacă sunt necesare în mod specific, deoarece sunt ușor de activat din greșeală. <hr> <strong>Tip!</strong> Aflați de ce <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Butoanele Reset și Cancel ridică probleme de utilizare.</a>',
    LABELS_ARIA_LABEL_INPUT: 'Intrarea are un nume accesibil, deși vă rugăm să vă asigurați că există și o etichetă vizibilă. <hr> <strong {B}>Numele accesibil</strong> <strong {C}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE: 'Nu există nicio etichetă asociată cu această intrare. Adăugați un atribut <code>for</code> la eticheta care se potrivește cu <code>id</code> al acestei intrări. <hr> ID-ul pentru această intrare este: <strong>id=&#34;%(id)&#34;</strong>.',
    LABELS_MISSING_LABEL: 'Nu există nicio etichetă asociată cu această intrare. Vă rugăm să adăugați un <code>id</code> la această intrare și să adăugați un atribut <code>for</code> corespunzător etichetei.',

    // Embedded content
    EMBED_VIDEO: 'Vă rugăm să vă asigurați că <strong>toate videoclipurile au subtitrare.</strong> Furnizarea de subtitrări pentru tot conținutul audio și video este o cerință obligatorie de nivel A. Subtitrările vin în sprijinul persoanelor care sunt D/surde sau cu deficiențe de auz.',
    EMBED_AUDIO: 'Vă rugăm să vă asigurați că furnizați o <strong>transcriere pentru toate podcasturile.</strong> Furnizarea de transcrieri pentru conținutul audio este o cerință obligatorie de nivel A. Transcrierile vin în sprijinul persoanelor cu deficiențe de auz sau cu deficiențe de auz, dar pot fi benefice pentru toată lumea. Luați în considerare plasarea transcrierii mai jos sau în cadrul unui panou acordeon.',
    EMBED_DATA_VIZ: 'Widgeturile de vizualizare a datelor de acest tip sunt adesea problematice pentru persoanele care utilizează o tastatură sau un cititor de ecran pentru a naviga și pot prezenta dificultăți semnificative pentru persoanele cu vedere slabă sau daltonism. Se recomandă să furnizați aceleași informații într-un format alternativ (text sau tabel) sub widget. <hr> Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/images/complex">imagini complexe.</a>.',
    EMBED_MISSING_TITLE: 'Conținutul încorporat necesită un nume accesibil care să descrie conținutul său. Vă rugăm să furnizați un atribut unic <code>title</code> sau <code>aria-label</code> pe elementul <code>iframe</code>. Aflați mai multe despre <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL: 'Nu se poate verifica conținutul încorporat. Vă rugăm să vă asigurați că imaginile au text alt, videoclipurile au legende, textul are un contrast suficient, iar componentele interactive sunt <a href="https://webaim.org/techniques/keyboard/">accesibile la tastatură.</a>.',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> cu elemente nefocalizabile nu ar trebui să aibă <code>tabindex="-1"</code>. Conținutul încorporat nu va fi accesibil prin tastatură.',

    // QA
    QA_BAD_LINK: 'Link greșit găsit. Linkul pare să indice un mediu de dezvoltare. <hr> Acest link trimite la: <br> <strong {C}>%(LINK)</strong>.',
    QA_IN_PAGE_LINK: 'Legătură internă ruptă. Destinația linkului nu se potrivește cu niciun element de pe această pagină.',
    QA_STRONG_ITALICS: 'Etichetele bold și italic au o semnificație semantică și nu trebuie <strong>nu</strong> folosite pentru a evidenția paragrafe întregi. Textul cu caractere aldine trebuie folosit pentru a oferi o <strong>accentuare</strong> puternică asupra unui cuvânt sau a unei fraze. Italicul ar trebui utilizat pentru a evidenția nume proprii (de exemplu, titluri de cărți și articole), cuvinte străine, ghilimele. Citatele lungi ar trebui să fie formatate ca un blockquote.',
    QA_PDF: 'Imposibilitatea de a verifica accesibilitatea PDF-urilor. PDF-urile sunt considerate conținut web și trebuie să fie, de asemenea, accesibile. PDF-urile conțin adesea probleme pentru persoanele care utilizează cititoare de ecran (etichete structurale sau etichete de câmpuri de formular lipsă) și pentru persoanele cu vedere slabă (textul nu se reface atunci când este mărit). <ul><li>Dacă acesta este un formular, luați în considerare utilizarea unui formular HTML accesibil ca alternativă.</li><li>Dacă acesta este un document, luați în considerare transformarea acestuia într-o pagină web.</li></ul> În caz contrar, vă rugăm să verificați <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF pentru accesibilitate în Acrobat DC.</a>',
    QA_DOCUMENT: 'Imposibil să verificați dacă documentul este accesibil. Documentele legate sunt considerate conținut web și trebuie să fie, de asemenea, accesibile. Vă rugăm să verificați manual acest document. <ul><li>Faceți-vă <a href="https://support.google.com/docs/answer/6199477?hl=ro">Documentul sau prezentarea Google Workspace mai accesibil.</a></li><li>Faceți-vă <a href="https://support.microsoft.com/ro/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Documentele Office mai accesibile.</a></li></ul>',
    QA_BLOCKQUOTE: 'E un titlu? <strong {C}>%(TEXT)</strong> <hr> Blocurile de ghilimele trebuie folosite numai pentru citate. Dacă se intenționează ca acesta să fie un titlu, schimbați acest blockquote într-un titlu semantic (de exemplu, titlul 2 sau titlul 3).',
    QA_FAKE_HEADING: 'E un titlu? <strong {C}>%(TEXT)</strong> <hr> Un rând de text bold sau mare poate părea un titlu, dar o persoană care folosește un cititor de ecran nu poate spune că este important sau nu poate sări la conținutul său. Textul bold sau mare nu ar trebui să înlocuiască niciodată titlurile semantice (de la titlul 2 la titlul 6).',
    QA_FAKE_LIST: 'Încercați să creați o listă? Posibil element de listă găsit: <strong {C}>%(firstPrefix)</strong> <hr> Asigurați-vă că folosiți liste semantice, utilizând în schimb butoanele de formatare a punctelor sau a numerelor. Atunci când se utilizează o listă semantică, tehnologiile asistive sunt capabile să transmită informații precum numărul total de elemente și poziția relativă a fiecărui element din listă. Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">liste semantice.</a>',
    QA_UPPERCASE: 'Am găsit toate majusculele. Unele cititoare de ecran pot interpreta textul cu majuscule ca fiind un acronim și vor citi fiecare literă în parte. În plus, unele persoane consideră că toate majusculele sunt mai greu de citit și pot da impresia că strigă.',
    QA_UNDERLINE: 'Textul subliniat poate fi confundat cu linkurile. Luați în considerare utilizarea unui stil diferit, cum ar fi <code>&lt;strong&gt;</code><strong>importanță</strong><code>&lt;/strong&gt;</code> sau <code>&lt;em&gt;</code><em>accentuare</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT: 'Opțiunile de formatare subscript și superscript ar trebui utilizate numai pentru a modifica poziția textului pentru convenții sau standarde tipografice. Nu ar trebui <strong>nu</strong> să fie utilizate exclusiv în scopuri de prezentare sau de aspect. Formatarea unor propoziții întregi ridică probleme de lizibilitate. Cazurile de utilizare adecvate ar include afișarea exponenților, a numerelor ordinale, cum ar fi 4<sup>th</sup> în loc de fourth, și a formulelor chimice (de exemplu, H<sub>2</sub>O).',
    QA_NESTED_COMPONENTS: 'Evitați să înnodați componentele interactive de layout, cum ar fi plasarea acordioanelor în tab-uri sau tab-urilor în acordeoane. Acest lucru poate complica navigarea, crește încărcătura cognitivă și duce la trecerea cu vederea a conținutului.',
    QA_JUSTIFY: 'Evitați utilizarea textului justificat, care se aliniază atât la marginea stângă, cât și la cea dreaptă. Acest lucru poate fi dificil de citit pentru unele persoane din cauza spațiilor inegale dintre cuvinte. Utilizați text aliniat la stânga pentru o lizibilitate mai bună.',
    QA_SMALL_TEXT: 'Textul mic este mai greu de citit, în special pentru persoanele cu vedere slabă. Pentru a asigura o lizibilitate mai bună, evitați utilizarea dimensiunilor de font mai mici decât cele implicite.',

    // Shared
    ACC_NAME: '<strong {B}>Numele accesibil</strong> %(TEXT)',
    ACC_NAME_TIP: '<hr><strong>Sfat!</strong> "Numele accesibil" este eticheta finală care este comunicată persoanelor care utilizează tehnologii de asistență și este calculată de ARIA. Acest lucru le ajută să înțeleagă scopul legăturii sau butonului.',
    HIDDEN_FOCUSABLE: 'Linkul sau butonul are atributul <code>aria-hidden=&quot;true&quot;</code>, dar este poate fi totuși accesat folosind tastatura. Dacă intenționați să ascundeți un link sau un buton duplicat, adăugați și <code>tabindex=&quot;-1&quot;</code>. În caz contrar, <code>aria-hidden=&quot;true&quot;</code> nu ar trebui să fie utilizat pe elemente care pot primi focus. <hr> Aflați mai multe despre <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">atributul aria-hidden.</a>',

    // Developer
    DUPLICATE_ID: 'S-a găsit <strong>un ID duplicat</strong>. Se știe că erorile de ID duplicat cauzează probleme pentru tehnologiile asistive atunci când acestea încearcă să interacționeze cu conținutul. Vă rugăm să eliminați sau să modificați următorul ID. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
    UNCONTAINED_LI: 'Toate elementele de listă <code>&lt;li&gt;</code> trebuie să fie plasate în interiorul elementelor <code>&lt;ul&gt;</code> neordonate sau <code>&lt;ol&gt;</code> ordonate. Această structură ajută cititoarele de ecran să anunțe lista și elementele sale cu precizie.',
    TABINDEX_ATTR: 'Elementul nu ar trebui să aibă un atribut <code>tabindex</code> mai mare de 0.',

    // Meta
    META_LANG: 'Limba paginii nu este declarată! Vă rugăm <a href="https://www.w3.org/International/questions/qa-html-language-declarations">declarați limba în tag-ul HTML.</a>',
    META_TITLE: 'Lipsește titlul paginii! Vă rugăm să furnizați un <a href="https://developer.mozilla.org/ro/docs/Web/HTML/Element/title">titlu pagină.</a>',
    META_SCALABLE: 'Eliminați parametrul <code>user-scalable="no"</code> din <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tag-ul viewport</a> pentru a permite mărirea.',
    META_MAX: 'Asigurați-vă că parametrul <code>maximum-scale</code> din <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">meta tag-ul viewport</a> nu este mai mic de 2.',
    META_REFRESH: 'Pagina nu ar trebui să se reîmprospăteze automat folosind o etichetă meta.',

    // Button
    BTN_EMPTY: 'Butonul nu are un nume accesibil care să descrie scopul său.',
    BTN_EMPTY_LABELLEDBY: 'Butonul are o valoare <code>aria-labelledby</code> care este goală sau nu se potrivește cu valoarea <code>id</code> a altui element din pagină.',
    BTN: 'buton',
    BTN_TIP: 'Învățați cum să creați un <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">buton accesibil.</a>',
    BTN_ROLE_IN_NAME: 'Nu includeți cuvântul „buton” în numele unui buton. Cititoarele de ecran deja comunică rolul unui element în plus față de numele său.',
    LABEL_IN_NAME: 'Textul vizibil pentru acest element pare a fi diferit de numele accesibil, ceea ce poate cauza confuzie pentru utilizatorii de tehnologii asistive. Vă rugăm să verificați: <hr> <strong {B}>Nume Accesibil</strong> <strong {C}>%(TEXT)</strong>',

    // Tables
    TABLES_MISSING_HEADINGS: 'Lipsesc capetele de tabel! Tabelele accesibile au nevoie de marcaje HTML care să indice celulele de antet și celulele de date care definesc relația dintre ele. Aceste informații oferă un context pentru persoanele care utilizează tehnologia de asistență. Tabelele ar trebui să fie utilizate numai pentru date tabelare. <hr> Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/tables/">tablouri accesibile.</a>',
    TABLES_SEMANTIC_HEADING: 'Titlurile semantice, cum ar fi Heading 2 sau Heading 3, ar trebui utilizate numai pentru secțiuni de conținut; <strong>nu</strong> în tabelele HTML. Indicați titlurile de tabel folosind în schimb elementul <code>&lt;th&gt;</code>. <hr> Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/tables/">tablouri accesibile.</a>',
    TABLES_EMPTY_HEADING: 'S-a găsit un antet de tabel gol! Anteturile de tabel nu ar trebui să fie <strong>niciodată</strong> goale. Este important să se desemneze antetele de rând și/sau de coloană pentru a transmite relația dintre ele. Aceste informații oferă context persoanelor care utilizează tehnologia de asistență. Vă rugăm să rețineți că tabelele trebuie utilizate numai pentru date tabelare. <hr> Aflați mai multe despre <a href="https://www.w3.org/WAI/tutorials/tables/">tablouri accesibile.</a>',

    // Contrast
    CONTRAST_ERROR: 'Acest text nu are un contrast suficient cu fundalul. Raportul de contrast ar trebui să fie de cel puțin 4,5:1 pentru textul normal și de 3:1 pentru textul mare. <hr> <strong {B}>Raport de contrast</strong> <strong {B}>%(RATIO)</strong> <strong {C}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'Contrastul acestui text este necunoscut și trebuie să fie revizuit manual. Asigurați-vă că textul și fundalul au culori puternic contrastante. Raportul de contrast trebuie să fie de cel puțin 4,5:1 pentru textul normal și de 3:1 pentru textul mare. <hr> <strong {B}>Raport de contrast</strong> <strong {B}>Necunoscut</strong> <strong {C}>%(TEXT)</strong>',
    CONTRAST_INPUT: 'Textul din această intrare nu are un contrast suficient cu fundalul. Raportul de contrast ar trebui să fie de cel puțin 4,5:1 pentru textul normal și de 3:1 pentru textul mare. <hr> <strong {B}>Raport de contrast</strong> <strong {B}>%(RATIO)</strong>',
  },
};

export { ro as default };
