import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Event, NavigationEnd, Router } from "@angular/router";
import { MatSidenav } from "@angular/material/sidenav";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavItem {
    name: string;
    disabled?: boolean;
    icon?: IconDefinition;
    route?: string;
    subItems?: NavItem[];
}

@Injectable({
    providedIn: "root"
})

export class NavService {
    
    //@ts-ignore
    public currentUrl = new BehaviorSubject<string>();
    public sideNav!: MatSidenav;

    constructor(private router: Router) {
        this.router.events.subscribe((event: Event) => {
            if (event instanceof NavigationEnd) {
                this.currentUrl.next(event.url);
            }
        });
    }

    public closeSideNav() {
        this.sideNav.close();
    }

    public openSideNav() {
        this.sideNav.open();
    }

}