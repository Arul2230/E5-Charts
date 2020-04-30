import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppLayoutComponent } from './layout/app-layout/app-layout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BarchartComponent } from './components/barchart/barchart.component';

@NgModule({
  declarations: [
    AppComponent,
    AppLayoutComponent,
    SidebarComponent,
    DashboardComponent,
    BarchartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
