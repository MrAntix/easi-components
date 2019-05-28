import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiExtent, EasiText, enumValues } from '../models';

@Component({
  tag: 'a-easi-extent',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiExtentComponent {

  @Prop({ reflectToAttr: true })
  disabled: boolean;

  @Prop({ mutable: true })
  value: EasiExtent = EasiExtent.E0;

  render() {
    return <Host aria-role="menu">
      {enumValues<number>(EasiExtent)
        .filter(extent => !!extent)
        .map(extent => <label
          aria-role="menuitemradio" aria-checked={this.value === extent}
          onClick={e => this.changeHandler(e, extent)}>
          {EasiText.extent[extent]}
        </label>
        )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiExtent): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? EasiExtent.E0 : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiExtent>
}
