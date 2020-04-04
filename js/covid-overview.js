var app = new Vue({
  el: '#app',
  data: {
    countryInfoList: [],
    summary: null
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
                console.log(dto)
            } else if (dto.country == 'JAPAN') {
              console.log(dto)
            } else {
              this.countryInfoList.push(dto);
            }
        })
        this.countryInfoList.sort((a, b) => (b.cases.total > a.cases.total) ? 1 : -1)
        drawFisrtChart(this.countryInfoList.slice(10, 19));
      })
  },
  computed: {
    japanIfo: function () {
      return this.countryInfoList.filter(dto => dto.country == 'Japan')[0]
    }
  }
})
