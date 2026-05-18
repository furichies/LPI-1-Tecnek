# 📜 Módulo 5: Entornos Shell y Scripting

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Crear un script en Bash para automatizar copias de seguridad usando variables y empaquetado.

**Paso a paso:**
1. **Preparación del directorio de destino:**
   - Asegúrate de que el directorio de destino de la copia existe creando la carpeta `datos`. 
   - Ejecuta: `sudo mkdir -p /mnt/datos`
2. **Creación del archivo del script:**
   - Sitúate en tu directorio home: `cd ~`.
   - Crea el archivo: `nano backup.sh`.
3. **Desarrollo del Script:**
   - Escribe el siguiente código (asegurándote de usar el shebang correcto):
     ```bash
     #!/bin/bash
     FECHA=$(date +"%Y%m%d_%H%M")
     ORIGEN="/etc"
     DESTINO="/mnt/datos/backup_etc_${FECHA}.tar.gz"
     
     echo "Iniciando copia de seguridad de $ORIGEN..."
     tar -czf $DESTINO $ORIGEN 2>/dev/null
     echo "Copia finalizada y guardada en $DESTINO"
     ```
4. **Permisos y Ejecución:**
   - Dale permisos de ejecución al script: `chmod +x backup.sh`.
   - Ejecútalo con privilegios de administrador para poder leer todo `/etc` y poder escribir en el destino: `sudo ./backup.sh`.
5. **Comprobación:**
   - Ejecuta `ls -lh /mnt/datos/` para confirmar que tu `.tar.gz` se ha generado y tiene tamaño.
