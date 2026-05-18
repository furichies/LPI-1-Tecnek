# 🖥️ Módulo 6: Interfaces de Usuario (Instalación de Entornos en Debian 13)

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Partiendo de una instalación de Debian 13 Netinst en modo texto (CLI), instalar diferentes entornos de escritorio (GUI) y aprender a cambiar entre ellos mediante un gestor de pantalla (Display Manager).

**Paso a paso:**
1. **Preparación y herramienta de tareas (`tasksel`):**
   - Inicia tu Debian 13 Netinst e inicia sesión como `root` (o con `sudo`).
   - Actualiza los repositorios: `apt update`.
   - Asegúrate de tener la herramienta oficial de selección de tareas instalada: `apt install tasksel -y`.
2. **Instalación de un entorno de escritorio completo (XFCE):**
   - Ejecuta `tasksel`. Te aparecerá un menú en texto.
   - Utiliza las flechas para moverte y la barra espaciadora para marcar opciones. Selecciona `Debian desktop environment` y `Xfce`. Presiona TAB para ir a `<Ok>` e Intro.
   - Espera a que termine la descarga e instalación.
3. **Instalación de otros entornos vía APT (MATE y KDE Plasma):**
   - Instala el entorno MATE base: `apt install mate-desktop-environment -y`.
   - Instala KDE Plasma (versión mínima): `apt install kde-plasma-desktop -y`.
4. **Configuración del Gestor de Sesiones (Display Manager):**
   - Al instalar KDE, es posible que el sistema te pregunte si quieres usar `lightdm` (instalado con Xfce/Mate) o `sddm` (el de KDE). Selecciona `lightdm` para que el sistema inicie sesión en él.
   - Verifica que el sistema arrancará de forma gráfica por defecto: `systemctl set-default graphical.target`.
5. **Reinicio y Prueba:**
   - Ejecuta `reboot`. Al reiniciar, verás la pantalla de inicio de sesión gráfica (LightDM).
   - **IMPORTANTE:** Antes de poner tu contraseña, busca un pequeño icono (generalmente arriba a la derecha en LightDM) que te permite seleccionar la sesión: XFCE, MATE o Plasma.
   - Entra en uno, cierra la sesión gráfica (Log out) y vuelve a entrar seleccionando otro distinto.
