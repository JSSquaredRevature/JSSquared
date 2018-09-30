import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavbarComponent } from './topnavbar/topnavbar.component';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TopnavbarComponent, SidenavbarComponent, FooterComponent],
  exports: [TopnavbarComponent, SidenavbarComponent, FooterComponent]
})
export class LayoutModule { }
