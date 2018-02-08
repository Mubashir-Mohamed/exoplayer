import { Component } from "@angular/core";
import {registerElement} from "nativescript-angular/element-registry";
registerElement("exoplayer", () => require("nativescript-exoplayer").Video);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }
