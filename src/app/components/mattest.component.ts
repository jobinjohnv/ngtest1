import { Component } from '@angular/core'

@Component({
    selector : 'mattest',
    template : `<md-sidenav-container class="example-container">
  <md-sidenav #sidenav class="example-sidenav">
    Jolly good!
  </md-sidenav>

  <div class="example-sidenav-content">
    <button md-button (click)="sidenav.open()">
      Open sidenav
    </button>
  </div>

</md-sidenav-container>`,
})

export class MattestComponent{

}