import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import styles from './textarea.styles';
import standardTemplate from './textarea.template';

import { Textfield} from '@spectrum/sp-textfield';

@customElement('sp-textarea')
export class Textarea extends Base {
  public static componentStyles = [ Textfield.componentStyles, styles ];

  @property({ type: String }) type = '';
  @property({ type: String }) label = '';
  @property({ type: String }) placeholder = '';
  @property({ type: String }) value = '';
  @property({ type: String }) name = '';
  @property({ type: Boolean }) quiet = false;
  @property({ type: Boolean }) valid = false;
  @property({ type: Boolean }) invalid = false;
  @property({ type: Boolean }) disabled = false;
  @property({ type: String }) labelposition = 'top';
  @property({ type: String }) width = null;
  @property({ type: Boolean }) required = false;

  protected render() {
    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-textarea': Textarea;
  }
}
