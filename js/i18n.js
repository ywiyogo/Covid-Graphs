// https://kazupon.github.io/vue-i18n/

const messages = {
    en: {
        text: {
            siteTitle: 'Interactive Covid-19 Graphs in Germany',
            language: 'Language',
            country: 'Country',
            source: 'Sources',
            notes: 'Notes: '
        },
        notes: {
            n0: 'Reference',
            n1: 'The numbers of the positive tests does not directly imply the number of the infected people, since a person can be tested multiple times!',
            n2: 'The numbers for the 10th calendar week represent all the number up to calendar week 10.',
            n3: 'The deaths are currently registered up to the 37nd week. The numbers are not finals and can be updated by RKI.',
            n4: 'Hover your mouse to the legend to highlight only one category.',
            n5: 'The testing data sources come from the daily situation report of RKI: ',
            n6: 'The R values data sources as of October 11, 2020 come from: ',
            n7: 'Another video analysis of Covid-19 dataset worldwide: ',
            n8: 'Die source of the 7 days incidence per 100.000 population: '
        },
        footer: {
            title: 'Support',
            text1: 'If you appreciate my work, you can help by contributing to the code/dataset or doing a donation on Paypal.',
            button1: 'Support',
            text2: 'Please write any suggestions or issues directly on Github: ',
            button2: 'Report issues'
        }
    },
    de: {
        text: {
            siteTitle: 'Interaktive Covid-19 Graphen in Deutschland',
            language: 'Sprache',
            country: 'Land',
            source: 'Quellen',
            notes: 'Anmerkungen: '
        },
        notes: {
            n0: 'Referenz',
            n1: 'Die Anzahl der positiven Tests impliziert nicht direkt die Anzahl der infizierten Personen, da eine Person mehrfach getestet werden kann!',
            n2: 'Die Testzahlen für die 10. Kalenderwoche repräsentieren alle Zahlen bis zur Kalenderwoche 10.',
            n3: 'Die Todesfälle sind derzeit noch bis zur 37. Woche registriert. Die Zahlen sind noch nicht endgültig und können von RKI aktualisiert werden.',
            n4: 'Bewegen Sie den Mauszeiger über die Legende, um nur eine Kategorie hervorzuheben.',
            n5: 'Die Testdatensätze stammen aus dem täglichen Lagebericht von RKI: ',
            n6: 'Die Datenquellen für die R-Werte stand 11.10.2020 stammen aus: ',
            n7: 'Eine weitere Videoanalyse der weltweiten Covid-19-Datensätzen: ',
            n8: 'Die Quelle von 7-Tage Inzidenzen pro 100.000 Einwohner: '
        },
        footer: {
            title: 'Unterstützung',
            text1: 'Wenn Sie meine Arbeit schätzen, können Sie mir helfen, indem Sie zum Code/Datensatz beitragen oder auf Paypal spenden.',
            button1: 'Unterstützung',
            text2: 'Bitte schreiben Sie Ihre Korrektur / Vorschläge direkt auf dem Github-Plattform: ',
            button2: 'Korrektur melden'
        }
    }
}

// Create VueI18n instance with options
const i18n = new VueI18n({
    locale: 'de', // set locale
    messages, // set locale messages
})

// change other locale
i18n.locale = 'de'