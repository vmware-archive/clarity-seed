/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { HomeComponent } from './home.component';

describe('HomeComponent with TCB', function () {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ClarityModule],
      declarations: [HomeComponent]
    });
  });

  it('should instantiate HomeComponent', async(() => {
    TestBed.compileComponents().then(() => {
      let fixture: ComponentFixture<any> = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      expect(fixture.componentInstance instanceof HomeComponent).toBe(true, 'should create HomeComponent');
    });
  }));
});
