import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AllMovieComponent } from './components/home/all-movie/all-movie.component';
import { NewMovieComponent } from './components/home/new-movie/new-movie.component';
import { BannerComponent } from './components/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { GenreNamePipe } from './services/pipe/genre-name.pipe';
import { CarouselModule } from 'ngx-owl-carousel-o';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AllMovieComponent,
    NewMovieComponent,
    BannerComponent,
    GenreNamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
