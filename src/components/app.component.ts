import { Scene, WebGLRenderer, PerspectiveCamera, Color } from 'three';
import { env } from './../config/environment';

export class AppComponent {
  private scene: any;
  private camera: any;
  private renderer: any;
  public objects: any = [];

  constructor() {
    this.clearScene();
    this.createScene();
  }

  /**
   * Remove existing canvas, if already existing.
   * 
   * @return void
   */
  private clearScene(): void {
    const canvas = document.body.querySelector('canvas');

    if (canvas instanceof Node && canvas !== undefined) {
      document.body.removeChild(canvas);
    }
  }

  /** 
   * Create a full with and full height scene based on window size.
   * Initiate an empty scene, renderer and set camera.
   * Finally append the rendered DOM element to document.
   * 
   * @return void
   */
  private createScene(): void {
    const aspectRatio = window.innerWidth / window.innerHeight;

    this.scene = new Scene();
    this.renderer = new WebGLRenderer({antialias: true});
    this.camera = new PerspectiveCamera(env.fov, aspectRatio, env.near, env.far);

    this.camera.position.z = env.cameraPosition.z;
    this.scene.background = new Color(env.backgroundColor);
  
    document.body.appendChild(this.renderer.domElement);

    this.render();
  }

  /**
   * Request Animation Frames on every update and
   * re-render scene with updated object list.
   * 
   * @return void
   */
  private render(): void {
    requestAnimationFrame(() => {
      this.render();
    });
    this.objects.forEach(object => object.update());
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }

  /**
   * Add object to scene.
   * 
   * @param object 
   * @return void
   */
  public add(object): void {
    this.objects.push(object);
    this.scene.add(object.mesh);
  }
}