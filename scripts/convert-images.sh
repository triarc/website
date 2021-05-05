#!/bin/bash

PARAMS=('-m 6 -q 70 -mt -af -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in static/img/avatars/{andrea,dave,bambam,elke,fabrizio,iris,marco,mattia,max,pascal,paul,serge,urban,warwara}.png; do
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
    convert -resize 144x "$FILE" -quality 70 "${FILE%.*}"-144.png;
    convert -resize 255x "$FILE" -quality 70 "${FILE%.*}"-255.png;
done
