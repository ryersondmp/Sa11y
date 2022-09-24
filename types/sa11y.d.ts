export declare class Sa11y {
  constructor(options?: {
    checkRoot?: string;
    containerIgnore?: string;
    contrastIgnore?: string;
    outlineIgnore?: string;
    headerIgnore?: string;
    imageIgnore?: string;
    linkIgnore?: string;
    linkIgnoreSpan?: string;
    linksToFlag?: string;
    nonConsecutiveHeadingIsError?: boolean;
    flagLongHeadings?: boolean;
    showGoodLinkButton?: boolean;
    detectSPArouting?: boolean;
    doNotRun?: string;
  
    // Readability
    readabilityPlugin?: boolean;
    readabilityRoot?: string;
    readabilityLang?: 'en' | 'fr' | 'es' | 'de' | 'nl' | 'it';
    readabilityIgnore?: string;
  
    // Other plugins
    contrastPlugin?: boolean;
    formLabelsPlugin?: boolean;
    linksAdvancedPlugin?: boolean;
    customChecks?: boolean;
  
    // QA rulesets
    badLinksQA?: boolean;
    strongItalicsQA?: boolean;
    pdfQA?: boolean;
    langQA?: boolean;
    blockquotesQA?: boolean;
    tablesQA?: boolean;
    allCapsQA?: boolean;
    fakeHeadingsQA?: boolean;
    fakeListQA?: boolean;
    duplicateIdQA?: boolean;
    underlinedTextQA?: boolean;
    pageTitleQA?: boolean;
		subscriptQA?: boolean;
  
    // Embedded content rulesets
    embeddedContentAll?: boolean;
    embeddedContentAudio?: boolean;
    embeddedContentVideo?: boolean;
    embeddedContentDataViz?: boolean;
    embeddedContentTitles?: boolean;
    embeddedContentGeneral?: boolean;
  
    // Embedded content
    videoContent?: string;
    audioContent?: string;
    dataVizContent?: string;
    twitterContent?: string;
    embeddedContent?: string;
  })
}

export declare const Lang: {
  langStrings: Sa11yLang['strings'];
  addI18n(strings: Sa11yLang['strings']): void;
  _(string:string): string;
  sprintf(string: string, ...args: any[]): string;
  translate(string: string): string
};

export const LangEn: Sa11yLang;

export const LangFr: Sa11yLang;

export const LangPl: Sa11yLang;

export const LangUa: Sa11yLang;

export declare type Sa11yLang = {
  strings: {
    LANG_CODE: string;
    MAIN_TOGGLE_LABEL: string;
    CONTAINER_LABEL: string;
    ERROR: string;
    ERRORS: string;
    WARNING: string;
    WARNINGS: string;
    GOOD: string;
    ON: string;
    OFF: string;
    ALERT_TEXT: string;
    ALERT_CLOSE: string;
    SHOW_OUTLINE: string;
    HIDE_OUTLINE: string;
    SHOW_SETTINGS: string;
    HIDE_SETTINGS: string;
    PAGE_OUTLINE: string;
    SETTINGS: string;
    CONTRAST: string;
    FORM_LABELS: string;
    LINKS_ADVANCED: string;
    DARK_MODE: string;
    SHORTCUT_SCREEN_READER: string;
    SHORTCUT_TOOLTIP: string;
    NEW_TAB: string;
    PANEL_HEADING: string;
    PANEL_STATUS_NONE: string;
    PANEL_ICON_WARNINGS: string;
    PANEL_ICON_TOTAL: string;
    NOT_VISIBLE_ALERT: string;
    ERROR_MISSING_ROOT_TARGET: string;

    // Alternative text module stop words
    SUSPICIOUS_ALT_STOPWORDS: Array<string>;
    PLACEHOLDER_ALT_STOPWORDS: Array<string>;
    PARTIAL_ALT_STOPWORDS: Array<string>,
    WARNING_ALT_STOPWORDS: Array<string>;
    NEW_WINDOW_PHRASES: Array<string>;

    // Only some items in list would need to be translated.
    FILE_TYPE_PHRASES: Array<string>,

    // Readability
    LANG_READABILITY: string;
    LANG_AVG_SENTENCE: string;
    LANG_COMPLEX_WORDS: string;
    LANG_TOTAL_WORDS: string;
    LANG_VERY_DIFFICULT: string;
    LANG_DIFFICULT: string;
    LANG_FAIRLY_DIFFICULT: string;
    LANG_GOOD: string;
    READABILITY_NO_P_OR_LI_MESSAGE: string;
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: string;

    // Headings
    HEADING_NON_CONSECUTIVE_LEVEL: string;
    HEADING_EMPTY: string;
    HEADING_LONG: string;
    HEADING_FIRST: string;
    HEADING_MISSING_ONE: string;
    HEADING_EMPTY_WITH_IMAGE: string;
    PANEL_HEADING_MISSING_ONE: string;

    // Links
    LINK_EMPTY: string;
    LINK_EMPTY_LINK_NO_LABEL: string;
    LINK_LABEL: string;
    LINK_STOPWORD: string;
    LINK_BEST_PRACTICES: string;
    LINK_URL: string;

    // Links advanced
    NEW_TAB_WARNING: string;
    FILE_TYPE_WARNING: string;
    LINK_IDENTICAL_NAME: string;

    // Images
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: string;
    MISSING_ALT_LINK_MESSAGE: string;
    MISSING_ALT_MESSAGE: string;
    LINK_IMAGE_BAD_ALT_MESSAGE: string;
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: string;
    LINK_IMAGE_SUS_ALT_MESSAGE: string;
    LINK_ALT_HAS_BAD_WORD_MESSAGE: string;
    ALT_PLACEHOLDER_MESSAGE: string;
    ALT_HAS_SUS_WORD: string;
    LINK_IMAGE_ARIA_HIDDEN: string;
    LINK_IMAGE_NO_ALT_TEXT: string;
    LINK_IMAGE_HAS_TEXT: string;
    LINK_IMAGE_LONG_ALT: string;
    LINK_IMAGE_ALT_WARNING: string;
    LINK_IMAGE_ALT_AND_TEXT_WARNING: string;
    IMAGE_FIGURE_DECORATIVE: string;
    IMAGE_FIGURE_DUPLICATE_ALT: string;
    IMAGE_DECORATIVE: string;
    IMAGE_ALT_TOO_LONG: string;
    IMAGE_PASS: string;

    // Labels
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: string;
    LABELS_INPUT_RESET_MESSAGE: string;
    LABELS_ARIA_LABEL_INPUT_MESSAGE: string;
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: string;
    LABELS_MISSING_LABEL_MESSAGE: string;

    // Embedded content
    EMBED_VIDEO: string;
    EMBED_AUDIO: string;
    EMBED_DATA_VIZ: string;
    EMBED_MISSING_TITLE: string;
    EMBED_GENERAL_WARNING: string;

    // Quality assurance
    QA_BAD_LINK: string;
    QA_BAD_ITALICS: string;
    QA_PDF: string;
    QA_PAGE_LANGUAGE: string;
    QA_PAGE_TITLE: string;
    QA_BLOCKQUOTE_MESSAGE: string;
    QA_FAKE_HEADING: string;
    QA_SHOULD_BE_LIST: string;
    QA_UPPERCASE_WARNING: string;
    QA_DUPLICATE_ID: string;
    QA_TEXT_UNDERLINE_WARNING: string;
		QA_SUBSCRIPT_WARNING: string;

    // Tables
    TABLES_MISSING_HEADINGS: string;
    TABLES_SEMANTIC_HEADING: string;
    TABLES_EMPTY_HEADING: string;

    // Contrast
    CONTRAST_ERROR: string;
    CONTRAST_WARNING: string;
    CONTRAST_INPUT_ERROR: string;
  },
};