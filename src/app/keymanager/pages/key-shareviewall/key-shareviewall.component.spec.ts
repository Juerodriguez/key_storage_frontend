import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyShareviewallComponent } from './key-shareviewall.component';

describe('KeyShareviewallComponent', () => {
  let component: KeyShareviewallComponent;
  let fixture: ComponentFixture<KeyShareviewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyShareviewallComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyShareviewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
