import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding: 0 20px; }
    .event-image {height: 100px; }
  `]
})
export class EventDetailsComponent implements OnInit{
  event: IEvent;

  constructor(private eventService: EventService, private routes:ActivatedRoute) {}

  ngOnInit(){
    this.event = this.eventService.getEvent(+this.routes.snapshot.params['id']);
  }

}
