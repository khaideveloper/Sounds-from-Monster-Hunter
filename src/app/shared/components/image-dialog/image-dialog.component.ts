import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
})
export class ImageDialogComponent {

  //#region Variables

  @Input() image: string;

  //#endregion

  //#region Init

  constructor(

  ) {

  }

  //#endregion

  //#region Methods

  //#endregion

}
