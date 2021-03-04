/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NosDistributeurComponent } from './nos-distributeur.component';

describe('NosDistributeurComponent', () => {
  let component: NosDistributeurComponent;
  let fixture: ComponentFixture<NosDistributeurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosDistributeurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosDistributeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
