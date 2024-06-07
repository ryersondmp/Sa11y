
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.2.0
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Sa11yLangEl = factory());
})(this, (function () { 'use strict';

  /*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
  var el = {
    // Greek
    strings: {
      LANG_CODE: 'el',
      MAIN_TOGGLE_LABEL: 'Έλεγχος προσβασιμότητας',
      CONTAINER_LABEL: 'Έλεγχος προσβασιμότητας',
      ERROR: 'Σφάλμα',
      ERRORS: 'Σφάλματα',
      WARNING: 'Προειδοποίηση',
      WARNINGS: 'Προειδοποιήσεις',
      GOOD: 'Καλή',
      ON: 'Ενεργό',
      OFF: 'Ανενεργό',
      ALERT_TEXT: 'Ειδοποίηση',
      ALERT_CLOSE: 'Κλείστε το',
      OUTLINE: 'Περίγραμμα',
      ALT: 'ALT',
      IMAGES: 'Εικόνες',
      EDIT: 'Επεξεργασία',
      IMAGES_NOT_FOUND: 'Δεν βρέθηκαν εικόνες.',
      DECORATIVE: 'Διακοσμητικό',
      MISSING: 'Λείπει',
      PAGE_ISSUES: 'Ζητήματα σελίδας',
      SETTINGS: 'Ρυθμίσεις',
      CONTRAST: 'Αντίθεση',
      FORM_LABELS: 'Ετικέτες εντύπων',
      LINKS_ADVANCED: 'Σύνδεσμοι (για προχωρημένους)',
      DARK_MODE: 'Σκοτεινή λειτουργία',
      SHORTCUT_SCREEN_READER: 'Μετάβαση στο θέμα. Συντόμευση πληκτρολογίου: S',
      SHORTCUT_TOOLTIP: 'Μετάβαση στο θέμα',
      NEW_TAB: 'Ανοίγει νέα καρτέλα',
      LINKED: 'Συνδεδεμένο',
      PANEL_HEADING: 'Έλεγχος προσβασιμότητας',
      PANEL_STATUS_NONE: 'Δεν βρέθηκαν σφάλματα.',
      PANEL_ICON_WARNINGS: 'βρέθηκαν προειδοποιήσεις.',
      PANEL_ICON_TOTAL: 'συνολικά θέματα που βρέθηκαν.',
      NOT_VISIBLE_ALERT: 'Το στοιχείο που προσπαθείτε να δείτε δεν είναι ορατό- μπορεί να είναι κρυμμένο ή να βρίσκεται μέσα σε ένα στοιχείο ακορντεόν ή καρτέλας. Ακολουθεί μια προεπισκόπηση:',
      ERROR_MISSING_ROOT_TARGET: 'Η πλήρης σελίδα ελέγχθηκε για προσβασιμότητα επειδή η περιοχή-στόχος <code>%(root)</code> δεν υπάρχει.',
      HEADING_NOT_VISIBLE_ALERT: 'Η επικεφαλίδα δεν είναι ορατή- μπορεί να είναι κρυμμένη ή μέσα σε ένα στοιχείο ακορντεόν ή καρτέλας.',
      SKIP_TO_PAGE_ISSUES: 'Μετάβαση στα θέματα της σελίδας',
      CONSOLE_ERROR_MESSAGE: 'Συγγνώμη, αλλά υπάρχει πρόβλημα με τον ελεγκτή προσβασιμότητας σε αυτή τη σελίδα. Μπορείτε να το αναφέρετε, παρακαλώ, <a href="%(link)">μέσω αυτής της φόρμας</a> ή στο <a href="%(link)">GitHub</a>',

      // Dismiss
      PANEL_DISMISS_BUTTON: 'Εμφάνιση %(dismissCount) απορριφθεισών προειδοποιήσεων',
      DISMISS: 'Απορρίψτε το',
      DISMISSED: 'Απορριφθείσες προειδοποιήσεις',
      DISMISS_REMINDER: 'Λάβετε υπόψη ότι οι προειδοποιήσεις απορρίπτονται μόνο <strong>προσωρινά</strong>. Η εκκαθάριση του ιστορικού και των cookies του προγράμματος περιήγησής σας θα επαναφέρει όλες τις προειδοποιήσεις που είχαν απορριφθεί προηγουμένως σε όλες τις σελίδες.',

      // Export
      DATE: 'Ημερομηνία',
      PAGE_TITLE: 'Τίτλος σελίδας',
      RESULTS: 'Αποτελέσματα',
      EXPORT_RESULTS: 'Εξαγωγή αποτελεσμάτων',
      GENERATED: 'Τα αποτελέσματα δημιουργήθηκαν με %(tool).',
      PREVIEW: 'Προεπισκόπηση',
      ELEMENT: 'Στοιχείο',
      PATH: 'Διαδρομή',

      // Colour filters
      COLOUR_FILTER: 'Φίλτρο χρώματος',
      PROTANOPIA: 'Protanopia',
      DEUTERANOPIA: 'Deuteranopia',
      TRITANOPIA: 'Tritanopia',
      MONOCHROMACY: 'Μονοχρωμία',
      COLOUR_FILTER_MESSAGE: 'Ελέγξτε για στοιχεία που είναι δύσκολο να γίνουν αντιληπτά ή να διακριθούν σε σχέση με άλλα χρώματα.',
      RED_EYE: 'Κόκκινο τυφλό.',
      GREEN_EYE: 'Πράσινο τυφλό.',
      BLUE_EYE: 'Μπλε τυφλό.',
      MONO_EYE: 'Κόκκινο, μπλε και πράσινο τυφλό.',
      COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Τα χρωματικά φίλτρα δεν λειτουργούν στη λειτουργία υψηλής αντίθεσης.',

      // Alternative text stop words
      SUSPICIOUS_ALT_STOPWORDS: [
        'εικόνα',
        'γραφικό',
        'φωτογραφία',
      ],
      PLACEHOLDER_ALT_STOPWORDS: [
        'alt',
        'εικόνα',
        'φωτογραφία',
        'διακοσμητικό',
        'φωτογραφία',
        'placeholder',
        'εικόνα καταλόγου',
        'αποστάτης',
      ],
      PARTIAL_ALT_STOPWORDS: [
        'κάντε κλικ στο',
        'κάντε κλικ εδώ',
        'κάντε κλικ εδώ για περισσότερα',
        'κάντε κλικ εδώ για να μάθετε περισσότερα',
        'κάνοντας κλικ εδώ',
        'ελέγξτε',
        'αναλυτικά εδώ',
        'λήψη',
        'κατεβάστε εδώ',
        'μάθετε',
        'μάθετε περισσότερα',
        'έντυπο',
        'εδώ',
        'πληροφορίες',
        'σύνδεσμος',
        'μάθετε',
        'μάθετε περισσότερα',
        'μάθετε να',
        'περισσότερα',
        'σελίδα',
        'χαρτί',
        'διαβάστε περισσότερα',
        'διαβάστε',
        'διαβάστε αυτό',
        'αυτό το',
        'αυτή τη σελίδα',
        'αυτός ο ιστότοπος',
        'προβολή',
        'δείτε το',
        'δικτυακός τόπος',
      ],
      WARNING_ALT_STOPWORDS: [
        'κάντε κλικ εδώ',
      ],
      NEW_WINDOW_PHRASES: [
        'εξωτερικό',
        'νέα καρτέλα',
        'νέο παράθυρο',
        'pop-up',
        'αναδύεται',
      ],
      FILE_TYPE_PHRASES: ['έγγραφο', 'υπολογιστικό φύλλο', 'φύλλο υπολογισμού', 'συμπιεσμένο αρχείο', 'αρχειοθετημένο αρχείο', 'φύλλο εργασίας', 'powerpoint', 'παρουσίαση', 'εγκατάσταση', 'βίντεο', 'ήχος', 'pdf'],
      LANG_READABILITY: 'Αναγνωσιμότητα',
      LANG_AVG_SENTENCE: 'Μέσος όρος λέξεων ανά πρόταση:',
      LANG_COMPLEX_WORDS: 'Σύνθετες λέξεις:',
      LANG_TOTAL_WORDS: 'Λέξεις:',
      LANG_VERY_DIFFICULT: 'Πολύ δύσκολο',
      LANG_DIFFICULT: 'Δύσκολο',
      LANG_FAIRLY_DIFFICULT: 'Αρκετά δύσκολο',
      LANG_GOOD: 'Καλή',
      READABILITY_NO_P_OR_LI_MESSAGE: 'Αδυναμία υπολογισμού της βαθμολογίας αναγνωσιμότητας. Δεν βρέθηκε παράγραφος <code>&lt;p&gt;</code> ή περιεχόμενο λίστας <code>&lt;li&gt;</code>.',
      READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Δεν υπάρχει αρκετό περιεχόμενο για τον υπολογισμό της βαθμολογίας αναγνωσιμότητας.',
      HEADING_NON_CONSECUTIVE_LEVEL: 'Χρησιμοποιήθηκε μη διαδοχικό επίπεδο επικεφαλίδας. Οι επικεφαλίδες δεν πρέπει ποτέ να παραλείπουν επίπεδα ή να πηγαίνουν από <strong>Κεφαλίδα %(prevLevel)</strong> σε <strong {r}>Κεφαλίδα %(level)</strong>.',
      HEADING_EMPTY: 'Βρέθηκε κενή επικεφαλίδα! Για να το διορθώσετε, διαγράψτε αυτή τη γραμμή ή αλλάξτε τη μορφή της από <strong {r}>επικεφαλίδα %(επίπεδο)</strong> σε <strong>κανονική</strong> ή <strong>παράγραφος</strong>.',
      HEADING_LONG: 'Η κεφαλή είναι μακριά! Οι επικεφαλίδες θα πρέπει να χρησιμοποιούνται για την οργάνωση του περιεχομένου και τη μετάδοση της δομής. Θα πρέπει να είναι σύντομοι, ενημερωτικοί και μοναδικοί. Παρακαλούμε να διατηρείτε τις επικεφαλίδες σε λιγότερο από 160 χαρακτήρες (όχι περισσότερο από μια πρόταση). <hr> <strong {b}>%(HEADING_LENGTH) χαρακτήρες</strong>',
      HEADING_FIRST: 'Η πρώτη επικεφαλίδα σε μια σελίδα θα πρέπει συνήθως να είναι επικεφαλίδα 1 ή επικεφαλίδα 2. Η επικεφαλίδα 1 θα πρέπει να αποτελεί την αρχή της κύριας ενότητας περιεχομένου και είναι η κύρια επικεφαλίδα που περιγράφει το γενικό σκοπό της σελίδας. Μάθετε περισσότερα για την <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Δομή επικεφαλίδων.</a>',
      HEADING_MISSING_ONE: 'Λείπει η επικεφαλίδα 1. Η επικεφαλίδα 1 πρέπει να αποτελεί την αρχή της κύριας περιοχής περιεχομένου και είναι η κύρια επικεφαλίδα που περιγράφει τον γενικό σκοπό της σελίδας. Μάθετε περισσότερα για την <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Δομή επικεφαλίδων.</a>',
      HEADING_EMPTY_WITH_IMAGE: 'Η επικεφαλίδα δεν έχει κείμενο, αλλά περιέχει μια εικόνα. Αν δεν πρόκειται για επικεφαλίδα, αλλάξτε τη μορφή της από <strong {r}>Κεφαλίδα %(επίπεδο)</strong> σε <strong>Κανονική</strong> ή <strong>Παράγραφος</strong>. Διαφορετικά, προσθέστε κείμενο alt στην εικόνα, αν δεν είναι διακοσμητικό.',
      PANEL_HEADING_MISSING_ONE: 'Λείπει η επικεφαλίδα 1!',
      PANEL_NO_HEADINGS: 'Δεν βρέθηκαν κεφαλίδες.',
      LINK_EMPTY: 'Αφαίρεση κενών συνδέσμων χωρίς κείμενο.',
      LINK_EMPTY_LABELLEDBY: 'Ο σύνδεσμος έχει μια τιμή για το <code>aria-labelledby</code>, η οποία είναι άδεια ή δεν ταιριάζει με την τιμή του χαρακτηριστικού <code>id</code> ενός άλλου στοιχείου στη σελίδα.',
      LINK_EMPTY_LINK_NO_LABEL: 'Ο σύνδεσμος δεν έχει ευδιάκριτο κείμενο που να είναι ορατό σε προγράμματα ανάγνωσης οθόνης και άλλες υποστηρικτικές τεχνολογίες. Για να το διορθώσετε: <ul><li>Προσθέστε κάποιο συνοπτικό κείμενο που να περιγράφει πού σας οδηγεί ο σύνδεσμος.</li><li>Αν πρόκειται για σύνδεσμο <a href="https://a11y-101.com/development/icons-and-links">εικονίδιο ή SVG,</a> είναι πιθανό να λείπει μια περιγραφική ετικέτα.</li><li>Αν πιστεύετε ότι αυτός ο σύνδεσμος είναι σφάλμα που οφείλεται σε σφάλμα αντιγραφής/επικόλλησης, σκεφτείτε να τον διαγράψετε.</li></ul>',
      LINK_LABEL: '<strong {b}>Ετικέτα συνδέσμου</strong> %(TEXT)',
      LINK_STOPWORD: 'Το κείμενο συνδέσμου μπορεί να μην είναι αρκετά περιγραφικό εκτός πλαισίου: <strong {r}>%(ERROR)</strong><hr><strong>Σύμβουλος!</strong> Το κείμενο συνδέσμου πρέπει να είναι πάντα σαφές, μοναδικό και ουσιαστικό. Αποφύγετε κοινές λέξεις όπως &quot;κάντε κλικ εδώ&quot; ή &quot;μάθετε περισσότερα&quot;,',
      LINK_BEST_PRACTICES: 'Εξετάστε το ενδεχόμενο αντικατάστασης του κειμένου του συνδέσμου: <strong {r}>%(σφάλμα)</strong><hr><ul><li>&quot;Κάντε κλικ εδώ&quot; δίνει έμφαση στη μηχανική του ποντικιού, ενώ πολλοί άνθρωποι δεν χρησιμοποιούν ποντίκι ή μπορεί να βλέπουν αυτόν τον ιστότοπο από κινητή συσκευή. Εξετάστε το ενδεχόμενο να χρησιμοποιήσετε ένα διαφορετικό ρήμα που να σχετίζεται με την εργασία.</li><li>Αποφύγετε τη χρήση συμβόλων HTML ως κλήση σε ενέργειες, εκτός αν είναι κρυμμένα σε υποστηρικτικές τεχνολογίες.</li></ul>',
      LINK_URL: 'Οι μακρύτερες, λιγότερο κατανοητές διευθύνσεις URL που χρησιμοποιούνται ως κείμενο συνδέσμου ενδέχεται να είναι δύσκολο να κατανοηθούν όταν η πρόσβαση γίνεται με υποστηρικτική τεχνολογία. Στις περισσότερες περιπτώσεις, είναι προτιμότερο να χρησιμοποιείτε κείμενο που διαβάζεται από τον άνθρωπο αντί για τη διεύθυνση URL. Οι σύντομες διευθύνσεις URL (όπως η αρχική σελίδα ενός ιστότοπου) είναι εντάξει. <hr> <strong>Σύμβουλος!</strong> Το κείμενο συνδέσμου θα πρέπει πάντα να είναι σαφές, μοναδικό και με νόημα, ώστε να μπορεί να γίνει κατανοητό εκτός πλαισίου.',
      LINK_DOI: 'Για ιστοσελίδες ή αποκλειστικά διαδικτυακούς πόρους, ο <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">Οδηγός στυλ της ΑΡΑ</a> συνιστά τη χρήση περιγραφικών συνδέσμων, τυλίγοντας τη διεύθυνση URL ή το DOI του έργου γύρω από τον τίτλο του. Οι μακρύτερες, λιγότερο κατανοητές διευθύνσεις URL που χρησιμοποιούνται ως κείμενο συνδέσμου ενδέχεται να είναι δύσκολο να κατανοηθούν όταν η πρόσβαση γίνεται με υποστηρικτική τεχνολογία.',
      NEW_TAB_WARNING: 'Ο σύνδεσμος ανοίγει σε νέα καρτέλα ή παράθυρο χωρίς προειδοποίηση. Κάτι τέτοιο μπορεί να αποπροσανατολίσει, ειδικά τα άτομα που δυσκολεύονται να αντιληφθούν το οπτικό περιεχόμενο. Δεύτερον, δεν είναι πάντα καλή πρακτική να ελέγχετε την εμπειρία κάποιου ή να παίρνετε αποφάσεις για λογαριασμό του. Αναφέρετε ότι ο σύνδεσμος ανοίγει σε νέο παράθυρο μέσα στο κείμενο του συνδέσμου<hr><strong>Σύμβουλος!</strong> Μάθετε τις βέλτιστες πρακτικές: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">Ανοιγμα συνδέσμων σε νέα παράθυρα και καρτέλες του προγράμματος περιήγησης.</a>',
      FILE_TYPE_WARNING: 'Ο σύνδεσμος παραπέμπει σε αρχείο PDF ή αρχείο με δυνατότητα λήψης (π.χ. MP3, Zip, Word Doc) χωρίς προειδοποίηση. Αναφέρετε τον τύπο του αρχείου στο κείμενο του συνδέσμου. Εάν πρόκειται για μεγάλο αρχείο, εξετάστε το ενδεχόμενο να συμπεριλάβετε το μέγεθος του αρχείου.<hr><strong>Παράδειγμα:</strong> Εκτελεστική έκθεση (PDF, 3MB)',
      LINK_IDENTICAL_NAME: 'Ο σύνδεσμος έχει το ίδιο κείμενο με έναν άλλο σύνδεσμο, αν και δείχνει σε διαφορετική σελίδα. Πολλαπλοί σύνδεσμοι με το ίδιο κείμενο μπορεί να προκαλέσουν σύγχυση σε άτομα που χρησιμοποιούν προγράμματα ανάγνωσης οθόνης. <hr> Σκεφτείτε να κάνετε τον ακόλουθο σύνδεσμο πιο περιγραφικό για να τον ξεχωρίσετε από άλλους συνδέσμους: <strong {w}>%(TEXT)</strong>',
      MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'Η εικόνα χρησιμοποιείται ως σύνδεσμος με περιβάλλων κείμενο, αν και το χαρακτηριστικό alt θα πρέπει να επισημανθεί ως διακοσμητικό ή μηδενικό.',
      MISSING_ALT_LINK_MESSAGE: 'Η εικόνα χρησιμοποιείται ως σύνδεσμος, αλλά λείπει το κείμενο alt! Βεβαιωθείτε ότι το alt text περιγράφει πού σας οδηγεί ο σύνδεσμος.',
      MISSING_ALT_MESSAGE: 'Λείπει το κείμενο alt! Εάν η εικόνα μεταφέρει μια ιστορία, μια διάθεση ή μια σημαντική πληροφορία - φροντίστε να περιγράψετε την εικόνα.',
      LINK_ALT_HAS_FILE_EXTENSION: 'Βρέθηκε επέκταση αρχείου μέσα στο κείμενο alt. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. Αφαιρέστε: <strong {r}>%(ERROR)</strong> <hr> {ALT} {L} <strong {r}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Βρέθηκε μη περιγραφικό κείμενο ή κείμενο alt με ψευδώνυμο μέσα σε μια συνδεδεμένη εικόνα. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. Αντικαταστήστε το ακόλουθο κείμενο alt. <hr> {ALT} {L} <strong {r}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_SUS_ALT_MESSAGE: 'Οι υποστηρικτικές τεχνολογίες υποδεικνύουν ήδη ότι πρόκειται για εικόνα, οπότε το &quot;<strong {r}>%(ERROR)</strong>&quot; μπορεί να είναι περιττό. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. <hr> {ALT} {L} <strong {w}>%(ALT_TEXT)</strong>',
      ALT_HAS_FILE_EXTENSION: 'Βρέθηκε επέκταση αρχείου μέσα στο κείμενο alt. Εάν η εικόνα μεταφέρει μια ιστορία, μια διάθεση ή μια σημαντική πληροφορία, φροντίστε να περιγράψετε την εικόνα. Αφαιρέστε: <strong {r}>%(ERROR)</strong> <hr> {ALT} <strong {r}>%(ALT_TEXT)</strong>',
      ALT_PLACEHOLDER_MESSAGE: 'Βρέθηκε μη περιγραφικό κείμενο ή κείμενο alt με ψευδώνυμο. Αντικαταστήστε το ακόλουθο κείμενο alt με κάτι πιο ουσιαστικό. <hr> {ALT} <strong {r}>%(ALT_TEXT)</strong>',
      ALT_HAS_SUS_WORD: 'Οι υποστηρικτικές τεχνολογίες υποδεικνύουν ήδη ότι πρόκειται για εικόνα, οπότε το &quot;<strong {w}>%(ERROR)</strong>&quot; μπορεί να είναι περιττό. <hr> {ALT} <strong {w}>%(ALT_TEXT)</strong>',
      LINK_HIDDEN_FOCUSABLE: 'Ο σύνδεσμος έχει <code>aria-hidden=&quot;true&quot;</code> αλλά εξακολουθεί να είναι προσβάσιμος με το πληκτρολόγιο. Αν σκοπεύετε να κρύψετε έναν περιττό ή διπλό σύνδεσμο, προσθέστε επίσης <code>tabindex=&quot;-1&quot;</code>.',
      LINK_IMAGE_NO_ALT_TEXT: 'Η εικόνα εντός του συνδέσμου χαρακτηρίζεται ως διακοσμητική και δεν υπάρχει κείμενο συνδέσμου. Προσθέστε κείμενο alt στην εικόνα που περιγράφει τον προορισμό του συνδέσμου.',
      LINK_IMAGE_HAS_TEXT: 'Η εικόνα χαρακτηρίζεται ως διακοσμητική, αν και ο σύνδεσμος χρησιμοποιεί το περιβάλλον κείμενο ως περιγραφική ετικέτα.',
      LINK_IMAGE_LONG_ALT: 'Η περιγραφή του κειμένου Alt σε μια συνδεδεμένη εικόνα είναι <strong>υπερβολικά μεγάλη</strong>. Το κείμενο alt σε εικόνες που συνδέονται με συνδέσμους θα πρέπει να περιγράφει πού σας οδηγεί ο σύνδεσμος και όχι μια κυριολεκτική περιγραφή της εικόνας. <strong>Σκεφτείτε να χρησιμοποιήσετε τον τίτλο της σελίδας στην οποία παραπέμπει ως κείμενο alt.</strong> <hr> {ALT} {L} <strong {b}>%(altLength) χαρακτήρες</strong> <strong {w}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_WARNING: 'Ο σύνδεσμος εικόνας περιέχει κείμενο alt. <strong>Περιγράφει το κείμενο alt πού σας οδηγεί ο σύνδεσμος;</strong> Εξετάστε το ενδεχόμενο να χρησιμοποιήσετε τον τίτλο της σελίδας στην οποία παραπέμπει ως κείμενο alt. <hr> {ALT} {L} <strong {w}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_AND_TEXT_WARNING: 'Ο σύνδεσμος εικόνας περιέχει <strong>τόσο το κείμενο alt όσο και το περιβάλλον κείμενο συνδέσμου.</strong> Εάν αυτή η εικόνα είναι διακοσμητική και χρησιμοποιείται ως λειτουργικός σύνδεσμος προς μια άλλη σελίδα, σκεφτείτε να χαρακτηρίσετε την εικόνα ως διακοσμητική ή μηδενική - το περιβάλλον κείμενο συνδέσμου θα πρέπει να αρκεί. <hr> {ALT} <strong {w}>%(ALT_TEXT)</strong> <hr> <strong {b}>Ετικέτα συνδέσμου</strong> {L} <strong {w}>%(TEXT)</strong>',
      IMAGE_FIGURE_DECORATIVE: 'Η εικόνα χαρακτηρίζεται ως <strong>διακοσμητική</strong> και θα αγνοηθεί από την υποστηρικτική τεχνολογία. <hr> Παρόλο που δόθηκε <strong>επικεφαλίδα</strong>, η εικόνα θα πρέπει επίσης να έχει κείμενο alt στις περισσότερες περιπτώσεις. <ul><li>Το κείμενο alt θα πρέπει να παρέχει μια συνοπτική περιγραφή του περιεχομένου της εικόνας.</li><li>Η λεζάντα θα πρέπει συνήθως να παρέχει πλαίσιο για να συσχετίσει την εικόνα με το περιβάλλον περιεχόμενο ή να δώσει προσοχή σε μια συγκεκριμένη πληροφορία.</li></ul>Μάθετε περισσότερα: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
      IMAGE_FIGURE_DUPLICATE_ALT: 'Μην χρησιμοποιείτε τις ίδιες ακριβώς λέξεις τόσο για το κείμενο alt όσο και για τη λεζάντα. Τα προγράμματα ανάγνωσης οθόνης θα αναγγείλουν την πληροφορία δύο φορές.<ul><li>Το κείμενο alt θα πρέπει να παρέχει μια συνοπτική περιγραφή του περιεχομένου της εικόνας.</li><li>Η λεζάντα θα πρέπει συνήθως να παρέχει πλαίσιο για να συσχετίσει την εικόνα με το περιβάλλον περιεχόμενο ή να δώσει προσοχή σε μια συγκεκριμένη πληροφορία.</li></ul> Μάθετε περισσότερα: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {w}>%(ALT_TEXT)</strong>',
      IMAGE_DECORATIVE: 'Η εικόνα χαρακτηρίζεται ως <strong>διακοσμητική</strong> και θα αγνοηθεί από την υποστηρικτική τεχνολογία. Εάν η εικόνα μεταφέρει μια ιστορία, διάθεση ή σημαντικές πληροφορίες - φροντίστε να προσθέσετε κείμενο alt.',
      IMAGE_ALT_TOO_LONG: 'Η περιγραφή του κειμένου Alt είναι <strong>υπερβολικά μεγάλη</strong>. Το κείμενο Alt πρέπει να είναι σύντομο, αλλά ουσιαστικό όπως ένα <em>tweet</em> (περίπου 100 χαρακτήρες). Εάν πρόκειται για μια σύνθετη εικόνα ή ένα γράφημα, σκεφτείτε να τοποθετήσετε τη μακροσκελή περιγραφή της εικόνας στο κείμενο παρακάτω ή σε ένα στοιχείο ακορντεόν. <hr> {ALT} <strong {b}>%(altLength) χαρακτήρες</strong> <strong {w}>%(ALT_TEXT)</strong>',
      IMAGE_PASS: '{ALT} %(ALT_TEXT)',
      LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'Από το κουμπί εικόνας λείπει το κείμενο alt. Παρακαλούμε προσθέστε κείμενο alt για να δώσετε ένα προσβάσιμο όνομα. Για παράδειγμα: <em>Αναζήτηση</em> ή <em>Υποβολή</em>.',
      LABELS_INPUT_RESET_MESSAGE: 'Τα κουμπιά επαναφοράς <strong>δεν πρέπει να χρησιμοποιούνται, εκτός αν είναι ειδικά απαραίτητα, διότι είναι εύκολο να ενεργοποιηθούν κατά λάθος. <hr> <strong> Συμβουλή!</strong> Μάθετε γιατί τα κουμπιά <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Reset και Cancel δημιουργούν προβλήματα ευχρηστίας.</a>',
      LABELS_ARIA_LABEL_INPUT_MESSAGE: 'Η είσοδος έχει ένα προσβάσιμο όνομα, αν και παρακαλούμε βεβαιωθείτε ότι υπάρχει και μια ορατή ετικέτα. <hr> <strong {b}>Ετικέτα εισόδου</strong> <strong {w}>%(TEXT)</strong>',
      LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Δεν υπάρχει ετικέτα που να σχετίζεται με αυτή την είσοδο. Προσθέστε ένα χαρακτηριστικό <code>for</code> στην ετικέτα που ταιριάζει με το <code>id</code> αυτής της εισόδου. <hr> Το αναγνωριστικό αυτής της εισόδου είναι: <strong>id=&#34;%(id)&#34;</strong>',
      LABELS_MISSING_LABEL_MESSAGE: 'Δεν υπάρχει ετικέτα που να σχετίζεται με αυτή την είσοδο. Προσθέστε ένα <code>id</code> σε αυτή την είσοδο και προσθέστε ένα αντίστοιχο χαρακτηριστικό <code>for</code> στην ετικέτα.',
      EMBED_VIDEO: 'Παρακαλούμε βεβαιωθείτε ότι <strong>όλα τα βίντεο διαθέτουν κλειστούς υπότιτλους.</strong> Η παροχή υπότιτλων για όλο το περιεχόμενο ήχου και βίντεο αποτελεί υποχρεωτική απαίτηση του επιπέδου Α. Οι λεζάντες υποστηρίζουν τα άτομα που είναι κωφά ή βαρήκοα.',
      EMBED_AUDIO: 'Βεβαιωθείτε ότι παρέχετε <strong>μεταγραφή για όλα τα podcasts.</strong> Η παροχή μεταγραφής για ηχητικό περιεχόμενο αποτελεί υποχρεωτική απαίτηση του επιπέδου Α. Οι απομαγνητοφωνήσεις υποστηρίζουν τα άτομα με κώφωση ή βαρηκοΐα, αλλά μπορούν να ωφελήσουν όλους. Εξετάστε το ενδεχόμενο να τοποθετήσετε την απομαγνητοφώνηση παρακάτω ή μέσα σε ένα πάνελ ακορντεόν.',
      EMBED_DATA_VIZ: 'Τέτοια widgets απεικόνισης δεδομένων είναι συχνά προβληματικά για άτομα που χρησιμοποιούν πληκτρολόγιο ή πρόγραμμα ανάγνωσης οθόνης για να πλοηγηθούν και μπορεί να παρουσιάσουν σημαντικές δυσκολίες για άτομα με χαμηλή όραση ή αχρωματοψία. Συνιστάται η παροχή των ίδιων πληροφοριών σε εναλλακτική μορφή (κείμενο ή πίνακας) κάτω από το widget. <hr> Μάθετε περισσότερα για τις <a href="https://www.w3.org/WAI/tutorials/images/complex">συμπληρωματικές εικόνες.</a>',
      EMBED_MISSING_TITLE: 'Το ενσωματωμένο περιεχόμενο απαιτεί ένα προσβάσιμο όνομα που περιγράφει το περιεχόμενό του. Παρακαλείστε να δώσετε ένα μοναδικό χαρακτηριστικό <code>title</code> ή <code>aria-label</code> στο στοιχείο <code>iframe</code>. Μάθετε περισσότερα για τα <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
      EMBED_GENERAL_WARNING: 'Δεν είναι δυνατός ο έλεγχος του ενσωματωμένου περιεχομένου. Παρακαλούμε βεβαιωθείτε ότι οι εικόνες έχουν alt κείμενο, τα βίντεο έχουν λεζάντες, το κείμενο έχει επαρκή αντίθεση και τα διαδραστικά στοιχεία είναι <a href="https://webaim.org/techniques/keyboard/">προσβάσιμα στο πληκτρολόγιο.</a>',
      EMBED_UNFOCUSABLE: 'Το <code>&lt;iframe&gt;</code> με στοιχεία που δεν είναι εστιασμένα δεν πρέπει να έχει <code>tabindex="-1"</code>. Το ενσωματωμένο περιεχόμενο δεν θα είναι προσβάσιμο με το πληκτρολόγιο.',
      QA_BAD_LINK: 'Βρέθηκε κακός σύνδεσμος. Ο σύνδεσμος φαίνεται να δείχνει σε περιβάλλον ανάπτυξης. <hr> Αυτός ο σύνδεσμος παραπέμπει σε: <br> <strong {r}>%(LINK)</strong>',
      QA_IN_PAGE_LINK: 'Σπασμένος σύνδεσμος στην ίδια σελίδα. Το στόχος του συνδέσμου δεν αντιστοιχεί σε κανένα στοιχείο σε αυτήν τη σελίδα.',
      QA_BAD_ITALICS: 'Οι ετικέτες bold και italic έχουν σημασιολογική σημασία και δεν πρέπει να χρησιμοποιούνται για να τονίζουν ολόκληρες παραγράφους. Το κείμενο με έντονη γραφή θα πρέπει να χρησιμοποιείται για να παρέχει ισχυρή <strong>έμφαση</strong> σε μια λέξη ή φράση. Η πλάγια γραφή θα πρέπει να χρησιμοποιείται για να τονίζονται τα κύρια ονόματα (π.χ. τίτλοι βιβλίων και άρθρων), ξένες λέξεις, εισαγωγικά. Τα μακροσκελή εισαγωγικά θα πρέπει να μορφοποιούνται ως blockquote.',
      QA_PDF: 'Αδυναμία ελέγχου PDF για προσβασιμότητα. Τα PDF θεωρούνται περιεχόμενο ιστού και πρέπει επίσης να είναι προσβάσιμα. Τα PDF περιέχουν συχνά προβλήματα για άτομα που χρησιμοποιούν προγράμματα ανάγνωσης οθόνης (λείπουν δομικές ετικέτες ή λείπουν ετικέτες πεδίων φόρμας) και άτομα με χαμηλή όραση (το κείμενο δεν ανακυκλώνεται όταν μεγεθύνεται). <ul><li>Αν πρόκειται για φόρμα, εξετάστε το ενδεχόμενο να χρησιμοποιήσετε μια προσβάσιμη φόρμα HTML ως εναλλακτική λύση.</li><li>Αν πρόκειται για έγγραφο, εξετάστε το ενδεχόμενο να το μετατρέψετε σε ιστοσελίδα.</li></ul>Αλλιώς, ελέγξτε το <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF για προσβασιμότητα στο Acrobat DC.</a>',
      QA_DOCUMENT: 'Αδυναμία ελέγχου του εγγράφου για προσβασιμότητα. Τα συνδεδεμένα έγγραφα θεωρούνται διαδικτυακό περιεχόμενο και πρέπει επίσης να είναι προσβάσιμα. Παρακαλούμε ελέγξτε αυτό το έγγραφο με μη αυτόματο τρόπο. <ul><li>Κάντε το <a href="https://support.google.com/docs/answer/6199477?hl=el">Έγγραφο ή την παρουσίασή σας στο Google Workspace πιο προσβάσιμο.</a></li></li><li>Κάντε τα <a href="https://support.microsoft.com/el/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Έγγραφα του Office πιο προσβάσιμα.</a></li></ul>',
      QA_PAGE_LANGUAGE: 'Η γλώσσα της σελίδας δεν έχει δηλωθεί! Παρακαλούμε <a href="https://www.w3.org/International/questions/qa-html-language-declarations">δήλωσε τη γλώσσα στην ετικέτα HTML.</a>',
      QA_PAGE_TITLE: 'Λείπει ο τίτλος της σελίδας! Παρακαλούμε δώστε έναν <a href="https://developer.mozilla.org/el/docs/Web/HTML/Element/title">τίτλο σελίδας.</a>',
      QA_BLOCKQUOTE_MESSAGE: 'Πρόκειται για τίτλο; <strong {w}>%(TEXT)</strong> <hr> Τα εισαγωγικά πρέπει να χρησιμοποιούνται μόνο για εισαγωγικά. Αν πρόκειται για επικεφαλίδα, αλλάξτε αυτό το blockquote σε σημασιολογική επικεφαλίδα (π.χ. επικεφαλίδα 2 ή επικεφαλίδα 3).',
      QA_FAKE_HEADING: 'Πρόκειται για τίτλο; <strong {w}>%(TEXT)</strong> <hr> Μια γραμμή έντονου ή μεγάλου κειμένου μπορεί να μοιάζει με επικεφαλίδα, αλλά κάποιος που χρησιμοποιεί πρόγραμμα ανάγνωσης οθόνης δεν μπορεί να καταλάβει ότι είναι σημαντική ή να μεταβεί στο περιεχόμενό της. Το έντονο ή μεγάλο κείμενο δεν πρέπει ποτέ να αντικαθιστά τις σημασιολογικές επικεφαλίδες (επικεφαλίδα 2 έως επικεφαλίδα 6).',
      QA_SHOULD_BE_LIST: "Προσπαθείτε να δημιουργήσετε μια λίστα; Βρέθηκε πιθανό στοιχείο λίστας: <strong {r}>%(firstPrefix)</strong> <hr> Βεβαιωθείτε ότι χρησιμοποιείτε σημασιολογικές λίστες, χρησιμοποιώντας αντ' αυτού τα κουμπιά μορφοποίησης κουκκίδων ή αριθμών. Όταν χρησιμοποιείτε μια σημασιολογική λίστα, οι υποστηρικτικές τεχνολογίες είναι σε θέση να μεταφέρουν πληροφορίες όπως ο συνολικός αριθμός των στοιχείων και η σχετική θέση κάθε στοιχείου στη λίστα. Μάθετε περισσότερα για τις <a href=\"https://www.w3.org/WAI/tutorials/page-structure/content/#lists\">σημασιολογικές λίστες.</a>",
      QA_UPPERCASE_WARNING: 'Βρέθηκαν όλα τα κεφαλαία. Ορισμένα προγράμματα ανάγνωσης οθόνης ενδέχεται να ερμηνεύσουν το κείμενο με κεφαλαία γράμματα ως ακρωνύμιο και θα διαβάσουν κάθε γράμμα ξεχωριστά. Επιπλέον, ορισμένοι άνθρωποι βρίσκουν τα κεφαλαία γράμματα πιο δυσανάγνωστα και μπορεί να δώσουν την εντύπωση ότι φωνάζουν.',
      QA_DUPLICATE_ID: 'Βρέθηκε <strong>διπλό αναγνωριστικό</strong>. Τα σφάλματα διπλού αναγνωριστικού είναι γνωστό ότι προκαλούν προβλήματα στις υποστηρικτικές τεχνολογίες όταν αυτές προσπαθούν να αλληλεπιδράσουν με το περιεχόμενο. <hr> Παρακαλούμε αφαιρέστε ή αλλάξτε το ακόλουθο ID: <strong {r}>%(id)</strong>',
      QA_TEXT_UNDERLINE_WARNING: 'Το υπογραμμισμένο κείμενο μπορεί να συγχέεται με συνδέσμους. Σκεφτείτε να χρησιμοποιήσετε ένα διαφορετικό στυλ, όπως <code>&lt;strong&gt;</code><strong>strong σημασία</strong><code>&lt;/strong&gt;</code> ή <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
      QA_SUBSCRIPT_WARNING: 'Οι επιλογές μορφοποίησης υπογράμμισης και άνω δείκτη πρέπει να χρησιμοποιούνται μόνο για την αλλαγή της θέσης του κειμένου για λόγους τυπογραφικών συμβάσεων ή προτύπων. Θα πρέπει <strong>δεν</strong> να χρησιμοποιούνται αποκλειστικά για λόγους παρουσίασης ή εμφάνισης. Η μορφοποίηση ολόκληρων προτάσεων δημιουργεί προβλήματα αναγνωσιμότητας. Κατάλληλες περιπτώσεις χρήσης θα μπορούσαν να περιλαμβάνουν την εμφάνιση εκθετών, τακτικών αριθμών, όπως 4<sup>th</sup> αντί για fourth, και χημικών τύπων (π.χ. H<sub>2</sub>O).',
      TABLES_MISSING_HEADINGS: 'Λείπουν οι επικεφαλίδες των πινάκων! Οι προσβάσιμοι πίνακες χρειάζονται σήμανση HTML που να υποδεικνύει τα κελιά κεφαλίδας και τα κελιά δεδομένων που καθορίζουν τη σχέση τους. Αυτές οι πληροφορίες παρέχουν περιεχόμενο σε άτομα που χρησιμοποιούν υποστηρικτική τεχνολογία. Οι πίνακες πρέπει να χρησιμοποιούνται μόνο για δεδομένα σε μορφή πίνακα. <hr> Μάθετε περισσότερα για τους <a href="https://www.w3.org/WAI/tutorials/tables/">προσβάσιμους πίνακες.</a>',
      TABLES_SEMANTIC_HEADING: "Σημασιολογικές επικεφαλίδες όπως οι επικεφαλίδες 2 ή 3 θα πρέπει να χρησιμοποιούνται μόνο για τμήματα περιεχομένου- <strong>όχι</strong> σε πίνακες HTML. Υποδείξτε επικεφαλίδες πινάκων χρησιμοποιώντας αντ' αυτού το στοιχείο <code>&lt;th&gt;</code>. <hr> Μάθετε περισσότερα για τους <a href=\"https://www.w3.org/WAI/tutorials/tables/\">προσβάσιμους πίνακες.</a>",
      TABLES_EMPTY_HEADING: 'Βρέθηκε κενή επικεφαλίδα πίνακα! Οι επικεφαλίδες των πινάκων δεν πρέπει να είναι <strong>ποτέ</strong> κενές. Είναι σημαντικό να ορίζονται επικεφαλίδες γραμμών ή/και στηλών για να αποδίδεται η σχέση τους. Αυτές οι πληροφορίες παρέχουν πλαίσιο σε άτομα που χρησιμοποιούν υποστηρικτική τεχνολογία. Λάβετε υπόψη σας ότι οι πίνακες πρέπει να χρησιμοποιούνται μόνο για δεδομένα σε πίνακες. <hr> Μάθετε περισσότερα σχετικά με τους <a href="https://www.w3.org/WAI/tutorials/tables/">προσβάσιμους πίνακες.</a>',
      CONTRAST_ERROR: 'Αυτό το κείμενο δεν έχει αρκετή αντίθεση με το φόντο. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> <strong {b}>Αντίθεση Αναλογία</strong> <strong {b}>%(RATIO)</strong> <strong {r}>%(TEXT)</strong>',
      CONTRAST_WARNING: 'Η αντίθεση αυτού του κειμένου είναι άγνωστη και πρέπει να επανεξεταστεί χειροκίνητα. Βεβαιωθείτε ότι το κείμενο και το φόντο έχουν έντονη χρωματική αντίθεση. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> Παρακαλούμε ελέγξτε: <strong {w}>%(TEXT)</strong>',
      CONTRAST_INPUT_ERROR: 'Το κείμενο σε αυτή την εισαγωγή δεν έχει αρκετή αντίθεση με το φόντο. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> <strong {b}>Αντίθεση Αναλογία</strong> <strong {b}>%(RATIO)</strong>',
    },
  };

  return el;

}));
