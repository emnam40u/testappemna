import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GreetingPage } from './greeting.page';

describe('GreetingPage', () => {
  let component: GreetingPage;
  let fixture: ComponentFixture<GreetingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
