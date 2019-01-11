import { Geometry, BoxGeometry, BufferGeometry, LineBasicMaterial, Vector2, MeshBasicMaterial, Mesh, Line, CubicBezierCurve } from 'three';
import { ISplineOptions } from './../interfaces/spline-options.interface';
import { env } from './../config/environment'

export class BezierCurveComponent {
  private curve: any;
  private geometry: any;
  private material: any;
  private pointList: any;
  private shift: number = 0;
  private max: number = 300;
  private color: number;
  private _mesh: any;

  /**
   * 
   * @param pointList THREE.Vector2
   * @param color number
   * @param curveType string
   */
  constructor(pointList: any, options?: ISplineOptions) {
    this.pointList = pointList;
    this.color = options.color 
      ? options.color 
      : env.defaultColor;
    this.render();
  }

  /**
   * Taking a matrix of 2D points and generating a curve,
   * which is separated into smaller intervals.
   * Finally colored by a material and rendered.
   * 
   * @return void
   */
  private render(): void {
    this.curve = new CubicBezierCurve(...this.matrix);
    this.geometry = new BufferGeometry().setFromPoints(
      this.vectorList
    );
    this.material = new LineBasicMaterial({
      color: this.color,
      linewidth: env.defaultLineWidth
    });

    this._mesh = new Line(this.geometry, this.material);
  }

  /**
   * Generate a list of vectores from a 2D matrix.
   * 
   * @return THREE.Vector2[]
   */
  private get matrix(): any {
    return this.pointList.map(
      vector => new Vector2(vector[0], vector[1])
    );
  }

  /**
   * Generate a list of 2D vectors and separated into 
   * smaller intervals.
   * 
   * @return THREE.Vector2[]
   */
  private get vectorList(): any {
    return this.curve.getPoints(this.max);
  }

  /**
   * Shift y-parameter by `this.shift` to iterate
   * the sine curve step by step for an animation.
   * 
   * @return THREE.Vector2
   */
  private shiftVector(vector: any, index: number): any {
    const indexShift = (index + this.shift) % this.max;

    return new Vector2(
      vector.x,
      this.vectorList[indexShift].y
    );
  }

  public update(): void {
  }

  /**
   * Getter function to the rendered object.
   * 
   * @return THREE.Line
   */
  public get mesh(): any {
    return this._mesh;
  }
}