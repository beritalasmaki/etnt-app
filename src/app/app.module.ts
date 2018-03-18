import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { HelpComponent } from './help/help.component';
import { MainComponent } from './main/main.component';

const appRoutes: Routes = [
  { path: 'help', component: HelpComponent },
  { path: '',      component: MainComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot(
    appRoutes
  ),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
