# BoilerIo

A boilerplate for ionic react project

## Installation of required packages

You can install all required packages by simply running the following commands:

`npm install -g @ionic/cli`

`npm install`

## How to run on physical android device ?

To run the boilerplate, you just need to follow these steps assuming your `ANDROID_SDK_ROOT` and `JAVA_HOME` environment variables setup correctly:

`npx cap sync`

`ionic capacitor run android --external -l`

## How to change the app icon ?

To change the app icon, you need to change the files in ***resources*** folder without changing their names.
After that you must run:

`npx capacitor-assets generate`

> Alternatively you can generate for a specific platform with <b>--ios</b>, <b>--android</b> or <b>--pwa</b>.

For more informations, you can visite the official [documentation](https://capacitorjs.com/docs/guides/splash-screens-and-icons).

## How to change the app name ?

To change the app name that is actually <b>BoilerIo</b>, you should modify it in `android/app/src/main/res/values/strings.xml`.
