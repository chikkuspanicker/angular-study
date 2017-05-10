import { Pipe, PipeTransform } from '@angular/core';
import { Person } from './person';
@Pipe({name: 'filterPerson'})
export class FilterPersonPipe implements PipeTransform {
     transform(persons : Person[], searchText) {
         if (typeof(searchText) === 'undefined') {
             return persons;
         }
         else {
             if (searchText.length === 0) {
                 return persons;
             }
             else {
                 persons = persons.filter((item : any) => {
                      if(item.name.indexOf(searchText) !== -1) {
                           return (item);
                     }
                 });  
                 return persons;
             }
         }         
     }
} 