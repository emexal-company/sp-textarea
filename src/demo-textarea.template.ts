import { html } from 'lit-element';
import { DemoTextarea } from './demo-textarea.component';

import '@spectrum/sp-textarea';
import '@spectrum/sp-container';


export default function template(this: DemoTextarea) {
  return html`

  <sp-container>

      <sp-rule medium label="Standard"></sp-rule>

      <sp-demo width="200">
        <pre><sp-textarea  placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea disabled placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea valid required placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea invalid required placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>

      <sp-rule medium label="Quiet"></sp-rule>

      <sp-demo width="200">
        <pre><sp-textarea  quiet placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea quiet disabled placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea quiet valid required placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-textarea quiet invalid required placeholder="Enter your life story"></sp-textarea></pre>
      </sp-demo>

  </sp-container>
  `;
  
}
