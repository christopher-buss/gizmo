/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />

declare type Style = {
	alwaysOnTop: boolean;
	color: Color3;
	layer: number;
	transparency: number;
	scale: number;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface GizmoClass<T extends (...args: Array<any>) => void> {
	create: (...args: Parameters<T>) => GizmoClass<T>;
	disable(): void;
	draw: (...args: Parameters<T>) => void;
	enable(): void;
	update(...args: Parameters<T>): void;

	style: Style;
}

declare namespace Gizmo {
	export const style: Style;

	export function enable(): void;
	export function disable(): void;

	export const point: GizmoClass<(cframe: CFrame) => void>;
	export const box: GizmoClass<(cframe: CFrame, size: Vector3) => void>;
	export const wirebox: GizmoClass<(cframe: CFrame, size: Vector3) => void>;
	export const sphere: GizmoClass<(cframe: CFrame, radius: number) => void>;
	export const wiresphere: GizmoClass<(cframe: CFrame, radius: number) => void>;
	export const line: GizmoClass<(start: Vector3, end: Vector3) => void>;
	export const arrow: GizmoClass<(start: Vector3, end: Vector3) => void>;
	export const ray: GizmoClass<(origin: Vector3, direction: Vector3) => void>;
	export const plane: GizmoClass<(cframe: CFrame, size: Vector2 | undefined) => void>;
	export const text: GizmoClass<(position: Vector3, text: string) => void>;
}

export = Gizmo;
