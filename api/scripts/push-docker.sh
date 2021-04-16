w#!/usr/bin/env bash

echo $GCP_SA_KEY | docker login -u _json_key --password-stdin https://eu.gcr.io
docker push eu.gcr.io/triarc/website:$TAG
