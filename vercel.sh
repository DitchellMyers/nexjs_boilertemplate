#!/bin/bash

if [[ "$VERCEL_GIT_COMMIT_REF" =~ "release-please--branches--dev--components--release-please-action" || "$VERCEL_GIT_COMMIT_MESSAGE" =~ .*"release-please" ]] ; then
  echo ">> Skipping deploy!"
  exit 0;
else
  echo ">> Proceeding with deploy."
  exit 1; 
fi

