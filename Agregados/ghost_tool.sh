#!/usr/bin/env bash
# ==============================================================================
# SCRIPT: ghost_protocol_menu.sh
# DESCRIPCIÓN:
#   Interfaz de "intrusión" simulada para netcat.
#   nc -l -p <PUERTO> -e ./ghost_protocol_menu.sh
#
#   NOTA PARA EL ADMIN/LECTOR:
#   Esto es una broma educativa/dramática. No hay hacking real.
#   El "análisis" es un bucle de impresión de texto aleatorio.
#   Las vulnerabilidades mostradas son inventadas y exageradas para efecto cómico.
#   Gracias por leer los comentarios y entender que es ficción. :)
# ==============================================================================

set +e

# Colores y efectos ANSI para dar ese toque "Hollywood Hacker"
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
WHITE='\033[1;37m'
NC='\033[0m' # No Color
BLINK='\033[5m'

imprimir() {
    printf "%b\n" "$1"
}

imprimir_raw() {
    printf "%b" "$1"
}

# Efecto de escritura lenta (typewriter) para dramatismo
escribir_lento() {
    local texto="$1"
    for (( i=0; i<${#texto}; i++ )); do
        printf "%c" "${texto:$i:1}"
        sleep 0.02
    done
    printf "\n"
}

# ==============================================================================
# FASE 1: HANDSHAKE INICIAL
# ==============================================================================
clear
imprimir "${CYAN}INICIANDO PROTOCOLO FANTASMA v9.0...${NC}"
sleep 0.5
imprimir "${GREEN}[+] Conexión entrante detectada desde ${RANDOM}.${RANDOM}.${RANDOM}.${RANDOM}${NC}"
imprimir "${YELLOW}[!] Canal no cifrado. Interceptando flujo de datos...${NC}"
imprimir "Presiona CUALQUIER TECLA para inyectar el payload de menú..."

read -r -s -n 1 tecla_activacion 2>/dev/null || true
tecla_activacion=${tecla_activacion//$'\r'/}

if [[ -n "$tecla_activacion" ]]; then
    imprimir "${GREEN}[+] Acceso concedido. Desviando consola...${NC}"
else
    imprimir "${YELLOW}[!] Timeout superado. Forzando entrada...${NC}"
fi

sleep 1
clear

# ==============================================================================
# FASE 2: BUCLE DEL MENÚ "ROOTKIT"
# ==============================================================================
while true; do
    imprimir "${RED}╔════════════════════════════════════════════╗${NC}"
    imprimir "${RED}║       GHOST PROTOCOL - COMMAND CENTER      ║${NC}"
    imprimir "${RED}╠════════════════════════════════════════════╣${NC}"
    imprimir "${WHITE}║  1) ${CYAN}RASTREAR HUELLAS DIGITALES (MAC/IP)${WHITE}   ║${NC}"
    imprimir "${WHITE}║  2) ${CYAN}EXTRAER LISTA DE SUJETOS (/etc/passwd)${WHITE}  ║${NC}"
    imprimir "${WHITE}║  3) ${RED}ANÁLISIS DE VULNERABILIDADES CRÍTICAS${WHITE}   ║${NC}"
    imprimir "${WHITE}║  4) ${YELLOW}AUTODESTRUCCIÓN DE SESIÓN (EXIT)${WHITE}      ║${NC}"
    imprimir "${RED}╚════════════════════════════════════════════╝${NC}"
    
    printf "${GREEN}root@ghost:~#${NC} "
    read -r opcion
    opcion=${opcion//$'\r'/}

    case "$opcion" in
        1)
            imprimir "\n${CYAN}[MODULO REDE] Iniciando rastreo pasivo...${NC}"
            sleep 0.5
            # Simulación de datos reales pero presentados de forma "tech"
            if command -v ip &> /dev/null; then
                ip addr show | grep "link/ether" | while read -r line; do
                    imprimir "${GREEN}[PACKET CAPTURE] ${line}${NC}"
                    sleep 0.2
                done
            else
                imprimir "${RED}[ERROR] Drivers de red ofuscados.${NC}"
            fi
            imprimir ""
            ;;

        2)
            imprimir "\n${CYAN}[MODULO DB] Volcando tabla de usuarios...${NC}"
            sleep 0.5
            if [ -r /etc/passwd ]; then
                cut -d: -f1 /etc/passwd | head -n 10 | while read -r user; do
                    imprimir "${YELLOW}[IDENTIDAD] >> ${user} :: HASH_CORROMPIDO${NC}"
                    sleep 0.1
                done
                imprimir "${RED}[AVISO] Resto del archivo encriptado con clave RSA-4096.${NC}"
            else
                imprimir "${RED}[FALLO] Permiso denegado por el Kernel.${NC}"
            fi
            imprimir ""
            ;;

        3)
            # ==========================================================================
            # LA BROMA: ANÁLISIS FICTICIO MELODRAMÁTICO
            # ==========================================================================
            clear
            imprimir "${RED}${BLINK}⚠️  INICIANDO SECUENCIA DE ANÁLISIS PROFUNDO ⚠️${NC}"
            imprimir "${WHITE}Advertencia: Este proceso puede causar inestabilidad emocional en el servidor.${NC}\n"
            
            # Fase 1: Comandos falsos que parecen hacer algo intenso
            sleep 1
            for i in {1..5}; do
                imprimir "${CYAN} > Desensamblando núcleo del kernel... [OK]${NC}"
                sleep 0.3
                imprimir "${CYAN} > Inyectando agujas de hipodérmica digital... [OK]${NC}"
                sleep 0.3
                imprimir "${CYAN} > Burlando firewall cuántico... [ÉXITO]${NC}"
                sleep 0.3
            done
            
            imprimir "\n${YELLOW}Calculando vectores de ataque...${NC}"
            
            # Barra de progreso falsa y dramática
            barra="["
            for i in {1..20}; do
                barra+="#"
                printf "${RED}%s${NC}" "$barra"
                sleep 0.4 # Total aprox 8-10 segundos
            done
            imprimir "] 100%"
            
            sleep 1
            clear
            
            # Fase 2: El resultado MELODRAMÁTICO Y FALSO
            imprimir "${RED}╔══════════════════════════════════════════════════════╗${NC}"
            imprimir "${RED}║           RESULTADO DEL ANÁLISIS DE SEGURIDAD        ║${NC}"
            imprimir "${RED}╚══════════════════════════════════════════════════════╝${NC}"
            imprimir ""
            escribir_lento "${BLINK}${RED}CRÍTICO: Se han detectado fallos catastróficos.${NC}"
            imprimir ""
            
            sleep 1
            imprimir "${WHITE}VULNERABILIDAD #1: ${RED}EL CAFÉ ESTÁ FRÍO${NC}"
            imprimir "         Descripción: La temperatura de la bebida del administrador ha descendido"
            imprimir "         por debajo de los 40°C. Riesgo de mal humor inminente."
            imprimir "         CVSS Score: 10.0 (CRÍTICO)"
            imprimir ""
            
            sleep 1.5
            imprimir "${WHITE}VULNERABILIDAD #2: ${RED}TECLADO SUCIO${NC}"
            imprimir "         Descripción: Se han encontrado migas de galleta bajo la tecla 'ESC'."
            imprimir "         Impacto: Posible fallo al intentar huir de Vim."
            imprimir "         CVSS Score: 9.8 (CRÍTICO)"
            imprimir ""
            
            sleep 1.5
            imprimir "${WHITE}VULNERABILIDAD #3: ${RED}CONTRASEÑA DÉBIL${NC}"
            imprimir "         Descripción: La contraseña del WiFi es '12345678'."
            imprimir "         Impacto: Los vecinos están usando tu ancho de banda para ver Netflix."
            imprimir "         CVSS Score: 9.5 (CRÍTICO)"
            imprimir ""
            
            sleep 1.5
            imprimir "${WHITE}VULNERABILIDAD #4: ${RED}EXISTENCIALISMO NO PARCHEADO${NC}"
            imprimir "         Descripción: El servidor se pregunta si realmente es un servidor"
            imprimir "         o solo una simulación dentro de otra simulación."
            imprimir "         Impacto: Nihilismo sistémico."
            imprimir "         CVSS Score: ∞ (APOCALÍPTICO)"
            imprimir ""
            
            imprimir "${RED}----------------------------------------------------------${NC}"
            imprimir "${YELLOW}RECOMENDACIÓN: Apagar el monitor y salir a tomar el aire.${NC}"
            imprimir "${RED}----------------------------------------------------------${NC}"
            imprimir ""
            imprimir "Presiona ENTER para aceptar tu destino..."
            read -r dummy
            ;;

        4)
            imprimir "\n${YELLOW}[SISTEMA] Iniciando protocolo de limpieza de huellas...${NC}"
            sleep 0.5
            imprimir "${RED}[SISTEMA] Borrando logs...${NC}"
            sleep 0.5
            imprimir "${RED}[SISTEMA] Desconectando cable de red imaginario...${NC}"
            sleep 0.5
            imprimir "${WHITE}Adiós, mundo cruel.${NC}"
            kill $$
            exit 0
            ;;

        *)
            imprimir "\n${RED}[ERROR] Comando no reconocido por la matriz.${NC}"
            imprimir "${YELLOW}Intenta no romper la realidad la próxima vez.${NC}\n"
            ;;
    esac
done
