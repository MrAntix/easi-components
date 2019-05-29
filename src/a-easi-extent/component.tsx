import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { EasiExtents, EasiText, enumValues } from '../models';

@Component({
  tag: 'a-easi-extent',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiExtentComponent {
  @Prop({ reflectToAttr: true })
  disabled: boolean;
  @Prop({ reflectToAttr: true })
  showText: boolean;

  @Prop({ mutable: true })
  value: EasiExtents = EasiExtents.E0;

  render() {
    return <Host aria-role="menu">
      {enumValues<number>(EasiExtents)
        .map(extent => <label
          aria-role="menuitemradio" aria-checked={this.value === extent}
          onClick={e => this.changeHandler(e, extent)}>
          {this.showText ? EasiText.extent[extent] : extent}
        </label>
        )}
    </Host>;
  }

  changeHandler(e: Event, value: EasiExtents): void {
    e.stopPropagation();

    if (this.disabled) return;

    this.value = this.value === value ? EasiExtents.E0 : value;
    this.change.emit(this.value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<EasiExtents>
}
