# 💽 Módulo 4: Gestión de Dispositivos y Sistemas de Ficheros

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Añadir un nuevo disco, particionarlo, formatearlo y montarlo de forma persistente.

**Paso a paso:**
1. **Añadir hardware:** Apaga tu máquina virtual (ej: `sudo poweroff`), ve a la configuración de VirtualBox > Almacenamiento, y añade un nuevo Disco Duro Virtual de 5GB. Enciende la máquina.
2. **Identificación del nuevo disco:**
   - Ejecuta `lsblk` para identificar el nuevo bloque de dispositivo (probablemente `/dev/sdb`).
3. **Particionamiento (`fdisk`):**
   - Ejecuta `sudo fdisk /dev/sdb`.
   - Pulsa `n` para nueva partición, `p` para primaria, intro en las opciones por defecto para usar todo el espacio, y `w` para guardar los cambios.
4. **Formateo del sistema de archivos:**
   - En **Ubuntu/Debian**, dale formato EXT4: `sudo mkfs.ext4 /dev/sdb1`.
   - En **Rocky**, dale formato XFS: `sudo mkfs.xfs /dev/sdb1`.
5. **Montaje persistente:**
   - Crea un punto de montaje: `sudo mkdir -p /mnt/datos`.
   - Averigua el UUID de tu nueva partición: `sudo blkid /dev/sdb1`.
   - Edita el archivo `fstab`: `sudo nano /etc/fstab`. Añade la línea: `UUID=el_uuid_copiado /mnt/datos ext4 defaults 0 2` (cambia `ext4` por `xfs` en Rocky).
   - Comprueba que monta bien: `sudo mount -a`. Verifica con `df -h`.
