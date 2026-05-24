# LPIC-1 Test Application 🐧

Aplicación web completa para la preparación de la certificación **LPIC-1** (Linux Professional Institute Certification Level 1), que cubre los exámenes **101-500** y **102-500**.

## 🌐 Acceso a la Aplicación

**URL:** [https://ricardoinstructor.github.io/CP-MOD1/](https://ricardoinstructor.github.io/CP-MOD1/)

> ⚠️ **Nota**: Las preguntas han sido verificadas y actualizadas. Aunque se ha realizado un proceso de revisión exhaustivo, pueden existir algunos errores. Si encuentras alguna inconsistencia, por favor repórtala.

## Características

### 🎯 Funcionalidades Principales
- **383 preguntas** de nivel profesional sobre administración Linux
- **Bilingüe**: Disponible en **español** (traducido) e **inglés** (original)
- **Formato test** con 4-5 respuestas posibles (una o varias correctas)
- **Preguntas reales** basadas en exámenes oficiales LPIC-1
- **Retroalimentación detallada** con explicaciones por cada pregunta
- **Cuatro modos de uso**: Test completo (383), Modo reducido (100), Modo práctica (20) y Modo personalizado
- **Estadísticas detalladas** de rendimiento con gráficos interactivos
- **Interfaz moderna** y responsive
- **Página de recursos** con material de estudio oficial de LPI

### 📊 Características Técnicas
- **Diseño responsive** con Tailwind CSS
- **Animaciones fluidas** con Anime.js
- **Gráficos interactivos** con Plotly.js
- **Almacenamiento local** de progreso y estadísticas
- **Navegación intuitiva** entre preguntas
- **Sistema de marcado** de preguntas para revisión posterior
- **Revisión completa** de respuestas con explicaciones
- **Soporte multirespuesta** para preguntas con varias opciones correctas

## Estructura del Proyecto

```
CP-MOD1/
├── index.html              # Página principal con el test
├── estadisticas.html       # Página de estadísticas y análisis
├── recursos.html           # Página de recursos de aprendizaje
├── app.js                  # Lógica principal de la aplicación
├── estadisticas.js         # Lógica de estadísticas y gráficos
├── recursos.js             # Lógica de la página de recursos
├── questions.js            # Base de datos de preguntas (inglés)
├── questions_es.js         # Base de datos de preguntas (español)
├── pdfs/                   # Material de estudio en PDF
│   ├── 101/                # Recursos para el examen 101-500
│   └── 102/                # Recursos para el examen 102-500
├── extract_questions.py    # Script para extraer preguntas de PDFs
├── translate_questions.py  # Script para traducir preguntas al español
├── apply_corrections.py    # Script para aplicar correcciones
├── update_recursos.py      # Script para actualizar recursos
├── update_stats.py         # Script para actualizar estadísticas
└── README.md               # Este archivo
```

## Instalación y Uso

### Opción 1: Uso Directo
1. Descarga todos los archivos
2. Abre `index.html` en tu navegador
3. ¡Comienza a practicar!

### Opción 2: Servidor Local
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js
npx serve .
```

### Opción 3: Despliegue en GitHub Pages
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Activa GitHub Pages en Settings → Pages
4. Selecciona la rama main y carpeta root
5. Tu aplicación estará disponible en `https://[tu-usuario].github.io/[nombre-repositorio]/`

## Cómo Usar la Aplicación

### Seleccionar Idioma
- **Español (Traducido)**: Preguntas traducidas al español
- **English (Original)**: Preguntas en su idioma original

### Iniciar un Test
1. **Modo Test Completo**: 383 preguntas (todas las disponibles) con tiempo ilimitado
2. **Modo Reducido**: 100 preguntas aleatorias — ideal para repasos rápidos
3. **Modo Práctica**: 20 preguntas aleatorias con retroalimentación inmediata
4. **Modo Personalizado**: Elige el número exacto de preguntas (1-383)

### Durante el Test
- **Navegación**: Usa los botones "Anterior" y "Siguiente"
- **Marcar preguntas**: Presiona el botón "Marcar" para revisar después
- **Retroalimentación**: En modo práctica, verás explicaciones inmediatamente
- **Multirespuesta**: Algunas preguntas requieren seleccionar varias opciones correctas

### Al Finalizar
- **Resultados detallados**: Porcentaje de aciertos y preguntas correctas/incorrectas
- **Revisión completa**: Accede a todas las preguntas con explicaciones
- **Estadísticas**: Visualiza tu progreso en la página de estadísticas

## Temario LPIC-1

La certificación LPIC-1 se compone de dos exámenes. Las **383 preguntas** cubren los siguientes temas:

### Examen 101-500 — Administración del Sistema

| Tema | Descripción |
|------|-------------|
| **101** | Arquitectura del sistema |
| **102** | Instalación de Linux y gestión de paquetes |
| **103** | Comandos GNU y Unix |
| **104** | Dispositivos, sistemas de archivos Linux y FHS |

#### Temas clave cubiertos:
- Arranque del sistema (BIOS, UEFI, GRUB 2)
- Módulos del kernel (`lsmod`, `modprobe`, `modinfo`)
- Niveles de ejecución y systemd
- Gestión de paquetes Debian (`dpkg`, `apt-get`, `apt`)
- Gestión de paquetes RPM (`rpm`, `yum`, `dnf`)
- Trabajo con la shell Bash (redirección, pipes, variables)
- Procesamiento de texto (`grep`, `sed`, `awk`, `cut`, `sort`)
- Gestión de procesos (`ps`, `top`, `kill`, `nice`, `nohup`)
- Expresiones regulares y filtrado
- Sistema de archivos y permisos (`chmod`, `chown`, `chgrp`)
- Enlaces duros y simbólicos (`ln`)
- Particionado (MBR, GPT), LVM y sistemas de archivos
- Montaje y `/etc/fstab`

### Examen 102-500 — Administración de Redes

| Tema | Descripción |
|------|-------------|
| **105** | Shells y scripting |
| **106** | Interfaces de usuario y escritorios |
| **107** | Tareas administrativas |
| **108** | Servicios esenciales del sistema |
| **109** | Fundamentos de redes |
| **110** | Seguridad |

#### Temas clave cubiertos:
- Scripting en Bash
- Gestión de usuarios y grupos
- Automatización con cron y at
- Localización e internacionalización
- Configuración de red TCP/IP
- Resolución DNS y `/etc/hosts`
- Seguridad del sistema y SSH
- Configuración de logging (syslog, journald)
- Servicios de impresión (CUPS)
- Sincronización de reloj (NTP)

## Recursos de Aprendizaje Incluidos

La página de **Recursos** ofrece acceso directo a:

### 📚 Material Oficial LPI
- [Material de Estudio 101-500 (PDF en español)](https://learning.lpi.org/pdfstore/LPI-Learning-Material-101-500-es.pdf)
- [Material de Estudio 102-500 (PDF en español)](https://learning.lpi.org/pdfstore/LPI-Learning-Material-102-500-es.pdf)

### 📝 Guías de Repaso
- Guía de repaso para el examen 101
- Guía de repaso para el examen 102
- Bancos de preguntas resueltas (101 y 102)

### 🔗 Enlaces Útiles
- [Linux Professional Institute (LPI)](https://www.lpi.org/) — Página oficial de la certificación
- [Free Software Foundation (FSF)](https://www.fsf.org/) — Fundación del software libre
- [Kernel.org](https://www.kernel.org/) — Repositorio oficial del kernel Linux
- [El Manifiesto de Debian](https://www.debian.org/doc/manuals/project-history/manifesto.es.html)

## Tecnologías Utilizadas

- **HTML5** — Estructura semántica
- **Tailwind CSS** — Framework de diseño responsive
- **JavaScript ES6+** — Lógica de aplicación (orientada a objetos)
- **Anime.js** — Animaciones fluidas
- **Plotly.js** — Gráficos interactivos de estadísticas
- **Font Awesome** — Iconos
- **Google Fonts (Inter)** — Tipografía moderna

## Scripts de Utilidad (Python)

El proyecto incluye varios scripts Python para la gestión del banco de preguntas:

| Script | Descripción |
|--------|-------------|
| `extract_questions.py` | Extrae preguntas desde archivos PDF de exámenes |
| `translate_questions.py` | Traduce preguntas del inglés al español |
| `apply_corrections.py` | Aplica correcciones masivas al banco de preguntas |
| `clean_questions.py` | Limpia y normaliza el formato de las preguntas |
| `fix_known_errors.py` | Corrige errores conocidos en las preguntas |
| `update_recursos.py` | Actualiza los recursos de la página |
| `update_stats.py` | Genera y actualiza estadísticas |

## Características de Desarrollo

### Código Limpio y Modular
- **Separación de responsabilidades** — HTML, JS y datos en archivos independientes
- **Arquitectura orientada a objetos** — Clase `TestApplication`
- **Funciones reutilizables** — Generación aleatoria de tests
- **Soporte de estado persistente** — Reanudación de tests interrumpidos

### Optimización de Rendimiento
- **Carga diferida** de gráficos
- **Almacenamiento local** eficiente con `localStorage`
- **Animaciones optimizadas** con Anime.js

### Accesibilidad
- **Contraste de colores** adecuado
- **Navegación por teclado**
- **Estructura semántica**
- **Diseño responsive** adaptado a móvil, tablet y escritorio

## Personalización

### Añadir Nuevas Preguntas
Edita `questions.js` (inglés) o `questions_es.js` (español) y añade objetos con el siguiente formato:

```javascript
{
    id: 384,
    category: "LPIC-1",
    question: "Tu pregunta aquí",
    options: ["Opción A", "Opción B", "Opción C", "Opción D", "Opción E"],
    correct: 2, // Índice de la respuesta correcta (0-4)
    // Para preguntas con múltiples respuestas correctas:
    // correct: [0, 3],
    explanation: "Explicación detallada de la respuesta",
    source: "LPIC-1"
}
```

### Modificar el Diseño
- **Colores**: Edita las clases de Tailwind CSS en los archivos HTML
- **Animaciones**: Ajusta los parámetros de Anime.js en `app.js`
- **Layout**: Modifica la estructura HTML en `index.html`

## Sobre la Certificación LPIC-1

La **LPIC-1** es la primera certificación del programa de certificación profesional Linux de LPI (Linux Professional Institute). Valida la capacidad del candidato para:

- Realizar tareas de mantenimiento en línea de comandos
- Instalar y configurar un equipo con Linux
- Configurar redes básicas
- Administrar usuarios y permisos
- Realizar tareas de seguridad básica

### Requisitos del examen
- **Dos exámenes**: 101-500 y 102-500
- **60 preguntas** por examen
- **90 minutos** por examen
- **Aprobado**: 500/800 puntos
- **Validez**: 5 años

## Contribuciones

Las contribuciones son bienvenidas:
1. Fork del repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza los cambios
4. Envía un Pull Request

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.

## Agradecimientos

- **Linux Professional Institute (LPI)** por la documentación oficial y el programa de certificación
- **CAS Training** por los recursos formativos
- **Comunidad Linux** por los recursos compartidos y la documentación
- **Contribuyentes** que mejoran el contenido y reportan errores

## Soporte

Si encuentras errores o tienes sugerencias:
1. Abre un issue en GitHub
2. Usa el botón "Reportar Error" en la página de recursos
3. Envía un email con tus comentarios

---

**¡Buena suerte en tu certificación LPIC-1!** 🐧🎯