import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss'],
})
export class ImageDialogComponent implements OnInit {

  @Input() image: string;

  constructor() { }

  ngOnInit() {}

}
