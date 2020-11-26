import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Destination } from '../models/destination';
import { ClickTravelService } from '../services/click-travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Choose your dream destination...';
  destinations: Destination;
  constructor(public clickTravelService: ClickTravelService, private router: Router) {
   }

  ngOnInit(): void {  }

  ngAfterViewInit(){

    this.getDreamDestination()
  }

  navigate(dest){
    this.router.navigate(['/ticket', dest])
  }

  getDreamDestination(){
    this.clickTravelService.getDestinations().pipe(
      map(destinations => destinations.filter(destination => destination.isDreamDestination === true))
    ).subscribe(destinations => {
      this.destinations = destinations
      console.log(this.destinations)
    });
  }
}
