import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyDecryptSharedComponent } from './key-decrypt-shared.component';

describe('KeyDecryptSharedComponent', () => {
  let component: KeyDecryptSharedComponent;
  let fixture: ComponentFixture<KeyDecryptSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyDecryptSharedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyDecryptSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
