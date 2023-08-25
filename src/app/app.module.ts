import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardNewComponent } from './components/card-new/card-new.component';
import { HomeComponent } from './views/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminGuard } from './guards/AdminGuard';
import { AdminPanelComponent } from './views/admin-panel/admin-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './views/login/login.component';
import { CategoryComponent } from './components/category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewDialogComponent } from './dialogs/new-dialog/new-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NewFormDialogComponent } from './dialogs/new-form-dialog/new-form-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    NavbarComponent,
    CardNewComponent,
    HomeComponent,
    AdminPanelComponent,
    LoginComponent,
    CategoryComponent,
    NewDialogComponent,
    NavbarAdminComponent,
    NewFormDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  providers: [AdminGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
