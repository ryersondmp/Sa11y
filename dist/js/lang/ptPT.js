
/*!
  * Sa11y, the accessibility quality assurance assistant.
  * @version 3.2.1
  * @author Adam Chaboryk
  * @license GPL-2.0-or-later
  * @copyright © 2020 - 2024 Toronto Metropolitan University.
  * @contact adam.chaboryk@torontomu.ca
  * GitHub: git+https://github.com/ryersondmp/sa11y.git | Website: https://sa11y.netlify.app
  * For all acknowledgements, please visit: https://sa11y.netlify.app/acknowledgements/
  * The above copyright notice shall be included in all copies or substantial portions of the Software.
**/
/*! WARNING: This is a machine-generated translation and may contain errors or inaccuracies. */
var ptPT = {
  // Portuguese (Portugal)
  strings: {
    LANG_CODE: 'pt-pt',
    MAIN_TOGGLE_LABEL: 'Verificar a acessibilidade',
    CONTAINER_LABEL: 'Verificador de acessibilidade',
    ERROR: 'Erro',
    ERRORS: 'Erros',
    WARNING: 'Aviso',
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
    MISSING: 'Em falta',
    PAGE_ISSUES: 'Questões de página',
    SETTINGS: 'Definições',
    CONTRAST: 'Contraste',
    FORM_LABELS: 'Etiquetas de formulário',
    LINKS_ADVANCED: 'Ligações (Avançado)',
    DARK_MODE: 'Modo escuro',
    SHORTCUT_SCREEN_READER: 'Saltar para a edição. Atalho de teclado: Alt S',
    SHORTCUT_TOOLTIP: 'Saltar para a edição',
    NEW_TAB: 'Abre um novo separador',
    LINKED: 'Vinculado',
    PANEL_HEADING: 'Controlo de acessibilidade',
    PANEL_STATUS_NONE: 'Não foram encontrados erros.',
    PANEL_ICON_WARNINGS: 'avisos encontrados.',
    PANEL_ICON_TOTAL: 'total de problemas encontrados.',
    NOT_VISIBLE_ALERT: 'O item que está a tentar visualizar não está visível; pode estar oculto ou dentro de um componente de acordeão ou separador. Aqui está uma pré-visualização:',
    ERROR_MISSING_ROOT_TARGET: 'A página completa foi verificada quanto à acessibilidade porque a área de destino <code>%(root)</code> não existe.',
    HEADING_NOT_VISIBLE_ALERT: 'O cabeçalho não é visível; pode estar oculto ou dentro de um componente de acordeão ou separador.',
    SKIP_TO_PAGE_ISSUES: 'Saltar para os problemas da página',
    CONSOLE_ERROR_MESSAGE: 'Desculpe, mas há um problema com o verificador de acessibilidade nesta página. Pode, por favor, <a href="%(link)">relatar o problema através deste formulário</a> ou no <a href="%(link)">GitHub</a>?',

    // Dismiss
    PANEL_DISMISS_BUTTON: 'Mostrar %(dismissCount) avisos rejeitados',
    DISMISS: 'Rejeitar',
    DISMISSED: 'Advertências rejeitadas',
    DISMISS_REMINDER: 'Tenha em atenção que os avisos são apenas <strong>temporariamente</strong> rejeitados. Limpar o histórico e os cookies do seu browser irá restaurar todos os avisos anteriormente rejeitados em todas as páginas.',

    // Export
    DATE: 'Data',
    PAGE_TITLE: 'Título da página',
    RESULTS: 'Resultados',
    EXPORT_RESULTS: 'Exportar resultados',
    GENERATED: 'Resultados gerados com %(tool).',
    PREVIEW: 'Pré-visualização',
    ELEMENT: 'Elemento',
    PATH: 'Caminho',

    // Colour filters
    COLOUR_FILTER: 'Filtro de cor',
    PROTANOPIA: 'Protanopia',
    DEUTERANOPIA: 'Deuteranopia',
    TRITANOPIA: 'Tritanopia',
    MONOCHROMACY: 'Monocromacia',
    COLOUR_FILTER_MESSAGE: 'Verificar se existem elementos difíceis de perceber ou distinguir de outras cores.',
    RED_EYE: 'Cego vermelho.',
    GREEN_EYE: 'Cego verde.',
    BLUE_EYE: 'Cego azul.',
    MONO_EYE: 'Cego vermelho, azul e verde.',
    COLOUR_FILTER_HIGH_CONTRAST_MESSAGE: 'Os filtros de cor não funcionam no modo de alto contraste.',

    // Alternative text stop words
    SUSPICIOUS_ALT_STOPWORDS: [
      'imagem',
      'gráfico',
      'imagem',
      'fotografia',
      'photo',
      'image',
      'graphic',
    ],
    PLACEHOLDER_ALT_STOPWORDS: [
      'alt',
      'imagem',
      'fotografia',
      'decorativo',
      'photo',
      'image',
      'graphic',
      'marcador de posição',
      'imagem de marcador de posição',
      'espaçador',
    ],
    PARTIAL_ALT_STOPWORDS: [
      'clique',
      'clique aqui',
      'clique aqui para mais',
      'clique aqui para saber mais',
      'clicando aqui',
      'verificar',
      'detalhado aqui',
      'descarregar',
      'descarregar aqui',
      'descobrir',
      'saber mais',
      'para saber mais',
      'forma',
      'aqui',
      'informação',
      'ligação',
      'aprender',
      'aprender a',
      'mais',
      'página',
      'papel',
      'ler mais',
      'ler',
      'ler isto',
      'este',
      'esta página',
      'este sítio web',
      'ver',
      'ver a nossa',
      'sítio web',
    ],
    WARNING_ALT_STOPWORDS: [
      'clique aqui',
    ],
    NEW_WINDOW_PHRASES: [
      'externo',
      'novo separador',
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
    READABILITY_NO_P_OR_LI_MESSAGE: 'Não é possível calcular a pontuação de legibilidade. Nenhum parágrafo <code>&lt;p&gt;</code> ou conteúdo de lista <code>&lt;li&gt;</code> encontrado.',
    READABILITY_NOT_ENOUGH_CONTENT_MESSAGE: 'Não há conteúdo suficiente para calcular a pontuação de legibilidade.',
    HEADING_NON_CONSECUTIVE_LEVEL: 'Nível de cabeçalho não consecutivo utilizado. Os títulos nunca devem saltar níveis, ou ir de <strong>Título %(prevLevel)</strong> para <strong {r}>Título %(level)</strong>.',
    HEADING_EMPTY: 'Encontrado um título vazio! Para corrigir, elimine esta linha ou altere o seu formato de <strong {r}>Título %(level)</strong> para <strong>Normal</strong> ou <strong>Parágrafo</strong>.',
    HEADING_LONG: 'O título é longo! Os títulos devem ser utilizados para organizar o conteúdo e transmitir estrutura. Devem ser breves, informativos e únicos. Os títulos devem ter menos de 160 caracteres (não mais do que uma frase). <hr> <strong {B}>%(HEADING_LENGTH) Caracteres</strong>',
    HEADING_FIRST: 'O primeiro título de uma página deve ser normalmente o Título 1 ou o Título 2. O Título 1 deve ser o início da secção de conteúdo principal e é o título principal que descreve o objetivo geral da página. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Estrutura de títulos.</a>',
    HEADING_MISSING_ONE: 'Falta o Título 1. O Título 1 deve ser o início da área de conteúdo principal e é o título principal que descreve o objetivo geral da página. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/headings/">Estrutura de cabeçalho.</a>',
    HEADING_EMPTY_WITH_IMAGE: 'O cabeçalho não tem texto, mas contém uma imagem. Se não for um cabeçalho, altere o formato de <strong {r}>Título %(level)</strong> para <strong>Normal</strong> ou <strong>Parágrafo</strong>. Caso contrário, adicione texto alternativo à imagem se esta não for decorativa.',
    PANEL_HEADING_MISSING_ONE: 'Falta o título 1!',
    PANEL_NO_HEADINGS: 'Não foram encontrados cabeçalhos.',
    LINK_EMPTY: 'Remover ligações vazias sem qualquer texto.',
    LINK_EMPTY_LABELLEDBY: 'A ligação tem um valor para <code>aria-labelledby</code> que está vazio ou não corresponde ao valor do atributo <code>id</code> de outro elemento na página.',
    LINK_EMPTY_LINK_NO_LABEL: 'A ligação não tem texto discernível que seja visível para leitores de ecrã e outras tecnologias de assistência. Para corrigir: <ul><li>Adicione um texto conciso que descreva para onde o link o leva.</li><li>Se for um <a href="https://a11y-101.com/development/icons-and-links">link de ícone ou SVG,</a> é provável que esteja faltando um rótulo descritivo.</li><li>Se você acha que esse link é um erro devido a um bug de copiar/colar, considere excluí-lo.</li></ul>',
    LINK_LABEL: '<strong {B}>Rótulo</strong> %(TEXT)',
    LINK_STOPWORD: 'O texto do link pode não ser suficientemente descritivo fora do contexto: <strong {r}>%(ERROR)</strong> <hr> <strong>Dica!</strong> O texto do link deve ser sempre claro, único e significativo. Evite palavras comuns como &quot;clique aqui&quot; ou &quot;saiba mais&quot;',
    LINK_BEST_PRACTICES: 'Considere a substituição do texto do link: <strong {W}>%(ERROR)</strong> <hr> <ul><li>&quot;Clique aqui&quot; coloca o foco na mecânica do rato, quando muitas pessoas não usam um rato ou podem estar a ver este site num dispositivo móvel. Considere a utilização de um verbo diferente relacionado com a tarefa.</li><li>Evite utilizar símbolos HTML como chamadas para acções, a menos que estejam ocultos para tecnologias de assistência.</li></ul>',
    LINK_URL: 'URLs mais longos e menos inteligíveis utilizados como texto de ligação podem ser difíceis de compreender quando acedidos com tecnologia de assistência. Na maioria dos casos, é melhor usar texto legível por humanos em vez do URL. URLs curtos (como a página inicial de um site) são aceitáveis. <hr> <strong>Dica!</strong> O texto do link deve ser sempre claro, único e significativo para que possa ser entendido fora do contexto.',
    LINK_DOI: 'Para páginas Web ou recursos apenas em linha, o <a href="https://apastyle.apa.org/style-grammar-guidelines/paper-format/accessibility/urls#:~:text=descriptive%20links">Guia de Estilo APA</a> recomenda a utilização de hiperligações descritivas, envolvendo o URL ou DOI do trabalho no seu título. URLs mais longos e menos inteligíveis utilizados como texto de ligação podem ser difíceis de compreender quando acedidos com tecnologia de assistência.',
    NEW_TAB_WARNING: 'A ligação abre num novo separador ou janela sem aviso. Se o fizer, pode ser desorientador, especialmente para as pessoas que têm dificuldade em percecionar conteúdos visuais. Em segundo lugar, nem sempre é uma boa prática controlar a experiência de alguém ou tomar decisões por ele. Indique que a hiperligação abre numa nova janela no texto da hiperligação<hr><strong>Dica!</strong> Conheça as melhores práticas: <a href="https://www.nngroup.com/articles/new-browser-windows-and-tabs/">abrir ligações em novas janelas e separadores do browser.</a>',
    FILE_TYPE_WARNING: 'A ligação aponta para um PDF ou um ficheiro descarregável (por exemplo, MP3, Zip, Word Doc) sem aviso. Indique o tipo de ficheiro no texto da ligação. Se for um ficheiro grande, considere incluir o tamanho do ficheiro. <hr> <strong>Exemplo:</strong> Relatório executivo (PDF, 3MB)',
    LINK_IDENTICAL_NAME: 'A ligação tem um texto idêntico ao de outra ligação, embora aponte para uma página diferente. Vários links com o mesmo texto podem causar confusão para pessoas que usam leitores de tela. <hr> Considere tornar o link a seguir mais descritivo para ajudar a distingui-lo de outros links: <strong {W}>%(TEXT)</strong>',
    MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE: 'A imagem está a ser utilizada como uma ligação com texto envolvente, embora o atributo alt deva ser marcado como decorativo ou nulo.',
    MISSING_ALT_LINK_MESSAGE: 'A imagem está a ser utilizada como uma ligação, mas falta o texto alternativo! Certifique-se de que o texto alternativo descreve para onde a hiperligação o leva.',
    MISSING_ALT_MESSAGE: 'Texto alternativo em falta! Se a imagem transmite uma história, um estado de espírito ou uma informação importante, não se esqueça de a descrever.',
    LINK_ALT_HAS_FILE_EXTENSION: 'Extensão de ficheiro no texto alternativo encontrada. Certifique-se de que o texto alternativo descreve o destino da hiperligação e não uma descrição literal da imagem. Remover: <strong {r}>%(ERROR)</strong> <hr> {ALT} {L} <strong {r}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE: 'Encontrado texto alternativo não descritivo ou de espaço reservado numa imagem ligada. Certifique-se de que o texto alternativo descreve o destino da hiperligação e não uma descrição literal da imagem. Substitua o seguinte texto alternativo. <hr> {ALT} {L} <strong {r}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_SUS_ALT_MESSAGE: 'As tecnologias de assistência já indicam que se trata de uma imagem, pelo que &quot;<strong {W}>%(ERROR)</strong>&quot; pode ser redundante. Certifique-se de que o texto alternativo descreve o destino da hiperligação e não uma descrição literal da imagem. <hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
    ALT_HAS_FILE_EXTENSION: 'Extensão do ficheiro no texto alternativo encontrado. Se a imagem transmitir uma história, um estado de espírito ou uma informação importante, não se esqueça de a descrever. Remover: <strong {r}>%(ERROR)</strong> <hr> {ALT} <strong {r}>%(ALT_TEXT)</strong>',
    ALT_PLACEHOLDER_MESSAGE: 'Encontrado texto alternativo não descritivo ou de espaço reservado. Substitua o seguinte texto alternativo por algo mais significativo. <hr> {ALT} <strong {r}>%(ALT_TEXT)</strong>',
    ALT_HAS_SUS_WORD: 'As tecnologias de assistência já indicam que se trata de uma imagem, pelo que &quot;<strong {W}>%(ERROR)</strong>&quot; pode ser redundante. <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
    LINK_HIDDEN_FOCUSABLE: 'O link tem <code>aria-hidden=&quot;true&quot;</code>, mas ainda é focável pelo teclado. Se pretende ocultar um link redundante ou duplicado, adicione também <code>tabindex=&quot;-1&quot;</code>.',
    LINK_IMAGE_NO_ALT_TEXT: 'A imagem na hiperligação está marcada como decorativa e não tem texto de hiperligação. Adicione um texto alternativo à imagem que descreva o destino da hiperligação.',
    LINK_IMAGE_HAS_TEXT: 'A imagem está marcada como decorativa, embora a ligação esteja a utilizar o texto circundante como etiqueta descritiva.',
    LINK_IMAGE_LONG_ALT: 'A descrição do texto alternativo numa imagem ligada é <strong>muito longa</strong>. O texto alternativo em imagens vinculadas deve descrever para onde o link o leva, não uma descrição literal da imagem. <strong>Considere usar o título da página para a qual o link leva como o texto alternativo.</strong> <hr> {ALT} {L} <strong {B}>%(altLength) Caracteres</strong> <strong {W}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_WARNING: 'A hiperligação da imagem contém texto alternativo. <strong>O texto alternativo descreve para onde o link o leva?</strong> Considere a possibilidade de utilizar o título da página para a qual a ligação remete como texto alternativo. <hr> {ALT} {L} <strong {W}>%(ALT_TEXT)</strong>',
    LINK_IMAGE_ALT_AND_TEXT_WARNING: 'Se esta imagem for decorativa e estiver a ser utilizada como uma ligação funcional a outra página, considere marcar a imagem como decorativa ou nula - o texto da ligação circundante deve ser suficiente. <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong> <hr> <strong {B}>Rótulo</strong> {L} <strong {W}>%(TEXT)</strong>',
    IMAGE_FIGURE_DECORATIVE: 'A imagem está marcada como <strong>decorativa</strong> e será ignorada pela tecnologia de assistência. <hr> Embora tenha sido fornecida uma <strong>capa</strong>, a imagem também deve ter um texto alternativo na maioria dos casos. <ul><li>O texto alternativo deve fornecer uma descrição concisa do que está na imagem.</li><li>A legenda deve normalmente fornecer contexto para relacionar a imagem com o conteúdo circundante ou dar atenção a uma informação específica.</li></ul> Saiba mais: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a>',
    IMAGE_FIGURE_DUPLICATE_ALT: 'Não utilize exatamente as mesmas palavras para o texto alternativo e para a legenda. Os leitores de ecrã anunciarão a informação duas vezes. <ul><li>O texto alternativo deve fornecer uma descrição concisa do que está na imagem.</li><li>A legenda deve normalmente fornecer contexto para relacionar a imagem com o conteúdo circundante ou dar atenção a uma informação específica.</li></ul> Saiba mais: <a href="https://thoughtbot.com/blog/alt-vs-figcaption#the-figcaption-element">alt versus figcaption.</a> <hr> {ALT} <strong {W}>%(ALT_TEXT)</strong>',
    IMAGE_DECORATIVE: 'A imagem está marcada como <strong>decorativa</strong> e será ignorada pela tecnologia de assistência. Se a imagem transmitir uma história, um estado de espírito ou informações importantes, não se esqueça de adicionar texto alternativo.',
    IMAGE_ALT_TOO_LONG: 'A descrição do texto alternativo é <strong>muito longa</strong>. O texto alternativo deve ser conciso, mas significativo, como um <em>tweet</em> (cerca de 100 caracteres). Se esta for uma imagem complexa ou um gráfico, considere colocar a descrição longa da imagem no texto abaixo ou num componente de acordeão. <hr> {ALT} <strong {B}>%(altLength) Caracteres</strong> <strong {W}>%(ALT_TEXT)</strong>',
    IMAGE_PASS: '{ALT} %(ALT_TEXT)',
    LABELS_MISSING_IMAGE_INPUT_MESSAGE: 'O botão de imagem não tem texto alternativo. Adicione texto alternativo para fornecer um nome acessível. Por exemplo: <em>Pesquisar</em> ou <em>Submeter</em>.',
    LABELS_INPUT_RESET_MESSAGE: 'Os botões de reinicialização <strong>não</strong> devem ser usados a menos que sejam especificamente necessários, pois são fáceis de ativar por engano. <hr> <strong>Dica!</strong> Saiba por que <a href="https://www.nngroup.com/articles/reset-and-cancel-buttons/">os botões Redefinir e Cancelar apresentam problemas de usabilidade.</a>',
    LABELS_ARIA_LABEL_INPUT_MESSAGE: 'A entrada tem um nome acessível, mas certifique-se de que também existe uma etiqueta visível. <hr> <strong {B}>Rótulo</strong> <strong {W}>%(TEXT)</strong>',
    LABELS_NO_FOR_ATTRIBUTE_MESSAGE: 'Não existe um rótulo associado a esta entrada. Adicione um atributo <code>for</code> ao rótulo que corresponde ao <code>id</code> desta entrada. <hr> O ID para esta entrada é: <strong>id=&#34;%(id)&#34;</strong>',
    LABELS_MISSING_LABEL_MESSAGE: 'Não existe uma etiqueta associada a esta entrada. Adicione um <code>id</code> a esta entrada e adicione um atributo <code>for</code> correspondente à etiqueta.',
    EMBED_VIDEO: 'Por favor, certifique-se de que <strong>todos os vídeos têm legendas fechadas.</strong> Fornecer legendas para todo o conteúdo de áudio e vídeo é um requisito obrigatório de Nível A. As legendas ajudam as pessoas com deficiência auditiva ou surdas.',
    EMBED_AUDIO: 'Certifique-se de que fornece uma <strong>transcrição para todos os podcasts.</strong> Fornecer transcrições para conteúdo áudio é um requisito obrigatório de Nível A. As transcrições ajudam as pessoas surdas ou com dificuldades auditivas, mas podem beneficiar toda a gente. Considere colocar a transcrição abaixo ou num painel de acordeão.',
    EMBED_DATA_VIZ: 'Os widgets de visualização de dados como este são frequentemente problemáticos para as pessoas que utilizam um teclado ou um leitor de ecrã para navegar e podem apresentar dificuldades significativas para as pessoas com baixa visão ou daltonismo. É recomendável fornecer as mesmas informações em um formato alternativo (texto ou tabela) abaixo do widget. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/images/complex">imagens complexas.</a>',
    EMBED_MISSING_TITLE: 'O conteúdo incorporado requer um nome acessível que descreva o seu conteúdo. Forneça um atributo <code>title</code> ou <code>aria-label</code> exclusivo no elemento <code>iframe</code>. Saiba mais sobre <a href="https://web.dev/learn/accessibility/more-html#iframes">iFrames.</a>',
    EMBED_GENERAL_WARNING: 'Não é possível verificar o conteúdo incorporado. Certifique-se de que as imagens têm texto alternativo, os vídeos têm legendas, o texto tem contraste suficiente e os componentes interactivos são <a href="https://webaim.org/techniques/keyboard/">acessíveis ao teclado.</a>',
    EMBED_UNFOCUSABLE: '<code>&lt;iframe&gt;</code> com elementos não focáveis não deve ter <code>tabindex="-1"</code>. O conteúdo incorporado não será acessível pelo teclado.',
    QA_BAD_LINK: 'Encontrada uma ligação incorrecta. O link parece apontar para um ambiente de desenvolvimento. <hr> Este link aponta para: <br> <strong {r}>%(LINK)</strong>',
    QA_IN_PAGE_LINK: 'Link quebrado na mesma página. O destino do link não corresponde a nenhum elemento nesta página.',
    QA_BAD_ITALICS: 'As etiquetas de negrito e itálico têm um significado semântico e não devem ser utilizadas para destacar parágrafos inteiros. O texto em negrito deve ser utilizado para dar <strong>ênfase</strong> a uma palavra ou frase. O itálico deve ser usado para destacar nomes próprios (ou seja, títulos de livros e artigos), palavras estrangeiras e citações. As citações longas devem ser formatadas como uma citação em bloco.',
    QA_PDF: 'Não é possível verificar a acessibilidade dos PDFs. Os PDFs são considerados conteúdos Web e também devem ser tornados acessíveis. Os PDFs contêm frequentemente problemas para pessoas que utilizam leitores de ecrã (etiquetas estruturais em falta ou etiquetas de campos de formulário em falta) e pessoas com baixa visão (o texto não flui quando ampliado). <ul><li>Se se tratar de um formulário, considere a utilização de um formulário HTML acessível como alternativa.</li><li>Se se tratar de um documento, considere a conversão do mesmo numa página Web.</li></ul> De outra forma, verifique a acessibilidade do <a href="https://helpx.adobe.com/acrobat/using/create-verify-pdf-accessibility.html">PDF no Acrobat DC.</a>',
    QA_DOCUMENT: 'Não é possível verificar a acessibilidade do documento. Os documentos ligados são considerados conteúdos Web e também têm de ser tornados acessíveis. Reveja manualmente este documento.  <ul><li>Tornar o seu <a href="https://support.google.com/docs/answer/6199477?hl=pt-pt">documento ou apresentação do Google Workspace mais acessível.</a></li><li>Tornar os seus <a href="https://support.microsoft.com/pt-pt/office/create-accessible-office-documents-868ecfcd-4f00-4224-b881-a65537a7c155">documentos do Office mais acessíveis.</a></li></ul>',
    QA_PAGE_LANGUAGE: 'Idioma da página não declarado! Por favor <a href="https://www.w3.org/International/questions/qa-html-language-declarations">declare o idioma na etiqueta HTML.</a>',
    QA_PAGE_TITLE: 'Título da página em falta! Forneça um <a href="https://developer.mozilla.org/pt-pt/docs/Web/HTML/Element/title">título da página.</a>',
    QA_BLOCKQUOTE_MESSAGE: 'Isto é um cabeçalho? <strong {W}>%(TEXT)</strong> <hr> As aspas de bloco devem ser usadas apenas para citações. Se se pretende que isto seja um título, altere esta citação de bloco para um título semântico (por exemplo, Título 2 ou Título 3).',
    QA_FAKE_HEADING: 'Isto é um título? <strong {W}>%(TEXT)</strong> <hr> Uma linha de texto grande ou a negrito pode parecer um título, mas uma pessoa que utilize um leitor de ecrã não consegue perceber que é importante ou saltar para o seu conteúdo. O texto a negrito ou grande nunca deve substituir os títulos semânticos (Título 2 a Título 6).',
    QA_SHOULD_BE_LIST: 'Está a tentar criar uma lista? Possível item de lista encontrado: <strong {W}>%(firstPrefix)</strong> <hr> Certifique-se de que utiliza listas semânticas, utilizando os botões de formatação de marcadores ou números. Ao usar uma lista semântica, as tecnologias de assistência podem transmitir informações como o número total de itens e a posição relativa de cada item na lista. Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/page-structure/content/#lists">listas semânticas.</a>',
    QA_UPPERCASE_WARNING: 'Encontrado em maiúsculas. Alguns leitores de ecrã podem interpretar o texto em maiúsculas como um acrónimo e lerão cada letra individualmente. Além disso, algumas pessoas consideram o texto em maiúsculas mais difícil de ler e pode dar a impressão de estar a GRITAR.',
    QA_DUPLICATE_ID: 'Encontrada <strong>identificação duplicada</strong>. Os erros de ID duplicada são conhecidos por causar problemas às tecnologias de assistência quando estas estão a tentar interagir com o conteúdo. <hr> Remova ou altere o seguinte ID: <strong {r}>%(id)</strong>',
    QA_TEXT_UNDERLINE_WARNING: 'O texto sublinhado pode ser confundido com links. Considere a utilização de um estilo diferente, como <code>&lt;strong&gt;</code><strong>strong importance</strong><code>&lt;/strong&gt;</code> ou <code>&lt;em&gt;</code><em>emphasis</em><code>&lt;/em&gt;</code>.',
    QA_SUBSCRIPT_WARNING: 'As opções de formatação subscrito e sobrescrito só devem ser utilizadas para alterar a posição do texto para convenções ou normas tipográficas. Não devem ser utilizadas apenas para fins de apresentação ou aparência. A formatação de frases inteiras apresenta problemas de legibilidade. Casos de uso apropriados incluem a exibição de expoentes, números ordinais como 4<sup>th</sup> em vez de quarto, e fórmulas químicas (por exemplo, H<sub>2</sub>O).',
    TABLES_MISSING_HEADINGS: 'Falta de cabeçalhos de tabela! As tabelas acessíveis necessitam de marcação HTML que indique as células de cabeçalho e as células de dados que definem a sua relação. Esta informação fornece contexto às pessoas que utilizam tecnologia de apoio. As tabelas devem ser utilizadas apenas para dados tabulares. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    TABLES_SEMANTIC_HEADING: 'Os títulos semânticos, como o Título 2 ou o Título 3, só devem ser utilizados para secções de conteúdo; <strong>não</strong> em tabelas HTML. Em vez disso, indique os cabeçalhos da tabela usando o elemento <code>&lt;th&gt;</code>. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    TABLES_EMPTY_HEADING: 'Encontrado um cabeçalho de tabela vazio! Os cabeçalhos de tabela <strong>nunca</strong> devem estar vazios. É importante designar os cabeçalhos de linha e/ou coluna para transmitir a sua relação. Esta informação fornece contexto às pessoas que utilizam tecnologia de assistência. Lembre-se de que as tabelas devem ser usadas apenas para dados tabulares. <hr> Saiba mais sobre <a href="https://www.w3.org/WAI/tutorials/tables/">tabelas acessíveis.</a>',
    CONTRAST_ERROR: 'Este texto não tem contraste suficiente com o fundo. A relação de contraste deve ser de pelo menos 4,5:1 para texto normal e 3:1 para texto grande. <hr> <strong {B}>Razão de contraste</strong> <strong {B}>%(RATIO)</strong> <strong {r}>%(TEXT)</strong>',
    CONTRAST_WARNING: 'O contraste deste texto é desconhecido e tem de ser revisto manualmente. Certifique-se de que o texto e o fundo têm cores fortes e contrastantes. A relação de contraste deve ser de pelo menos 4,5:1 para texto normal e 3:1 para texto grande. <hr> Por favor, reveja: <strong {W}>%(TEXT)</strong>',
    CONTRAST_INPUT_ERROR: 'O texto nesta entrada não tem contraste suficiente com o fundo. O rácio de contraste deve ser de, pelo menos, 4,5:1 para texto normal e 3:1 para texto grande. <hr> <strong {B}>Razão de contraste</strong> <strong {B}>%(RATIO)</strong>',
  },
};

export { ptPT as default };
