import { Geometry, BoxGeometry, BufferGeometry, SplineCurve, LineBasicMaterial, Vector2, MeshBasicMaterial, Mesh, Line } from 'three';

export class SplineComponent {
  private curve: any;
  private geometry: any;
  private material: any;
  private pointList: any = [[-10, 0], [-5, 5], [0, 0], [5, -5], [10, 0]];
  private shift: number = 0;
  private max: number = 300;
  private _mesh: any;

  constructor() {
    this.render();
  }

  private render(): void {
    this.curve = new SplineCurve(this.renderedVectors);
    this.geometry = new BufferGeometry().setFromPoints(
      this.curve.getPoints(50)
    );
    this.material = new LineBasicMaterial({
      color: 0x5CC0C7
    });

    this._mesh = new Line(this.geometry, this.material);
  }

  private get renderedVectors(): any {
    return this.pointList.map(
      vector => new Vector2(vector[0], vector[1])
    );
  }

  private get vectorList(): any {
    return this.curve.getPoints(this.max);
  }

  private shiftVector(vector: any, index: number): any {
    const indexShift = (index + this.shift) % this.max;

    return new Vector2(
      vector.x,
      this.vectorList[indexShift].y
    );
  }

  public update(): void {
    this.shift++;
    this.geometry = new BufferGeometry().setFromPoints(
      this.vectorList.map((vector, i) => {
        return this.shiftVector(vector, i);
      })
    );
    this._mesh.geometry = this.geometry;
  }

  public get mesh(): any {
    return this._mesh;
  }
}