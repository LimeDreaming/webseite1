import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CpuComponent } from './cpu/cpu.component';
import { HddComponent } from './hdd/hdd.component';
import { NeueOrdnerComponent } from './neue-ordner/neue-ordner.component';
import { OrdnerComponent } from './ordner/ordner.component';
import { AaaComponent } from './aaa/aaa.component';
import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CpuComponent,
    HddComponent,
    NeueOrdnerComponent,
    OrdnerComponent,
    AaaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
