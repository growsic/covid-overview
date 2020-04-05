const COUNTRIES_PER_PAGE = 10;
var app = new Vue({
  el: '#app',
  data: {
    countryInfoList: [],
    summary: null,
    japanInfo: null,
    rankingFrom: 1,
    rankingTo: 10
  },
  mounted () {
    axios
      .get('https://covid-193.p.rapidapi.com/statistics',  {headers: {
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "6351089e97mshd70d80573520055p1d9190jsn4f1938e461c0"
      }})
      .then(response => {
        response.data.response.forEach(dto => {
            var tmpList = [];
            if(dto.country == 'World' || dto.country == 'All') {
                this.summary = dto;
            } else if (dto.country == 'Japan') {
                this.japanInfo = dto;
            } else {
              this.countryInfoList.push(dto);
            }
        })
        this.countryInfoList.sort((a, b) => (b.cases.total > a.cases.total) ? 1 : -1)
        initCountryRankingChart(this.countryInfoList.slice(this.rankingFrom - 1, this.rankingTo));
      })
  },
  methods:{
      drawChartWithPrevious: function() {
        if(this.rankingFrom - COUNTRIES_PER_PAGE < 0) {
          this.rankingTo = COUNTRIES_PER_PAGE;
          this.rankingFrom = 1;
        } else {
          this.rankingTo = this.rankingFrom - 1;
          this.rankingFrom -= COUNTRIES_PER_PAGE;
        }
        reDrawCountryRankingChart(this.countryInfoList.slice(this.rankingFrom - 1, this.rankingTo))
      },
      drawChartWithNext: function() {
        if(this.countryInfoList.length == this.rankingTo) {
          // already achieved to max page
          return;
        }
        if(this.countryInfoList.length < this.rankingTo + COUNTRIES_PER_PAGE) {
          this.rankingFrom = this.rankingTo + 1;
          this.rankingTo = this.countryInfoList.length;
        } else {
          this.rankingFrom = this.rankingTo + 1;
          this.rankingTo += COUNTRIES_PER_PAGE;
        }
        reDrawCountryRankingChart(this.countryInfoList.slice(this.rankingFrom - 1, this.rankingTo), this.rankingFrom, this.rankingTo)
      }
    }
})
