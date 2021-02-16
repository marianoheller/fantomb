import { BehaviorSubject } from "rxjs";


export type Url = string | undefined
export const url$ = new BehaviorSubject<Url>(undefined)

export type Region = { start: number; end: number };
export type TRegion = Region | undefined;
export const region$ = new BehaviorSubject<TRegion>(undefined)