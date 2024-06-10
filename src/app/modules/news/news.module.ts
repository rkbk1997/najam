import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsViewComponent } from './components/news-view/news-view.component';


@NgModule({
  declarations: [
    NewsListComponent,
    AddNewsComponent,
    NewsViewComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
