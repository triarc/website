#!/bin/bash

PARAMS=('-m 6 -q 70 -mt -af -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in static/img/avatars/{andrea,bambam,dave,elke,elke-nerd,fabrizio,iris,marco,mattia,max,pascal,pascal-nerd,paul,serge,urban,warwara}.@(jpg|jpeg|tif|tiff|png); do
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
    convert -resize 144x "$FILE" -quality 70 "${FILE%.*}"-144.jpg;
    convert -resize 255x "$FILE" -quality 70 "${FILE%.*}"-255.jpg;
done
