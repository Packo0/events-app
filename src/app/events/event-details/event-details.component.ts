import { Component, OnInit } from '@angular/core';
import { EventService } from '../shared/event.service';
import { ActivatedRoute } from '@angular/router';
import { IEvent, ISession } from '../shared';

@Component({
  templateUrl: './event-details.component.html',
  styles: [`
    .container {padding: 0 20px; }
    .event-image {height: 100px; }
    a { cursor: pointer; }
  `]
})
export class EventDetailsComponent implements OnInit {
  event: IEvent;
  addMode: boolean;
  filterBy: string = 'all';
  sortBy: string = 'vote';

  constructor(private eventService: EventService, private routes: ActivatedRoute) { }

  ngOnInit() {
    this.routes.data.forEach((data) => {
      this.event = data['event'];
      this.addMode = false;
    })
  }

  addSession() {
    this.addMode = true;
  }

  saveNewSession(session: ISession) {
    const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));

    session.id = nextId + 1;

    this.event.sessions.push(session);
    this.eventService.updateEvent(this.event);

    this.addMode = false;
  }

  cancelAddSession() {
    this.addMode = false;
  }

}
