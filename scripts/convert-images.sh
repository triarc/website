#!/bin/bash

PARAMS=('-m 6 -q 70 -mt -af -progress')

if [ $# -ne 0 ]; then
	PARAMS=$@;
fi

cd $(pwd)

shopt -s nullglob nocaseglob extglob

for FILE in static/img/avatars/{andrea,dave,bambam,elke,fabrizio,iris,marco,mattia,max,michel,pascal,serge,urban,warwara,eduan,david}.png; do
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
    convert -resize 144x "$FILE" -quality 70 "${FILE%.*}"-144.png;
    convert -resize 255x "$FILE" -quality 70 "${FILE%.*}"-255.png;
done

for FILE in static/img/office/{bar.png,gym.png,office_view.jpg,teamcall.png,triarc_lego.jpeg,triarc-flow.png}; do
    cwebp $PARAMS "$FILE" -o "${FILE%.*}".webp;
    cwebp $PARAMS -resize 320 0 "$FILE" -o "${FILE%.*}"-320.webp;
    cwebp $PARAMS -resize 640 0 "$FILE" -o "${FILE%.*}"-640.webp;
    cwebp $PARAMS -resize 1080 0 "$FILE" -o "${FILE%.*}"-1080.webp;

    convert -resize 320x "$FILE" -quality 70 "${FILE%.*}"-320.jpg;
    convert -resize 640x "$FILE" -quality 70 "${FILE%.*}"-640.jpg;
    convert -resize 1080x "$FILE" -quality 70 "${FILE%.*}"-1080.jpg;
done
