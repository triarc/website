#!/usr/bin/env bash

gcloud config set project $GCP_PROJECT
gcloud config set run/region europe-west4
gcloud run services delete website-$TAG --platform managed --quiet
