<template>
  <q-page class="bg-grey-3 column">
        <div id="chartTest">
            <apexchart type="line" width="100%" height="800rem" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
            <br/>
        </div>

         <div id="chartDeaths">
            <apexchart type="line" width="100%" height="800rem" :series="$t('deaths_series')" :options="$t('deaths_options')" ></apexchart>
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
var week_numbers =['10/2020',
 '11/2020',
 '12/2020',
 '13/2020',
 '14/2020',
 '15/2020',
 '16/2020',
 '17/2020',
 '18/2020',
 '19/2020',
 '20/2020',
 '21/2020',
 '22/2020',
 '23/2020',
 '24/2020',
 '25/2020',
 '26/2020',
 '27/2020',
 '28/2020',
 '29/2020',
 '30/2020',
 '31/2020',
 '32/2020',
 '33/2020',
 '34/2020',
 '35/2020',
 '36/2020',
 '37/2020',
 '38/2020',
 '39/2020',
 '40/2020',
 '41/2020',
 '42/2020',
 '43/2020',
 '44/2020',
 '45/2020',
 '46/2020',
 '47/2020',
 '48/2020',
 '49/2020',
 '50/2020',
 '51/2020',
 '52/2020',
 '53/2020',
 '1/2021',
 '2/2021',
 '3/2021',
 '4/2021',
 '5/2021',
 '6/2021',
 '7/2021',
 '8/2021',
 '9/2021',
 '10/2021',
 '11/2021',
 '12/2021',
 '13/2021',
 '14/2021',
 '15/2021',
 '16/2021']
var num_of_tests =[69184.0,
 128008.0,
 374534.0,
 377599.0,
 417646.0,
 386241.0,
 339983.0,
 363659.0,
 327799.0,
 385638.0,
 431682.0,
 356489.0,
 408078.0,
 342328.0,
 327980.0,
 384834.0,
 472823.0,
 512969.0,
 513572.0,
 544219.0,
 556634.0,
 589201.0,
 719476.0,
 871191.0,
 1034449.0,
 1133623.0,
 1052942.0,
 1148465.0,
 1147879.0,
 1220279.0,
 1129127.0,
 1218988.0,
 1284349.0,
 1445463.0,
 1663992.0,
 1634729.0,
 1467454.0,
 1400145.0,
 1381117.0,
 1395790.0,
 1516038.0,
 1672033.0,
 1090372.0,
 845729.0,
 1231405.0,
 1187564.0,
 1113690.0,
 1151633.0,
 1101499.0,
 1060602.0,
 1103231.0,
 1171798.0,
 1153270.0,
 1280050.0,
 1367247.0,
 1415220.0,
 1178378.0,
 1168950.0,
 1311887.0,
 1409259.0]
var num_of_positives =[1722.0,
 7470.0,
 25886.0,
 33139.0,
 37649.0,
 30829.0,
 22724.0,
 18127.0,
 12600.0,
 10181.0,
 7142.0,
 5315.0,
 4335.0,
 3219.0,
 2956.0,
 5588.0,
 3919.0,
 3204.0,
 3042.0,
 3608.0,
 4537.0,
 5888.0,
 7374.0,
 8545.0,
 8868.0,
 8273.0,
 8203.0,
 10403.0,
 13647.0,
 15178.0,
 19930.0,
 30220.0,
 46000.0,
 80097.0,
 118111.0,
 128537.0,
 128986.0,
 131185.0,
 128882.0,
 138305.0,
 169520.0,
 188283.0,
 141413.0,
 129930.0,
 157772.0,
 124037.0,
 110163.0,
 97383.0,
 82436.0,
 67882.0,
 67379.0,
 72059.0,
 71715.0,
 85655.0,
 107827.0,
 131857.0,
 128814.0,
 140800.0,
 163282.0,
 175711.0]
var positive_rates =[2.5,
 5.8,
 6.9,
 8.8,
 9.0,
 8.0,
 6.7,
 5.0,
 3.8,
 2.6,
 1.7,
 1.5,
 1.1,
 0.9,
 0.9,
 1.5,
 0.8,
 0.6,
 0.6,
 0.7,
 0.8,
 1.0,
 1.0,
 1.0,
 0.9,
 0.7,
 0.8,
 0.9,
 1.2,
 1.2,
 1.8,
 2.5,
 3.6,
 5.5,
 7.1,
 7.9,
 8.8,
 9.4,
 9.3,
 9.9,
 11.2,
 11.3,
 13.0,
 15.4,
 12.8,
 10.4,
 9.9,
 8.5,
 7.5,
 6.4,
 6.1,
 6.1,
 6.2,
 6.7,
 7.9,
 9.3,
 10.9,
 12.0,
 12.4,
 12.5]
var num_of_deaths =[2,
 12.0,
 43.0,
 334.0,
 953.0,
 1331.0,
 1621.0,
 1346.0,
 1009.0,
 746.0,
 519.0,
 333.0,
 253.0,
 168.0,
 119.0,
 95.0,
 75.0,
 55.0,
 51.0,
 21.0,
 34.0,
 23.0,
 55.0,
 35.0,
 38.0,
 26.0,
 30.0,
 24.0,
 37.0,
 71.0,
 72.0,
 86.0,
 162.0,
 255.0,
 449.0,
 808.0,
 1196.0,
 1537.0,
 2101.0,
 2649.0,
 3015.0,
 4262.0,
 3729.0,
 4494.0,
 6071.0,
 6076.0,
 5451.0,
 5075.0,
 4572.0,
 3443.0,
 2881.0,
 2204.0,
 1855.0,
 1471.0,
 1293.0,
 1206.0,
 1093.0,
 1390.0,
 1561.0,
 1650.0]
var ifr =[0.002,
 0.002,
 0.01,
 0.025,
 0.043,
 0.071,
 0.074,
 0.08,
 0.073,
 0.073,
 0.063,
 0.058,
 0.052,
 0.04,
 0.017,
 0.019,
 0.017,
 0.017,
 0.006,
 0.007,
 0.004,
 0.007,
 0.004,
 0.004,
 0.003,
 0.004,
 0.002,
 0.003,
 0.005,
 0.004,
 0.003,
 0.004,
 0.003,
 0.004,
 0.006,
 0.009,
 0.012,
 0.016,
 0.019,
 0.018,
 0.023,
 0.026,
 0.035,
 0.038,
 0.049,
 0.049,
 0.052,
 0.055,
 0.051,
 0.043,
 0.031,
 0.026,
 0.017,
 0.012,
 0.009,
 0.008,
 0.01,
 0.01,
 0.009]




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
                    name: "Positive Rate",
                    type: 'line',
                    data: positive_rates
                },

                ],
                deaths_series: [{
                    name: "Number of 'Covid-19 Deaths'",
                    type: 'column',
                    data: num_of_deaths
                },
                                {
                    name: "Infection Fatality Rate",
                    type: 'line',
                    data: ifr
                },
                ],
                deaths_options: {
                    type: "line",
                    stacked: false,
                    colors: ['#FF4560','#00E396'],
                    title: {
                        text: 'Covid Death in Germany',
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
                        seriesName: "Number of 'Covid-19 Deaths'",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#FF4560'
                        },
                        title: {
                            text: "Deaths",
                            style: {
                                color: '#111',
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
                        seriesName: 'Infection Fatality Rate',
                        opposite: true,
                        show: true,
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#00E396'
                        },
         
                        lines: {
                            show: true,
                        },
                        title: {
                            text: "Infection Fatality Rate",
                            style: {
                                color: '#00E396',
                                fontSize: '20px',
                            }
                        },
                    },
                    ],
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    annotations: {
                        xaxis: [{
                            x: "8/2021",
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
                                text: 'Start of the third wave propaganda',
                            }
                        },]
                    }
                },
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
                            text: "Numbers of test",
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
                            x: "11/2020",
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
                            x: "13/2020",
                            x2: "19/2020",
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
                            x: "15/2020",
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
                            x: "16/2020",
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
                            x: "19/2020",
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
                            x: "23/2020",
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
                            x: "25/2020",
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
                            x: "31/2020",
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
                            x: "35/2020",
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
                            x: "45/2020",
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
                                text: '07.11: Demo in Leipzig',
                            }
                        },
                        {
                            x: "45/2020",
                            x2: "51/2020",
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
                                offsetY: 150,
                                text: '02.11.: 2nd Lockdown "light"',
                            }
                        },
                        {
                            x: "51/2020",
                            x2: "16/2021",
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
                deaths_series: [{
                    name: "Todesfälle",
                    type: 'column',
                    data: num_of_deaths
                },
                {
                    name: "Fallsterblichkeit",
                    type: 'line',
                    data: ifr
                },
                ],
                deaths_options: {
                    type: "line",
                    stacked: false,
                    colors: ['#FF4560','#008FFB'],
                    title: {
                        text: 'Covid19-Sterbefälle & Fallsterblichkeit',
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
                        seriesName: "Todesfälle",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#FF4560'
                        },
                        title: {
                            text: "Sterbefälle an/mit Covid-19",
                            style: {
                                color: '#FF4560',
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
                        seriesName: 'Fallsterblichkeit',
                        opposite: true,
                        show: true,
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                            color: '#008FFB'
                        },
         
                        lines: {
                            show: true,
                        },
                        title: {
                            text: "Fallsterblichkeit",
                            style: {
                                color: '#008FFB',
                                fontSize: '20px',
                            }
                        },
                    },
                    ],
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                    },
                    annotations: {
                        xaxis: [{
                            x: "8/2021",
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
                                text: 'Start der dritten Welle Propaganda',
                            }
                        },]
                    }
                },
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
                    name: "Positivenrate",
                    type: 'line',
                    data: positive_rates
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
                            x: "11/2020",
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
                            x: "13/2020",
                            x2: "19/2020",
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
                            x: "15/2020",
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
                            x: "18/2020",
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
                            x: "19/2020",
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
                            x: "23/2020",
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
                            x: "25/2020",
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
                            x: "31/2020",
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
                            x: "35/2020",
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
                            x: "45/2020",
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
                                text: '07.11: Demo Leipzig ',
                            }
                        },
                        {
                            x: "45/2020",
                            x2: "50/2020",
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
                                offsetY: 130,
                                text: '2.Lockdown "light"',
                            }
                        },
                        {
                            x: "51/2020",
                            x2: "16/2021",
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
