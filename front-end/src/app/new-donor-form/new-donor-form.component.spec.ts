import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewDonorFormComponent } from './new-donor-form.component';

describe('NewDonorFormComponent', () => {
  let component: NewDonorFormComponent;
  let fixture: ComponentFixture<NewDonorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDonorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewDonorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
