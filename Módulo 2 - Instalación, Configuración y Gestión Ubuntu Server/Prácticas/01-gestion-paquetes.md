# 📦 Módulo 2: Instalación y Gestión de Paquetes

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Manejar la paquetería base de los sistemas Debian-based (`apt`) y RedHat-based (`dnf`).

**Paso a paso:**
1. **Sistemas Ubuntu Server y Debian 13 (`apt`):**
   - Actualiza la lista de repositorios: `sudo apt update`.
   - Actualiza los paquetes del sistema a la última versión: `sudo apt upgrade -y`.
   - Instala herramientas básicas: `sudo apt install curl wget htop tree neofetch -y`.
2. **Sistema Rocky Linux 10 (`dnf`):**
   - Comprueba si hay actualizaciones disponibles: `sudo dnf check-update`.
   - Aplica las actualizaciones: `sudo dnf upgrade -y`.
   - Instala las mismas herramientas: `sudo dnf install curl wget htop tree epel-release -y`. (Nota: en Rocky suele ser necesario habilitar `epel-release` para algunos paquetes como `neofetch`).
3. **Comprobación:** Ejecuta `neofetch` en las tres máquinas para ver un resumen visual de la instalación y comprobar que los paquetes funcionan.
