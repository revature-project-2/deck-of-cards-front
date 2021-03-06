import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { LoginComponent } from '../../components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from '../../app-routing.module';
import { BlackjackComponent } from '../blackjack/blackjack.component';
import { GameComponent } from '../game/game.component';
import { MenuComponent } from '../menu/menu.component';
import { MygamesComponent } from '../mygames/mygames.component';
import { RegisterComponent } from '../register/register.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, FormsModule, AppRoutingModule ],
      // tslint:disable-next-line: max-line-length
      declarations: [ LoginComponent, BlackjackComponent, CardComponent, GameComponent, MenuComponent, MygamesComponent, RegisterComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
