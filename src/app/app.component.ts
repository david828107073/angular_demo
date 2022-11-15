import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "Angular";
  purchaseCount = 10;
  unitPrice = 200;
  fontSize = 16;
  fontColor = "#F12";
  fontSizeType = 'small';

  onSetFontSize(value: number) : void {
    this.fontSize += value;
  }

  onSizeChange(size:number) : void {
    console.log(size);
    this.fontSize = size;
  }

  get fontClass () : string {
    return `${this.fontSizeType}-font`;
  }
}
