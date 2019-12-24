import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { LayoutModule } from "@angular/cdk/layout";
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule
} from "@angular/material";
import { NavComponent } from "./nav/nav.component";
import { MatProgressBarModule } from "@angular/material/progress-bar";

import { ParticipantsComponent } from "./participants/participants.component";
import { MatInputModule } from "@angular/material/input";
import { TabControlComponent } from "./tab-control/tab-control.component";
import { MatTabsModule } from "@angular/material/tabs";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material";
import { MatChipsModule } from "@angular/material/chips";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { AmazingTimePickerModule } from "amazing-time-picker";
import { SettingsComponent } from "./settings/settings.component";
import { NotificationTemplateComponent } from "./notification-template/notification-template.component";
import { MatExpansionModule } from "@angular/material/expansion";
import { ICLComponent } from "./icl/icl.component";
import { ProgramDetailsComponent } from "./program-details/program-details.component";
import { ProgramSettingComponent } from './program-setting/program-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ParticipantsComponent,
    TabControlComponent,
    SettingsComponent,
    NotificationTemplateComponent,
    ICLComponent,
    ProgramDetailsComponent,
    ProgramSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressBarModule,
    MatInputModule,
    MatTabsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    AmazingTimePickerModule,
    MatExpansionModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
