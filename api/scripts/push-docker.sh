#!/usr/bin/env bash

echo $DOCKER_PUSH_KEY | docker login registry.gitlab.com -u $DOCKER_PUSH_USER --password-stdin
docker push registry.gitlab.com/triarc-labs/webseite:$TAG
