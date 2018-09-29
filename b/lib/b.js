var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement } from "@polymer/lit-element";
import { AElement } from "a";
import { html as html_from_lit_html } from "lit-html";
import { html as html_from_lit_element } from "@polymer/lit-element";
import { html as html_from_a } from "a";
let B1 = class B1 extends AElement {
    render() {
        return html_from_lit_html `
            Rendered using "html" from "lit-html"
        `;
    }
};
B1 = __decorate([
    customElement('b-1')
], B1);
export { B1 };
let B2 = class B2 extends AElement {
    render() {
        return html_from_lit_element `
            Rendered using "html" from "lit-element"
        `;
    }
};
B2 = __decorate([
    customElement('b-2')
], B2);
export { B2 };
let B3 = class B3 extends AElement {
    render() {
        return html_from_a `
            Rendered using "html" from "a"
        `;
    }
};
B3 = __decorate([
    customElement('b-3')
], B3);
export { B3 };
//# sourceMappingURL=b.js.map