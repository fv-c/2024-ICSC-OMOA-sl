document.addEventListener("DOMContentLoaded", function() {
    function csoundLang(hljs) {
        return {
            name: 'Csound',
            case_insensitive: false,
            keywords: {
                keyword: 'instr endin opcode endop if then else endif xin xout',
                built_in: 'a b i k p f gi ga gk gi gr gb gw gt gv',
                literal: '0dbfs abs acos aexpon allpass allpase allpassm ' +
                        'amplitude analysis and arctan atonex atan2 avgarray ' +
                        'bessel binload bpf butterbp butterlp buttrbn mpulse setksmps system_i strcat ftgen ftprint ftsave exitnow phasor tablew schedule sqrt'
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
                // {
                //     className: 'title function',
                //     begin: '\\bopcode\\b\\s+(\\w+)',
                //     end: '\\s+',
                //     returnBegin: true,
                //     contains: [
                //         {
                //             className: 'title.function',
                //             begin: '\\w+',
                //             relevance: 0
                //         }
                //     ]
                // },
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
                // Evidenziazione delle variabili globali di inizializzazione (iniziano con 'gi' e devono essere in corsivo)
                {
                    className: 'variable globinitialization',
                    begin: '\\bgi[A-Za-z0-9_]*\\b',
                    relevance: 0
                },
                // Evidenziazione delle variabili di inizializzazione (iniziano con 'i' e non sono parole chiave)
                {
                    className: 'variable initialization',
                    begin: '\\bi(?!f|nstr\\b)[A-Za-z0-9_]*\\b'
                },
                // Evidenziazione delle stringhe (iniziano con 'S')
                {
                    className: 'variable string',
                    begin: '\\bS(?!EQ)\\w*\\b',
                    relevance: 0
                },
                // Evidenziazione delle costanti (es. sr, kr, ksmps, nchnls, 0dbfs)
                {
                    className: 'constant',
                    begin: '\\b(sr|kr|ksmps|nchnls|0dbfs)\\b',
                    relevance: 0
                }
            ]
        };
    }

    hljs.registerLanguage('csound', csoundLang);
    hljs.highlightAll();
});
