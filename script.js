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


const chamadasHora = document.getElementById('chamadas-hora');

new Chart(chamadasHora, {
    type: 'bar',
    data: {
        labels: ['7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18'],
        datasets: [{
            data: [2800, 3900, 4600, 5000, 6100, 7600, 8300, 8300, 5800, 6700, 6200, 3000],
            backgroundColor: '#FFFFFF',
            borderWidth: 0,
            barThickness: 16
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
                    autoSkip: false,
                    color: '#FFFFFF',
                    font: {
                        size: 8
                    },
                    callback: function(value) {
                        return value.toLocaleString('pt-BR');
                    }
                },
                grid: { display: false },
                border: { display: false }
            }
        }
    }
});


const volumeChamadas = document.getElementById('volume-chamadas-chart');
const ctxVolume = volumeChamadas.getContext('2d');

const dias = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const horas = ['07h','08h','09h','10h','11h','12h','13h','14h','15h','16h','17h','18h'];

function drawHeatmap() {
    const w = volumeChamadas.width = volumeChamadas.offsetWidth;
    const h = volumeChamadas.height = volumeChamadas.offsetHeight;

    const paddingTop = 35;
    const paddingLeft = 48;
    const cellW = (w - paddingLeft) / dias.length;
    const cellH = (h - paddingTop) / horas.length;

    ctxVolume.clearRect(0, 0, w, h);

    // Fundo gradiente contínuo (efeito da referência)
    const gradient = ctxVolume.createRadialGradient(
        paddingLeft + (w - paddingLeft) * 0.48,
        paddingTop + (h - paddingTop) * 0.55,
        25,
        paddingLeft + (w - paddingLeft) * 0.48,
        paddingTop + (h - paddingTop) * 0.55,
        230
    );

    gradient.addColorStop(0, 'rgba(70, 65, 255, 0.78)');
    gradient.addColorStop(0.38, 'rgba(95, 115, 255, 0.62)');
    gradient.addColorStop(0.72, 'rgba(135, 165, 255, 0.70)');
    gradient.addColorStop(1, 'rgba(185, 205, 255, 0.88)');
    ctxVolume.fillStyle = gradient;
    ctxVolume.fillRect(paddingLeft, paddingTop, w - paddingLeft, h - paddingTop);

    // Grade
    ctxVolume.strokeStyle = 'rgba(30,55,120,.28)';
    ctxVolume.lineWidth = 1;

    for (let i = 0; i <= dias.length; i++) {
        const x = paddingLeft + i * cellW;
        ctxVolume.beginPath();
        ctxVolume.moveTo(x, paddingTop);
        ctxVolume.lineTo(x, h);
        ctxVolume.stroke();
    }

    for (let i = 0; i <= horas.length; i++) {
        const y = paddingTop + i * cellH;
        ctxVolume.beginPath();
        ctxVolume.moveTo(paddingLeft, y);
        ctxVolume.lineTo(w, y);
        ctxVolume.stroke();
    }

    // Dias
    ctxVolume.fillStyle = '#fff';
    ctxVolume.font = '600 12px Poppins';
    ctxVolume.textAlign = 'center';

    dias.forEach((dia, i) => {
        ctxVolume.fillText(
            dia,
            paddingLeft + i * cellW + cellW / 2,
            20
        );
    });

    // Horas
    ctxVolume.textAlign = 'right';

    horas.forEach((hora, i) => {
        ctxVolume.fillText(
            hora,
            35,
            paddingTop + i * cellH + cellH / 1.5
        );
    });
}

drawHeatmap();
window.addEventListener('resize', drawHeatmap);