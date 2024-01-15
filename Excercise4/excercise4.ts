/* Exercice: Is there a problem and improve the code (5 points)
@Component({
  selector: 'app-users',
  template: `
    <input type="text" [(ngModel)]="query" (ngModelChange)="querySubject.next($event)">
    <div *ngFor="let user of users">
        {{ user.email }}
    </div>
  `
})
export class AppUsers implements OnInit {

  query = '';
  querySubject = new Subject<string>();

  users: { email: string; }[] = [];

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    concat(
      of(this.query),
      this.querySubject.asObservable()
    ).pipe(
      concatMap(q =>
        timer(0, 60000).pipe(
          this.userService.findUsers(q)
        )
      )
    ).subscribe({
      next: (res) => this.users = res
    });
  }
}


EXPLANATION
(Assuming that the imports are all correct, OnInit, Subject from rxjs,...)
There are many errors on the code:

    1.- The use of concatMap is to concatenate a new emisión and attend it when is posible,
    But in this case that we are changing the query until it's ok, we might want to cancel
    the call to the service until the user is done with the edition of query.
    In order to do that, we can change concatenateMap to switchMap, that cancels the emission
    of the service, avoiding to do innecesary HTTP requests until the query is conformed for the user.

    2.- Use map in the pipe, beacuse if we do not do that, we are not assinging propperly the value
    of this.users to the result of the this.userService.findUsers() function.

With that being said, the code improved would look like this:

*/

@Component({
    selector: 'app-users',
    template: `
      <input type="text" [(ngModel)]="query" (ngModelChange)="querySubject.next($event)">
      <div *ngFor="let user of users">
          {{ user.email }}
      </div>
    `
})
export class AppUsers implements OnInit {

    query = '';
    querySubject = new Subject<string>();

    users: { email: string; }[] = [];

    constructor(private userService: UserService) { }

    ngOnInit(): void {
        this.querySubject.pipe(
            switchMap(query => {
                timer(0, 60000).pipe(switchMap(() => this.userService.findUsers(query)),
                    map(ret => this.users = ret)
                )
            }).subscribe();
        );

    }
}