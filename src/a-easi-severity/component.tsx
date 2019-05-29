import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiSeverities, EasiText, enumValues } from '../models';

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
  value: EasiSeverities = EasiSeverities.None;

  render() {
    return <Host aria-role="menu">
      {enumValues<number>(EasiSeverities)
        .filter(severity => !!severity)
        .map(severity => <label
          aria-role="menuitemradio" aria-checked={this.value === severity}
          onClick={e => this.changeHandler(e, severity)}>
          {this.showText ? EasiText.severity[severity] : severity}
        </label>
        )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiSeverities): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? EasiSeverities.None : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiSeverities>
}
