import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopyTokenComponent } from './copy-token.component';
import { InputSignal, signal } from '@angular/core';

describe('CopyTokenComponent', () => {
  let component: CopyTokenComponent;
  let fixture: ComponentFixture<CopyTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CopyTokenComponent]
    })
      .overrideComponent(CopyTokenComponent, {
        set: { inputs: ['value'] }
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CopyTokenComponent);
    component = fixture.componentInstance;

    component.value = signal('mock-token') as unknown as InputSignal<string>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
