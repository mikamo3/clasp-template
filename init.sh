#!/usr/bin/env bash

WORKSPACE_NAME=$(basename "$(pwd)")
sed "s/%WORKSPACE_NAME%/$WORKSPACE_NAME/g" .devcontainer/devcontainer.json.template > .devcontainer/devcontainer.json