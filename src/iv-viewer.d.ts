declare module 'iv-viewer' {
  export class ImageViewer {
    constructor(element: Element | null, options?: object);
    load(imageSrc: string, hiResImageSrc?: string): void;
    zoom(percent: number, point?: { x: number; y: number }): void;
    _state: { zoomValue: number };
  }

  export class FullScreenViewer extends ImageViewer {
    constructor(options?: object);
    show(imageSrc?: string, hiResImageSrc?: string): void;
    hide(): void;
  }

  const DefaultImageViewer: typeof ImageViewer;
  export default DefaultImageViewer;
}
