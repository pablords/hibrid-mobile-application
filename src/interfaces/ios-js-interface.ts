import { parseToBoolean, parseToString } from "../utils/parse";
import { JSInterface } from "./js.interface";

// Implementação para iOS
export class iOSJSInterface extends JSInterface {
    checkCameraHardware(): boolean {
        const nativeResponse = window.webkit.messageHandlers.checkCameraHardware.postMessage("")
        return parseToBoolean(nativeResponse)
    }
    setLoading(show: boolean): void {
        window.webkit.messageHandlers.setLoading.postMessage(parseToString(show))
    }
    openCamera(): void {
        window.webkit.messageHandlers.openCamera.postMessage("")
    }
    activePlatform(): boolean {
        return Boolean(window.webkit)
    }
}
