/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />

declare interface Style {
	alwaysOnTop: boolean;
	color: Color3;
	layer: number;
	scale: number;
	transparency: number;
	visible: boolean;
}

type OptionalStyle = Partial<Style>;

type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Callback ? K : never }[keyof T];

declare interface GizmoClass<
	T extends (...args: Array<FunctionPropertyNames<InstanceType<typeof Gizmo>>>) => void,
> {
	create: (...args: Parameters<T>) => GizmoClass<T>;
	createWithStyle: (optionalStyle: OptionalStyle, ...args: Parameters<T>) => GizmoClass<T>;
	disable(): void;
	draw: (...args: Parameters<T>) => void;
	drawWithStyle: (optionalStyle: OptionalStyle, ...args: Parameters<T>) => void;
	enable(): void;
	getStyle(): Style;
	setStyle(optionalStyle: OptionalStyle): void;
	update(...args: Parameters<T>): void;
}

declare namespace Gizmo {
	export const style: Style;
	
	export function enable(): typeof Gizmo;
	export function disable(): typeof Gizmo;
	export function pop(): void;
	export function push(): void;

	export const point: GizmoClass<(position: Vector3) => void>;
	export const box: GizmoClass<(orientation: CFrame, size: Vector3) => void>;
	export const wirebox: GizmoClass<(orientation: CFrame, size: Vector3) => void>;
	export const sphere: GizmoClass<(position: Vector3, radius: number) => void>;
	export const wiresphere: GizmoClass<(position: Vector3, radius: number) => void>;
	export const line: GizmoClass<(from: Vector3, to: Vector3) => void>;
	export const arrow: GizmoClass<(from: Vector3, to: Vector3) => void>;
	export const ray: GizmoClass<(from: Vector3, direction: Vector3) => void>;
	export const plane: GizmoClass<(cframe: CFrame, size: Vector2 | undefined) => void>;
	export const text: GizmoClass<
		(position: Vector3, text: string, ...args: Array<number | string>) => void
	>;
}

export = Gizmo;
