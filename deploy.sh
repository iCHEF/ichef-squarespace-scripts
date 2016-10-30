#!/bin/bash
set -e

rev=$(git rev-parse --short HEAD)

TMP_FOLDER="tmp_deploy"

# Clean tmp directory
rm -rf $TMP_FOLDER || exit 0;
mkdir $TMP_FOLDER

# Copy files
cp -r ./locale_data/ ./$TMP_FOLDER/locale_data
cp -r ./umd/. ./$TMP_FOLDER

# Git init
cd $TMP_FOLDER
git init
git config user.name "ichefbot"
git config user.email "developer@ichef.com.tw"

# Commit all
git add .
git commit -m "Auto update at ${rev}"

# Push to gh-pages
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
