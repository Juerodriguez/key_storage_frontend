import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyViewallComponent } from './key-viewall.component';

describe('KeyViewallComponent', () => {
  let component: KeyViewallComponent;
  let fixture: ComponentFixture<KeyViewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyViewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyViewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
