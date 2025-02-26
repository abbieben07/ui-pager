import { View } from '@nativescript/core';
import {  PagerBase, PagerItem } from './index.common';

export { ItemsSource, PagerError, PagerLog, PagerItem } from './index.common';
export type Orientation = 'horizontal' | 'vertical';

export declare class Pager extends PagerBase {
    cache: boolean;

    itemTemplateUpdated(oldData: any, newData: any): void;

    readonly android: any;
    readonly ios: any;

    scrollToIndexAnimated(index: number, animate: boolean): void;

    eachChildView(callback: (child: View) => boolean): void;

    updateNativeIndex(oldIndex: number, newIndex: number): void;

    updateNativeItems(oldItems: View[], newItems: View[]): void;

    refresh(): void;

    disableSwipe: boolean;
    disableAnimation: boolean;

    requestLayout(): void;

    _addChildFromBuilder(name: string, value: any): void;

    _onItemsChanged(oldValue: any, newValue: any);

    getChildView(index: number): PagerItem;
}
