import { AppComponent as App } from './components/app.component';
import { SplineComponent as Spline } from './components/spline.component';
import { CurveComponent as Curve } from './components/curve.component';
import { BezierCurveComponent as BezierCurve } from './components/bezier-curve.component';
import { PointsComponent as Points } from './components/points.component';
// Init application
const app = new App();
const curve = [[-20, 30], [-10, 0], [-5, 5], [5, -5], [10, 0]];
const curveList = [
  [[-20, 30], [-10, 0], [-5, 8], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 7], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 6], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 5], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 4], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 3], [5, -5], [10, 0]],
  [[-20, 30], [-10, 0], [-5, 2], [5, -5], [10, 0]]
];
const bezierCurve = [[-10, -10], [-2.5, 20], [2.5, -20], [10, 10]];
const bezierCurveList = [
  [[-10, -10], [-2.5, 20], [2.5, -20], [10, 10]],
  [[-10, -10], [-2.5, 21], [2.5, -20], [10, 10]],
  [[-10, -10], [-2.5, 22], [2.5, -20], [10, 10]],
  [[-10, -10], [-2.5, 23], [2.5, -20], [10, 10]],
  [[-10, -10], [-2.5, 24], [2.5, -20], [10, 10]],
  [[-10, -10], [-2.5, 25], [2.5, -20], [10, 10]]
];

// Add new objects to scene
// app.add(new Spline(curve, {
//   color: 0xE54975
// }));
// curve.map(point => {
//   app.add(new Points(point, 0xE54975));
// });
app.add(new Curve(curve, {
  tension: 0.7,
  color: 0x1D73AD
}));
curveList.map(curve => {
  app.add(new Curve(curve, {
    tension: 0.7,
    color: 0x1D73AD
  }));
})
curve.map(point => {
  app.add(new Points(point, 0x1D73AD));
});
// app.add(new BezierCurve(bezierCurve, {
//   color: 0x6CBC82
// }));
bezierCurveList.map(bezierCurve => {
  app.add(new BezierCurve(bezierCurve, {
    color: 0x6CBC82
  }));
  bezierCurve.map(point => {
    app.add(new Points(point, 0x6CBC82));
  });
});

