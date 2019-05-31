import { Component, Event, EventEmitter, Prop, Host, h } from '@stencil/core';

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

  @Prop({ reflectToAttr: true })
  disabled: boolean;
  @Prop({ reflectToAttr: true })
  showText: boolean;

  @Prop()
  value: any;

  render() {
    if (!this.options) return 'options not set';
    if (this.showText && !this.optionsText) return 'optionText not set';

    return <Host aria-role="menu">
      {this.options
        .map(option => <label
          aria-role="menuitemradio" aria-checked={this.value === option}
          onClick={e => this.changeHandler(e, option)}>
          {this.showText ? this.optionsText[option] : option}
        </label>
        )}
    </Host>;
  }

  changeHandler(e: Event, value: any): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? null : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<any>
}
