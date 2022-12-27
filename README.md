# triarc website

## Get started

```bash
npm install
npm run dev
```

# Demo

[Demo url](https://dev.triarc-labs.com/)

# mLink video convert

```
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -vf scale=320:-1 -c:v libvpx -qmin 0 -qmax 25 -crf 4 -b:v 1M -c:a libvorbis -threads 0 static/video/mlink-320.webm
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -vf scale=720:-1 -c:v libvpx -qmin 0 -qmax 25 -crf 4 -b:v 1M -c:a libvorbis -threads 0 static/video/mlink-720.webm
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -vf scale=1080:-1 -c:v libvpx -qmin 0 -qmax 25 -crf 4 -b:v 1M -c:a libvorbis -threads 0 static/video/mlink-1080.webm
```

# mLink video poster generation

```
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -ss 00:00:01.000 -vframes 1  -vf scale=320:-1 static/img/thumbnail/mlink-320-poster.png
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -ss 00:00:01.000 -vframes 1  -vf scale=720:-1 static/img/thumbnail/mlink-720-poster.png
ffmpeg -i Triarc_Labs_Mlink_HD.mp4 -ss 00:00:01.000 -vframes 1  -vf scale=1080:-1 static/img/thumbnail/mlink-1080-poster.png
```
