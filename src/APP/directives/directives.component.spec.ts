import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesComponent } from './directives.component';

describe('DirectivesComponent', () => {
  let component: DirectivesComponent;
  let fixture: ComponentFixture<DirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should have user name', async(() => {
    expect(app.username).toBeTruthy();
  }));
  it('should have a report title', async(() => {
    expect(compiled.querySelector('.header').textContent).toContain('Directives');
  }));
  it('should have a loadData function', async(() => {
    expect(app.loadData).toBeTruthy();
  }));
  it('should have a get report button', async(() => {
    expect(compiled.querySelector('.ui-button-info').getAttribute('label')).toContain('Color');
  }));
  it('On hover of diretives.', async(() => {
    let spy = spyOn(app, 'load App');
    let btn = fixture.debugElement.query(By.css('.ui-button-info'));
    btn.triggerEventHandler('click', null);
    app.loadData();
    expect(spy).toHaveBeenCalled();
  }));
  it('should have a color changer ', async(() => {
    expect(compiled.querySelector('.ui-button-success').getAttribute('label')).toContain('Save');
  }));
  it('Color chnager should automatically change the color', async(() => {
    let spy = spyOn(app, 'saveData');
    let btn = fixture.debugElement.query(By.css('.ui-button-success'));
    btn.triggerEventHandler('click', null);
    expect(spy).toHaveBeenCalled();
  }));
});
