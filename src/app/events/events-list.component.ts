import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr

@Component({
  template: `
  <div>
    <h1>Upcoming Angular Events</h1>
    <hr/>
    <div class="row">
      <div *ngFor="let event of events" class="col-md-5">
        <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event"></event-thumbnail>
      </div>
    </div>
  </div>
  `
})
export class EventsListComponent implements OnInit {
  events: IEvent[]

  constructor(private eventService: EventService, private route: ActivatedRoute) {

  }

  ngOnInit() {
   this.events = this.route.snapshot.data['events'];
  }
}
