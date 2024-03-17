#! /bin/bash

APP_DIR=$(pwd)


if [ -f "$ANDROID_HOME/platform-tools/app-debug.apk" ]; then
   echo "EXCLUINDO APK"
   cd $ANDROID_HOME/platform-tools && ./adb uninstall com.example.framework_brasil_dev
   echo "COPIANDO APK PARA $ANDROID_HOME/platform-tools"
   cp -r $APP_DIR/mobile/android/app/build/outputs/apk/debug/* $ANDROID_HOME/platform-tools
   else
   echo "COPIANDO APK PARA $ANDROID_HOME/platform-tools"
   cp -r $APP_DIR/mobile/android/app/build/outputs/apk/debug/* $ANDROID_HOME/platform-tools
fi


echo "INSTALANDO APK"
cd $ANDROID_HOME/platform-tools && ./adb install app-debug.apk

echo "INICIANDO APK"
cd $ANDROID_HOME/platform-tools && ./adb shell monkey -p com.example.framework_brasil_dev -c android.intent.category.LAUNCHER 1

echo "INICIANDO APP"
cd $APP_DIR && npm run dev