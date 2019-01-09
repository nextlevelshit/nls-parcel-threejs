import { Geometry, BoxGeometry, BufferGeometry, SplineCurve, LineBasicMaterial, Vector2, MeshBasicMaterial, Mesh, Line } from 'three';

export class SplineModel {
  private curve: any;
  private geometry: any;
  private material: any;
  private rotateY: number = Math.random() / 1000 * 10;
  private rotateX: number = Math.random() / 1000 * 10;
  private _mesh: any;

  constructor() {
    this.curve = new SplineCurve([
      new Vector2(-10, 0),
      new Vector2(-5, 5),
      new Vector2(0, 0),
      new Vector2(5, -5),
      new Vector2(10, 0)
    ]);

    this.geometry = new BufferGeometry().setFromPoints(
      this.curve.getPoints(50)
    );
    this.material = new LineBasicMaterial({
      color: 0x5CC0C7
    });

    this._mesh = new Line(this.geometry, this.material);
  }

  public update(): void {
    // this._mesh.rotation.x += this.rotateX;
    // this._mesh.rotation.y += this.rotateX
  }

  public get mesh(): any {
    return this._mesh;
  }
}