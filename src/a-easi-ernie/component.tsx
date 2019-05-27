import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { IEasi, EasiRegion } from '../models';

@Component({
  tag: 'a-easi-ernie',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiErnieComponent {

  @Prop({ mutable: true })
  value: IEasi

  @Prop({ reflectToAttr: true }) head: number;
  @Prop({ reflectToAttr: true }) trunk: number;
  @Prop({ reflectToAttr: true }) upper: number;
  @Prop({ reflectToAttr: true }) lower: number;

  @Prop({ reflectToAttr: true })
  selectedRegion: EasiRegion = null;

  render() {
    return <Host>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 240"
        onClick={e => this.selectRegionHandler(e, null)}>
        <g class={{
          "head-neck": true,
          [`score-${this.head || 0}`]: true,
          selected: this.selectedRegion === EasiRegion.Head
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegion.Head)}>
          <path d="M85,45 85,54 75,54 75,45 A20,22.5 1,1,1 85,45Z" />
        </g>
        <g class={{
          "trunk": true,
          [`score-${this.trunk || 0}`]: true,
          selected: this.selectedRegion === EasiRegion.Trunk
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegion.Trunk)}>
          <path d="M65,60 95,60 105,130 55,130 65,60Z" />
        </g>
        <g class={{
          "upper-limbs": true,
          [`score-${this.upper || 0}`]: true,
          selected: this.selectedRegion === EasiRegion.Upper
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegion.Upper)}>
          <path d="M60,60 55,85 10,140 0,136 5,130 0,130 0,125 5,125 60,60Z" />
          <path d="M100,60 105,85 150,140 160,136 155,130 160,130 160,125 155,125 100,60Z" />
        </g>
        <g class={{
          "lower-limbs": true,
          [`score-${this.lower || 0}`]: true,
          selected: this.selectedRegion === EasiRegion.Lower
        }}
          onClick={e => this.selectRegionHandler(e, EasiRegion.Lower)}>
          <path d="M55,136 105,136 100,230 105,235 105,240 85,240 85,150 75,150 75,240 55,240 55,235 60,230 55,140Z" />
        </g>
      </svg>
    </Host>;
  }

  selectRegionHandler(e: MouseEvent, region: EasiRegion): void {
    e.stopPropagation();

    this.selectRegion.emit(region);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  selectRegion: EventEmitter<EasiRegion>
}


