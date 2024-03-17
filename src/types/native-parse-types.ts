export interface AndroidNativeParseTypes {
    openCamera(): void;
    setLoading(show: string): void
    checkCameraHardware(): string
}

export interface IosNativeParseTypes{
    openCamera: {
        postMessage(message: string): void
    }
    setLoading: {
        postMessage(message: string): void
    }
    checkCameraHardware: {
        postMessage(message: string): string
    }
}