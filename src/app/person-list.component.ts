import { Component } from '@angular/core';
import { Person } from './person';
import { FilterPersonPipe } from './person-list.pipe';
import { AddPersonComponent } from './add-person.component';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

const mockPersons : Person[] =  [
            {
                "name" : "Chikku",
                "age" : 10
            },
            {
                "name" : "Ashraf",
                "age" : 11
            },
            {
                "name" : "Bibin",
                "age" : 12
            },
            {
                "name" : "Archana",
                "age" : 13
            },
            {
                "name" : "George",
                "age" : 14
            }    
        ];


@Component({
  selector: 'person-list',
  //moduleId: module.id,
  templateUrl : './partial-templates/person-list.html'
  /*template: `
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
            <tr>
                <td>John</td>
                <td>Doe</td>
                <td>john@example.com</td>
            </tr>
            <tr>
                <td>Mary</td>
                <td>Moe</td>
                <td>mary@example.com</td>
            </tr>
            <tr>
                <td>July</td>
                <td>Dooley</td>
                <td>july@example.com</td>
            </tr>
            </tbody>
        </table>  
  `,*/
})
export class PersonListComponent { 
    private persons : Person[];
    private addNewPersonAreaExposed : boolean;
    constructor(private http: Http) {
        this.persons = mockPersons;
        this.addNewPersonAreaExposed = false;
        this.fetchDataFromService();
    };
    fetchDataFromService (): Promise<Hero[]> {
        return this.http.get('./../people.json')
               .toPromise()
               .then(response => {response.json().data as Hero[]; debugger; })
               .catch(this.handleError);
        }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };   
    addNewPersonClickHandler () {
        this.addNewPersonAreaExposed = true;
    };
    deletePersonClickHandler (index) {
        console.log(index);
        this.persons.splice(index, 1);
    };
}



