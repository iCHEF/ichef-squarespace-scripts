#!/bin/bash
set -e

TMP_FOLDER="tmp_deploy"

# Clean tmp directory
rm -rf $TMP_FOLDER || exit 0;

# Clone origin:gh-pages to tmp directory
git clone -b gh-pages --single-branch git@github.com:iCHEF/ichef-squarespace-scripts.git $TMP_FOLDER

# Make clean commit
rm -rf ./$TMP_FOLDER/*

# Copy files
cp -r ./locale_data/ ./$TMP_FOLDER/locale_data
cp -r ./umd/ ./$TMP_FOLDER

# Commit all
cd $TMP_FOLDER
git add .
git commit -m "Auto update"

# Push to gh-pages
git push origin HEAD:gh-pages

# Exit tmp directory & Clean up
cd ..
rm -rf $TMP_FOLDER || exit 0;
