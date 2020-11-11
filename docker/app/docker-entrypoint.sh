#!/bin/bash

# Exit on fail
set -e

# Bundle install
yarn

# Start services
yarn start:dev

# Finally call command issued to the docker service
exec "$@"

