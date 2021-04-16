#!/usr/bin/env bash

export DOCKER_BUILDKIT=1
docker build -t eu.gcr.io/triarc/website:$TAG .
