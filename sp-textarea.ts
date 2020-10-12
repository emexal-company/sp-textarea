import { customElement, LitElement, property, PropertyValues, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { Base } from '@spectrum/base/sp-base';

@customElement('sp-textarea')
export class TextArea extends Base {
    @property({ type: String }) type = '';
    @property({ type: String }) label = '';

    @property({ type: String }) placeholder = '';
    @property({ type: String }) value = '';
    @property({ type: Boolean }) quiet = false;
    @property({ type: Boolean }) valid = false;
    @property({ type: Boolean }) invalid = false;
    @property({ type: Boolean }) disabled = false;
    @property({ type: String }) labelposition = 'top';

    render() {
        const inputClasses = {
            'spectrum-Textfield--quiet': this.quiet,
            'is-valid': this.valid,
            'is-invalid': this.invalid
        };

        const labelClasses = {
            'spectrum-FieldLabel--left': (this.labelposition == "left")
        };

        return html`
            ${this.label != '' ? html`<label class="spectrum-FieldLabel ${classMap(labelClasses)}">${this.label}</label>` : ''}
            <textarea 
                type="${this.type}" 
                placeholder="${this.placeholder}" 
                value="${this.value}" 
                @change="${this.handleChange}" 
                class="spectrum-Textfield spectrum-Textfield--multiline ${classMap(inputClasses)}"
                ?disabled="${this.disabled}" 
            ></textarea>`;
    }

    protected handleChange(e: any) {
        this.value = e.target.value;
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'sp-textarea': TextArea;
    }
}
