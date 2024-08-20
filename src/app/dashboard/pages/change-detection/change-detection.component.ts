import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, TitleComponent],
  template: `

  <app-title [title]="currentCockteil()" />

  <pre> {{ cockailAsSignal() | json }} </pre>
  <pre> {{ cockailAsProperty | json }}</pre>

  `,

})
export default class ChangeDetectionComponent {

  public currentCockteil = computed(
    () => `Change detection - ${ this.cockailAsSignal().name }`
  )

  public cockailAsSignal = signal({
    name: 'Mojito',
    baseLiquor: 'Rum'
  })

  public cockailAsProperty = {
    name: 'Mojito',
    baseLiquor: 'Rum'
  };

  constructor() {

    setTimeout( () => {


      // this.cockailAsProperty.name = 'Cosmopolitan';
      this.cockailAsSignal.update( value => ({
        ...value,
        name: 'Cosmopolitan'
      }))



      console.log('Done');
    }, 3000);
  }


}
