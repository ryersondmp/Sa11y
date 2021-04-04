//Global defaults. Use commas to seperate classes or elements.
let sa11yCheckRoot = 'body'; //Use "main" for main content.

//Language of Sa11y. Some global variables to help translate.
let sa11yLangCode = 'en', //Language code, e.g. "fr"
    sa11yMainToggleLang = 'Toggle Accessibility Checker',
    sa11yContainerLang = 'Accessibility Checker',
    sa11yErrorLang = 'Error', //Erreur
    sa11yWarningLang = 'Warning', //Attention
    sa11yPassLang = 'Good'; //Bon

//Inclusions and exclusions
// TODO: make these ignores consistent.
let sa11yContainerIgnore = '.sa11y-ignore, #sa11y-container'; //Ignore specific regions.
let sa11yOutlineIgnore = ''; //Exclude headings from outline panel.
let sa11yHeaderIgnore = ''; //Ignore specific headings. E.g. "h1.jumbotron-heading"
let sa11yImageIgnore = ''; //Ignore specific images.
let sa11yLinkIgnore = ''; //Ignore specific links.

// Use variables to avoid spelling mistakes in strings.
const ERROR = 'Error',
    WARNING = 'Warning',
    PASS = 'Pass';
function ButtonInserter(type, content, inline = false) {
    ValidTypes = new Set([ERROR, WARNING, PASS]);
    ButtonLang = {
        [ERROR]: sa11yErrorLang,
        [WARNING]: sa11yWarningLang,
        [PASS]: sa11yPassLang,
    };
    CSSName = {
        [ERROR]: 'error',
        [WARNING]: 'warning',
        [PASS]: 'pass',
    };
    // TODO: Discuss Throwing Errors.
    if (!ValidTypes.has(type)) {
        throw Error;
    }
    return `
        <div class=${inline ? 'sa11y-instance-inline' : 'sa11y-instance'}>
            <button   
            aria-label=${ButtonLang[type]} 
            class="sa11y-btn 
            sa11y-${CSSName[type]}-btn${inline ? '-text' : ''}" 
            data-tippy-content="<div lang='${sa11yLangCode}'>
                <div class='sa11y-header-text'>${ButtonLang[type]}
                </div>
                ${content} 
            </div>
        "> 
        </button>
        </div>
        `;
}
function ErrorBannerInsert(content) {
    return `<div class="sa11y-error-message-container">
        <div class="sa11y-error-message" lang="${sa11yLangCode}">
            ${content}
        </div>
    </div>`;
}

class Sa11y {
    constructor() {
        this.containerIgnore = sa11yContainerIgnore;
        this.outlineIgnore = sa11yOutlineIgnore;
        this.headerIgnore = sa11yHeaderIgnore;
        this.ignore = sa11yImageIgnore;
        this.linkIgnore = sa11yLinkIgnore;

        //Icon on the main toggle. Easy to replace.
        var MainToggleIcon =
            "<svg role='img' focusable='false' width='35px' height='35px' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path fill='#ffffff' d='M256 48c114.953 0 208 93.029 208 208 0 114.953-93.029 208-208 208-114.953 0-208-93.029-208-208 0-114.953 93.029-208 208-208m0-40C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 56C149.961 64 64 149.961 64 256s85.961 192 192 192 192-85.961 192-192S362.039 64 256 64zm0 44c19.882 0 36 16.118 36 36s-16.118 36-36 36-36-16.118-36-36 16.118-36 36-36zm117.741 98.023c-28.712 6.779-55.511 12.748-82.14 15.807.851 101.023 12.306 123.052 25.037 155.621 3.617 9.26-.957 19.698-10.217 23.315-9.261 3.617-19.699-.957-23.316-10.217-8.705-22.308-17.086-40.636-22.261-78.549h-9.686c-5.167 37.851-13.534 56.208-22.262 78.549-3.615 9.255-14.05 13.836-23.315 10.217-9.26-3.617-13.834-14.056-10.217-23.315 12.713-32.541 24.185-54.541 25.037-155.621-26.629-3.058-53.428-9.027-82.141-15.807-8.6-2.031-13.926-10.648-11.895-19.249s10.647-13.926 19.249-11.895c96.686 22.829 124.283 22.783 220.775 0 8.599-2.03 17.218 3.294 19.249 11.895 2.029 8.601-3.297 17.219-11.897 19.249z'/></svg>";

        // TODO: Simplify this
        var sa11ycontainer = document.createElement('div');
        sa11ycontainer.setAttribute('id', 'sa11y-container');
        sa11ycontainer.setAttribute('role', 'region');
        sa11ycontainer.setAttribute('lang', sa11yLangCode);
        sa11ycontainer.setAttribute('aria-label', sa11yContainerLang);
        let loadContrastPreference = localStorage.getItem('sa11y-contrastCheck') === 'On';
        let loadReadabilityPreference = localStorage.getItem('sa11y-readabilityCheck') === 'On';
        sa11ycontainer.innerHTML =

            '<button type="button" aria-expanded="false" id="sa11y-toggle" aria-describedby="sa11y-notification-badge">' + MainToggleIcon + '<span class="sa11y-visually-hidden">' + sa11yMainToggleLang + '</span><div id="sa11y-notification-badge" style="display: none;"><span id="sa11y-notification-count"></span><span class="sa11y-visually-hidden">errors detected.</span></div></button>' +

            //Start of main container.
            '<div id="sa11y-panel">' +
            //Page Outline tab.
            '<div id="sa11y-outline-panel">' +
            '<div id="sa11y-outline-header" class="sa11y-header-text"><span tabindex="-1">Page outline</span></div>' +
            '<div id="sa11y-outline-content">' +
            '<ul id="sa11y-outline-list"></ul>' +
            '</div>' +
            '<div id="sa11y-readability-panel"></div>' +
            '</div>' +

            //Settings tab.
            '<div id="sa11y-settings-panel">' +
            '<div id="sa11y-settings-header" class="sa11y-header-text"><span tabindex="-1">Settings</span></div>' +
            '<div id="sa11y-settings-content">' +
            `<ul id="sa11y-settings-options">  
                <li>
                    <label id="check-contrast" for="sa11y-contrastCheck-toggle">Check contrast</label>
                    <button id="sa11y-contrastCheck-toggle" 
                    aria-labelledby="check-contrast" 
                    class="sa11y-settings-switch" 
                    aria-pressed="${loadContrastPreference ? 'true' : 'false'}">${loadContrastPreference ? 'On' : 'Off'}</button>
                </li>
                <li>
                    <label id="dark-mode" for="sa11y-theme-toggle">Dark mode</label>
                    <button id="sa11y-theme-toggle" aria-labelledby="dark-mode" class="sa11y-settings-switch"></button>
                </li>
                <li>
                    <label id="check-readability" for="sa11y-readabilityCheck-toggle">Readability <span class="sa11y-badge">AAA</span></label>
                    <button id="sa11y-readabilityCheck-toggle" aria-labelledby="check-readability" class="sa11y-settings-switch" 
                    aria-pressed="${loadReadabilityPreference ? 'true' : 'false'}">${loadReadabilityPreference ? 'On' : 'Off'}</button>
                </li>
            </ul>` +
            '</div>' +
            '</div>' +

            //Main panel that conveys state of page.
            '<div id="sa11y-panel-content"><div class="sa11y-panel-icon"></div><div id="sa11y-panel-text"><span id="sa11y-status"></span></div></div>' +

            //Show Outline & Show Settings button.
            '<div id="sa11y-panel-controls"><button type="button" aria-expanded="false" id="sa11y-outline-toggle">Show Outline</button><button type="button" aria-expanded="false" id="sa11y-settings-toggle">Show Settings</button><div aria-hidden="true">&nbsp;&nbsp;</div></div>' +

            //End of main container.
            '</div>';

        $('body').prepend(sa11ycontainer);

        // JQuery
        $(() => {

            //To-do: Figure out what to do with this guy.
            this.loadGlobals();

            //Keeps checker active when navigating between pages until it is toggled off.
            var sa11yToggle = $('#sa11y-toggle');
            sa11yToggle.click(() => {
                if (localStorage.getItem('sa11y-panel') === 'opened') {
                    localStorage.setItem('sa11y-panel', 'closed');
                    sa11yToggle.removeClass('sa11y-on').attr('aria-expanded', 'false');
                    this.reset();
                } else {
                    localStorage.setItem('sa11y-panel', 'opened');
                    sa11yToggle.addClass('sa11y-on').attr('aria-expanded', 'true');
                    this.checkAll();
                }
            });

            //Remember to leave it open
            if (localStorage.getItem('sa11y-panel') === 'opened') {
                sa11yToggle.addClass('sa11y-on').attr('aria-expanded', 'true');
            }

            //Crudely give a little time to load any other content or slow post-rendered JS, iFrames, etc.
            if (sa11yToggle.hasClass('sa11y-on')) {
                sa11yToggle.toggleClass('loading-sa11y');
                sa11yToggle.attr('aria-expanded', 'true');
                setTimeout(this.checkAll, 500);
            }

            $(document).ready(() => {
                // Updates badge counter
                this.checkAll();
                this.reset();
            });

            //Escape key to shutdown.
            $(document).keyup((escape) => {
                if (escape.keyCode == 27 && $('#sa11y-panel').hasClass('sa11y-active')) {
                    tippy.hideAll();
                    sessionStorage.enableSa11y = '';
                    sa11yToggle
                        .attr('aria-expanded', 'false')
                        .removeClass('sa11y-on')
                        .click();
                    this.reset();
                } else {
                    this.onkeyup = null;
                }
            });

            // ----------------------------------------------------------------------
            // Toggle Readability
            // ----------------------------------------------------------------------
            let $sa11yReadabilityCheck = $('#sa11y-readabilityCheck-toggle');
            $sa11yReadabilityCheck.click(() => {
                if (localStorage.getItem('sa11y-readabilityCheck') === 'On') {
                    localStorage.setItem('sa11y-readabilityCheck', 'off');
                    $sa11yReadabilityCheck.text('Off');
                    $sa11yReadabilityCheck.attr('aria-pressed', 'false');
                    $("#sa11y-readability-content").remove();
                } else {
                    localStorage.setItem('sa11y-readabilityCheck', 'On');
                    $sa11yReadabilityCheck.text('On');
                    $sa11yReadabilityCheck.attr('aria-pressed', 'true');
                    this.checkReadability();
                }
            });
            
            // ----------------------------------------------------------------------
            // Toggle Contrast Check
            // ----------------------------------------------------------------------

            let $sa11yContrastCheck = $('#sa11y-contrastCheck-toggle');
            $sa11yContrastCheck.click(() => {
                if (localStorage.getItem('sa11y-contrastCheck') === 'On') {
                    localStorage.setItem('sa11y-contrastCheck', 'off');
                    $sa11yContrastCheck.text('Off');
                    $sa11yContrastCheck.attr('aria-pressed', 'false');
                    this.reset();
                    this.checkAll();
                } else {
                    localStorage.setItem('sa11y-contrastCheck', 'On');
                    $sa11yContrastCheck.text('On');
                    $sa11yContrastCheck.attr('aria-pressed', 'true');
                    this.reset();
                    this.checkAll();
                }
            });

            // ----------------------------------------------------------------------
            // Dark Mode. Credits: https://derekkedziora.com/blog/dark-mode-revisited
            // ----------------------------------------------------------------------
            
            let systemInitiatedDark = window.matchMedia('(prefers-color-scheme: dark)');
            let $sa11yTheme = $('#sa11y-theme-toggle');
            let theme = sessionStorage.getItem('sa11y-theme');
            if (systemInitiatedDark.matches) {
                $sa11yTheme.text('On');
                $sa11yTheme.attr('aria-pressed', 'true');
            } else {
                $sa11yTheme.text('Off');
                $sa11yTheme.attr('aria-pressed', 'false');
            }
            function prefersColorTest(systemInitiatedDark) {
                if (systemInitiatedDark.matches) {
                    $('html').attr('data-sa11y-theme', 'dark');
                    $sa11yTheme.text('On');
                    $sa11yTheme.attr('aria-pressed', 'true');
                    sessionStorage.setItem('sa11y-theme', '');
                } else {
                    $('html').attr('data-sa11y-theme', 'light');
                    $sa11yTheme.text('Off');
                    $sa11yTheme.attr('aria-pressed', 'false');
                    sessionStorage.setItem('sa11y-theme', '');
                }
            }

            systemInitiatedDark.addListener(prefersColorTest);
            $sa11yTheme.click(function () {
                let theme = sessionStorage.getItem('sa11y-theme');
                if (theme === 'dark') {
                    $('html').attr('data-sa11y-theme', 'light');
                    sessionStorage.setItem('sa11y-theme', 'light');
                    $sa11yTheme.text('Off');
                    $sa11yTheme.attr('aria-pressed', 'false');
                } else if (theme === 'light') {
                    $('html').attr('data-sa11y-theme', 'dark');
                    sessionStorage.setItem('sa11y-theme', 'dark');
                    $sa11yTheme.text('On');
                    $sa11yTheme.attr('aria-pressed', 'true');
                } else if (systemInitiatedDark.matches) {
                    $('html').attr('data-sa11y-theme', 'light');
                    sessionStorage.setItem('sa11y-theme', 'light');
                    $sa11yTheme.text('Off');
                    $sa11yTheme.attr('aria-pressed', 'false');
                } else {
                    $('html').attr('data-sa11y-theme', 'dark');
                    sessionStorage.setItem('sa11y-theme', 'dark');
                    $sa11yTheme.text('On');
                    $sa11yTheme.attr('aria-pressed', 'true');
                }
            });
            if (theme === 'dark') {
                $('html').attr('data-sa11y-theme', 'dark');
                sessionStorage.setItem('sa11y-theme', 'dark');
                $sa11yTheme.text('On');
                $sa11yTheme.attr('aria-pressed', 'true');
            } else if (theme === 'light') {
                $('html').attr('data-sa11y-theme', 'light');
                sessionStorage.setItem('sa11y-theme', 'light');
                $sa11yTheme.text('Off');
                $sa11yTheme.attr('aria-pressed', 'false');
            }
        });
    }
    checkAll = async () => {
        this.errorCount = 0;
        this.warningCount = 0;
        this.root = $(sa11yCheckRoot);
        this.findElements();
        this.checkHeaders();
        this.checkLinkText();
        if (localStorage.getItem('sa11y-contrastCheck') === 'On') {
            this.checkContrast();
        }
        this.checkLabels();
        this.checkAltText();
        if (localStorage.getItem('sa11y-readabilityCheck') === 'On') {
            this.checkReadability();
        }
        this.checkQA();

        if (this.panelActive) {
            this.reset();
        } else {
            this.displayPanel();
        }

        let totalCount = this.errorCount + this.warningCount;
        if (totalCount === 0) {
            $('#sa11y-notification-badge').hide();
        } else if (this.warningCount > 0 && this.errorCount === 0) {
            $('#sa11y-notification-badge').show();
            $('#sa11y-notification-badge').addClass("sa11y-notification-badge-warning");
            $('#sa11y-notification-count').html(this.warningCount);
        } else {
            $('#sa11y-notification-badge').show();
            $('#sa11y-notification-count').html(totalCount);
        }

        //Initialize tippy.js
        tippy('.sa11y-btn', {
            interactive: true,
            trigger: 'mouseenter click',
            arrow: true,
            theme: 'sa11y-theme',
            allowHTML: true,
            appendTo: document.body,
        });
    };

    /* Thanks to John Jameson, Princeton University, for loadGlobal and findElements function. */
    loadGlobals = () => {
        // Look for a content container
        if (typeof sa11yCheckRoot !== 'string' || $(sa11yCheckRoot).length === 0) {
            sa11yCheckRoot = 'body';
        }

        // Combine default and custom ignores.
        let separator = ', ';

        // Container ignores apply to self and children.
        if (sa11yContainerIgnore.length > 0) {
            let containerSelectors = sa11yContainerIgnore.split(',');
            for (let i = 0; i < containerSelectors.length; i++) {
                containerSelectors[i] = containerSelectors[i] + ' *, ' + containerSelectors[i];
            }
            sa11yContainerIgnore = '[aria-hidden]' + separator + containerSelectors.join();
        } else {
            sa11yContainerIgnore = '[aria-hidden]';
        }
        this.containerIgnore = sa11yContainerIgnore;

        // Images ignore defaults plus presentation role.
        if (sa11yImageIgnore.length > 1) {
            sa11yImageIgnore += separator;
        }
        this.imageIgnore =
            sa11yImageIgnore + this.containerIgnore + separator + "[role='presentation']";

        this.headerIgnore = sa11yHeaderIgnore;

        // Links ignore defaults plus sa11y links.
        if (sa11yLinkIgnore.length > 0) {
            sa11yLinkIgnore += separator;
        }
        this.linkIgnore = sa11yLinkIgnore + sa11yContainerIgnore + separator + '[aria-hidden]';

        if (sa11yHeaderIgnore.length > 0) {
            this.headerIgnore += separator + sa11yContainerIgnore;
        } else {
            this.headerIgnore = sa11yContainerIgnore;
        }
    };

    //Find and cache.
    findElements = () => {
        let { root, containerIgnore, imageIgnore } = this;
        this.$p = root.find('p').not(containerIgnore);
        this.$h = root
            .find("h1, h2, h3, h4, h5, h6, [role='heading'][aria-level]")
            .not(':hidden')
            .not(containerIgnore);
        this.$mainPandLi = root.find("main p, main li, [role='main'] p, [role='main'] li").not(containerIgnore);
        this.$img = root.find('img').not(imageIgnore);
        this.$iframe = root.find('iframe').not(containerIgnore);
        this.$table = root.find('table').not(containerIgnore);
        this.$contrast = root
            .find('*:visible')
            .not('.sa11y-exclude *')
            .not('#sa11y-container *')
            .not(containerIgnore);
    };
    /*================== HEADING STRUCTURE MODULE ===================*/
    checkHeaders = async () => {
        let prevLevel;
        this.$h.each((i, el) => {
            let $el = $(el);
            let level;

            if ($el.attr('aria-level')) {
                level = +$el.attr('aria-level');
            } else {
                level = +$el[0].tagName.slice(1);
            }

            let headingLength = $el.text().trim().length;
            let error = null;

            if (level - prevLevel > 1 && i !== 0) {
                error = `Non-consecutive heading level used. Headings should never skip levels, or go from 
                    <span class='sa11y-bold'>Heading ${prevLevel}</span> 
                    to 
                    <span class='sa11y-red-text sa11y-bold'>Heading ${level}</span>.`;
            } else if ($el.text().trim().length < 1) {
                error = `Detected empty heading! To fix, delete this line or change its format from <span class='sa11y-red-text sa11y-bold'>Heading ${level}</span> to <span class='sa11y-bold'>Normal</span> or <span class='sa11y-bold'>Paragraph</span>.`;
                $el.addClass('sa11y-error-text');
            } else if ($el.text().trim().length > 170) {
                error = `Heading is too long! Headings are used to organize content and convey structure. They should be brief, clear, informative and unique. Please keep headings less than 160 characters (no more than a sentence).<hr aria-hidden='true' class='sa11y-hr'>Character count: 
                    <span class='sa11y-bold sa11y-red-text'>${headingLength}</span>.`;
            } else if (i === 0 && level !== 1 && level !== 2) {
                error = `First heading on page should usually be a Heading 1 or Heading 2. Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page. Learn more about <a href='https://www.w3.org/WAI/tutorials/page-structure/headings/' target='_blank'>Heading Structure.<span class='sa11y-visually-hidden'> (Opens in new tab)</span></a>`;
            }
            prevLevel = level;

            let li = `<li class='sa11y-outline-${level}'>
                <span class='sa11y-badge'>${level}</span> 
                <span class='sa11y-outline-list-item'>${$el.text()}</span>
            </li>`;

            let liError = `<li class='sa11y-outline-${level}'>
                <span class='sa11y-badge sa11y-error-badge'>
                <span aria-hidden='true'>&#10007;</span>
                <span class='sa11y-visually-hidden'>${sa11yErrorLang}</span> ${level}</span> 
                <span class='sa11y-outline-list-item sa11y-red-text sa11y-bold'>${$el.text()}</span>
            </li>`;

            if ($el.not(sa11yOutlineIgnore).length !== 0) {
                $el.not(sa11yOutlineIgnore).append(
                    `<span class='sa11y-heading-label'>H${level}</span>`,
                );
                if (error != null && $el.closest('a').length > 0) {
                    this.errorCount++;
                    $el.addClass('sa11y-error-heading');
                    $el.closest('a').after(ButtonInserter(ERROR, error, true));
                    $('#sa11y-outline-list').append(liError);
                } else if (error != null) {
                    this.errorCount++;
                    $el.addClass('sa11y-error-heading');
                    $el.before(ButtonInserter(ERROR, error, true));
                    $('#sa11y-outline-list').append(liError);
                } else if (error == null) {
                    $('#sa11y-outline-list').append(li);
                }
            }
        });

        //Check to see there is at least one H1 on the page.
        let $h1 = this.root.find("h1, [role='heading'][aria-level='1']").not(this.containerIgnore);
        if ($h1.length === 0) {
            this.errorCount++;

            //To-do: Make this a little prettier
            $('#sa11y-outline-header').after(
                `<div class='sa11y-instance sa11y-missing-h1'>
                    <span class='sa11y-badge sa11y-error-badge'><span aria-hidden='true'>&#10007;</span><span class='sa11y-visually-hidden'>${sa11yErrorLang}</span></span> 
                    <span class='sa11y-red-text sa11y-bold'>Missing Heading 1!</span>
                </div>`,
            );

            let MissingHeading1Message =
                "Missing Heading 1. Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page. Learn more about <a href='https://www.w3.org/WAI/tutorials/page-structure/headings/' target='_blank'>Heading Structure.<span class='sa11y-visually-hidden'> (Opens in new tab)</span></a>";
            $('#sa11y-container').after(ErrorBannerInsert(MissingHeading1Message));
        }
    };

    /*====================== LINK TEXT MODULE =======================*/
    checkLinkText = function () {
        /* Mini function if you need to exclude any text contained with a span. We created this function to ignore automatically appended sr-only text for external links and document filetypes.

        $.fn.ignore = function(sel){
        return this.clone().find(sel||">*").remove().end();
        };

    
        Example: If you need to ignore any text within <span class="sr-only">test</span>.
        $el.ignore("span.sr-only").text().trim(); */

        let containsLongUrl = function(textContent) {
            let urlText = [
                "http",
                ".asp",
                ".htm",
                ".php",
                ".edu/",
                ".com/"
            ];

            var hit = null;
            $.each(urlText, function (index, word) {
                if (textContent.toLowerCase().indexOf(word) >= 0) {
                    hit = word;
                    return false;
                }
            });
            return hit;
        }

        /* Checks if text is not descriptive and returns the word(s) that are making the text inaccessible. stopWords will always flag an issue if contained in a hyperlink. partialStopWords will only be flagged as an issue if it's the only hyperlink text. */
        let containsLinkTextStopWords = function (textContent) {
            let stopWords = [
                "click here",
                "< ",
                " >"
            ];

            let partialStopWords = [
                "click",
                "click here to learn more",
                "check out",
                "download",
                "download here",
                "find out",
                "find out more",
                "form",
                "here",
                "info",
                "information",
                "link",
                "learn",
                "learn more",
                "learn to",
                "more",
                "page",
                "paper",
                "read more",
                "read",
                "read this",
                "this",
                "this page",
                "this website",
                "view",
                "view our",
                "website",
                ".",
                ",",
                ":"
            ];

            var hit = null;

            // First check for show stoppers.
            $.each(stopWords, function (index, word) {
                if (textContent.toLowerCase().indexOf(word) >= 0) {
                    hit = word;
                    return false;
                }
            });

            // If no partial words were found, then check for total words.
            if (hit == null) {
                $.each(partialStopWords, function (index, word) {
                    if (
                        textContent.length === word.length &&
                        textContent.toLowerCase().indexOf(word) >= 0
                    ) {
                        hit = word;
                        return false;
                    }
                });
            }
            return hit;
        };
        let $links = this.root.find('a[href]').not(this.linkIgnore);

        $links.each((i, el) => {
            let $el = $(el);
            var linkText = $el.text();
            var hasAriaLabelledBy = $el.attr('aria-labelledby');
            var hasAriaLabel = $el.attr('aria-label');
            var hasAriaHidden = $el.attr('aria-hidden');
            var hasTabIndex = $el.attr('tabindex');
            var error = containsLinkTextStopWords($el.text().trim());
            var errorURL = containsLongUrl($el.text().trim());

            if (
                $el.children().length == 0 &&
                $el.attr('href') !== undefined &&
                $el.text().length == 0 &&
                $el.is(':visible')
            ) {
                this.errorCount++;
                let LinkErrorMessage = 'Remove empty hyperlinks without any text.';
                $el.addClass('sa11y-error-text');
                $el.after(ButtonInserter(ERROR, LinkErrorMessage, true));
            } 
            
            else if (error != null) {
                if (hasAriaLabelledBy != null) {
                    var acclinkname = document.getElementById(hasAriaLabelledBy).textContent;
                    var LinkHasAriaLabelledbyMessage = `The descriptive label for this link is:
                        <span class='sa11y-bold'> ${linkText} ${acclinkname}</span>`;
                    $el.after(ButtonInserter(PASS, LinkHasAriaLabelledbyMessage, true));
                } else if (hasAriaLabel != null) {
                    let LinkHasAriaLabelMessage = `The descriptive label for this link is: <span class='sa11y-bold'>${hasAriaLabel} </span>`;
                    $el.after(ButtonInserter(PASS, LinkHasAriaLabelMessage, true));
                } else if (hasAriaHidden == 'true' && hasTabIndex == '-1') {
                    //do nothing.
                } else {
                    this.errorCount++;
                    $el.addClass('sa11y-error-text');
                    let StopWordMessage = `Link text may not be descriptive enough out of context: <span class='sa11y-red-text sa11y-bold'>${error}</span><hr aria-hidden='true' class='sa11y-hr'><span class='sa11y-bold'>Tip!</span> Link text should always be clear, unique, and meaningful. Avoid common words like &quot;click here&quot; or &quot;learn more&quot;.`;
                    $el.after(ButtonInserter(ERROR, StopWordMessage, true));
                }
            }

            else if (errorURL != null && linkText.length > 40) {
                this.warningCount++;
                $el.addClass('sa11y-warning-text');
                let LinkStopWordMessage = "Longer, less intelligible URLs used as link text might  be difficult to listen to with assistive technology. In most cases, it is better to use human-readable text instead of the URL. Short URLs (such as a site's homepage) are okay.<hr aria-hidden='true' class='sa11y-hr'><span class='sa11y-bold'>Tip!</span> Link text should always be clear, unique, and meaningful so it could be understood out of context.";
                $el.after(ButtonInserter(WARNING, LinkStopWordMessage, true));
            } 

        });
    };

    /*====================== CONTRAST MODULE =======================*/
    checkContrast = () => {
        var contrastErrors = {
            errors: [],
            warnings: [],
        };
        var contrast = {
            // Parse rgb(r, g, b) and rgba(r, g, b, a) strings into an array.
            // Adapted from https://github.com/gka/chroma.js
            parseRgb: (css) => {
                var i, m, rgb, _i, _j;
                if ((m = css.match(/rgb\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*\)/))) {
                    rgb = m.slice(1, 4);
                    for (i = _i = 0; _i <= 2; i = ++_i) {
                        rgb[i] = +rgb[i];
                    }
                    rgb[3] = 1;
                } else if (
                    (m = css.match(
                        /rgba\(\s*(\-?\d+),\s*(\-?\d+)\s*,\s*(\-?\d+)\s*,\s*([01]|[01]?\.\d+)\)/,
                    ))
                ) {
                    rgb = m.slice(1, 5);
                    for (i = _j = 0; _j <= 3; i = ++_j) {
                        rgb[i] = +rgb[i];
                    }
                }
                return rgb;
            },
            // Based on http://www.w3.org/TR/WCAG20/#relativeluminancedef
            relativeLuminance: function (c) {
                var lum = [];
                for (var i = 0; i < 3; i++) {
                    var v = c[i] / 255;
                    lum.push(v < 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
                }
                return 0.2126 * lum[0] + 0.7152 * lum[1] + 0.0722 * lum[2];
            },
            // Based on http://www.w3.org/TR/WCAG20/#contrast-ratiodef
            contrastRatio: function (x, y) {
                var l1 = contrast.relativeLuminance(contrast.parseRgb(x));
                var l2 = contrast.relativeLuminance(contrast.parseRgb(y));
                return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
            },
            // Based on http://jsfiddle.net/Y4uDL/
            getBackground: function (el) {
                var bgColor = el.css('background-color');
                var bgImage = el.css('background-image');

                if (
                    bgColor !== 'rgba(0, 0, 0, 0)' &&
                    bgColor !== 'transparent' &&
                    bgImage === 'none'
                ) {
                    return bgColor;
                } else if (bgImage !== 'none') {
                    return 'image';
                }

                if (el.is('html')) {
                    return 'rgb(255, 255, 255)';
                } else {
                    return contrast.getBackground(el.parent());
                }
            },
            check: () => {
                this.$contrast.each(function () {
                    var $this = $(this);
                    var color = $this.css('color');
                    var background = contrast.getBackground($this);
                    var htmlTag = $this[0].tagName;
                    var textCheck = $this.clone().children().remove().end().text();
                    var ratingString;
                    var fontSizeString;
                    var failed;

                    if (htmlTag === 'SVG') {
                        var fill = $this.css('fill');
                        var ratio =
                            Math.round(contrast.contrastRatio(fill, background) * 100) / 100;
                        var ratioText = ratio + ':1';
                        if (ratio < 3) {
                            failed = true;
                            fontSizeString = 'svg fill';
                            ratingString = 'fail';
                        }
                    } else if (
                        $.trim(textCheck).length ||
                        htmlTag === 'INPUT' ||
                        htmlTag === 'SELECT' ||
                        htmlTag === 'TEXTAREA'
                    ) {
                        // Background image needs to be manually reviewed
                        if (background === 'image') {
                            var ratioText = 'unknown';
                            ratingString = 'Needs manual review';
                            fontSizeString = 'N/A';
                            failed = true;
                        } else {
                            var ratio =
                                    Math.round(contrast.contrastRatio(color, background) * 100) /
                                    100,
                                ratioText = ratio + ':1',
                                fontSize = parseInt($this.css('fontSize')),
                                fontWeight = $this.css('fontWeight');

                            /* Unscientific condition of ignoring visually hidden screen reader text. If width and height of element is less than 1px and overflow is set to hidden, do not run contrast check on it...*/
                            if (
                                ($this.width() <= 1 || $this.height() <= 1) &&
                                $this.css('overflow') == 'hidden'
                            ) {
                            } else if (fontSize >= 18 || (fontSize >= 14 && fontWeight >= 700)) {
                                fontSizeString = 'Large scale text';
                                if (ratio < 3) {
                                    ratingString = 'fail';
                                    failed = true;
                                } else {
                                    ratingString = 'pass';
                                    failed = false;
                                }
                            } else {
                                fontSizeString = 'Normal scale body text';
                                if (ratio < 4.5) {
                                    ratingString = 'fail';
                                    failed = true;
                                } else {
                                    ratingString = 'pass';
                                    failed = false;
                                }
                            }
                        }
                    }

                    // highlight the element in the DOM and log the element, contrast ratio and failure for testing in console
                    if (failed) {
                        var error = {};
                        error = {
                            name: $this,
                            ratio: ratioText,
                            detail: fontSizeString,
                            status: ratingString,
                        };
                        if (ratingString === 'fail') {
                            contrastErrors.errors.push(error);
                        } else if (ratingString === 'Needs manual review') {
                            contrastErrors.warnings.push(error);
                        }
                    }
                });

                return contrastErrors;
            },
        };

        contrast.check();
        $.each(contrastErrors.errors, (index, item) => {
            var name = item.name;
            var cdetail = item.detail;
            var cratio = item.ratio;
            var nodename = name[0].nodeName;
            var nodetext = name[0].textContent;
            this.errorCount++;
            let ContrastErrorMessage = `${cdetail} does not have enough contrast with the background. 
            The contrast ratio should be at least 4.5:1 for normal text and 3:1 for large text. <hr class='sa11y-hr' aria-hidden='true'> 
            The contrast ratio is <span class='sa11y-red-text sa11y-bold'> ${cratio}</span> for the following text: 
            <span class='sa11y-bold sa11y-red-text'>${nodetext} </span>`;
            $(name).before(ButtonInserter(ERROR, ContrastErrorMessage, true));
        });

        $.each(contrastErrors.warnings, (index, item) => {
            var name = item.name;
            var nodetext = name[0].textContent;
            this.warningCount++;
            let ContrastWarningMessage = `The contrast of this text is unknown and needs to be manually reviewed. Ensure the text and the background have strong contrasting colours. The contrast ratio should be at least 4.5:1 for normal text and 3:1 for large text. <hr class='sa11y-hr' aria-hidden='true'>Please review contrast of the following text:<br> <span class='sa11y-bold'>  ${nodetext} </span>`;
            $(name)
                .addClass('sa11y-warning-border')
                .before(ButtonInserter(WARNING, ContrastWarningMessage, true));
        });
    };

    /*======================== INPUTS MODULE =======================*/
    checkLabels = () => {
        let $inputs = this.root.find('input').not(this.containerIgnore).not('input:hidden');
        $inputs.each((i, el) => {
            let $el = $(el);

            if (!$el.attr('id') && !$el.attr('aria-label') && !$el.attr('aria-labelledby')) {
                this.errorCount++;
                $el.addClass('sa11y-error-border');
                let MissingLabelMessage =
                    "There is no label associated with this input. Please add an <span class='sa11y-kbd'>id</span> to this input, and add a matching <span class='sa11y-kbd'>for</span> attribute to the label.";
                $el.after(ButtonInserter(ERROR, MissingLabelMessage, true));
            } else if ($el.attr('aria-label')) {
                this.warningCount++;
                $el.addClass("sa11y-warning-border");
                let AriaLabelInputMessage = "Detected an <span class='sa11y-kbd'>aria-label</span> with this input, although make sure there is a visible label too."
                $el.after(ButtonInserter(WARNING, AriaLabelInputMessage, true));
            } else if ($el.prev().is("label")) {
                let label = $el.prev();
                if (label.attr("for") == $el.attr("id")) {
                    /* Optional: add pass border. */
                } else {
                    this.errorCount++;
                    $el.addClass("sa11y-error-border");
                    let NoForAttributeMessage = `There is no label associated with this input. Add a <span class='sa11y-kbd'>for</span> attribute to the label that matches the <span class='sa11y-kbd'>id</span> of this input. <hr class='sa11y-hr' aria-hidden='true'> The ID for this input is: <span class='sa11y-bold'>id=&#34;${$el.attr(
                        'id',
                    )}&#34;</span>`;
                    $el.after(ButtonInserter(ERROR, NoForAttributeMessage, true));
                }
            }
        });
    };

    /*================== ALTERNATIVE TEXT MODULE ====================*/
    checkAltText = () => {
        
        this.containsAltTextStopWords = function (alt) {
            let altUrl = [
                ".png", 
                ".jpg", 
                ".jpeg", 
                ".gif",
                ".tiff"
            ];
            let susWords = [
                "image of", 
                "graphic of", 
                "picture of", 
                "placeholder",
                "photo of"
            ];
            let hit = [null, null];
            $.each(altUrl, function (index, word) {
              if (alt.toLowerCase().indexOf(word) >= 0) {
                hit[0] = word;
              }
            });
            $.each(susWords, function (index, word) {
              if (alt.toLowerCase().indexOf(word) >= 0) {
                hit[1] = word;
              }
            });
            return hit;
          };
        let sanitizeForHTML = (string) => {
            let entityMap = {
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                '"': '&quot;',
                "'": '&#39;',
                '/': '&#x2F;',
                '`': '&#x60;',
                '=': '&#x3D;',
            };
            return String(string).replace(/[&<>"'`=\/]/g, function (s) {
                return entityMap[s];
            });
        };
        // Test each image for alternative text.
        this.$img.each((i, el) => {
            let $el = $(el);
            let alt = $el.attr('alt');

            if (alt == undefined) {
                this.errorCount++;

                // Image fails if it is used as a link and is missing an alt attribute.
                if ($el.parents().is('a[href]')) {
                    //Image contains both hyperlink
                    if ($el.parents('a').text().trim().length > 1) {
                        $el.addClass('sa11y-error-border');
                        let MissingAltLinkButHasTextMessage =
                            'Image is being used as a hyperlink with surrounding text, although the alt attribute should be marked as decorative or null.';
                        $el.closest('a').before(
                            ButtonInserter(ERROR, MissingAltLinkButHasTextMessage),
                        );
                    } else if ($el.parents('a').text().trim().length == 0) {
                        $el.addClass('sa11y-error-border');
                        let MissingAltLinkMessage =
                            'Image is being used as a hyperlink but is missing alt text! Please ensure alt text describes where the link takes you.';
                        $el.closest('a').before(ButtonInserter(ERROR, MissingAltLinkMessage));
                    }
                }
                // General failure message if image is missing alt.
                else {
                    $el.addClass('sa11y-error-border');
                    let MissingAltMessage =
                        'Missing alt text! If the image conveys a story, a mood or important information - be sure to describe the image.';
                    $el.before(ButtonInserter(ERROR, MissingAltMessage));
                }
            }

            // If alt attribute is present, further tests are done.
            else {
                let altText = sanitizeForHTML(alt); //Prevent tooltip from breaking.
                let error = this.containsAltTextStopWords(altText);
                let altLength = alt.length;

                // Image fails if a stop word was found.
                if (error[0] != null && $el.parents().is('a[href]')) {
                    this.errorCount++;
                    $el.addClass('sa11y-error-border');
                    let LinkImageBadAltMessage = `Detected file extension within alt text. Ensure the alt text describes destination of link, not a literal description of the picture. Remove: <span class='sa11y-red-text sa11y-bold'>${error[0]}</span>. <hr aria-hidden='true' class='sa11y-hr'> The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`;
                    $el.closest('a').before(ButtonInserter(ERROR, LinkImageBadAltMessage));
                } else if (error[1] != null && $el.parents().is('a[href]')) {
                    this.warningCount++;
                    $el.addClass('sa11y-warning-border');
                    let LinkImageSusAltMessage = `Detected redundant alt text. Ensure the alt text describes destination of link, not a literal description of the picture. 
                        Consider removing word: <span class='sa11y-red-text sa11y-bold'>${error[1]}</span>. 
                        <hr aria-hidden='true' class='sa11y-hr'> 
                        The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`;
                    $el.closest('a').before(ButtonInserter(WARNING, LinkImageSusAltMessage));
                } else if (error[0] != null) {
                    this.errorCount++;
                    $el.addClass('sa11y-error-border');
                    let AltHasBadWordMessage = `Detected file extension within alt text. If the image conveys a story, a mood or important information - be sure to describe the image. 
                        Remove: <span class='sa11y-red-text sa11y-bold'>${error[0]}</span>. 
                        <hr aria-hidden='true' class='sa11y-hr'> 
                        The alt text for this image is: <span class='sa11y-bold'>${altText} </span>`;
                    $el.before(ButtonInserter(ERROR, AltHasBadWordMessage));
                } else if (error[1] != null) {
                    this.warningCount++;
                    $el.addClass('sa11y-warning-border');
                    let AltHasSusWordMessage = `Detected redundant alt text. It is not necessary to include words like <em>image</em>, <em>graphic</em> or the file extension. 
                        Consider removing the word: <span class='sa11y-red-text sa11y-bold'>${error[1]}</span>. 
                        <hr aria-hidden='true' class='sa11y-hr'> 
                        The alt text for this image is: <span class='sa11y-bold'>${altText} </span>`;
                    $el.before(ButtonInserter(WARNING, AltHasSusWordMessage));
                }else if (alt == '' && $el.parents().is('a[href]')) {
                    if ($el.parents('a').text().trim().length == 0) {
                        this.errorCount++;
                        $el.addClass('sa11y-error-border');
                        let ImageLinkNullAltNoTextMessage =
                            'Image within hyperlink is marked as decorative and there is no link text. Please add alt text to image that describes destination of link.';
                        $el.closest('a').before(
                            ButtonInserter(ERROR, ImageLinkNullAltNoTextMessage),
                        );
                    } else {
                        let LinkHasAltMessage =
                            'Image is marked as decorative, although the hyperlink is using the surrounding text as a descriptive label.';
                        $el.closest('a').before(ButtonInserter(PASS, LinkHasAltMessage));
                    }
                }

                //Decorative alt and not a link.
                else if (alt == '' && $el.parents().not('a[href]')) {
                    let DecorativeMessage =
                        "Image marked as <span class='sa11y-bold'>decorative.</span> However, if the image conveys a story, a mood or important information - be sure to add alt text.";
                    $el.before(ButtonInserter(PASS, DecorativeMessage));
                }

                //Link and contains alt text.
                else if (alt.length > 160 && $el.parents().is('a')) {
                    this.errorCount++;
                    $el.addClass('sa11y-error-border');
                    let HyperlinkAltLengthMessage = `Alt text description on hyperlinked image is <span class='sa11y-bold'>too long</span>. 
                        The alt text on hyperlinked images should describe where the link takes you, not a literal description of the image. 
                        <span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span> 
                        <hr aria-hidden='true' class='sa11y-hr'> 
                        The alt text is <span class='sa11y-red-text sa11y-bold'>${altLength}</span> characters: 
                        <span class='sa11y-red-text sa11y-bold'>${altText}</span>`;
                    $el.closest('a').before(ButtonInserter(ERROR, HyperlinkAltLengthMessage));
                }

                //Link and contains an alt text.
                else if (
                    alt != '' &&
                    $el.parents().is('a') &&
                    $el.parents('a').text().trim().length == 0
                ) {
                    this.warningCount++;
                    $el.addClass('sa11y-warning-border');
                    let ImageLinkAltTextMessage = `Image link contains alt text, although please ensure alt text describes the destination page. 
                        <span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span>
                        Does the alt text describe where the link takes you? 
                        <hr aria-hidden='true' class='sa11y-hr'>
                        Alt text: <span class='sa11y-bold'>${altText} </span>`;
                    $el.closest('a').before(ButtonInserter(WARNING, ImageLinkAltTextMessage));
                }

                //Contains alt text & surrounding link text.
                else if (
                    alt != '' &&
                    $el.parents().is('a') &&
                    $el.parents('a').text().trim().length > 1
                ) {
                    this.warningCount++;
                    $el.addClass('sa11y-warning-border');
                    let AnchorLinkAndAltMessage = `Image link contains <span class='sa11y-bold'>both alt text and surrounding link text.</span> If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative or null - the surrounding link text should suffice. <hr aria-hidden='true' class='sa11y-hr'>
                        Alt text: <span class='sa11y-bold'>${altText}</span>`;
                    $el.closest('a').before(ButtonInserter(WARNING, AnchorLinkAndAltMessage));
                } else if (alt.length > 160) {
                    this.warningCount++;
                    $el.addClass('sa11y-warning-border');
                    let AltTooLongMessage = `Alt text description is <span class='sa11y-bold'>too long</span>. Alt text should be concise, yet meaningful like a <em>tweet</em> (around 100 characters). 
                    If this is a complex image or a graph, consider putting the long description of the image in text below or in an accordion component. 
                    <hr aria-hidden='true' class='sa11y-hr'> 
                    The alt text is <span class='sa11y-red-text sa11y-bold'> ${altLength}</span> characters: 
                    <span class='sa11y-red-text sa11y-bold'>${altText}</span>`;
                    $el.before(ButtonInserter(WARNING, AltTooLongMessage));
                } else if (alt != '') {
                    let PassAltMessage = `The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`;
                    $el.before(ButtonInserter(PASS, PassAltMessage));
                }
            }
        });
    };

    /*====================== READABILITY MODULE =======================*/
    checkReadability = () => {

         //Crude hack to add a period to the end of list items to make a complete sentence.
         $('main li, [role="main"] li').each(function() {
            var endOfList = $(this), listText = endOfList.text();
            if (listText.charAt(listText.length-1) !== '.') {
                $('main li, [role="main"] li').append('<span class="sa11y-readability-period sa11y-visually-hidden">.</span>');
            }
        });

        function number_of_syllables(wordCheck) {
            wordCheck = wordCheck.toLowerCase().replace('.','').replace('\n','');
            if(wordCheck.length <= 3) {
                return 1;
            }
            wordCheck = wordCheck.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
            wordCheck = wordCheck.replace(/^y/, '');
            var syllable_string = wordCheck.match(/[aeiouy]{1,2}/g);
  
            if(!!syllable_string){
                var syllables = syllable_string.length;
            } else{
                syllables=0;
            }
            return syllables;
        }
  
        let paragraphtext = this.$mainPandLi.not("blockquote").text();
  
        var words_raw = paragraphtext.replace(/[.!?-]+/g,' ').split(' ');
        var words = 0;
        for (var i = 0; i < words_raw.length; i++) {
            if(words_raw[i]!=0){
                words = words + 1;
            }
        }
  
        var sentences_raw = paragraphtext.split(/[.!?]+/);
        var sentences = 0;
        for (var i = 0; i < sentences_raw.length; i++) {
            if(sentences_raw[i]!=''){
                sentences = sentences + 1;
            }
        }
  
        var total_syllables = 0;
        var syllables1 = 0;
        var syllables2 = 0;
        for (var i = 0; i < words_raw.length; i++) {
            if(words_raw[i]!=0){
                var syllable_count = number_of_syllables(words_raw[i]);
                if(syllable_count==1){
                    syllables1 = syllables1 + 1;
                }
                if(syllable_count==2){
                    syllables2 = syllables2 + 1;
                }
                total_syllables = total_syllables + syllable_count;
            }
        }
  
        var characters = paragraphtext.replace(/[.!?|\s]+/g,'').length;
        var pollysyllables = (words-(syllables1+syllables2));
        var flesch_reading_ease = 206.835 - (1.015 * words/sentences) - (84.6 * total_syllables/words)
  
        if(flesch_reading_ease > 100){
            flesch_reading_ease = 100;
        } else if(flesch_reading_ease < 0) {
            flesch_reading_ease = 0;
        }
  
        var flesch_kincaid_grade_level = (0.39 * words/sentences) + (11.8 * total_syllables/words) - 15.9;
        var gunning_fog_index = (words/sentences + 100*(pollysyllables/words)) * 0.4;
        var automated_readability_index = 4.71 * (characters/words) + 0.5 * (words/sentences) - 21.43;
        var smog = 1.0430 * Math.sqrt(pollysyllables*30/sentences) + 3.1291
        var coleman_liau = 0.0588 * (100*characters/words) - 0.296 * (100*sentences/words) - 15.8;
        var scoreMsg ='';
  
        scoreMsg = scoreMsg + '[Detailed] Readability score of main content area. Please note text within a list is ignored.'
        scoreMsg = scoreMsg + '\n\n';
        scoreMsg = scoreMsg + 'Flesch Reading Ease: ' + flesch_reading_ease.toFixed(1);
        scoreMsg = scoreMsg + '\nWCAG 2.0 Level AAA requires 60 or greater.'
        scoreMsg = scoreMsg + '\n\n';
        scoreMsg = scoreMsg + 'Grade Level Average: ' + ((flesch_kincaid_grade_level + gunning_fog_index + automated_readability_index + coleman_liau + (sentences>=30?smog:0))/(sentences>=30?5:4)).toFixed(1);
        scoreMsg = scoreMsg + '\n\n';
        scoreMsg = scoreMsg + '(Flesch-Kincaid): ' + flesch_kincaid_grade_level.toFixed(1);
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + '(Gunning-Fog): ' + gunning_fog_index.toFixed(1);
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + '(Automated Readability): ' + automated_readability_index.toFixed(1);
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + '(Colemane-Liau): ' + coleman_liau.toFixed(1);
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + (sentences>=30?'(SMOG): ' + smog.toFixed(1) + '\n\n':'');
        scoreMsg = scoreMsg + 'WCAG 2.0 Level AAA requires grade 9 or lower.';
        scoreMsg = scoreMsg + '\n\n';
        scoreMsg = scoreMsg + 'Words: ' + words;
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + 'Complex Words: ' + Math.round(100*((words-(syllables1+syllables2))/words)) +'%';
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + 'Sentences: ' + sentences;
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + 'Words Per Sentence: ' + (words/sentences).toFixed(1);
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + 'Syllables: ' + total_syllables;
        scoreMsg = scoreMsg + '\n';
        scoreMsg = scoreMsg + 'Characters: ' + characters;
        console.log(scoreMsg);

        let readingDifficulty = "";
        let readabilityDetails = "";
        let notEnoughContent = "";

             if (words > 30) {
                var fleschScore = flesch_reading_ease.toFixed(1);
                var avgWordsPerSentence = (words/sentences).toFixed(1);
                
                //WCAG AAA pass if greater than 60
                if (fleschScore >= 0 && fleschScore < 30) {
                    readingDifficulty = '<span class="sa11y-readability-score">Very difficult</span>';
                } else if (fleschScore > 31 && fleschScore < 49) {
                    readingDifficulty = '<span class="sa11y-readability-score">Difficult</span>';
                } else if (fleschScore > 50 && fleschScore < 60) {
                    readingDifficulty = '<span class="sa11y-readability-score">Fairly difficult</span>';
                } else {
                    readingDifficulty = '<span class="sa11y-readability-score">Good</span>';
                } 

                readabilityDetails = `
                <ul id="sa11y-readability-details">
                    <li><span class='sa11y-bold'>Average words per sentence:</span> ` + avgWordsPerSentence + `</li>
                    <li><span class='sa11y-bold'>Complex words:</span> ` + Math.round(100*((words-(syllables1+syllables2))/words)) + `%</li>
                    <li><span class='sa11y-bold'>Words:</span> ` + words + `</li>
                </ul>`

            } else if (this.$mainPandLi.length === 0) {
                fleschScore = "";
                readingDifficulty = "";
                readabilityDetails = "";
                notEnoughContent = 'Please identify the <a href="https://www.w3.org/WAI/tutorials/page-structure/regions/#main-content" target="_blank">main content region to calculate readability. <span class="sa11y-visually-hidden">(opens new tab)</span></a>';
            } else {
                fleschScore = "";
                readingDifficulty = "";
                readabilityDetails = "";
                notEnoughContent = "Not enough content to calculate readability score.";
            } 

            let sa11yReadabilityPanel = document.createElement('div');
            sa11yReadabilityPanel.setAttribute('id', 'sa11y-readability-content');
            sa11yReadabilityPanel.innerHTML = `
                <span class="sa11y-header-text">Readability</span>
                <div class="sa11y-readability-level">${fleschScore} ${readingDifficulty}</div> ${readabilityDetails} ${notEnoughContent}
                `;
            $("#sa11y-readability-panel").prepend(sa11yReadabilityPanel);
    }
    /*====================== QUALITY ASSURANCE MODULE =======================*/
    checkQA = () => {
        var $videos = this.root
            .find(
                "video, iframe[src*='youtube.com'], iframe[src*='vimeo.com'], iframe[src*='yuja.com'], iframe[src*='panopto.com']",
            )
            .not(this.containerIgnore);
        $videos.each((i, el) => {
            let $el = $(el);
            this.warningCount++;
            $videos.addClass('sa11y-warning-border');
            let VideoMessage =
                "Please ensure <span class='sa11y-bold'>all videos have closed captioning.</span> Providing captions for all audio and video content is a mandatory Level A requirement. Captions are meant to support people who are D/deaf or hard-of-hearing.";
            $videos.first().before(ButtonInserter(WARNING, VideoMessage));
        });

        let $audio = this.root
            .find(
                "audio, iframe[src*='soundcloud.com'], iframe[src*='simplecast.com'], iframe[src*='podbean.com'], iframe[src*='buzzsprout.com'], iframe[src*='blubrry.com'], iframe[src*='transistor.fm'], iframe[src*='fusebox.fm'], iframe[src*='libsyn.com']",
            )
            .not(this.containerIgnore);
        $audio.each((i, el) => {
            let $el = $(el);
            this.warningCount++;
            $audio.addClass('sa11y-warning-border');
            let AudioMessage =
                "Please ensure to provide a <span class='sa11y-bold'>transcript for all podcasts.</span> Providing transcripts for audio content is a mandatory Level A requirement. Transcripts are meant to support people who are D/deaf or hard-of-hearing, but can benefit everyone. Consider placing the transcript below or within an accordion panel.";
            $audio.first().before(ButtonInserter(WARNING, AudioMessage));
        });

        let $dataviz = this.root
            .find("iframe[src*='datastudio.google.com'], iframe[src*='tableau']")
            .not(this.containerIgnore);
        $dataviz.each((i, el) => {
            let $el = $(el);
            this.warningCount++;
            $dataviz.addClass('sa11y-warning-border');
            let DataVizMessage =
                "Data visualization widgets like this are often problematic for people who use a keyboard or screen reader to navigate, and can present significant difficulties for people with low vision or colorblindness. It's recommended to provide the same information in an alternative (text or table) format below the widget.";
            $dataviz.first().before(ButtonInserter(WARNING, DataVizMessage));
        });

        let $twitterWarning = this.root.find('[id^=twitter-widget]').not(this.containerIgnore);
        $twitterWarning.each((i, el) => {
            let $el = $(el);
            var numberofTweets = $el.contents().find('.timeline-TweetList-tweet').length;
            if (numberofTweets > 3) {
                this.warningCount++;
                $el.addClass('sa11y-warning-text');
                let TwitterMessage =
                    "The default Twitter timeline may cause accessibility issues for keyboard users. Secondly, the inline scrolling of the Twitter timeline may cause usability issues for mobile. It's recommended to add the following data attributes to the embed code. <hr aria-hidden='true' class='sa11y-hr'><span class='sa11y-bold'>It's recommended to:</span><ul><li>Add <span class='sa11y-kbd'>data-tweet-limit=&#34;2&#34;</span> to limit the amount of tweets.</li><li>Add <span class='sa11y-kbd'>data-chrome=&#34;nofooter noheader&#34;</span> to remove the widget's header and footer.</li></ul>";
                $el.before(ButtonInserter(WARNING, TwitterMessage));
            }
        });

        // Warn users of TARGET BLANK within main content.
        let $linksTargetBlank = this.root
            .find("a[target='_blank']")
            .not(this.linkIgnore)
            .not("a[href$='.pdf']")
            .not("a[href$='.docx']")
            .not('#sa11y-container a')
            .not('.sa11y-exclude');

        //To-do: Adam to improve verbiage. Make clear that this is AAA.
        $linksTargetBlank.each((i, el) => {
            let $el = $(el);

            var passWordsNewWindow = ['new tab', 'new window'];
            var containsPassWordsNewWindow = passWordsNewWindow.some(function (pass) {
                return $el.text().toLowerCase().indexOf(pass) >= 0;
            });

            if ($el && !containsPassWordsNewWindow) {
                this.warningCount++;
                $el.addClass('sa11y-warning-text');
                let NewTabMessage =
                    "Link opens in new tab or window without warning. Opening links in new tabs or windows can be disorienting, especially for people who have difficulty perceiving visual content. Secondly, it's not always a good practice to control a user's experience or make decisions for them. Alert the user that the link opens in a new window within the link text.";
                $el.first().after(ButtonInserter(WARNING, NewTabMessage, true));
            }
        });

        //Error: Find all links pointing to development environment. Customize as needed.
        let $badDevLinks = this.root
            .find("a[href^='https://www.dev.'], a[href*='wp-admin']")
            .not(this.linkIgnore);
        $badDevLinks.each((i, el) => {
            let $el = $(el);
            this.errorCount++;
            $el.addClass('sa11y-error-text');
            let BadLinkMessage =
                "Bad link found. Link appears to point to a development environment. Make sure the link does not contain <em>dev</em> or <em>wp-admin</em> in the URL. <hr aria-hidden='true' class='sa11y-hr'>This link points to: <br><span class='sa11y-bold sa11y-red-text'>" +
                el +
                '</span>';
            $el.after(ButtonInserter(ERROR, BadLinkMessage, true));
        });

        //Warning: Find all PDFs. Although only append warning icon to first PDF on page.
        let checkPDF = this.root.find("a[href$='.pdf']").not(this.containerIgnore);
        let firstPDF = this.root.find("a[href$='.pdf']:first").not(this.containerIgnore);
        if (checkPDF.length > 0) {
            this.warningCount++;
            checkPDF.addClass('sa11y-warning-text');
            checkPDF.has('img').removeClass('sa11y-warning-text');
            let PDFMessage =
                "PDFs are considered web content and must be made accessible as well. PDFs often contain issues for people who use screen readers (missing structural tags or missing form field labels) and people with low vision (text does not reflow when enlarged). If this PDF is a form, consider using an accessible HTML form as an alternative. If this PDF is a document, consider converting it into a web page. Otherwise, please <span class='sa11y-bold'>check PDF for accessibility in Acrobat DC.</span>";
            firstPDF.after(ButtonInserter(WARNING, PDFMessage, true));
        }

        //Find blockquotes used as headers.
        let $blockquotes = this.root.find('blockquote').not(this.containerIgnore);
        $blockquotes.each((i, el) => {
            let $el = $(el);
            if ($el.text().trim().length < 25) {
                this.errorCount++;
                $el.addClass('sa11y-error-border');
                let BlockquoteMessage =
                    'Blockquotes should be used for quotes only. They should never be used as headings. Please replace with a semantic heading (e.g. Heading 2 or Heading 3).';
                $el.before(ButtonInserter(ERROR, BlockquoteMessage));
            }
        });

        //Warning: Detect uppercase.
        let $queryUppercase = this.root
            .find('h1, h2, h3, h4, h5, h6, p, li:not([class^="sa11y"]), blockquote')
            .not(this.containerIgnore);

        $queryUppercase.each(function () {
            let $this = $(this);

            let UppercaseWarning =
                'All caps detected. Avoid typing sentences or phrases in uppercase. Some screen readers may interpret all capital text as an acronym and will read each letter individually. Additionally, all caps are more difficult to read and give the appearance of SHOUTING.';

            var uppercasePattern = /(?!<a[^>]*?>)(\b[A-Z]['!:A-Z\s]{15,}|\b[A-Z]{15,}\b)(?![^<]*?<\/a>)/g;

            var replaceUppercase =
                '<span class="sa11y-warning-uppercase">$1</span>' +
                ButtonInserter(WARNING, UppercaseWarning, true);

            $this.each(function () {
                $(this).html($(this).html().replace(uppercasePattern, replaceUppercase));
            });
        });
        if ($('.sa11y-warning-uppercase').length > 0) {
            this.warningCount++;
        }

        //Tables check.
        this.$table.each((i, el) => {
            let $el = $(el);
            let findTHeaders = $el.find('th');
            let findHeadingTags = $el.find('h1, h2, h3, h4, h5, h6');

            if (findTHeaders.length == 0) {
                this.errorCount++;
                $el.addClass('sa11y-error-border');
                let MissingHeadingsError =
                    'Missing table headers! Accessible tables need HTML markup that indicates header cells and data cells which defines their relationship. This information provides context to people who use assistive technology. Tables should be used for tabular data only.';
                $el.before(ButtonInserter(ERROR, MissingHeadingsError));
            }
            if (findHeadingTags.length > 0) {
                findHeadingTags.addClass('sa11y-error-heading');
                findHeadingTags.parent().addClass('sa11y-error-border');
                let SemanticHeadingTableError =
                    "Semantic headings such as Heading 2 or Heading 3 should only be used for sections of content; <span class='sa11y-bold'>not</span> in HTML tables. Indicate table headings using the <span class='sa11y-bold'>th</span> element instead.";
                findHeadingTags.before(ButtonInserter(ERROR, SemanticHeadingTableError));
            }
            findTHeaders.each(function () {
                let $th = $(this);
                if ($th.text().trim().length < 1) {
                    this.errorCount++;
                    findTHeaders.addClass('sa11y-error-border');
                    let EmptyTableHeaderError =
                        'Empty table header found! Table headers should <em>never</em> be empty. It is important to designate row and/or column headers to convey their relationship. This information provides context to people who use assistive technology. Please keep in mind that tables should be used for tabular data only.';
                    findTHeaders.append(ButtonInserter(ERROR, EmptyTableHeaderError));
                }
            });
        });

        //Error: Missing language tag. Lang should be at least 2 characters.
        var lang = $('html').attr('lang');
        if (lang == undefined || lang.length < 2) {
            this.errorCount++;
            let PageLanguageMessage =
                "Page language not declared! Please <a href='https://www.w3.org/International/questions/qa-html-language-declarations' target='_blank'>declare language on HTML tag. <span class='sa11y-visually-hidden'>(opens new tab)</span></a>";
            $('#sa11y-container').after(ErrorBannerInsert(PageLanguageMessage));
        }

        //Excessive bolding or italics.  
        let $strongitalics = this.root.find('strong, em').not(this.containerIgnore);
        $strongitalics.each((i, el) => {
            let $el = $(el);
            if ($el.text().length > 400) {
                this.warningCount++;
                let BoldItalicsMessage = "Bold and italic tags have semantic meaning, and should <span class='sa11y-bold'>not</span> be used to highlight entire paragraphs. Bolded text should be used to provide strong <span class='sa11y-bold'>emphasis</span> on a word or phrase. Italics should be used to highlight proper names (i.e. book and article titles), foreign words, quotes. Long quotes should be formatted as a blockquote."
                $el.before(ButtonInserter(WARNING, BoldItalicsMessage));
            }
        });

        /* Thanks to John Jameson from PrincetonU for this ruleset! */
        // Detect paragraphs that should be lists: a. A. a) A) * - -- •.
        let activeMatch = "";
        let prefixDecrement = {
            b: "a",
            B: "A",
            2: "1"
        };
        let prefixMatch = /a\.|a\)|A\.|A\)|1\.|1\)|\*\s|-\s|--|•\s|→\s|✓\s|✔\s|✗\s|✖\s|✘\s|❯\s|›\s|»\s/;
        let decrement = function (el) {
            return el.replace(/^b|^B|^2/, function (match) {
            return prefixDecrement[match];
            });
        };
        this.$p.each(function (i, el) {
            let $first = $(el);
            let hit = false;
            // Grab first two characters.
            let firstPrefix = $first.text().substring(0, 2);
            if (firstPrefix.trim().length > 0 && firstPrefix !== activeMatch && firstPrefix.match(prefixMatch)) {
            // We have a prefix and a possible hit
            // Split p by carriage return if present and compare.
            let hasBreak = $first.html().indexOf("<br>");
            if (hasBreak !== -1) {
                let subParagraph = $first.html().substring(hasBreak + 4).trim();
                let subPrefix = subParagraph.substring(0, 2);
                if (firstPrefix === decrement(subPrefix)) {
                hit = true;
                }
            }
            // Decrement the second p prefix and compare .
            if (!hit) {
                let $second = $(el).next('p');
                if ($second) {
                let secondPrefix = decrement($first.next().text().substring(0, 2));
                if (firstPrefix === secondPrefix) {
                    hit = true;
                }
                }
            } else if (hit) {
                this.warningCount++;
                let ShouldBeListMessage = "Are you trying to create a list? Possible list item detected: <span class='sa11y-bold sa11y-red-text'>"+ firstPrefix + "</span><hr class='sa11y-hr' aria-hidden='true'> Make sure to use semantic lists by using the bullet or number formatting buttons instead. When using a semantic list, assistive technologies are able to convey information such as the total number of items and the relative position of each item in the list. Learn more about <a href='https://www.w3.org/WAI/tutorials/page-structure/content/#lists' target='_blank'>semantic lists. <span class='sa11y-visually-hidden'>(opens new tab)</span></a>"
                $first.before(ButtonInserter(WARNING, ShouldBeListMessage));
                $first.addClass("sa11y-fake-list");
                activeMatch = firstPrefix;
            } else {
                activeMatch = "";
            }
            } else {
            activeMatch = "";
            }
        });
        if ($(".sa11y-fake-list").length > 0) {
            this.warningCount++;
        }

        //Example ruleset. Be creative.
        let $checkAnnouncement = this.root.find('.announcement-component').not(this.containerIgnore)
            .length;
        if ($checkAnnouncement > 1) {
            this.warningCount++;
            let WarningMessage =
                'More than one Announcement component found! The Announcement component should be used strategically and sparingly. It should be used to get attention or warn users about something important. Misuse of this component makes it less effective or impactful. Secondly, this component is semantically labeled as an Announcement for people who use screen readers.';
            $('.announcement-component:gt(0)').addClass('sa11y-warning-border');
            $('.announcement-component:gt(0)').before(ButtonInserter(WARNING, WarningMessage));
        }
    };

    displayPanel = () => {
        this.panelActive = true;
        let totalCount = this.errorCount + this.warningCount;
        $('#sa11y-panel').addClass('sa11y-active');

        if (this.errorCount === 1 && this.warningCount === 1) {
            $('#sa11y-panel-content').addClass('sa11y-errors');
            $('#sa11y-status').text(
                `1 accessibility error and 1 warning detected.`,
            );
        } else if (this.errorCount === 1 && this.warningCount > 0) {
            $('#sa11y-panel-content').addClass('sa11y-errors');
            $('#sa11y-status').text(
                `1 accessibility error and ${this.warningCount} warnings detected.`,
            );
        } else if (this.errorCount > 0 && this.warningCount === 1) {
            $('#sa11y-panel-content').addClass('sa11y-errors');
            $('#sa11y-status').text(
                `${this.errorCount} accessibility errors and 1 warning detected.`,
            );
        } else if (this.errorCount > 0 && this.warningCount > 0) {
            $('#sa11y-panel-content').addClass('sa11y-errors');
            $('#sa11y-status').text(
                `${this.errorCount} accessibility errors and ${this.warningCount} warnings detected.`,
            );
        } else if (this.errorCount > 0) {
            $('#sa11y-panel-content').addClass('sa11y-errors');
            $('#sa11y-status').text(
                this.errorCount === 1
                    ? '1 accessibility issue detected.'
                    : this.errorCount + ' accessibility issues detected.',
            );
        } else if (this.warningCount > 0) {
            $('#sa11y-panel-content').addClass('sa11y-warnings');
            $('#sa11y-status').text(
                totalCount === 1
                    ? 'Please review warning.'
                    : 'Please review ' + this.warningCount + ' warnings.',
            );
        } else {
            $('#sa11y-panel-content').addClass('sa11y-pass');
            $('#sa11y-status').text('No accessibility errors found.');
        }

        //Show outline panel
        let $outlineToggle = $('#sa11y-outline-toggle');
        $outlineToggle.click(() => {
            if ($outlineToggle.attr('aria-expanded') == 'true') {
                $outlineToggle.removeClass('sa11y-outline-active');
                $('#sa11y-outline-panel').removeClass('sa11y-active');
                $outlineToggle.text('Show Outline');
                $outlineToggle.attr('aria-expanded', 'false');
                localStorage.setItem('sa11y-outline', 'closed');
            } else {
                $outlineToggle.addClass('sa11y-outline-active');
                $('#sa11y-outline-panel').addClass('sa11y-active');
                $outlineToggle.text('Hide Outline');
                $outlineToggle.attr('aria-expanded', 'true');
                localStorage.setItem('sa11y-outline', 'opened');
            }
            $('#sa11y-outline-header > span').focus();
            $('.sa11y-heading-label').toggleClass('sa11y-label-visible');

            //Close Settings panel when Show Outline is active.
            $('#sa11y-settings-panel').removeClass('sa11y-active');
            $settingsToggle.removeClass('sa11y-settings-active');
            $settingsToggle.attr('aria-expanded', 'false');
            $settingsToggle.text('Show Settings');

            //Keyboard accessibility fix for scrollable panel content.
            if ($('#sa11y-outline-list').height() > 350) {
                $('#sa11y-outline-list').attr('tabindex', '0');
            }
        });

        //Remember to leave outline open
        if (localStorage.getItem('sa11y-outline') === 'opened') {
            $outlineToggle.addClass('sa11y-outline-active');
            $('#sa11y-outline-panel').addClass('sa11y-active');
            $outlineToggle.text('Hide Outline');
            $outlineToggle.attr('aria-expanded', 'true');
            $('.sa11y-heading-label').toggleClass('sa11y-label-visible');
        }

        //Show settings panel
        let $settingsToggle = $('#sa11y-settings-toggle');
        $settingsToggle.click(function () {
            if ($settingsToggle.attr('aria-expanded') === 'true') {
                $settingsToggle.removeClass('sa11y-settings-active');
                $('#sa11y-settings-panel').removeClass('sa11y-active');
                $settingsToggle.text('Show Settings');
                $settingsToggle.attr('aria-expanded', 'false');
            } else {
                $settingsToggle.addClass('sa11y-settings-active');
                $('#sa11y-settings-panel').addClass('sa11y-active');
                $settingsToggle.text('Hide Settings');
                $settingsToggle.attr('aria-expanded', 'true');
            }

            $('#sa11y-settings-header > span').focus();
            
            //Close Show Outline panel when Settings is active.
            $('#sa11y-outline-panel').removeClass('sa11y-active');
            $outlineToggle.removeClass('sa11y-outline-active');
            $outlineToggle.attr('aria-expanded', 'false');
            $outlineToggle.text('Show Outline');
            $('.sa11y-heading-label').removeClass('sa11y-label-visible');
            localStorage.setItem('sa11y-outline', 'closed');

            //Keyboard accessibility fix for scrollable panel content.
            if ($('#sa11y-settings-content').height() > 350) {
                $('#sa11y-settings-content').attr('tabindex', '0');
            }
        });
    };

    reset = () => {
        this.panelActive = false;
        this.clearEverything();
        $('#sa11y-panel-content').removeClass();
        $('#sa11y-status').text();
        $('#sa11y-outline-toggle').off('click');
        $('#sa11y-settings-toggle').off('click');
    };
    clearEverything = () => {
        this.root.find('.sa11y-error-border').removeClass('sa11y-error-border');
        this.root.find('.sa11y-error-heading').removeClass('sa11y-error-heading');
        this.root.find('.sa11y-error-message-container').remove();
        this.root.find('.sa11y-error-text').removeClass('sa11y-error-text');

        this.root.find('.sa11y-warning-border').removeClass('sa11y-warning-border');
        this.root.find('.sa11y-warning-text').removeClass('sa11y-warning-text');
        this.root.find('.sa11y-warning-uppercase').contents().unwrap();
        this.root.find('p').removeClass('sa11y-fake-list');

        this.root.find('.sa11y-instance').remove();
        this.root.find('.sa11y-instance-inline').remove();
        this.root.find('.sa11y-heading-label').remove();
        this.root.find('#sa11y-panel').removeClass('sa11y-active');
        this.root.find('#sa11y-outline-list li').remove();
        this.root.find("#sa11y-readability-content").remove();
        this.root.find(".sa11y-readability-period").remove();
    };
}

if (window.navigator.userAgent.match(/MSIE|Trident/) === null) {
    new Sa11y(); //No IE support.
}
