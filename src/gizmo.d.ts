/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />

declare type Style = {
	alwaysOnTop: boolean;
	color: Color3;
	layer: number;
	transparency: number;
	scale: number;
};

type OptionalStyle = Partial<Style>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface GizmoClass<T extends (...args: Array<any>) => void> {
	create: (...args: Parameters<T>) => GizmoClass<T>;
	disable(): void;
	draw: (...args: Parameters<T>) => void;
	drawWithStyle: (optional_style: OptionalStyle, ...args: Parameters<T>) => void;
	setStyle(optional_style: OptionalStyle): GizmoClass<T>;
	enable(): void;
	update(...args: Parameters<T>): void;

	style: Style;
}

declare namespace Gizmo {
	export const style: Style;

	export function enable(): typeof Gizmo;
	export function disable(): typeof Gizmo;

	export const point: GizmoClass<(position: Vector3) => void>;
	export const box: GizmoClass<(orientation: CFrame, size: Vector3) => void>;
	export const wirebox: GizmoClass<(orientation: CFrame, size: Vector3) => void>;
	export const sphere: GizmoClass<(position: Vector3, radius: number) => void>;
	export const wiresphere: GizmoClass<(position: Vector3, radius: number) => void>;
	export const line: GizmoClass<(from: Vector3, to: Vector3) => void>;
	export const arrow: GizmoClass<(from: Vector3, to: Vector3) => void>;
	export const ray: GizmoClass<(from: Vector3, direction: Vector3) => void>;
	export const plane: GizmoClass<(cframe: CFrame, size: Vector2 | undefined) => void>;
	export const text: GizmoClass<(position: Vector3, text: string, ...args: Array<number | string>) => void>;
}

export = Gizmo;
