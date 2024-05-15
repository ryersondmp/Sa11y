
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
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var ptBR = {
  // Portuguese (Brazil)
  strings: {
    LANG_CODE: 'pt-br',
    MAIN_TOGGLE_LABEL: 'Verificar a acessibilidade',
    CONTAINER_LABEL: 'Verificador de acessibilidade',
    ERROR: 'Erro',
    ERRORS: 'Erros',
    WARNING: 'Advertência',
    WARNINGS: 'Avisos',
    GOOD: 'Bom',
    ON: 'Ligado',
    OFF: 'Desligado',
    ALERT_TEXT: 'Alerta',
    ALERT_CLOSE: 'Fechar',
    OUTLINE: 'Esboço',
    ALT: 'ALT',
    IMAGES: 'Imagens',
    EDIT: 'Editar',
    IMAGES_NOT_FOUND: 'Nenhuma imagem encontrada.',
    DECORATIVE: 'Decorativo',
    MISSING: 'Ausente',
    PAGE_ISSUES: 'Problemas de página',
    SETTINGS: 'Configurações',
    CONTRAST: 'Contraste',
    FORM_LABELS: 'Etiquetas de formulário',
    LINKS_ADVANCED: 'Links (Avançado)',
    DARK_MODE: 'Modo escuro',
    SHORTCUT_SCREEN_READER: 'Pular para a edição. Atalho de teclado: Alt S',
    SHORTCUT_TOOLTIP: 'Pular para a edição',
    NEW_TAB: 'Abre uma nova guia',
    PANEL_HEADING: 'Verificação de acessibilidade',
    PANEL_STATUS_NONE: 'Não foram encontrados erros.',
    PANEL_ICON_WARNINGS: 'avisos encontrados.',
    PANEL_ICON_TOTAL: 'total de problemas encontrados.',
    NOT_VISIBLE_ALERT: 'O item que você está tentando visualizar não está visível; ele pode estar oculto ou dentro de um componente de acordeão ou guia. Aqui está uma visualização:',
    ERROR_MISSING_ROOT_TARGET: 'A página inteira foi verificada quanto à acessibilidade porque a área de destino <code>%(root)</code> não existe.',
    HEADING_NOT_VISIBLE_ALERT: 'O cabeçalho não é visível; ele pode estar oculto ou dentro de um componente de acordeão ou guia.',
    SKIP_TO_PAGE_ISSUES: 'Pular para os problemas da página',
    CONSOLE_ERROR_MESSAGE: 'Desculpe, mas há um problema com o verificador de acessibilidade nesta página. Você pode <a href="%(link)">relatar o problema por meio deste formulário</a> ou no <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Mostrar %(dismissCount) avisos descartados',
    DISMISS: 'Dispensar',
    DISMISSED: 'Avisos indeferidos',
    DISMISS_REMINDER: 'Observe que os avisos são descartados apenas <strong>temporariamente</strong>. A limpeza do histórico e dos cookies do navegador restaurará todos os avisos descartados anteriormente em todas as páginas.',

    // Export
    DATE: 'Data',
    PAGE_TITLE: 'Título da página',
    RESULTS: 'Resultados',
    EXPORT_RESULTS: 'Exportar resultados',
    GENERATED: 'Resultados gerados com %(tool).',
    PREVIEW: 'Visualização',
    ELEMENT: 'Elemento',
    PATH: 'Caminho',

    // Colour filters
    COLOUR_FILTER: 'Filtro de cores',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monocromático',
    COLOUR_FILTER_MESSAGE: 'Verifique se há elementos que são difíceis de perceber ou distinguir em relação a outras cores.',
    RED_EYE: 'Cego vermelho.',
    GREEN_EYE: 'Cego verde.',
    BLUE_EYE: 'Cego azul.',
    MONO_EYE: 'Cego para vermelho, azul e verde.',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Os filtros de cores não funcionam no modo de alto contraste.',

    // Alternative text stop words
    SUSPICIOUS_ALT_STOPWORDS: [
      'imagem',
      'gráfico',
      'imagem',
      'foto',
      'photo',
      'image',
      'graphic',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'imagem',
      'foto',
      'decorativo',
      'photo',
      'image',
      'graphic',
      'espaço reservado',
      'imagem de espaço reservado',
      'espaçador',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'clique',
      'clique aqui',
      'clique aqui para saber mais',
      'clicando aqui',
      'confira',
      'detalhado aqui',
      'download',
      'faça o download aqui',
      'descobrir',
      'saiba mais',
      'formulário',
      'aqui',
      'informações',
      'link',
      'aprender',
      'aprender a',
      'mais',
      'página',
      'papel',
      'leia mais',
      'ler',
      'leia isto',
      'este',
      'esta página',
      'este site',
      'visualização',
      'veja nossa',
      'site',
    ],
    WARNING_ALT_STOPWORDS: [
      'clique aqui',
    ],
    NEW_WINDOW_PHRASES: [
      'externo',
      'nova guia',
      'nova janela',
      'pop-up',
      'aparecer',
    ],
    FILE_TYPE_PHRASES: ['documento', 'planilha', 'planilha de cálculo', 'arquivo compactado', 'arquivo arquivado', 'planilha', 'powerpoint', 'apresentação', 'instalar', 'vídeo', 'áudio', 'pdf'],
    LANG_READABILITY: 'Legibilidade',
    LANG_AVG_SENTENCE: 'Média de palavras por frase:',
    LANG_COMPLEX_WORDS: 'Palavras complexas:',
    LANG_TOTAL_WORDS: 'Palavras:',
    LANG_VERY_DIFFICULT: 'Muito difícil',
    LANG_DIFFICULT: 'Difícil',
    LANG_FAIRLY_DIFFICULT: 'Bastante difícil',
    LANG_GOOD: 'Bom',
    READABILITY_NO_P_OR_LI_MESSAGE: 'Não foi possível calcular a pontuação de legibilidade. Nenhum parágrafo <code>&lt;p&gt;</code> ou conteúdo de lista <code>&lt;li&gt;</code> encontrado.',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Não há conteúdo suficiente para calcular a pontuação de legibilidade.',
    HEADING_NON_CONSECUTIVE_LEVEL: 'Nível de cabeçalho não consecutivo usado. Os cabeçalhos nunca devem pular níveis ou ir de <strong>Cabeçalho %(prevLevel)</strong> para <strong {r}>Cabeçalho %(level)</strong>.',
    HEADING_EMPTY: 'Encontrado um título vazio! Para corrigir, exclua essa linha ou altere seu formato de <strong {r}>Título %(level)</strong> para <strong>Normal</strong> ou <strong>Parágrafo</strong>.',
    HEADING_LONG: 'O título é longo! Os títulos devem ser usados para organizar o conteúdo e transmitir estrutura. Eles devem ser breves, informativos e exclusivos. Mantenha os títulos com menos de 160 caracteres (não mais do que uma frase). <hr> <strong {wb}>%(HEADING_LENGTH) Caracteres</strong>',
    HEADING_FIRST: 'O primeiro título em uma página geralmente deve ser o Título 1 ou o Título 2. O Título 1 deve ser o início da seção de conteúdo principal e é o título principal que descreve o objetivo geral da página. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Estrutura de títulos.</a>',
    HEADING_MISSING_ONE: 'Falta de título 1. O título 1 deve ser o início da área de conteúdo principal e é o título principal que descreve o objetivo geral da página. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Estrutura de cabeçalho.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'O cabeçalho não tem texto, mas contém uma imagem. Se esse não for um cabeçalho, altere seu formato de <strong {r}>Título %(level)</strong> para <strong>Normal</strong> ou <strong>Parágrafo</strong>. Caso contrário, adicione texto alternativo à imagem se ela não for decorativa.',
    PANEL_HEADING_MISSING_ONE: 'Falta o cabeçalho 1!',
    PANEL_NO_HEADINGS: 'Nenhuma cabeçalho encontrado.',
    LINK_EMPTY: 'Remova links vazios sem nenhum texto.',
    LINK_EMPTY_LABELLEDBY: 'O link possui um valor para <code>aria-labelledby</code> que está vazio ou não corresponde ao valor do atributo <code>id</code> de outro elemento na página.',
    LINK_EMPTY_LINK_NO_LABEL: 'O link não tem texto discernível que seja visível para leitores de tela e outras tecnologias assistivas. Para corrigir: <ul><li>Adicione um texto conciso que descreva para onde o link o leva.</li><li>Se for um <a href="https://a11y-101.com/development/icons-and-links">link de ícone ou SVG,</a> é provável que esteja faltando um rótulo descritivo.</li><li>Se você acha que esse link é um erro devido a um bug de copiar/colar, considere excluí-lo.</li></ul>',
    LINK_LABEL: '<strong {wb}>Rótulo</strong> %(TEXT)',
    LINK_STOPWORD: 'O texto do link pode não ser descritivo o suficiente fora do contexto: <strong {r}>%(ERROR)</strong> <hr> <strong>Dica!</strong> O texto do link deve ser sempre claro, exclusivo e significativo. Evite palavras comuns como &quot;clique aqui&quot; ou &quot;saiba mais&quot;',
    LINK_BEST_PRACTICES: 'Considere a possibilidade de substituir o texto do link: <strong {r}>%(ERROR)</strong> <hr> <ul><li>&quot;Clique aqui&quot; coloca o foco na mecânica do mouse, quando muitas pessoas não usam um mouse ou podem estar visualizando este site em um dispositivo móvel. Considere a possibilidade de usar um verbo diferente relacionado à tarefa.</li><li>Evite usar símbolos HTML como chamadas para ações, a menos que eles estejam ocultos para tecnologias assistivas.</li></ul>',
    LINK_URL: 'URLs mais longos e menos inteligíveis usados como texto de link podem ser difíceis de compreender quando acessados com tecnologia assistiva. Na maioria dos casos, é melhor usar texto legível por humanos em vez do URL. URLs curtos (como a página inicial de um site) são aceitáveis. <hr> <strong>Dica!</strong> O texto do link deve ser sempre claro, exclusivo e significativo para que possa ser entendido fora do contexto.',
    LINK_DOI: 'Para páginas da Web ou recursos somente on-line, o <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">Guia de Estilo APA</a> recomenda o uso de links descritivos, envolvendo o URL ou DOI do trabalho em seu título. URLs mais longos e menos inteligíveis usados como texto de link podem ser difíceis de compreender quando acessados com tecnologia assistiva.',
    NEW_TAB_WARNING: 'O link abre em uma nova guia ou janela sem aviso. Fazer isso pode ser desorientador, especialmente para pessoas que têm dificuldade de perceber o conteúdo visual. Em segundo lugar, nem sempre é uma boa prática controlar a experiência de alguém ou tomar decisões por ele. Indique que o link abre em uma nova janela no texto do link. <hr> <strong>Dica!</strong> Conheça as práticas recomendadas: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">abrir links em novas janelas e guias do navegador.</a>',
    FILE_TYPE_WARNING: 'O link aponta para um PDF ou arquivo para download (por exemplo, MP3, Zip, Word Doc) sem aviso. Indique o tipo de arquivo no texto do link. Se for um arquivo grande, considere incluir o tamanho do arquivo. <hr> <strong>Exemplo:</strong> Relatório executivo (PDF, 3 MB)',
    LINK_IDENTICAL_NAME: 'O link tem texto idêntico ao de outro link, embora aponte para uma página diferente. Vários links com o mesmo texto podem causar confusão para pessoas que usam leitores de tela. <hr> Considere tornar o link a seguir mais descritivo para ajudar a distingui-lo de outros links: <strong {w}>%(TEXT)</strong>',
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'A imagem está sendo usada como um link com texto ao redor, embora o atributo alt deva ser marcado como decorativo ou nulo.',
    MISSING_ALT_LINK_MESSAGE: 'A imagem está sendo usada como um link, mas está faltando o texto alternativo! Certifique-se de que o texto alternativo descreva para onde o link leva você.',
    MISSING_ALT_MESSAGE: 'Texto alternativo ausente! Se a imagem transmitir uma história, um clima ou informações importantes, não deixe de descrevê-la.',
    LINK_ALT_HAS_FILE_EXTENSION: 'Extensão de arquivo encontrada no texto alternativo. Certifique-se de que o texto alternativo descreva o destino do link, e não uma descrição literal da imagem. Remover: <strong {r}>%(ERROR)</strong>. <hr> <strong {eb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Encontrado texto alternativo não descritivo ou de espaço reservado em uma imagem vinculada. Certifique-se de que o texto alternativo descreva o destino do link e não uma descrição literal da imagem. Substitua o seguinte texto alternativo: <strong {r}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_SUS_ALT_MESSAGE: 'As tecnologias assistivas já indicam que se trata de uma imagem, portanto, &quot;<strong {r}>%(ERROR)</strong>&quot; pode ser redundante. Certifique-se de que o texto alternativo descreva o destino do link, e não uma descrição literal da imagem. <hr> <strong {wb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong>',
    ALT_HAS_FILE_EXTENSION: 'Extensão do arquivo no texto alternativo encontrado. Se a imagem transmitir uma história, um clima ou informações importantes, não deixe de descrevê-la. Remover: <strong {r}>%(ERROR)</strong>. <hr> <strong {eb}>ALT</strong> <strong {r}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER_MESSAGE: 'Texto alternativo não descritivo ou de espaço reservado encontrado. Substitua o texto alternativo a seguir por algo mais significativo: <strong {r}>%(ALT_TEXT)</strong>',
    ALT_HAS_SUS_WORD: 'As tecnologias assistivas já indicam que se trata de uma imagem, portanto, &quot;<strong {w}>%(ERROR)</strong>&quot; pode ser redundante. <hr> <strong {wb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong>',
    LINK_HIDDEN_FOCUSABLE: 'O link possui <code>aria-hidden=&quot;true&quot;</code>, mas ainda é focável pelo teclado. Se você pretende ocultar um link redundante ou duplicado, adicione também <code>tabindex=&quot;-1&quot;</code>.',
    LINK_IMAGE_NO_ALT_TEXT: 'A imagem no link está marcada como decorativa e não há texto de link. Adicione um texto alternativo à imagem que descreva o destino do link.',
    LINK_IMAGE_HAS_TEXT: 'A imagem é marcada como decorativa, embora o link esteja usando o texto ao redor como um rótulo descritivo.',
    LINK_IMAGE_LONG_ALT: 'A descrição do texto alternativo em uma imagem vinculada é <strong>muito longa</strong>. O texto alternativo das imagens vinculadas deve descrever para onde o link leva você, e não uma descrição literal da imagem. <strong>Considere a possibilidade de usar o título da página para a qual o link está direcionado como o texto alternativo.</strong> <hr> <strong {wb}>ALT</strong> <strong {wb}>%(altLength) Caracteres</strong> <strong {w}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_WARNING: 'O link da imagem contém texto alternativo. <strong>O texto alternativo descreve para onde o link leva você?</strong> Considere a possibilidade de usar o título da página para a qual o link está direcionado como texto alternativo. <hr> <strong {wb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: 'O link da imagem contém <strong>texto alt e texto do link ao redor.</strong> Se essa imagem for decorativa e estiver sendo usada como um link funcional para outra página, considere marcar a imagem como decorativa ou nula - o texto do link ao redor deve ser suficiente. <hr> <strong {wb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong> <hr> <strong {wb}>Rótulo</strong> <strong>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'A imagem está marcada como <strong>decorativa</strong> e será ignorada pela tecnologia assistiva. <hr> Embora uma <strong>caption</strong> tenha sido fornecida, a imagem também deve ter um texto alternativo na maioria dos casos. <ul><li>O texto alternativo deve fornecer uma descrição concisa do que está na imagem.</li><li>A legenda geralmente deve fornecer contexto para relacionar a imagem ao conteúdo ao redor ou dar atenção a uma informação específica.</li></ul> Saiba mais: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Não use exatamente as mesmas palavras para o texto alternativo e para a legenda. Os leitores de tela anunciarão as informações duas vezes. <ul><li>O texto alt deve fornecer uma descrição concisa do que está na imagem.</li><li>A legenda geralmente deve fornecer contexto para relacionar a imagem ao conteúdo ao redor ou dar atenção a uma informação específica.</li></ul> Saiba mais: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> <strong {wb}>ALT</strong> <strong {w}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'A imagem é marcada como <strong>decorativa</strong> e será ignorada pela tecnologia assistiva. Se a imagem transmitir uma história, um clima ou informações importantes, não se esqueça de adicionar um texto alternativo.',
    IMAGE_ALT_TOO_LONG: 'A descrição do texto alternativo é <strong>muito longa</strong>. O texto alternativo deve ser conciso, mas significativo, como um <em>tweet</em> (cerca de 100 caracteres). Se essa for uma imagem complexa ou um gráfico, considere colocar a descrição longa da imagem no texto abaixo ou em um componente de acordeão. <hr> <strong {wb}>ALT</strong> <strong {wb}>%(altLength) Caracteres</strong> <strong {w}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '<strong {b}>ALT</strong> %(ALT_TEXT)',
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'O botão de imagem está sem texto alternativo. Adicione o texto alternativo para fornecer um nome acessível. Por exemplo: <em>Search</em> ou <em>Submit</em>.',
    LABELS_INPUT_RESET_MESSAGE: 'Os botões de reinicialização não devem ser usados, a menos que sejam especificamente necessários, pois são fáceis de serem ativados por engano. <hr> <strong>Dica!</strong> Saiba por que <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">os botões Redefinir e Cancelar apresentam problemas de usabilidade.</a>',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: 'A entrada tem um nome acessível, mas certifique-se de que também haja um rótulo visível. <hr> <strong {wb}>Rótulo</strong> <strong {w}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Não há rótulo associado a esse input. Adicione um atributo <code>for</code> ao rótulo que corresponda ao <code>id</code> desse input. <hr> O ID desse input é: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL_MESSAGE: 'Não há rótulo associado a essa entrada. Adicione um <code>id</code> a essa entrada e adicione um atributo <code>for</code> correspondente ao rótulo.',
    EMBED_VIDEO: 'Certifique-se de que <strong>todos os vídeos tenham legendas ocultas.</strong> Fornecer legendas para todo o conteúdo de áudio e vídeo é um requisito obrigatório do Nível A. As legendas ajudam as pessoas com deficiência auditiva ou surdas.',
    EMBED_AUDIO: 'Certifique-se de fornecer uma <strong>transcrição para todos os podcasts.</strong> Fornecer transcrições para conteúdo de áudio é um requisito obrigatório do Nível A. As transcrições ajudam as pessoas com deficiência auditiva ou surdas, mas podem beneficiar a todos. Considere colocar a transcrição abaixo ou em um painel sanfonado.',
    EMBED_DATA_VIZ: 'Widgets de visualização de dados como esse costumam ser problemáticos para pessoas que usam um teclado ou leitor de tela para navegar e podem apresentar dificuldades significativas para pessoas com baixa visão ou daltonismo. Recomenda-se fornecer as mesmas informações em um formato alternativo (texto ou tabela) abaixo do widget. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/images/complex">imagens complexas.</a>',
    EMBED_MISSING_TITLE: 'O conteúdo incorporado requer um nome acessível que descreva seu conteúdo. Forneça um atributo <code>title</code> ou <code>aria-label</code> exclusivo no elemento <code>iframe</code>. Saiba mais sobre <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL_WARNING: 'Não foi possível verificar o conteúdo incorporado. Certifique-se de que as imagens tenham texto alternativo, os vídeos tenham legendas, o texto tenha contraste suficiente e os componentes interativos sejam <a href="https://webaim.org/techniques/keyboard/">acessíveis ao teclado.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> com elementos não focalizáveis não deve ter <code>tabindex="-1"</code>. O conteúdo incorporado não será acessível pelo teclado.',
    QA_BAD_LINK: 'Encontrado link incorreto. O link parece apontar para um ambiente de desenvolvimento. <hr> Esse link aponta para: <br> <strong {r}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Link quebrado na mesma página. O destino do link não corresponde a nenhum elemento nesta página.',
    QA_BAD_ITALICS: 'As tags negrito e itálico têm significado semântico e não devem ser usadas para destacar parágrafos inteiros. O texto em negrito deve ser usado para dar forte <strong>ênfase</strong> a uma palavra ou frase. O itálico deve ser usado para destacar nomes próprios (ou seja, títulos de livros e artigos), palavras estrangeiras e citações. As citações longas devem ser formatadas como uma citação em bloco.',
    QA_PDF: 'Não é possível verificar a acessibilidade de PDFs. Os PDFs são considerados conteúdo da Web e também devem ser acessíveis. Os PDFs geralmente contêm problemas para pessoas que usam leitores de tela (tags estruturais ausentes ou rótulos de campo de formulário ausentes) e pessoas com baixa visão (o texto não flui novamente quando ampliado). <ul><li>Se este for um formulário, considere o uso de um formulário HTML acessível como alternativa.</li><li>Se este for um documento, considere convertê-lo em uma página da Web.</li></ul> Caso contrário, verifique a acessibilidade do <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF no Acrobat DC.</a>',
    QA_DOCUMENT: 'Não é possível verificar a acessibilidade do documento. Os documentos vinculados são considerados conteúdo da Web e também devem ser acessíveis. Revise manualmente este documento. <ul><li>Torne seu <a href="https://support.google.com/docs/answer/6199477?hl=pt-br">documento ou apresentação do Google Workspace mais acessível.</a></li><li>Torne seus <a href="https://support.microsoft.com/pt-br/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">documentos do Office mais acessíveis.</a></li></ul>',
    QA_PAGE_LANGUAGE: 'O idioma da página não foi declarado! Por favor, <a href="https://www.w3.org/International/questions/qa-html-language-declarations">declare o idioma na tag HTML.</a>',
    QA_PAGE_TITLE: 'Título da página ausente! Forneça um <a href="https://developer.mozilla.org/pt-br/docs/Web/HTML/Element/title">título da página.</a>',
    QA_BLOCKQUOTE_MESSAGE: 'Isso é um título? <strong {w}>%(TEXT)</strong> <hr> As aspas de bloco devem ser usadas somente para citações. Se a intenção é que isso seja um título, altere essa citação de bloco para um título semântico (por exemplo, Título 2 ou Título 3).',
    QA_FAKE_HEADING: 'Isso é um título? <strong {w}>%(TEXT)</strong> <hr> Uma linha de texto em negrito ou grande pode parecer um título, mas alguém que usa um leitor de tela não pode dizer que ela é importante ou pular para o seu conteúdo. O texto em negrito ou grande nunca deve substituir os títulos semânticos (Título 2 a Título 6).',
    QA_SHOULD_BE_LIST: 'Está tentando criar uma lista? Possível item de lista encontrado: <strong {w}>%(firstPrefix)</strong> <hr> Certifique-se de usar listas semânticas usando os botões de formatação de marcadores ou números. Ao usar uma lista semântica, as tecnologias assistivas podem transmitir informações como o número total de itens e a posição relativa de cada item na lista. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">listas semânticas.</a>',
    QA_UPPERCASE_WARNING: 'Encontrado em letras maiúsculas. Alguns leitores de tela podem interpretar o texto em letras maiúsculas como um acrônimo e lerão cada letra individualmente. Além disso, algumas pessoas acham que o texto em letras maiúsculas é mais difícil de ler e pode dar a impressão de estar GRITANDO.',
    QA_DUPLICATE_ID: 'Encontrada <strong>identificação duplicada</strong>. Erros de ID duplicado são conhecidos por causar problemas para tecnologias assistivas quando elas estão tentando interagir com o conteúdo. <hr> Remova ou altere o seguinte ID: <strong {r}>%(id)</strong>',
    QA_TEXT_UNDERLINE_WARNING: 'O texto sublinhado pode ser confundido com links. Considere a possibilidade de usar um estilo diferente, como <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> ou <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT_WARNING: 'As opções de formatação subscrito e sobrescrito só devem ser usadas para alterar a posição do texto para convenções ou padrões tipográficos. Elas <strong>não</strong> devem ser usadas somente para fins de apresentação ou aparência. A formatação de frases inteiras apresenta problemas de legibilidade. Os casos de uso apropriados incluem a exibição de expoentes, números ordinais, como 4<sup>th</sup> em vez de quarto, e fórmulas químicas (por exemplo, H<sub>2</sub>O).',
    TABLES_MISSING_HEADINGS: 'Falta de cabeçalhos de tabela! As tabelas acessíveis precisam de marcação HTML que indique as células de cabeçalho e as células de dados que definem seu relacionamento. Essas informações fornecem contexto para as pessoas que usam tecnologia assistiva. As tabelas devem ser usadas somente para dados tabulares. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    TABLES_SEMANTIC_HEADING: 'Os cabeçalhos semânticos, como Heading 2 ou Heading 3, devem ser usados somente para seções de conteúdo; <strong>não</strong> em tabelas HTML. Em vez disso, indique os cabeçalhos da tabela usando o elemento <code>&lt;th&gt;</code>. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    TABLES_EMPTY_HEADING: 'Encontrado um cabeçalho de tabela vazio! Os cabeçalhos de tabela <strong>nunca</strong> devem estar vazios. É importante designar os cabeçalhos de linha e/ou coluna para transmitir sua relação. Essas informações fornecem contexto para as pessoas que usam tecnologia assistiva. Lembre-se de que as tabelas devem ser usadas somente para dados tabulares. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    CONTRAST_ERROR: 'Esse texto não tem contraste suficiente com o plano de fundo. A taxa de contraste deve ser de pelo menos 4,5:1 para texto normal e 3:1 para texto grande. <hr> A taxa de contraste é <strong {r}>%(RATIO)</strong> para o texto a seguir: <strong {r}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'O contraste desse texto é desconhecido e precisa ser revisado manualmente. Certifique-se de que o texto e o plano de fundo tenham cores fortes e contrastantes. A taxa de contraste deve ser de pelo menos 4,5:1 para texto normal e 3:1 para texto grande. <hr> Por favor, revise: <strong {w}>%(TEXT)</strong>',
    CONTRAST_INPUT_ERROR: 'O texto nessa entrada não tem contraste suficiente com o plano de fundo. A taxa de contraste deve ser de pelo menos 4,5:1 para texto normal e 3:1 para texto grande. <hr> Taxa de contraste: <strong {r}>%(RATIO)</strong>',
  },
};

export { ptBR as default };
