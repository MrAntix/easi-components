import { Component, Prop, h, Host, Watch, Event, EventEmitter } from '@stencil/core';
import { IEasi, EasiRegion, EasiSign, EasiText, EasiDefault, EasiSeverity, EasiExtent } from '../models';

@Component({
  tag: 'a-easi',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiComponent {

  @Prop({ reflectToAttr: true })
  showText: boolean;

  @Prop({ mutable: true })
  value: IEasi;
  @Watch('value')
  setValue() {
    if (!this.value)
      this.value = EasiDefault;
  }

  @Prop({ reflectToAttr: true })
  selectedRegion: EasiRegion = EasiRegion.Head;

  componentWillLoad() {
    this.setValue();
  }

  render() {
    if (!this.value) return;

    return <Host>
      <a-easi-ernie value={this.value}
        selectedRegion={this.selectedRegion} onSelectRegion={e => this.changeRegionHandler(e, e.detail)}></a-easi-ernie>
      <main>
        <a-easi-region value={this.selectedRegion}
          onChange={e => this.changeRegionHandler(e, e.detail)}
        />
        {this.selectedRegion != null && <section>
          <div class="row">
            <label>Extent</label>
            <a-easi-extent
              value={this.value[this.selectedRegion].extent}
              onChange={e => this.changeExtentHandler(e, e.detail)}></a-easi-extent>
          </div>
          {Object.values(EasiSign).map(sign =>
            <div class="row">
              <label>{EasiText.sign[sign]}</label>
              <a-easi-severity showText={this.showText}
                value={this.value[this.selectedRegion][sign]}
                onChange={e => this.changeSeverityHandler(e, sign, e.detail)}></a-easi-severity>
            </div>
          )}
        </section>
        }
      </main>
    </Host>;
  }

  changeRegionHandler(e: Event, value: EasiRegion): void {
    e.stopPropagation();

    this.selectedRegion = value;
  }

  changeExtentHandler(e: Event, extent: EasiExtent): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        extent
      }
    }

    this.value = value;
    this.change.emit(value);
  }

  changeSeverityHandler(e: Event, sign: EasiSign, severity: EasiSeverity): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        [sign]: severity
      }
    }

    console.log('change', sign, severity, this.value, value);

    this.value = value;
    this.change.emit(value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<IEasi>
}
