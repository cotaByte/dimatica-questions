/*Exercice: Improve performance (5 points)

@Component({
    selector: 'app-users',
    template: `
      <div *ngFor="let user of users">
          {{ getCapitalizeFirstWord(user.name) }}
      </div>
    `
  })
  export class AppUsers {
  
    @Input()
    users: { name: string; }[];
  
    constructor() {}
    
    getCapitalizeFirstWord(name: string): string {
      return name.split(' ').map(n => n.substring(0, 1).toUpperCase() + n.substring(1).toLowerCase()).join(' ');
    }
  }

  EXPLANATION

  The function getCaptitalizeFirstWord() creates a array based from the split of the name variable and for each element
  in this array, calls to the function substring two times to apply toUpperCase() function to the first letter of each word
  and concatenate the rest of the word to it. At the end, joins it all in a string separated by a space.

  APROCACH

  As we are working with strings, for these case, we could use regular expresions to improve the function performance, as we do not
  create any extra variables, avioding to use extra memory. Also the code turns into a better readable code.

  With that being said, the function getCapitalizeFirstWord() would look like this:
*/

function getCapitalizeFirstWord(name: string): string {
    return name.replace(/\b\w/g, (letter) => letter.toUpperCase())
}

