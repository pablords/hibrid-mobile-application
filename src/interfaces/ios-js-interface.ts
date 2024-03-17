import { JSInterface } from "./js.interface";

// Implementação para iOS
export class iOSJSInterface implements JSInterface {
    checkCameraHardware(): boolean {
        throw new Error("Method not implemented.");
    }
    setLoading(show: boolean): void {
        throw new Error("Method not implemented.");
    }
    openCamera(): void {
        // Lógica para abrir a câmera no iOS
    }
}