<template>
  <q-page class="bg-grey-3 column">
        <div id="chartTest">
            <apexchart type="line" width="100%" height="800rem" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
            <br/>
        </div>
        <q-page-container style="padding: 1em 5em ;">
            <q-card dark bordered class="bg-grey-9 my-card">
                <q-card-section>
                    <div class="text-h6">{{ $t("text.notes") }}</div>
                </q-card-section>

                <q-separator dark inset />

                <q-card-section>
                    <li>{{ $t("notes.n1") }}</li>
                                <li>{{ $t("notes.n2") }}</li>
                                <li>{{ $t("notes.n3") }}</li>
                                <li>{{ $t("notes.n4") }}</li>
                                <li>{{ $t("notes.n5") }}
                                    <a class="text-warning"
                                        href="https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html">https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Situationsberichte/Gesamt.html</a>
                                </li>
                </q-card-section>
            </q-card>
        </q-page-container>
  </q-page>
</template>

<script>
var num_of_tests = [124716, 127457, 348619, 361515, 408348, 380197, 331902, 363890, 326788, 403875, 432666, 353467, 405269, 340986, 327196, 388187, 467413, 506490, 510551, 538701, 572967, 581037, 733990, 891988, 1055662, 1101299, 1099560, 1162133, 1149171, 1168016, 1101413, 1188338, 1263716, 1418726, 1631343, 1608125, 1422301, 1367570, 1353980, 1329716, 1445671, 1613358, 1077066, 806908]
var num_of_positives = [3892, 7582, 23820, 31414, 36885, 30791, 22082, 18083, 12608, 10755, 7233, 5218, 4310, 3208, 2816, 5316, 3689, 3104, 2992, 3497, 4534, 5699, 7330, 8661, 9233, 8324, 8294, 10046, 13261, 14094, 18290, 29567, 44759, 78106, 116673, 126141, 126181, 127742, 125451, 135062, 165953, 185724, 138761, 128349]
var num_of_deaths = [3, 18, 162, 602, 1368, 1737, 1595, 1170, 785, 517, 356, 273, 151, 114, 73, 49, 53, 46, 28, 26, 31, 29, 30, 31, 40, 37, 19, 32, 54, 65, 80, 121, 234, 401, 777, 1206, 1600, 2035, 2767, 3234, 4019, 4840, 5298, 5145]
var positive_rates = [3.12, 5.95, 6.83, 8.69, 9.03, 8.1, 6.65, 4.97, 3.86, 2.66, 1.67, 1.48, 1.06, 0.94, 0.86, 1.37, 0.79, 0.61, 0.59, 0.65, 0.79, 0.98, 1, 0.97, 0.84, 0.74, 0.77, 0.86, 1.16, 1.22, 1.66, 2.49, 3.54, 5.51, 7.15, 7.84, 8.87, 9.34, 9.27, 10.16, 11.48, 11.51, 12.88, 15.91]
var week_numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]
var ifr = [0.001,0.002,0.007,0.019,0.037,0.056,0.072,0.065,0.062,0.048,0.049,0.052,0.035,0.036,0.026,0.009,0.014,0.015,0.009,0.007,0.007,0.005,0.004,0.004,0.004,0.004,0.002,0.003,0.004,0.005,0.004,0.004,0.005,0.005,0.007,0.010,0.013,0.016,0.022,0.024,0.024,0.026,0.038,0.040]


export default {
components: {
        apexchart: VueApexCharts
    },
    i18n: { // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_series: [{
                    name: 'Number of Tests',
                    type: 'column',
                    data: num_of_tests
                },
                {
                    name: "Positive Tests",
                    type: 'column',
                    data: num_of_positives
                },
                {
                    name: "Number of 'Covid-19 Deaths'",
                    type: 'column',
                    data: num_of_deaths
                },
                {
                    name: "Positive Rate",
                    type: 'line',
                    data: positive_rates
                },
                {
                    name: "Infection Fatality Rate",
                    type: 'line',
                    data: ifr
                },
                ],
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Tests & Infection Rate',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    zoom: {
                        type: 'xy',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 2,
                    },
                    colors: ['#008FFB', '#00E396', '#FF4560', '#FEB019', '#775DD0'], //https://apexcharts.com/docs/options/theme/
                    stroke: {
                        width: [4, 4, 4, 4, 3]
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "70%"
                        }
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '14px',
                            }
                        },
                        title: {
                            text: "Calendar weeks",
                            style: {
                                fontSize: '20px',
                            }
                        },
                        categories: week_numbers
                    },
                    yaxis: [{
                        seriesName: 'Number of Tests',
                        opposite: true,
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        title: {
                            text: "Numbers (bar plots)",
                            style: {
                                color: '#008FFB',
                                fontSize: '20px',
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                            },
                            formatter: function (value) {
                                return (value / 1000) + "K";
                            },
                        },
                    },
                    {
                        seriesName: 'Number of Tests',
                        show: false,
                        labels: {
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                        },
                    },
                    {
                        seriesName: 'Number of Tests',
                        show: false,
                        labels: {
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                        },

                    },
                    {
                        seriesName: 'Positive Rate',
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                            },
                            style: {
                                color: "#FEB019"
                            }
                        },
                        title: {
                            text: "Rate in % (line plot)",
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                            style: {
                                color: '#FEB019',
                                fontSize: '20px',
                            }
                        }
                    },
                    {
                        seriesName: 'Positive Rate',
                        show: true,
                    },

                    ],
                    tooltip: {
                        shared: false,
                        intersect: true,
                        x: {
                            show: true
                        },
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    annotations: {
                        xaxis: [{
                            x: 11,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '11.03.: WHO declared Covid-19 Pandemic',
                            }
                        },
                        {
                            x: 13,
                            x2: 19,
                            borderColor: '#000',
                            fillColor: '#FEB019',
                            opacity: 0.2,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                offsetY: -10,
                                text: '23.03.-06.05: Exit restriction',
                            }
                        },
                        {
                            x: 15,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                },
                                offsetY: -10,
                                text: '09.04.:"End of the pandemic only with vaccines"',
                            }
                        },
                        {
                            x: 16,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '15.04.: Mask obligation',
                            }
                        },
                        {
                            x: 19,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '09.05.: 1st Querdenken Demo in Stuttgart',
                            }
                        },
                        {
                            x: 23,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '06.06.: BLM Demo in big cities',
                            }
                        },
                        {
                            x: 25,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.06.: Corona-Warn-App, 18.06: Outbreak in Tönnies',
                            }
                        },
                        {
                            x: 31,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '01.08.: Querdenken Demo in Berlin',
                            }
                        },
                        {
                            x: 35,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '29.08.: Querdenken Demo in Berlin',
                            }
                        },
                        {
                            x: 45,
                            x2: 51,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,200,0,  0.4)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '02.11.: Lockdown "light", 07.11: Demo in Leipzig',
                            }
                        },
                        {
                            x: 51,
                            x2: 53,
                            strokeDashArray: 0,
                            fillColor: 'rgba(255,0,0,  0.6)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.12.: 2nd Lockdown',
                            }
                        }
                        ]
                    },
                },
            },
            de: {
                i18n_series: [{
                    name: 'Anzahl der Testungen',
                    type: 'column',
                    data: num_of_tests
                },
                {
                    name: "Positiv Getestet",
                    type: 'column',
                    data: num_of_positives
                },
                {
                    name: "Todesfälle",
                    type: 'column',
                    data: num_of_deaths
                },
                {
                    name: "Positivenrate",
                    type: 'line',
                    data: positive_rates
                },
                {
                    name: "Infektion-Verstorbene-Anteil",
                    type: 'line',
                    data: ifr
                },
                ],
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Testungen & Positivenrate',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    zoom: {
                        type: 'xy',
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: 'zoom'
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 2,
                    },
                    colors: ['#008FFB', '#00E396', '#FF4560', '#FEB019', '#775DD0'], //https://apexcharts.com/docs/options/theme/
                    stroke: {
                        width: [4, 4, 4, 4, 3]
                    },
                    plotOptions: {
                        bar: {
                            columnWidth: "70%"
                        }
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '14px',
                            }
                        },
                        title: {
                            text: "Kalenderwoche",
                            style: {
                                fontSize: '20px',
                            }
                        },
                        categories: week_numbers
                    },
                    yaxis: [{
                        seriesName: 'Anzahl der Testungen',
                        opposite: true,
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
                        title: {
                            text: "Anzahl (Balkendiagramm)",
                            style: {
                                color: '#008FFB',
                                fontSize: '20px',
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                            },
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                        },
                    },
                    {
                        seriesName: 'Anzahl der Testungen',
                        show: false,
                        labels: {
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                        },
                    },
                    {
                        seriesName: 'Anzahl der Testungen',
                        show: false,
                        opposite: true,
                        labels: {
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                        },
                    },
                    {
                        seriesName: 'Positivenrate',

                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#FEB019'
                        },
                        labels: {
                            style: {
                                fontSize: '14px',
                                color: "#FEB019"
                            }
                        },
                        title: {
                            text: "Rate in % (Liniendiagramm)",
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                            style: {
                                color: '#FEB019',
                                fontSize: '20px',
                            }
                        }
                    },
                    {
                        seriesName: 'Positivenrate',
                        show: true,
                    },

                    ],
                    tooltip: {
                        shared: false,
                        intersect: true,
                        x: {
                            show: true
                        },
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    annotations: {
                        xaxis: [{
                            x: 11,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '11.03.: WHO erklärte die Covid-19-Pandemie',
                            }
                        },
                        {
                            x: 13,
                            x2: 19,
                            borderColor: '#000',
                            fillColor: '#FEB019',
                            opacity: 0.2,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                offsetY: -10,
                                text: '23.03.-06.05.: 1. Lockdown',
                            }
                        },
                        {
                            x: 15,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                },
                                offsetY: -10,
                                text: '09.04.:"Ohne Impfstoffe endet die Pandemie nicht."',
                            }
                        },
                        {
                            x: 18,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '27.04.: Maskenpflicht',
                            }
                        },
                        {
                            x: 19,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '09.05.: 1. Querdenken-Demo in Stuttgart',
                            }
                        },
                        {
                            x: 23,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '06.06.: BLM-Demo in den großen Städten',
                            }
                        },
                        {
                            x: 25,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.06.: Corona-Warn-App, 18.06: Tönnies-Ausbruch',
                            }
                        },
                        {
                            x: 31,
                            strokeDashArray: 0,

                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '01.08.: Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 35,
                            strokeDashArray: 0,
                            label: {
                                borderColor: 'rgba(108,117,125,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(108,117,125,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '29.08.: Querdenken-Demo in Berlin',
                            }
                        },
                        {
                            x: 45,
                            x2: 51,
                            strokeDashArray: 0,
                            fillColor: 'rgba(208,200,0,  0.4)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '02.11.: Lockdown "light", 07.11: Demo Leipzig ',
                            }
                        },
                        {
                            x: 51,
                            x2: 53,
                            strokeDashArray: 0,
                            fillColor: 'rgba(255,0,0,  0.6)',
                            label: {
                                borderColor: 'rgba(255,0,0,  0.73)',
                                style: {
                                    fontSize: '14px',
                                    color: '#fff',
                                    background: 'rgba(255,50,50,  0.73)',
                                    opacity: 0.6,
                                },
                                offsetY: -10,
                                text: '16.12.: 2. Lockdown',
                            }
                        }
                        ]
                    },
                },

            }
        }
    },
}
</script>
