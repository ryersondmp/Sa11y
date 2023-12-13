/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import { test, describe, before, after } from 'node:test';
import assert from 'node:assert/strict';
import puppeteer from 'puppeteer';

/**
 * Check contents of tooltip.
 * @param {class} page Puppeteer: Page provides methods to interact with a single tab.
 * @param {selector} elementId The ID on the test page.
 * @param {string} expectedText The expected tooltip message.
 */
async function checkTooltip(page, elementId, expectedText) {
  const result = await page.evaluate((id, text) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const annotation = element.querySelector('sa11y-annotation');
    if (!annotation) return false;
    const annotationShadow = annotation.shadowRoot;
    if (!annotationShadow) return false;
    const message = annotationShadow.querySelector('button').getAttribute('data-tippy-content');
    return message.includes(text);
  }, elementId, expectedText);
  return result;
}

/**
 * Check to ensure there's no annotation!
 * @param {class} page Puppeteer: Page provides methods to interact with a single tab.
 * @param {selector} elementId The ID on the test page.
 */
async function noAnnotation(page, elementId) {
  const result = await page.evaluate((id) => {
    const element = document.getElementById(id);
    if (!element) return false;
    const annotation = element.querySelector('sa11y-annotation');
    return !annotation; // Return true if annotation is absent.
  }, elementId);
  return result;
}

/* Unit test suite. */
describe('Sa11y Unit Tests', () => {
  let browser;
  let page;

  before(async () => {
    // Launch headless browser.
    browser = await puppeteer.launch({
      headless: 'new',
      devtools: true,
      args: ['--start-maximized', '--no-sandbox'],
    });
    page = await browser.newPage();

    // Console log messages to terminal.
    page.on('console', (msg) => {
      console.log(`Page Log: ${msg.text()}`);
    });

    // Navigate to unit tests page.
    await page.goto('http://localhost:8080/tests/unit-tests.html');

    // Toggle main toggle.
    await page.evaluate(async () => {
      await new Promise((resolve) => {
        setTimeout(() => {
          const panel = document.querySelector('sa11y-control-panel').shadowRoot;
          const toggle = panel.querySelector('#toggle');
          toggle.click();
          resolve();
        }, 100);
      });
    });
  });

  // Close everything down after running through all tests.
  after(async () => {
    await page.evaluate(() => {
      localStorage.clear();
    });
    await browser.close();
  });

  test('Open status panel', async () => {
    const panelOpen = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const item = panel.getElementById('panel');
      return item.classList.contains('active');
    });
    assert.strictEqual(panelOpen, true, 'Not open.');
  });

  test('Open Page Outline', async () => {
    // Click on the outline toggle.
    const outlinePanelActive = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const toggle = panel.getElementById('outline-toggle');
      toggle.click();

      return new Promise((resolve) => {
        setTimeout(() => {
          const outlinePanel = panel.getElementById('outline-panel');
          const isActive = outlinePanel.classList.contains('active');
          resolve(isActive);
        }, 100);
      });
    });
    assert.strictEqual(outlinePanelActive, true);
  });

  test('Open Settings', async () => {
    // Click on the outline toggle.
    const settingsPanelActive = await page.evaluate(() => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const toggle = panel.getElementById('settings-toggle');
      toggle.click();

      return new Promise((resolve) => {
        setTimeout(() => {
          const settingsPanel = panel.getElementById('settings-panel');
          const isActive = settingsPanel.classList.contains('active');
          resolve(isActive);
        }, 100);
      });
    });
    assert.strictEqual(settingsPanelActive, true);
  });

  /* Toggle all toggleable buttons. Needed for other unit tests! */
  test('Toggle setting buttons', async () => {
    const toggleSettings = await page.evaluate(async () => {
      const panel = document.querySelector('sa11y-control-panel').shadowRoot;
      const settings = [
        'contrast-toggle',
        'labels-toggle',
        'links-advanced-toggle',
        'readability-toggle',
        'theme-toggle',
      ];

      const isActivePromises = settings.map((setting) => {
        const toggle = panel.getElementById(setting);
        toggle.click();

        return new Promise((resolve) => {
          setTimeout(() => {
            const isActive = toggle.getAttribute('aria-pressed') === 'true';
            resolve(isActive);
          }, 100);
        });
      });

      return Promise.all(isActivePromises);
    });

    const allTogglesActive = toggleSettings.every((isActive) => isActive === true);
    assert.ok(allTogglesActive);
  });

  /* Check rulesets */
  test('Empty heading', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-heading', 'Empty heading found!',
    );
    assert.ok(issue);
  });

  test('Skipped heading', async () => {
    const issue = await checkTooltip(
      page, 'error-skipped-heading', 'Non-consecutive heading level used.',
    );
    assert.ok(issue);
  });

  test('Ignored heading should have no annotation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-ignore-this-heading',
    );
    assert.ok(issue);
  });

  test('Heading too long', async () => {
    const issue = await checkTooltip(
      page, 'warning-headings-too-long', 'Heading is long!',
    );
    assert.ok(issue);
  });

  test('Blockquote as heading', async () => {
    const issue = await checkTooltip(
      page, 'warning-blockquote-headings', 'Blockquotes should be used for quotes only.',
    );
    assert.ok(issue);
  });

  test('Blockquote should have no annotation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-blockquote-long-enough',
    );
    assert.ok(issue);
  });

  test('Empty heading contains a decorative image', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-heading-decorative-image', 'Heading has no text, but contains an image.',
    );
    assert.ok(issue);
  });

  test('Heading contains an image with alt text', async () => {
    const issue = await checkTooltip(
      page, 'pass-heading-image-alt', 'Good',
    );
    assert.ok(issue);
  });

  test('<p><b>Bolded text used as heading</b></p>', async () => {
    const issue = await checkTooltip(
      page, 'warning-bold-fake-heading', 'A line of bold or large text might look like a heading',
    );
    assert.ok(issue);
  });

  test('<p><b>Bolded text</b><br> as heading</p>', async () => {
    const issue = await checkTooltip(
      page, 'warning-bold-heading-br', 'A line of bold or large text might look like a heading',
    );
    assert.ok(issue);
  });

  test('No annotation for long bolded sentence', async () => {
    const issue = await noAnnotation(
      page, 'nothing-long-bold-text',
    );
    assert.ok(issue);
  });

  test('Large paragraph text as heading', async () => {
    const issue = await checkTooltip(
      page, 'warning-large-p-heading', 'A line of bold or large text might look like a heading',
    );
    assert.ok(issue);
  });

  test('No annotation for large paragraph with punctuation', async () => {
    const issue = await noAnnotation(
      page, 'nothing-large-p-punctuation',
    );
    assert.ok(issue);
  });

  test('Image has alt text', async () => {
    const issue = await checkTooltip(
      page, 'pass-image-has-alt-text', 'Good',
    );
    assert.ok(issue);
  });

  test('Alt text has suspicious stop word', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-text-has-suspicious-stop-word', 'Assistive technologies already indicate that this is an image',
    );
    assert.ok(issue);
  });

  test('Decorative image', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-is-decorative', 'Image is marked as <strong>decorative</strong>',
    );
    assert.ok(issue);
  });

  test('Decorative image using using empty space', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-is-decorative-using-empty-space', 'Image is marked as <strong>decorative</strong>',
    );
    assert.ok(issue);
  });

  test('Alt text is too long', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-text-is-too-long', 'Alt text description is <strong>too long</strong>',
    );
    assert.ok(issue);
  });

  test('Missing alt text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt-text', 'Missing alt text!',
    );
    assert.ok(issue);
  });

  test('Alt has file extension', async () => {
    const issue = await checkTooltip(
      page, 'error-alt-text-has-file-extension', 'File extension within the alt text found.',
    );
    assert.ok(issue);
  });

  test('Alt has placeholder text', async () => {
    const issue = await checkTooltip(
      page, 'error-alt-text-has-placeholder-text', 'Non-descript or placeholder alt text found.',
    );
    assert.ok(issue);
  });

  test('Linked decorative image with surrounding link text', async () => {
    const issue = await checkTooltip(
      page, 'pass-linked-decorative-image-surrounding-text', 'Image is marked as decorative, although the link is using the surrounding text as a descriptive label.',
    );
    assert.ok(issue);
  });

  test('Linked image with alt text', async () => {
    const issue = await checkTooltip(
      page, 'warning-link-has-alt-text', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    assert.ok(issue);
  });

  test('Linked image has alt text that contains a stop word', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-stop-word', 'Ensure the alt text describes the destination of the link, not a literal description of the image.',
    );
    assert.ok(issue);
  });

  test('Linked image has long alt', async () => {
    const issue = await checkTooltip(
      page, 'warning-link-alt-too-long', 'Alt text description on a linked image is <strong>too long</strong>',
    );
    assert.ok(issue);
  });

  test('Linked image contains both alt and link text', async () => {
    const issue = await checkTooltip(
      page, 'warning-alt-and-link-text', 'Image link contains <strong>both alt text and surrounding link text.</strong>',
    );
    assert.ok(issue);
  });

  test('Linked image missing alt text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt', 'Image is being used as a link but is missing alt text!',
    );
    assert.ok(issue);
  });

  test('Linked decorative image', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-decorative-image', 'Image within link is marked as decorative and there is no link text.',
    );
    assert.ok(issue);
  });

  test('Linked decorative image using empty space', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-decorative-empty-space', 'Image within link is marked as decorative and there is no link text.',
    );
    assert.ok(issue);
  });

  test('Linked image with missing alt and contains link text', async () => {
    const issue = await checkTooltip(
      page, 'error-missing-alt-contains-link-text', 'Image is being used as a link with surrounding text, although the alt attribute should be marked as decorative.',
    );
    assert.ok(issue);
  });

  test('Linked image has alt text containing placeholder stop words', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-alt-placeholder-stopword', 'Non-descript or placeholder alt text within a linked image found.',
    );
    assert.ok(issue);
  });

  test('Linked image has alt text containing file extension', async () => {
    const issue = await checkTooltip(
      page, 'error-linked-alt-file-extension', 'File extension within the alt text found. Ensure the alt text describes the destination of the link, not a literal description of the image.',
    );
    assert.ok(issue);
  });

  test('Figure image with different alt and caption text', async () => {
    const issue = await checkTooltip(
      page, 'pass-figure-different-alt-caption', 'Good',
    );
    assert.ok(issue);
  });

  test('Figure image with alt but without figcaption', async () => {
    const issue = await checkTooltip(
      page, 'pass-figure-without-figcaption', 'Good',
    );
    assert.ok(issue);
  });

  test('Decorative figure image', async () => {
    const issue = await checkTooltip(
      page, 'warning-decorative-figure-element', 'Image is marked as <strong>decorative</strong>',
    );
    assert.ok(issue);
  });

  test('Decorative figure image and figcaption', async () => {
    const issue = await checkTooltip(
      page, 'warning-decorative-figure-element-with-figcaption', '<strong>caption</strong> was provided, the image should also have alt text in most cases',
    );
    assert.ok(issue);
  });

  test('Figure element has duplicate alt and caption text', async () => {
    const issue = await checkTooltip(
      page, 'warning-figure-duplicate-alt-caption', 'Do not use the exact same words for both the alt and caption text',
    );
    assert.ok(issue);
  });

  test('Linked figure with alt but without figcaption', async () => {
    const issue = await checkTooltip(
      page, 'warning-linked-figure-alt-without-figcaption', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    assert.ok(issue);
  });

  test('Linked image opens in new tab', async () => {
    const issue = await checkTooltip(
      page, 'warning-hyperlinked-image-opens-in-new-tab', 'Link opens in a new tab or window without warning.',
    );
    assert.ok(issue);
  });

  test('Linked image opens in new tab, alt text provides warning', async () => {
    const issue = await checkTooltip(
      page, 'warning-linked-image-opens-in-new-tab', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    assert.ok(issue);
  });

  test('Linked image should ignore text within link', async () => {
    const issue = await checkTooltip(
      page, 'warning-image-link-should-ignore-text-within-link', 'Image link contains alt text. Does the alt text describe where the link takes you?',
    );
    assert.ok(issue);
  });

  test('Linked image has aria-hidden, but still focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-hyperlinked-image-aria-hidden-focusable', 'still keyboard focusable.',
    );
    assert.ok(issue);
  });

  test('Image has aria-hidden', async () => {
    const issue = await noAnnotation(
      page, 'nothing-image-has-aria-hidden-true',
    );
    assert.ok(issue);
  });

  test('Linked image has aria-hidden and negative tabindex', async () => {
    const issue = await noAnnotation(
      page, 'nothing-linked-image-aria-hidden-negative-tabindex',
    );
    assert.ok(issue);
  });

  test('Linked image with aria-hidden, negative tabindex, and alt', async () => {
    const issue = await noAnnotation(
      page, 'nothing-hyperlinked-image-aria-hidden-negative-tabindex-alt',
    );
    assert.ok(issue);
  });

  test('Non descript link text', async () => {
    const ids = [
      'error-non-descript-link-1',
      'error-non-descript-link-2',
      'error-non-descript-link-3',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Link text may not be descriptive enough out of context');
      assert.ok(issue);
    });
  });

  test('Descriptive link text', async () => {
    const issue = await noAnnotation(
      page, 'nothing-descriptive-link',
    );
    assert.ok(issue);
  });

  test('Non descript links using exclusions prop', async () => {
    const issue = await checkTooltip(
      page, 'error-non-descript-exclusions-prop', 'Link text may not be descriptive',
    );
    assert.ok(issue);
  });

  test('Non descript link using string match exclusion prop', async () => {
    const issue = await checkTooltip(
      page, 'error-non-descript-string-exclusions-prop', 'Link text may not be descriptive',
    );
    assert.ok(issue);
  });

  test('Empty links', async () => {
    const issue1 = await checkTooltip(page, 'error-empty-1', 'Remove empty links');
    assert.ok(issue1);
    const issue2 = await checkTooltip(page, 'error-empty-2', 'Remove empty links');
    assert.ok(issue2);
    const issue3 = await checkTooltip(page, 'error-empty-3', 'Remove empty links');
    assert.ok(issue3);
    const issue4 = await checkTooltip(page, 'error-empty-4', 'Remove empty links');
    assert.ok(issue4);
  });

  test('Empty icon links', async () => {
    const ids = [
      'error-empty-icon-link-1',
      'error-empty-icon-link-2',
      'error-empty-icon-link-3',
      'error-empty-icon-link-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'icon link');
      assert.ok(issue);
    });
  });

  test('Empty hyperlinks with accessible name via title attribute', async () => {
    const ids = [
      'nothing-link-title-1',
      'nothing-link-title-2',
      'nothing-link-title-3',
      'nothing-link-title-4',
      'nothing-link-title-5',
      'nothing-link-title-6',
      'nothing-link-title-7',
    ];
    ids.forEach(async (id) => {
      const issue = await noAnnotation(page, id);
      assert.ok(issue);
    });
  });

  test('Link text contains warning word', async () => {
    const ids = [
      'warning-link-word-1',
      'warning-link-word-2',
      'warning-link-word-3',
      'warning-link-word-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'places focus on mouse mechanics');
      assert.ok(issue);
    });
  });

  test('Long URLs used as link text', async () => {
    const issue = await checkTooltip(
      page, 'warning-long-url-link-text', 'Longer, less intelligible URLs',
    );
    assert.ok(issue);
  });

  test('Short URLs used as link text', async () => {
    const issue = await noAnnotation(
      page, 'nothing-short-url-link-text',
    );
    assert.ok(issue);
  });

  test('Links that have the same name but different URL', async () => {
    const issue = await checkTooltip(
      page, 'warning-same-name-diff-url-1', 'Link has identical text as another link',
    );

    // Uses ARIA-label
    const issue2 = await checkTooltip(
      page, 'warning-same-name-diff-url-2', 'Link has identical text as another link',
    );
    assert.ok(issue);
    assert.ok(issue2);
  });

  test('Links to DOI', async () => {
    const issue = await checkTooltip(
      page, 'warning-links-to-doi', 'DOI',
    );
    assert.ok(issue);
  });

  test('Links with aria-label', async () => {
    const issue1 = await checkTooltip(page, 'pass-aria-link-1',
      'Learn more about dogs');
    assert.ok(issue1);

    const issue2 = await checkTooltip(page, 'pass-aria-link-2',
      'Learn more about WCAG');
    assert.ok(issue2);

    const issue3 = await checkTooltip(page, 'pass-aria-link-3',
      'Learn more about accessibility &#40;Links externally&#41;');
    assert.ok(issue3);

    const issue4 = await checkTooltip(page, 'pass-aria-link-4',
      'about apples');
    assert.ok(issue4);

    const issue5 = await checkTooltip(page, 'pass-aria-link-5',
      'Learn more about apples and oranges');
    assert.ok(issue5);

    const issue6 = await checkTooltip(page, 'pass-aria-link-6',
      'Learn more about Lord of the Rings and the Return of the King');
    assert.ok(issue6);

    const issue7 = await checkTooltip(page, 'pass-aria-link-7',
      'Learn more about the Return of the King &#40;LOTR&#41;');
    assert.ok(issue7);
  });

  test('Links with aria-hidden, but focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-link-aria-hidden-focusable', 'still keyboard focusable',
    );
    assert.ok(issue);
  });

  test('Links with aria-hidden, unfocusable', async () => {
    const issue = await noAnnotation(
      page, 'nothing-link-aria-hidden-unfocusable',
    );
    assert.ok(issue);
  });

  test('Table without issues', async () => {
    const issue = await noAnnotation(
      page, 'nothing-table',
    );
    assert.ok(issue);
  });

  test('Missing table headers, but focusable', async () => {
    const issue = await checkTooltip(
      page, 'error-table-missing-headers', 'Missing table headers!',
    );
    assert.ok(issue);
  });

  test('Empty table headers', async () => {
    const issue = await checkTooltip(
      page, 'error-empty-table-header', 'Empty table header found!',
    );
    assert.ok(issue);
  });

  test('Table with semantic headings', async () => {
    const issue = await checkTooltip(
      page, 'error-table-has-semantic-headings', 'Semantic headings such as',
    );
    assert.ok(issue);
  });

  test('Table with semantic headings has 3 errors', async () => {
    const issue = await page.evaluate(async () => {
      const semanticTable = document.getElementById('error-table-has-semantic-headings');
      return semanticTable.querySelectorAll('sa11y-annotation').length;
    });
    assert.strictEqual(issue, 3);
  });

  test('PDF link', async () => {
    const issue = await checkTooltip(
      page, 'warning-pdf', 'Unable to check PDFs',
    );
    assert.ok(issue);
  });

  test('PDF link with trialing characters', async () => {
    const issue = await checkTooltip(
      page, 'warning-pdf-trailing-characters', 'Unable to check PDFs',
    );
    assert.ok(issue);
  });

  test('Links to Google Sheet', async () => {
    const issue = await checkTooltip(
      page, 'warning-google-doc', 'Unable to check document',
    );
    assert.ok(issue);
  });

  test('Links to Word document', async () => {
    const issue = await checkTooltip(
      page, 'warning-word-doc', 'Unable to check document',
    );
    assert.ok(issue);
  });

  test('Uppercase text', async () => {
    const ids = [
      'warning-allcaps-1',
      'warning-allcaps-2',
      'warning-allcaps-3',
      'warning-allcaps-4',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Found all caps');
      assert.ok(issue);
    });
  });

  test('Inconsistent all caps (no annotation)', async () => {
    const issue = await noAnnotation(
      page, 'nothing-allcaps',
    );
    assert.ok(issue);
  });

  test('Underlined text', async () => {
    const ids = [
      'warning-underline-1',
      'warning-underline-2',
      'warning-underline-3',
      'warning-underline-4',
      'warning-underline-5',
    ];
    ids.forEach(async (id) => {
      const issue = await checkTooltip(page, id, 'Underlined text can be confused');
      assert.ok(issue);
    });
  });
});
