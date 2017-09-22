import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoSecondComponent } from './todo-second.component';

describe('TodoSecondComponent', () => {
  let component: TodoSecondComponent;
  let fixture: ComponentFixture<TodoSecondComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoSecondComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
