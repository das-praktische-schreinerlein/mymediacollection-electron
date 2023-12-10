#!/bin/bash
MYSCRIPTPATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"

CONFIG_BASEDIR=../../../config/
MYCMS=${MYSCRIPTPATH}/../mycms-electron-app-win32-x64/resources/app-backend/
MYMM=${MYCMS}

AUDIO_BASEDIR=../../../filestore/Musike/
AUDIO_EXPORT_BASEDIR=../../../filestore/export/

W_CONFIG_BASEDIR="..\\..\\..\\config\\"
W_MYCMS="..\\mycms-electron-app-win32-x64\\resources\\app-backend\\"
W_MYMM=${W_MYCMS}

W_AUDIO_BASEDIR="..\\..\\..\\filestore\\Musike\\"
W_AUDIO_EXPORT_BASEDIR="..\\..\\..\\filestore\\export\\"

START_ADMINSERVER=true
AUTOSTARTIMPORT=true
AUTOSTARTEXPORT=true
