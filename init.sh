#!/usr/bin/env bash

read -p "input workspace name : " WORKSPACE_NAME
if [[ "$WORKSPACE_NAME" == "" ]];then
  exit 1
fi

sed "s/%WORKSPACE_NAME%/$WORKSPACE_NAME/g" .devcontainer/devcontainer.json.template > .devcontainer/devcontainer.json