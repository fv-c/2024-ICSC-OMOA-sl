document.addEventListener("DOMContentLoaded", function() {
    function csoundLang(hljs) {
        return {
            name: 'Csound',
            case_insensitive: true,
            keywords: {
                keyword: 'instr endin opcode endop if then else endif',
                built_in: 'a b i k p f gi ga gk gi gr gb gw gt gv',
                literal: '0dbfs abs acos aexpon allpass allpase allpassm ' +
                        'amplitude analysis and arctan atonex atan2 avgarray ' +
                        'bessel binload bpf butterbp butterlp buttrbn'
            },
            contains: [
                // Evidenziazione dei commenti su una singola riga che iniziano con ;
                {
                    className: 'comment',
                    begin: ';',
                    end: '$',
                    relevance: 0
                },
                // Evidenziazione dei commenti su più righe
                hljs.C_BLOCK_COMMENT_MODE,
                // Evidenziazione delle stringhe
                hljs.QUOTE_STRING_MODE,
                // Evidenziazione dei numeri
                hljs.NUMBER_MODE,
                // Evidenziazione della parola 'opcode'
                // {
                //     className: 'keyword opcode',
                //     begin: '\\bopcode\\b'
                // },
                // Evidenziazione del nome dell'opcode
                {
                    className: 'title function',
                    begin: '\\bopcode\\b\\s+(\\w+)',
                    end: '\\s+',
                    returnBegin: true,
                    contains: [
                        {
                            className: 'title.function',
                            begin: '\\w+',
                            relevance: 0
                        }
                    ]
                },
                // Evidenziazione delle parole chiave (per priorità, prima delle variabili)
                {
                    className: 'keyword',
                    begin: '\\b(if|then|else|endif)\\b'
                },
                // Evidenziazione delle variabili audio (iniziano con 'a')
                {
                    className: 'variable audio',
                    begin: '\\ba\\w*\\b'
                },
                // Evidenziazione delle variabili di controllo (iniziano con 'k')
                {
                    className: 'variable control',
                    begin: '\\bk\\w*\\b'
                },
                // Evidenziazione delle variabili di inizializzazione (iniziano con 'i' e non sono parole chiave)
                {
                    className: 'variable initialization',
                    begin: '\\bi(?!f\\b)[A-Za-z0-9_]*\\b'
                }
            ]
        };
    }

    hljs.registerLanguage('csound', csoundLang);
    hljs.highlightAll();
});
