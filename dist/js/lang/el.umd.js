
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
      TITLE: 'Τίτλος',
      ALT: 'ALT',
      IMAGES: 'Εικόνες',
      EDIT: 'Επεξεργασία',
      NO_IMAGES: 'Δεν βρέθηκαν εικόνες.',
      DECORATIVE: 'Διακοσμητικό',
      MISSING: 'Λείπει',
      PAGE_ISSUES: 'Ζητήματα σελίδας',
      SETTINGS: 'Ρυθμίσεις',
      DEVELOPER_CHECKS: 'Έλεγχοι προγραμματιστή',
      DEVELOPER_DESC: 'Ελέγχει για προβλήματα που μπορεί να απαιτούν γνώσεις προγραμματισμού για επίλυση.',
      DARK_MODE: 'Σκοτεινή λειτουργία',
      SHORTCUT_SR: 'Μετάβαση στο θέμα. Συντόμευση πληκτρολογίου: S',
      SKIP_TO_ISSUE: 'Μετάβαση στο θέμα',
      NEW_TAB: 'Ανοίγει νέα καρτέλα',
      LINKED: 'Συνδεδεμένο',
      PANEL_HEADING: 'Έλεγχος προσβασιμότητας',
      NO_ERRORS_FOUND: 'Δεν βρέθηκαν σφάλματα.',
      WARNINGS_FOUND: 'βρέθηκαν προειδοποιήσεις.',
      TOTAL_FOUND: 'συνολικά θέματα που βρέθηκαν.',
      NOT_VISIBLE: 'Το στοιχείο που προσπαθείτε να δείτε δεν είναι ορατό- μπορεί να είναι κρυμμένο ή να βρίσκεται μέσα σε ένα στοιχείο ακορντεόν ή καρτέλας. Ακολουθεί μια προεπισκόπηση:',
      MISSING_ROOT: 'Η πλήρης σελίδα ελέγχθηκε για προσβασιμότητα επειδή η περιοχή-στόχος <code>%(root)</code> δεν υπάρχει.',
      HEADING_NOT_VISIBLE: 'Η επικεφαλίδα δεν είναι ορατή- μπορεί να είναι κρυμμένη ή μέσα σε ένα στοιχείο ακορντεόν ή καρτέλας.',
      SKIP_TO_PAGE_ISSUES: 'Μετάβαση στα θέματα της σελίδας',
      CONSOLE_ERROR: 'Συγγνώμη, αλλά υπάρχει πρόβλημα με τον ελεγκτή προσβασιμότητας σε αυτή τη σελίδα. Μπορείτε να το αναφέρετε, παρακαλώ, <a href="%(link)">μέσω αυτής της φόρμας</a> ή στο <a href="%(link)">GitHub</a>',

      // Dismiss
      PANEL_DISMISS_BUTTON: 'Εμφάνιση %(dismissCount) απορριφθέντων',
      DISMISS: 'Απορρίψτε',
      DISMISS_ALL: 'Απορρίψτε όλα',
      DISMISSED: 'Απορρίφθηκε',
      DISMISS_REMINDER: 'Παρακαλώ σημειώστε ότι οι προειδοποιήσεις είναι μόνο <strong>προσωρινά</strong> απορριφθείσες. Η εκκαθάριση της ιστορίας του προγράμματος περιήγησης και των cookies θα αποκαταστήσει όλες τις προηγουμένως απορριφθείσες προειδοποιήσεις σε όλες τις σελίδες.',

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
      COLOUR_FILTER_HIGH_CONTRAST: 'Τα χρωματικά φίλτρα δεν λειτουργούν στη λειτουργία υψηλής αντίθεσης.',

      // Alternative text stop words
      SUS_ALT_STOPWORDS: [
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

      // Readability
      READABILITY: 'Αναγνωσιμότητα',
      AVG_SENTENCE: 'Μέσος όρος λέξεων ανά πρόταση:',
      COMPLEX_WORDS: 'Σύνθετες λέξεις:',
      TOTAL_WORDS: 'Λέξεις:',
      VERY_DIFFICULT: 'Πολύ δύσκολο',
      DIFFICULT: 'Δύσκολο',
      FAIRLY_DIFFICULT: 'Αρκετά δύσκολο',
      READABILITY_NO_CONTENT: 'Αδυναμία υπολογισμού της βαθμολογίας αναγνωσιμότητας. Δεν βρέθηκε παράγραφος <code>&lt;p&gt;</code> ή περιεχόμενο λίστας <code>&lt;li&gt;</code>.',
      READABILITY_NOT_ENOUGH: 'Δεν υπάρχει αρκετό περιεχόμενο για τον υπολογισμό της βαθμολογίας αναγνωσιμότητας.',

      // Headings
      HEADING_SKIPPED_LEVEL: 'Χρησιμοποιήθηκε μη διαδοχικό επίπεδο επικεφαλίδας. Οι επικεφαλίδες δεν πρέπει ποτέ να παραλείπουν επίπεδα ή να πηγαίνουν από <strong>Κεφαλίδα %(prevLevel)</strong> σε <strong {C}>Κεφαλίδα %(level)</strong>.',
      HEADING_EMPTY: 'Βρέθηκε κενή επικεφαλίδα! Για να το διορθώσετε, διαγράψτε αυτή τη γραμμή ή αλλάξτε τη μορφή της από <strong {C}>επικεφαλίδα %(επίπεδο)</strong> σε <strong>κανονική</strong> ή <strong>παράγραφος</strong>.',
      HEADING_LONG: 'Η κεφαλή είναι μακριά! Οι επικεφαλίδες θα πρέπει να χρησιμοποιούνται για την οργάνωση του περιεχομένου και τη μετάδοση της δομής. Θα πρέπει να είναι σύντομοι, ενημερωτικοί και μοναδικοί. Παρακαλούμε να διατηρείτε τις επικεφαλίδες σε λιγότερο από 160 χαρακτήρες (όχι περισσότερο από μια πρόταση). <hr> <strong {B}>%(HEADING_LENGTH) χαρακτήρες</strong>',
      HEADING_FIRST: 'Η πρώτη επικεφαλίδα σε μια σελίδα θα πρέπει συνήθως να είναι επικεφαλίδα 1 ή επικεφαλίδα 2. Η επικεφαλίδα 1 θα πρέπει να αποτελεί την αρχή της κύριας ενότητας περιεχομένου και είναι η κύρια επικεφαλίδα που περιγράφει το γενικό σκοπό της σελίδας. Μάθετε περισσότερα για την <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Δομή επικεφαλίδων.</a>',
      HEADING_MISSING_ONE: 'Λείπει η επικεφαλίδα 1. Η επικεφαλίδα 1 πρέπει να αποτελεί την αρχή της κύριας περιοχής περιεχομένου και είναι η κύρια επικεφαλίδα που περιγράφει τον γενικό σκοπό της σελίδας. Μάθετε περισσότερα για την <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Δομή επικεφαλίδων.</a>',
      HEADING_EMPTY_WITH_IMAGE: 'Η επικεφαλίδα δεν έχει κείμενο, αλλά περιέχει μια εικόνα. Αν δεν πρόκειται για επικεφαλίδα, αλλάξτε τη μορφή της από <strong {C}>Κεφαλίδα %(επίπεδο)</strong> σε <strong>Κανονική</strong> ή <strong>Παράγραφος</strong>. Διαφορετικά, προσθέστε κείμενο alt στην εικόνα, αν δεν είναι διακοσμητικό.',
      PANEL_HEADING_MISSING_ONE: 'Λείπει η επικεφαλίδα 1!',
      PANEL_NO_HEADINGS: 'Δεν βρέθηκαν κεφαλίδες.',

      // Links
      LINK_EMPTY: 'Αφαίρεση κενών συνδέσμων χωρίς κείμενο.',
      LINK_EMPTY_LABELLEDBY: 'Ο σύνδεσμος έχει μια τιμή για το <code>aria-labelledby</code>, η οποία είναι άδεια ή δεν ταιριάζει με την τιμή του χαρακτηριστικού <code>id</code> ενός άλλου στοιχείου στη σελίδα.',
      LINK_EMPTY_NO_LABEL: 'Ο σύνδεσμος δεν έχει ευδιάκριτο κείμενο που να είναι ορατό σε προγράμματα ανάγνωσης οθόνης και άλλες υποστηρικτικές τεχνολογίες. Για να το διορθώσετε: <ul><li>Προσθέστε κάποιο συνοπτικό κείμενο που να περιγράφει πού σας οδηγεί ο σύνδεσμος.</li><li>Αν πρόκειται για σύνδεσμο <a href="https://a11y-101.com/development/icons-and-links">εικονίδιο ή SVG,</a> είναι πιθανό να λείπει μια περιγραφική ετικέτα.</li><li>Αν πιστεύετε ότι αυτός ο σύνδεσμος είναι σφάλμα που οφείλεται σε σφάλμα αντιγραφής/επικόλλησης, σκεφτείτε να τον διαγράψετε.</li></ul>',
      LINK_STOPWORD: 'Το κείμενο συνδέσμου μπορεί να μην είναι αρκετά περιγραφικό εκτός πλαισίου: <strong {C}>%(ERROR)</strong><hr><strong>Σύμβουλος!</strong> Το κείμενο συνδέσμου πρέπει να είναι πάντα σαφές, μοναδικό και ουσιαστικό. Αποφύγετε κοινές λέξεις όπως &quot;κάντε κλικ εδώ&quot; ή &quot;μάθετε περισσότερα&quot;,',
      LINK_BEST_PRACTICES: 'Εξετάστε το ενδεχόμενο αντικατάστασης του κειμένου του συνδέσμου: <strong {C}>%(σφάλμα)</strong><hr><ul><li>&quot;Κάντε κλικ εδώ&quot; δίνει έμφαση στη μηχανική του ποντικιού, ενώ πολλοί άνθρωποι δεν χρησιμοποιούν ποντίκι ή μπορεί να βλέπουν αυτόν τον ιστότοπο από κινητή συσκευή. Εξετάστε το ενδεχόμενο να χρησιμοποιήσετε ένα διαφορετικό ρήμα που να σχετίζεται με την εργασία.</li><li>Αποφύγετε τη χρήση συμβόλων HTML ως κλήση σε ενέργειες, εκτός αν είναι κρυμμένα σε υποστηρικτικές τεχνολογίες.</li></ul>',
      LINK_URL: 'Οι μακρύτερες, λιγότερο κατανοητές διευθύνσεις URL που χρησιμοποιούνται ως κείμενο συνδέσμου ενδέχεται να είναι δύσκολο να κατανοηθούν όταν η πρόσβαση γίνεται με υποστηρικτική τεχνολογία. Στις περισσότερες περιπτώσεις, είναι προτιμότερο να χρησιμοποιείτε κείμενο που διαβάζεται από τον άνθρωπο αντί για τη διεύθυνση URL. Οι σύντομες διευθύνσεις URL (όπως η αρχική σελίδα ενός ιστότοπου) είναι εντάξει. <hr> <strong>Σύμβουλος!</strong> Το κείμενο συνδέσμου θα πρέπει πάντα να είναι σαφές, μοναδικό και με νόημα, ώστε να μπορεί να γίνει κατανοητό εκτός πλαισίου.',
      LINK_DOI: 'Για ιστοσελίδες ή αποκλειστικά διαδικτυακούς πόρους, ο <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">Οδηγός στυλ της ΑΡΑ</a> συνιστά τη χρήση περιγραφικών συνδέσμων, τυλίγοντας τη διεύθυνση URL ή το DOI του έργου γύρω από τον τίτλο του. Οι μακρύτερες, λιγότερο κατανοητές διευθύνσεις URL που χρησιμοποιούνται ως κείμενο συνδέσμου ενδέχεται να είναι δύσκολο να κατανοηθούν όταν η πρόσβαση γίνεται με υποστηρικτική τεχνολογία.',
      LINK_NEW_TAB: 'Ο σύνδεσμος ανοίγει σε νέα καρτέλα ή παράθυρο χωρίς προειδοποίηση. Κάτι τέτοιο μπορεί να αποπροσανατολίσει, ειδικά τα άτομα που δυσκολεύονται να αντιληφθούν το οπτικό περιεχόμενο. Δεύτερον, δεν είναι πάντα καλή πρακτική να ελέγχετε την εμπειρία κάποιου ή να παίρνετε αποφάσεις για λογαριασμό του. Αναφέρετε ότι ο σύνδεσμος ανοίγει σε νέο παράθυρο μέσα στο κείμενο του συνδέσμου<hr><strong>Σύμβουλος!</strong> Μάθετε τις βέλτιστες πρακτικές: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">Ανοιγμα συνδέσμων σε νέα παράθυρα και καρτέλες του προγράμματος περιήγησης.</a>',
      LINK_FILE_EXT: 'Ο σύνδεσμος παραπέμπει σε αρχείο PDF ή αρχείο με δυνατότητα λήψης (π.χ. MP3, Zip, Word Doc) χωρίς προειδοποίηση. Αναφέρετε τον τύπο του αρχείου στο κείμενο του συνδέσμου. Εάν πρόκειται για μεγάλο αρχείο, εξετάστε το ενδεχόμενο να συμπεριλάβετε το μέγεθος του αρχείου.<hr><strong>Παράδειγμα:</strong> Εκτελεστική έκθεση (PDF, 3MB)',
      LINK_IDENTICAL_NAME: 'Ο σύνδεσμος έχει το ίδιο κείμενο με έναν άλλο σύνδεσμο, αν και δείχνει σε διαφορετική σελίδα. Πολλαπλοί σύνδεσμοι με το ίδιο κείμενο μπορεί να προκαλέσουν σύγχυση σε άτομα που χρησιμοποιούν προγράμματα ανάγνωσης οθόνης. <strong>Σκεφτείτε να κάνετε τον ακόλουθο σύνδεσμο πιο περιγραφικό για να τον ξεχωρίσετε από άλλους συνδέσμους.</strong> <hr> <strong {B}>Προσβάσιμο όνομα</strong> <strong {C}>%(TEXT)</strong>',

      // Images
      MISSING_ALT_LINK_HAS_TEXT: 'Η εικόνα χρησιμοποιείται ως σύνδεσμος με περιβάλλων κείμενο, αν και το χαρακτηριστικό alt θα πρέπει να επισημανθεί ως διακοσμητικό ή μηδενικό.',
      MISSING_ALT_LINK: 'Η εικόνα χρησιμοποιείται ως σύνδεσμος, αλλά λείπει το κείμενο alt! Βεβαιωθείτε ότι το alt text περιγράφει πού σας οδηγεί ο σύνδεσμος.',
      MISSING_ALT: 'Λείπει το κείμενο alt! Εάν η εικόνα μεταφέρει μια ιστορία, μια διάθεση ή μια σημαντική πληροφορία - φροντίστε να περιγράψετε την εικόνα.',
      LINK_ALT_FILE_EXT: 'Βρέθηκε επέκταση αρχείου μέσα στο κείμενο alt. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. Αφαιρέστε: <strong {C}>%(ERROR)</strong> <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_PLACEHOLDER_ALT: 'Βρέθηκε μη περιγραφικό κείμενο ή κείμενο alt με ψευδώνυμο μέσα σε μια συνδεδεμένη εικόνα. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. Αντικαταστήστε το ακόλουθο κείμενο alt. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_SUS_ALT: 'Οι υποστηρικτικές τεχνολογίες υποδεικνύουν ήδη ότι πρόκειται για εικόνα, οπότε το &quot;<strong {C}>%(ERROR)</strong>&quot; μπορεί να είναι περιττό. Βεβαιωθείτε ότι το κείμενο alt περιγράφει τον προορισμό του συνδέσμου και όχι μια κυριολεκτική περιγραφή της εικόνας. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      ALT_FILE_EXT: 'Βρέθηκε επέκταση αρχείου μέσα στο κείμενο alt. Εάν η εικόνα μεταφέρει μια ιστορία, μια διάθεση ή μια σημαντική πληροφορία, φροντίστε να περιγράψετε την εικόνα. Αφαιρέστε: <strong {C}>%(ERROR)</strong> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      ALT_PLACEHOLDER: 'Βρέθηκε μη περιγραφικό κείμενο ή κείμενο alt με ψευδώνυμο. Αντικαταστήστε το ακόλουθο κείμενο alt με κάτι πιο ουσιαστικό. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      SUS_ALT: 'Οι υποστηρικτικές τεχνολογίες υποδεικνύουν ήδη ότι πρόκειται για εικόνα, οπότε το &quot;<strong {C}>%(ERROR)</strong>&quot; μπορεί να είναι περιττό. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_NO_ALT_TEXT: 'Η εικόνα εντός του συνδέσμου χαρακτηρίζεται ως διακοσμητική και δεν υπάρχει κείμενο συνδέσμου. Προσθέστε κείμενο alt στην εικόνα που περιγράφει τον προορισμό του συνδέσμου.',
      LINK_IMAGE_TEXT: 'Η εικόνα χαρακτηρίζεται ως διακοσμητική, αν και ο σύνδεσμος χρησιμοποιεί το περιβάλλον κείμενο ως περιγραφική ετικέτα.',
      LINK_IMAGE_LONG_ALT: 'Η περιγραφή του κειμένου Alt σε μια συνδεδεμένη εικόνα είναι <strong>υπερβολικά μεγάλη</strong>. Το κείμενο alt σε εικόνες που συνδέονται με συνδέσμους θα πρέπει να περιγράφει πού σας οδηγεί ο σύνδεσμος και όχι μια κυριολεκτική περιγραφή της εικόνας. <strong>Σκεφτείτε να χρησιμοποιήσετε τον τίτλο της σελίδας στην οποία παραπέμπει ως κείμενο alt.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) χαρακτήρες</strong> <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT: 'Ο σύνδεσμος εικόνας περιέχει κείμενο alt. <strong>Περιγράφει το κείμενο alt πού σας οδηγεί ο σύνδεσμος;</strong> Εξετάστε το ενδεχόμενο να χρησιμοποιήσετε τον τίτλο της σελίδας στην οποία παραπέμπει ως κείμενο alt. <hr> {ALT} {L} <strong {C}>%(ALT_TEXT)</strong>',
      LINK_IMAGE_ALT_AND_TEXT: 'Ο σύνδεσμος εικόνας περιέχει <strong>τόσο το κείμενο alt όσο και το περιβάλλον κείμενο συνδέσμου.</strong> Εάν αυτή η εικόνα είναι διακοσμητική και χρησιμοποιείται ως λειτουργικός σύνδεσμος προς μια άλλη σελίδα, σκεφτείτε να χαρακτηρίσετε την εικόνα ως διακοσμητική ή μηδενική - το περιβάλλον κείμενο συνδέσμου θα πρέπει να αρκεί. <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong> <hr> <strong {B}>Προσβάσιμο όνομα</strong> {L} <strong {C}>%(TEXT)</strong>',
      IMAGE_FIGURE_DECORATIVE: 'Η εικόνα χαρακτηρίζεται ως <strong>διακοσμητική</strong> και θα αγνοηθεί από την υποστηρικτική τεχνολογία. <hr> Παρόλο που δόθηκε <strong>επικεφαλίδα</strong>, η εικόνα θα πρέπει επίσης να έχει κείμενο alt στις περισσότερες περιπτώσεις. <ul><li>Το κείμενο alt θα πρέπει να παρέχει μια συνοπτική περιγραφή του περιεχομένου της εικόνας.</li><li>Η λεζάντα θα πρέπει συνήθως να παρέχει πλαίσιο για να συσχετίσει την εικόνα με το περιβάλλον περιεχόμενο ή να δώσει προσοχή σε μια συγκεκριμένη πληροφορία.</li></ul>Μάθετε περισσότερα: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
      IMAGE_FIGURE_DUPLICATE_ALT: 'Μην χρησιμοποιείτε τις ίδιες ακριβώς λέξεις τόσο για το κείμενο alt όσο και για τη λεζάντα. Τα προγράμματα ανάγνωσης οθόνης θα αναγγείλουν την πληροφορία δύο φορές.<ul><li>Το κείμενο alt θα πρέπει να παρέχει μια συνοπτική περιγραφή του περιεχομένου της εικόνας.</li><li>Η λεζάντα θα πρέπει συνήθως να παρέχει πλαίσιο για να συσχετίσει την εικόνα με το περιβάλλον περιεχόμενο ή να δώσει προσοχή σε μια συγκεκριμένη πληροφορία.</li></ul> Μάθετε περισσότερα: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {C}>%(ALT_TEXT)</strong>',
      IMAGE_DECORATIVE: 'Η εικόνα χαρακτηρίζεται ως <strong>διακοσμητική</strong> και θα αγνοηθεί από την υποστηρικτική τεχνολογία. Εάν η εικόνα μεταφέρει μια ιστορία, διάθεση ή σημαντικές πληροφορίες - φροντίστε να προσθέσετε κείμενο alt.',
      IMAGE_ALT_TOO_LONG: 'Η περιγραφή του κειμένου Alt είναι <strong>υπερβολικά μεγάλη</strong>. Το κείμενο Alt πρέπει να είναι σύντομο, αλλά ουσιαστικό όπως ένα <em>tweet</em> (περίπου 100 χαρακτήρες). Εάν πρόκειται για μια σύνθετη εικόνα ή ένα γράφημα, σκεφτείτε να τοποθετήσετε τη μακροσκελή περιγραφή της εικόνας στο κείμενο παρακάτω ή σε ένα στοιχείο ακορντεόν. <hr> {ALT} <strong {B}>%(altLength) χαρακτήρες</strong> <strong {C}>%(ALT_TEXT)</strong>',
      IMAGE_DECORATIVE_CAROUSEL: 'Η εικόνα έχει επισημανθεί ως διακοσμητική, αλλά όλες οι εικόνες σε μια καρουζέλ ή γκαλερί θα πρέπει να περιλαμβάνουν περιγραφικό εναλλακτικό κείμενο για να εξασφαλιστεί ισότιμη εμπειρία για όλους.',
      IMAGE_PASS: '{ALT} %(ALT_TEXT)',

      // Form labels
      LABELS_MISSING_IMAGE_INPUT: 'Από το κουμπί εικόνας λείπει το κείμενο alt. Παρακαλούμε προσθέστε κείμενο alt για να δώσετε ένα προσβάσιμο όνομα. Για παράδειγμα: <em>Αναζήτηση</em> ή <em>Υποβολή</em>.',
      LABELS_INPUT_RESET: 'Τα κουμπιά επαναφοράς <strong>δεν πρέπει να χρησιμοποιούνται, εκτός αν είναι ειδικά απαραίτητα, διότι είναι εύκολο να ενεργοποιηθούν κατά λάθος. <hr> <strong> Συμβουλή!</strong> Μάθετε γιατί τα κουμπιά <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">Reset και Cancel δημιουργούν προβλήματα ευχρηστίας.</a>',
      LABELS_ARIA_LABEL_INPUT: 'Η είσοδος έχει ένα προσβάσιμο όνομα, αν και παρακαλούμε βεβαιωθείτε ότι υπάρχει και μια ορατή ετικέτα. <hr> <strong {B}>Προσβάσιμο όνομα</strong> <strong {C}>%(TEXT)</strong>',
      LABELS_NO_FOR_ATTRIBUTE: 'Δεν υπάρχει ετικέτα που να σχετίζεται με αυτή την είσοδο. Προσθέστε ένα χαρακτηριστικό <code>for</code> στην ετικέτα που ταιριάζει με το <code>id</code> αυτής της εισόδου. <hr> Το αναγνωριστικό αυτής της εισόδου είναι: <strong>id=&#34;%(id)&#34;</strong>',
      LABELS_MISSING_LABEL: 'Δεν υπάρχει ετικέτα που να σχετίζεται με αυτή την είσοδο. Προσθέστε ένα <code>id</code> σε αυτή την είσοδο και προσθέστε ένα αντίστοιχο χαρακτηριστικό <code>for</code> στην ετικέτα.',

      // Embedded content
      EMBED_VIDEO: 'Παρακαλούμε βεβαιωθείτε ότι <strong>όλα τα βίντεο διαθέτουν κλειστούς υπότιτλους.</strong> Η παροχή υπότιτλων για όλο το περιεχόμενο ήχου και βίντεο αποτελεί υποχρεωτική απαίτηση του επιπέδου Α. Οι λεζάντες υποστηρίζουν τα άτομα που είναι κωφά ή βαρήκοα.',
      EMBED_AUDIO: 'Βεβαιωθείτε ότι παρέχετε <strong>μεταγραφή για όλα τα podcasts.</strong> Η παροχή μεταγραφής για ηχητικό περιεχόμενο αποτελεί υποχρεωτική απαίτηση του επιπέδου Α. Οι απομαγνητοφωνήσεις υποστηρίζουν τα άτομα με κώφωση ή βαρηκοΐα, αλλά μπορούν να ωφελήσουν όλους. Εξετάστε το ενδεχόμενο να τοποθετήσετε την απομαγνητοφώνηση παρακάτω ή μέσα σε ένα πάνελ ακορντεόν.',
      EMBED_DATA_VIZ: 'Τέτοια widgets απεικόνισης δεδομένων είναι συχνά προβληματικά για άτομα που χρησιμοποιούν πληκτρολόγιο ή πρόγραμμα ανάγνωσης οθόνης για να πλοηγηθούν και μπορεί να παρουσιάσουν σημαντικές δυσκολίες για άτομα με χαμηλή όραση ή αχρωματοψία. Συνιστάται η παροχή των ίδιων πληροφοριών σε εναλλακτική μορφή (κείμενο ή πίνακας) κάτω από το widget. <hr> Μάθετε περισσότερα για τις <a href="https://www.w3.org/WAI/tutorials/images/complex">συμπληρωματικές εικόνες.</a>',
      EMBED_MISSING_TITLE: 'Το ενσωματωμένο περιεχόμενο απαιτεί ένα προσβάσιμο όνομα που περιγράφει το περιεχόμενό του. Παρακαλείστε να δώσετε ένα μοναδικό χαρακτηριστικό <code>title</code> ή <code>aria-label</code> στο στοιχείο <code>iframe</code>. Μάθετε περισσότερα για τα <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
      EMBED_GENERAL: 'Δεν είναι δυνατός ο έλεγχος του ενσωματωμένου περιεχομένου. Παρακαλούμε βεβαιωθείτε ότι οι εικόνες έχουν alt κείμενο, τα βίντεο έχουν λεζάντες, το κείμενο έχει επαρκή αντίθεση και τα διαδραστικά στοιχεία είναι <a href="https://webaim.org/techniques/keyboard/">προσβάσιμα στο πληκτρολόγιο.</a>',
      EMBED_UNFOCUSABLE: 'Το <code>&lt;iframe&gt;</code> με στοιχεία που δεν είναι εστιασμένα δεν πρέπει να έχει <code>tabindex="-1"</code>. Το ενσωματωμένο περιεχόμενο δεν θα είναι προσβάσιμο με το πληκτρολόγιο.',

      // QA
      QA_BAD_LINK: 'Βρέθηκε κακός σύνδεσμος. Ο σύνδεσμος φαίνεται να δείχνει σε περιβάλλον ανάπτυξης. <hr> Αυτός ο σύνδεσμος παραπέμπει σε: <br> <strong {C}>%(LINK)</strong>',
      QA_IN_PAGE_LINK: 'Σπασμένος σύνδεσμος στην ίδια σελίδα. Το στόχος του συνδέσμου δεν αντιστοιχεί σε κανένα στοιχείο σε αυτήν τη σελίδα.',
      QA_STRONG_ITALICS: 'Οι ετικέτες bold και italic έχουν σημασιολογική σημασία και δεν πρέπει να χρησιμοποιούνται για να τονίζουν ολόκληρες παραγράφους. Το κείμενο με έντονη γραφή θα πρέπει να χρησιμοποιείται για να παρέχει ισχυρή <strong>έμφαση</strong> σε μια λέξη ή φράση. Η πλάγια γραφή θα πρέπει να χρησιμοποιείται για να τονίζονται τα κύρια ονόματα (π.χ. τίτλοι βιβλίων και άρθρων), ξένες λέξεις, εισαγωγικά. Τα μακροσκελή εισαγωγικά θα πρέπει να μορφοποιούνται ως blockquote.',
      QA_PDF: 'Αδυναμία ελέγχου PDF για προσβασιμότητα. Τα PDF θεωρούνται περιεχόμενο ιστού και πρέπει επίσης να είναι προσβάσιμα. Τα PDF περιέχουν συχνά προβλήματα για άτομα που χρησιμοποιούν προγράμματα ανάγνωσης οθόνης (λείπουν δομικές ετικέτες ή λείπουν ετικέτες πεδίων φόρμας) και άτομα με χαμηλή όραση (το κείμενο δεν ανακυκλώνεται όταν μεγεθύνεται). <ul><li>Αν πρόκειται για φόρμα, εξετάστε το ενδεχόμενο να χρησιμοποιήσετε μια προσβάσιμη φόρμα HTML ως εναλλακτική λύση.</li><li>Αν πρόκειται για έγγραφο, εξετάστε το ενδεχόμενο να το μετατρέψετε σε ιστοσελίδα.</li></ul>Αλλιώς, ελέγξτε το <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF για προσβασιμότητα στο Acrobat DC.</a>',
      QA_DOCUMENT: 'Αδυναμία ελέγχου του εγγράφου για προσβασιμότητα. Τα συνδεδεμένα έγγραφα θεωρούνται διαδικτυακό περιεχόμενο και πρέπει επίσης να είναι προσβάσιμα. Παρακαλούμε ελέγξτε αυτό το έγγραφο με μη αυτόματο τρόπο. <ul><li>Κάντε το <a href="https://support.google.com/docs/answer/6199477?hl=el">Έγγραφο ή την παρουσίασή σας στο Google Workspace πιο προσβάσιμο.</a></li></li><li>Κάντε τα <a href="https://support.microsoft.com/el/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">Έγγραφα του Office πιο προσβάσιμα.</a></li></ul>',
      QA_BLOCKQUOTE: 'Πρόκειται για τίτλο; <strong {C}>%(TEXT)</strong> <hr> Τα εισαγωγικά πρέπει να χρησιμοποιούνται μόνο για εισαγωγικά. Αν πρόκειται για επικεφαλίδα, αλλάξτε αυτό το blockquote σε σημασιολογική επικεφαλίδα (π.χ. επικεφαλίδα 2 ή επικεφαλίδα 3).',
      QA_FAKE_HEADING: 'Πρόκειται για τίτλο; <strong {C}>%(TEXT)</strong> <hr> Μια γραμμή έντονου ή μεγάλου κειμένου μπορεί να μοιάζει με επικεφαλίδα, αλλά κάποιος που χρησιμοποιεί πρόγραμμα ανάγνωσης οθόνης δεν μπορεί να καταλάβει ότι είναι σημαντική ή να μεταβεί στο περιεχόμενό της. Το έντονο ή μεγάλο κείμενο δεν πρέπει ποτέ να αντικαθιστά τις σημασιολογικές επικεφαλίδες (επικεφαλίδα 2 έως επικεφαλίδα 6).',
      QA_FAKE_LIST: "Προσπαθείτε να δημιουργήσετε μια λίστα; Βρέθηκε πιθανό στοιχείο λίστας: <strong {C}>%(firstPrefix)</strong> <hr> Βεβαιωθείτε ότι χρησιμοποιείτε σημασιολογικές λίστες, χρησιμοποιώντας αντ' αυτού τα κουμπιά μορφοποίησης κουκκίδων ή αριθμών. Όταν χρησιμοποιείτε μια σημασιολογική λίστα, οι υποστηρικτικές τεχνολογίες είναι σε θέση να μεταφέρουν πληροφορίες όπως ο συνολικός αριθμός των στοιχείων και η σχετική θέση κάθε στοιχείου στη λίστα. Μάθετε περισσότερα για τις <a href=\"https://www.w3.org/WAI/tutorials/page-structure/content/#lists\">σημασιολογικές λίστες.</a>",
      QA_UPPERCASE: 'Βρέθηκαν όλα τα κεφαλαία. Ορισμένα προγράμματα ανάγνωσης οθόνης ενδέχεται να ερμηνεύσουν το κείμενο με κεφαλαία γράμματα ως ακρωνύμιο και θα διαβάσουν κάθε γράμμα ξεχωριστά. Επιπλέον, ορισμένοι άνθρωποι βρίσκουν τα κεφαλαία γράμματα πιο δυσανάγνωστα και μπορεί να δώσουν την εντύπωση ότι φωνάζουν.',
      QA_UNDERLINE: 'Το υπογραμμισμένο κείμενο μπορεί να συγχέεται με συνδέσμους. Σκεφτείτε να χρησιμοποιήσετε ένα διαφορετικό στυλ, όπως <code>&lt;strong&gt;</code><strong>strong σημασία</strong><code>&lt;/strong&gt;</code> ή <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
      QA_SUBSCRIPT: 'Οι επιλογές μορφοποίησης υπογράμμισης και άνω δείκτη πρέπει να χρησιμοποιούνται μόνο για την αλλαγή της θέσης του κειμένου για λόγους τυπογραφικών συμβάσεων ή προτύπων. Θα πρέπει <strong>δεν</strong> να χρησιμοποιούνται αποκλειστικά για λόγους παρουσίασης ή εμφάνισης. Η μορφοποίηση ολόκληρων προτάσεων δημιουργεί προβλήματα αναγνωσιμότητας. Κατάλληλες περιπτώσεις χρήσης θα μπορούσαν να περιλαμβάνουν την εμφάνιση εκθετών, τακτικών αριθμών, όπως 4<sup>th</sup> αντί για fourth, και χημικών τύπων (π.χ. H<sub>2</sub>O).',
      QA_NESTED_COMPONENTS: 'Αποφύγετε τη φωλιάση αλληλεπιδραστικών στοιχείων διάταξης, όπως η τοποθέτηση ακορντεόν μέσα σε καρτέλες ή καρτέλες μέσα σε ακορντεόν. Αυτό μπορεί να περιπλέξει την πλοήγηση, να αυξήσει το γνωστικό φόρτο και να οδηγήσει στην παράβλεψη περιεχομένου.',
      QA_JUSTIFY: 'Αποφύγετε τη χρήση πλήρους στοίχισης κειμένου, το οποίο ευθυγραμμίζεται και με τα αριστερά και με τα δεξιά περιθώρια. Αυτό μπορεί να είναι δύσκολο για μερικούς ανθρώπους να διαβάσουν λόγω των άνισων κενών μεταξύ των λέξεων. Χρησιμοποιήστε κείμενο με στοίχιση στα αριστερά για καλύτερη αναγνωσιμότητα.',
      QA_SMALL_TEXT: 'Το μικρό κείμενο είναι πιο δύσκολο να διαβαστεί, ειδικά για άτομα με μειωμένη όραση. Για να διασφαλίσετε καλύτερη αναγνωσιμότητα, αποφύγετε τη χρήση μεγεθών γραμματοσειράς μικρότερων από την προεπιλεγμένη.',

      // Shared
      ACC_NAME: '<strong {B}>Προσβάσιμο όνομα</strong> %(TEXT)',
      ACC_NAME_TIP: '<hr><strong>Συμβουλή!</strong> Το "προσβάσιμο όνομα" είναι η τελική ετικέτα που επικοινωνείται στους ανθρώπους που χρησιμοποιούν βοηθητική τεχνολογία. Αυτό τους βοηθά να κατανοήσουν τον σκοπό του συνδέσμου ή του κουμπιού.',
      HIDDEN_FOCUSABLE: 'Ο σύνδεσμος ή το κουμπί έχει <code>aria-hidden=&quot;true&quot;</code> αλλά εξακολουθεί να είναι προσβάσιμο μέσω πληκτρολογίου. Εάν θέλετε να αποκρύψετε έναν διπλό σύνδεσμο ή κουμπί, προσθέστε επίσης <code>tabindex=&quot;-1&quot;</code>. Διαφορετικά, το <code>aria-hidden=&quot;true&quot;</code> δεν πρέπει να χρησιμοποιείται σε στοιχεία που μπορούν να λάβουν εστίαση. <hr> Μάθετε περισσότερα για το <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden">aria-hidden attribute.</a>',

      // Developer
      DUPLICATE_ID: 'Βρέθηκε <strong>διπλό αναγνωριστικό</strong>. Τα σφάλματα διπλού αναγνωριστικού είναι γνωστό ότι προκαλούν προβλήματα στις υποστηρικτικές τεχνολογίες όταν αυτές προσπαθούν να αλληλεπιδράσουν με το περιεχόμενο. Παρακαλούμε αφαιρέστε ή αλλάξτε το ακόλουθο ID. <hr> <strong {B}>ID</strong> <strong {C}>#%(id)</strong>',
      UNCONTAINED_LI: 'Όλα τα στοιχεία λίστας <code>&lt;li&gt;</code> πρέπει να τοποθετούνται μέσα σε στοιχεία <code>&lt;ul&gt;</code> μη διατεταγμένων ή <code>&lt;ol&gt;</code> διατεταγμένων. Αυτή η δομή βοηθά τους αναγνώστες οθόνης να αναγγείλουν τη λίστα και τα στοιχεία της με ακρίβεια.',
      TABINDEX_ATTR: 'Το στοιχείο δεν πρέπει να έχει μια ιδιότητα <code>tabindex</code> μεγαλύτερη από το 0.',

      // Meta checks
      META_LANG: 'Η γλώσσα της σελίδας δεν έχει δηλωθεί! Παρακαλούμε <a href="https://www.w3.org/International/questions/qa-html-language-declarations">δήλωσε τη γλώσσα στην ετικέτα HTML.</a>',
      META_TITLE: 'Λείπει ο τίτλος της σελίδας! Παρακαλούμε δώστε έναν <a href="https://developer.mozilla.org/el/docs/Web/HTML/Element/title">τίτλο σελίδας.</a>',
      META_SCALABLE: 'Καταργήστε την παράμετρο <code>user-scalable="no"</code> στην <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">ετικέτα meta του viewport</a> για να επιτρέψετε την μεγέθυνση.',
      META_MAX: 'Βεβαιωθείτε ότι η παράμετρος <code>maximum-scale</code> στην <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Viewport_meta_tag">ετικέτα meta του viewport</a> δεν είναι μικρότερη από 2.',
      META_REFRESH: 'Η σελίδα δεν πρέπει να ανανεώνεται αυτόματα χρησιμοποιώντας μια ετικέτα meta.',

      // Buttons
      BTN_EMPTY: 'Το κουμπί δεν έχει ένα προσβάσιμο όνομα που να περιγράφει τον σκοπό του.',
      BTN_EMPTY_LABELLEDBY: 'Το κουμπί έχει τιμή <code>aria-labelledby</code> που είναι κενή ή δεν αντιστοιχεί στην τιμή <code>id</code> ενός άλλου στοιχείου στη σελίδα.',
      BTN: 'κουμπί',
      BTN_TIP: 'Μάθετε πώς να δημιουργήσετε ένα <a href="https://www.sarasoueidan.com/blog/accessible-icon-buttons/">προσβάσιμο κουμπί.</a>',
      BTN_ROLE_IN_NAME: 'Μην συμπεριλαμβάνετε τη λέξη "κουμπί" στο όνομα ενός κουμπιού. Οι αναγνώστες οθόνης ήδη μεταφέρουν τον ρόλο ενός στοιχείου εκτός από το όνομά του.',
      LABEL_IN_NAME: 'Το ορατό κείμενο αυτού του στοιχείου φαίνεται να είναι διαφορετικό από το προσβάσιμο όνομα, το οποίο μπορεί να προκαλέσει σύγχυση στους χρήστες των βοηθητικών τεχνολογιών. Ελέγξτε: <hr> <strong {B}>Προσβάσιμο Όνομα</strong> <strong {C}>%(TEXT)</strong>',

      // Tables
      TABLES_MISSING_HEADINGS: 'Λείπουν οι επικεφαλίδες των πινάκων! Οι προσβάσιμοι πίνακες χρειάζονται σήμανση HTML που να υποδεικνύει τα κελιά κεφαλίδας και τα κελιά δεδομένων που καθορίζουν τη σχέση τους. Αυτές οι πληροφορίες παρέχουν περιεχόμενο σε άτομα που χρησιμοποιούν υποστηρικτική τεχνολογία. Οι πίνακες πρέπει να χρησιμοποιούνται μόνο για δεδομένα σε μορφή πίνακα. <hr> Μάθετε περισσότερα για τους <a href="https://www.w3.org/WAI/tutorials/tables/">προσβάσιμους πίνακες.</a>',
      TABLES_SEMANTIC_HEADING: "Σημασιολογικές επικεφαλίδες όπως οι επικεφαλίδες 2 ή 3 θα πρέπει να χρησιμοποιούνται μόνο για τμήματα περιεχομένου- <strong>όχι</strong> σε πίνακες HTML. Υποδείξτε επικεφαλίδες πινάκων χρησιμοποιώντας αντ' αυτού το στοιχείο <code>&lt;th&gt;</code>. <hr> Μάθετε περισσότερα για τους <a href=\"https://www.w3.org/WAI/tutorials/tables/\">προσβάσιμους πίνακες.</a>",
      TABLES_EMPTY_HEADING: 'Βρέθηκε κενή επικεφαλίδα πίνακα! Οι επικεφαλίδες των πινάκων δεν πρέπει να είναι <strong>ποτέ</strong> κενές. Είναι σημαντικό να ορίζονται επικεφαλίδες γραμμών ή/και στηλών για να αποδίδεται η σχέση τους. Αυτές οι πληροφορίες παρέχουν πλαίσιο σε άτομα που χρησιμοποιούν υποστηρικτική τεχνολογία. Λάβετε υπόψη σας ότι οι πίνακες πρέπει να χρησιμοποιούνται μόνο για δεδομένα σε πίνακες. <hr> Μάθετε περισσότερα σχετικά με τους <a href="https://www.w3.org/WAI/tutorials/tables/">προσβάσιμους πίνακες.</a>',

      // Contrast
      CONTRAST_ERROR: 'Αυτό το κείμενο δεν έχει αρκετή αντίθεση με το φόντο. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> <strong {B}>Αντίθεση Αναλογία</strong> <strong {B}>%(RATIO)</strong> <strong {C}>%(TEXT)</strong>',
      CONTRAST_WARNING: 'Η αντίθεση αυτού του κειμένου είναι άγνωστη και πρέπει να επανεξεταστεί χειροκίνητα. Βεβαιωθείτε ότι το κείμενο και το φόντο έχουν έντονη χρωματική αντίθεση. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> <strong {B}>Αναλογία αντίθεσης</strong> <strong {B}>Άγνωστο</strong> <strong {C}>%(TEXT)</strong>',
      CONTRAST_INPUT: 'Το κείμενο σε αυτή την εισαγωγή δεν έχει αρκετή αντίθεση με το φόντο. Η αναλογία αντίθεσης πρέπει να είναι τουλάχιστον 4,5:1 για κανονικό κείμενο και 3:1 για μεγάλο κείμενο. <hr> <strong {B}>Αντίθεση Αναλογία</strong> <strong {B}>%(RATIO)</strong>',
    },
  };

  return el;

}));
