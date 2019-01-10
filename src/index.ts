import { AppComponent as App } from './components/app.component';
import { SplineComponent as Spline } from './components/spline.component';
// Init application
const app = new App();
// Add new object to scene
app.add(
  new Spline()
);