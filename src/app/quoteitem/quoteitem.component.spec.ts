import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteitemComponent } from './quoteitem.component';

describe('QuoteitemComponent', () => {
  let component: QuoteitemComponent;
  let fixture: ComponentFixture<QuoteitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
