# BoilerIo

A boilerplate for ionic react projet

## Installation of packages

You can install all needed packages by simply running the following command:

`npm install`

## How to run ?

To run the boilerplate, you just need to follow these steps:

`npx cap sync`

`ionic capacitor run android --external -l`

## How to change the app icon ?

To change the app icon, you need to change the file in <b>resources</b> folder without changing their names.
After that you must run:

`npx capacitor-assets generate`

> Alternatively you can generate for a specific platform with <b>--ios</b>, <b>--android</b> or <b>--pwa</b>.

For more informations, you can visite the official [documentation](https://capacitorjs.com/docs/guides/splash-screens-and-icons).

## How to change the app name ?

To change the app name that is actually <b>BoilerIo</b>, you should modify it in `android/app/src/main/res/values/strings.xml`.