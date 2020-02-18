import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfClothesComponent } from './list-of-clothes.component';

describe('ListOfClothesComponent', () => {
  let component: ListOfClothesComponent;
  let fixture: ComponentFixture<ListOfClothesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfClothesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfClothesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
