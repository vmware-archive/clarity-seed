/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { async, TestBed, ComponentFixture } from "@angular/core/testing";
import { ClarityModule } from 'clarity-angular';
import { HomeComponent } from './home.component';
import { PeopleService } from "../people.service";
import { HttpModule } from "@angular/http";

describe('HomeComponent', () => {

    let fixture: ComponentFixture<any>;
    let compiled: any;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                HomeComponent
            ],
            imports: [
                ClarityModule,
                HttpModule
            ],
            providers: [
                PeopleService
            ]
        });

        fixture = TestBed.createComponent(HomeComponent);
        fixture.detectChanges();
        compiled = fixture.nativeElement;

    });

    afterEach(() => {
        fixture.destroy();
    });

    it('should create the home page', async(() => {
        expect(compiled).toBeTruthy();
    }));

});
