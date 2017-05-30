import { ElementRef, AfterViewInit, OnDestroy, EventEmitter, Renderer } from '@angular/core';
import { DomHandler } from '../dom/domhandler';
export declare class Dialog implements AfterViewInit, OnDestroy {
    el: ElementRef;
    domHandler: DomHandler;
    renderer: Renderer;
    header: string;
    draggable: boolean;
    resizable: boolean;
    minWidth: number;
    minHeight: number;
    width: any;
    height: any;
    positionLeft: number;
    positionTop: number;
    contentStyle: any;
    modal: boolean;
    closeOnEscape: boolean;
    dismissableMask: boolean;
    rtl: boolean;
    closable: boolean;
    responsive: boolean;
    appendTo: any;
    style: any;
    styleClass: string;
    showHeader: boolean;
    headerFacet: any;
    containerViewChild: ElementRef;
    contentViewChild: ElementRef;
    onShow: EventEmitter<any>;
    onHide: EventEmitter<any>;
    visibleChange: EventEmitter<any>;
    _visible: boolean;
    dragging: boolean;
    documentDragListener: Function;
    resizing: boolean;
    documentResizeListener: Function;
    documentResizeEndListener: Function;
    documentResponsiveListener: Function;
    documentEscapeListener: Function;
    maskClickListener: Function;
    lastPageX: number;
    lastPageY: number;
    mask: HTMLDivElement;
    container: HTMLDivElement;
    contentContainer: HTMLDivElement;
    closeIconMouseDown: boolean;
    constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);
    visible: boolean;
    show(): void;
    positionOverlay(): void;
    hide(): void;
    close(event: Event): void;
    ngAfterViewInit(): void;
    center(): void;
    enableModality(): void;
    disableModality(): void;
    unbindMaskClickListener(): void;
    moveOnTop(): void;
    onCloseMouseDown(event: Event): void;
    initDrag(event: MouseEvent): void;
    onDrag(event: MouseEvent): void;
    endDrag(event: MouseEvent): void;
    initResize(event: MouseEvent): void;
    onResize(event: MouseEvent): void;
    ngOnDestroy(): void;
}
export declare class DialogModule {
}
