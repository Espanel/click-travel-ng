import { Component } from '@angular/core';
import { ClickTravelService } from './services/click-travel.service';
// RxJS v6+
import { map } from 'rxjs/operators';
import { Destination } from './models/destination'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
