// food supplies
var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["Water", "Aardappellen", "Fruit", "Vlees", "Fris", "Snacks"],
        datasets: [{
            label: 'Overblijvende provisie',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

//afstand
var ctxspeed = document.getElementById("afstand").getContext("2d");
var myChart = new Chart(ctxspeed, {
  type: 'line',

  data: {
    labels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6"],
    datasets: [{
      borderColor: '#ffff00',
      backgroundColor: '#ffff00',
      borderWidth: 5,
      steppedLine: true,
      fill: false,
      data: [20, 50, 90, 140, 165, 210]
    }]
  },
});