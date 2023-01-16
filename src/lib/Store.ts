import { writable } from 'svelte/store';

export enum StyleType {
	Slick = 'slick',
	Glass = 'glass'
}

export const styleType = writable<StyleType>(StyleType.Slick);

export const setStyleType = (style: StyleType) => styleType.set(style);
