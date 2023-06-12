import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.css']
})
export class PieComponent {
  @Input() public texto: string = "Copyright"; 
  @Input() public year: number = new Date().getFullYear();
}
