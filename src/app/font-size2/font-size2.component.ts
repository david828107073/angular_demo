import {
  Attribute,
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-font-size2',
  templateUrl: './font-size2.component.html',
  styleUrls: ['./font-size2.component.css'],
})
export class FontSize2Component implements OnInit {
  @Input() size!: number;

  @Output() sizeChange = new EventEmitter<number>();

  constructor(@Attribute('color') public color: string) {}

  onSetFontSize(value: number): void {
    this.size += value;
    this.sizeChange.emit(this.size);
  }

  ngOnInit(): void {}
}
