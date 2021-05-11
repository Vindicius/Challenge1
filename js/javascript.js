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
var ctxAfstand = document.getElementById("afstand").getContext("2d");

var myAfstandChart = new Chart(ctxAfstand, {
  type: 'line',

  data: {
    labels: ["Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6"],
    datasets: [{
        label: 'Afstand',
        borderColor: '#ffff00',
        backgroundColor: '#ffff00',
        borderWidth: 5,
        fill: false,
        steppedLine: true,
        data: [20, 50, 90, 140, 165, 210]
    }]
  }
});



//Snelheid
var ctxSpeed = document.getElementById('snelheid').getContext('2d');

var mySpeedChart = new Chart(ctxSpeed, {
  type: 'line',

  data: {
    labels: ["Dag 0", "Dag 1", "Dag 2", "Dag 3", "Dag 4", "Dag 5", "Dag 6"],
    datasets: [{
        label: 'Snelheid',
        borderColor: '#00B2EE',
        backgroundColor: '#00B2EE',
        borderWidth: 5,
        fill: true,
        pointBackgroundColor: '#fff',
        pointBorderColor: '#fff',
        data: [0, 500, 700, 930, 1220, 1480, 1760]
    }]
  }
});