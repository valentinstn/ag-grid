import { Component, FilterChangedEvent, IFloatingFilterComp, IFloatingFilterParams, AgPromise } from '@ag-grid-community/core';
import { IMultiFilterModel } from './multiFilter';
export declare class MultiFloatingFilterComp extends Component implements IFloatingFilterComp {
    private readonly userComponentFactory;
    private floatingFilters;
    private params;
    constructor();
    init(params: IFloatingFilterParams): AgPromise<void>;
    onParentModelChanged(model: IMultiFilterModel, event: FilterChangedEvent): void;
    destroy(): void;
    private createFloatingFilter;
}
