const ctx = document.getElementById('grafico-concluidos');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [89, 11],
        backgroundColor: ['#037E5C', 'rgba(255,255,255,0.08)'],
        borderWidth: 0,
        cutout: '78%'
    }]
    },
    options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
        display: false
        },
        tooltip: {
        enabled: false
        }
    }
    }
});