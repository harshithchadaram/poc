import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropServiceHistoryComponent } from './prop-service-history.component';

describe('PropServiceHistoryComponent', () => {
  let component: PropServiceHistoryComponent;
  let fixture: ComponentFixture<PropServiceHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropServiceHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropServiceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
