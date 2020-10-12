import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import styles from './textarea.styles';
import standardTemplate from './textarea.template';
import { Textfield } from '@spectrum/sp-textfield';
let Textarea = class Textarea extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.label = '';
        this.placeholder = '';
        this.value = '';
        this.name = '';
        this.quiet = false;
        this.valid = false;
        this.invalid = false;
        this.disabled = false;
        this.labelposition = 'top';
        this.width = null;
        this.required = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Textarea.componentStyles = [Textfield.componentStyles, styles];
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "placeholder", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "value", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "name", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textarea.prototype, "quiet", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textarea.prototype, "valid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textarea.prototype, "invalid", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textarea.prototype, "disabled", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "labelposition", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", Object)
], Textarea.prototype, "width", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Object)
], Textarea.prototype, "required", void 0);
Textarea = __decorate([
    customElement('sp-textarea')
], Textarea);
export { Textarea };
//# sourceMappingURL=textarea.component.js.map