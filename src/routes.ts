import { Routes } from '@angular/router';


import { Error404Component } from './app/error/404.component';
import { EventsListComponent, EventListResolver, CreateEventComponent, EventDetailsComponent, EventRouteActivator } from './app/events';

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
