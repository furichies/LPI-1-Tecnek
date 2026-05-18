# 🐧 Módulo 1: Introducción a Linux

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Interactuar con el sistema a través de la línea de comandos e identificar la información del SO.

**Paso a paso:**
1. **Inicio de sesión:** Enciende tus máquinas e inicia sesión con el usuario que creaste durante la instalación.
2. **Identidad del usuario y sesión:**
   - Ejecuta `whoami` para verificar tu usuario actual.
   - Ejecuta `pwd` para comprobar en qué directorio te encuentras al iniciar sesión (debería ser tu `$HOME`).
3. **Información del Sistema:**
   - Ejecuta `uname -r` para ver la versión exacta del kernel de Linux que está corriendo.
   - Ejecuta `cat /etc/os-release` para visualizar el nombre, versión y nombre en clave del sistema operativo. Compara las diferencias entre Ubuntu, Rocky y Debian.
4. **Uso de Manuales:**
   - Ejecuta `man ls` para leer el manual del comando listar. Usa las flechas para bajar y pulsa `q` para salir.
   - Ejecuta `ls --help` para ver una ayuda más rápida e integrada.
