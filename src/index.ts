import { AppComponent as App } from './components/app.component';
import { SplineComponent as Spline } from './components/spline.component';

const app = new App();

app.add(
  new Spline()
);