#!/usr/bin/env bash

export DOCKER_BUILDKIT=1
docker build -t registry.gitlab.com/triarc-labs/webseite:$TAG .
