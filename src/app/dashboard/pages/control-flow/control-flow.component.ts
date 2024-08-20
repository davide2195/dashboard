import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from "../../../shared/title/title.component";

type Grade = 'A'|'B'|'F';

@Component({
  standalone: true,
  imports: [CommonModule, TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {

  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public cocktails = signal(['Mojito','Margarita','Bloody Mary','Moscow Mule','Cosmopolitan']);

  public cocktails2 = signal([]);

  public toggleContent() {
    this.showContent.update( value => !value)
  };




}
