import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ClickTravelService } from '../services/click-travel.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  tickets: any;
  dest$: any;

  constructor(public clickTravelService: ClickTravelService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dest$ = this.route.snapshot.params['dest'];
  }

  ngAfterViewInit(){
    console.log(this.dest$)
    this.getDreamDestination(this.dest$)
  }

  getDreamDestination(dest: string){
    this.clickTravelService.getTickets().pipe(
      map(tickets => tickets.filter(ticket => ticket.to === dest))
    ).subscribe(tickets => {
      this.tickets = tickets
      console.log(this.tickets)
    });
  }
}
