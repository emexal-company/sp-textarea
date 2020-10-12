import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';

import { Textarea } from './textarea.component';

export default function standardTemplate(this: Textarea) {
   const inputClasses = {
      'spectrum-Textfield--quiet': this.quiet,
      'is-valid': this.valid,
      'is-invalid': this.invalid,
  };

  const labelClasses = {
      'spectrum-FieldLabel--left': (this.labelposition === 'left'),
  };

  return html`
      ${this.label !== '' ? html`<label class="spectrum-FieldLabel ${classMap(labelClasses)}">${this.label}</label>` : ''}
      <textarea
      style="width: ${this.width};"
      type="${this.type}"
      placeholder="${this.placeholder}"
      .value="${this.value}"
      name="${this.name}"
      @input="${this.handleChange}"
      class="spectrum-Textfield spectrum-Textfield--multiline ${classMap(inputClasses)}"
      ?disabled="${this.disabled}"
      ?required="${this.required}"
      >
      </textarea>
      `;
   
}
 