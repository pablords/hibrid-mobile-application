#! /bin/bash

APP_DIR=$(pwd)
HOST_IP=$(ifconfig | grep -Eo 'inet (addr:)?([0-9]*\.){3}[0-9]*' | grep -Eo '([0-9]*\.){3}[0-9]*' | grep -v '127.0.0.1')
DEV_HOST=$(cd $APP_DIR && cat .env | grep DEV_HOST)


if [ -f "$APP_DIR/mobile/android/local.properties" ]; then
    echo "DELETANDO ARQUIVO local.properties"
    rm -rf $APP_DIR/mobile/android/local.properties
    echo "CRIANDO NOVO ARQUIVO local.properties"
    touch $APP_DIR/mobile/android/local.properties
    echo "sdk.dir=$ANDROID_HOME" >> $APP_DIR/mobile/android/local.properties
    else
    echo "CRIANDO NOVO ARQUIVO local.properties"
    touch $APP_DIR/mobile/android/local.properties
    echo "sdk.dir=$ANDROID_HOME" >> $APP_DIR/mobile/android/local.properties
fi

if [ -f "$APP_DIR/mobile/android/app/src/main/assets/env" ]; then
    echo "DELETANDO ARQUIVO ENV"
    rm -rf $APP_DIR/mobile/android/app/src/main/assets/env
    echo "CRIANDO NOVO ARQUIVO ENV"
    touch $APP_DIR/mobile/android/app/src/main/assets/env
    echo "CONFIGURANDO HOST_IP $HOST_IP"
    echo "$DEV_HOST" >> $APP_DIR/mobile/android/app/src/main/assets/env
    else
    echo "CRIANDO ARQUIVO ENV"
    touch $APP_DIR/mobile/android/app/src/main/assets/env
    echo "CONFIGURANDO HOST_IP $HOST_IP"
    echo "$DEV_HOST"  >> $APP_DIR/mobile/android/app/src/main/assets/env
fi

sleep 5

if [ -d "$APP_DIR/mobile/android/app/build" ]; then
    echo "LIMPANDO BUILD ANTIGO"
    cd $APP_DIR/mobile/android && ./gradlew clean
    echo "EXECUTANDO BUILD APLICAÇÃO"
    cd $APP_DIR/mobile/android && ./gradlew build --stacktrace
    else
    echo "EXECUTANDO BUILD APLICAÇÃO"
    cd $APP_DIR/mobile/android && ./gradlew build --stacktrace
fi









