import { Component, Event, EventEmitter, Prop, Host, h, Method } from '@stencil/core';
import { IEasiMessages, easiEmptyMessages, easiRequiredMessage } from '../../models';

@Component({
  tag: 'a-easi-select',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiSelectComponent {

  @Prop()
  options: any[] = []
  @Prop()
  optionsText: { [key: string]: string } = {};
  @Prop()
  nullValue: any = null;

  @Prop({ reflect: true })
  required: boolean = false;
  @Prop({ reflect: true })
  disabled: boolean = false;
  @Prop({ reflect: true })
  showText: boolean = false;

  @Prop({ mutable: true })
  value?: any;
  @Prop({ mutable: true })
  errors?: IEasiMessages;

  @Method()
  async validate(): Promise<IEasiMessages> {

    if (this.disabled) return easiEmptyMessages;
    if (!this.required) return easiEmptyMessages;

    return this.value == null ? easiRequiredMessage : easiEmptyMessages;
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


    return <Host invalid={this.errors !== easiEmptyMessages}>
      <div role="menu" class="options">
        {this.options
          .map(option => <label key={option}
            role="menuitemradio" aria-checked={this.value === option}
            onClick={e => this.changeHandler(e, option)}>
            <span>{this.showText ? this.optionsText[option] : option}</span>
          </label>
          )}
      </div>
      <a-easi-messages value={this.errors} type="warning" />
    </Host>;
  }

  changeHandler(e: Event, value: any): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? this.nullValue : value;
    this.valueChange.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  valueChange!: EventEmitter<any>
}
