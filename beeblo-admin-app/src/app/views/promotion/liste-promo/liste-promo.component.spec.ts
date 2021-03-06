/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListePromoComponent } from './liste-promo.component';

describe('ListePromoComponent', () => {
  let component: ListePromoComponent;
  let fixture: ComponentFixture<ListePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePromoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
