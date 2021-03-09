//Reference https://codesandbox.io/embed/qzjkzmzxoj

var num_of_tests = [124716, 127457, 348619, 361515, 408348, 380197, 331902, 363890, 326788, 403875, 432666, 353467, 405269, 340986, 327196, 388187, 467413, 506490, 510551, 538701, 572967, 581037, 733990, 891988, 1055662, 1101299, 1099560, 1162133, 1149171, 1168016, 1101413, 1188338, 1263716, 1418726, 1631343, 1608125, 1422301, 1394255, 1379859, 1347625, 1504313, 1599120, 1057269]
var num_of_positives = [3892, 7582, 23820, 31414, 36885, 30791, 22082, 18083, 12608, 10755, 7233, 5218, 4310, 3208, 2816, 5316, 3689, 3104, 2992, 3497, 4534, 5699, 7330, 8661, 9233, 8324, 8294, 10046, 13261, 14094, 18290, 29567, 44759, 78106, 116673, 126141, 126181, 128668, 126140, 135136, 170200, 184940, 136998]
var num_of_deaths = [0, 12, 43, 334, 953, 1331, 1621, 1346, 1009, 746, 519, 333, 253, 168, 119, 95, 75, 55, 51, 21, 34, 23, 55, 35, 38, 26, 30, 24, 37, 71, 72, 86, 162, 255, 449, 808, 1196, 1537, 2101, 2649, 3015, 4262, 3729]
var positive_rates = [3.12, 5.95, 6.83, 8.69, 9.03, 8.1, 6.65, 4.97, 3.86, 2.66, 1.67, 1.48, 1.06, 0.94, 0.86, 1.37, 0.79, 0.61, 0.59, 0.65, 0.79, 0.98, 1, 0.97, 0.84, 0.74, 0.77, 0.86, 1.16, 1.22, 1.66, 2.49, 3.54, 5.51, 7.15, 7.84, 8.87, 9.23, 9.14, 10.03, 11.31, 11.57, 12.96]
var week_numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52]
var ifr = [0.0, 0.002, 0.002, 0.011, 0.026, 0.043, 0.073, 0.074, 0.08, 0.069, 0.072, 0.064, 0.059, 0.052, 0.042, 0.018, 0.02, 0.018, 0.017, 0.006, 0.007, 0.004, 0.008, 0.004, 0.004, 0.003, 0.004, 0.002, 0.003, 0.005, 0.004, 0.003, 0.004, 0.003, 0.004, 0.006, 0.01, 0.012, 0.017, 0.02, 0.018, 0.023, 0.027]

var testchart = {
    components: {
        apexchart: VueApexCharts
    },
    template: `<div id="chartTest">
                <apexchart type="line" width="100%" height="800rem" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
                <br/>
            </div>`,
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
                            x2: 52,
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
                            x2: 52,
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
    data: function () {
        return {};
    },
    methods: {},
}