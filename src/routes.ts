import { Routes } from '@angular/router';
import { EventsListComponent } from './app/events/events-list.component';
import { EventDetailsComponent } from './app/events/event-details/event-details.component';
import { CreateEventComponent } from './app/events/create-event.component';
import { EventRouteActivator as EventRouteActivator } from './app/events/event-details/event-route-activator.service';
import { Error404Component } from './app/error/404.component';
import { EventListResolver } from './app/events/events-list-resolver.service';

export const appRoutes: Routes = [
  {
    path: 'events',
    component: EventsListComponent,
    resolve: {
      events: EventListResolver
    }
  },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: 'events', pathMatch: 'full' },
];
