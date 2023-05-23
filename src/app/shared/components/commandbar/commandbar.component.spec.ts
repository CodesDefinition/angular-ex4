import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandbarComponent } from './commandbar.component';

describe('CommandbarComponent', () => {
  let component: CommandbarComponent;
  let fixture: ComponentFixture<CommandbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandbarComponent]
    });
    fixture = TestBed.createComponent(CommandbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
