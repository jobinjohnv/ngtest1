import { Component } from '@angular/core';

@Component({
    selector: 'user',
    template: `<p>The user selected is {{name}} and the age is {{id}}<p>
    <p>Adress is <b>Street: </b>{{address.street}}
    <b>State: </b>{{address.state}}
    </p>
    <button (click) = "toggleHobbies()">{{showHobbies ? 'Hide Button' : 'Show Button'}}</button>
    <div *ngIf = "showHobbies">
    <ul>
        <li *ngFor = "let hoby of hobbies">{{hoby}}</li>
    
    </ul>
    </div>`,

})
export class UsersComponent {
     name : string;
     id : string;
     address: address;
     hobbies : string[];
     showHobbies : boolean

     constructor()
     {
         this.name = 'Jobin John',
         this.id = '28',
         this.address = {
             street : '7 Cambridge court',
             state : 'Wembley'
         },
         this.hobbies = ['Movies', 'cricket', 'Sports'],
         this.showHobbies = false;

     }

     toggleHobbies(){
         if (this.showHobbies == false)
         {
         this.showHobbies = true;
         }else{
             this.showHobbies = false;
         }
     }

 }

interface address{
    street : string;
    state : string;

}

