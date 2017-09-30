import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsComponent } from './reactive-forms.component';

describe('ReactiveFormsComponent', () => {
  let component: ReactiveFormsComponent;
  let fixture: ComponentFixture<ReactiveFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReactiveFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactiveFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should have user name', async(() => {
    expect(component.username).toBeTruthy();
  }));
  it('should have user id', async(() => {
    expect(component.id).toBeTruthy();
  }));
  it('should have user address', async(() => {
    expect(component.address).toBeTruthy();
  }));
  it('should have user website', async(() => {
    expect(component.website).toBeTruthy();
  }));
  it('should have user phone', async(() => {
    expect(component.phone).toBeTruthy();
  }));
  it('should have Zipcode', async(() => {
    expect(component.username).toBeTruthy();
  }));
  
});
