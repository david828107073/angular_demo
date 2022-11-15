import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-font-size-var',
  templateUrl: './font-size-var.component.html',
  styleUrls: ['./font-size-var.component.css'],
})
export class FontSizeVarComponent implements OnInit {
  @Input() size = 12;

  onSetFontSize(size: number): void {
    this.size += size;
  }

  constructor() {}

  ngOnInit(): void {}
}
