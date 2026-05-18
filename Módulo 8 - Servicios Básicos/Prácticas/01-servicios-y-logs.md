# 🛠️ Módulo 8: Servicios Básicos

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Gestionar el ciclo de vida de un servicio (demonio) utilizando `systemd` e investigar los registros del sistema.

**Paso a paso:**
1. **Gestión del Demonio SSH (`systemctl`):**
   - Comprueba el estado de tu servidor SSH: `sudo systemctl status ssh` (En Rocky es `sshd`).
   - Fíjate en los parámetros "Loaded" (para ver si está "enabled") y "Active" (si está "running").
   - Detén el servicio: `sudo systemctl stop ssh`. Intenta conectarte por SSH a la máquina (fallará).
   - Inicia el servicio de nuevo: `sudo systemctl start ssh`.
2. **Análisis de Logs (`journalctl`):**
   - Genera un error de inicio de sesión a propósito. Intenta acceder por SSH con una contraseña inventada o a un usuario que no existe.
   - Busca en los registros filtrando exclusivamente por el servicio SSH: `sudo journalctl -u ssh -n 20` (En Rocky `-u sshd`). Observarás los intentos fallidos (`Failed password`).
3. **Logs tradicionales:**
   - Visualiza en tiempo real el registro de autenticaciones:
     - **Ubuntu/Debian:** `sudo tail -f /var/log/auth.log`
     - **Rocky:** `sudo tail -f /var/log/secure`
