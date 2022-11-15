import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-font-size3',
  templateUrl: './font-size3.component.html',
  styleUrls: ['./font-size3.component.css'],
})
export class FontSize3Component implements OnInit {
  @Input() size!: number;

  @Output() sizeChange = new EventEmitter<number>();

  onSetFontSize(value: number): void {
    this.size += value;
    this.sizeChange.emit(this.size);
  }

  constructor() {}

  ngOnInit(): void {}
}
