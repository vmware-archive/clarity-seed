/*
 * Copyright (c) 2016 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from "@angular/core";
import { PeopleService } from "app/people.service";
import { State } from "clarity-angular";

@Component({
    styleUrls: ['./home.component.scss'],
    templateUrl: './home.component.html',
    providers: [PeopleService]
})
export class HomeComponent {
    users = [];
    currentPage = 1;
    total = 0;
    loading = true;
    selected;

    constructor(private peopleService: PeopleService) {
    }

    refresh(state: State) {
        this.loading = true;
        this.peopleService.get(this.currentPage).subscribe(data => {
            this.users = data.results;
            this.total = data.count;
            this.loading = false;
        });
    }
}
