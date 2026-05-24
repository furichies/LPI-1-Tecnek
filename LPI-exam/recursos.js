// Lógica para la página de recursos
class ResourcesManager {
    constructor() {
        this.initializeAnimations();
        this.loadUserProgress();
    }

    initializeAnimations() {
        // Animaciones iniciales para las tarjetas
        anime({
            targets: '.card-hover',
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 600,
            delay: anime.stagger(100),
            easing: 'easeOutQuad'
        });

        // Animación para los enlaces de recursos
        anime({
            targets: '.resource-link',
            opacity: [0, 1],
            translateX: [-20, 0],
            duration: 400,
            delay: anime.stagger(50),
            easing: 'easeOutQuad'
        });
    }

    loadUserProgress() {
        // Cargar progreso del usuario para personalizar recomendaciones
        const stats = JSON.parse(localStorage.getItem('testStats') || '{}');
        const testState = JSON.parse(localStorage.getItem('testState') || '{}');
        
        // Personalizar consejos basados en el progreso
        this.customizeRecommendations(stats, testState);
    }

    customizeRecommendations(stats, testState) {
        // Si el usuario tiene áreas débiles identificadas, destacar recursos relacionados
        if (stats.categoryPerformance) {
            const weakCategories = Object.keys(stats.categoryPerformance)
                .filter(category => stats.categoryPerformance[category].average < 60);
            
            if (weakCategories.length > 0) {
                this.highlightResourcesForCategories(weakCategories);
            }
        }
    }

    highlightResourcesForCategories(categories) {
        // Destacar recursos específicos para las categorías débiles
        categories.forEach(category => {
            let resourceSection;
            
            switch(category) {
                case 'Fuentes de Alimentación':
                    resourceSection = document.querySelector('[href*="grupoindustronic"]');
                    break;
                case 'Sistemas de Refrigeración':
                    resourceSection = document.querySelector('[href*="eniun"]');
                    break;
                case 'Conectores y Puertos':
                    resourceSection = document.querySelector('[href*="hardzone"]');
                    break;
                default:
                    resourceSection = null;
            }
            
            if (resourceSection) {
                const parent = resourceSection.closest('.resource-link');
                if (parent) {
                    parent.classList.add('ring-2', 'ring-yellow-400', 'bg-yellow-50');
                    
                    // Añadir etiqueta de recomendado
                    const badge = document.createElement('span');
                    badge.className = 'ml-2 px-2 py-1 bg-yellow-400 text-yellow-900 text-xs rounded-full';
                    badge.textContent = 'Recomendado';
                    parent.querySelector('h3').appendChild(badge);
                }
            }
        });
    }

    // Método para generar guía de estudio personalizada
    generateStudyGuide() {
        const stats = JSON.parse(localStorage.getItem('testStats') || '{}');
        const guide = {
            introduction: 'Guía de estudio personalizada basada en tu progreso',
            sections: [],
            recommendations: []
        };

        // Analizar áreas de mejora
        if (stats.categoryPerformance) {
            Object.entries(stats.categoryPerformance).forEach(([category, performance]) => {
                if (performance.average < 70) {
                    guide.sections.push({
                        title: category,
                        priority: performance.average < 50 ? 'Alta' : 'Media',
                        resources: this.getResourcesForCategory(category),
                        exercises: `Practica con preguntas de ${category}`
                    });
                }
            });
        }

        return guide;
    }

    getResourcesForCategory(category) {
        const resources = {
            'Componentes Básicos': [
                { title: 'PCBasic - Placas Base', url: 'https://www.pcbasic.com/es/blog/what_does_a_motherboard_do.html' }
            ],
            'Fuentes de Alimentación': [
                { title: 'Industronic - Fuentes de Poder', url: 'https://grupoindustronic.com/potencia-tu-pc-guia-sobre-fuentes-de-poder-para-pc/' }
            ],
            'Sistemas de Refrigeración': [
                { title: 'Eniun - Sistemas de Refrigeración', url: 'https://www.eniun.com/sistemas-de-refrigeracion-ordenador/' }
            ],
            'Conectores y Puertos': [
                { title: 'HardZone - Puertos y Conectores', url: 'https://hardzone.es/tutoriales/componentes/puertos-placa-base/' }
            ]
        };

        return resources[category] || [];
    }

    // Método para crear un plan de estudio semanal
    createWeeklyStudyPlan() {
        const plan = {
            week: 1,
            days: [
                { day: 'Lunes', topic: 'Componentes Básicos', duration: '2 horas', activity: 'Leer documentación y practicar' },
                { day: 'Martes', topic: 'Fuentes de Alimentación', duration: '1.5 horas', activity: 'Estudiar especificaciones' },
                { day: 'Miércoles', topic: 'Sistemas de Refrigeración', duration: '2 horas', activity: 'Ver videos y practicar' },
                { day: 'Jueves', topic: 'Conectores y Puertos', duration: '1.5 horas', activity: 'Estudiar tipos de conectores' },
                { day: 'Viernes', topic: 'Revisión General', duration: '1 hora', activity: 'Test de práctica' },
                { day: 'Sábado', topic: 'Áreas Débiles', duration: '2 horas', activity: 'Enfocarse en temas difíciles' },
                { day: 'Domingo', topic: 'Descanso', duration: '0 horas', activity: 'Repaso ligero si se desea' }
            ]
        };

        return plan;
    }

    // Método para exportar recursos favoritos
    exportFavoriteResources() {
        const favorites = JSON.parse(localStorage.getItem('favoriteResources') || '[]');
        const dataStr = JSON.stringify(favorites, null, 2);
        const dataBlob = new Blob([dataStr], {type: 'application/json'});
        const url = URL.createObjectURL(dataBlob);
        
        const link = document.createElement('a');
        link.href = url;
        link.download = 'recursos_favoritos_mf0953_2.json';
        link.click();
        
        URL.revokeObjectURL(url);
    }

    // Método para compartir recursos
    shareResource(title, url) {
        if (navigator.share) {
            navigator.share({
                title: title,
                text: `Recurso útil para LPIC-1: ${title}`,
                url: url
            });
        } else {
            // Fallback: copiar al portapapeles
            const text = `Recurso para LPIC-1 - ${title}: ${url}`;
            navigator.clipboard.writeText(text).then(() => {
                this.showNotification('Enlace copiado al portapapeles');
            });
        }
    }

    // Método para mostrar notificaciones
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg ${
            type === 'success' ? 'bg-green-500' : 
            type === 'error' ? 'bg-red-500' : 'bg-blue-500'
        } text-white`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animación de entrada
        anime({
            targets: notification,
            opacity: [0, 1],
            translateX: [100, 0],
            duration: 300,
            easing: 'easeOutQuad'
        });
        
        // Eliminar después de 3 segundos
        setTimeout(() => {
            anime({
                targets: notification,
                opacity: [1, 0],
                translateX: [0, 100],
                duration: 300,
                easing: 'easeInQuad',
                complete: () => {
                    document.body.removeChild(notification);
                }
            });
        }, 3000);
    }
}

// Funciones globales para los botones
function downloadGuide() {
    // Crear contenido de la guía
    const guideContent = `
# Guía de Estudio LPIC-1 - Linux Professional Institute

## Introducción
Esta guía está diseñada para ayudarte a preparar la certificación LPIC-1 en Linux Professional Institute.

## Temas Principales

### 1. Componentes Básicos
- Placas base y sus funciones
- Tipos de memoria RAM
- Procesadores y sockets
- Chipsets

### 2. Fuentes de Alimentación
- Tipos AT y ATX
- Certificaciones 80 Plus
- Conectores y especificaciones
- Cálculo de potencia necesaria

### 3. Sistemas de Refrigeración
- Refrigeración por aire
- Refrigeración líquida
- Ventiladores y disipadores
- Mantenimiento térmico

### 4. Conectores y Puertos
- Conectores internos
- Puertos de expansión
- USB y otros puertos
- Audio y video

### 5. Almacenamiento
- Discos duros HDD
- Unidades SSD
- Interfaces SATA y M.2
- Configuración RAID

### 6. Tarjetas de Expansión
- PCI Express
- Tarjetas gráficas
- Tarjetas de sonido
- Tarjetas de red

## Consejos de Estudio
1. Practica regularmente con el test
2. Revisa las fuentes para respuestas detalladas
3. Analiza tus áreas débiles
4. Crea un plan de estudio semanal
5. Usa recursos adicionales

## Recursos Recomendados
- Documentación oficial del SEPE
- Guías técnicas de componentes
- Foros especializados
- Videos educativos

## Preparación para el Examen
- Completa al menos 5 tests de práctica
- Consigue un 80% o más en tus intentos
- Revisa todas las preguntas incorrectas
- Practica con límite de tiempo

¡Buena suerte en tu certificación!
    `;

    // Crear y descargar el archivo
    const blob = new Blob([guideContent], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'guia_mf0953_2.md';
    link.click();
    URL.revokeObjectURL(url);

    // Mostrar notificación
    if (window.resourcesManager) {
        window.resourcesManager.showNotification('Guía descargada correctamente', 'success');
    }
}

function showContactForm() {
    // Crear formulario de contacto modal
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-900">Contactar Soporte</h2>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input type="text" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500">
                        <option>Duda sobre contenido</option>
                        <option>Error en preguntas</option>
                        <option>Sugerencia</option>
                        <option>Otro</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                    <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" required></textarea>
                </div>
                
                <div class="flex space-x-4">
                    <button type="submit" class="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-blue-600 hover:to-indigo-700 transition-colors">
                        Enviar Mensaje
                    </button>
                    <button type="button" onclick="closeModal()" class="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Animación de entrada
    anime({
        targets: modal.querySelector('.bg-white'),
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });

    // Manejar envío del formulario
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envío
        if (window.resourcesManager) {
            window.resourcesManager.showNotification('Mensaje enviado correctamente', 'success');
        }
        
        closeModal();
    });
}

function reportError() {
    // Crear formulario de reporte de error
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50';
    modal.innerHTML = `
        <div class="bg-white rounded-xl shadow-2xl p-8 max-w-md w-full mx-4">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-900">Reportar Error</h2>
                <button onclick="closeModal()" class="text-gray-500 hover:text-gray-700">
                    <i class="fas fa-times text-xl"></i>
                </button>
            </div>
            
            <form class="space-y-4">
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Tipo de Error</label>
                    <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                        <option>Respuesta incorrecta</option>
                        <option>Pregunta mal formulada</option>
                        <option>Error de ortografía</option>
                        <option>Enlace roto</option>
                        <option>Otro</option>
                    </select>
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Número de Pregunta (opcional)</label>
                    <input type="number" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500">
                </div>
                
                <div>
                    <label class="block text-sm font-medium text-gray-700 mb-1">Descripción del Error</label>
                    <textarea rows="4" class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500" required></textarea>
                </div>
                
                <div class="flex space-x-4">
                    <button type="submit" class="flex-1 bg-gradient-to-r from-red-500 to-pink-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-colors">
                        Reportar Error
                    </button>
                    <button type="button" onclick="closeModal()" class="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors">
                        Cancelar
                    </button>
                </div>
            </form>
        </div>
    `;

    document.body.appendChild(modal);
    
    // Animación de entrada
    anime({
        targets: modal.querySelector('.bg-white'),
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 300,
        easing: 'easeOutQuad'
    });

    // Manejar envío del formulario
    modal.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Simular envío
        if (window.resourcesManager) {
            window.resourcesManager.showNotification('Error reportado correctamente', 'success');
        }
        
        closeModal();
    });
}

function closeModal() {
    const modal = document.querySelector('.fixed.inset-0');
    if (modal) {
        anime({
            targets: modal.querySelector('.bg-white'),
            opacity: [1, 0],
            scale: [1, 0.8],
            duration: 200,
            easing: 'easeInQuad',
            complete: () => {
                document.body.removeChild(modal);
            }
        });
    }
}

// Inicializar el gestor de recursos
document.addEventListener('DOMContentLoaded', () => {
    window.resourcesManager = new ResourcesManager();
});