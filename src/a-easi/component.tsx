import { Component, Prop, h, Host } from '@stencil/core';
import { IEasi, EasiRegion, EasiSign, EasiText, EasiDefault, EasiSeverity } from '../models';

@Component({
  tag: 'a-easi',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiComponent {

  @Prop({ mutable: true })
  value: IEasi = EasiDefault;

  @Prop({ reflectToAttr: true })
  selectedRegion: EasiRegion = null;

  render() {
    if (!this.value) return;

    return <Host>
      <a-easi-ernie value={this.value}
        selectedRegion={this.selectedRegion} onSelectRegion={e => this.changeRegionHandler(e, e.detail)}></a-easi-ernie>
      <main>
        <a-easi-region value={this.selectedRegion}
          onChange={e => this.changeRegionHandler(e, e.detail)}
        />
        {this.selectedRegion != null && Object.values(EasiSign).map(sign =>
          <div class="sign">
            <label class="sign-label">{EasiText.sign[sign]}</label>
            <a-easi-severity value={this.value[this.selectedRegion][sign]}
              onChange={e => this.changeSeverityHandler(e, sign, e.detail)}></a-easi-severity>
          </div>
        )}

      </main>
    </Host>;
  }

  changeRegionHandler(e: Event, value: EasiRegion): void {
    e.stopPropagation();

    this.selectedRegion = value;
  }

  changeSeverityHandler(e: Event, sign: EasiSign, severity: EasiSeverity): void {
    e.stopPropagation();

    console.log('region', this.selectedRegion)

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        [sign]: severity
      }
    }

    console.log('change', sign, severity, this.value, value);

    this.value = value;
  }
}
