import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomCreateComponent } from '../room/room-create/room-create.component';
import { RoomDetailsComponent } from '../room/room-details/room-details.component';
import { RoomListComponent } from '../room/room-list/room-list.component';
import { ContactScreenComponent } from '../shared/views/contact-screen/contact-screen.component';
import { HomeScreenComponent } from '../shared/views/home-screen/home-screen.component';
import { NotFoundScreenComponent } from '../shared/views/not-found-screen/not-found-screen.component';

const routes: Routes = [
  {
    path: "",
    component: HomeScreenComponent,
    pathMatch: "full"
  },
  {
    path: "rooms",
    children: [
      {
        path: "",
        component: RoomListComponent
      },
      {
        path: "schedule",
        component: RoomCreateComponent
      },
      {
        path: ":id",
        component: RoomDetailsComponent,
        pathMatch: "full"
      }
    ]
  },
  {
    path: "contact",
    component: ContactScreenComponent
  },
  {
    path: "**",
    component: NotFoundScreenComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
