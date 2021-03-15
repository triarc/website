#!/usr/bin/env bash

gcloud config set project $GCP_PROJECT
gcloud config set run/region europe-west4
gcloud run deploy website-$TAG --image eu.gcr.io/triarc/website:$TAG \
            --platform managed \
            --allow-unauthenticated \
            --memory 256M \
            --update-env-vars SLACK_TOKEN=$SLACK_TOKEN \
            --update-env-vars SLACK_CHANNEL=$SLACK_CHANNEL \
            --max-instances 1

echo "::set-output name=service_url::$(gcloud run services describe website-$TAG --platform managed --region europe-west4 --format 'value(status.url)')"
