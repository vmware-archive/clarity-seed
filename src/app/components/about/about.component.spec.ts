/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { AboutComponent } from './about.component';

describe('AboutComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [AboutComponent]
    });
  });

  it('should instantiate AboutComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(AboutComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof AboutComponent).toBe(true, 'should create AboutComponent');
    });
  }));
});
