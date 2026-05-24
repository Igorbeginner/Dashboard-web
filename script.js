const ctx = document.getElementById('grafico-concluidos');

new Chart(ctx, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [89, 11],
        backgroundColor: ['#037E5C', 'rgba(255, 255, 255, 0)'],
        borderWidth: 0,
        cutout: '84%',
        borderRadius: 20,
        spacing: 3
    }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
}); 

const miniConcluido = document.getElementById('mini-concluido');

new Chart(miniConcluido, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [8, 14, 9, 22, 11, 27, 15, 21, 18, 20],
            borderColor: '#037E5C',
            backgroundColor: 'rgba(3, 126, 92, 0.22)',
            borderWidth: 3,
            tension: 0.45,
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    },
    plugins: [{
        id: 'greenGlow',
        beforeDatasetDraw(chart) {
            const ctx = chart.ctx;
            ctx.save();
            ctx.shadowColor = 'rgba(3, 126, 92, 0.14)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
        },
        afterDatasetDraw(chart) {
            chart.ctx.restore();
        }
    }]
});


const ctxPrazo = document.getElementById('grafico-prazo');

new Chart(ctxPrazo, {
    type: 'doughnut',
    data: {
    datasets: [{
        data: [70, 10],
        backgroundColor: ['#0072F7', 'rgba(255, 255, 255, 0)'],
        borderWidth: 0,
        cutout: '84%',
        borderRadius: 20,
        spacing: 3
    }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});

const miniPrazo = document.getElementById('mini-prazo');

new Chart(miniPrazo, {
    type: 'line',
    data: {
        labels: ['', '', '', '', '', '', '', '', '', ''],
        datasets: [{
            data: [20, 15, 28, 12, 34, 10, 25, 13, 18, 16],
            borderColor: '#0072F7',
            backgroundColor: 'rgba(0, 114, 247, 0.20)',
            borderWidth: 3,
            tension: 0.45,
            pointRadius: 0,
            fill: true
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        },
        scales: {
            x: { display: false },
            y: { display: false }
        }
    },
    plugins: [{
        id: 'blueGlow',
        beforeDatasetDraw(chart) {
            const ctx = chart.ctx;
            ctx.save();
            ctx.shadowColor = 'rgba(0, 114, 247, 0.35)';
            ctx.shadowBlur = 6;
            ctx.shadowOffsetX = 0;
            ctx.shadowOffsetY = 0;
        },
        afterDatasetDraw(chart) {
            chart.ctx.restore();
        }
    }]
});