import { AppComponent as App } from './components/app.component';
import { SplineComponent as Spline } from './components/spline.component';
import { CurveComponent as Curve } from './components/curve.component';
import { BezierCurveComponent as BezierCurve } from './components/bezier-curve.component';
import { PointsComponent as Points } from './components/points.component';
// Init application
const app = new App();
const curve = [[-20, 30], [-10, 0], [-5, 5], [0, 0], [5, -5], [10, 0]];
const bezierCurve = [[-10, -10], [-2.5, 20], [2.5, -20], [10, 10]];

// Add new objects to scene
app.add(new Spline(curve, {
  color: 0xE54975
}));
curve.map(point => {
  app.add(new Points(point, 0xE54975));
});
app.add(new Curve(curve, {
  tension: 0.6,
  color: 0x1D73AD
}));
app.add(new BezierCurve(bezierCurve, {
  color: 0x6CBC82
}));

bezierCurve.map(point => {
  app.add(new Points(point, 0x6CBC82));
});