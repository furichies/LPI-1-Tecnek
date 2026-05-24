// Lógica para la página de estadísticas
class StatisticsManager {
    constructor() {
        this.stats = this.loadStats();
        this.initializeCharts();
        this.updateStatsDisplay();
        this.generateAnalysis();
    }

    loadStats() {
        const defaultStats = {
            bestScore: 0,
            testsCompleted: 0,
            totalTime: 0,
            currentStreak: 0,
            categoryPerformance: {},
            testHistory: [],
            lastTestDate: null
        };

        const saved = localStorage.getItem('testStats');
        return saved ? { ...defaultStats, ...JSON.parse(saved) } : defaultStats;
    }

    saveStats() {
        localStorage.setItem('testStats', JSON.stringify(this.stats));
    }

    updateStatsDisplay() {
        document.getElementById('bestScore').textContent = `${this.stats.bestScore}%`;
        document.getElementById('testsCompleted').textContent = this.stats.testsCompleted;
        document.getElementById('avgTime').textContent = this.calculateAverageTime();
        document.getElementById('currentStreak').textContent = this.stats.currentStreak;
    }

    calculateAverageTime() {
        if (this.stats.testsCompleted === 0) return '0 min';
        const avgMinutes = Math.round(this.stats.totalTime / this.stats.testsCompleted);
        return `${avgMinutes} min`;
    }

    initializeCharts() {
        this.createPerformanceChart();
        this.createProgressChart();
    }

    createPerformanceChart() {
        // Datos de ejemplo para el gráfico de rendimiento por categoría
        // Get dynamic categories from questionsDatabase or use default LPIC-1
        let categories = [];
        if (typeof questionsDatabase !== 'undefined') {
            categories = [...new Set(questionsDatabase.map(q => q.category))];
        }
        if (categories.length === 0) {
            categories = ['LPIC-1', 'Linux Basics', 'System Architecture'];
        }

        const performanceData = categories.map(category => {
            const performance = this.stats.categoryPerformance[category] || 
                { correct: 0, total: 0, average: Math.random() * 100 };
            return performance.average || (performance.total > 0 ? 
                (performance.correct / performance.total) * 100 : Math.random() * 100);
        });

        const data = [{
            x: categories,
            y: performanceData,
            type: 'bar',
            marker: {
                color: performanceData.map(score => 
                    score >= 80 ? '#10b981' : 
                    score >= 60 ? '#f59e0b' : '#ef4444'
                )
            }
        }];

        const layout = {
            title: '',
            xaxis: { 
                title: 'Categorías',
                tickangle: -45
            },
            yaxis: { 
                title: 'Rendimiento (%)',
                range: [0, 100]
            },
            margin: { t: 20, b: 100, l: 60, r: 20 },
            font: { family: 'Inter, sans-serif' }
        };

        Plotly.newPlot('performanceChart', data, layout, {responsive: true});
    }

    createProgressChart() {
        // Generar datos de progreso simulados
        const dates = this.generateDateRange(30);
        const scores = this.generateProgressData(dates.length);

        const data = [{
            x: dates,
            y: scores,
            type: 'scatter',
            mode: 'lines+markers',
            line: {
                color: '#667eea',
                width: 3
            },
            marker: {
                color: '#667eea',
                size: 6
            }
        }];

        const layout = {
            title: '',
            xaxis: { 
                title: 'Fecha',
                tickangle: -45
            },
            yaxis: { 
                title: 'Puntuación (%)',
                range: [0, 100]
            },
            margin: { t: 20, b: 80, l: 60, r: 20 },
            font: { family: 'Inter, sans-serif' }
        };

        Plotly.newPlot('progressChart', data, layout, {responsive: true});
    }

    generateDateRange(days) {
        const dates = [];
        for (let i = days - 1; i >= 0; i--) {
            const date = new Date();
            date.setDate(date.getDate() - i);
            dates.push(date.toLocaleDateString('es-ES'));
        }
        return dates;
    }

    generateProgressData(length) {
        const scores = [];
        let currentScore = 40 + Math.random() * 20; // Empezar entre 40-60%
        
        for (let i = 0; i < length; i++) {
            // Simular mejora gradual con algunos altibajos
            const improvement = (Math.random() - 0.3) * 10;
            currentScore = Math.max(30, Math.min(95, currentScore + improvement));
            scores.push(Math.round(currentScore));
        }
        
        return scores;
    }

    generateAnalysis() {
        this.analyzeStrengths();
        this.analyzeWeaknesses();
        this.generateRecommendations();
    }

    analyzeStrengths() {
        const strengthsList = document.getElementById('strengthsList');
        const strengths = [
            {
                category: 'Comandos Básicos',
                score: 85,
                description: 'Excelente comprensión de la línea de comandos'
            },
            {
                category: 'Gestión de Archivos',
                score: 78,
                description: 'Buen conocimiento de permisos y propiedad'
            }
        ];

        strengthsList.innerHTML = strengths.map(strength => `
            <div class="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <div class="flex-shrink-0">
                    <i class="fas fa-check-circle text-green-600"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-medium text-green-900">${strength.category}</h4>
                    <p class="text-sm text-green-700">${strength.description}</p>
                    <div class="mt-1">
                        <span class="text-xs bg-green-200 text-green-800 px-2 py-1 rounded">
                            ${strength.score}% de aciertos
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    analyzeWeaknesses() {
        const weaknessesList = document.getElementById('weaknessesList');
        const weaknesses = [
            {
                category: 'Redes Linux',
                score: 45,
                description: 'Necesitas reforzar los conceptos sobre configuración de red'
            },
            {
                category: 'Seguridad',
                score: 52,
                description: 'Revisa las políticas de contraseñas y cifrado'
            }
        ];

        weaknessesList.innerHTML = weaknesses.map(weakness => `
            <div class="flex items-center space-x-3 p-3 bg-red-50 rounded-lg">
                <div class="flex-shrink-0">
                    <i class="fas fa-exclamation-triangle text-red-600"></i>
                </div>
                <div class="flex-1">
                    <h4 class="font-medium text-red-900">${weakness.category}</h4>
                    <p class="text-sm text-red-700">${weakness.description}</p>
                    <div class="mt-1">
                        <span class="text-xs bg-red-200 text-red-800 px-2 py-1 rounded">
                            ${weakness.score}% de aciertos
                        </span>
                    </div>
                </div>
            </div>
        `).join('');
    }

    generateRecommendations() {
        const recommendationsList = document.getElementById('recommendationsList');
        const recommendations = [
            {
                icon: 'fas fa-terminal',
                title: 'Practica en la Terminal',
                description: 'Dedica tiempo adicional a practicar comandos reales en una máquina virtual o servidor Linux.'
            },
            {
                icon: 'fas fa-book-open',
                title: 'Lee las páginas man',
                description: 'Acostúmbrate a utilizar el comando man para entender todas las opciones de los comandos.'
            },
            {
                icon: 'fas fa-clock',
                title: 'Mejora tu Velocidad',
                description: 'Trabaja en responder más rápidamente sin comprometer la precisión para mejorar tu tiempo promedio.'
            },
            {
                icon: 'fas fa-redo',
                title: 'Repite Tests Anteriores',
                description: 'Vuelve a realizar tests que hayas completado para reforzar el aprendizaje y mejorar tu puntuación.'
            }
        ];

        recommendationsList.innerHTML = recommendations.map(rec => `
            <div class="flex items-start space-x-4">
                <div class="flex-shrink-0">
                    <div class="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i class="${rec.icon} text-white"></i>
                    </div>
                </div>
                <div class="flex-1">
                    <h3 class="font-semibold text-white mb-1">${rec.title}</h3>
                    <p class="text-indigo-100 text-sm">${rec.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Método para actualizar estadísticas después de completar un test
    updateAfterTest(score, timeSpent, categoryPerformance) {
        this.stats.testsCompleted++;
        this.stats.totalTime += timeSpent;
        this.stats.lastTestDate = new Date().toISOString();
        
        if (score > this.stats.bestScore) {
            this.stats.bestScore = score;
        }
        
        // Actualizar rendimiento por categoría
        Object.keys(categoryPerformance).forEach(category => {
            if (!this.stats.categoryPerformance[category]) {
                this.stats.categoryPerformance[category] = { correct: 0, total: 0, average: 0 };
            }
            
            const cat = this.stats.categoryPerformance[category];
            cat.correct += categoryPerformance[category].correct;
            cat.total += categoryPerformance[category].total;
            cat.average = (cat.correct / cat.total) * 100;
        });
        
        // Actualizar racha
        if (score >= 70) {
            this.stats.currentStreak++;
        } else {
            this.stats.currentStreak = 0;
        }
        
        this.saveStats();
        this.updateStatsDisplay();
        this.initializeCharts();
        this.generateAnalysis();
    }

    // Método para exportar estadísticas
    exportStats() {
        const dataStr = JSON.stringify(this.stats, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'estadisticas_lpic1.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // Método para importar estadísticas
    importStats(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const importedStats = JSON.parse(e.target.result);
                this.stats = { ...this.stats, ...importedStats };
                this.saveStats();
                this.updateStatsDisplay();
                this.initializeCharts();
                this.generateAnalysis();
                alert('Estadísticas importadas correctamente');
            } catch (error) {
                alert('Error al importar las estadísticas');
            }
        };
        reader.readAsText(file);
    }

    // Método para resetear estadísticas
    resetStats() {
        if (confirm('¿Estás seguro de que quieres resetear todas las estadísticas?')) {
            this.stats = {
                bestScore: 0,
                testsCompleted: 0,
                totalTime: 0,
                currentStreak: 0,
                categoryPerformance: {},
                testHistory: [],
                lastTestDate: null
            };
            this.saveStats();
            this.updateStatsDisplay();
            this.initializeCharts();
            this.generateAnalysis();
        }
    }
}

// Inicializar el gestor de estadísticas
document.addEventListener('DOMContentLoaded', () => {
    window.statsManager = new StatisticsManager();
    
    // Animaciones iniciales
    anime({
        targets: '.card-hover',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 600,
        delay: anime.stagger(100),
        easing: 'easeOutQuad'
    });
    
    // Si hay datos de un test reciente, actualizar estadísticas
    const testState = localStorage.getItem('testState');
    if (testState) {
        try {
            const state = JSON.parse(testState);
            if (state.testCompleted && state.results) {
                // Simular actualización con datos del test
                const categoryPerformance = {};
                state.questions.forEach((question, index) => {
                    const category = question.category;
                    if (!categoryPerformance[category]) {
                        categoryPerformance[category] = { correct: 0, total: 0 };
                    }
                    categoryPerformance[category].total++;
                    if (state.userAnswers[index] === question.correct) {
                        categoryPerformance[category].correct++;
                    }
                });
                
                // Actualizar estadísticas (simulado)
                // window.statsManager.updateAfterTest(
                //     state.results.score,
                //     120, // tiempo simulado
                //     categoryPerformance
                // );
            }
        } catch (e) {
            console.warn('Error al procesar el estado del test:', e);
        }
    }
});

// Funciones auxiliares para exportar/importar
function exportStats() {
    if (window.statsManager) {
        window.statsManager.exportStats();
    }
}

function importStats() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
        const file = e.target.files[0];
        if (file && window.statsManager) {
            window.statsManager.importStats(file);
        }
    };
    input.click();
}

function resetStats() {
    if (window.statsManager) {
        window.statsManager.resetStats();
    }
}