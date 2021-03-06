import { Geometry, BoxGeometry, BufferGeometry, PointsMaterial, Vector2, Vector3, Mesh, AdditiveBlending, Points } from 'three';
import { env } from './../config/environment';

export class PointsComponent {
  private geometry: any;
  private material: any;
  private point: any;
  private color: any;
  private _mesh: any;

  /**
   * 
   * @param point THREE.Vector2
   * @param color number
   */
  constructor(point, color?: number) {
    this.point = point;
    this.color = color ? color : env.defaultColor;
    this.render();
  }

  /**
   * Taking a 2D list of points and generate a mesh from a
   * basic material and geometry.
   * 
   * @return void
   */
  private render(): void {
    this.geometry = new Geometry();
    this.material = new PointsMaterial({
      color: this.color,
      size: 8,
      transparent: false,
      sizeAttenuation: false
    });
    this.geometry.vertices.push(
      new Vector3(this.point[0], this.point[1], 0)
    );

    this._mesh = new Points(
      this.geometry, 
      this.material
    );
  }

  /**
   * @return void
   */
  public update(): void {
  }

  /**
   * Getter function to the rendered object.
   * 
   * @return THREE.Points
   */
  public get mesh(): any {
    return this._mesh;
  }
}