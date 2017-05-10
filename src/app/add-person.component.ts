import { Component } from '@angular/core';
@Component({
    selector : 'add-person',
    templateUrl : './partial-templates/add-person.html',
    styles : [
        `
            .add-new-person {
                background: #fff;
                border: 2px solid #1976D2;
                border-radius: 4px;
                box-shadow: 0 2px 2px rgba(0,0,0,0.24), 0 0 2px rgba(0,0,0,0.12);
                margin-bottom: 24px;
            }
        `
    ]
})
export class AddPersonComponent {
    cancelAddPerson () {
        // this.addNewPersonAreaExposed = false;
    };
    addPerson () {
        alert('Added');
    };

}