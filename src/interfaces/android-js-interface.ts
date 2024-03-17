import { parseToBoolean, parseToString } from "../utils/parse";
import { JSInterface } from "./js.interface";

// Implementação para Android
export class AndroidJSInterface implements JSInterface {
    checkCameraHardware(): boolean {
       const nativeResponse = window.__ANDROID_HANDLER__.checkCameraHardware()
       return parseToBoolean(nativeResponse)
    }
    setLoading(show: boolean): void {
        window.__ANDROID_HANDLER__.setLoading(parseToString(show))
    }
    openCamera(): void {
        window.__ANDROID_HANDLER__.openCamera()
    }
    
}