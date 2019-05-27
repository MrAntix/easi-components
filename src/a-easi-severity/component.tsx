import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiSeverity, EasiText, enumValues } from '../models';

@Component({
  tag: 'a-easi-severity',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiSeverityComponent {

  @Prop({ mutable: true })
  value: EasiSeverity = EasiSeverity.None;

  render() {
    return <Host aria-role="menu">
      {enumValues<number>(EasiSeverity).map(severity => <label
        aria-role="menuitemradio" aria-checked={this.value === severity}
        onClick={e => this.changeHandler(e, severity)}>{EasiText.severity[severity]}</label>
      )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiSeverity): void {
    e.stopPropagation();

    this.value = value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiSeverity>
}
