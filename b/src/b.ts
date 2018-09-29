import { customElement } from "@polymer/lit-element";
import { TemplateResult } from "lit-html";
import { AElement } from "a";

import { html as html_from_lit_html } from "lit-html";
import { html as html_from_lit_element } from "@polymer/lit-element";
import { html as html_from_a } from "a";

@customElement('b-1' as any)
export class B1 extends AElement {
    protected render(): TemplateResult {
        return html_from_lit_html`
            Rendered using "html" from "lit-html"
        `;
    }
}

@customElement('b-2' as any)
export class B2 extends AElement {
    protected render(): TemplateResult {
        return html_from_lit_element`
            Rendered using "html" from "lit-element"
        `;
    }
}
@customElement('b-3' as any)
export class B3 extends AElement {
    protected render(): TemplateResult {
        return html_from_a`
            Rendered using "html" from "a"
        `;
    }
}
