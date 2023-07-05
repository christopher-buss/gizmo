// eslint-disable-next-line @typescript-eslint/no-explicit-any
interface GizmoInstance<T extends (...args: Array<any>) => void> {
	create(...args: Parameters<T>): GizmoInstance<T>;
	disable(): void;
	draw(...args: Parameters<T>): void;
	enable(): void;
	update(...args: Parameters<T>): void;
}

export type Style = {
	color: Color3;
	layer: number;
	transparency: number;
	scale: number;
};

export namespace Gizmo {
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
}
