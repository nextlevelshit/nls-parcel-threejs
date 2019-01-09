import { AppComponent as App } from './app.component';
import { SplineModel as Spline } from './spline.model';

const app = new App();

app.add(
  new Spline()
);

/**
 * Meine Liebe passierte dich wie ein Sieb.
 * Bald wirst du mich einfach vergessen.
 * 
 * Irgendwas wird hängen geblieben sein,
 * aber dann werd ich nicht mehr sein.
 * 
 * Die Augen stets gen der Zukunft.
 * Die Augen stets gen der Erleichterung.
 * 
 * Mit reiner Müh und Not,
 * suchst du die Liebe zu nötigen.
 * 
 * Dabei suchte ich stets die Möglichkeit,
 * in dir meine Liebe zu pflanzen.
 * 
 * Ganz zwanglos und rein,
 * wollte ich ganz dein sein.
 * 
 * Jetzt hast du die Augen gen Horizont
 * mit aufgeklärtem Blick.
 * 
 * Bald stolzierst du schon ganz allein.
 * Und ich um meine Chance betrogen,
 * dein Herz zu erobern,
 * dich für mich zu gewinnen.
 * 
 * Ich bot dir mein Herz,
 * wie im Guten und im Schlechten.
 * 
 * 
 * 
 * Ich habe die Angst eines Tages aufzuwachen und zu spüren, dass meine Liebe
 * dahin ist. Dass wir es geschafft haben uns vollständig zu entlieben. Nur 
 * weil du es gerne leichter haben wolltest. Unkomplizierter. Weniger Drama.
 * 
 * Aber wie kannst du das erwarten, wenn du dafür nichts tun willst? Denkst
 * du etwa, dass es dir die Unbekümmertheit einfach zufliegt? Dass du das
 * beste aus beiden Welten dir nimmst und den Rest einfach liegen lassen
 * kannst? Nur weil du dich schon so lange mit freier Liebe auseinander
 * gesetzt hast, heißt es doch noch lange nicht, dass du von mir diese Reise
 * auch erwarten kannst.
 * 
 * Du hast bereits bewiesen, dass du mich vergessen kannst. Dass du mir
 * irreversible Schäden zufügen kannst ohne mit der Wimper zu zucken. Du
 * verhälst dich unberechenbar und rücksichtlos. Und jedes Mal, wenn man
 * dich mit dieser Seite deines Seins konfrontiert, ziehst du deine Wand
 * hoch. Du bist überfordert und weißt nicht, wie du den Ansprüchen genügen
 * sollst. Du hast kein Ziel, du hast keine Sicherheit, du hast kein Vertrauen.
 * 
 * Willst du mich so sehr loswerden? Willst du so sehr ein unbeschwertes Leben?
 * Ohne was dafür gemacht zu haben?
 * 
 * Wenn das so ist, wirst du damit enden, dass du die Freude und das temporäre
 * Glücksgefühl über das andauernde Glück stellen wirst. Du wirst das Eigen-
 * nützige über das Gemeinnützige, und dich über andere stellen. Das kann 
 * wunderbar funktionieren, bis du realisieren wirst, dass du dich in mitten
 * von lauter eigennütziger Menschen befinden wirst. Jeder wird nur nach sich 
 * schauen und du wirst immer die Nr. 2 bleiben.
 * 
 * Angenommen du gehst heute mit Arno tanzen. Wusstest es schon seit ein paar 
 * Tagen. Hast wissentlich verschwiegen, dass du deswegen am Freitag nach Berlin
 * willst, um dich "zu aklimatisieren". Corinna, das ist Betrug. Du hättest mir
 * das sagen müssen. Jetzt bin ich wieder einmal derjenige, der dessen 
 * Mutmaßungen sich bewahrheiten. Wie kannst du bloß denken, dass du mir das 
 * verheimlichen kannst?
 */

// const positionList = function() {
//   const meshList = [];

//   for (let i = 0; i < 5; i++) {
//     const mesh = new Mesh();

//     mesh.position.x = Math.random() * 1000 - 500;
//     mesh.position.y = Math.random() * 600;
//     mesh.position.z = Math.random() * 800 - 400;

//     console.log(mesh);

//     meshList.push(mesh);
//   }

//   return meshList;
// };


// const curveList = function() {
//   const group = new Group();
//   // const curve = new CatmullRomCurve3(positionList());
//   const material = new LineBasicMaterial({
//     color: 0xff0000
//   });
//   // const geometry = new Geometry();

//   // curve.curveType = 'catmullrom';
//   // curve.mesh = new Line(
//   //   geometry.clone(), 
//   //   material
//   // );
//   // curve.mesh.castShadow = true;


//   const curve = new SplineCurve([
//     new Vector2(-10, 0),
//     new Vector2(-5, 5),
//     new Vector2(0, 0),
//     new Vector2(5, -5),
//     new Vector2(10, 0)
//   ]);
//   const points = curve.getPoints(50);
//   const geometry = new BufferGeometry();

//   geometry.setFromPoints(points);

//   group.add(Line(geometry, material));
  
//   return group;
// }

// const aspectRatio = window.innerWidth / window.innerHeight;

// const scene = new Scene();
// const renderer = new WebGLRenderer({antialias: true});
// const camera = new PerspectiveCamera(env.fov, aspectRatio, env.near, env.far);

// scene.background = new Color(env.backgroundColor);
// scene.add(curveList());

// renderer.setSize(window.innerWidth, window.innerHeight);
// renderer.render(scene, camera);

// document.body.appendChild(renderer.domElement);