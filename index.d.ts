import { NativeParseTypes } from "./src/types/native-parse-types";

declare global {
    interface Window {
        __ANDROID_HANDLER__: NativeParseTypes
    }
}

export { };
