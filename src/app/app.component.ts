import {ChangeDetectionStrategy, Component} from '@angular/core';

import packageInfo  from 'package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  angularVersion = packageInfo.version;
}
