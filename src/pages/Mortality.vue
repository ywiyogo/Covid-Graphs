<template>
  <q-page class="bg-grey-3 column">
    <div id="chartMortality">
        <apexchart type="line" width="96%" height="800rem" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
        <br/>
        </div>
        <div id="chartMortalityWinter">
        <apexchart type="line" width="96%" height="800rem" :series="$t('i18n_winterseries')" :options="$t('i18n_winteroptions')" ></apexchart>
        <br/>
    </div>
    <q-page-container style="padding: 1em 5em ;">
      <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
              <div class="text-h6">{{ $t("text.notes") }}</div>
          </q-card-section>

          <q-separator dark inset />
          <q-card-section>
            <li><a class="text-warning"
                href="https://www.destatis.de/DE/Themen/Gesellschaft-Umwelt/Bevoelkerung/Sterbefaelle-Lebenserwartung/Tabellen/sonderauswertung-sterbefaelle.html">
                Statistisches Bundesamt: Sterbefälle für Deutschland 2016 - 2020</a>
            </li>
          </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>

var mortality_2016 = [18467, 18439, 18627, 18707, 18493, 18541, 18483, 18475, 18926, 18888, 18971, 18826, 18617, 18244, 17712, 16775, 17053, 16901, 17629, 16601, 16286, 16346, 15799, 15717, 16910, 15699, 16229, 16172, 16985, 16157, 15439, 15487, 16258, 17147, 16101, 16116, 16372, 15606, 16336, 16352, 17427, 17599, 17586, 17580, 17782, 18591, 17911, 18146, 18793, 18885, 19376, 19744]
var mortality_2017 = [20918, 22070, 21236, 22083, 23640, 22744, 22683, 22266, 20930, 19102, 18665, 17640, 17731, 17028, 16901, 16637, 17634, 17129, 17343, 17079, 16451, 16902, 15846, 16087, 16819, 16076, 16424, 15603, 16589, 16058, 16494, 15784, 16148, 15880, 16064, 15706, 16146, 16505, 16747, 16664, 17470, 17139, 17059, 16762, 17371, 17594, 17676, 17877, 18295, 18504, 18500, 18652]
var mortality_2018 = [19342, 18770, 19187, 19171, 19558, 20086, 21254, 22888, 25535, 26777, 24385, 22777, 20906, 20038, 19165, 17992, 17093, 16789, 17226, 16488, 16513, 17039, 16714, 15582, 15843, 16569, 16622, 16070, 16702, 18340, 20371, 18478, 16890, 16612, 16000, 16390, 16292, 16651, 15969, 16622, 16993, 16552, 16608, 16895, 17604, 16842, 17785, 18091, 18342, 17943, 18990, 17954]
var mortality_2019 = [18686, 19170, 19163, 19505, 19812, 19981, 20150, 20349, 20790, 20453, 19795, 19016, 18562, 18671, 17852, 18089, 17894, 17090, 17118, 17315, 17080, 16921, 17491, 16484, 16639, 17918, 16552, 16319, 16856, 19630, 17034, 16540, 15934, 16263, 17637, 15988, 16303, 16500, 17402, 16899, 17666, 17713, 17327, 17488, 17859, 18242, 18535, 18581, 19143, 19101, 19062, 18204]
var mortality_2020 = [18903,19430,19184,18940,19800,19031,19650,18948,19492,19643,19884,19741,19703,20647,20513,19283,18553,17915,17636,16985,17157,16758,17267,16600,16392,17282,16433,16156,16516,16902,17395,17470,19672,17542,16627,16717,17080,17516,17377,17558,17426,17672,18515,18491,18965,19618,20052,21113,22423,23670,24267,24818,24531]
var mortality_2020_nocovid = [18903, 19430, 19184, 18940, 19800, 19031, 19650, 18948, 19492, 19640, 19866,
 19579, 19101, 19279, 18776, 17688, 17383, 17130, 17119, 16629, 16884, 16607,
 17153, 16527, 16343, 17229, 16387, 16128, 16490, 16871, 17366, 17440, 19641,
 17502, 16590, 16698, 17048, 17462, 17312, 17478, 17305, 17438, 18114, 17714,
 17759, 18018, 18017, 18346, 19189, 19651, 19427, 19520, 19386]
var covid_deaths = [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 18, 162, 602, 1368, 1737, 1595, 1170, 785, 517, 356, 273, 151, 114, 73, 49, 53, 46, 28, 26, 31, 29, 30, 31, 40, 37, 19, 32, 54, 65, 80, 121, 234, 401, 777, 1206, 1600, 2035, 2767, 3234, 4019, 4840, 5298, 5145]

var week_numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53]

var winter_weeks = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
var winter_20162017 = [17427, 17599, 17586, 17580, 17782, 18591, 17911, 18146, 18793, 18885, 19376, 19744, 20918, 22070, 21236, 22083, 23640, 22744, 22683, 22266, 20930, 19102, 18665, 17640, 17731, 17028, 16901, 16637, 17634, 17129, 17343]
var winter_20172018 = [17470, 17139, 17059, 16762, 17371, 17594, 17676, 17877, 18295, 18504, 18500, 18652, 19342, 18770, 19187, 19171, 19558, 20086, 21254, 22888, 25535, 26777, 24385, 22777, 20906, 20038, 19165, 17992, 17093, 16789, 17226]
var winter_20182019 = [16993, 16552, 16608, 16895, 17604, 16842, 17785, 18091, 18342, 17943, 18990, 17954, 18686, 19170, 19163, 19505, 19812, 19981, 20150, 20349, 20790, 20453, 19795, 19016, 18562, 18671, 17852, 18089, 17894, 17090, 17118]
var winter_20192020 = [17666, 17713, 17327, 17488, 17859, 18242, 18535, 18581, 19143, 19101, 19062, 18204, 18902, 19430, 19182, 18940, 19795, 19029, 19647, 18944, 19491, 19639, 19878, 19736, 19698, 20645, 20508, 19280, 18548, 17906, 17628]
var winter_20202021 = [17391, 17632, 18454, 18407, 18846, 19469, 19823, 20699]
var wintercovid_deaths_20192020 =[0, 0,0,0,0,0,0,0,0,0,0,0,0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 12, 43, 334, 953, 1331, 1621, 1346, 1009, 746]
var wintercovid_deaths_20202021 =[86, 162, 255, 449, 808, 1196, 1537, 2101, 2649, 3015, 4262]


export default {
  components: {
      apexchart: VueApexCharts
  },
  i18n: { // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_series: [{
                    name: '2016',
                    type: 'line',
                    data: mortality_2016
                },
                {
                    name: "2017",
                    type: 'line',
                    data: mortality_2017
                },
                {
                    name: "2018",
                    type: 'line',
                    data: mortality_2018
                },
                {
                    name: "2019",
                    type: 'line',
                    data: mortality_2019
                },
                {
                    name: "2020 lockdown ( with Covid deaths)",
                    type: 'line',
                    data: mortality_2020
                },
                {
                    name: "2020 lockdown (without Covid)",
                    type: 'line',
                    data: mortality_2020_nocovid
                },

                {
                    name: "Covid deaths",
                    type: 'line',
                    data: covid_deaths
                },
                ],
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Mortality in Germany 2016-2020',
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
                    colors: ['#1B998B', '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A'],//https://apexcharts.com/docs/options/theme/

                    stroke: {
                        width: [3, 3, 3, 3, 5, 5, 3]
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
                    yaxis: [
                        {
                            seriesName: '2016',
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
                                text: "Number of deaths",
                                formatter: function (value) {
                                    return value.toFixed(0);
                                },
                                style: {
                                    color: '#FEB019',
                                    fontSize: '20px',
                                }
                            }
                        }
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

                },
            },
            de: {
                i18n_series: [{
                    name: '2016',
                    type: 'line',
                    data: mortality_2016
                },
                {
                    name: "2017",
                    type: 'line',
                    data: mortality_2017
                },
                {
                    name: "2018",
                    type: 'line',
                    data: mortality_2018
                },
                {
                    name: "2019",
                    type: 'line',
                    data: mortality_2019
                },
                {
                    name: "2020 Lockdown mit Covid-Sterbefälle",
                    type: 'line',
                    data: mortality_2020
                },
                {
                    name: "2020 Lockdown ohne Covid-Sterbefälle",
                    type: 'line',
                    data: mortality_2020_nocovid
                },
                {
                    name: "Covid Sterbefälle",
                    type: 'line',
                    data: covid_deaths
                },
                ],
                i18n_winterseries: [{
                    name: 'winter 16/17',
                    type: 'line',
                    data: winter_20162017
                },
                {
                    name: "winter 17/18",
                    type: 'line',
                    data: winter_20172018
                },
                {
                    name: "winter 18/19",
                    type: 'line',
                    data: winter_20182019
                },
                {
                    name: "winter 19/20",
                    type: 'line',
                    data: winter_20192020
                },
                {
                    name: "Winter 20/21",
                    type: 'line',
                    data: winter_20202021
                },
                {
                    name: "Covid 19/20 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20192020
                },
                {
                    name: "Covid 20/21 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20202021
                },
                ],
                i18n_winteroptions: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Wöchentliche Winter Sterbefallzahlen in Deutschland',
                        align: 'center',
                        style: {
                            fontSize: '26px',
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
                        categories: winter_weeks
                    },
                },
                i18n_options: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Wöchentliche Sterbefallzahlen in Deutschland',
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
                    colors: ['#1B998B', '#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A'], //https://apexcharts.com/docs/options/theme/
                    
                    stroke: {
                        width: [3, 3, 3, 3, 5, 5, 3]
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
                        seriesName: '2016',
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
                            text: "Number of deaths",
                            formatter: function (value) {
                                return value.toFixed(0);
                            },
                            style: {
                                color: '#FEB019',
                                fontSize: '20px',
                            }
                        }
                    }
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
                    chart: {
                        toolbar: {
                            tools: {
                                customIcons: [{
                                    icon: '<i class="far fa-calendar-plus"></i>',
                                    index: 4,
                                    title: 'toogle events',
                                    class: 'custom-icon',
                                    click: function (chart, options, e) {
                                        console.log(chart)
                                        console.log(options)
                                    }
                                }]
                            },
                        },
                    },
                    annotations: {
                        xaxis: [
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
                                    text: '23.03.20: 1. Lockdown',
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
                                    text: '02.11.20: Lockdown "light"',
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
                                    text: '16.12.20: 2. Lockdown',
                                }
                            }
                        ]
                    }
                },

            }
        }
    },
    data: function () {
        return {};
    },
    methods: {},
}

var winter_mortalitychart = {
    components: {
        apexchart: VueApexCharts
    },
    template: `<div id="chartMortalityWinter">
                <apexchart type="line" width="93%" height="800rem" :series="$t('i18n_winterseries')" :options="$t('i18n_winteroptions')" ></apexchart>
                <br/>
                </div>`,
    i18n: { // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_winterseries: [{
                    name: 'Winter 16/17',
                    type: 'line',
                    data: winter_20162017
                },
                {
                    name: "Winter 17/18",
                    type: 'line',
                    data: winter_20172018
                },
                {
                    name: "Winter 18/19",
                    type: 'line',
                    data: winter_20182019
                },
                {
                    name: "Winter 19/20",
                    type: 'line',
                    data: winter_20192020
                },
                {
                    name: "Winter 20/21",
                    type: 'line',
                    data: winter_20202021
                },
                {
                    name: "Covid 19/20 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20192020
                },

                {
                    name: "Covid 20/21 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20202021
                },
                ],
                i18n_winteroptions: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Weekly Mortality Winter Seasons in Germany',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    stroke: {
                        width: [5, 5, 5, 5, 5, 3, 3]
                    },
                    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#E2C044'],
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                        show:true,
                    },
                    xaxis: {
                        labels: {
                            style: {
                                fontSize: '14px',
                            }
                        },
                        title: {
                            text: "Calender Weeks",
                            style: {
                                fontSize: '20px',
                            }
                        },
                        categories: winter_weeks
                    },
                    yaxis: [
                        {
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                            },
                            labels: {
                                style: {
                                    fontSize: '14px',
                                },
                            },
                            title: {
                                text: "Number of Deaths",
                                formatter: function (value) {
                                    return value.toFixed(0);
                                },
                                style: {
                                    fontSize: '20px',
                                }
                            }
                        }
                    ],
                    annotations:{
                        yaxis: [{
                            y: 17000,
                            borderColor: '#000',
                            fillColor: 'rgba(208,0,0,  0.4)',
                            opacity: 0.5,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                text: '17000',
                                offsetY: 10,
                            }
                        }],
                        points: [{
                            x: 25,
                            y: 19698,
                            marker: {
                              size: 8,
                              fillColor: '#fff',
                              strokeColor: 'red',
                              radius: 2,
                              cssClass: 'apexcharts-custom-class'
                            },
                            label: {
                              borderColor: '#FF4560',
                              offsetY: 0,
                              style: {
                                color: '#fff',
                                background: '#FF4560',
                              },
                        
                              text: '1st Lockdown',
                            }
                          },
                          {
                            x: 5,
                            y: 18846,
                            marker: {
                              size: 8,
                              fillColor: '#fff',
                              strokeColor: '#775DD0',
                              radius: 2,
                              cssClass: 'apexcharts-custom-class'
                            },
                            label: {
                              borderColor: '#775DD0',
                              offsetY: 0,
                              style: {
                                color: '#fff',
                                background: '#775DD0',
                              },
                        
                              text: '2nd Lockdown "light"',
                            }
                          }
                        ]
                    }
                },
            },
            de: {
                i18n_winterseries: [{
                    name: 'Winter 2016/2017',
                    type: 'line',
                    data: winter_20162017
                },
                {
                    name: "Winter 2017/2018",
                    type: 'line',
                    data: winter_20172018
                },
                {
                    name: "Winter 2018/2019",
                    type: 'line',
                    data: winter_20182019
                },
                {
                    name: "Winter 2019/2020",
                    type: 'line',
                    data: winter_20192020
                },
                {
                    name: "Winter 20202021",
                    type: 'line',
                    data: winter_20202021
                },
                {
                    name: "Covid 20192020 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20192020
                },
                {
                    name: "Covid 20202021 Sterbefälle",
                    type: 'line',
                    data: wintercovid_deaths_20202021
                },
                ],
                i18n_winteroptions: {
                    type: "line",
                    stacked: false,
                    title: {
                        text: 'Wöchentliche Winter Sterbefallzahlen in Deutschland',
                        align: 'center',
                        style: {
                            fontSize: '26px',
                        }
                    },
                    stroke: {
                        width: [5, 5, 5, 5, 5, 3, 3]
                    },
                    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#546E7A', '#E2C044'],
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 40,
                        fontSize: '20px',
                        show:true,
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
                        categories: winter_weeks
                    },
                    yaxis: [
                        {
                            axisTicks: {
                                show: true
                            },
                            axisBorder: {
                                show: true,
                            },
                            labels: {
                                style: {
                                    fontSize: '14px',
                                },
                            },
                            title: {
                                text: "Sterbefälle",
                                formatter: function (value) {
                                    return value.toFixed(0);
                                },
                                style: {
                                    fontSize: '20px',
                                }
                            }
                        }
                    ],
                    annotations:{
                        yaxis: [{
                            y: 17000,

                            borderColor: '#000',
                            fillColor: 'rgba(208,0,0,  0.4)',
                            opacity: 0.5,
                            label: {
                                borderColor: '#333',
                                style: {
                                    fontSize: '14px',
                                    color: '#333',
                                    background: 'rgba(208,0,0,  0.5)',
                                },
                                text: '17.000',
                                offsetY: 10,
                            }
                        }],
                        points: [{
                            x: 25,
                            y: 19698,
                            marker: {
                              size: 8,
                              fillColor: '#fff',
                              strokeColor: 'red',
                              radius: 2,
                              cssClass: 'apexcharts-custom-class'
                            },
                            label: {
                              borderColor: '#FF4560',
                              offsetY: 0,
                              style: {
                                color: '#fff',
                                background: '#FF4560',
                              },
                        
                              text: '1. Lockdown',
                            }
                          },
                          {
                            x: 5,
                            y: 18846,
                            marker: {
                              size: 8,
                              fillColor: '#fff',
                              strokeColor: '#775DD0',
                              radius: 2,
                              cssClass: 'apexcharts-custom-class'
                            },
                            label: {
                              borderColor: '#775DD0',
                              offsetY: 0,
                              style: {
                                color: '#fff',
                                background: '#775DD0',
                              },
                        
                              text: '2. Lockdown "light"',
                            }
                          }
                        ]
                    }
                },

            }
        }
    }
}
</script>
