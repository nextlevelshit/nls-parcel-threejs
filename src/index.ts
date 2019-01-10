import { AppComponent as App } from './components/app.component';
import { SplineComponent as Spline } from './components/spline.component';
import { PointsComponent as Points } from './components/points.component';
// Init application
const app = new App();
const pointList = [[-10, 0], [-5, 5], [0, 0], [5, -5], [10, 0]];

// Add new objects to scene
app.add(new Spline(pointList));
pointList.map(point => {
  app.add(new Points(point));
});