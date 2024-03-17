import { NativeParseTypes } from "./src/types/native-parse-types";

declare global {
    interface Window {
        __WEB_VIEW_BRIDGE__: NativeParseTypes
    }
}

export { };
