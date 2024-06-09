import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './components/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



const EXPORTED_COMPONENTS = [
  MainComponent,
  HeaderComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    ...EXPORTED_COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule
  ],
  exports: [
    ...EXPORTED_COMPONENTS
  ]
})
export class SharedModule { }
