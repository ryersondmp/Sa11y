export default class Sa11yCustomChecks {
  check() {
    /* Add custom rulesets below. */

    /* Custom messages for tooltips. */
    const C = {
      ANNOUNCEMENT_MESSAGE:
        'More than one Announcement component found! The Announcement component should be used strategically and sparingly. It should be used to get attention or indicate that something is important. Misuse of this component makes it less effective or impactful. Secondly, this component is semantically labeled as an Announcement for people who use screen readers.',

      ACCORDION_FORM_MESSAGE:
        'Do <strong>not nest forms</strong> within the Accordion component. If the form contains validation issues, a person may not see the form feedback since the accordion panel goes back to its original closed state.',
    };

    /* Example custom check #1 */
    const $checkAnnouncement = Sa11y.root.querySelectorAll('.sa11y-announcement-component');
    if ($checkAnnouncement.length > 1) {
      for (let i = 1; i < $checkAnnouncement.length; i++) {
        $checkAnnouncement[i].classList.add('sa11y-warning-border');
        $checkAnnouncement[i].insertAdjacentHTML('beforebegin', Sa11y.annotate(WARNING, C.ANNOUNCEMENT_MESSAGE));
      }
    }

    /* Example custom check #2 */
    const $checkAccordions = Sa11y.root.querySelectorAll('.sa11y-accordion-example');
    $checkAccordions.forEach($el => {
      const checkForm = $el.querySelector('form');
      if (!!checkForm && checkForm.length) {
        $el.classList.add('sa11y-error-border');
        $el.insertAdjacentHTML('beforebegin', Sa11y.annotate(ERROR, C.ACCORDION_FORM_MESSAGE));
      }
    });

    /* End of custom rulesets.  */
  }
}
