new Vue({
    i18n,
    el: '#app',
    components: {
        apexchart: VueApexCharts,
        sickchart,
        testchart,
        rchart,
        heatmapchart,
        mortalitychart,
        winter_mortalitychart
    },
    methods: {
        changeCountry(event) {
            var name = event.target.options[event.target.options.selectedIndex].text;
            this.selCountry = name
        },
        changeLanguage(event) {
            var name = event.target.options[event.target.options.selectedIndex].text;
            this.selLanguage = name
            console.log(this.selLanguage)
        },
    },
    data: {
        countries: [
            { name: 'Germany' },
            // { name: 'United States' },
        ],
        selCountry: "Germany",
        languages: ['de', 'en'],
        selLanguage: "English",
    },
    mounted() {

        console.log("method called at page load");

    }
})