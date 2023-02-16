import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeySharepostComponent } from './key-sharepost.component';

describe('KeySharepostComponent', () => {
  let component: KeySharepostComponent;
  let fixture: ComponentFixture<KeySharepostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeySharepostComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeySharepostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
