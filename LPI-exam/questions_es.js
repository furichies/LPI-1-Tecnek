const questionsDatabaseES = [
  {
    "id": 1,
    "category": "LPIC-1",
    "question": "Considere el siguiente resultado del comando ls –i: ¿Cómo se crearía un nuevo archivo llamado c.txt con el mismo número de inodo que a.txt (Inodo 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "En –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 2,
    "category": "LPIC-1",
    "question": "Considere el siguiente directorio: drwxrwxr-x 2 root sales 4096 1 de enero 15:21 sales ¿Qué comando garantiza que los nuevos archivos creados dentro del directorio sales sean propiedad del grupo sales? (Elija dos.)",
    "options": [
      "chmod g+s sales",
      "setpol –R nuevo grupo=ventas ventas",
      "chgrp –p ventas ventas",
      "chown --persistent *.sales ventas",
      "ventas de chmod 2775"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 3,
    "category": "LPIC-1",
    "question": "¿Qué comando chown cambia la propiedad a dave y el grupo a staff en un archivo llamado data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g datos del personal.txt",
      "chown --usuario dave --datos del personal del grupo.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 4,
    "category": "LPIC-1",
    "question": "Al considerar el uso de enlaces físicos, ¿cuáles son las razones válidas para no utilizar enlaces físicos?",
    "options": [
      "Los enlaces físicos no están disponibles en todos los sistemas Linux porque los sistemas de archivos tradicionales, como ext4, no los admiten.",
      "Cada enlace físico tiene propiedad, permisos y ACL individuales que pueden provocar la divulgación no intencionada del contenido del archivo.",
      "Los enlaces duros son específicos de un sistema de archivos y no pueden apuntar a archivos en otro sistema de archivos.",
      "Si otros usuarios además del root deberían poder crear enlaces físicos, se debe instalar y configurar suln.",
      "Cuando se modifica un archivo vinculado, se crea una copia del archivo y consume espacio adicional."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 5,
    "category": "LPIC-1",
    "question": "De conformidad con la FHS, ¿en cuál de los directorios se encuentran las páginas de manual?",
    "options": [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 6,
    "category": "LPIC-1",
    "question": "¿Cuál es el número de identificación del proceso de inicio en un sistema basado en System V?",
    "options": [
      "-1",
      "0",
      "1",
      "Es diferente con cada reinicio.",
      "Está configurado en el nivel de ejecución actual."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 7,
    "category": "LPIC-1",
    "question": "¿Qué demonio maneja los eventos de administración de energía en un sistema Linux?",
    "options": [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 8,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta sobre la secuencia de inicio de una PC mediante BIOS? (Elija dos.)",
    "options": [
      "Algunas partes del proceso de arranque se pueden configurar desde el BIOS",
      "Linux no requiere la ayuda del BIOS para iniciar una computadora",
      "El proceso de arranque del BIOS se inicia solo si el almacenamiento secundario, como el disco duro, funciona",
      "El BIOS inicia el proceso de arranque después de encender la computadora.",
      "El BIOS se inicia cargando controladores de hardware desde el almacenamiento secundario, como el disco duro."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 9,
    "category": "LPIC-1",
    "question": "Un módulo del kernel defectuoso está causando problemas con una tarjeta de interfaz de red. ¿Cuál de las siguientes acciones garantiza que este módulo no se cargue automáticamente cuando se inicia el sistema?",
    "options": [
      "Usando lsmod --remove --autoclean sin especificar el nombre de un módulo específico",
      "Usando modinfo –k seguido del nombre del módulo infractor",
      "Usando modprobe –r seguido del nombre del módulo infractor",
      "Agregar una línea de lista negra que incluya el nombre del módulo infractor al archivo /etc/modprobe.d/blacklist.conf",
      "Eliminar el directorio del módulo del kernel del sistema de archivos y recompilar el kernel, incluidos sus módulos"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 10,
    "category": "LPIC-1",
    "question": "¿Cuándo se restablece el contenido del búfer circular del núcleo? (Elija dos.)",
    "options": [
      "Cuando el búfer circular se restablece explícitamente usando el comando dmesg --clear",
      "Cuando el búfer circular se lee usando dmesg sin ningún parámetro adicional",
      "Cuando ha transcurrido un tiempo configurable, 15 minutos por defecto",
      "Cuando el kernel carga un módulo del kernel previamente descargado",
      "Cuando el sistema se apaga o reinicia"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 11,
    "category": "LPIC-1",
    "question": "¿Cuál es el primer programa que inicia el kernel de Linux en el momento del arranque cuando se utiliza System V init?",
    "options": [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 12,
    "category": "LPIC-1",
    "question": "Un paquete Debian crea varios archivos durante su instalación. ¿Cuál de los siguientes comandos busca paquetes que posean el archivo /etc/debian_version?",
    "options": [
      "apt-get search /etc/debian_version",
      "apt –r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg –S /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 13,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes propiedades de un sistema Linux se debe cambiar cuando se clona una máquina virtual? (Elija dos.)",
    "options": [
      "El esquema de partición",
      "El sistema de archivos",
      "La identificación de la máquina D-Bus",
      "Los permisos de /root/",
      "Las claves del host SSH"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 14,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala GRUB 2 en el registro de arranque maestro del tercer disco duro?",
    "options": [
      "grub2 install /dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "grub-setup /dev/sdc",
      "grub-install /dev/sdc"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 15,
    "category": "LPIC-1",
    "question": "¿Qué hay de cierto respecto a la configuración de yum? (Elija dos.)",
    "options": [
      "Los cambios en la configuración del repositorio se activan después de ejecutar yum confupdate",
      "Los cambios en la configuración de yum se activan después de reiniciar el servicio yumd",
      "La configuración de los repositorios de paquetes se puede dividir en varios archivos.",
      "Las configuraciones del repositorio pueden incluir variables como $basearch o $releasever",
      "En caso de que /etc/yum.repos.d/ contenga archivos, se ignora /etc/yum.conf"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 16,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes subcomandos apt-get instala las versiones más recientes de todos los paquetes instalados actualmente?",
    "options": [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 17,
    "category": "LPIC-1",
    "question": "¿Qué comando desinstala un paquete pero conserva sus archivos de configuración en caso de que se reinstale el paquete?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L nombrepaquete",
      "dpkg –P nombrepaquete",
      "dpkg –v pkgname",
      "dpkg –r pkgname"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 18,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera las dependencias del archivo del paquete RPM foo.rpm?",
    "options": [
      "rpm –qpR foo.rpm",
      "rpm –dep foo",
      "rpm –ld foo.rpm",
      "rpm –R foo.rpm",
      "rpm –pD foo"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 19,
    "category": "LPIC-1",
    "question": "¿Cuál es el valor máximo de amabilidad que un usuario normal puede asignar a un proceso con el comando nice al ejecutar un nuevo proceso?",
    "options": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 20,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los archivos y directorios dentro del directorio /tmp/ y sus subdirectorios que son propiedad del usuario raíz? (Elija dos.)",
    "options": [
      "buscar /tmp –usuario raíz -imprimir",
      "buscar –ruta /tmp –uid raíz",
      "buscar /tmp –uid raíz -imprimir",
      "buscar /tmp –usuario raíz",
      "buscar –ruta /tmp –usuario raíz -imprimir"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 21,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes son operadores de redirección de flujo válidos dentro de Bash? (Elija dos.)",
    "options": [
      "<",
      null,
      null,
      ">>>",
      "2>&1"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 22,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos vi elimina dos líneas, la línea actual y la siguiente?",
    "options": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 23,
    "category": "LPIC-1",
    "question": "El comando dbmaint & se usó para ejecutar dbmaint en segundo plano. Sin embargo, dbmaint finaliza después de cerrar sesión en el sistema. ¿Qué invocación alternativa de dbmaint permite que dbmaint continúe ejecutándose incluso cuando el usuario que ejecuta el programa cierra sesión?",
    "options": [
      "job –b dmaint",
      "dbmaint &>/dev/pts/null",
      "nohup dbmaint &",
      "bg dbmaint",
      "wait dbmaint"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 24,
    "category": "LPIC-1",
    "question": "Desde un shell Bash, ¿cuál de los siguientes comandos ejecuta directamente las instrucciones del archivo /usr/local/bin/runme.sh sin iniciar un subshell? (Elija dos.)",
    "options": [
      "source /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ". /usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 25,
    "category": "LPIC-1",
    "question": "Inmediatamente después de eliminar 3 líneas de texto en vi y mover el cursor a una línea diferente, ¿qué comando de un solo carácter insertará el contenido eliminado debajo de la línea actual?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (mayúscula)",
      "U (mayúscula)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 26,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia todos los saltos de línea CR-LF en el archivo de texto userlist.txt a saltos de línea LF estándar de Linux y almacena el resultado en newlist.txt?",
    "options": [
      "tr –d '\\r' < lista de usuarios.txt > nueva lista.txt",
      "tr –c ‘\\n\\r’ ‘’ <nueva lista.txt> lista de usuarios.txt",
      "tr ‘\\r\\n’ ‘’ <listadeusuarios.txt> nuevalista.txt",
      "tr ‘\\r’ ‘\\n’ lista de usuarios.txt nueva lista.txt",
      "tr –s ‘/^M/^J/’ lista de usuarios.txt nueva lista.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 27,
    "category": "LPIC-1",
    "question": "¿Qué resultado se mostrará cuando el usuario fred ejecute el siguiente comando? eco 'fred $USUARIO'",
    "options": [
      "fred fred",
      "fred /home/fred/",
      "'fred $USUARIO'",
      "fred $usuario",
      "‘fred fred’"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 28,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la ruta al archivo ejecutable que se ejecutaría cuando se invoca el comando foo?",
    "options": [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 29,
    "category": "LPIC-1",
    "question": "Al redirigir la salida de find al comando xargs, ¿qué opción de búsqueda es útil si los nombres de archivos contienen espacios?",
    "options": [
      "–rep-space",
      "-printnul",
      "-nospace",
      "–ignore-space",
      "–print0"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 30,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para determinar cuánto tiempo ha estado funcionando el sistema? (Elija dos.)",
    "options": [
      "uptime",
      "up",
      "time --up",
      "uname –u",
      "top"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 31,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos, ubicados en el directorio de inicio de un usuario, contiene el historial de Bash?",
    "options": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 32,
    "category": "LPIC-1",
    "question": "¿Qué comodines coincidirán con los siguientes nombres de archivos? (Elija dos opciones). ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[SS][02]"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 33,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos redirige la salida de ls al error estándar?",
    "options": [
      "es >-1",
      "ls <<ERR",
      "es >&2",
      "ls >>2",
      "ls |error"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 34,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra el contenido de un archivo tar comprimido con gzip?",
    "options": [
      "gzip archive.tgz | tar xvf",
      "tar –fzt archive.tgz",
      "gzip –d archive.tgz | tar tvf",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 35,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos imprime una lista de nombres de usuario (primera columna) y su grupo principal (cuarta columna) del archivo /etc/passwd?",
    "options": [
      "fmt –f 1,4 /etc/contraseña",
      "cortar –d : -f 1,4 /etc/contraseña",
      "ordenar –t : -k 1,4 /etc/contraseña",
      "pegar –f 1,4 /etc/contraseña",
      "dividir –c 1,4 /etc/contraseña"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 36,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes expresiones regulares representa una sola letra mayúscula?",
    "options": [
      ":SUPERIOR:",
      "[ARIZONA]",
      "!a-z",
      "%DO",
      "{ARIZONA}"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 37,
    "category": "LPIC-1",
    "question": "La instalación de un paquete Debian local falló debido a dependencias no satisfechas. ¿Cuál de los siguientes comandos instala las dependencias que faltan y completa la instalación del paquete interrumpido?",
    "options": [
      "dpkg --fix --all",
      "apt-get autoinstall",
      "dpkg-reconfigure --all",
      "apt-get all",
      "apt-get install -f"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 38,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes comandos son válidos en el archivo de configuración de GRUB 2? (Elija dos.)",
    "options": [
      "menuentry",
      "uefi",
      "pxe-ifconfig",
      "insmod",
      "kpartx"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 39,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito del comando ldd?",
    "options": [
      "Enumera qué bibliotecas compartidas necesita ejecutar un binario.",
      "Instala y actualiza bibliotecas compartidas instaladas.",
      "Convierte un binario vinculado dinámicamente en un binario estático.",
      "Define qué versión de una biblioteca se debe utilizar de forma predeterminada.",
      "Ejecuta un binario con una ruta de búsqueda de biblioteca alternativa."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 40,
    "category": "LPIC-1",
    "question": "¿Para qué se puede utilizar el Administrador de volúmenes lógicos (LVM)? (Elija tres.)",
    "options": [
      "Para crear instantáneas.",
      "Para cambiar dinámicamente el tamaño de volúmenes lógicos.",
      "Para crear o eliminar dinámicamente volúmenes lógicos.",
      "Para crear matrices RAID 9.",
      "Para cifrar volúmenes lógicos."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 41,
    "category": "LPIC-1",
    "question": "¿Cuáles son las principales diferencias entre las tablas de particiones GPT y MBR con respecto al número máximo y tamaño de particiones? (Elija dos.)",
    "options": [
      "MBR puede manejar tamaños de partición de hasta 4 TB, mientras que GPT admite tamaños de partición de hasta 128 ZB.",
      "De forma predeterminada, GPT puede administrar hasta 128 particiones, mientras que MBR solo admite cuatro particiones primarias.",
      "De forma predeterminada, GPT puede administrar hasta 64 particiones, mientras que MBR solo admite 16 particiones primarias.",
      "MBR puede manejar tamaños de partición de hasta 2,2 TB, mientras que GPT admite tamaños de hasta 9,4 ZB.",
      "Tanto GPT como MBR admiten hasta cuatro particiones primarias, cada una con hasta 4096 TB."
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 42,
    "category": "LPIC-1",
    "question": "Un software de copia de seguridad utiliza en gran medida enlaces físicos entre archivos que no se han modificado entre dos ejecuciones de copia de seguridad. ¿Qué beneficios se obtienen gracias a estos vínculos físicos? (Elija dos.)",
    "options": [
      "Las copias de seguridad antiguas se pueden mover a medios de copia de seguridad lentos, como cintas, y al mismo tiempo siguen sirviendo como destino de enlace físico en las nuevas copias de seguridad.",
      "La copia de seguridad se ejecuta más rápido porque los enlaces físicos son operaciones asincrónicas, lo que pospone la operación de copia para un momento posterior.",
      "Se garantiza que la copia de seguridad no tendrá costo porque un archivo vinculado no se puede modificar después de su creación.",
      "La copia de seguridad consume menos espacio porque los enlaces físicos apuntan a los mismos datos en el disco en lugar de almacenar copias redundantes.",
      "La copia de seguridad se ejecuta más rápido porque, en lugar de copiar los datos de cada archivo, los enlaces físicos solo cambian los metadatos del sistema de archivos."
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 43,
    "category": "LPIC-1",
    "question": "¿Cuántos campos hay en una línea sintácticamente correcta de /etc/fstab?",
    "options": [
      "3",
      "4",
      "5",
      "6",
      "7"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 44,
    "category": "LPIC-1",
    "question": "Ejecutar chmod 640 filea.txt como usuario normal no actualiza el permiso de filea.txt. ¿Cuál podría ser la razón por la cual chmod no puede modificar los permisos? (Elija dos.)",
    "options": [
      "filea.txt es propiedad de otro usuario y un usuario normal no puede cambiar los permisos del archivo de otro usuario.",
      "filea.txt es un enlace simbólico cuyos permisos son un valor fijo que no se puede cobrar.",
      "filea.txt tiene el bit adhesivo configurado y un usuario normal no puede eliminar este permiso.",
      "filea.txt es un enlace físico cuyos permisos se heredan del destino y no se pueden configurar directamente.",
      "filea.txt tiene el bit SetUID establecido, lo que impone la restricción de que solo el usuario root puede realizar cambios en el archivo."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 45,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra cómo el shell maneja un comando específico?",
    "options": [
      "where",
      "type",
      "stat",
      "case",
      "fileinfo"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 46,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra el comando de la página del manual de la sección 1?",
    "options": [
      "man command(1)",
      "man command@1",
      "hombre 1 comando",
      "man 1.command",
      "hombre -s 1 comando"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 47,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos crea o, en caso de que ya exista, sobrescribe un archivo llamado datos con la salida ls?",
    "options": [
      "ls 3> datos",
      "ls >& datos",
      "ls > datos",
      "ls >> data",
      "ls >>> data"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 48,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se utiliza para cambiar opciones y parámetros posicionales dentro de un shell Bash en ejecución?",
    "options": [
      "history",
      "setsh",
      "bashconf",
      "set",
      "envsetup"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 49,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos genera una prueba en el shell?",
    "options": [
      "gato <!EOT prueba EOT",
      "cat <|EOT test EOT",
      "gato !<EOT prueba EOT",
      "gato &<prueba EOT EOT",
      "gato <<prueba EOT EOT"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 50,
    "category": "LPIC-1",
    "question": "¿Cuál es el nivel agradable predeterminado cuando se inicia un proceso usando el comando agradable?",
    "options": [
      "-10",
      "0",
      "10",
      "15",
      "20"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 51,
    "category": "LPIC-1",
    "question": "Un usuario creó accidentalmente el subdirectorio \\dir en su directorio de inicio. ¿Cuál de los siguientes comandos controlará ese directorio?",
    "options": [
      "rmdir ~/\\\\dir",
      "rmdir “~/\\dir”",
      "rmdir ~/’dir’",
      "rmdir ~/\\dir",
      "rmdir ‘~/\\dir’"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 52,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos puede realizar búsquedas en el contenido de archivos utilizando expresiones regulares?",
    "options": [
      "find",
      "locate",
      "grep",
      "reggrep",
      "pgrep"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 53,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos determina el formato de un archivo mediante el uso de un archivo de base de datos de definición que contiene información sobre todos los tipos de archivos comunes?",
    "options": [
      "type",
      "file",
      "magic",
      "pmagic",
      "hash"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 54,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos genera una lista de nombres de usuarios de /etc/passwd junto con su shell de inicio de sesión?",
    "options": [
      "columna -s : 1,7 /etc/contraseña",
      "picar -c 1,7 /etc/contraseña",
      "colrm 1,7 /etc/contraseña",
      "ordenar -t: -k1,7 /etc/contraseña",
      "cortar -d: -f1,7 /etc/contraseña"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 55,
    "category": "LPIC-1",
    "question": "Si el archivo tar comprimido con gzip texts.tgz contiene los archivos a.txt y b.txt, ¿qué archivos estarán presentes en el directorio actual después de ejecutar gunzip texts.tgz?",
    "options": [
      "Sólo a.txt, b.txt y texts.tgz",
      "Sólo textos.tar y textos.tgz",
      "Sólo a.txt.gz y b.txt.gz",
      "Sólo a.txt y b.txt",
      "Sólo textos.tar"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 56,
    "category": "LPIC-1",
    "question": "Al arrancar desde el disco duro, una computadora carga exitosamente el kernel de Linux e initramfs pero se bloquea durante las tareas de inicio posteriores. El sistema se inicia utilizando un CD de rescate basado en Linux para investigar el problema. ¿Cuál de los siguientes métodos ayuda a identificar la causa raíz del problema?",
    "options": [
      "Usando el comando dmesg desde el shell del CD de rescate para ver los registros de arranque del sistema original.",
      "Investigar el archivo /proc/kmsg en el disco duro de la computadora en busca de posibles errores.",
      "Investigar el archivo /var/log en el disco duro de la computadora en busca de posibles errores.",
      "Usar chroot para cambiar al sistema de archivos en el disco duro y usar dmesg para ver los registros.",
      "Reiniciando nuevamente desde el disco duro ya que el sistema arrancó exitosamente desde el CD de rescate."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 57,
    "category": "LPIC-1",
    "question": "¿Qué valor de umask garantiza que los nuevos directorios puedan ser leídos, escritos y listados por su usuario propietario, leídos y listados por su grupo propietario y que no sean accesibles en absoluto para todos los demás?",
    "options": [
      "0750",
      "0027",
      "0036",
      "7640",
      "0029"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 58,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia la cantidad de días antes de que el sistema de archivos ext3 en /dev/sda1 tenga que ejecutar una verificación completa del sistema de archivos durante el arranque?",
    "options": [
      "tune2fs –d 200 /dev/sda1",
      "tune2fs –i 200 /dev/sda1",
      "tune2fs –c 200 /dev/sda1",
      "tune2fs –n 200 /dev/sda1",
      "tune2fs --días 200 /dev/sda1"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 59,
    "category": "LPIC-1",
    "question": "¿Cuál es el porcentaje predeterminado de espacio reservado para el usuario root en los nuevos sistemas de archivos ext4?",
    "options": [
      "10%",
      "3%",
      "15%",
      "0%",
      "5%"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 60,
    "category": "LPIC-1",
    "question": "¿Qué hace el comando mount --bind?",
    "options": [
      "Hace que el contenido de un directorio esté disponible en otro directorio.",
      "Monta todos los sistemas de archivos disponibles en el directorio actual.",
      "Monta todos los sistemas de archivos montables por el usuario en el directorio de inicio del usuario.",
      "Monta todos los sistemas de archivos enumerados en /etc/fstab que tienen la opción userbind configurada",
      "Monta permanentemente un archivo normal en un directorio."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 61,
    "category": "LPIC-1",
    "question": "Considere el siguiente directorio: drwxrwxr-x 2 root sales 4096 1 de enero 15:21 sales ¿Qué comando garantiza que los nuevos archivos creados dentro del directorio sales sean propiedad del grupo sales? (Elija dos.)",
    "options": [
      "chmod g+s sales",
      "setpol –R nuevo grupo=ventas ventas",
      "chgrp –p ventas ventas",
      "chown --persistent *.sales ventas",
      "ventas de chmod 2775"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 62,
    "category": "LPIC-1",
    "question": "Para mostrar todos los sistemas de archivos actualmente montados, ¿cuál de los siguientes comandos podría usarse? (Elija dos.)",
    "options": [
      "cat /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/filesystems"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 63,
    "category": "LPIC-1",
    "question": "¿Qué comando chown cambia la propiedad a dave y el grupo a staff en un archivo llamado data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g datos del personal.txt",
      "chown --usuario dave --datos del personal del grupo.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 64,
    "category": "LPIC-1",
    "question": "Al considerar el uso de enlaces físicos, ¿cuáles son las razones válidas para no utilizar enlaces físicos?",
    "options": [
      "Los enlaces físicos no están disponibles en todos los sistemas Linux porque los sistemas de archivos tradicionales, como ext4, no los admiten.",
      "Cada enlace físico tiene propiedad, permisos y ACL individuales que pueden provocar la divulgación no intencionada del contenido del archivo.",
      "Los enlaces duros son específicos de un sistema de archivos y no pueden apuntar a archivos en otro sistema de archivos.",
      "Si otros usuarios además del root deberían poder crear enlaces físicos, se debe instalar y configurar suln.",
      "Cuando se modifica un archivo vinculado, se crea una copia del archivo y consume espacio adicional."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 65,
    "category": "LPIC-1",
    "question": "¿Qué demonio maneja los eventos de administración de energía en un sistema Linux?",
    "options": [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 66,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta sobre la secuencia de inicio de una PC mediante BIOS? (Elija dos.)",
    "options": [
      "Algunas partes del proceso de arranque se pueden configurar desde el BIOS",
      "Linux no requiere la ayuda del BIOS para iniciar una computadora",
      "El proceso de arranque del BIOS se inicia solo si el almacenamiento secundario, como el disco duro, funciona",
      "El BIOS inicia el proceso de arranque después de encender la computadora.",
      "El BIOS se inicia cargando controladores de hardware desde el almacenamiento secundario, como el disco duro."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 67,
    "category": "LPIC-1",
    "question": "¿Qué es cierto con respecto al firmware UEFI? (Elija dos.)",
    "options": [
      "Puede leer e interpretar tablas de particiones.",
      "Puede usar y leer ciertos sistemas de archivos.",
      "Almacena toda su configuración en la partición /boot/",
      "Se almacena en un área especial dentro de los metadatos GPT.",
      "Se carga desde una posición fija del disco de arranque."
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 68,
    "category": "LPIC-1",
    "question": "¿Cuándo se restablece el contenido del búfer circular del núcleo? (Elija dos.)",
    "options": [
      "Cuando el búfer circular se restablece explícitamente usando el comando dmesg --clear",
      "Cuando el búfer circular se lee usando dmesg sin ningún parámetro adicional",
      "Cuando ha transcurrido un tiempo configurable, 15 minutos por defecto",
      "Cuando el kernel carga un módulo del kernel previamente descargado",
      "Cuando el sistema se apaga o reinicia"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 69,
    "category": "LPIC-1",
    "question": "Un paquete Debian crea varios archivos durante su instalación. ¿Cuál de los siguientes comandos busca paquetes que posean el archivo /etc/debian_version?",
    "options": [
      "apt-get search /etc/debian_version",
      "apt –r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg –S /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 70,
    "category": "LPIC-1",
    "question": "¿Qué contiene la partición del sistema EFI?",
    "options": [
      "El sistema de archivos raíz de Linux",
      "El cargador de arranque de primera etapa.",
      "El archivo de espacio de intercambio predeterminado",
      "Los binarios de shell predeterminados de Linux",
      "Los directorios de inicio de los usuarios."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 71,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos existe en una instalación estándar de GRUB 2? (Elija dos.)",
    "options": [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/lvm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 72,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala GRUB 2 en el registro de arranque maestro del tercer disco duro?",
    "options": [
      "grub2 install /dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "grub-setup /dev/sdc",
      "grub-install /dev/sdc"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 73,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes tipos de partición se utiliza para los espacios de intercambio de Linux al particionar unidades de disco duro?",
    "options": [
      "7",
      "82",
      "83",
      "8e",
      "fd"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 74,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes subcomandos apt-get instala las versiones más recientes de todos los paquetes instalados actualmente?",
    "options": [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 75,
    "category": "LPIC-1",
    "question": "¿Qué comando desinstala un paquete pero conserva sus archivos de configuración en caso de que se reinstale el paquete?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L nombrepaquete",
      "dpkg –P nombrepaquete",
      "dpkg –v pkgname",
      "dpkg –r pkgname"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 76,
    "category": "LPIC-1",
    "question": "¿Cuál es el valor máximo de amabilidad que un usuario normal puede asignar a un proceso con el comando nice al ejecutar un nuevo proceso?",
    "options": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 77,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los archivos y directorios dentro del directorio /tmp/ y sus subdirectorios que son propiedad del usuario raíz? (Elija dos.)",
    "options": [
      "buscar /tmp –usuario raíz -imprimir",
      "buscar –ruta /tmp –uid raíz",
      "buscar /tmp –uid raíz -imprimir",
      "buscar /tmp –usuario raíz",
      "buscar –ruta /tmp –usuario raíz -imprimir"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 78,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes son operadores de redirección de flujo válidos dentro de Bash? (Elija dos.)",
    "options": [
      "<",
      null,
      null,
      ">>>",
      "2>&1"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 79,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos vi elimina dos líneas, la línea actual y la siguiente?",
    "options": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 80,
    "category": "LPIC-1",
    "question": "El comando dbmaint & se usó para ejecutar dbmaint en segundo plano. Sin embargo, dbmaint finaliza después de cerrar sesión en el sistema. ¿Qué invocación alternativa de dbmaint permite que dbmaint continúe ejecutándose incluso cuando el usuario que ejecuta el programa cierra sesión?",
    "options": [
      "job –b dmaint",
      "dbmaint &>/dev/pts/null",
      "nohup dbmaint &",
      "bg dbmaint",
      "wait dbmaint"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 81,
    "category": "LPIC-1",
    "question": "Desde un shell Bash, ¿cuál de los siguientes comandos ejecuta directamente las instrucciones del archivo /usr/local/bin/runme.sh sin iniciar un subshell? (Elija dos.)",
    "options": [
      "source /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ". /usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 82,
    "category": "LPIC-1",
    "question": "Inmediatamente después de eliminar 3 líneas de texto en vi y mover el cursor a una línea diferente, ¿qué comando de un solo carácter insertará el contenido eliminado debajo de la línea actual?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (mayúscula)",
      "U (mayúscula)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 83,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia todos los saltos de línea CR-LF en el archivo de texto userlist.txt a saltos de línea LF estándar de Linux y almacena el resultado en newlist.txt?",
    "options": [
      "tr –d '\\r' < lista de usuarios.txt > nueva lista.txt",
      "tr –c ‘\\n\\r’ ‘’ <nueva lista.txt> lista de usuarios.txt",
      "tr ‘\\r\\n’ ‘’ <listadeusuarios.txt> nuevalista.txt",
      "tr ‘\\r’ ‘\\n’ lista de usuarios.txt nueva lista.txt",
      "tr –s ‘/^M/^J/’ lista de usuarios.txt nueva lista.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 84,
    "category": "LPIC-1",
    "question": "Dado el siguiente flujo de entrada: txt1.txt atxt.txt txtB.txt ¿Cuál de las siguientes expresiones regulares convierte este flujo de entrada en el siguiente flujo de salida? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
    "options": [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 85,
    "category": "LPIC-1",
    "question": "¿Qué comando se debe ingresar antes de salir de vi para guardar el archivo actual como filea.txt?",
    "options": [
      "%s filea.txt",
      "%w filea.txt",
      ":save filea.txt",
      ":w filea.txt",
      ":s filea.txt"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 86,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la ruta al archivo ejecutable que se ejecutaría cuando se invoca el comando foo?",
    "options": [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 87,
    "category": "LPIC-1",
    "question": "Al redirigir la salida de find al comando xargs, ¿qué opción de búsqueda es útil si los nombres de archivos contienen espacios?",
    "options": [
      "–rep-space",
      "-printnul",
      "-nospace",
      "–ignore-space",
      "–print0"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 88,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para determinar cuánto tiempo ha estado funcionando el sistema? (Elija dos.)",
    "options": [
      "uptime",
      "up",
      "time --up",
      "uname –u",
      "top"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 89,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos, ubicados en el directorio de inicio de un usuario, contiene el historial de Bash?",
    "options": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 90,
    "category": "LPIC-1",
    "question": "¿Qué comodines coincidirán con los siguientes nombres de archivos? (Elija dos opciones). ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[SS][02]"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 91,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra el contenido de un archivo tar comprimido con gzip?",
    "options": [
      "gzip archive.tgz | tar xvf",
      "tar –fzt archive.tgz",
      "gzip –d archive.tgz | tar tvf",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 92,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos imprime una lista de nombres de usuario (primera columna) y su grupo principal (cuarta columna) del archivo /etc/passwd?",
    "options": [
      "fmt –f 1,4 /etc/contraseña",
      "cortar –d : -f 1,4 /etc/contraseña",
      "ordenar –t : -k 1,4 /etc/contraseña",
      "pegar –f 1,4 /etc/contraseña",
      "dividir –c 1,4 /etc/contraseña"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 93,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala los archivos de arranque de GRUB en los sistemas de archivos actualmente activos y el cargador de arranque en la primera partición del primer disco?",
    "options": [
      "grub-install /dev/sda",
      "grub-install /dev/sda1",
      "grub-install current /dev/sda0",
      "grub-install /dev/sda0",
      "grub-install current /dev/sda1"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 94,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes archivos se encuentran en el sistema de archivos /boot/? (Elija dos.)",
    "options": [
      "Imágenes del kernel de Linux",
      "Binarios de shell bash",
      "unidades de destino y servicio systemd",
      "Imágenes iniciales del disco ram",
      "fsck binaries"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 95,
    "category": "LPIC-1",
    "question": "Al eliminar un paquete en un sistema que utiliza la administración de paquetes dpkg, ¿qué opción de dpkg garantiza que también se eliminen los archivos de configuración?",
    "options": [
      "--clean",
      "--purge",
      "--vacuum",
      "--remove",
      "--declare"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 96,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es correcta al comparar contenedores de Linux con máquinas virtuales tradicionales (por ejemplo, LXC frente a KVM)? (Elija tres.)",
    "options": [
      "Los contenedores son un método de virtualización ligero en el que el kernel controla el aislamiento de procesos y la gestión de recursos.",
      "Las máquinas totalmente virtualizadas pueden ejecutar cualquier sistema operativo para una arquitectura de hardware específica dentro de la máquina virtual.",
      "Los contenedores están completamente desacoplados del hardware físico del sistema host y solo pueden utilizar dispositivos de hardware virtuales emulados.",
      "El entorno invitado para máquinas totalmente virtualizadas lo crea un hipervisor que proporciona dispositivos de hardware virtuales y emulados.",
      "Los contenedores en el mismo host pueden usar diferentes sistemas operativos, ya que el hipervisor del contenedor crea una ejecución del kernel separada."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 97,
    "category": "LPIC-1",
    "question": "La instalación de un paquete Debian local falló debido a dependencias no satisfechas. ¿Cuál de los siguientes comandos instala las dependencias que faltan y completa la instalación del paquete interrumpido?",
    "options": [
      "dpkg --fix --all",
      "apt-get autoinstall",
      "dpkg-reconfigure --all",
      "apt-get all",
      "apt-get install -f"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 98,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los paquetes actualmente instalados cuando se utiliza la administración de paquetes RPM?",
    "options": [
      "yum --query --all",
      "yum --list --installed",
      "rpm --query --list",
      "rpm --list --installed",
      "rpm --query --all"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 99,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito del comando ldd?",
    "options": [
      "Enumera qué bibliotecas compartidas necesita ejecutar un binario.",
      "Instala y actualiza bibliotecas compartidas instaladas.",
      "Convierte un binario vinculado dinámicamente en un binario estático.",
      "Define qué versión de una biblioteca se debe utilizar de forma predeterminada.",
      "Ejecuta un binario con una ruta de búsqueda de biblioteca alternativa."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 100,
    "category": "LPIC-1",
    "question": "¿Cuáles son las principales diferencias entre las tablas de particiones GPT y MBR con respecto al número máximo y tamaño de particiones? (Elija dos.)",
    "options": [
      "MBR puede manejar tamaños de partición de hasta 4 TB, mientras que GPT admite tamaños de partición de hasta 128 ZB.",
      "De forma predeterminada, GPT puede administrar hasta 128 particiones, mientras que MBR solo admite cuatro particiones primarias.",
      "De forma predeterminada, GPT puede administrar hasta 64 particiones, mientras que MBR solo admite 16 particiones primarias.",
      "MBR puede manejar tamaños de partición de hasta 2,2 TB, mientras que GPT admite tamaños de hasta 9,4 ZB.",
      "Tanto GPT como MBR admiten hasta cuatro particiones primarias, cada una con hasta 4096 TB."
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 101,
    "category": "LPIC-1",
    "question": "Ejecutar chmod 640 filea.txt como usuario normal no actualiza el permiso de filea.txt. ¿Cuál podría ser la razón por la cual chmod no puede modificar los permisos? (Elija dos.)",
    "options": [
      "filea.txt es propiedad de otro usuario y un usuario normal no puede cambiar los permisos del archivo de otro usuario.",
      "filea.txt es un enlace simbólico cuyos permisos son un valor fijo que no se puede cobrar.",
      "filea.txt tiene el bit adhesivo configurado y un usuario normal no puede eliminar este permiso.",
      "filea.txt es un enlace físico cuyos permisos se heredan del destino y no se pueden configurar directamente.",
      "filea.txt tiene el bit SetUID establecido, lo que impone la restricción de que solo el usuario root puede realizar cambios en el archivo."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 102,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes sistemas de archivos de Linux preasigna una cantidad fija de inodos al crear un nuevo sistema de archivos en lugar de generarlos según sea necesario? (Elija dos.)",
    "options": [
      "JFS",
      "ext3",
      "XFS",
      "ext2",
      "procfs"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 103,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos establece el permiso SetUID en el ejecutable /bin/foo?",
    "options": [
      "chmod 4755 /bin/foo",
      "chmod 1755 /bin/foo",
      "chmod u-s /bin/foo",
      "chmod 755+s /bin/foo",
      "chmod 2755 /bin/foo"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 104,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra cómo el shell maneja un comando específico?",
    "options": [
      "where",
      "type",
      "stat",
      "case",
      "fileinfo"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 105,
    "category": "LPIC-1",
    "question": "Cuando está en modo Normal en vi, ¿qué carácter se puede usar para comenzar una búsqueda inversa del texto?",
    "options": [
      "r",
      "/",
      "F",
      null,
      "s"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 106,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se utiliza para cambiar opciones y parámetros posicionales dentro de un shell Bash en ejecución?",
    "options": [
      "history",
      "setsh",
      "bashconf",
      "set",
      "envsetup"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 107,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra los ID de todos los procesos propiedad de root? (Elija dos.)",
    "options": [
      "pgrep -c root",
      "pgrep -u root",
      "pgrep -f root",
      "pgrep -U 0",
      "pgrep -c 0"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 108,
    "category": "LPIC-1",
    "question": "¿Cuál es el efecto de la opción -v para el comando grep?",
    "options": [
      "Permite que el color resalte las partes coincidentes.",
      "Muestra la información de la versión del comando.",
      "Solo genera líneas que no coinciden.",
      "Cambia el orden de salida mostrando primero la última línea coincidente.",
      "Genera todas las líneas y antepone las líneas coincidentes con a+."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 109,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes señales se envía a un proceso cuando se presiona la combinación de teclas Ctrl+Z en el teclado?",
    "options": [
      "SIGNO",
      "SEÑAL",
      "SIGTSTP",
      "SIGKILL",
      "FIRMA"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 110,
    "category": "LPIC-1",
    "question": "¿Cuál es el resultado cuando se aplica la expresión regular s/[ABC] [abc]/xx/ a la siguiente cadena? ABCabc",
    "options": [
      "ABxxbc",
      "xxCxxc",
      "ABxxxbc",
      "ABCabc",
      "Axxaxx"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 111,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos imprime el directorio de trabajo actual cuando se utiliza un shell Bash? (Elija dos.)",
    "options": [
      "eco \"${PWD}\"",
      "eco \"${WD}\"",
      "printwd",
      "pwd",
      "echo “${pwd}”"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 112,
    "category": "LPIC-1",
    "question": "¿Cuál es el nivel agradable predeterminado cuando se inicia un proceso usando el comando agradable?",
    "options": [
      "-10",
      "0",
      "10",
      "15",
      "20"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 113,
    "category": "LPIC-1",
    "question": "En el editor vi, ¿cómo se pueden emitir varias veces o aplicarse a varias filas comandos como mover el cursor o copiar líneas en el búfer?",
    "options": [
      "Usando el comando :repeat seguido del número y el comando",
      "Especificando el número justo delante de un comando como 41 o 2yj.",
      "Seleccionando todas las líneas afectadas usando las teclas de mierda y cursor antes de aplicar el comando.",
      "Emitiendo un comando como :set repetition=4 con se repite cada comando posterior 4 veces.",
      "Especificando el número después de un comando como 14 o yj2 seguido de escape."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 114,
    "category": "LPIC-1",
    "question": "En Bash, insertar 1>&2 después de un comando redirige...",
    "options": [
      "…error estándar a entrada estándar.",
      "…salida estándar al error estándar.",
      "…entrada estándar al error estándar.",
      "…error estándar a salida estándar.",
      "…salida estándar a entrada estándar."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 115,
    "category": "LPIC-1",
    "question": "Al arrancar desde el disco duro, una computadora carga exitosamente el kernel de Linux e initramfs pero se bloquea durante las tareas de inicio posteriores. El sistema se inicia utilizando un CD de rescate basado en Linux para investigar el problema. ¿Cuál de los siguientes métodos ayuda a identificar la causa raíz del problema?",
    "options": [
      "Usando el comando dmesg desde el shell del CD de rescate para ver los registros de arranque del sistema original.",
      "Investigar el archivo /proc/kmsg en el disco duro de la computadora en busca de posibles errores.",
      "Investigar el archivo /var/log en el disco duro de la computadora en busca de posibles errores.",
      "Usar chroot para cambiar al sistema de archivos en el disco duro y usar dmesg para ver los registros.",
      "Reiniciando nuevamente desde el disco duro ya que el sistema arrancó exitosamente desde el CD de rescate."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 116,
    "category": "LPIC-1",
    "question": "¿Dónde se almacena el gestor de arranque en el disco duro de un sistema UEFI?",
    "options": [
      "En el registro de arranque EFI (EBR).",
      "En el registro de arranque maestro (MBR).",
      "En la partición del sistema EFI (ESP).",
      "En la partición etiquetada como boot.",
      "En la partición número 127."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 117,
    "category": "LPIC-1",
    "question": "¿Cuál es la forma correcta de configurar el destino de arranque predeterminado de systemd en multiusuario?",
    "options": [
      "systemctl isolate multi-user.target",
      "systemctl set-runlevel multi-user.target",
      "systemctl set-boot multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl boot -p multiusuario.objetivo"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 118,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos carga un módulo del kernel junto con los módulos de dependencia necesarios?",
    "options": [
      "depmod",
      "modprobe",
      "module_install",
      "insmod",
      "loadmod"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 119,
    "category": "LPIC-1",
    "question": "Dados los siguientes dos enlaces simbólicos en una configuración de inicio de System V: /etc/rc1.d/K01apache2 /etc/rc2.d/S02apache2 ¿Cuándo se ejecutan los scripts a los que hacen referencia estos enlaces? (Elija dos.)",
    "options": [
      "S02apache2 se ejecuta cuando se ingresa el nivel de ejecución 2.",
      "S02apache2 se ejecuta cuando se deja el nivel de ejecución 2.",
      "K01apache2 nunca se ejecuta porque K indica un servicio desactivado.",
      "Tanto S02apache2 como K01apache2 se ejecutan durante el apagado del sistema.",
      "K01apache2 se ejecuta cuando se ingresa el nivel de ejecución 1."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 120,
    "category": "LPIC-1",
    "question": "¿Qué tipo de sistema de archivos crea mkfs cuando se ejecuta solo con el nombre del dispositivo de bloque y sin ningún parámetro adicional?",
    "options": [
      "XFS",
      "VFAT",
      "ext2",
      "ext3",
      "ext4"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 121,
    "category": "LPIC-1",
    "question": "¿Qué valor de umask garantiza que los nuevos directorios puedan ser leídos, escritos y listados por su usuario propietario, leídos y listados por su grupo propietario y que no sean accesibles en absoluto para todos los demás?",
    "options": [
      "0750",
      "0027",
      "0036",
      "7640",
      "0029"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 122,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia la cantidad de días antes de que el sistema de archivos ext3 en /dev/sda1 tenga que ejecutar una verificación completa del sistema de archivos durante el arranque?",
    "options": [
      "tune2fs –d 200 /dev/sda1",
      "tune2fs –i 200 /dev/sda1",
      "tune2fs –c 200 /dev/sda1",
      "tune2fs –n 200 /dev/sda1",
      "tune2fs --días 200 /dev/sda1"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 123,
    "category": "LPIC-1",
    "question": "¿Cuál es el porcentaje predeterminado de espacio reservado para el usuario root en los nuevos sistemas de archivos ext4?",
    "options": [
      "10%",
      "3%",
      "15%",
      "0%",
      "5%"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 124,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera cuando un sistema de archivos, que no figura en /etc/fstab ni es conocido por el sistema, se monta manualmente?",
    "options": [
      "systemd ignora cualquier montaje manual que no se realice usando el comando systemctl mount",
      "El comando systemctl mountsync se puede utilizar para crear una unidad de montaje basada en el montaje existente.",
      "systemd genera automáticamente una unidad de montaje y monitorea el punto de montaje sin cambiarlo",
      "A menos que se cree una unidad de montaje systemd, systemd desmontará el sistema de archivos después de un corto período de tiempo.",
      "Se debe usar systemctl unmount para eliminar el montaje porque el sistema abre un descriptor de archivo en el punto de montaje."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 125,
    "category": "LPIC-1",
    "question": "¿Qué hace el comando mount --bind?",
    "options": [
      "Hace que el contenido de un directorio esté disponible en otro directorio.",
      "Monta todos los sistemas de archivos disponibles en el directorio actual.",
      "Monta todos los sistemas de archivos montables por el usuario en el directorio de inicio del usuario.",
      "Monta todos los sistemas de archivos enumerados en /etc/fstab que tienen la opción userbind configurada",
      "Monta permanentemente un archivo normal en un directorio."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 126,
    "category": "LPIC-1",
    "question": "Considere el siguiente resultado del comando ls –i: ¿Cómo se crearía un nuevo archivo llamado c.txt con el mismo número de inodo que a.txt (Inodo 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "En –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 127,
    "category": "LPIC-1",
    "question": "Considere el siguiente directorio: drwxrwxr-x 2 root sales 4096 1 de enero 15:21 sales ¿Qué comando garantiza que los nuevos archivos creados dentro del directorio sales sean propiedad del grupo sales? (Elija dos.)",
    "options": [
      "chmod g+ssales",
      "setpol –R nuevo grupo=ventas ventas",
      "chgrp –p ventas ventas",
      "chown --persistent *.sales ventas",
      "ventas de chmod 2775"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 128,
    "category": "LPIC-1",
    "question": "Para mostrar todos los sistemas de archivos actualmente montados, ¿cuál de los siguientes comandos podría usarse? (Elija dos.)",
    "options": [
      "cat /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/filesystems"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 129,
    "category": "LPIC-1",
    "question": "¿Qué comando chown cambia la propiedad a dave y el grupo a staff en un archivo llamado data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g datos del personal.txt",
      "chown --usuario dave --datos del personal del grupo.txt",
      "chown dave+staff data.txt",
      "chown dave:staff data.txt"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 130,
    "category": "LPIC-1",
    "question": "Al considerar el uso de enlaces físicos, ¿cuáles son las razones válidas para no utilizar enlaces físicos?",
    "options": [
      "Los enlaces físicos no están disponibles en todos los sistemas Linux porque los sistemas de archivos tradicionales, como ext4, no los admiten.",
      "Cada enlace físico tiene propiedad, permisos y ACL individuales que pueden provocar la divulgación no intencionada del contenido del archivo.",
      "Los enlaces duros son específicos de un sistema de archivos y no pueden apuntar a archivos en otro sistema de archivos.",
      "Si otros usuarios además del root deberían poder crear enlaces físicos, se debe instalar y configurar suln.",
      "Cuando se modifica un archivo vinculado, se crea una copia del archivo y consume espacio adicional."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 131,
    "category": "LPIC-1",
    "question": "De conformidad con la FHS, ¿en cuál de los directorios se encuentran las páginas de manual?",
    "options": [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 132,
    "category": "LPIC-1",
    "question": "¿Qué demonio maneja los eventos de administración de energía en un sistema Linux?",
    "options": [
      "acpid",
      "batteryd",
      "pwrmgntd",
      "psd",
      "inetd"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 133,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta sobre la secuencia de inicio de una PC mediante BIOS? (Elija dos.)",
    "options": [
      "Algunas partes del proceso de arranque se pueden configurar desde el BIOS",
      "Linux no requiere la ayuda del BIOS para iniciar una computadora",
      "El proceso de arranque del BIOS se inicia solo si el almacenamiento secundario, como el disco duro, funciona",
      "El BIOS inicia el proceso de arranque después de encender la computadora.",
      "El BIOS se inicia cargando controladores de hardware desde el almacenamiento secundario, como el disco duro."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 134,
    "category": "LPIC-1",
    "question": "¿Qué es cierto con respecto al firmware UEFI? (Elija dos.)",
    "options": [
      "Puede leer e interpretar tablas de particiones.",
      "Puede usar y leer ciertos sistemas de archivos.",
      "Almacena toda su configuración en la partición /boot/",
      "Se almacena en un área especial dentro de los metadatos GPT.",
      "Se carga desde una posición fija del disco de arranque."
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 135,
    "category": "LPIC-1",
    "question": "Un módulo del kernel defectuoso está causando problemas con una tarjeta de interfaz de red. ¿Cuál de las siguientes acciones garantiza que este módulo no se cargue automáticamente cuando se inicia el sistema?",
    "options": [
      "Usando lsmod --remove --autoclean sin especificar el nombre de un módulo específico",
      "Usando modinfo –k seguido del nombre del módulo infractor",
      "Usando modprobe –r seguido del nombre del módulo infractor",
      "Agregar una línea de lista negra que incluya el nombre del módulo infractor al archivo /etc/modprobe.d/blacklist.conf",
      "Eliminar el directorio del módulo del kernel del sistema de archivos y recompilar el kernel, incluidos sus módulos"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 136,
    "category": "LPIC-1",
    "question": "¿Cuándo se restablece el contenido del búfer circular del núcleo? (Elija dos.)",
    "options": [
      "Cuando el búfer circular se restablece explícitamente usando el comando dmesg --clear",
      "Cuando el búfer circular se lee usando dmesg sin ningún parámetro adicional",
      "Cuando ha transcurrido un tiempo configurable, 15 minutos por defecto",
      "Cuando el kernel carga un módulo del kernel previamente descargado",
      "Cuando el sistema se apaga o reinicia"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 137,
    "category": "LPIC-1",
    "question": "¿Cuál es el primer programa que inicia el kernel de Linux en el momento del arranque cuando se utiliza System V init?",
    "options": [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 138,
    "category": "LPIC-1",
    "question": "Un paquete Debian crea varios archivos durante su instalación. ¿Cuál de los siguientes comandos busca paquetes que posean el archivo /etc/debian_version?",
    "options": [
      "apt-get search /etc/debian_version",
      "apt –r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg –S /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 139,
    "category": "LPIC-1",
    "question": "¿Qué contiene la partición del sistema EFI?",
    "options": [
      "El sistema de archivos raíz de Linux",
      "El cargador de arranque de primera etapa.",
      "El archivo de espacio de intercambio predeterminado",
      "Los binarios de shell predeterminados de Linux",
      "Los directorios de inicio de los usuarios."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 140,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes directorios en un sistema Linux de 64 bits suele contener bibliotecas compartidas? (Elija dos.)",
    "options": [
      "~/.lib64/",
      "/usr/lib64/",
      "/var/lib64/",
      "/lib64/",
      "/opt/lib64/"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 141,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos existe en una instalación estándar de GRUB 2? (Elija dos.)",
    "options": [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/1vm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 142,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala todos los paquetes con un nombre que termina en la cadena foo?",
    "options": [
      "zypper get “*foo”",
      "zypper update “foo?”",
      "zypper force “foo*”",
      "zypper install “*foo”",
      "zypper add “.*foo”"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 143,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes propiedades de un sistema Linux se debe cambiar cuando se clona una máquina virtual? (Elija dos.)",
    "options": [
      "El esquema de partición",
      "El sistema de archivos",
      "La identificación de la máquina D-Bus",
      "Los permisos de /root/",
      "Las claves del host SSH"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 144,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala GRUB 2 en el registro de arranque maestro del tercer disco duro?",
    "options": [
      "grub2 install /dev/sdc",
      "grub-mkrescue /dev/sdc",
      "grub-mbrinstall /dev/sdc",
      "grub-setup /dev/sdc",
      "grub-install /dev/sdc"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 145,
    "category": "LPIC-1",
    "question": "¿Qué hay de cierto respecto a la configuración de yum? (Elija dos.)",
    "options": [
      "Los cambios en la configuración del repositorio se activan después de ejecutar yum confupdate",
      "Los cambios en la configuración de yum se activan después de reiniciar el servicio yumd",
      "La configuración de los repositorios de paquetes se puede dividir en varios archivos.",
      "Las configuraciones del repositorio pueden incluir variables como $basearch o $releasever",
      "En caso de que /etc/yum.repos.d/ contenga archivos, se ignora /etc/yum.conf"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 146,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes subcomandos apt-get instala las versiones más recientes de todos los paquetes instalados actualmente?",
    "options": [
      "auto-update",
      "dist-upgrade",
      "full-upgrade",
      "install",
      "update"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 147,
    "category": "LPIC-1",
    "question": "¿Qué comando desinstala un paquete pero conserva sus archivos de configuración en caso de que se reinstale el paquete?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L nombrepaquete",
      "dpkg –P nombrepaquete",
      "dpkg –v pkgname",
      "dpkg –r pkgname"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 148,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera las dependencias del archivo del paquete RPM foo.rpm?",
    "options": [
      "rpm –qpR foo.rpm",
      "rpm –dep foo",
      "rpm –ld foo.rpm",
      "rpm –R foo.rpm",
      "rpm –pD foo"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 149,
    "category": "LPIC-1",
    "question": "¿Cuál es el valor máximo de amabilidad que un usuario normal puede asignar a un proceso con el comando nice al ejecutar un nuevo proceso?",
    "options": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 150,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los archivos y directorios dentro del directorio /tmp/ y sus subdirectorios que son propiedad del usuario raíz? (Elija dos.)",
    "options": [
      "buscar /tmp –usuario raíz -imprimir",
      "buscar –ruta /tmp –uid raíz",
      "buscar /tmp –uid raíz -imprimir",
      "buscar /tmp –usuario raíz",
      "buscar –ruta /tmp –usuario raíz -imprimir"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 151,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes son operadores de redirección de flujo válidos dentro de Bash? (Elija dos.)",
    "options": [
      "<",
      null,
      null,
      ">>>",
      "2>&1"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 152,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos vi elimina dos líneas, la línea actual y la siguiente?",
    "options": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 153,
    "category": "LPIC-1",
    "question": "El comando dbmaint & se usó para ejecutar dbmaint en segundo plano. Sin embargo, dbmaint finaliza después de cerrar sesión en el sistema. ¿Qué invocación alternativa de dbmaint permite que dbmaint continúe ejecutándose incluso cuando el usuario que ejecuta el programa cierra sesión?",
    "options": [
      "job –b dmaint",
      "dbmaint &>/dev/pts/null",
      "nohup dbmaint &",
      "bg dbmaint",
      "wait dbmaint"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 154,
    "category": "LPIC-1",
    "question": "Desde un shell Bash, ¿cuál de los siguientes comandos ejecuta directamente las instrucciones del archivo /usr/local/bin/runme.sh sin iniciar un subshell? (Elija dos.)",
    "options": [
      "source /usr/local/bin/runme.sh",
      "/usr/local/bin/runme.sh",
      "/bin/bash /usr/local/bin/runme.sh",
      ". /usr/local/bin/runme.sh",
      "run /usr/local/bin/runme.sh"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 155,
    "category": "LPIC-1",
    "question": "Inmediatamente después de eliminar 3 líneas de texto en vi y mover el cursor a una línea diferente, ¿qué comando de un solo carácter insertará el contenido eliminado debajo de la línea actual?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (mayúscula)",
      "U (mayúscula)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 156,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia todos los saltos de línea CR-LF en el archivo de texto userlist.txt a saltos de línea LF estándar de Linux y almacena el resultado en newlist.txt?",
    "options": [
      "tr –d '\\r' < lista de usuarios.txt > nueva lista.txt",
      "tr –c ‘\\n\\r’ ‘’ <nueva lista.txt> lista de usuarios.txt",
      "tr ‘\\r\\n’ ‘’ <listadeusuarios.txt> nuevalista.txt",
      "tr ‘\\r’ ‘\\n’ lista de usuarios.txt nueva lista.txt",
      "tr –s ‘/^M/^J/’ lista de usuarios.txt nueva lista.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 157,
    "category": "LPIC-1",
    "question": "Dado el siguiente flujo de entrada: txt1.txt atxt.txt txtB.txt ¿Cuál de las siguientes expresiones regulares convierte este flujo de entrada en el siguiente flujo de salida? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
    "options": [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 158,
    "category": "LPIC-1",
    "question": "¿Qué comando se debe ingresar antes de salir de vi para guardar el archivo actual como filea.txt?",
    "options": [
      "%s filea.txt",
      "%w filea.txt",
      ":save filea.txt",
      ":w filea.txt",
      ":s filea.txt"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 159,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes señales se envía a un proceso cuando se presiona la combinación de teclas Ctrl+C en el teclado?",
    "options": [
      "SIGNO",
      "SEÑAL",
      "SIGSTOP",
      "SIGKILL",
      "FIRMA"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 160,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra el resultado del comando foo en la pantalla y también lo escribe en un archivo llamado /tmp/foodata?",
    "options": [
      "foo | less /tmp/foodata",
      "foo | cp /tmp/foodata",
      "foo > /tmp/foodata",
      "foo | tee /tmp/foodata",
      "foo > stdout >> /tmp/foodata"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 161,
    "category": "LPIC-1",
    "question": "¿Qué resultado se mostrará cuando el usuario fred ejecute el siguiente comando? eco 'fred $USUARIO'",
    "options": [
      "fred fred",
      "fred /home/fred/",
      "'fred $USUARIO'",
      "fred $usuario",
      "‘fred fred’"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 162,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la ruta al archivo ejecutable que se ejecutaría cuando se invoca el comando foo?",
    "options": [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 163,
    "category": "LPIC-1",
    "question": "Al redirigir la salida de find al comando xargs, ¿qué opción de búsqueda es útil si los nombres de archivos contienen espacios?",
    "options": [
      "–rep-space",
      "-printnul",
      "-nospace",
      "–ignore-space",
      "–print0"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 164,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para determinar cuánto tiempo ha estado funcionando el sistema? (Elija dos.)",
    "options": [
      "uptime",
      "up",
      "time --up",
      "uname –u",
      "top"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 165,
    "category": "LPIC-1",
    "question": "¿Qué es cierto con respecto al comando ls > archivos si los archivos no existen?",
    "options": [
      "La salida de ls se imprime en la terminal.",
      "Los archivos se crean y contienen la salida de ls.",
      "Se muestra un mensaje de error y ls no se ejecuta",
      "Los archivos de comando se ejecutan y reciben la salida de ls",
      "Cualquier salida de ls se descarta"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 166,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos, ubicados en el directorio de inicio de un usuario, contiene el historial de Bash?",
    "options": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 167,
    "category": "LPIC-1",
    "question": "¿Qué comodines coincidirán con los siguientes nombres de archivos? (Elija dos opciones). ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[SS][02]"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 168,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos redirige la salida de ls al error estándar?",
    "options": [
      "es >-1",
      "ls <<ERR",
      "es >&2",
      "ls >>2",
      "ls |error"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 169,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra el contenido de un archivo tar comprimido con gzip?",
    "options": [
      "gzip archive.tgz | tar xvf",
      "tar –fzt archive.tgz",
      "gzip –d archive.tgz | tar tvf",
      "tar cf archive.tgz",
      "tar ztf archive.tgz"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 170,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos imprime una lista de nombres de usuario (primera columna) y su grupo principal (cuarta columna) del archivo /etc/passwd?",
    "options": [
      "fmt –f 1,4 /etc/contraseña",
      "cortar –d : -f 1,4 /etc/contraseña",
      "ordenar –t : -k 1,4 /etc/contraseña",
      "pegar –f 1,4 /etc/contraseña",
      "dividir –c 1,4 /etc/contraseña"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 171,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes expresiones regulares representa una sola letra mayúscula?",
    "options": [
      ":SUPERIOR:",
      "[ARIZONA]",
      "!a-z",
      "%DO",
      "{ARIZONA}"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 172,
    "category": "LPIC-1",
    "question": "Dado un archivo de registro loga.log con marcas de tiempo del formato DD/MM/AAAA:hh:mm:ss, ¿qué comando filtra todas las entradas de registro en el período de tiempo entre las 8:00 am y las 8:59 am?",
    "options": [
      "grep –E ':08:[09]+:[09]+' loga.log",
      "grep –E ':08:[00]+' loga.log",
      "grep –E loga.log ':08:[0-9]+:[0-9]+'",
      "grep loga.log ':08:[0-9]:[0-9]'",
      "grep –E ':08:[0-9]+:[0-9]+' loga.log"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 173,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera cuando un sistema de archivos, que no figura en /etc/fstab ni es conocido por el sistema, se monta manualmente?",
    "options": [
      "systemd ignora cualquier montaje manual que no se realice usando el comando systemctl mount",
      "El comando systemctl mountsync se puede utilizar para crear una unidad de montaje basada en el montaje existente.",
      "systemd genera automáticamente una unidad de montaje y monitorea el punto de montaje sin cambiarlo",
      "A menos que se cree una unidad de montaje systemd, systemd desmontará el sistema de archivos después de un corto período de tiempo.",
      "Se debe usar systemctl unmount para eliminar el montaje porque el sistema abre un descriptor de archivo en el punto de montaje."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 174,
    "category": "LPIC-1",
    "question": "¿Qué hace el comando mount --bind?",
    "options": [
      "Hace que el contenido de un directorio esté disponible en otro directorio.",
      "Monta todos los sistemas de archivos disponibles en el directorio actual.",
      "Monta todos los sistemas de archivos montables por el usuario en el directorio de inicio del usuario.",
      "Monta todos los sistemas de archivos enumerados en /etc/fstab que tienen la opción userbind configurada",
      "Monta permanentemente un archivo normal en un directorio."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 175,
    "category": "LPIC-1",
    "question": "Considere el siguiente resultado del comando ls –i: ¿Cómo se crearía un nuevo archivo llamado c.txt con el mismo número de inodo que a.txt (Inodo 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "En –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 176,
    "category": "LPIC-1",
    "question": "Considere el siguiente directorio: drwxrwxr-x 2 root sales 4096 1 de enero 15:21 sales ¿Qué comando garantiza que los nuevos archivos creados dentro del directorio sales sean propiedad del grupo sales? (Elija dos.)",
    "options": [
      "chmod g+s sales",
      "setpol –R nuevo grupo=ventas ventas",
      "chgrp –p ventas ventas",
      "chown --persistent *.sales ventas",
      "ventas de chmod 2775"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 177,
    "category": "LPIC-1",
    "question": "Para mostrar todos los sistemas de archivos actualmente montados, ¿cuál de los siguientes comandos podría usarse? (Elija dos.)",
    "options": [
      "cat /proc/self/mounts",
      "free",
      "lsmounts",
      "mount",
      "cat /proc/filesystems"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 178,
    "category": "LPIC-1",
    "question": "Al considerar el uso de enlaces físicos, ¿cuáles son las razones válidas para no utilizar enlaces físicos?",
    "options": [
      "Los enlaces físicos no están disponibles en todos los sistemas Linux porque los sistemas de archivos tradicionales, como ext4, no los admiten.",
      "Cada enlace físico tiene propiedad, permisos y ACL individuales que pueden provocar la divulgación no intencionada del contenido del archivo.",
      "Los enlaces duros son específicos de un sistema de archivos y no pueden apuntar a archivos en otro sistema de archivos.",
      "Si otros usuarios además del root deberían poder crear enlaces físicos, se debe instalar y configurar suln.",
      "Cuando se modifica un archivo vinculado, se crea una copia del archivo y consume espacio adicional."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 179,
    "category": "LPIC-1",
    "question": "De conformidad con la FHS, ¿en cuál de los directorios se encuentran las páginas de manual?",
    "options": [
      "/opt/man/",
      "/usr/doc/",
      "/usr/share/man/",
      "/var/pkg/man",
      "/var/man/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 180,
    "category": "LPIC-1",
    "question": "¿Cuál es el número de identificación del proceso de inicio en un sistema basado en System V?",
    "options": [
      "-1",
      "0",
      "1",
      "Es diferente con cada reinicio.",
      "Está configurado en el nivel de ejecución actual."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 181,
    "category": "LPIC-1",
    "question": "¿Cuándo se restablece el contenido del búfer circular del núcleo? (Elija dos.)",
    "options": [
      "Cuando el búfer circular se restablece explícitamente usando el comando dmesg --clear",
      "Cuando el búfer circular se lee usando dmesg sin ningún parámetro adicional",
      "Cuando ha transcurrido un tiempo configurable, 15 minutos por defecto",
      "Cuando el kernel carga un módulo del kernel previamente descargado",
      "Cuando el sistema se apaga o reinicia"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 182,
    "category": "LPIC-1",
    "question": "¿Cuál es el primer programa que inicia el kernel de Linux en el momento del arranque cuando se utiliza System V init?",
    "options": [
      "/lib/init.so",
      "/proc/sys/kernel/init",
      "/etc/rc.d/rcinit",
      "/sbin/init",
      "/boot/init"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 183,
    "category": "LPIC-1",
    "question": "Un paquete Debian crea varios archivos durante su instalación. ¿Cuál de los siguientes comandos busca paquetes que posean el archivo /etc/debian_version?",
    "options": [
      "apt-get search /etc/debian_version",
      "apt –r /etc/debian_version",
      "find /etc/debian_version -dpkg",
      "dpkg –S /etc/debian_version",
      "apt-file /etc/debian_version"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 184,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes directorios en un sistema Linux de 64 bits suele contener bibliotecas compartidas? (Elija dos.)",
    "options": [
      "~/.lib64/",
      "/usr/lib64/",
      "/var/lib64/",
      "/lib64/",
      "/opt/lib64/"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 185,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos existe en una instalación estándar de GRUB 2? (Elija dos.)",
    "options": [
      "/boot/grub/stages/stage0",
      "/boot/grub/i386-pc/1vm.mod",
      "/boot/grub/fstab",
      "/boot/grub/grub.cfg",
      "/boot/grub/linux/vmlinuz"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 186,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos instala todos los paquetes con un nombre que termina en la cadena foo?",
    "options": [
      "zypper get “*foo”",
      "zypper update “foo?”",
      "zypper force “foo*”",
      "zypper install “*foo”",
      "zypper add “.*foo”"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 187,
    "category": "LPIC-1",
    "question": "¿Qué comando desinstala un paquete pero conserva sus archivos de configuración en caso de que se reinstale el paquete?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L nombrepaquete",
      "dpkg –P nombrepaquete",
      "dpkg –v pkgname",
      "dpkg –r pkgname"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 188,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera las dependencias del archivo del paquete RPM foo.rpm?",
    "options": [
      "rpm –qpR foo.rpm",
      "rpm –dep foo",
      "rpm –ld foo.rpm",
      "rpm –R foo.rpm",
      "rpm –pD foo"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 189,
    "category": "LPIC-1",
    "question": "¿Cuál es el valor máximo de amabilidad que un usuario normal puede asignar a un proceso con el comando nice al ejecutar un nuevo proceso?",
    "options": [
      "9",
      "15",
      "19",
      "49",
      "99"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 190,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los archivos y directorios dentro del directorio /tmp/ y sus subdirectorios que son propiedad del usuario raíz? (Elija dos.)",
    "options": [
      "buscar /tmp –usuario raíz -imprimir",
      "buscar –ruta /tmp –uid raíz",
      "buscar /tmp –uid raíz -imprimir",
      "buscar /tmp –usuario raíz",
      "buscar –ruta /tmp –usuario raíz -imprimir"
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 191,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos vi elimina dos líneas, la línea actual y la siguiente?",
    "options": [
      "d2",
      "2d",
      "2dd",
      "dd2",
      "de12"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 192,
    "category": "LPIC-1",
    "question": "Inmediatamente después de eliminar 3 líneas de texto en vi y mover el cursor a una línea diferente, ¿qué comando de un solo carácter insertará el contenido eliminado debajo de la línea actual?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (mayúscula)",
      "U (mayúscula)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 193,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos cambia todos los saltos de línea CR-LF en el archivo de texto userlist.txt a saltos de línea LF estándar de Linux y almacena el resultado en newlist.txt?",
    "options": [
      "tr –d '\\r' < lista de usuarios.txt > nueva lista.txt",
      "tr –c ‘\\n\\r’ ‘’ <nueva lista.txt> lista de usuarios.txt",
      "tr ‘\\r\\n’ ‘’ <listadeusuarios.txt> nuevalista.txt",
      "tr ‘\\r’ ‘\\n’ lista de usuarios.txt nueva lista.txt",
      "tr –s ‘/^M/^J/’ lista de usuarios.txt nueva lista.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 194,
    "category": "LPIC-1",
    "question": "Dado el siguiente flujo de entrada: txt1.txt atxt.txt txtB.txt ¿Cuál de las siguientes expresiones regulares convierte este flujo de entrada en el siguiente flujo de salida? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
    "options": [
      "s/^.txt/.bak/",
      "s/txt/bak.txt/",
      "s/txt$/bak.txt/",
      "s/^txt$/.bak^/",
      "s/[.txt]/.bak$1/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 195,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la ruta al archivo ejecutable que se ejecutaría cuando se invoca el comando foo?",
    "options": [
      "lsattr foo",
      "apropos foo",
      "locate foo",
      "whatis foo",
      "which foo"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 196,
    "category": "LPIC-1",
    "question": "Al redirigir la salida de find al comando xargs, ¿qué opción de búsqueda es útil si los nombres de archivos contienen espacios?",
    "options": [
      "–rep-space",
      "-printnul",
      "-nospace",
      "–ignore-space",
      "–print0"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 197,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para determinar cuánto tiempo ha estado funcionando el sistema? (Elija dos.)",
    "options": [
      "uptime",
      "up",
      "time --up",
      "uname –u",
      "top"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 198,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos, ubicados en el directorio de inicio de un usuario, contiene el historial de Bash?",
    "options": [
      ".bashrc_history",
      ".bash_histfile",
      ".history",
      ".bash_history",
      ".history_bash"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 199,
    "category": "LPIC-1",
    "question": "¿Qué comodines coincidirán con los siguientes nombres de archivos? (Elija dos opciones). ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[SS][02]"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 200,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes es una dirección IPv6 válida?",
    "options": [
      "2001:db8:0g21::1",
      "2001::db8:4581::1",
      "2001:db8:3241::1",
      "2001%db8%9990%%1",
      "2001.db8.819f..1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 201,
    "category": "LPIC-1",
    "question": "¿Qué sucede si las siguientes herramientas, utilizadas para la depuración de DNS, informan no solo la respuesta del servidor de nombres sino también detalles sobre la consulta?",
    "options": [
      "dnsq",
      "hostname",
      "dig",
      "dnslookup",
      "zoneinfo"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 202,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes declaraciones es válida en el archivo /etc/nsswitch.conf?",
    "options": [
      "multi on",
      "192.168.168.4 servidor DNS",
      "espacios de nombres: proceso de montaje neto",
      "include /etc/nsswitch.d/",
      "hosts: files dns"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 203,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes tipos de conexión, como se ve en el programa de conexión nmcli, puede existir en NetworkManager? (Elija tres.)",
    "options": [
      "tcp",
      "ethernet",
      "wifi",
      "ipv6",
      "bridge"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 204,
    "category": "LPIC-1",
    "question": "En una estación de trabajo Linux, el comando de ruta tarda mucho en imprimir la tabla de enrutamiento. ¿Cuál de los siguientes errores indica eso?",
    "options": [
      "La información de enrutamiento local puede estar dañada y debe volver a validarse mediante un protocolo de enrutamiento.",
      "Uno de los enrutadores en la tabla de enrutamiento no está disponible, lo que hace que el mecanismo de detección automática de fallas del enrutador (ARF-D) espere un tiempo de espera.",
      "Puede haber accidentalmente más de un enrutador predeterminado, en cuyo caso se debe realizar una elección de enrutador predeterminado en la red para elegir un enrutador como predeterminado.",
      "El demonio de enrutamiento del kernel de Linux (LKRD) no se está ejecutando y debe iniciarse utilizando su script de inicio o unidad systemd.",
      "Es posible que la resolución de DNS no funcione ya que la ruta de forma predeterminada intenta resolver los nombres de los enrutadores y destinos y puede que se agote el tiempo de espera."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 205,
    "category": "LPIC-1",
    "question": "¿Qué es cierto acerca del campo Límite de saltos en el encabezado IPv6?",
    "options": [
      "El campo no se modifica durante el transporte de un paquete.",
      "El campo se transmite dentro de un encabezado de extensión salto a salto.",
      "Cada enrutador que reenvía el paquete aumenta el valor del campo.",
      "Cada enrutador que reenvía el paquete disminuye el valor del campo.",
      "Para paquetes de multidifusión, el valor del campo es siempre 1."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 206,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes subcomandos nmcli existen? (Elija dos.)",
    "options": [
      "nmcli ethernet",
      "nmcli device",
      "nmcli wifi",
      "nmcli address",
      "nmcli connection"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 207,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes cambios puede ocurrir como consecuencia del uso del comando ip? (Elija tres.)",
    "options": [
      "Las interfaces de red pueden volverse activas o inactivas.",
      "Se pueden agregar nuevos servidores de nombres a la configuración del solucionador.",
      "El nombre del host del sistema puede cambiar.",
      "Las direcciones IP pueden cambiar.",
      "La tabla de enrutamiento puede cambiar."
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 208,
    "category": "LPIC-1",
    "question": "¿Cuántas direcciones IP se pueden usar para hosts únicos dentro de la subred IPv4 192.168.2.128/26?",
    "options": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 209,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes redes IPv4 están reservadas por la IANA para la asignación de direcciones privadas y el enrutamiento privado? (Elija tres.)",
    "options": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 210,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos configura interfaces de red en función de los archivos de configuración específicos de la distribución existentes en el sistema? (Elija dos.)",
    "options": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 211,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera si el UID de un usuario normal es idéntico al GID de un grupo?",
    "options": [
      "Los UID tienen prioridad sobre los GID, por lo tanto, el usuario está disponible mientras que el grupo no.",
      "Ni el usuario ni el grupo están disponibles para evitar ambigüedades debido al conflicto de ID.",
      "Los UID y GID son independientes entre sí, por lo tanto, tanto el usuario como el grupo siguen estando disponibles.",
      "El usuario es el único miembro del grupo, incluso si la configuración del grupo contiene otros miembros.",
      "Los GID tienen prioridad sobre los UID, por lo tanto, el grupo está disponible mientras que el usuario no."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 212,
    "category": "LPIC-1",
    "question": "¿Cuál de la siguiente información se almacena en /etc/shadow para cada usuario?",
    "options": [
      "La marca de tiempo del último inicio de sesión del usuario.",
      "Las claves SSH privadas del usuario",
      "La contraseña hash del usuario.",
      "El ID de usuario numérico (UID)",
      "La ruta al directorio de inicio del usuario."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 213,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todos los temporizadores systemd activos?",
    "options": [
      "systemctl-timer show",
      "timectl list",
      "systemctl –t",
      "systemctl list-timers",
      "timeq"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 214,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes tareas puede realizar el comando de fecha? (Elija dos.)",
    "options": [
      "Configure la fecha y hora del sistema.",
      "Configure la fecha del sistema pero no la hora.",
      "Calcula el lapso de tiempo entre dos fechas.",
      "Imprime un calendario para un mes o un año.",
      "Mostrar la hora en un formato específico."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 215,
    "category": "LPIC-1",
    "question": "¿Qué se puede especificar con useradd? (Elija dos.)",
    "options": [
      "Comandos que el usuario puede ejecutar usando sudo.",
      "La ruta absoluta al directorio de inicio del usuario.",
      "Qué impresoras están disponibles para el nuevo usuario.",
      "Las claves SSH utilizadas para iniciar sesión en la nueva cuenta.",
      "El ID de usuario numérico (UID) del usuario."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 216,
    "category": "LPIC-1",
    "question": "¿Qué es cierto sobre el archivo /etc/localtime?",
    "options": [
      "Es un archivo de texto plano que contiene una cadena como Europa/Berlín.",
      "Lo crea y lo mantiene el servicio NTP en función de la ubicación de la dirección IP del sistema.",
      "Es un enlace simbólico a /sys/device/clock/ltime y siempre contiene la hora local actual.",
      "Después de cambiar este archivo, se debe ejecutar newtzconfig para que los cambios sean efectivos.",
      "Es un enlace simbólico o una copia de un archivo de información de zona horaria como /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 217,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a las unidades de temporizador systemd?",
    "options": [
      "Las unidades de temporizador solo se pueden definir dentro del archivo de una unidad de servicio.",
      "El comando ejecutado por el temporizador se especifica en la sección [Cmd] de la unidad del temporizador.",
      "Un servicio de sistema dedicado, systemd-cron, maneja la ejecución de unidades de temporizador.",
      "Las unidades de temporizador solo existen en el ámbito del sistema y no están disponibles para los usuarios.",
      "Cada unidad de temporizador systemd controla una unidad de servicio systemd específica."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 218,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes campos están disponibles en el formato estándar tanto del archivo global /etc/crontab como en archivos crontab específicos del usuario? (Elija dos.)",
    "options": [
      "Año",
      "Minuto",
      "Nombre de usuario",
      "ID de grupo efectivo",
      "Dominio"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 219,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se debe ejecutar al iniciar un shell de inicio de sesión para cambiar el idioma de los mensajes de un programa internacionalizado al portugués (pt)?",
    "options": [
      "exportar IDIOMA = “pt”",
      "exportar LC_MESSAGES=“pt”",
      "exportar UI_MESSAGES=“pt”",
      "exportar MENSAJE = “pt”",
      "exportar ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 220,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos asigna un usuario a su grupo principal?",
    "options": [
      "/etc/pgroup",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/group",
      "/etc/gshadow"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 221,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes pasos impide que un usuario obtenga una sesión de inicio de sesión interactiva?",
    "options": [
      "Establecer el UID del usuario en 0.",
      "Ejecutando el comando chsh –s /bin/false con el nombre de usuario.",
      "Eliminar al usuario del personal del grupo.",
      "Agregar el usuario a /etc/noaccess.",
      "Crear un archivo .nologin en el directorio de inicio del usuario."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 222,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes afirmaciones sobre sytemd-journald son verdaderas? (Elija tres.)",
    "options": [
      "Es incompatible con syslog y no se puede instalar en un sistema que utilice syslog normal.",
      "Solo procesa mensajes de systemd y no mensajes de ninguna otra herramienta.",
      "Puede pasar mensajes de registro a syslog para su posterior procesamiento.",
      "Mantiene metadatos como _UID o _PID para cada mensaje.",
      "Admite funciones de syslog como kern, usuario y autenticación."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 223,
    "category": "LPIC-1",
    "question": "¿Qué opción en el archivo de configuración de chrony cambia el intervalo inicial de sondeos a un servidor NTP para acelerar la sincronización inicial?",
    "options": [
      "iburst",
      "quickstart",
      "fast",
      "fsync",
      "flood"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 224,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se utiliza para rotar, comprimir y enviar registros del sistema por correo?",
    "options": [
      "logrotate",
      "striplog",
      "syslogd –-rotate",
      "rotatelog",
      "logger"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 225,
    "category": "LPIC-1",
    "question": "¿Por qué es importante la correcta configuración de la zona horaria de un sistema?",
    "options": [
      "Debido a que la zona horaria se incluye en los cálculos de suma de verificación y los cambios de zona horaria invalidan las sumas de verificación existentes.",
      "Porque la zona horaria se guarda como parte de las horas de modificación de los archivos y no se puede cambiar después de crear un archivo.",
      "Porque las variables de entorno LANG y LC_MESSAGES se configuran, de forma predeterminada, según la zona horaria.",
      "Porque NTP elige servidores cercanos según la zona horaria configurada.",
      "Porque la conversión de marcas de tiempo de Unix a hora local depende de la configuración de la zona horaria."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 226,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los trabajos de impresión en cola?",
    "options": [
      "lpd",
      "lpr",
      "lp",
      "lsq",
      "lpq"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 227,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes entradas en /etc/syslog.conf escribe todos los eventos relacionados con el correo en el archivo /var/log/maillog y envía todos los eventos críticos al servidor remoto logger.example.com?",
    "options": [
      "correo.* /var/log/maillog correo,crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit syslog://logger.example.org",
      "correo /var/log/maillog correo.crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit @logger.example.org",
      "correo * /var/log/maillog correo crítico @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 228,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes protocolos está relacionado con el término retransmisión abierta?",
    "options": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 229,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todas las variables de entorno y shell?",
    "options": [
      "getargs",
      "lsenv",
      "ls",
      "env",
      "lsshell"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 230,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes operadores de comparación para pruebas funciona en elementos del sistema de archivos? (Elija dos.)",
    "options": [
      "–z",
      "–eq",
      "–d",
      "–f",
      "–lt"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 231,
    "category": "LPIC-1",
    "question": "¿Qué información proporciona el comando echo $$?",
    "options": [
      "El ID del proceso del shell actual.",
      "El ID del proceso para el siguiente comando.",
      "El ID del proceso del último comando ejecutado.",
      "El ID del proceso del último comando que se colocó en segundo plano.",
      "El ID del proceso del comando echo."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 232,
    "category": "LPIC-1",
    "question": "¿Qué comando hace que la variable del shell denominada VARIABLE sea visible para los subshells?",
    "options": [
      "exportar $VARIABLE",
      "env VARIABLE",
      "establecer $VARIABLE",
      "establecer VARIABLE",
      "exportar VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 233,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce la siguiente secuencia de comandos? eco '1 2 3 4 5 6' | mientras lee a b c; hacer eco del resultado $c $b $a; hecho",
    "options": [
      "resultado: 6 5 4",
      "resultado: 1 2 3 4 5 6",
      "resultado: 3 4 5 6 2 1",
      "resultado: 6 5 4 3 2 1",
      "resultado: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 234,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos de configuración debería modificarse para establecer globalmente variables de shell para todos los usuarios?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 235,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce el comando secuencia 10?",
    "options": [
      "Un flujo continuo de números que aumenta en incrementos de 10 hasta que se detiene el comando.",
      "No crea ningún resultado porque falta un segundo parámetro.",
      "El número del 0 al 9 con un número por línea.",
      "El número 10 a la salida estándar.",
      "Los números del 1 al 10 con un número por línea."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 236,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para limitar la cantidad de memoria que puede utilizar un usuario?",
    "options": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 237,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito de una clave de host SSH?",
    "options": [
      "Debe ser enviado por cualquier cliente SSH además de una clave de usuario para identificar el host del cliente.",
      "Es la clave raíz mediante la cual se deben firmar todas las claves SSH de los usuarios.",
      "Proporciona la información de identidad del servidor para conectar clientes SSH.",
      "Autentica a cualquier usuario que inicie sesión en una máquina remota desde el host de la clave.",
      "Lo utilizan servicios del sistema como cron, syslog o una tarea de respaldo para conectarse automáticamente a hosts remotos."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 238,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito del contenedor TCP?",
    "options": [
      "Administrar y ajustar el ancho de banda utilizado por los servicios TCP.",
      "Vincular un servicio de red a un puerto TCP.",
      "Encapsule mensajes TCP en paquetes IP.",
      "Agregue soporte SSL a servicios TCP de texto sin formato.",
      "Limitar el acceso a un servicio de red."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 239,
    "category": "LPIC-1",
    "question": "Dado el siguiente extracto de la configuración de sudo: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk ¿Cuál de las siguientes afirmaciones es verdadera? (Elija tres.)",
    "options": [
      "Jane puede ejecutar /bin/id sólo después de especificar su contraseña.",
      "Jane puede ejecutar /sbin/fdisk después de especificar la contraseña de root.",
      "Jane puede ejecutar /sbin/fdisk después de especificar su contraseña.",
      "Jane puede ejecutar /bin/kill sin especificar una contraseña.",
      "Jane puede ejecutar /bin/id sin especificar su contraseña."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 240,
    "category": "LPIC-1",
    "question": "¿Qué archivo de configuración contiene las opciones predeterminadas para clientes SSH?",
    "options": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 241,
    "category": "LPIC-1",
    "question": "Dependiendo de la configuración de un sistema, ¿cuál de los siguientes archivos se puede utilizar para habilitar y deshabilitar los servicios de red que se ejecutan en este host?",
    "options": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 242,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos puede identificar el PID de un proceso que abrió un puerto TCP?",
    "options": [
      "ptrace",
      "strace",
      "debug",
      "lsof",
      "nessus"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 243,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos precarga y administra claves SSH existentes que se utilizan para la autenticación automática al iniciar sesión en máquinas de pedido que utilizan SSH?",
    "options": [
      "sshd",
      "ssh-keyring",
      "ssh-keygen",
      "ssh-pki",
      "ssh-agent"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 244,
    "category": "LPIC-1",
    "question": "En una máquina que ejecuta varios servidores X, ¿cómo identifican los programas las diferentes instancias del servidor X11?",
    "options": [
      "Mediante un UUID fijo que se define en el archivo de configuración de X11.",
      "Por un nombre para mostrar como: 1.",
      "Por el nombre del usuario que ejecuta el servidor X como x11:bob.",
      "Por un nombre de dispositivo como /dev/X11/xservers/1.",
      "Mediante una dirección IPv6 única de la subred fe80::/64."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 245,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito de un lector de pantalla?",
    "options": [
      "Gestiona teclados virtuales en pantallas táctiles.",
      "Lee los parámetros de los monitores conectados y crea una configuración X11 adecuada.",
      "Muestra líneas y marcadores para ayudar a las personas a utilizar técnicas de lectura rápida.",
      "Gestiona y muestra archivos que contienen libros electrónicos.",
      "Lee el texto mostrado para adaptarse a las necesidades de las personas ciegas o con discapacidad visual."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 246,
    "category": "LPIC-1",
    "question": "El archivo de configuración de X11 xorg. conf está agrupado en una sección. ¿Cómo se representa el contenido de la sección Nombre de la sección?",
    "options": [
      "Se coloca entre llaves como en Sección Nombre de Sección {…}.",
      "Se coloca entre las etiquetas <Section name=“SectionName”> y </Section>.",
      "Se coloca entre una línea que contiene la Sección “Nombre de la Sección” y una línea que contiene la Sección Final.",
      "Se coloca después de la fila [Nombre de la sección].",
      "Se coloca después de una sección inicial sin sangría, “Nombre de sección”, y debe tener exactamente un carácter de tabulación."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 247,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes características proporciona SPICE? (Elija dos.)",
    "options": [
      "Conexión de dispositivos USB locales a aplicaciones remotas.",
      "Acceder a aplicaciones gráficas en un host remoto.",
      "Reemplazo de Xorg como servidor X11 local.",
      "Descargar e instalar aplicaciones localmente desde una máquina remota.",
      "Cargar y ejecutar un programa binario en una máquina remota."
    ],
    "correct": [
      0,
      1
    ],
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 248,
    "category": "LPIC-1",
    "question": "¿Cuántas direcciones IP se pueden usar para hosts únicos dentro de la subred IPv4 192.168.2.128/26?",
    "options": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 249,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes redes IPv4 están reservadas por la IANA para la asignación de direcciones privadas y el enrutamiento privado? (Elija tres.)",
    "options": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 250,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos configura interfaces de red en función de los archivos de configuración específicos de la distribución existentes en el sistema? (Elija dos.)",
    "options": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 251,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera si el UID de un usuario normal es idéntico al GID de un grupo?",
    "options": [
      "Los UID tienen prioridad sobre los GID, por lo tanto, el usuario está disponible mientras que el grupo no.",
      "Ni el usuario ni el grupo están disponibles para evitar ambigüedades debido al conflicto de ID.",
      "Los UID y GID son independientes entre sí, por lo tanto, tanto el usuario como el grupo siguen estando disponibles.",
      "El usuario es el único miembro del grupo, incluso si la configuración del grupo contiene otros miembros.",
      "Los GID tienen prioridad sobre los UID, por lo tanto, el grupo está disponible mientras que el usuario no."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 252,
    "category": "LPIC-1",
    "question": "¿Cuál de la siguiente información se almacena en /etc/shadow para cada usuario?",
    "options": [
      "La marca de tiempo del último inicio de sesión del usuario.",
      "Las claves SSH privadas del usuario",
      "La contraseña hash del usuario.",
      "El ID de usuario numérico (UID)",
      "La ruta al directorio de inicio del usuario."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 253,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todos los temporizadores systemd activos?",
    "options": [
      "systemctl-timer show",
      "timectl list",
      "systemctl –t",
      "systemctl list-timers",
      "timeq"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 254,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes tareas puede realizar el comando de fecha? (Elija dos.)",
    "options": [
      "Configure la fecha y hora del sistema.",
      "Configure la fecha del sistema pero no la hora.",
      "Calcula el lapso de tiempo entre dos fechas.",
      "Imprime un calendario para un mes o un año.",
      "Mostrar la hora en un formato específico."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 255,
    "category": "LPIC-1",
    "question": "¿Qué se puede especificar con useradd? (Elija dos.)",
    "options": [
      "Comandos que el usuario puede ejecutar usando sudo.",
      "La ruta absoluta al directorio de inicio del usuario.",
      "Qué impresoras están disponibles para el nuevo usuario.",
      "Las claves SSH utilizadas para iniciar sesión en la nueva cuenta.",
      "El ID de usuario numérico (UID) del usuario."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 256,
    "category": "LPIC-1",
    "question": "¿Qué es cierto sobre el archivo /etc/localtime?",
    "options": [
      "Es un archivo de texto plano que contiene una cadena como Europa/Berlín.",
      "Lo crea y lo mantiene el servicio NTP en función de la ubicación de la dirección IP del sistema.",
      "Es un enlace simbólico a /sys/device/clock/ltime y siempre contiene la hora local actual.",
      "Después de cambiar este archivo, se debe ejecutar newtzconfig para que los cambios sean efectivos.",
      "Es un enlace simbólico o una copia de un archivo de información de zona horaria como /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 257,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a las unidades de temporizador systemd?",
    "options": [
      "Las unidades de temporizador solo se pueden definir dentro del archivo de una unidad de servicio.",
      "El comando ejecutado por el temporizador se especifica en la sección [Cmd] de la unidad del temporizador.",
      "Un servicio de sistema dedicado, systemd-cron, maneja la ejecución de unidades de temporizador.",
      "Las unidades de temporizador solo existen en el ámbito del sistema y no están disponibles para los usuarios.",
      "Cada unidad de temporizador systemd controla una unidad de servicio systemd específica."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 258,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes campos están disponibles en el formato estándar tanto del archivo global /etc/crontab como en archivos crontab específicos del usuario? (Elija dos.)",
    "options": [
      "Año",
      "Minuto",
      "Nombre de usuario",
      "ID de grupo efectivo",
      "Dominio"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 259,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se debe ejecutar al iniciar un shell de inicio de sesión para cambiar el idioma de los mensajes de un programa internacionalizado al portugués (pt)?",
    "options": [
      "exportar IDIOMA = “pt”",
      "exportar LC_MESSAGES=“pt”",
      "exportar UI_MESSAGES=“pt”",
      "exportar MENSAJE = “pt”",
      "exportar ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 260,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos asigna un usuario a su grupo principal?",
    "options": [
      "/etc/pgroup",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/group",
      "/etc/gshadow"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 261,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes entradas en /etc/syslog.conf escribe todos los eventos relacionados con el correo en el archivo /var/log/maillog y envía todos los eventos críticos al servidor remoto logger.example.com?",
    "options": [
      "correo.* /var/log/maillog correo,crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit syslog://logger.example.org",
      "correo /var/log/maillog correo.crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit @logger.example.org",
      "correo * /var/log/maillog correo crítico @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 262,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes protocolos está relacionado con el término retransmisión abierta?",
    "options": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 263,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todas las variables de entorno y shell?",
    "options": [
      "getargs",
      "lsenv",
      "ls",
      "env",
      "lsshell"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 264,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes operadores de comparación para pruebas funciona en elementos del sistema de archivos? (Elija dos.)",
    "options": [
      "–z",
      "–eq",
      "–d",
      "–f",
      "–lt"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 265,
    "category": "LPIC-1",
    "question": "¿Qué información proporciona el comando echo $$?",
    "options": [
      "El ID del proceso del shell actual.",
      "El ID del proceso para el siguiente comando.",
      "El ID del proceso del último comando ejecutado.",
      "El ID del proceso del último comando que se colocó en segundo plano.",
      "El ID del proceso del comando echo."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 266,
    "category": "LPIC-1",
    "question": "¿Qué comando hace que la variable del shell denominada VARIABLE sea visible para los subshells?",
    "options": [
      "exportar $VARIABLE",
      "env VARIABLE",
      "establecer $VARIABLE",
      "establecer VARIABLE",
      "exportar VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 267,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce la siguiente secuencia de comandos? eco '1 2 3 4 5 6' | mientras lee a b c; hacer eco del resultado $c $b $a; hecho",
    "options": [
      "resultado: 6 5 4",
      "resultado: 1 2 3 4 5 6",
      "resultado: 3 4 5 6 2 1",
      "resultado: 6 5 4 3 2 1",
      "resultado: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 268,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos de configuración debería modificarse para establecer globalmente variables de shell para todos los usuarios?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 269,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce el comando secuencia 10?",
    "options": [
      "Un flujo continuo de números que aumenta en incrementos de 10 hasta que se detiene el comando.",
      "No crea ningún resultado porque falta un segundo parámetro.",
      "El número del 0 al 9 con un número por línea.",
      "El número 10 a la salida estándar.",
      "Los números del 1 al 10 con un número por línea."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 270,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para limitar la cantidad de memoria que puede utilizar un usuario?",
    "options": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 271,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito de una clave de host SSH?",
    "options": [
      "Debe ser enviado por cualquier cliente SSH además de una clave de usuario para identificar el host del cliente.",
      "Es la clave raíz mediante la cual se deben firmar todas las claves SSH de los usuarios.",
      "Proporciona la información de identidad del servidor para conectar clientes SSH.",
      "Autentica a cualquier usuario que inicie sesión en una máquina remota desde el host de la clave.",
      "Lo utilizan servicios del sistema como cron, syslog o una tarea de respaldo para conectarse automáticamente a hosts remotos."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 272,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito del contenedor TCP?",
    "options": [
      "Administrar y ajustar el ancho de banda utilizado por los servicios TCP.",
      "Vincular un servicio de red a un puerto TCP.",
      "Encapsule mensajes TCP en paquetes IP.",
      "Agregue soporte SSL a servicios TCP de texto sin formato.",
      "Limitar el acceso a un servicio de red."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 273,
    "category": "LPIC-1",
    "question": "Dado el siguiente extracto de la configuración de sudo: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk ¿Cuál de las siguientes afirmaciones es verdadera? (Elija tres.)",
    "options": [
      "Jane puede ejecutar /bin/id sólo después de especificar su contraseña.",
      "Jane puede ejecutar /sbin/fdisk después de especificar la contraseña de root.",
      "Jane puede ejecutar /sbin/fdisk después de especificar su contraseña.",
      "Jane puede ejecutar /bin/kill sin especificar una contraseña.",
      "Jane puede ejecutar /bin/id sin especificar su contraseña."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 274,
    "category": "LPIC-1",
    "question": "¿Qué archivo de configuración contiene las opciones predeterminadas para clientes SSH?",
    "options": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 275,
    "category": "LPIC-1",
    "question": "Dependiendo de la configuración de un sistema, ¿cuál de los siguientes archivos se puede utilizar para habilitar y deshabilitar los servicios de red que se ejecutan en este host?",
    "options": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 276,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos puede identificar el PID de un proceso que abrió un puerto TCP?",
    "options": [
      "ptrace",
      "strace",
      "debug",
      "lsof",
      "nessus"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 277,
    "category": "LPIC-1",
    "question": "El archivo de configuración de X11 xorg.conf está agrupado en una sección. ¿Cómo se representa el contenido de la sección Nombre de la sección?",
    "options": [
      "Se coloca entre llaves como en Sección Nombre de Sección {…}.",
      "Se coloca entre las etiquetas <Section name=“SectionName”> y </Section>.",
      "Se coloca entre una línea que contiene la Sección “Nombre de la Sección” y una línea que contiene la Sección Final.",
      "Se coloca después de la fila [Nombre de la sección].",
      "Se coloca después de una sección inicial sin sangría, “Nombre de sección”, y debe tener exactamente un carácter de tabulación."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 278,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes características proporciona SPICE? (Elija dos.)",
    "options": [
      "Conexión de dispositivos USB locales a aplicaciones remotas.",
      "Acceder a aplicaciones gráficas en un host remoto.",
      "Reemplazo de Xorg como servidor X11 local.",
      "Descargar e instalar aplicaciones localmente desde una máquina remota.",
      "Cargar y ejecutar un programa binario en una máquina remota."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 279,
    "category": "LPIC-1",
    "question": "¿Qué se almacena en el diario systemd?",
    "options": [
      "/var/jlog/ and /var/jlogd/",
      "/proc/log/ and /proc/klog/",
      "/run/log/journal/ or /var/log/journal/",
      "/var/log/syslog.bin or /var/log/syslog.jrn",
      "/etc/systemd/journal/ or /usr/lib/systemd/journal/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 280,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera respecto al comando sendmail?",
    "options": [
      "Con cualquier MTA, el demonio cron debe ejecutar periódicamente el comando sendmail.",
      "Cuando se usa systemd, sendmail es un alias de retransmisión.",
      "El comando sendmail imprime el historial de la cola del MTA sobre qué correos se han enviado correctamente.",
      "Sólo está disponible cuando está instalado el MTA de sendmail.",
      "Todos los MTA comunes, incluidos Postfix y Exim, proporcionan un comando de envío de correo."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 281,
    "category": "LPIC-1",
    "question": "¿Qué archivo dentro del directorio de configuración de CUPS contiene la configuración de las impresoras?",
    "options": [
      "cups-devices.conf",
      "snmp.conf",
      "printers.conf",
      "printcap.conf",
      "cupsd.conf"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 282,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes parámetros se utiliza para que journalctl limite el período de tiempo de salida? (Elija dos.)",
    "options": [
      "--since=",
      "--from=",
      "--until=",
      "--upto=",
      "--date="
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 283,
    "category": "LPIC-1",
    "question": "¿Qué es cierto con respecto al archivo ~/.forward?",
    "options": [
      "Cuando se configura correctamente ~/.forward se puede utilizar para reenviar cada correo entrante a uno o más destinatarios.",
      "Después de editar ~/.forward, el usuario debe ejecutar newaliases para que el servidor de correo esté al tanto de los cambios.",
      "Usando ~/.forward, root puede configurar cualquier dirección de correo electrónico mientras que todos los demás usuarios pueden configurar solo sus propias direcciones.",
      "Como ~/.forward es propiedad del MTA y el usuario no puede escribirlo, debe editarse utilizando el comando editaliases.",
      "De forma predeterminada, solo se procesan los archivos ~/.forward de los usuarios del grupo mailq, mientras que se ignoran los archivos ~/.forward de todos los demás usuarios."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 284,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra una lista de trabajos en la cola de impresión? (Elija dos.)",
    "options": [
      "cups --list",
      "lprm -l",
      "lpstat",
      "lpr -q",
      "lpq"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 285,
    "category": "LPIC-1",
    "question": "En un sistema que utiliza systemd-journald, ¿cuál de los siguientes comandos agrega el mensaje Hola al registro del sistema? (Elija dos.)",
    "options": [
      "anexar Hola",
      "registrador Hola",
      "systemd-cat echo Hola",
      "eco Hola > /dev/journal",
      "journalctl agregar Hola"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 286,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes opciones en el archivo de configuración de chrony define fuentes de tiempo remotas? (Elija dos.)",
    "options": [
      "source",
      "clock",
      "remote",
      "pool",
      "server"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 287,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes situaciones observa y corrige un cliente NTP?",
    "options": [
      "El desfase temporal entre el reloj del sistema y el reloj del hardware de la computadora.",
      "La ubicación física y la configuración de la zona horaria.",
      "Cambios en la zona horaria de la ubicación actual de la computadora.",
      "Se necesita ajuste para admitir el horario de verano.",
      "El desfase temporal entre el reloj del sistema y el reloj de referencia."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 288,
    "category": "LPIC-1",
    "question": "Si existe un alias ls, ¿cuál de los siguientes comandos actualiza el alias para que apunte al comando ls -l en lugar del destino actual del alias?",
    "options": [
      "set ls=’ls -l’",
      "alias ls=’ls -l’",
      "alias --force ls=’ls -l’",
      "alias --actualizar ls ls=’ls -l’",
      "realias ls=’ls -l’"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 289,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos coloca la salida del comando fecha en la variable de shell mydate?",
    "options": [
      "mydate=”date”",
      "mydate=”exec date”",
      "mydate=”$((date))”",
      "mydate=”$(date)”",
      "mydate=”${date}”"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 290,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos no es leído directamente por un shell de inicio de sesión de Bash?",
    "options": [
      "~/.bashrc",
      "~/.bash_profile",
      "~/.bash_login",
      "~/.profile",
      "/etc/profile"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 291,
    "category": "LPIC-1",
    "question": "¿Qué es cierto acerca del archivo .profile en el directorio de inicio de un usuario?",
    "options": [
      "Debe ser ejecutable.",
      "Debe llamar al binario del shell de inicio de sesión.",
      "Debe utilizar una sintaxis de script de shell válida.",
      "Debe comenzar con un tinglado.",
      "Debe ser legible únicamente para su propietario."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 292,
    "category": "LPIC-1",
    "question": "¿Cómo funciona el comando ping de forma predeterminada?",
    "options": [
      "Envía una solicitud de eco ICMP a un host remoto y espera recibir una respuesta de eco ICMP a cambio.",
      "Envía una solicitud ARP a un host remoto y espera recibir una respuesta ARP a cambio.",
      "Envía un paquete TCP SYN a un host remoto y espera recibir una respuesta TCP ACK a cambio.",
      "Envía un paquete de difusión a todos los hosts de la red y espera recibir, entre otras cosas, una respuesta del sistema de destino.",
      "Envía un paquete UDP al puerto 0 del host remoto y espera recibir a cambio una respuesta de error UDP."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 293,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la cantidad de bytes transmitidos y recibidos a través de la interfaz de red eth0? (Elija dos.)",
    "options": [
      "ruta -v vía eth0",
      "Las estadísticas de IP muestran dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "enlace ip -s muestra eth0"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 294,
    "category": "LPIC-1",
    "question": "Dada la siguiente tabla de enrutamiento: ¿Cómo se manejaría un paquete saliente al destino 192.168.2.150?",
    "options": [
      "Se pasaría al enrutador predeterminado 192.168.178.1 en wlan0.",
      "Se transmitiría directamente en el dispositivo eth0.",
      "Se pasaría al enrutador predeterminado 255.255.255.0 en eth0.",
      "Se pasaría al enrutador 192.168.1.1 en eth0.",
      "Se transmitiría directamente en el dispositivo wlan0."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 295,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos eliminará la puerta de enlace predeterminada de la tabla de enrutamiento IP del sistema? (Elija dos.)",
    "options": [
      "ifconfig unset default",
      "route del default",
      "ruta ip predeterminada",
      "netstat -r default",
      "sysctl ipv4.default_gw=0"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 296,
    "category": "LPIC-1",
    "question": "¿Qué puerto TCP estandarizado utilizan los servicios HTTPS?",
    "options": [
      "25",
      "80",
      "8080",
      "443",
      "636"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 297,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes variables de entorno se puede definir en locale.conf? (Elija dos.)",
    "options": [
      "LC_ALL",
      "LC_NOMBRE DE USUARIO",
      "LC_UTF8",
      "LC_GEOGRAFÍA",
      "LC_TIME"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 298,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos establece la zona horaria del sistema en la hora del este de Canadá?",
    "options": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz=’Canadá/Este’",
      "modprobe tz_ca_est",
      "ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 299,
    "category": "LPIC-1",
    "question": "¿Qué archivo contiene los datos del último cambio de contraseña de un usuario?",
    "options": [
      "/etc/gshadow",
      "/etc/passwd",
      "/etc/pwdlog",
      "/var/log/shadow",
      "/etc/shadow"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 300,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes campos se puede encontrar en el archivo /etc/group? (Elija dos.)",
    "options": [
      "El directorio de inicio del grupo.",
      "La lista de usuarios que pertenecen al grupo.",
      "El nombre del grupo.",
      "La ACL del grupo predeterminado.",
      "La descripción del grupo."
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 301,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes secciones existe en una unidad de temporizador systemd?",
    "options": [
      "[Eventos]",
      "[Minutero]",
      "[cron]",
      "[Cronograma]",
      "[Desencadenar]"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 302,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes tipos de conexión, como se ve en el programa de conexión nmcli, puede existir en NetworkManager? (Elija tres.)",
    "options": [
      "tcp",
      "ethernet",
      "wifi",
      "ipv6",
      "bridge"
    ],
    "correct": [
      1,
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 303,
    "category": "LPIC-1",
    "question": "En una estación de trabajo Linux, el comando de ruta tarda mucho en imprimir la tabla de enrutamiento. ¿Cuál de los siguientes errores indica eso?",
    "options": [
      "La información de enrutamiento local puede estar dañada y debe volver a validarse mediante un protocolo de enrutamiento.",
      "Uno de los enrutadores en la tabla de enrutamiento no está disponible, lo que hace que el mecanismo de detección automática de fallas del enrutador (ARF-D) espere un tiempo de espera.",
      "Puede haber accidentalmente más de un enrutador predeterminado, en cuyo caso se debe realizar una elección de enrutador predeterminado en la red para elegir un enrutador como predeterminado.",
      "El demonio de enrutamiento del kernel de Linux (LKRD) no se está ejecutando y debe iniciarse utilizando su script de inicio o unidad systemd.",
      "Es posible que la resolución de DNS no funcione ya que la ruta de forma predeterminada intenta resolver los nombres de los enrutadores y destinos y puede que se agote el tiempo de espera."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 304,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes subcomandos nmcli existen? (Elija dos.)",
    "options": [
      "nmcli ethernet",
      "nmcli device",
      "nmcli wifi",
      "nmcli address",
      "nmcli connection"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 305,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes cambios puede ocurrir como consecuencia del uso del comando ip? (Elija tres.)",
    "options": [
      "Las interfaces de red pueden volverse activas o inactivas.",
      "Se pueden agregar nuevos servidores de nombres a la configuración del solucionador.",
      "El nombre del host del sistema puede cambiar.",
      "Las direcciones IP pueden cambiar.",
      "La tabla de enrutamiento puede cambiar."
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 306,
    "category": "LPIC-1",
    "question": "¿Cuántas direcciones IP se pueden usar para hosts únicos dentro de la subred IPv4 192.168.2.128/26?",
    "options": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 307,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes redes IPv4 están reservadas por la IANA para la asignación de direcciones privadas y el enrutamiento privado? (Elija tres.)",
    "options": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 308,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos configura interfaces de red en función de los archivos de configuración específicos de la distribución existentes en el sistema? (Elija dos.)",
    "options": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 309,
    "category": "LPIC-1",
    "question": "¿Cuál de la siguiente información se almacena en /etc/shadow para cada usuario?",
    "options": [
      "La marca de tiempo del último inicio de sesión del usuario.",
      "Las claves SSH privadas del usuario",
      "La contraseña hash del usuario.",
      "El ID de usuario numérico (UID)",
      "La ruta al directorio de inicio del usuario."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 310,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todos los temporizadores systemd activos?",
    "options": [
      "systemctl-timer show",
      "timectl list",
      "systemctl –t",
      "systemctl list-timers",
      "timeq"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 311,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes tareas puede realizar el comando de fecha? (Elija dos.)",
    "options": [
      "Configure la fecha y hora del sistema.",
      "Configure la fecha del sistema pero no la hora.",
      "Calcula el lapso de tiempo entre dos fechas.",
      "Imprime un calendario para un mes o un año.",
      "Mostrar la hora en un formato específico."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 312,
    "category": "LPIC-1",
    "question": "¿Qué se puede especificar con useradd? (Elija dos.)",
    "options": [
      "Comandos que el usuario puede ejecutar usando sudo.",
      "La ruta absoluta al directorio de inicio del usuario.",
      "Qué impresoras están disponibles para el nuevo usuario.",
      "Las claves SSH utilizadas para iniciar sesión en la nueva cuenta.",
      "El ID de usuario numérico (UID) del usuario."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 313,
    "category": "LPIC-1",
    "question": "¿Qué es cierto sobre el archivo /etc/localtime?",
    "options": [
      "Es un archivo de texto plano que contiene una cadena como Europa/Berlín.",
      "Lo crea y lo mantiene el servicio NTP en función de la ubicación de la dirección IP del sistema.",
      "Es un enlace simbólico a /sys/device/clock/ltime y siempre contiene la hora local actual.",
      "Después de cambiar este archivo, se debe ejecutar newtzconfig para que los cambios sean efectivos.",
      "Es un enlace simbólico o una copia de un archivo de información de zona horaria como /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 314,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a las unidades de temporizador systemd?",
    "options": [
      "Las unidades de temporizador solo se pueden definir dentro del archivo de una unidad de servicio.",
      "El comando ejecutado por el temporizador se especifica en la sección [Cmd] de la unidad del temporizador.",
      "Un servicio de sistema dedicado, systemd-cron, maneja la ejecución de unidades de temporizador.",
      "Las unidades de temporizador solo existen en el ámbito del sistema y no están disponibles para los usuarios.",
      "Cada unidad de temporizador systemd controla una unidad de servicio systemd específica."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 315,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes campos están disponibles en el formato estándar tanto del archivo global /etc/crontab como en archivos crontab específicos del usuario? (Elija dos.)",
    "options": [
      "Año",
      "Minuto",
      "Nombre de usuario",
      "ID de grupo efectivo",
      "Dominio"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 316,
    "category": "LPIC-1",
    "question": "¿Qué opción en el archivo de configuración de chrony cambia el intervalo inicial de sondeos a un servidor NTP para acelerar la sincronización inicial?",
    "options": [
      "iburst",
      "quickstart",
      "fast",
      "fsync",
      "flood"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 317,
    "category": "LPIC-1",
    "question": "¿Por qué es importante la correcta configuración de la zona horaria de un sistema?",
    "options": [
      "Debido a que la zona horaria se incluye en los cálculos de suma de verificación y los cambios de zona horaria invalidan las sumas de verificación existentes.",
      "Porque la zona horaria se guarda como parte de las horas de modificación de los archivos y no se puede cambiar después de crear un archivo.",
      "Porque las variables de entorno LANG y LC_MESSAGES se configuran, de forma predeterminada, según la zona horaria.",
      "Porque NTP elige servidores cercanos según la zona horaria configurada.",
      "Porque la conversión de marcas de tiempo de Unix a hora local depende de la configuración de la zona horaria."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 318,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos enumera todos los trabajos de impresión en cola?",
    "options": [
      "lpd",
      "lpr",
      "lp",
      "lsq",
      "lpq"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 319,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes entradas en /etc/syslog.conf escribe todos los eventos relacionados con el correo en el archivo /var/log/maillog y envía todos los eventos críticos al servidor remoto logger.example.com?",
    "options": [
      "correo.* /var/log/maillog correo,crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit syslog://logger.example.org",
      "correo /var/log/maillog correo.crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit @logger.example.org",
      "correo * /var/log/maillog correo crítico @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 320,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes protocolos está relacionado con el término retransmisión abierta?",
    "options": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 321,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes operadores de comparación para pruebas funciona en elementos del sistema de archivos? (Elija dos.)",
    "options": [
      "–z",
      "–eq",
      "–d",
      "–f",
      "–lt"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 322,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos de configuración debería modificarse para establecer globalmente variables de shell para todos los usuarios?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 323,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce el comando secuencia 10?",
    "options": [
      "Un flujo continuo de números que aumenta en incrementos de 10 hasta que se detiene el comando.",
      "No crea ningún resultado porque falta un segundo parámetro.",
      "El número del 0 al 9 con un número por línea.",
      "El número 10 a la salida estándar.",
      "Los números del 1 al 10 con un número por línea."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 324,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para limitar la cantidad de memoria que puede utilizar un usuario?",
    "options": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 325,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito de una clave de host SSH?",
    "options": [
      "Debe ser enviado por cualquier cliente SSH además de una clave de usuario para identificar el host del cliente.",
      "Es la clave raíz mediante la cual se deben firmar todas las claves SSH de los usuarios.",
      "Proporciona la información de identidad del servidor para conectar clientes SSH.",
      "Autentica a cualquier usuario que inicie sesión en una máquina remota desde el host de la clave.",
      "Lo utilizan servicios del sistema como cron, syslog o una tarea de respaldo para conectarse automáticamente a hosts remotos."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 326,
    "category": "LPIC-1",
    "question": "Dado el siguiente extracto de la configuración de sudo: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk ¿Cuál de las siguientes afirmaciones es verdadera? (Elija tres.)",
    "options": [
      "Jane puede ejecutar /bin/id sólo después de especificar su contraseña.",
      "Jane puede ejecutar /sbin/fdisk después de especificar la contraseña de root.",
      "Jane puede ejecutar /sbin/fdisk después de especificar su contraseña.",
      "Jane puede ejecutar /bin/kill sin especificar una contraseña.",
      "Jane puede ejecutar /bin/id sin especificar su contraseña."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 327,
    "category": "LPIC-1",
    "question": "¿Qué archivo de configuración contiene las opciones predeterminadas para clientes SSH?",
    "options": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 328,
    "category": "LPIC-1",
    "question": "Dependiendo de la configuración de un sistema, ¿cuál de los siguientes archivos se puede utilizar para habilitar y deshabilitar los servicios de red que se ejecutan en este host?",
    "options": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 329,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos precarga y administra claves SSH existentes que se utilizan para la autenticación automática al iniciar sesión en máquinas de pedido que utilizan SSH?",
    "options": [
      "sshd",
      "ssh-keyring",
      "ssh-keygen",
      "ssh-pki",
      "ssh-agent"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 330,
    "category": "LPIC-1",
    "question": "¿Cuántas direcciones IP se pueden usar para hosts únicos dentro de la subred IPv4 192.168.2.128/26?",
    "options": [
      "6",
      "14",
      "30",
      "62",
      "126"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 331,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes redes IPv4 están reservadas por la IANA para la asignación de direcciones privadas y el enrutamiento privado? (Elija tres.)",
    "options": [
      "10.0.0.0/8",
      "127.0.0.0/8",
      "169.255.0.0/16",
      "172.16.0.0/12",
      "192.168.0.0/16"
    ],
    "correct": [
      0,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 332,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos configura interfaces de red en función de los archivos de configuración específicos de la distribución existentes en el sistema? (Elija dos.)",
    "options": [
      "ifconf",
      "ifdown",
      "ifpause",
      "ifstart",
      "ifup"
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 333,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera si el UID de un usuario normal es idéntico al GID de un grupo?",
    "options": [
      "Los UID tienen prioridad sobre los GID, por lo tanto, el usuario está disponible mientras que el grupo no.",
      "Ni el usuario ni el grupo están disponibles para evitar ambigüedades debido al conflicto de ID.",
      "Los UID y GID son independientes entre sí, por lo tanto, tanto el usuario como el grupo siguen estando disponibles.",
      "El usuario es el único miembro del grupo, incluso si la configuración del grupo contiene otros miembros.",
      "Los GID tienen prioridad sobre los UID, por lo tanto, el grupo está disponible mientras que el usuario no."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 334,
    "category": "LPIC-1",
    "question": "¿Cuál de la siguiente información se almacena en /etc/shadow para cada usuario?",
    "options": [
      "La marca de tiempo del último inicio de sesión del usuario.",
      "Las claves SSH privadas del usuario",
      "La contraseña hash del usuario.",
      "El ID de usuario numérico (UID)",
      "La ruta al directorio de inicio del usuario."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 335,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todos los temporizadores systemd activos?",
    "options": [
      "systemctl-timer show",
      "timectl list",
      "systemctl –t",
      "systemctl list-timers",
      "timeq"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 336,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes tareas puede realizar el comando de fecha? (Elija dos.)",
    "options": [
      "Configure la fecha y hora del sistema.",
      "Configure la fecha del sistema pero no la hora.",
      "Calcula el lapso de tiempo entre dos fechas.",
      "Imprime un calendario para un mes o un año.",
      "Mostrar la hora en un formato específico."
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 337,
    "category": "LPIC-1",
    "question": "¿Qué se puede especificar con useradd? (Elija dos.)",
    "options": [
      "Comandos que el usuario puede ejecutar usando sudo.",
      "La ruta absoluta al directorio de inicio del usuario.",
      "Qué impresoras están disponibles para el nuevo usuario.",
      "Las claves SSH utilizadas para iniciar sesión en la nueva cuenta.",
      "El ID de usuario numérico (UID) del usuario."
    ],
    "correct": [
      1,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 338,
    "category": "LPIC-1",
    "question": "¿Qué es cierto sobre el archivo /etc/localtime?",
    "options": [
      "Es un archivo de texto plano que contiene una cadena como Europa/Berlín.",
      "Lo crea y lo mantiene el servicio NTP en función de la ubicación de la dirección IP del sistema.",
      "Es un enlace simbólico a /sys/device/clock/ltime y siempre contiene la hora local actual.",
      "Después de cambiar este archivo, se debe ejecutar newtzconfig para que los cambios sean efectivos.",
      "Es un enlace simbólico o una copia de un archivo de información de zona horaria como /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 339,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es cierta con respecto a las unidades de temporizador systemd?",
    "options": [
      "Las unidades de temporizador solo se pueden definir dentro del archivo de una unidad de servicio.",
      "El comando ejecutado por el temporizador se especifica en la sección [Cmd] de la unidad del temporizador.",
      "Un servicio de sistema dedicado, systemd-cron, maneja la ejecución de unidades de temporizador.",
      "Las unidades de temporizador solo existen en el ámbito del sistema y no están disponibles para los usuarios.",
      "Cada unidad de temporizador systemd controla una unidad de servicio systemd específica."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 340,
    "category": "LPIC-1",
    "question": "¿Cuáles de los siguientes campos están disponibles en el formato estándar tanto del archivo global /etc/crontab como en archivos crontab específicos del usuario? (Elija dos.)",
    "options": [
      "Año",
      "Minuto",
      "Nombre de usuario",
      "ID de grupo efectivo",
      "Dominio"
    ],
    "correct": [
      1,
      3
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 341,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se debe ejecutar al iniciar un shell de inicio de sesión para cambiar el idioma de los mensajes de un programa internacionalizado al portugués (pt)?",
    "options": [
      "exportar IDIOMA = “pt”",
      "exportar LC_MESSAGES=“pt”",
      "exportar UI_MESSAGES=“pt”",
      "exportar MENSAJE = “pt”",
      "exportar ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 342,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos asigna un usuario a su grupo principal?",
    "options": [
      "/etc/pgroup",
      "/etc/shadow",
      "/etc/passwd",
      "/etc/group",
      "/etc/gshadow"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 343,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes entradas en /etc/syslog.conf escribe todos los eventos relacionados con el correo en el archivo /var/log/maillog y envía todos los eventos críticos al servidor remoto logger.example.com?",
    "options": [
      "correo.* /var/log/maillog correo,crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit syslog://logger.example.org",
      "correo /var/log/maillog correo.crit @logger.example.org",
      "correo.* /var/log/maillog correo.crit @logger.example.org",
      "correo * /var/log/maillog correo crítico @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 344,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes protocolos está relacionado con el término retransmisión abierta?",
    "options": [
      "SMTP",
      "POP3",
      "NTP",
      "IMAP",
      "LDAP"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 345,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra todas las variables de entorno y shell?",
    "options": [
      "getargs",
      "lsenv",
      "ls",
      "env",
      "lsshell"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 346,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes operadores de comparación para pruebas funciona en elementos del sistema de archivos? (Elija dos.)",
    "options": [
      "–z",
      "–eq",
      "–d",
      "–f",
      "–lt"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 347,
    "category": "LPIC-1",
    "question": "¿Qué información proporciona el comando echo $$?",
    "options": [
      "El ID del proceso del shell actual.",
      "El ID del proceso para el siguiente comando.",
      "El ID del proceso del último comando ejecutado.",
      "El ID del proceso del último comando que se colocó en segundo plano.",
      "El ID del proceso del comando echo."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 348,
    "category": "LPIC-1",
    "question": "¿Qué comando hace que la variable del shell denominada VARIABLE sea visible para los subshells?",
    "options": [
      "exportar $VARIABLE",
      "env VARIABLE",
      "establecer $VARIABLE",
      "establecer VARIABLE",
      "exportar VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 349,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce la siguiente secuencia de comandos? eco '1 2 3 4 5 6' | mientras lee a b c; hacer eco del resultado $c $b $a; hecho",
    "options": [
      "resultado: 6 5 4",
      "resultado: 1 2 3 4 5 6",
      "resultado: 3 4 5 6 2 1",
      "resultado: 6 5 4 3 2 1",
      "resultado: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 350,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos de configuración debería modificarse para establecer globalmente variables de shell para todos los usuarios?",
    "options": [
      "/etc/profile",
      "/etc/bashrc",
      "~/.bash_profile",
      "/etc/.bashrc",
      "/etc/shellenv"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 351,
    "category": "LPIC-1",
    "question": "¿Qué resultado produce el comando secuencia 10?",
    "options": [
      "Un flujo continuo de números que aumenta en incrementos de 10 hasta que se detiene el comando.",
      "No crea ningún resultado porque falta un segundo parámetro.",
      "El número del 0 al 9 con un número por línea.",
      "El número 10 a la salida estándar.",
      "Los números del 1 al 10 con un número por línea."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 352,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos se puede utilizar para limitar la cantidad de memoria que puede utilizar un usuario?",
    "options": [
      "umask",
      "usermod",
      "passwd",
      "ulimit",
      "chage"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 353,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito de una clave de host SSH?",
    "options": [
      "Debe ser enviado por cualquier cliente SSH además de una clave de usuario para identificar el host del cliente.",
      "Es la clave raíz mediante la cual se deben firmar todas las claves SSH de los usuarios.",
      "Proporciona la información de identidad del servidor para conectar clientes SSH.",
      "Autentica a cualquier usuario que inicie sesión en una máquina remota desde el host de la clave.",
      "Lo utilizan servicios del sistema como cron, syslog o una tarea de respaldo para conectarse automáticamente a hosts remotos."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 354,
    "category": "LPIC-1",
    "question": "¿Cuál es el propósito del contenedor TCP?",
    "options": [
      "Administrar y ajustar el ancho de banda utilizado por los servicios TCP.",
      "Vincular un servicio de red a un puerto TCP.",
      "Encapsule mensajes TCP en paquetes IP.",
      "Agregue soporte SSL a servicios TCP de texto sin formato.",
      "Limitar el acceso a un servicio de red."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 355,
    "category": "LPIC-1",
    "question": "Dado el siguiente extracto de la configuración de sudo: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk ¿Cuál de las siguientes afirmaciones es verdadera? (Elija tres.)",
    "options": [
      "Jane puede ejecutar /bin/id sólo después de especificar su contraseña.",
      "Jane puede ejecutar /sbin/fdisk después de especificar la contraseña de root.",
      "Jane puede ejecutar /sbin/fdisk después de especificar su contraseña.",
      "Jane puede ejecutar /bin/kill sin especificar una contraseña.",
      "Jane puede ejecutar /bin/id sin especificar su contraseña."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 356,
    "category": "LPIC-1",
    "question": "¿Qué archivo de configuración contiene las opciones predeterminadas para clientes SSH?",
    "options": [
      "/etc/ssh/sshd_config",
      "/etc/ssh/ssh",
      "/etc/ssh/ssh_config",
      "/etc/ssh/client",
      "/etc/ssh/ssh_client"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 357,
    "category": "LPIC-1",
    "question": "Dependiendo de la configuración de un sistema, ¿cuál de los siguientes archivos se puede utilizar para habilitar y deshabilitar los servicios de red que se ejecutan en este host?",
    "options": [
      "/etc/profile",
      "/etc/xinetd.conf",
      "/etc/ports",
      "/etc/services",
      "/etc/host.conf"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 358,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos puede identificar el PID de un proceso que abrió un puerto TCP?",
    "options": [
      "ptrace",
      "strace",
      "debug",
      "lsof",
      "nessus"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 359,
    "category": "LPIC-1",
    "question": "El archivo de configuración de X11 xorg.conf está agrupado en una sección. ¿Cómo se representa el contenido de la sección Nombre de la sección?",
    "options": [
      "Se coloca entre llaves como en Sección Nombre de Sección {…}.",
      "Se coloca entre las etiquetas <Section name=“SectionName”> y </Section>.",
      "Se coloca entre una línea que contiene la Sección “Nombre de la Sección” y una línea que contiene la Sección Final.",
      "Se coloca después de la fila [Nombre de la sección].",
      "Se coloca después de una sección inicial sin sangría, “Nombre de sección”, y debe tener exactamente un carácter de tabulación."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 360,
    "category": "LPIC-1",
    "question": "¿Cuáles de las siguientes características proporciona SPICE? (Elija dos.)",
    "options": [
      "Conexión de dispositivos USB locales a aplicaciones remotas.",
      "Acceder a aplicaciones gráficas en un host remoto.",
      "Reemplazo de Xorg como servidor X11 local.",
      "Descargar e instalar aplicaciones localmente desde una máquina remota.",
      "Cargar y ejecutar un programa binario en una máquina remota."
    ],
    "correct": [
      0,
      3
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 361,
    "category": "LPIC-1",
    "question": "¿Qué se almacena en el diario systemd?",
    "options": [
      "/var/jlog/ and /var/jlogd/",
      "/proc/log/ and /proc/klog/",
      "/run/log/journal/ or /var/log/journal/",
      "/var/log/syslog.bin or /var/log/syslog.jrn",
      "/etc/systemd/journal/ or /usr/lib/systemd/journal/"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 362,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes afirmaciones es verdadera respecto al comando sendmail?",
    "options": [
      "Con cualquier MTA, el demonio cron debe ejecutar periódicamente el comando sendmail.",
      "Cuando se usa systemd, sendmail es un alias de retransmisión.",
      "El comando sendmail imprime el historial de la cola del MTA sobre qué correos se han enviado correctamente.",
      "Sólo está disponible cuando está instalado el MTA de sendmail.",
      "Todos los MTA comunes, incluidos Postfix y Exim, proporcionan un comando de envío de correo."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 363,
    "category": "LPIC-1",
    "question": "¿Qué archivo dentro del directorio de configuración de CUPS contiene la configuración de las impresoras?",
    "options": [
      "cups-devices.conf",
      "snmp.conf",
      "printers.conf",
      "printcap.conf",
      "cupsd.conf"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 364,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes parámetros se utiliza para que journalctl limite el período de tiempo de salida? (Elija dos.)",
    "options": [
      "--since=",
      "--from=",
      "--until=",
      "--upto=",
      "--date="
    ],
    "correct": [
      0,
      2
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 365,
    "category": "LPIC-1",
    "question": "¿Qué es cierto con respecto al archivo ~/.forward?",
    "options": [
      "Cuando se configura correctamente ~/.forward se puede utilizar para reenviar cada correo entrante a uno o más destinatarios.",
      "Después de editar ~/.forward, el usuario debe ejecutar newaliases para que el servidor de correo esté al tanto de los cambios.",
      "Usando ~/.forward, root puede configurar cualquier dirección de correo electrónico mientras que todos los demás usuarios pueden configurar solo sus propias direcciones.",
      "Como ~/.forward es propiedad del MTA y el usuario no puede escribirlo, debe editarse utilizando el comando editaliases.",
      "De forma predeterminada, solo se procesan los archivos ~/.forward de los usuarios del grupo mailq, mientras que se ignoran los archivos ~/.forward de todos los demás usuarios."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 366,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra una lista de trabajos en la cola de impresión? (Elija dos.)",
    "options": [
      "cups --list",
      "lprm -l",
      "lpstat",
      "lpr -q",
      "lpq"
    ],
    "correct": [
      2,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 367,
    "category": "LPIC-1",
    "question": "En un sistema que utiliza systemd-journald, ¿cuál de los siguientes comandos agrega el mensaje Hola al registro del sistema? (Elija dos.)",
    "options": [
      "anexar Hola",
      "registrador Hola",
      "systemd-cat echo Hola",
      "eco Hola > /dev/journal",
      "journalctl agregar Hola"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 368,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes opciones en el archivo de configuración de chrony define fuentes de tiempo remotas? (Elija dos.)",
    "options": [
      "source",
      "clock",
      "remote",
      "pool",
      "server"
    ],
    "correct": [
      3,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 369,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes situaciones observa y corrige un cliente NTP?",
    "options": [
      "El desfase temporal entre el reloj del sistema y el reloj del hardware de la computadora.",
      "La ubicación física y la configuración de la zona horaria.",
      "Cambios en la zona horaria de la ubicación actual de la computadora.",
      "Se necesita ajuste para admitir el horario de verano.",
      "El desfase temporal entre el reloj del sistema y el reloj de referencia."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 370,
    "category": "LPIC-1",
    "question": "Si existe un alias ls, ¿cuál de los siguientes comandos actualiza el alias para que apunte al comando ls -l en lugar del destino actual del alias?",
    "options": [
      "set ls=’ls -l’",
      "alias ls=’ls -l’",
      "alias --force ls=’ls -l’",
      "alias --actualizar ls ls=’ls -l’",
      "realias ls=’ls -l’"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 371,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos coloca la salida del comando fecha en la variable de shell mydate?",
    "options": [
      "mydate=”date”",
      "mydate=”exec date”",
      "mydate=”$((date))”",
      "mydate=”$(date)”",
      "mydate=”${date}”"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 372,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes archivos no es leído directamente por un shell de inicio de sesión de Bash?",
    "options": [
      "~/.bashrc",
      "~/.bash_profile",
      "~/.bash_login",
      "~/.profile",
      "/etc/profile"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 373,
    "category": "LPIC-1",
    "question": "¿Qué es cierto acerca del archivo .profile en el directorio de inicio de un usuario?",
    "options": [
      "Debe ser ejecutable.",
      "Debe llamar al binario del shell de inicio de sesión.",
      "Debe utilizar una sintaxis de script de shell válida.",
      "Debe comenzar con un tinglado.",
      "Debe ser legible únicamente para su propietario."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 374,
    "category": "LPIC-1",
    "question": "¿Cómo funciona el comando ping de forma predeterminada?",
    "options": [
      "Envía una solicitud de eco ICMP a un host remoto y espera recibir una respuesta de eco ICMP a cambio.",
      "Envía una solicitud ARP a un host remoto y espera recibir una respuesta ARP a cambio.",
      "Envía un paquete TCP SYN a un host remoto y espera recibir una respuesta TCP ACK a cambio.",
      "Envía un paquete de difusión a todos los hosts de la red y espera recibir, entre otras cosas, una respuesta del sistema de destino.",
      "Envía un paquete UDP al puerto 0 del host remoto y espera recibir a cambio una respuesta de error UDP."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 375,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos muestra la cantidad de bytes transmitidos y recibidos a través de la interfaz de red eth0? (Elija dos.)",
    "options": [
      "ruta -v vía eth0",
      "Las estadísticas de IP muestran dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "enlace ip -s muestra eth0"
    ],
    "correct": [
      2,
      3
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 376,
    "category": "LPIC-1",
    "question": "Dada la siguiente tabla de enrutamiento: ¿Cómo se manejaría un paquete saliente al destino 192.168.2.150?",
    "options": [
      "Se pasaría al enrutador predeterminado 192.168.178.1 en wlan0.",
      "Se transmitiría directamente en el dispositivo eth0.",
      "Se pasaría al enrutador predeterminado 255.255.255.0 en eth0.",
      "Se pasaría al enrutador 192.168.1.1 en eth0.",
      "Se transmitiría directamente en el dispositivo wlan0."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 377,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos eliminará la puerta de enlace predeterminada de la tabla de enrutamiento IP del sistema? (Elija dos.)",
    "options": [
      "ifconfig unset default",
      "route del default",
      "ruta ip predeterminada",
      "netstat -r default",
      "sysctl ipv4.default_gw=0"
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 378,
    "category": "LPIC-1",
    "question": "¿Qué puerto TCP estandarizado utilizan los servicios HTTPS?",
    "options": [
      "25",
      "80",
      "8080",
      "443",
      "636"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 379,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes variables de entorno se puede definir en locale.conf? (Elija dos.)",
    "options": [
      "LC_ALL",
      "LC_NOMBRE DE USUARIO",
      "LC_UTF8",
      "LC_GEOGRAFÍA",
      "LC_TIME"
    ],
    "correct": [
      0,
      4
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 380,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes comandos establece la zona horaria del sistema en la hora del este de Canadá?",
    "options": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz=’Canadá/Este’",
      "modprobe tz_ca_est",
      "ln -sf /usr/share/zoneinfo/Canada/Eastern /etc/localtime"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 381,
    "category": "LPIC-1",
    "question": "¿Qué archivo contiene los datos del último cambio de contraseña de un usuario?",
    "options": [
      "/etc/gshadow",
      "/etc/passwd",
      "/etc/pwdlog",
      "/var/log/shadow",
      "/etc/shadow"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 382,
    "category": "LPIC-1",
    "question": "¿Cuál de los siguientes campos se puede encontrar en el archivo /etc/group? (Elija dos.)",
    "options": [
      "El directorio de inicio del grupo.",
      "La lista de usuarios que pertenecen al grupo.",
      "El nombre del grupo.",
      "La ACL del grupo predeterminado.",
      "La descripción del grupo."
    ],
    "correct": [
      1,
      2
    ],
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 383,
    "category": "LPIC-1",
    "question": "¿Cuál de las siguientes secciones existe en una unidad de temporizador systemd?",
    "options": [
      "[Eventos]",
      "[Minutero]",
      "[cron]",
      "[Cronograma]",
      "[Desencadenar]"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  }
];
