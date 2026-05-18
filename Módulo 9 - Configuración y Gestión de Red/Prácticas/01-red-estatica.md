# 🌐 Módulo 9: Configuración y Gestión de Red

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Cambiar la configuración de red de dinámica (DHCP) a estática utilizando la herramienta nativa de cada sistema.

**Paso a paso:**
1. **Identificación de la interfaz y la red actual:**
   - Ejecuta `ip a` para ver el nombre de tu interfaz (ej. `enp0s3`, `eth0`) y tu IP actual dada por la Red NAT.
   - Comprueba tus servidores DNS: `cat /etc/resolv.conf`.
2. **Configuración en Ubuntu Server 26.04 (Netplan):**
   - Ve a `cd /etc/netplan/` y edita el fichero `.yaml` existente con `sudo nano`.
   - Modifica `dhcp4: true` a `dhcp4: false`, y añade explícitamente `addresses: [10.0.2.50/24]`, `routes` y `nameservers`.
   - Aplica los cambios: `sudo netplan apply`.
3. **Configuración en Rocky Linux 10 (NetworkManager):**
   - Utiliza `nmcli`: `sudo nmcli connection modify enp0s3 ipv4.addresses 10.0.2.60/24 ipv4.gateway 10.0.2.1 ipv4.dns 8.8.8.8 ipv4.method manual`.
   - Reinicia la interfaz: `sudo nmcli connection up enp0s3`.
4. **Configuración en Debian 13 (Interfaces):**
   - Edita el archivo: `sudo nano /etc/network/interfaces`.
   - Cambia `iface enp0s3 inet dhcp` por:
     ```text
     iface enp0s3 inet static
     address 10.0.2.70
     netmask 255.255.255.0
     gateway 10.0.2.1
     ```
   - Reinicia el servicio: `sudo systemctl restart networking`.
5. **Comprobación:**
   - Haz un `ping 8.8.8.8` y un `ping google.com` para comprobar conectividad y resolución DNS.
