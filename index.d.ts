import { AndroidNativeParseTypes, IosNativeParseTypes } from "./src/types/native-parse-types";

declare global {
    interface Window {
        __ANDROID_HANDLER__: AndroidNativeParseTypes
        webkit: {
            messageHandlers: IosNativeParseTypes
        }
    }
}

export { };
