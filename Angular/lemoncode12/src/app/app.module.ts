import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomSearchComponent } from './components/utils/custom-search/custom-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { SearchByLoginPipe } from './pipes/search-by-login.pipe';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuPublicComponent } from './layout/menu-public/menu-public.component';
import { MenuPrivateComponent } from './layout/menu-private/menu-private.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MatToolbarModule } from '@angular/material/toolbar';

const MaterialComponents = [MatToolbarModule];

@NgModule({
  declarations: [
    AppComponent,
    CustomSearchComponent,
    HighlightDirective,
    SearchByLoginPipe,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    AboutComponent,
    MenuPublicComponent,
    MenuPrivateComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialComponents,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
