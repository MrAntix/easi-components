import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { IEasi, EasiRegions, calculateRegionLevel, EasiDefault } from '../models';

@Component({
  tag: 'a-easi-ernie',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiErnieComponent {

  @Prop()
  value: IEasi = EasiDefault;

  @Prop({ reflectToAttr: true })
  selectedRegion: EasiRegions = null;

  render() {
    const value = this.value ||EasiDefault;

    return <Host>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 240"
        onClick={e => this.selectRegionHandler(e, null)}>
        <g class={{
          "head-neck": true,
          [`level-${calculateRegionLevel(value[EasiRegions.Head])}`]: true,
          selected: this.selectedRegion === EasiRegions.Head
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegions.Head)}>
          <path d="M85,45 85,54 75,54 75,45 A20,22.5 1,1,1 85,45Z" />
        </g>
        <g class={{
          "trunk": true,
          [`level-${calculateRegionLevel(value[EasiRegions.Trunk])}`]: true,
          selected: this.selectedRegion === EasiRegions.Trunk
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegions.Trunk)}>
          <path d="M65,60 95,60 105,130 55,130 65,60Z" />
        </g>
        <g class={{
          "upper-limbs": true,
          [`level-${calculateRegionLevel(value[EasiRegions.Upper])}`]: true,
          selected: this.selectedRegion === EasiRegions.Upper
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegions.Upper)}>
          <path d="M60,60 55,85 10,140 0,136 5,130 0,130 0,125 5,125 60,60Z" />
          <path d="M100,60 105,85 150,140 160,136 155,130 160,130 160,125 155,125 100,60Z" />
        </g>
        <g class={{
          "lower-limbs": true,
          [`level-${calculateRegionLevel(value[EasiRegions.Lower])}`]: true,
          selected: this.selectedRegion === EasiRegions.Lower
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegions.Lower)}>
          <path d="M55,136 105,136 100,230 105,235 105,240 85,240 85,150 75,150 75,240 55,240 55,235 60,230 55,140Z" />
        </g>
      </svg>
    </Host>;
  }

  selectRegionHandler(e: MouseEvent, region: EasiRegions): void {
    e.stopPropagation();

    this.selectRegion.emit(region);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  selectRegion: EventEmitter<EasiRegions>
}


