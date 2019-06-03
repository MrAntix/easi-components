import { Component, Event, EventEmitter, Prop, Host, h, Method } from '@stencil/core';
import { IEasiMessages, EasiEmptyMessages, EasiRequiredMessage } from '../models';

@Component({
  tag: 'a-easi-select',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiSelectComponent {

  @Prop()
  options: any[] = []
  @Prop()
  optionsText: { [key: string]: string };
  @Prop()
  nullValue: any = null;

  @Prop({ reflectToAttr: true })
  required: boolean;
  @Prop({ reflectToAttr: true })
  disabled: boolean;
  @Prop({ reflectToAttr: true })
  showText: boolean;

  @Prop()
  value: any;
  @Prop()
  errors: IEasiMessages;

  @Method()
  async validate(): Promise<IEasiMessages> {

    if (this.disabled) return EasiEmptyMessages;
    if (!this.required) return EasiEmptyMessages;

    return this.value == null ? EasiRequiredMessage : EasiEmptyMessages;
  }

  async componentWillLoad() {

    this.componentDidUpdate();
  }

  async componentDidUpdate() {

    this.errors = await this.validate();
  }

  render() {
    if (!this.options) return 'options not set';
    if (this.showText && !this.optionsText) return 'optionText not set';


    return <Host aria-role="menu" invalid={this.errors !== EasiEmptyMessages}>
      {this.options
        .map(option => <label
          aria-role="menuitemradio" aria-checked={this.value === option}
          onClick={e => this.changeHandler(e, option)}>
          <span>{this.showText ? this.optionsText[option] : option}</span>
        </label>
        )}
      <a-easi-messages value={this.errors} type="warning" />
    </Host>;
  }

  changeHandler(e: Event, value: any): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? this.nullValue : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<any>
}
