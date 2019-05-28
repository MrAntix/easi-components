import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiSeverity, EasiText, enumValues } from '../models';

@Component({
  tag: 'a-easi-severity',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiSeverityComponent {
  @Prop({ reflectToAttr: true })
  disabled: boolean;
  @Prop({ reflectToAttr: true })
  showText: boolean;

  @Prop({ mutable: true })
  value: EasiSeverity = EasiSeverity.None;

  render() {
    return <Host aria-role="menu">
      {enumValues<number>(EasiSeverity)
        .filter(severity => !!severity)
        .map(severity => <label
          aria-role="menuitemradio" aria-checked={this.value === severity}
          onClick={e => this.changeHandler(e, severity)}>
          {this.showText ? EasiText.severity[severity] : severity}
        </label>
        )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiSeverity): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? EasiSeverity.None : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiSeverity>
}
