import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EventListingComponent } from './event-listing/event-listing.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { HostComponent } from './host/host.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductLineupComponent } from './host/product-lineup/product-lineup.component';
import { CommentsComponent } from './host/comments/comments.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighchartsChartModule } from 'highcharts-angular';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EventListingComponent,
    EventDetailComponent,
    HostComponent,
    DashboardComponent,
    CreateEventComponent,
    ProductLineupComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatBottomSheetModule,
    CarouselModule,
    MatTabsModule,
    HighchartsChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
