const questionsDatabaseEN = [
  {
    "id": 1,
    "category": "LPIC-1",
    "question": "Consider the following output from the command ls –i: How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "ln –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 2,
    "category": "LPIC-1",
    "question": "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    "options": [
      "chmod g+s sales",
      "setpol –R newgroup=sales sales",
      "chgrp –p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
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
    "question": "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g staff data.txt",
      "chown --user dave --group staff data.txt",
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
    "question": "When considering the use of hard links, what are valid reasons not to use hard links?",
    "options": [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 5,
    "category": "LPIC-1",
    "question": "In compliance with the FHS, in which of the directories are man pages found?",
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
    "question": "What is the process ID number of the init process on a System V init based system?",
    "options": [
      "-1",
      "0",
      "1",
      "It is different with each reboot",
      "It is set to the current run level"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 7,
    "category": "LPIC-1",
    "question": "Which daemon handles power management events on a Linux system?",
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
    "question": "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
    "options": [
      "Some parts of the boot process can be configured from the BIOS",
      "Linux does not require the assistance of the BIOS to boot a computer",
      "The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
      "The BIOS initiates the boot process after turning the computer on",
      "The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
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
    "question": "A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?",
    "options": [
      "Using lsmod --remove --autoclean without specifying the name of a specific module",
      "Using modinfo –k followed by the name of the offending module",
      "Using modprobe –r followed by the name of the offending module",
      "Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf",
      "Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 10,
    "category": "LPIC-1",
    "question": "When is the content of the kernel ring buffer reset? (Choose two.)",
    "options": [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
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
    "question": "What is the first program the Linux kernel starts at boot time when using System V init?",
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
    "question": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
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
    "question": "Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)",
    "options": [
      "The partitioning scheme",
      "The file system",
      "The D-Bus Machine ID",
      "The permissions of /root/",
      "The SSH host keys"
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
    "question": "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
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
    "question": "What is true regarding the configuration of yum? (Choose two.)",
    "options": [
      "Changes to the repository configuration become active after running yum confupdate",
      "Changes to the yum configuration become active after restarting the yumd service",
      "The configuration of package repositories can be divided into multiple files",
      "Repository configurations can include variables such as $basearch or $releasever",
      "In case /etc/yum.repos.d/ contains files, /etc/yum.conf is ignored"
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
    "question": "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
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
    "question": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L pkgname",
      "dpkg –P pkgname",
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
    "question": "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
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
    "question": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
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
    "question": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    "options": [
      "find /tmp –user root -print",
      "find –path /tmp –uid root",
      "find /tmp –uid root -print",
      "find /tmp –user root",
      "find –path /tmp –user root -print"
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
    "question": "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
    "options": [
      "<",
      "#>",
      "%>",
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
    "question": "Which of the following vi commands deletes two lines, the current and the following line?",
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
    "question": "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run even when the user running the program logs out?",
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
    "question": "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)",
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
    "question": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 26,
    "category": "LPIC-1",
    "question": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    "options": [
      "tr –d ‘\\r’ < userlist.txt > newlist.txt",
      "tr –c ‘\\n\\r’ ‘’ <newlist.txt> userlist.txt",
      "tr ‘\\r\\n’ ‘’ <userlist.txt> newlist.txt",
      "tr ‘\\r’ ‘\\n’ userlist.txt newlist.txt",
      "tr –s ‘/^M/^J/’ userlist.txt newlist.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 27,
    "category": "LPIC-1",
    "question": "What output will be displayed when the user fred executes the following command? echo ‘fred $USER’",
    "options": [
      "fred fred",
      "fred /home/fred/",
      "‘fred $USER’",
      "fred $USER",
      "‘fred fred’"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 28,
    "category": "LPIC-1",
    "question": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
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
    "question": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
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
    "question": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
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
    "question": "Which of the following files, located in a user’s home directory, contains the Bash history?",
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
    "question": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
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
    "question": "Which of the following commands redirects the output of ls to standard error?",
    "options": [
      "ls >-1",
      "ls <<ERR",
      "ls >&2",
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
    "question": "Which of the following commands displays the contents of a gzip compressed tar archive?",
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
    "question": "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    "options": [
      "fmt –f 1,4 /etc/passwd",
      "cut –d : -f 1,4 /etc/passwd",
      "sort –t : -k 1,4 /etc/passwd",
      "paste –f 1,4 /etc/passwd",
      "split –c 1,4 /etc/passwd"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 36,
    "category": "LPIC-1",
    "question": "Which of the following regular expressions represents a single upper-case letter?",
    "options": [
      ":UPPER:",
      "[A-Z]",
      "!a-z",
      "%C",
      "{AZ}"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 37,
    "category": "LPIC-1",
    "question": "The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?",
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
    "question": "Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)",
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
    "question": "What is the purpose of the ldd command?",
    "options": [
      "It lists which shared libraries a binary needs to run.",
      "It installs and updates installed shared libraries.",
      "It turns a dynamically linked binary into a static binary.",
      "It defines which version of a library should be used by default.",
      "It runs a binary with an alternate library search path."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 40,
    "category": "LPIC-1",
    "question": "What can the Logical Volume Manager (LVM) be used for? (Choose three.)",
    "options": [
      "To create snapshots.",
      "To dynamically change the size of logical volumes.",
      "To dynamically create or delete logical volumes.",
      "To create RAID 9 arrays.",
      "To encrypt logical volumes."
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
    "question": "What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)",
    "options": [
      "MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.",
      "By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.",
      "By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.",
      "MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.",
      "Both GPT and MBR support up to four primary partitions, each with up to 4096 TB."
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
    "question": "A backup software heavily uses hard links between files which have not been changed in between two backup runs. Which benefits are realized due to these hard links? (Choose two.)",
    "options": [
      "The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups.",
      "The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time.",
      "The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation.",
      "The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies.",
      "The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data."
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
    "question": "How many fields are in a syntactically correct line of /etc/fstab?",
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
    "question": "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
    "options": [
      "filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.",
      "filea.txt is a symbolic link whose permissions are a fixed value which cannot be charged.",
      "filea.txt has the sticky bit set and a regular user cannot remove this permission.",
      "filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.",
      "filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."
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
    "question": "Which of the following commands show how the shell handles a specific command?",
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
    "question": "Which of the following commands displays the manual page command from section 1?",
    "options": [
      "man command(1)",
      "man command@1",
      "man 1 command",
      "man 1.command",
      "man -s 1 command"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 47,
    "category": "LPIC-1",
    "question": "Which of the following commands creates or, in case it already exists, overwrites a file called data with the output of ls?",
    "options": [
      "ls 3> data",
      "ls >& data",
      "ls > data",
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
    "question": "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
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
    "question": "Which of the following commands outputs test to the shell?",
    "options": [
      "cat <!EOT test EOT",
      "cat <|EOT test EOT",
      "cat !<EOT test EOT",
      "cat &<EOT test EOT",
      "cat <<EOT test EOT"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 50,
    "category": "LPIC-1",
    "question": "What is the default nice level when a process is started using the nice command?",
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
    "question": "A user accidentally created the subdirectory \\dir in his home directory. Which of the following commands will remote that directory?",
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
    "question": "Which of the following commands can perform searches on file contents using regular expressions?",
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
    "question": "Which of the following commands determines a file’s format by using a definition database file which contains information about all common file types?",
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
    "question": "Which of the following commands generates a list of user names from /etc/passwd along with their login shell?",
    "options": [
      "column -s : 1,7 /etc/passwd",
      "chop -c 1,7 /etc/passwd",
      "colrm 1,7 /etc/passwd",
      "sort -t: -k1,7 /etc/passwd",
      "cut -d: -f1,7 /etc/passwd"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 55,
    "category": "LPIC-1",
    "question": "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present in the current directory after running gunzip texts.tgz?",
    "options": [
      "Only a.txt, b.txt, and texts.tgz",
      "Only texts.tar and texts.tgz",
      "Only a.txt.gz and b.txt.gz",
      "Only a.txt and b.txt",
      "Only texts.tar"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 56,
    "category": "LPIC-1",
    "question": "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
    "options": [
      "Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.",
      "Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.",
      "Investigating the file /var/log on the computer’s hard disk for possible errors.",
      "Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.",
      "Rebooting again from the hard drive since the system successfully booted from the rescue CD."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Actualtests.101-500.v2019-12-09.by_.Alex_.59q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 57,
    "category": "LPIC-1",
    "question": "Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?",
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
    "question": "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    "options": [
      "tune2fs –d 200 /dev/sda1",
      "tune2fs –i 200 /dev/sda1",
      "tune2fs –c 200 /dev/sda1",
      "tune2fs –n 200 /dev/sda1",
      "tune2fs --days 200 /dev/sda1"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 59,
    "category": "LPIC-1",
    "question": "Which is the default percentage of reserved space for the root user on new ext4 filesystems?",
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
    "question": "What does the command mount --bind do?",
    "options": [
      "It makes the contents of one directory available in another directory",
      "It mounts all available filesystems to the current directory",
      "It mounts all user mountable filesystems to the user’s home directory",
      "It mounts all file systems listed in /etc/fstab which have the option userbind set",
      "It permanently mounts a regular file to a directory"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 61,
    "category": "LPIC-1",
    "question": "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    "options": [
      "chmod g+s sales",
      "setpol –R newgroup=sales sales",
      "chgrp –p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
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
    "question": "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
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
    "question": "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g staff data.txt",
      "chown --user dave --group staff data.txt",
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
    "question": "When considering the use of hard links, what are valid reasons not to use hard links?",
    "options": [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 65,
    "category": "LPIC-1",
    "question": "Which daemon handles power management events on a Linux system?",
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
    "question": "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
    "options": [
      "Some parts of the boot process can be configured from the BIOS",
      "Linux does not require the assistance of the BIOS to boot a computer",
      "The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
      "The BIOS initiates the boot process after turning the computer on",
      "The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
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
    "question": "What is true regarding UEFI firmware? (Choose two.)",
    "options": [
      "It can read and interpret partition tables",
      "It can use and read certain file systems",
      "It stores its entire configuration on the /boot/ partition",
      "It is stored in a special area within the GPT metadata",
      "It is loaded from a fixed boot disk position"
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
    "question": "When is the content of the kernel ring buffer reset? (Choose two.)",
    "options": [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
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
    "question": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
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
    "question": "What is contained on the EFI System Partition?",
    "options": [
      "The Linux root file system",
      "The first stage boot loader",
      "The default swap space file",
      "The Linux default shell binaries",
      "The user home directories"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 71,
    "category": "LPIC-1",
    "question": "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
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
    "question": "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
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
    "question": "Which of the following partition types is used for Linux swap spaces when partitioning hard disk drives?",
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
    "question": "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
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
    "question": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L pkgname",
      "dpkg –P pkgname",
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
    "question": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
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
    "question": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    "options": [
      "find /tmp –user root -print",
      "find –path /tmp –uid root",
      "find /tmp –uid root -print",
      "find /tmp –user root",
      "find –path /tmp –user root -print"
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
    "question": "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
    "options": [
      "<",
      "#>",
      "%>",
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
    "question": "Which of the following vi commands deletes two lines, the current and the following line?",
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
    "question": "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run even when the user running the program logs out?",
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
    "question": "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)",
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
    "question": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 83,
    "category": "LPIC-1",
    "question": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    "options": [
      "tr –d ‘\\r’ < userlist.txt > newlist.txt",
      "tr –c ‘\\n\\r’ ‘’ <newlist.txt> userlist.txt",
      "tr ‘\\r\\n’ ‘’ <userlist.txt> newlist.txt",
      "tr ‘\\r’ ‘\\n’ userlist.txt newlist.txt",
      "tr –s ‘/^M/^J/’ userlist.txt newlist.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 84,
    "category": "LPIC-1",
    "question": "Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
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
    "question": "Which command must be entered before exiting vi to save the current file as filea.txt?",
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
    "question": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
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
    "question": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
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
    "question": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
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
    "question": "Which of the following files, located in a user’s home directory, contains the Bash history?",
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
    "question": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
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
    "question": "Which of the following commands displays the contents of a gzip compressed tar archive?",
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
    "question": "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    "options": [
      "fmt –f 1,4 /etc/passwd",
      "cut –d : -f 1,4 /etc/passwd",
      "sort –t : -k 1,4 /etc/passwd",
      "paste –f 1,4 /etc/passwd",
      "split –c 1,4 /etc/passwd"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 93,
    "category": "LPIC-1",
    "question": "Which of the following commands installs the GRUB boot files into the currently active file systems and the boot loader into the first partition of the first disk?",
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
    "question": "Which of the following files are found in the /boot/ file system? (Choose two.)",
    "options": [
      "Linux kernel images",
      "Bash shell binaries",
      "systemd target and service units",
      "Initial ramdisk images",
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
    "question": "When removing a package on a system using dpkg package management, which dpkg option ensures configuration files are removed as well?",
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
    "question": "Which of the following statements are correct when comparing Linux containers with traditional virtual machines (e.g. LXC vs. KVM)? (Choose three.)",
    "options": [
      "Containers are a lightweight virtualization method where the kernel controls process isolation and resource management.",
      "Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine.",
      "Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices.",
      "The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices.",
      "Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution."
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
    "question": "The installation of a local Debian package failed due to unsatisfied dependencies. Which of the following commands installs missing dependencies and completes the interrupted package installation?",
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
    "question": "Which of the following commands lists all currently installed packages when using RPM package management?",
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
    "question": "What is the purpose of the ldd command?",
    "options": [
      "It lists which shared libraries a binary needs to run.",
      "It installs and updates installed shared libraries.",
      "It turns a dynamically linked binary into a static binary.",
      "It defines which version of a library should be used by default.",
      "It runs a binary with an alternate library search path."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 100,
    "category": "LPIC-1",
    "question": "What are the main differences between GPT and MBR partition tables regarding maximum number and size of partitions? (Choose two.)",
    "options": [
      "MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB.",
      "By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions.",
      "By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions.",
      "MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB.",
      "Both GPT and MBR support up to four primary partitions, each with up to 4096 TB."
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
    "question": "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission. What might be a reason why chmod cannot modify the permissions? (Choose two.)",
    "options": [
      "filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file.",
      "filea.txt is a symbolic link whose permissions are a fixed value which cannot be charged.",
      "filea.txt has the sticky bit set and a regular user cannot remove this permission.",
      "filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly.",
      "filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."
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
    "question": "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new filesystem instead of generating them as needed? (Choose two.)",
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
    "question": "Which of the following commands sets the SetUID permission on the executable /bin/foo?",
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
    "question": "Which of the following commands show how the shell handles a specific command?",
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
    "question": "When in Normal mode in vi, which character can be used to begin a reverse search of the text?",
    "options": [
      "r",
      "/",
      "F",
      "?",
      "s"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 106,
    "category": "LPIC-1",
    "question": "Which of the following commands is used to change options and positional parameters within a running Bash shell?",
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
    "question": "Which of the following commands display the IDs of all processes owned by root? (Choose two.)",
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
    "question": "What is the effect of the -v option for the grep command?",
    "options": [
      "It enables color to highlight matching parts.",
      "It shows the command’s version information.",
      "It only outputs non-matching lines.",
      "It changes the output order showing the last matching line first.",
      "It outputs all lines and prefixes matching lines with a+."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 109,
    "category": "LPIC-1",
    "question": "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the keyboard?",
    "options": [
      "SIGTERM",
      "SIGCONT",
      "SIGTSTP",
      "SIGKILL",
      "SIGINT"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 110,
    "category": "LPIC-1",
    "question": "What is the output when the regular expression s/[ABC] [abc]/xx/ is applied to the following string? ABCabc",
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
    "question": "Which of the following commands print the current working directory when using a Bash shell? (Choose two.)",
    "options": [
      "echo “${PWD}”",
      "echo “${WD}”",
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
    "question": "What is the default nice level when a process is started using the nice command?",
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
    "question": "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be issued multiple times or applied to multiple rows?",
    "options": [
      "By using the command :repeat followed by the number and the command",
      "By specifying the number right in front of a command such as 41 or 2yj.",
      "By selecting all affected lines using the shit and cursor keys before applying the command.",
      "By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times.",
      "By specifying the number after a command such as 14 or yj2 followed by escape."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 114,
    "category": "LPIC-1",
    "question": "In Bash, inserting 1>&2 after a command redirects…",
    "options": [
      "…standard error to standard input.",
      "…standard output to standard error.",
      "…standard input to standard error.",
      "…standard error to standard output.",
      "…standard output to standard input."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 115,
    "category": "LPIC-1",
    "question": "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to investigate the problem. Which of the following methods helps to identify the root cause of the problem?",
    "options": [
      "Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs.",
      "Investigating the file /proc/kmsg on the computer’s hard disk for possible errors.",
      "Investigating the file /var/log on the computer’s hard disk for possible errors.",
      "Using chroot to switch to the file system on the hard disk and use dmesg to view the logs.",
      "Rebooting again from the hard drive since the system successfully booted from the rescue CD."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 116,
    "category": "LPIC-1",
    "question": "Where is the bootloader stored on the hard disk of a UEFI system?",
    "options": [
      "In the EFI Boot Record (EBR).",
      "In the Master Boot Record (MBR).",
      "On the EFI System Partition (ESP).",
      "On the partition labeled boot.",
      "On the partition number 127."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 117,
    "category": "LPIC-1",
    "question": "What is the correct way to set the default systemd boot target to multi-user?",
    "options": [
      "systemctl isolate multi-user.target",
      "systemctl set-runlevel multi-user.target",
      "systemctl set-boot multi-user.target",
      "systemctl set-default multi-user.target",
      "systemctl boot -p multi-user.target"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.passguide.101-500.v2020-08-05.by_.aleksandr.63q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 118,
    "category": "LPIC-1",
    "question": "Which of the following commands loads a kernel module along with any required dependency modules?",
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
    "question": "Given the following two symbolic links in a System V init configuration: /etc/rc1.d/K01apache2 /etc/rc2.d/S02apache2 When are the scripts executed that are referenced by these links? (Choose two.)",
    "options": [
      "S02apache2 is run when runlevel 2 is entered.",
      "S02apache2 is run when runlevel 2 is left.",
      "K01apache2 is never run because K indicates a deactivated service.",
      "Both S02apache2 and K01apache2 are run during a system shutdown.",
      "K01apache2 is run when runlevel 1 is entered."
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
    "question": "Which type of file system is created by mkfs when it is executed with the block device name only and without any additional parameters?",
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
    "question": "Which umask value ensures that new directories can be read, written and listed by their owning user, read and listed by their owning group and are not accessible at all for everyone else?",
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
    "question": "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1 has to run through a full filesystem check while booting?",
    "options": [
      "tune2fs –d 200 /dev/sda1",
      "tune2fs –i 200 /dev/sda1",
      "tune2fs –c 200 /dev/sda1",
      "tune2fs –n 200 /dev/sda1",
      "tune2fs --days 200 /dev/sda1"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 123,
    "category": "LPIC-1",
    "question": "Which is the default percentage of reserved space for the root user on new ext4 filesystems?",
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
    "question": "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?",
    "options": [
      "systemd ignores any manual mounts which are not done using the systemctl mount command",
      "The command systemctl mountsync can be used to create a mount unit based on the existing mount",
      "systemd automatically generates a mount unit and monitors the mount point without changing it",
      "Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time",
      "systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 125,
    "category": "LPIC-1",
    "question": "What does the command mount --bind do?",
    "options": [
      "It makes the contents of one directory available in another directory",
      "It mounts all available filesystems to the current directory",
      "It mounts all user mountable filesystems to the user’s home directory",
      "It mounts all file systems listed in /etc/fstab which have the option userbind set",
      "It permanently mounts a regular file to a directory"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 126,
    "category": "LPIC-1",
    "question": "Consider the following output from the command ls –i: How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "ln –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 127,
    "category": "LPIC-1",
    "question": "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    "options": [
      "chmod g+ssales",
      "setpol –R newgroup=sales sales",
      "chgrp –p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
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
    "question": "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
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
    "question": "Which chown command changes the ownership to dave and the group to staff on a file named data.txt?",
    "options": [
      "chown dave/staff data.txt",
      "chown –u dave –g staff data.txt",
      "chown --user dave --group staff data.txt",
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
    "question": "When considering the use of hard links, what are valid reasons not to use hard links?",
    "options": [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 131,
    "category": "LPIC-1",
    "question": "In compliance with the FHS, in which of the directories are man pages found?",
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
    "question": "Which daemon handles power management events on a Linux system?",
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
    "question": "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose two.)",
    "options": [
      "Some parts of the boot process can be configured from the BIOS",
      "Linux does not require the assistance of the BIOS to boot a computer",
      "The BIOS boot process starts only if secondary storage, such as the hard disk, is functional",
      "The BIOS initiates the boot process after turning the computer on",
      "The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
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
    "question": "What is true regarding UEFI firmware? (Choose two.)",
    "options": [
      "It can read and interpret partition tables",
      "It can use and read certain file systems",
      "It stores its entire configuration on the /boot/ partition",
      "It is stored in a special area within the GPT metadata",
      "It is loaded from a fixed boot disk position"
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
    "question": "A faulty kernel module is causing issues with a network interface card. Which of the following actions ensures that this module is not loaded automatically when the system boots?",
    "options": [
      "Using lsmod --remove --autoclean without specifying the name of a specific module",
      "Using modinfo –k followed by the name of the offending module",
      "Using modprobe –r followed by the name of the offending module",
      "Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf",
      "Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 136,
    "category": "LPIC-1",
    "question": "When is the content of the kernel ring buffer reset? (Choose two.)",
    "options": [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
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
    "question": "What is the first program the Linux kernel starts at boot time when using System V init?",
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
    "question": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
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
    "question": "What is contained on the EFI System Partition?",
    "options": [
      "The Linux root file system",
      "The first stage boot loader",
      "The default swap space file",
      "The Linux default shell binaries",
      "The user home directories"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 140,
    "category": "LPIC-1",
    "question": "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)",
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
    "question": "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
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
    "question": "Which of the following commands installs all packages with a name ending with the string foo?",
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
    "question": "Which of the following properties of a Linux system should be changed when a virtual machine is cloned? (Choose two.)",
    "options": [
      "The partitioning scheme",
      "The file system",
      "The D-Bus Machine ID",
      "The permissions of /root/",
      "The SSH host keys"
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
    "question": "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?",
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
    "question": "What is true regarding the configuration of yum? (Choose two.)",
    "options": [
      "Changes to the repository configuration become active after running yum confupdate",
      "Changes to the yum configuration become active after restarting the yumd service",
      "The configuration of package repositories can be divided into multiple files",
      "Repository configurations can include variables such as $basearch or $releasever",
      "In case /etc/yum.repos.d/ contains files, /etc/yum.conf is ignored"
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
    "question": "Which of the following apt-get subcommands installs the newest versions of all currently installed packages?",
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
    "question": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L pkgname",
      "dpkg –P pkgname",
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
    "question": "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
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
    "question": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
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
    "question": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    "options": [
      "find /tmp –user root -print",
      "find –path /tmp –uid root",
      "find /tmp –uid root -print",
      "find /tmp –user root",
      "find –path /tmp –user root -print"
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
    "question": "Which of the following are valid stream redirection operators within Bash? (Choose two.)",
    "options": [
      "<",
      "#>",
      "%>",
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
    "question": "Which of the following vi commands deletes two lines, the current and the following line?",
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
    "question": "The command dbmaint & was used to run dbmaint in the background. However, dbmaint is terminated after logging out of the system. Which alternative dbmaint invocation lets dbmaint continue to run even when the user running the program logs out?",
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
    "question": "From a Bash shell, which of the following commands directly execute the instructions from the file /usr/local/bin/runme.sh without starting a subshell? (Choose two.)",
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
    "question": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 156,
    "category": "LPIC-1",
    "question": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    "options": [
      "tr –d ‘\\r’ < userlist.txt > newlist.txt",
      "tr –c ‘\\n\\r’ ‘’ <newlist.txt> userlist.txt",
      "tr ‘\\r\\n’ ‘’ <userlist.txt> newlist.txt",
      "tr ‘\\r’ ‘\\n’ userlist.txt newlist.txt",
      "tr –s ‘/^M/^J/’ userlist.txt newlist.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 157,
    "category": "LPIC-1",
    "question": "Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
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
    "question": "Which command must be entered before exiting vi to save the current file as filea.txt?",
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
    "question": "Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the keyboard?",
    "options": [
      "SIGTERM",
      "SIGCONT",
      "SIGSTOP",
      "SIGKILL",
      "SIGINT"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 160,
    "category": "LPIC-1",
    "question": "Which of the following commands displays the output of the foo command on the screen and also writes it to a file called /tmp/foodata?",
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
    "question": "What output will be displayed when the user fred executes the following command? echo ‘fred $USER’",
    "options": [
      "fred fred",
      "fred /home/fred/",
      "‘fred $USER’",
      "fred $USER",
      "‘fred fred’"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 162,
    "category": "LPIC-1",
    "question": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
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
    "question": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
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
    "question": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
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
    "question": "What is true regarding the command ls > files if files does not exist?",
    "options": [
      "The output of ls is printed to the terminal",
      "files is created and contains the output of ls",
      "An error message is shown and ls is not executed",
      "The command files is executed and receives the output of ls",
      "Any output of ls is discarded"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 166,
    "category": "LPIC-1",
    "question": "Which of the following files, located in a user’s home directory, contains the Bash history?",
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
    "question": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
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
    "question": "Which of the following commands redirects the output of ls to standard error?",
    "options": [
      "ls >-1",
      "ls <<ERR",
      "ls >&2",
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
    "question": "Which of the following commands displays the contents of a gzip compressed tar archive?",
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
    "question": "Which of the following commands prints a list of usernames (first column) and their primary group (fourth column) from the /etc/passwd file?",
    "options": [
      "fmt –f 1,4 /etc/passwd",
      "cut –d : -f 1,4 /etc/passwd",
      "sort –t : -k 1,4 /etc/passwd",
      "paste –f 1,4 /etc/passwd",
      "split –c 1,4 /etc/passwd"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 171,
    "category": "LPIC-1",
    "question": "Which of the following regular expressions represents a single upper-case letter?",
    "options": [
      ":UPPER:",
      "[A-Z]",
      "!a-z",
      "%C",
      "{AZ}"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 172,
    "category": "LPIC-1",
    "question": "Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters out all log entries in the time period between 8:00 am and 8:59 am?",
    "options": [
      "grep –E ‘:08:[09]+:[09]+’ loga.log",
      "grep –E ‘:08:[00]+’ loga.log",
      "grep –E loga.log ‘:08:[0-9]+:[0-9]+’",
      "grep loga.log ‘:08:[0-9]:[0-9]’",
      "grep –E ‘:08:[0-9]+:[0-9]+’ loga.log"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.101-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 173,
    "category": "LPIC-1",
    "question": "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system, is mounted manually?",
    "options": [
      "systemd ignores any manual mounts which are not done using the systemctl mount command",
      "The command systemctl mountsync can be used to create a mount unit based on the existing mount",
      "systemd automatically generates a mount unit and monitors the mount point without changing it",
      "Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time",
      "systemctl unmount must be used to remove the mount because system opens a file descriptor on the mount point"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 174,
    "category": "LPIC-1",
    "question": "What does the command mount --bind do?",
    "options": [
      "It makes the contents of one directory available in another directory",
      "It mounts all available filesystems to the current directory",
      "It mounts all user mountable filesystems to the user’s home directory",
      "It mounts all file systems listed in /etc/fstab which have the option userbind set",
      "It permanently mounts a regular file to a directory"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 175,
    "category": "LPIC-1",
    "question": "Consider the following output from the command ls –i: How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?",
    "options": [
      "ln –h a.txt c.txt",
      "ln c.txt a.txt",
      "ln a.txt c.txt",
      "ln –f c.txt a.txt",
      "ln –i 525385 c.txt"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 176,
    "category": "LPIC-1",
    "question": "Consider the following directory: drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales Which command ensures new files created within the directory sales are owned by the group sales? (Choose two.)",
    "options": [
      "chmod g+s sales",
      "setpol –R newgroup=sales sales",
      "chgrp –p sales sales",
      "chown --persistent *.sales sales",
      "chmod 2775 sales"
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
    "question": "In order to display all currently mounted filesystems, which of the following commands could be used? (Choose two.)",
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
    "question": "When considering the use of hard links, what are valid reasons not to use hard links?",
    "options": [
      "Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them",
      "Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content",
      "Hard links are specific to one filesystem and cannot point to files on another filesystem",
      "If users other than root should be able to create hard links, suln has to be installed and configured",
      "When a hard linked file is changed, a copy of the file is created and consumes additional space"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 179,
    "category": "LPIC-1",
    "question": "In compliance with the FHS, in which of the directories are man pages found?",
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
    "question": "What is the process ID number of the init process on a System V init based system?",
    "options": [
      "-1",
      "0",
      "1",
      "It is different with each reboot",
      "It is set to the current run level"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 181,
    "category": "LPIC-1",
    "question": "When is the content of the kernel ring buffer reset? (Choose two.)",
    "options": [
      "When the ring buffer is explicitly reset using the command dmesg --clear",
      "When the ring buffer is read using dmesg without any additional parameters",
      "When a configurable amount of time, 15 minutes by default, has passed",
      "When the kernel loads a previously unloaded kernel module",
      "When the system is shut down or rebooted"
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
    "question": "What is the first program the Linux kernel starts at boot time when using System V init?",
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
    "question": "A Debian package creates several files during its installation. Which of the following commands searches for packages owning the file /etc/debian_version?",
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
    "question": "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose two.)",
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
    "question": "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)",
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
    "question": "Which of the following commands installs all packages with a name ending with the string foo?",
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
    "question": "Which command uninstalls a package but keeps its configuration files in case the package is re-installed?",
    "options": [
      "dpkg –s pkgname",
      "dpkg –L pkgname",
      "dpkg –P pkgname",
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
    "question": "Which of the following commands lists the dependencies of the RPM package file foo.rpm?",
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
    "question": "What is the maximum niceness value that a regular user can assign to a process with the nice command when executing a new process?",
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
    "question": "Which of the following commands list all files and directories within the /tmp/ directory and its subdirectories which are owned by the user root? (Choose two.)",
    "options": [
      "find /tmp –user root -print",
      "find –path /tmp –uid root",
      "find /tmp –uid root -print",
      "find /tmp –user root",
      "find –path /tmp –user root -print"
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
    "question": "Which of the following vi commands deletes two lines, the current and the following line?",
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
    "question": "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single character command will insert the deleted content below the current line?",
    "options": [
      "i (lowercase)",
      "p (lowercase)",
      "P (uppercase)",
      "U (uppercase)",
      "u (lowercase)"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 193,
    "category": "LPIC-1",
    "question": "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux standard LF line breaks and stores the result in newlist.txt?",
    "options": [
      "tr –d ‘\\r’ < userlist.txt > newlist.txt",
      "tr –c ‘\\n\\r’ ‘’ <newlist.txt> userlist.txt",
      "tr ‘\\r\\n’ ‘’ <userlist.txt> newlist.txt",
      "tr ‘\\r’ ‘\\n’ userlist.txt newlist.txt",
      "tr –s ‘/^M/^J/’ userlist.txt newlist.txt"
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.101-500.v2019-09-08.by_.Lucas_.28q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 194,
    "category": "LPIC-1",
    "question": "Given the following input stream: txt1.txt atxt.txt txtB.txt Which of the following regular expressions turns this input stream into the following output stream? txt1.bak.txt atxt.bak.txt txtB.bak.txt",
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
    "question": "Which of the following commands displays the path to the executable file that would be executed when the command foo is invoked?",
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
    "question": "When redirecting the output of find to the xargs command, what option to find is useful if the filenames contain spaces?",
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
    "question": "Which of the following commands can be used to determine how long the system has been running? (Choose two.)",
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
    "question": "Which of the following files, located in a user’s home directory, contains the Bash history?",
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
    "question": "Which wildcards will match the following filenames? (Choose two.) ttyS0 ttyS1 ttyS2",
    "options": [
      "ttyS[1-5]",
      "tty?[0-5]",
      "tty*2",
      "tty[A-Z][012]",
      "tty[Ss][02]"
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
    "question": "Which of the following is a valid IPv6 address?",
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
    "question": "Which if the following tools, used for DNS debugging, reports not only the response from the name sever but also details about the query?",
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
    "question": "Which of the following statements is valid in the file /etc/nsswitch.conf?",
    "options": [
      "multi on",
      "192.168.168.4 dns-server",
      "namespaces: net mount procs",
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
    "question": "Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
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
    "question": "On a Linux workstation, the route command takes a long time before printing out the routing table. Which of the following errors does that indicate?",
    "options": [
      "The local routing information may be corrupted and must be re-validated using a routing protocol.",
      "One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.",
      "There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.",
      "The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.",
      "DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 205,
    "category": "LPIC-1",
    "question": "What is true about the Hop Limit field in the IPv6 header?",
    "options": [
      "The field is not changed during the transport of a package.",
      "The field is transmitted within a hop-by-hop extension header.",
      "Each router forwarding the packet increases the field’s value.",
      "Each router forwarding the packet decreases the field’s value.",
      "For multicast packages, the field’s value is always 1."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 206,
    "category": "LPIC-1",
    "question": "Which of the following nmcli subcommands exist? (Choose two.)",
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
    "question": "Which of the following changes may occur as a consequence of using the command ip? (Choose three.)",
    "options": [
      "Network interfaces may become active or inactive.",
      "New name servers may be added to the resolver configuration.",
      "The system’s host name may change.",
      "IP addresses may change.",
      "The routing table may change."
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
    "question": "How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
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
    "question": "Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
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
    "question": "Which of the following commands configure network interfaces based on the system’s existing distribution-specific configuration files? (Choose two.)",
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
    "question": "Which of the following statements is true if the UID of a regular user is identical to the GID of a group?",
    "options": [
      "UID have precedence over GIDs, therefore the user is available while the group doesn’t.",
      "The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
      "UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
      "The user is the only member of the group, even if the group configuration contains other members.",
      "GIDs have precedence over UIDs, therefore the group is available while the user isn’t."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 212,
    "category": "LPIC-1",
    "question": "Which of the following information is stored in /etc/shadow for each user?",
    "options": [
      "The timestamp of the user’s last login",
      "The user’s private SSH keys",
      "The hashed password of the user",
      "The numerical user ID (UID)",
      "The path to the user’s home directory"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 213,
    "category": "LPIC-1",
    "question": "Which of the following commands shows all active systemd timers?",
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
    "question": "Which of the following tasks can the date command accomplish? (Choose two.)",
    "options": [
      "Set the system’s date and time.",
      "Set the system’s date but not the time.",
      "Calculate the time span between two dates.",
      "Print a calendar for a month or a year.",
      "Display time in a specific format."
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
    "question": "What can be specified with useradd? (Choose two.)",
    "options": [
      "Commands the user can run using sudo.",
      "The absolute path to the user’s home directory.",
      "Which printers are available for the new user.",
      "The SSH keys used to login to the new account.",
      "The numeric user ID (UID) of the user."
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
    "question": "What is true about the file /etc/localtime?",
    "options": [
      "It is a plain text file containing a string such as Europe/Berlin",
      "It is created and maintained by the NTP service based on the location of the system’s IP address.",
      "It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
      "After changing this file, newtzconfig has to be run to make the changes effective.",
      "It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 217,
    "category": "LPIC-1",
    "question": "Which of the following statements is true regarding systemd timer units?",
    "options": [
      "Timer units can only be defined within a service unit’s file.",
      "The command executed by the timer is specified in the timer unit’s [Cmd] section.",
      "A dedicated system service, systemd-cron, handles the execution of timer units.",
      "Timer units only exist in the system scope and are not available for users.",
      "Each systemd timer unit controls a specific systemd service unit."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 218,
    "category": "LPIC-1",
    "question": "Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
    "options": [
      "Year",
      "Minute",
      "Username",
      "Effective group ID",
      "Command"
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
    "question": "Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?",
    "options": [
      "export LANGUAGE=“pt”",
      "export LC_MESSAGES=“pt”",
      "export UI_MESSAGES=“pt”",
      "export MESSAGE=“pt”",
      "export ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 220,
    "category": "LPIC-1",
    "question": "Which of the following files assigns a user to its primary group?",
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
    "question": "Which of the following steps prevents a user from obtaining an interactive login session?",
    "options": [
      "Setting the UID for the user to 0.",
      "Running the command chsh –s /bin/false with the user name.",
      "Removing the user from the group staff.",
      "Adding the user to /etc/noaccess.",
      "Creating a .nologin file in the user’s home directory."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 222,
    "category": "LPIC-1",
    "question": "Which of the following statements about sytemd-journald are true? (Choose three.)",
    "options": [
      "It is incompatible with syslog and cannot be installed on a system using regular syslog.",
      "It only processes messages of systemd and not messages of any other tools.",
      "It can pass log messages to syslog for further processing.",
      "It maintains metadata such as _UID or _PID for each message.",
      "It supports syslog facilities such as kern, user, and auth."
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
    "question": "Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?",
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
    "question": "Which of the following commands is used to rotate, compress, and mail system logs?",
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
    "question": "Why is the correct configuration of a system’s time zone important?",
    "options": [
      "Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.",
      "Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.",
      "Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.",
      "Because NTP chooses servers nearby based on the configured time zone.",
      "Because the conversion of Unix timestamps to local time relies on the time zone configuration."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 226,
    "category": "LPIC-1",
    "question": "Which of the following commands lists all queued print jobs?",
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
    "question": "Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
    "options": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "mail /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "mail * /var/log/maillog mail crit @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 228,
    "category": "LPIC-1",
    "question": "Which of the following protocols is related to the term open relay?",
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
    "question": "Which of the following commands displays all environment and shell variables?",
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
    "question": "Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
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
    "question": "What information is provided by the echo $$ command?",
    "options": [
      "The process ID of the current shell.",
      "The process ID for the following command.",
      "The process ID of the last command executed.",
      "The process ID of the last command which has been placed in the background.",
      "The process ID of the echo command."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 232,
    "category": "LPIC-1",
    "question": "Which command makes the shell variable named VARIABLE visible to subshells?",
    "options": [
      "export $VARIABLE",
      "env VARIABLE",
      "set $VARIABLE",
      "set VARIABLE",
      "export VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 233,
    "category": "LPIC-1",
    "question": "What output is produced by the following command sequence? echo ‘1 2 3 4 5 6’ | while read a b c; do echo result $c $b $a; done",
    "options": [
      "result: 6 5 4",
      "result: 1 2 3 4 5 6",
      "result: 3 4 5 6 2 1",
      "result: 6 5 4 3 2 1",
      "result: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 234,
    "category": "LPIC-1",
    "question": "Which of the following configuration files should be modified to globally set shell variables for all users?",
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
    "question": "What output does the command seq 10 produce?",
    "options": [
      "A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
      "It creates no output because a second parameter is missing.",
      "The number 0 through 9 with one number per line.",
      "The number 10 to standard output.",
      "The numbers 1 through 10 with one number per line."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 236,
    "category": "LPIC-1",
    "question": "Which of the following commands can be used to limit the amount of memory a user may use?",
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
    "question": "What is a purpose of an SSH host key?",
    "options": [
      "It must be sent by any SSH client in addition to a user key in order to identify the client’s host.",
      "It is root key by which all user SSH keys must be signed.",
      "It provides the server’s identity information to connecting SSH clients.",
      "It authenticates any user that logs into a remote machine from the key’s host.",
      "It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 238,
    "category": "LPIC-1",
    "question": "What is the purpose of TCP wrapper?",
    "options": [
      "Manage and adjust bandwidth used by TCP services.",
      "Bind a network service to a TCP port.",
      "Encapsulate TCP messages in IP packets.",
      "Add SSL support to plain text TCP services.",
      "Limit access to a network service."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 239,
    "category": "LPIC-1",
    "question": "Given the following excerpt of the sudo configuration: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Which of the following statements are true? (Choose three.)",
    "options": [
      "Jane can run /bin/id only after specifying her password.",
      "Jane can run /sbin/fdisk after specifying root’s password.",
      "Jane can run /sbin/fdisk after specifying her password.",
      "Jane can run /bin/kill without specifying a password.",
      "Jane can run /bin/id without specifying her password."
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
    "question": "Which configuration file contains the default options for SSH clients?",
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
    "question": "Depending on a system’s configuration, which of the following files can be used to enable and disable network services running on this host?",
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
    "question": "Which of the following commands can identify the PID od a process which opened a TCP port?",
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
    "question": "Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to order machines using SSH?",
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
    "question": "On a machine running several X servers, how do programs identify the different instances of the X11 server?",
    "options": [
      "By a fixed UUID that is defined in the X11 configuration file.",
      "By a display name like: 1.",
      "By the name of the user that runs the X server like x11:bob.",
      "By a device name like /dev/X11/xservers/1.",
      "By a unique IPv6 address from the fe80::/64 subnet."
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 245,
    "category": "LPIC-1",
    "question": "What is the purpose of a screen reader?",
    "options": [
      "It manages virtual keyboards on touch screen displays.",
      "It reads the parameters of the attached monitors and creates an appropriate X11 configuration.",
      "It displays lines and markers to help people use speed reading techniques.",
      "It manages and displays files that contain e-books.",
      "It reads displayed text to accommodate the needs of blind or visually impaired people."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 246,
    "category": "LPIC-1",
    "question": "The X11 configuration file xorg. conf is grouped into section. How is the content of the section SectionName represented?",
    "options": [
      "It is placed in curly brackets as in Section SectionName {…}.",
      "It is placed between the tags <Section name=“SectionName”> and </Section>.",
      "It is placed between a line containing Section “SectionName” and a line containing EndSection.",
      "It is placed after the row [SectionName].",
      "It is placed after an initial unindented Section “SectionName” and must be indented by exactly one tab character."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Premium.102-500.by_.VCEplus.60q-DEMO.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 247,
    "category": "LPIC-1",
    "question": "Which of the following features are provided by SPICE? (Choose two.)",
    "options": [
      "Connecting local USB devices to remote applications.",
      "Accessing graphical applications on a remote host.",
      "Replacing Xorg as local X11 server.",
      "Downloading and locally installing applications from a remote machine.",
      "Uploading and running a binary program on a remote machine."
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
    "question": "How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
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
    "question": "Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
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
    "question": "Which of the following commands configure network interfaces based on the system’s existing distribution-specific configuration files? (Choose two.)",
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
    "question": "Which of the following statements is true if the UID of a regular user is identical to the GID of a group?",
    "options": [
      "UID have precedence over GIDs, therefore the user is available while the group doesn’t.",
      "The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
      "UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
      "The user is the only member of the group, even if the group configuration contains other members.",
      "GIDs have precedence over UIDs, therefore the group is available while the user isn’t."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 252,
    "category": "LPIC-1",
    "question": "Which of the following information is stored in /etc/shadow for each user?",
    "options": [
      "The timestamp of the user’s last login",
      "The user’s private SSH keys",
      "The hashed password of the user",
      "The numerical user ID (UID)",
      "The path to the user’s home directory"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 253,
    "category": "LPIC-1",
    "question": "Which of the following commands shows all active systemd timers?",
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
    "question": "Which of the following tasks can the date command accomplish? (Choose two.)",
    "options": [
      "Set the system’s date and time.",
      "Set the system’s date but not the time.",
      "Calculate the time span between two dates.",
      "Print a calendar for a month or a year.",
      "Display time in a specific format."
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
    "question": "What can be specified with useradd? (Choose two.)",
    "options": [
      "Commands the user can run using sudo.",
      "The absolute path to the user’s home directory.",
      "Which printers are available for the new user.",
      "The SSH keys used to login to the new account.",
      "The numeric user ID (UID) of the user."
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
    "question": "What is true about the file /etc/localtime?",
    "options": [
      "It is a plain text file containing a string such as Europe/Berlin",
      "It is created and maintained by the NTP service based on the location of the system’s IP address.",
      "It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
      "After changing this file, newtzconfig has to be run to make the changes effective.",
      "It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 257,
    "category": "LPIC-1",
    "question": "Which of the following statements is true regarding systemd timer units?",
    "options": [
      "Timer units can only be defined within a service unit’s file.",
      "The command executed by the timer is specified in the timer unit’s [Cmd] section.",
      "A dedicated system service, systemd-cron, handles the execution of timer units.",
      "Timer units only exist in the system scope and are not available for users.",
      "Each systemd timer unit controls a specific systemd service unit."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 258,
    "category": "LPIC-1",
    "question": "Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
    "options": [
      "Year",
      "Minute",
      "Username",
      "Effective group ID",
      "Command"
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
    "question": "Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?",
    "options": [
      "export LANGUAGE=“pt”",
      "export LC_MESSAGES=“pt”",
      "export UI_MESSAGES=“pt”",
      "export MESSAGE=“pt”",
      "export ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 260,
    "category": "LPIC-1",
    "question": "Which of the following files assigns a user to its primary group?",
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
    "question": "Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
    "options": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "mail /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "mail * /var/log/maillog mail crit @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 262,
    "category": "LPIC-1",
    "question": "Which of the following protocols is related to the term open relay?",
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
    "question": "Which of the following commands displays all environment and shell variables?",
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
    "question": "Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
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
    "question": "What information is provided by the echo $$ command?",
    "options": [
      "The process ID of the current shell.",
      "The process ID for the following command.",
      "The process ID of the last command executed.",
      "The process ID of the last command which has been placed in the background.",
      "The process ID of the echo command."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 266,
    "category": "LPIC-1",
    "question": "Which command makes the shell variable named VARIABLE visible to subshells?",
    "options": [
      "export $VARIABLE",
      "env VARIABLE",
      "set $VARIABLE",
      "set VARIABLE",
      "export VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 267,
    "category": "LPIC-1",
    "question": "What output is produced by the following command sequence? echo ‘1 2 3 4 5 6’ | while read a b c; do echo result $c $b $a; done",
    "options": [
      "result: 6 5 4",
      "result: 1 2 3 4 5 6",
      "result: 3 4 5 6 2 1",
      "result: 6 5 4 3 2 1",
      "result: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 268,
    "category": "LPIC-1",
    "question": "Which of the following configuration files should be modified to globally set shell variables for all users?",
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
    "question": "What output does the command seq 10 produce?",
    "options": [
      "A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
      "It creates no output because a second parameter is missing.",
      "The number 0 through 9 with one number per line.",
      "The number 10 to standard output.",
      "The numbers 1 through 10 with one number per line."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 270,
    "category": "LPIC-1",
    "question": "Which of the following commands can be used to limit the amount of memory a user may use?",
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
    "question": "What is a purpose of an SSH host key?",
    "options": [
      "It must be sent by any SSH client in addition to a user key in order to identify the client’s host.",
      "It is root key by which all user SSH keys must be signed.",
      "It provides the server’s identity information to connecting SSH clients.",
      "It authenticates any user that logs into a remote machine from the key’s host.",
      "It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 272,
    "category": "LPIC-1",
    "question": "What is the purpose of TCP wrapper?",
    "options": [
      "Manage and adjust bandwidth used by TCP services.",
      "Bind a network service to a TCP port.",
      "Encapsulate TCP messages in IP packets.",
      "Add SSL support to plain text TCP services.",
      "Limit access to a network service."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 273,
    "category": "LPIC-1",
    "question": "Given the following excerpt of the sudo configuration: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Which of the following statements are true? (Choose three.)",
    "options": [
      "Jane can run /bin/id only after specifying her password.",
      "Jane can run /sbin/fdisk after specifying root’s password.",
      "Jane can run /sbin/fdisk after specifying her password.",
      "Jane can run /bin/kill without specifying a password.",
      "Jane can run /bin/id without specifying her password."
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
    "question": "Which configuration file contains the default options for SSH clients?",
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
    "question": "Depending on a system’s configuration, which of the following files can be used to enable and disable network services running on this host?",
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
    "question": "Which of the following commands can identify the PID od a process which opened a TCP port?",
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
    "question": "The X11 configuration file xorg.conf is grouped into section. How is the content of the section SectionName represented?",
    "options": [
      "It is placed in curly brackets as in Section SectionName {…}.",
      "It is placed between the tags <Section name=“SectionName”> and </Section>.",
      "It is placed between a line containing Section “SectionName” and a line containing EndSection.",
      "It is placed after the row [SectionName].",
      "It is placed after an initial unindented Section “SectionName” and must be indented by exactly one tab character."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 278,
    "category": "LPIC-1",
    "question": "Which of the following features are provided by SPICE? (Choose two.)",
    "options": [
      "Connecting local USB devices to remote applications.",
      "Accessing graphical applications on a remote host.",
      "Replacing Xorg as local X11 server.",
      "Downloading and locally installing applications from a remote machine.",
      "Uploading and running a binary program on a remote machine."
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
    "question": "What is the systemd journal stored?",
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
    "question": "Which of the following is true regarding the command sendmail?",
    "options": [
      "With any MTA, the sendmail command must be run periodically by the cron daemon.",
      "When using systemd, sendmail is an alias to relayctl.",
      "The sendmail command prints the MTA’s queue history of which mails have been sent successfully.",
      "It is only available when the sendmail MTA is installed.",
      "All common MTAs, including Postfix and Exim, provide a sendmail command."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 281,
    "category": "LPIC-1",
    "question": "Which file inside the CUPS configuration directory contains the settings of the printers?",
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
    "question": "Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)",
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
    "question": "What is true regarding the file ~/.forward?",
    "options": [
      "When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.",
      "After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.",
      "Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.",
      "As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.",
      "By default, only ~/.forward files of users in the group mailq are processed while all other user’s ~/.forward files are ignored."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 284,
    "category": "LPIC-1",
    "question": "Which of the following commands display a list of jobs in the print queue? (Choose two.)",
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
    "question": "On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)",
    "options": [
      "append Howdy",
      "logger Howdy",
      "systemd-cat echo Howdy",
      "echo Howdy > /dev/journal",
      "journalctl add Howdy"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 286,
    "category": "LPIC-1",
    "question": "Which of the following options in the chrony configuration file define remote time sources? (Choose two.)",
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
    "question": "Which of the following situations is observed and corrected by an NTP client?",
    "options": [
      "The skew in time between the system clock and the computer’s hardware clock.",
      "The physical location and the timezone configuration.",
      "Changes in the time zone of the current computer’s location.",
      "Adjustment needed to support Daylight Saving Time.",
      "The skew in time between the system clock and the reference clock."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 288,
    "category": "LPIC-1",
    "question": "If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias’s current target?",
    "options": [
      "set ls=’ls -l’",
      "alias ls=’ls -l’",
      "alias --force ls=’ls -l’",
      "alias --update ls ls=’ls -l’",
      "realias ls=’ls -l’"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 289,
    "category": "LPIC-1",
    "question": "Which of the following commands puts the output of the command date into the shell variable mydate?",
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
    "question": "Which of the following files is not read directly by a Bash login shell?",
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
    "question": "What is true about the file .profile in a user’s home directory?",
    "options": [
      "It must be executable.",
      "It must call the binary of the login shell.",
      "It must use a valid shell script syntax.",
      "It must start with a shebang.",
      "It must be readable for its owner only."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 292,
    "category": "LPIC-1",
    "question": "How does the ping command work by default?",
    "options": [
      "Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.",
      "It sends an ARP request to a remote host and waits to receive an ARP response in return.",
      "It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.",
      "Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.",
      "It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 293,
    "category": "LPIC-1",
    "question": "Which of the following commands display the number of bytes transmitted and received via the eth0 network interface? (Choose two.)",
    "options": [
      "route -v via eth0",
      "ip stats show dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "ip -s link show eth0"
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
    "question": "Given the following routing table: How would an outgoing packet to the destination 192.168.2.150 be handled?",
    "options": [
      "It would be passed to the default router 192.168.178.1 on wlan0.",
      "It would be directly transmitted on the device eth0.",
      "It would be passed to the default router 255.255.255.0 on eth0.",
      "It would be passed to the router 192.168.1.1 on eth0.",
      "It would be directly transmitted on the device wlan0."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 295,
    "category": "LPIC-1",
    "question": "Which of the following commands will delete the default gateway from the system’s IP routing table? (Choose two.)",
    "options": [
      "ifconfig unset default",
      "route del default",
      "ip route del default",
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
    "question": "Which standardized TCP port is used by HTTPS services?",
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
    "question": "Which of the following environment variables can be defined in locale.conf? (Choose two.)",
    "options": [
      "LC_ALL",
      "LC_USERNAME",
      "LC_UTF8",
      "LC_GEOGRAPHY",
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
    "question": "Which of the following commands sets the system’s time zone to the Canadian Eastern Time?",
    "options": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz=’Canada/Eastern’",
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
    "question": "Which file contains the data of the last change of a user’s password?",
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
    "question": "Which of the following fields can be found in the /etc/group file? (Choose two.)",
    "options": [
      "The home directory of the group.",
      "The list of users that belong to the group.",
      "The name of the group.",
      "The default group ACL.",
      "The description of the group."
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
    "question": "Which of the following sections exists in a systemd timer unit?",
    "options": [
      "[Events]",
      "[Timer]",
      "[cron]",
      "[Schedule]",
      "[Trigger]"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.Testking.102-500.v2020-01-18.by_.Oscar_.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 302,
    "category": "LPIC-1",
    "question": "Which of the following connection types, as seen in nmcli connection show, may exist in NetworkManager? (Choose three.)",
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
    "question": "On a Linux workstation, the route command takes a long time before printing out the routing table. Which of the following errors does that indicate?",
    "options": [
      "The local routing information may be corrupted and must be re-validated using a routing protocol.",
      "One of the routers in the routing table is not available which causes the automatic router failure detection mechanism (ARF-D) to wait for a timeout.",
      "There may accidentally be more than one default router in which case a default router election has to be done on the network in order to choose one router as the default.",
      "The Linux Kernel Routing Daemon (LKRD) is not running and should be started using its init script or systemd unit.",
      "DNS resolution may not be working as route by default tries to resolve names of routers and destinations and may run into a timeout."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 304,
    "category": "LPIC-1",
    "question": "Which of the following nmcli subcommands exist? (Choose two.)",
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
    "question": "Which of the following changes may occur as a consequence of using the command ip? (Choose three.)",
    "options": [
      "Network interfaces may become active or inactive.",
      "New name servers may be added to the resolver configuration.",
      "The system’s host name may change.",
      "IP addresses may change.",
      "The routing table may change."
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
    "question": "How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
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
    "question": "Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
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
    "question": "Which of the following commands configure network interfaces based on the system’s existing distribution-specific configuration files? (Choose two.)",
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
    "question": "Which of the following information is stored in /etc/shadow for each user?",
    "options": [
      "The timestamp of the user’s last login",
      "The user’s private SSH keys",
      "The hashed password of the user",
      "The numerical user ID (UID)",
      "The path to the user’s home directory"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 310,
    "category": "LPIC-1",
    "question": "Which of the following commands shows all active systemd timers?",
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
    "question": "Which of the following tasks can the date command accomplish? (Choose two.)",
    "options": [
      "Set the system’s date and time.",
      "Set the system’s date but not the time.",
      "Calculate the time span between two dates.",
      "Print a calendar for a month or a year.",
      "Display time in a specific format."
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
    "question": "What can be specified with useradd? (Choose two.)",
    "options": [
      "Commands the user can run using sudo.",
      "The absolute path to the user’s home directory.",
      "Which printers are available for the new user.",
      "The SSH keys used to login to the new account.",
      "The numeric user ID (UID) of the user."
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
    "question": "What is true about the file /etc/localtime?",
    "options": [
      "It is a plain text file containing a string such as Europe/Berlin",
      "It is created and maintained by the NTP service based on the location of the system’s IP address.",
      "It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
      "After changing this file, newtzconfig has to be run to make the changes effective.",
      "It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 314,
    "category": "LPIC-1",
    "question": "Which of the following statements is true regarding systemd timer units?",
    "options": [
      "Timer units can only be defined within a service unit’s file.",
      "The command executed by the timer is specified in the timer unit’s [Cmd] section.",
      "A dedicated system service, systemd-cron, handles the execution of timer units.",
      "Timer units only exist in the system scope and are not available for users.",
      "Each systemd timer unit controls a specific systemd service unit."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 315,
    "category": "LPIC-1",
    "question": "Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
    "options": [
      "Year",
      "Minute",
      "Username",
      "Effective group ID",
      "Command"
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
    "question": "Which option in the chrony configuration file changes the initial interval of polls to a NTP server in order to speed up the initial synchronization?",
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
    "question": "Why is the correct configuration of a system’s time zone important?",
    "options": [
      "Because the timezone is included in checksum calculations and timezone changes invalidate existing checksums.",
      "Because the time zone is saved as part of the modification times of files and cannot be changed after a file is created.",
      "Because the environment variables LANG and LC_MESSAGES are, by default, set according to the time zone.",
      "Because NTP chooses servers nearby based on the configured time zone.",
      "Because the conversion of Unix timestamps to local time relies on the time zone configuration."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 318,
    "category": "LPIC-1",
    "question": "Which of the following commands lists all queued print jobs?",
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
    "question": "Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
    "options": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "mail /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "mail * /var/log/maillog mail crit @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 320,
    "category": "LPIC-1",
    "question": "Which of the following protocols is related to the term open relay?",
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
    "question": "Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
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
    "question": "Which of the following configuration files should be modified to globally set shell variables for all users?",
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
    "question": "What output does the command seq 10 produce?",
    "options": [
      "A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
      "It creates no output because a second parameter is missing.",
      "The number 0 through 9 with one number per line.",
      "The number 10 to standard output.",
      "The numbers 1 through 10 with one number per line."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 324,
    "category": "LPIC-1",
    "question": "Which of the following commands can be used to limit the amount of memory a user may use?",
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
    "question": "What is a purpose of an SSH host key?",
    "options": [
      "It must be sent by any SSH client in addition to a user key in order to identify the client’s host.",
      "It is root key by which all user SSH keys must be signed.",
      "It provides the server’s identity information to connecting SSH clients.",
      "It authenticates any user that logs into a remote machine from the key’s host.",
      "It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.Braindumps.102-500.v2019-09-10.by_.Amir_.29q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 326,
    "category": "LPIC-1",
    "question": "Given the following excerpt of the sudo configuration: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Which of the following statements are true? (Choose three.)",
    "options": [
      "Jane can run /bin/id only after specifying her password.",
      "Jane can run /sbin/fdisk after specifying root’s password.",
      "Jane can run /sbin/fdisk after specifying her password.",
      "Jane can run /bin/kill without specifying a password.",
      "Jane can run /bin/id without specifying her password."
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
    "question": "Which configuration file contains the default options for SSH clients?",
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
    "question": "Depending on a system’s configuration, which of the following files can be used to enable and disable network services running on this host?",
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
    "question": "Which of the following commands preloads and manages existing SSH keys that are used for automatic authentication while logging in to order machines using SSH?",
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
    "question": "How many IP addresses can be used for unique hosts inside the IPv4 subnet 192.168.2.128/26?",
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
    "question": "Which of the following IPv4 networks are reserved by IANA for private address assignment and private routing? (Choose three.)",
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
    "question": "Which of the following commands configure network interfaces based on the system’s existing distribution-specific configuration files? (Choose two.)",
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
    "question": "Which of the following statements is true if the UID of a regular user is identical to the GID of a group?",
    "options": [
      "UID have precedence over GIDs, therefore the user is available while the group doesn’t.",
      "The user as well as the group are not available to avoid ambiguity due to the ID conflict.",
      "UIDs and GIDs are independent of each other, therefore the user as well as the group are still available.",
      "The user is the only member of the group, even if the group configuration contains other members.",
      "GIDs have precedence over UIDs, therefore the group is available while the user isn’t."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 334,
    "category": "LPIC-1",
    "question": "Which of the following information is stored in /etc/shadow for each user?",
    "options": [
      "The timestamp of the user’s last login",
      "The user’s private SSH keys",
      "The hashed password of the user",
      "The numerical user ID (UID)",
      "The path to the user’s home directory"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 335,
    "category": "LPIC-1",
    "question": "Which of the following commands shows all active systemd timers?",
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
    "question": "Which of the following tasks can the date command accomplish? (Choose two.)",
    "options": [
      "Set the system’s date and time.",
      "Set the system’s date but not the time.",
      "Calculate the time span between two dates.",
      "Print a calendar for a month or a year.",
      "Display time in a specific format."
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
    "question": "What can be specified with useradd? (Choose two.)",
    "options": [
      "Commands the user can run using sudo.",
      "The absolute path to the user’s home directory.",
      "Which printers are available for the new user.",
      "The SSH keys used to login to the new account.",
      "The numeric user ID (UID) of the user."
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
    "question": "What is true about the file /etc/localtime?",
    "options": [
      "It is a plain text file containing a string such as Europe/Berlin",
      "It is created and maintained by the NTP service based on the location of the system’s IP address.",
      "It is a symlink to /sys/device/clock/ltime and always contains the current local time.",
      "After changing this file, newtzconfig has to be run to make the changes effective.",
      "It is either a symlink to or a copy of a timezone information file such as /usr/share/zoneinfo/Europe/Berlin."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 339,
    "category": "LPIC-1",
    "question": "Which of the following statements is true regarding systemd timer units?",
    "options": [
      "Timer units can only be defined within a service unit’s file.",
      "The command executed by the timer is specified in the timer unit’s [Cmd] section.",
      "A dedicated system service, systemd-cron, handles the execution of timer units.",
      "Timer units only exist in the system scope and are not available for users.",
      "Each systemd timer unit controls a specific systemd service unit."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 340,
    "category": "LPIC-1",
    "question": "Which of the following fields are available in the standard format of both the global /etc/crontab file as well as in user-specific crontab files? (Choose two.)",
    "options": [
      "Year",
      "Minute",
      "Username",
      "Effective group ID",
      "Command"
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
    "question": "Which of the following commands should be executed when starting a login shell in order to change the language of messages for an internationalized program to Portuguese (pt)?",
    "options": [
      "export LANGUAGE=“pt”",
      "export LC_MESSAGES=“pt”",
      "export UI_MESSAGES=“pt”",
      "export MESSAGE=“pt”",
      "export ALL_MESSAGES=“pt”"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 342,
    "category": "LPIC-1",
    "question": "Which of the following files assigns a user to its primary group?",
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
    "question": "Which of the following entries in /etc/syslog.conf writes all mail related events to the file /var/log/maillog and sends all critical events to the remote server logger.example.com?",
    "options": [
      "mail.* /var/log/maillog mail,crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit syslog://logger.example.org",
      "mail /var/log/maillog mail.crit @logger.example.org",
      "mail.* /var/log/maillog mail.crit @logger.example.org",
      "mail * /var/log/maillog mail crit @logger.example.org"
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 344,
    "category": "LPIC-1",
    "question": "Which of the following protocols is related to the term open relay?",
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
    "question": "Which of the following commands displays all environment and shell variables?",
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
    "question": "Which of the following comparison operators for test work on elements in the file system? (Choose two.)",
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
    "question": "What information is provided by the echo $$ command?",
    "options": [
      "The process ID of the current shell.",
      "The process ID for the following command.",
      "The process ID of the last command executed.",
      "The process ID of the last command which has been placed in the background.",
      "The process ID of the echo command."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 348,
    "category": "LPIC-1",
    "question": "Which command makes the shell variable named VARIABLE visible to subshells?",
    "options": [
      "export $VARIABLE",
      "env VARIABLE",
      "set $VARIABLE",
      "set VARIABLE",
      "export VARIABLE"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 349,
    "category": "LPIC-1",
    "question": "What output is produced by the following command sequence? echo ‘1 2 3 4 5 6’ | while read a b c; do echo result $c $b $a; done",
    "options": [
      "result: 6 5 4",
      "result: 1 2 3 4 5 6",
      "result: 3 4 5 6 2 1",
      "result: 6 5 4 3 2 1",
      "result: 3 2 1"
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 350,
    "category": "LPIC-1",
    "question": "Which of the following configuration files should be modified to globally set shell variables for all users?",
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
    "question": "What output does the command seq 10 produce?",
    "options": [
      "A continuous stream of numbers increasing in increments of 10 until the command is stopped.",
      "It creates no output because a second parameter is missing.",
      "The number 0 through 9 with one number per line.",
      "The number 10 to standard output.",
      "The numbers 1 through 10 with one number per line."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 352,
    "category": "LPIC-1",
    "question": "Which of the following commands can be used to limit the amount of memory a user may use?",
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
    "question": "What is a purpose of an SSH host key?",
    "options": [
      "It must be sent by any SSH client in addition to a user key in order to identify the client’s host.",
      "It is root key by which all user SSH keys must be signed.",
      "It provides the server’s identity information to connecting SSH clients.",
      "It authenticates any user that logs into a remote machine from the key’s host.",
      "It is used by system services like cron, syslog or a backup job to automatically connect to remote hosts."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 354,
    "category": "LPIC-1",
    "question": "What is the purpose of TCP wrapper?",
    "options": [
      "Manage and adjust bandwidth used by TCP services.",
      "Bind a network service to a TCP port.",
      "Encapsulate TCP messages in IP packets.",
      "Add SSL support to plain text TCP services.",
      "Limit access to a network service."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 355,
    "category": "LPIC-1",
    "question": "Given the following excerpt of the sudo configuration: jane ANY=NOPASSWD: /bin/kill, /bin/id, PASSWD: /sbin/fdisk Which of the following statements are true? (Choose three.)",
    "options": [
      "Jane can run /bin/id only after specifying her password.",
      "Jane can run /sbin/fdisk after specifying root’s password.",
      "Jane can run /sbin/fdisk after specifying her password.",
      "Jane can run /bin/kill without specifying a password.",
      "Jane can run /bin/id without specifying her password."
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
    "question": "Which configuration file contains the default options for SSH clients?",
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
    "question": "Depending on a system’s configuration, which of the following files can be used to enable and disable network services running on this host?",
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
    "question": "Which of the following commands can identify the PID od a process which opened a TCP port?",
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
    "question": "The X11 configuration file xorg.conf is grouped into section. How is the content of the section SectionName represented?",
    "options": [
      "It is placed in curly brackets as in Section SectionName {…}.",
      "It is placed between the tags <Section name=“SectionName”> and </Section>.",
      "It is placed between a line containing Section “SectionName” and a line containing EndSection.",
      "It is placed after the row [SectionName].",
      "It is placed after an initial unindented Section “SectionName” and must be indented by exactly one tab character."
    ],
    "correct": 2,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 360,
    "category": "LPIC-1",
    "question": "Which of the following features are provided by SPICE? (Choose two.)",
    "options": [
      "Connecting local USB devices to remote applications.",
      "Accessing graphical applications on a remote host.",
      "Replacing Xorg as local X11 server.",
      "Downloading and locally installing applications from a remote machine.",
      "Uploading and running a binary program on a remote machine."
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
    "question": "What is the systemd journal stored?",
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
    "question": "Which of the following is true regarding the command sendmail?",
    "options": [
      "With any MTA, the sendmail command must be run periodically by the cron daemon.",
      "When using systemd, sendmail is an alias to relayctl.",
      "The sendmail command prints the MTA’s queue history of which mails have been sent successfully.",
      "It is only available when the sendmail MTA is installed.",
      "All common MTAs, including Postfix and Exim, provide a sendmail command."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 363,
    "category": "LPIC-1",
    "question": "Which file inside the CUPS configuration directory contains the settings of the printers?",
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
    "question": "Which of the following parameters are used for journalctl to limit the time frame of the output? (Choose two.)",
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
    "question": "What is true regarding the file ~/.forward?",
    "options": [
      "When configured correctly ~/.forward can be used to forward each incoming mail to one or more other recipients.",
      "After editing ~/.forward the user must run newaliases to make the mail server aware of the changes.",
      "Using ~/.forward, root may configure any email address whereas all other users may configure only their own addresses.",
      "As ~/.forward is owned by the MTA and not writable by the user, it must be edited using the editaliases command.",
      "By default, only ~/.forward files of users in the group mailq are processed while all other user’s ~/.forward files are ignored."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 366,
    "category": "LPIC-1",
    "question": "Which of the following commands display a list of jobs in the print queue? (Choose two.)",
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
    "question": "On a system using systemd-journald, which of the following commands add the message Howdy to the system log? (Choose two.)",
    "options": [
      "append Howdy",
      "logger Howdy",
      "systemd-cat echo Howdy",
      "echo Howdy > /dev/journal",
      "journalctl add Howdy"
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 368,
    "category": "LPIC-1",
    "question": "Which of the following options in the chrony configuration file define remote time sources? (Choose two.)",
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
    "question": "Which of the following situations is observed and corrected by an NTP client?",
    "options": [
      "The skew in time between the system clock and the computer’s hardware clock.",
      "The physical location and the timezone configuration.",
      "Changes in the time zone of the current computer’s location.",
      "Adjustment needed to support Daylight Saving Time.",
      "The skew in time between the system clock and the reference clock."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 370,
    "category": "LPIC-1",
    "question": "If an alias ls exists, which of the following commands updates the alias to point to the command ls -l instead of the alias’s current target?",
    "options": [
      "set ls=’ls -l’",
      "alias ls=’ls -l’",
      "alias --force ls=’ls -l’",
      "alias --update ls ls=’ls -l’",
      "realias ls=’ls -l’"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 371,
    "category": "LPIC-1",
    "question": "Which of the following commands puts the output of the command date into the shell variable mydate?",
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
    "question": "Which of the following files is not read directly by a Bash login shell?",
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
    "question": "What is true about the file .profile in a user’s home directory?",
    "options": [
      "It must be executable.",
      "It must call the binary of the login shell.",
      "It must use a valid shell script syntax.",
      "It must start with a shebang.",
      "It must be readable for its owner only."
    ],
    "correct": 4,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 374,
    "category": "LPIC-1",
    "question": "How does the ping command work by default?",
    "options": [
      "Is sends an ICMP Echo Request to a remote host and waits to receive an ICMP Echo Response in return.",
      "It sends an ARP request to a remote host and waits to receive an ARP response in return.",
      "It sends a TCP SYN packet to a remote host and waits to receive an TCP ACK response in return.",
      "Is sends a broadcast packet to all hosts on the net and waits to receive, among others, a response from the target system.",
      "It sends a UDP packet to port 0 of the remote host and waits to receive a UDP error response in return."
    ],
    "correct": 0,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 375,
    "category": "LPIC-1",
    "question": "Which of the following commands display the number of bytes transmitted and received via the eth0 network interface? (Choose two.)",
    "options": [
      "route -v via eth0",
      "ip stats show dev eth0",
      "netstat -s -i eth0",
      "ifconfig eth0",
      "ip -s link show eth0"
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
    "question": "Given the following routing table: How would an outgoing packet to the destination 192.168.2.150 be handled?",
    "options": [
      "It would be passed to the default router 192.168.178.1 on wlan0.",
      "It would be directly transmitted on the device eth0.",
      "It would be passed to the default router 255.255.255.0 on eth0.",
      "It would be passed to the router 192.168.1.1 on eth0.",
      "It would be directly transmitted on the device wlan0."
    ],
    "correct": 3,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  },
  {
    "id": 377,
    "category": "LPIC-1",
    "question": "Which of the following commands will delete the default gateway from the system’s IP routing table? (Choose two.)",
    "options": [
      "ifconfig unset default",
      "route del default",
      "ip route del default",
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
    "question": "Which standardized TCP port is used by HTTPS services?",
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
    "question": "Which of the following environment variables can be defined in locale.conf? (Choose two.)",
    "options": [
      "LC_ALL",
      "LC_USERNAME",
      "LC_UTF8",
      "LC_GEOGRAPHY",
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
    "question": "Which of the following commands sets the system’s time zone to the Canadian Eastern Time?",
    "options": [
      "localegen -t -f /usr/share/zoneinfo/Canada/Eastern > /etc/locate.tz",
      "tzconf /etc/localtime",
      "sysctl -w clock.tz=’Canada/Eastern’",
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
    "question": "Which file contains the data of the last change of a user’s password?",
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
    "question": "Which of the following fields can be found in the /etc/group file? (Choose two.)",
    "options": [
      "The home directory of the group.",
      "The list of users that belong to the group.",
      "The name of the group.",
      "The default group ACL.",
      "The description of the group."
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
    "question": "Which of the following sections exists in a systemd timer unit?",
    "options": [
      "[Events]",
      "[Timer]",
      "[cron]",
      "[Schedule]",
      "[Trigger]"
    ],
    "correct": 1,
    "explanation": "Extraído del PDF: LPI.PracticeTest.102-500.v2020-02-01.by_.Lainey.57q.pdf",
    "source": "LPIC-1"
  }
];
