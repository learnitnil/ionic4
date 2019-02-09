import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosPage } from './heros.page';

describe('HerosPage', () => {
  let component: HerosPage;
  let fixture: ComponentFixture<HerosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
