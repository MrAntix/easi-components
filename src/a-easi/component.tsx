import { Component, Prop, h, Host, Watch, Event, EventEmitter, State } from '@stencil/core';
import { IEasiValue, EasiRegion, EasiSign, EasiText, EasiDefault, EasiSeverity, EasiExtent, calculateRegionScore, calculateScore } from '../models';

@Component({
  tag: 'a-easi',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiComponent {

  @Prop({ reflectToAttr: true })
  showText: boolean;
  @Prop({ reflectToAttr: true })
  isChild: boolean;

  @Prop({ mutable: true })
  value: IEasiValue;
  @Watch('value')
  setValue() {
    if (!this.value)
      this.value = EasiDefault;

    Object.values(EasiRegion).forEach(region => {
      this.value[region].score = calculateRegionScore(this.isChild, region, this.value[region])
    })

    this.value.score = calculateScore(this.value);
  }

  @State()
  selectedRegion: EasiRegion = EasiRegion.Head;

  componentWillLoad() {
    this.setValue();
  }

  render() {
    if (!this.value) return;

    return <Host>
      <header>
        <a-easi-ernie value={this.value}
          selectedRegion={this.selectedRegion} onSelectRegion={e => this.changeRegionHandler(e, e.detail)} />
        <span class="score">{Math.round(this.value.score)}</span>
      </header>
      <main class={{
        [this.selectedRegion]: true
      }}>
        <nav aria-role="menu">
          {Object.values(EasiRegion).map(region => <label
            aria-role="menuitemradio" aria-checked={this.selectedRegion === region}
            onClick={e => this.changeRegionHandler(e, region)}>
            <span>
              {EasiText.region[region]}
            </span>
          </label>
          )}
        </nav>
        {this.selectedRegion != null && <section>
          <div class="row">
            <label>Extent</label>
            <a-easi-extent
              showText={this.showText}
              value={this.value[this.selectedRegion].extent}
              onChange={e => this.changeExtentHandler(e, e.detail)}></a-easi-extent>
          </div>
          {Object.values(EasiSign).map(sign =>
            <div class={{
              row: true,
              disabled: this.value[this.selectedRegion].extent === 0
            }}>
              <label>{EasiText.sign[sign]}</label>
              <a-easi-severity
                showText={this.showText} disabled={this.value[this.selectedRegion].extent === 0}
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

    this.selectedRegion = value || EasiRegion.Head;
  }

  changeExtentHandler(e: Event, extent: EasiExtent): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        extent,
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
        [sign]: severity,
      }
    }

    this.value = value;
    this.change.emit(value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  change: EventEmitter<IEasiValue>
}
