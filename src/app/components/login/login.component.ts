import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, Renderer2} from '@angular/core';
import {User} from '../../models/user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {GameService} from '../../services/game.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  @Output() logIn: EventEmitter<any> = new EventEmitter();
  loggedUser: User;
  username: string;
  password: string;
  deckId: string;
  cardList: [];

  // tslint:disable-next-line: max-line-length
  constructor(private authenticationService: AuthenticationService, private router: Router, private el: ElementRef, private renderer: Renderer2,
              private gameService: GameService) {
  }

  ngOnInit() {
    this.username = '';
    this.password = '';
    // check if anyone is already logged in
    this.authenticationService.login(null, null).subscribe(
      resp => {
        this.loggedUser = resp;
      }
    );
  }

  ngAfterViewInit(){
    this.renderer.setStyle(this.el.nativeElement.ownerDocument.body, 'backgroundColor', '#343a40');
 }

  onClick() {
    this.gameService.newGame().subscribe(res => this.deckId = res.deck_id);
    this.gameService.draw(this.deckId,2).subscribe(res => {
      this.cardList = res.cards;
      console.log(this.cardList);
      }
    );
    // this.gameService.draw();
    // this.authenticationService.login(this.username, this.password).subscribe(
    //   resp => {
    //     this.loggedUser = resp;
    //     this.logIn.emit(null);
    //     this.router.navigate(['menu']);
    //   }
    // );
  }

}
