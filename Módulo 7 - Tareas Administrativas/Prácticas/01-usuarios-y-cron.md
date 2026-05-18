# 👥 Módulo 7: Tareas Administrativas

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Crear nuevos usuarios, aplicar privilegios administrativos y programar tareas en segundo plano.

**Paso a paso:**
1. **Creación del usuario y asignación de grupo:**
   - **Ubuntu/Debian:** Ejecuta `sudo adduser developer`. Cuando pida detalles, pon la contraseña y pulsa intro. Añádelo a los administradores: `sudo usermod -aG sudo developer`.
   - **Rocky:** Ejecuta `sudo useradd -m developer`, establécele contraseña con `sudo passwd developer`, y añádelo a los administradores: `sudo usermod -aG wheel developer`.
2. **Programación de tareas con Cron:**
   - Edita las tareas programadas de root: `sudo crontab -e`.
   - Añade una línea al final para ejecutar tu script de backup todos los días a las 03:00 AM:
     `0 3 * * * /root/backup.sh` (Asegúrate de que la ruta coincida con donde guardaste el script en el módulo 5).
3. **Comprobación de Cron:**
   - Revisa que la tarea se haya guardado correctamente listando los cronjobs: `sudo crontab -l`.
