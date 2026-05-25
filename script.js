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



const historicoChamadas = document.getElementById('historico-chamadas');

new Chart(historicoChamadas, {
    type: 'bar',
    data: {
        labels: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
        datasets: [{
            data: [2800, 3900, 4600, 5000, 6000, 7600, 8300, 8200, 5800, 4200, 6200, 3000],
            backgroundColor: [
                '#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF',
                '#0ADEFB', '#0ADEFB', '#FFFFFF', '#0ADEFB',
                '#0ADEFB', '#FFFFFF', '#FFFFFF', '#FFFFFF'
            ],
            borderWidth: 0,
            barThickness: 18
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
            x: {
                grid: { display: false },
                ticks: {
                    color: '#FFFFFF',
                    font: { size: 11 }
                },
                border: { color: '#FFFFFF' }
            },
            y: {
                min: 1000,
                max: 9000,
                ticks: {
                    stepSize: 1000,
                    color: '#FFFFFF',
                    font: { size: 8 },
                    callback: value => value.toLocaleString('pt-BR')
                },
                grid: { display: false },
                border: { display: false }
            }
        }
    },
    plugins: [{
        id: 'mediaLine',
        afterDatasetsDraw(chart) {
            const { ctx, chartArea, scales } = chart;
            const y = scales.y.getPixelForValue(5500);

            ctx.save();

            ctx.beginPath();
            ctx.moveTo(chartArea.left, y);
            ctx.lineTo(chartArea.right, y);
            ctx.strokeStyle = '#0ADEFB';
            ctx.lineWidth = 2;
            ctx.stroke();

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '600 12px Poppins';
            ctx.textAlign = 'right';
            ctx.fillText('Média', chartArea.right - 5, y - 8);

            ctx.restore();
        }
    }]
}); 


const niveisChamados = document.getElementById('niveis-chamados');

new Chart(niveisChamados, {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [65, 25, 10],
            backgroundColor: [
                '#8B2CFF',
                '#7A008B',
                '#1839D8'
            ],
            borderWidth: 0,
            cutout: '85 %',
            borderRadius: 1,
            spacing: 0
        }]
    },
    options: {
        responsive: false,
        maintainAspectRatio: false,
        rotation: -40,
        circumference: 360,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false }
        }
    }
});