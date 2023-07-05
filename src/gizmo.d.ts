/// <reference types="@rbxts/types" />
/// <reference types="@rbxts/compiler-types" />

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare interface GizmoInstance<T extends (...args: Array<any>) => void> {
	create(...args: Parameters<T>): GizmoInstance<T>;
	disable(): void;
	draw: (...args: Parameters<T>) => void;
	enable(): void;
	update(...args: Parameters<T>): void;
}

declare type Style = {
	color: Color3;
	layer: number;
	transparency: number;
	scale: number;
};

declare namespace Gizmo {
	export const style: Style;

	export function enableGizmos(): void;
	export function disableGizmos(): void;

	export const point: GizmoInstance<(cframe: CFrame) => void>;
	export const box: GizmoInstance<(cframe: CFrame, size: Vector3) => void>;
	export const wirebox: GizmoInstance<(cframe: CFrame, size: Vector3) => void>;
	export const sphere: GizmoInstance<(cframe: CFrame, radius: number) => void>;
	export const wiresphere: GizmoInstance<(cframe: CFrame, radius: number) => void>;
	export const line: GizmoInstance<(start: Vector3, end: Vector3) => void>;
	export const arrow: GizmoInstance<(start: Vector3, end: Vector3) => void>;
	export const ray: GizmoInstance<(origin: Vector3, direction: Vector3) => void>;
	export const plane: GizmoInstance<(cframe: CFrame, size: Vector2 | undefined) => void>;
	export const text: GizmoInstance<(position: Vector3, text: string) => void>;
}

export = Gizmo;
