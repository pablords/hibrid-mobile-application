import { parseToBoolean, parseToString } from "../utils/parse";
import { JSInterface } from "./js.interface";

// Implementação para Android
export class AndroidJSInterface implements JSInterface {
    checkCameraHardware(): boolean {
       const nativeResponse = window.__WEB_VIEW_BRIDGE__.checkCameraHardware()
       return parseToBoolean(nativeResponse)
    }
    setLoading(show: boolean): void {
        window.__WEB_VIEW_BRIDGE__.setLoading(parseToString(show))
    }
    openCamera(): void {
        window.__WEB_VIEW_BRIDGE__.openCamera()
    }
    
}