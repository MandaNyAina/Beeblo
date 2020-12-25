/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TailleComponent } from './taille.component';

describe('TailleComponent', () => {
  let component: TailleComponent;
  let fixture: ComponentFixture<TailleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TailleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TailleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
