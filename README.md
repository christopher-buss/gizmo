# About

_gizmo_ is a visual debug library designed for the Roblox game engine.

# Usage

## API Reference

### Types

The following types are supported:
- point: Position
- box: Orientation, Size
- wirebox: Orientation, Size
- sphere: Position, Radius
- wiresphere: Position, Radius
- line: Position, Position
- arrow: Position, Position
- ray: Position, Direction

### gizmo.\<type\>.draw(...) -> void

Renders the gizmo for a single frame

### gizmo.\<type\>.create(...) -> object

Creates a new object which can be rendered over multiple frames

### gizmo.\<type\>.createWithStyle(optional_style, ...) -> object

Creates a new object and applies the style
```ts
const arrow = Gizmo.arrow.createWithStyle({
  color: new Color3(1, 0, 0),
  scale: 2
}, Vector3.zero, Vector3.one.mul(15));
```

#### object.enable() => void

Starts rendering the gizmo

#### object.disable() => void

Stops rendering the gizmo

#### object.update(...) => void

Updates the gizmos appearance

#### object.style

Controls the 'style' of the gizmo

#### object.setStyle(optional_style) => void
Controls the 'style' of the gizmo
```ts
arrow.setStyle({
  alwaysOnTop: true
})
```

### gizmo.style

The global style used by default when creating or drawing a gizmo

## Examples

### Drawing an arrow frame-by-frame

```ts
RunService.PostSimulation.Connect(() => {
  Gizmo.arrow.draw(start, finish);
})
```

### Drawing a ray frame-by-frame with style

```ts
RunService.PostSimulation.Connect(() => {
  //allows to apply the style to the temporary object
  Gizmo.arrow.drawWithStyle({
    alwaysOnTop: true,
    color: new Color3(1, 0, 0),
    scale: 2,
  }, start, finish);
})
```

### Drawing an arrow with an object


```ts
const arrow = Gizmo.arrow.create(start, finish);
arrow.enable();

RunService.PostSimulation.Connect(() => {
  arrow.update(start, finish);
})
```
