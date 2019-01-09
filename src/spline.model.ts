import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three';

export class SplineModel {
  private geometry: any;
  private material: any;
  private rotateY: number = Math.random() / 1000 * 10;
  private rotateX: number = Math.random() / 1000 * 10;
  private _mesh: any;

  constructor() {
    this.geometry = new BoxGeometry(10, 10, 10);
    this.material = new MeshBasicMaterial({
      color: 0x5CC0C7
    });
    this._mesh = new Mesh(this.geometry, this.material);
  }

  public update(): void {
    this._mesh.rotation.x += this.rotateX;
    this._mesh.rotation.y += this.rotateY;
  }

  public get mesh(): any {
    return this._mesh;
  }
}