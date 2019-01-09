import { Scene, WebGLRenderer, PerspectiveCamera, Color } from 'three';
import { env } from './config/environment';

export class AppComponent {
  private scene: any;
  private camera: any;
  private renderer: any;

  public objects: any = [];

  constructor() {
    this.clearScene();
    this.createScene();
  }

  private clearScene(): void {
    const canvas = document.body.querySelector('canvas');

    if (canvas instanceof Node && canvas !== undefined) {
      document.body.removeChild(canvas);
    }
  }

  private createScene(): void {
    const aspectRatio = window.innerWidth / window.innerHeight;

    this.scene = new Scene();
    this.renderer = new WebGLRenderer({antialias: true});
    this.camera = new PerspectiveCamera(env.fov, aspectRatio, env.near, env.far);

    this.camera.position.z = 20;
    this.scene.background = new Color(env.backgroundColor);
  
    document.body.appendChild(this.renderer.domElement);

    this.render();
  }

  private render(): void {
    requestAnimationFrame(() => {
      this.render();
    });
    this.objects.forEach(object => object.update());
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.render(this.scene, this.camera);
  }

  public add(object) {
    this.objects.push(object);
    this.scene.add(object.mesh);
    console.log(this.scene);
  }
}