import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiRegion, EasiText } from '../models';

@Component({
  tag: 'a-easi-region',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiRegionComponent {

  @Prop({ mutable: true })
  value: EasiRegion = EasiRegion.Head;

  render() {
console.info('region', Object.keys(EasiRegion))

    return <Host aria-role="menu">

      {Object.values(EasiRegion).map(i => <label
        aria-role="menuitemradio" aria-checked={this.value === i}
        onClick={e => this.changeHandler(e, i)}>{EasiText.region[i]}</label>
      )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiRegion): void {
    e.stopPropagation();

    this.value = value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiRegion>
}
