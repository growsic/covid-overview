
function drawFisrtChart(countryInfoList) {
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
      width: "80%",
      height: countryInfoList.length * 100,
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
    title: {
        text: 'title',
        align: 'center',
        floating: true
    },
    subtitle: {
        text: 'subtitle',
        align: 'center',
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
      categories: [],
      labels:{
        style: {
           fontSize: '20px',
       }
      }
    }
}

countryInfoList.forEach(countryInfo => {
  options.xaxis.categories.push(countryInfo.country);
  options.series[0].data.push(countryInfo.cases.total);
  options.series[1].data.push(countryInfo.deaths.total);
});

var chart = new ApexCharts(document.querySelector("#firstChart"), options);

chart.render();
}
