import { Base } from '@spectrum/sp-base';
export declare class Textarea extends Base {
    static componentStyles: any[];
    type: string;
    label: string;
    placeholder: string;
    value: string;
    name: string;
    quiet: boolean;
    valid: boolean;
    invalid: boolean;
    disabled: boolean;
    labelposition: string;
    width: any;
    required: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-textarea': Textarea;
    }
}
