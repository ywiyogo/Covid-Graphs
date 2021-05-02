<template>
  <q-page class="bg-grey-3 column">
    <div id="chartSick">
        <apexchart type="line" width="100%" height="800" :series="$t('i18n_series')" :options="$t('i18n_options')" ></apexchart>
        <br/>
    </div>
    <q-page-container style="padding: 1em 2em ;">
      <q-card dark bordered class="bg-grey-9 my-card">
          <q-card-section>
              <div class="text-h6">{{ $t("text.notes") }}</div>
          </q-card-section>

          <q-separator dark inset />
          <q-card-section>
            <h5 class="card-title text-center">{{ $t("notes.n0") }}: <a class="text-warning"
                    href="https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV ">https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV
                </a></h5>
            <div class="text-center">
                <img src="http://api.qrserver.com/v1/create-qr-code/?color=000000&amp;bgcolor=FFFFFF&amp;data=https%3A%2F%2Fwww.statistik-bw.de%2FSozSicherung%2FSozVersicherung%2FSV_KS.jsp%3Fpath%3D%2FGesundheit%2FBehandlungenKV&amp;qzone=1&amp;margin=0&amp;size=100x100&amp;ecc=L"
                    alt="qr code" />
            </div>
          </q-card-section>
      </q-card>
    </q-page-container>
  </q-page>
</template>

<script>
var months_de = [
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "Juli",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember"
]
var months_en = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
]

var v2010_2016 = [2.89, 4.56, 4.66, 3.98, 3.40, 3.67, 3.87, 3.49, 3.57, 3.73, 3.73, 4.39]
var v2017 = [3.3, 6.1, 5.3, 3.9, 3.3, 4.1, 3.6, 3.9, 4.4, 3.5, 3.7, 5.3]
var v2018 = [3.2, 5.8, 7.0, 3.4, 3.6, 4.2, 3.6, 4.1, 3.6, 3.9, 4.5, 4.2]
var v2019 = [3.2, 6.1, 5.9, 4.6, 3.9, 3.6, 3.9, 4.4, 3.6, 4.3, 4.4, 4.1]
var v2020 = [3.3, 4.6, 4.5, 6.5, 3.8, 3.4, 4.2, 3.6, 4.1, 4.7, 4.1, 4.8]
var v2021 = [3.4, 4.3, 4.2]
export default {
  components: {
        apexchart: VueApexCharts
    },
  i18n: {
        // `i18n` option, setup locale info for component
        messages: {
            en: {
                i18n_series: [{
                    name: "Average of 2010-2016",
                    type: "line",
                    data: v2010_2016
                },
                {
                    name: "2017",
                    type: "line",
                    data: v2017
                },
                {
                    name: "2018",
                    type: "line",
                    data: v2018
                },
                {
                    name: "2019",
                    type: "line",
                    data: v2019
                },
                {
                    name: "2020",
                    type: "line",
                    data: v2020
                },
                {
                    name: "2021",
                    type: "line",
                    data: v2021
                }
                ],
                i18n_options: {
                    type: "line",
                    stroke: {
                        curve: 'smooth',
                        width: [2, 2, 2, 2, 6, 6],
                        dashArray: [4, 8, 0, 0, 0, 0]
                    },
                    stacked: false,
                    title: {
                        text: "Sick leave from statutory health insurance in Germany",
                        align: "center",
                        style: {
                            fontSize: "26px"
                        }
                    },
                    colors: ['#5f6368', '#fbbc03', '#33a853', '#4285f4', '#ea4335'],

                    zoom: {
                        type: "xy",
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    toolbar: {
                        autoSelected: "zoom"
                    },
                    dataLabels: {
                        enabled: true
                    },
                    markers: {
                        size: 1
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 10,
                        height: 120,
                        fontSize: "20px",
                        onItemClick: {
                            toggleDataSeries: true
                        },
                    },
                    subtitle: {
                        text: "Ref: https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV",
                        offsetY: 760,
                        margin: 5,
                        align: "center",
                        style: {
                            fontSize: "20px"
                        }
                    },
                    xaxis: {
                        title: {
                            text: "Month of the year",
                            style: {
                                fontSize: "20px"
                            }
                        },
                        type: "string",
                        categories: months_en
                    },
                    yaxis: [{
                        max: 7.5,
                        seriesName: "Sick ratio",
                        axisTicks: {
                            show: true
                        },
                        axisBorder: {
                            show: true,
                        },
                        title: {
                            text: "Sick ratio",
                            style: {
                                fontSize: "20px",
                            }
                        },
                        lines: {
                            show: true,
                        },
                        labels: {}
                    }],
                    datamarker: [{
                        value: "2020",
                        time: "March",
                        tooltext: "Covid-19 Pandemic & Exit restriction"
                    },],
                    annotations: {


                    }
                }
            },
            de: {
                i18n_series: [{
                    name: "Durchschnitt von 2010-2016",
                    type: "line",
                    data: v2010_2016
                },
                {
                    name: "2017",
                    type: "line",
                    data: v2017
                },
                {
                    name: "2018",
                    type: "line",
                    data: v2018
                },
                {
                    name: "2019",
                    type: "line",
                    data: v2019
                },
                {
                    name: "2020",
                    type: "line",
                    data: v2020
                },{
                    name: "2021",
                    type: "line",
                    data: v2021
                }

                ],
                i18n_options: {
                    type: "line",
                    stroke: {
                        curve: 'smooth',
                        width: [2, 2, 2, 2, 6, 6],
                        dashArray: [4, 8, 0, 0, 0, 0]
                    },
                    stacked: false,
                    title: {
                        text: "Krankenstand der gesetzlichen Krankenversicherung in Deutschland",
                        align: "center",
                        margin: 30,
                        floating: true,
                        style: {
                            fontSize: "26px"
                        }
                    },
                    zoom: {
                        type: "xy",
                        enabled: true,
                        autoScaleYaxis: true
                    },
                    colors: ['#5f6368', '#fbbc03', '#33a853', '#4285f4', '#ea4335'],
                    toolbar: {
                        autoSelected: "zoom"
                    },
                    dataLabels: {
                        enabled: true,
                    },
                    markers: {
                        size: 1
                    },
                    legend: {
                        horizontalAlign: "left",
                        offsetX: 10,
                        height: 120,
                        fontSize: "20px",
                        onItemClick: {
                            toggleDataSeries: true
                        },

                    },
                    subtitle: {
                        text: "Ref: https://www.statistik-bw.de/SozSicherung/SozVersicherung/SV_KS.jsp?path=/Gesundheit/BehandlungenKV",
                        offsetY: 760,
                        margin: 5,
                        align: "center",
                        style: {
                            fontSize: "20px"
                        }
                    },
                    xaxis: {
                        title: {
                            text: "Kalendermonat",
                            style: {
                                fontSize: "20px"
                            }
                        },
                        type: "string",
                        categories: months_de
                    },
                    yaxis: [{
                        max: 7.5,
                        seriesName: "Krankenanteil",
                        axisTicks: {
                            show: true,

                        },
                        axisBorder: {
                            show: true,

                        },
                        title: {
                            text: "Krankenanteil in %",
                            style: {
                                fontSize: "20px",
                            }
                        },
                        lines: {
                            show: true
                        },
                        labels: {
                            style: {
                                fontSize: "14px"
                            }
                        }
                    }],

                    annotations: {


                    }
                }
            }
        }
    }
}
</script>
