# 🖥️ Módulo 0: Preparación del Laboratorio (Infraestructura)

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Crear un entorno de pruebas consistente con 3 máquinas virtuales usando VirtualBox.

**Paso a paso:**
1. **Descarga de ISOs:**
   - Descarga la imagen ISO de [Ubuntu Server 26.04](https://ubuntu.com/download/server).
   - Descarga la imagen ISO de [Rocky Linux 10 Minimal](https://rockylinux.org/download).
   - Descarga la imagen ISO de [Debian 13 Netinst](https://www.debian.org/distrib/netinst).
2. **Configuración de Red en VirtualBox:**
   - Ve a `Archivo > Herramientas > Administrador de red`.
   - Crea una nueva **Red NAT** (por ejemplo, `NatNetwork`) con el segmento `10.0.2.0/24`. Asegúrate de que el soporte DHCP esté habilitado.
3. **Creación de las Máquinas Virtuales:**
   - Crea una nueva VM para cada sistema con los siguientes parámetros:
     - **RAM:** 2048 MB (2 GB).
     - **CPU:** 2 Procesadores.
     - **Disco Duro:** VDI de 20 GB (Reservado dinámicamente).
     - **Red:** Cambia el Adaptador 1 a "Red NAT" y selecciona la red creada en el paso anterior.
4. **Instalación de los Sistemas Operativos:**
   - Monta la ISO correspondiente en cada máquina virtual.
   - Realiza una instalación mínima (Server) **sin entorno gráfico**.
   - En el proceso de instalación, asegúrate de habilitar la tarjeta de red e instalar el servidor SSH (OpenSSH) para acceso remoto.
