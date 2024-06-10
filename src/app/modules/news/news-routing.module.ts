import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { AddNewsComponent } from './components/add-news/add-news.component';
import { NewsViewComponent } from './components/news-view/news-view.component';

const routes: Routes = [
  { path: 'list', component: NewsListComponent },
  { path: 'add', component: AddNewsComponent },
  { path: 'view', component: NewsViewComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
