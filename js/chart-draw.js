var countryRankingChart = null;
var timeLineChart = null;

function initCountryRankingChart(countryInfoList) {
  var options = {
    series: [
      {
        name: "total",
        data: []
      },
      {
        name: "deaths",

        data: []
      },
    ],
    chart: {
      type: "bar",
      width: "100%",
      height: countryInfoList.length * 80,
      background: '#F2F2F2'
    },
    colors: ["#3EC6E0", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
        dataLabels: {
          position: 'bottom'
        },

      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      offsetX: 10,
      dropShadow: {
        enabled: true,
         opacity: 0.6
      },
      style: {
        colors: ['#fff'],
        fontSize: '20px',
      },
    },
    xaxis: {
      categories: [],
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    },
    yaxis: {
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    }
}

  countryRankingChart = new ApexCharts(document.querySelector("#countryRankingChart"), options);

  countryInfoList.forEach(countryInfo => {
    options.xaxis.categories.push(countryInfo.country);
    options.series[0].data.push(countryInfo.cases.total);
    options.series[1].data.push(countryInfo.deaths.total);
  });

  countryRankingChart.render();
}

function reDrawCountryRankingChart(countryInfoList){
  var newOption = {
    series: [
      {
        name: "total",
        data: []
      },
      {
        name: "deaths",

        data: []
      },
    ],
    chart: {
      type: "bar",
      width: "100%",
      height: countryInfoList.length * 80,
      background: '#F2F2F2'
    },
    xaxis: {
      categories: [],
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    }
}
  countryInfoList.forEach(countryInfo => {
    newOption.xaxis.categories.push(countryInfo.country);
    newOption.series[0].data.push(countryInfo.cases.total);
    newOption.series[1].data.push(countryInfo.deaths.total);
  });
  countryRankingChart.updateOptions(newOption)

}

function initTimeLineChart(countryInfoList) {
  var options = {
    series: [
      {
        name: "total",
        data: []
      },
      {
        name: "deaths",

        data: []
      },
    ],
    chart: {
      type: "bar",
      width: "100%",
      height: countryInfoList.length * 80,
      background: '#F2F2F2'
    },
    colors: ["#3EC6E0", "#FF4560"],
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '100%',
        dataLabels: {
          position: 'bottom'
        },

      },
    },
    stroke: {
      width: 1,
      colors: ['#fff']
    },
    dataLabels: {
      offsetX: 10,
      dropShadow: {
        enabled: true,
         opacity: 0.6
      },
      style: {
        colors: ['#fff'],
        fontSize: '20px',
      },
    },
    xaxis: {
      categories: [],
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    },
    yaxis: {
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    }
}

  timeLineChart = new ApexCharts(document.querySelector("#timeLineChart"), options);

  countryInfoList.forEach(countryInfo => {
    options.xaxis.categories.push(countryInfo.country);
    options.series[0].data.push(countryInfo.cases.total);
    options.series[1].data.push(countryInfo.deaths.total);
  });

  timeLineChart.render();
}
