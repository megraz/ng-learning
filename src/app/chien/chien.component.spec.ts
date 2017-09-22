import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChienComponent } from './chien.component';

describe('ChienComponent', () => {
  let component: ChienComponent;
  let fixture: ComponentFixture<ChienComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChienComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
