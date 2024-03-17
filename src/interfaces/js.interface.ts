export abstract class JSInterface {
    abstract openCamera(): void;
    abstract setLoading(show: boolean): void
    abstract checkCameraHardware(): boolean
    abstract activePlatform(): boolean
}

