# 📂 Módulo 3: Comandos de Administración de Archivos

> ⚠️ **IMPORTANTE:** Estos pasos deben adaptarse a tu escenario de trabajo particular. Ten en cuenta que puede haber modificaciones en los comandos, rutas o nombres de interfaces de red dependiendo de las versiones exactas y las configuraciones concretas de tu sistema.

**Objetivo:** Navegar por el sistema de archivos y gestionar ficheros y directorios.

**Paso a paso:**
1. **Creación de directorios anidados:**
   - Ejecuta `mkdir -p ~/practicas/linux/modulo3`.
2. **Navegación y creación de ficheros:**
   - Muévete al directorio final: `cd ~/practicas/linux/modulo3`.
   - Crea tres archivos vacíos: `touch fichero1.txt fichero2.txt fichero3.txt`.
3. **Escritura y lectura rápida:**
   - Escribe en un archivo usando redirección: `echo "Hola Linux" > fichero1.txt`.
   - Lee el contenido: `cat fichero1.txt`.
4. **Copia, Movimiento y Borrado:**
   - Copia `fichero1.txt` un nivel arriba: `cp fichero1.txt ../copia.txt`.
   - Renombra `fichero2.txt` a `config.conf`: `mv fichero2.txt config.conf`.
   - Borra `fichero3.txt`: `rm fichero3.txt`.
5. **Comprobación:**
   - Vuelve a tu directorio personal (`cd ~`) y ejecuta `tree practicas/` para ver la estructura que has creado.
