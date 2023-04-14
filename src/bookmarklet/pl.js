/* eslint-disable no-new */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
import { loadSa11y } from './_loadSa11y';

const langCode = 'Pl';

function onLoadScript() {
  Sa11y.Lang.addI18n(Sa11yLang`${langCode}`.strings);
  new Sa11y.Sa11y({
    detectSPArouting: true,
  });
}

if (typeof Sa11y !== 'object') {
  loadSa11y(onLoadScript, langCode);
} else {
  alert('Przeciągnij przycisk „Sa11y” na pasek zakładek. Następnie kliknij zakładkę na dowolnej stronie internetowej.');
}
