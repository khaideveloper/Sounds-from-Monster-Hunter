import { NgModule } from '@angular/core';
import { Base64 } from '@ionic-native/base64/ngx';
import { TranslatePipe } from './shared/pipes/translate/translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
  ],
  entryComponents: [

  ],
  imports: [
  ],
  exports: [ 
    TranslatePipe,
    Base64,
  ],
  providers: [
    Base64,
  ],
  bootstrap: [
      
  ]
})
export class SharedModule { }
