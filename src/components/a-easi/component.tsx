import { Component, Prop, h, Host, Watch, Event, EventEmitter, State } from '@stencil/core';
import {
  IEasi, EasiRegions, EasiSigns, easiText, easiDefault, EasiSeverities, EasiExtents,
  calculateScore, IEasiScore, enumValues,
  easiEmptyMessages, easiRequiredMessage
} from '../../models';

@Component({
  tag: 'a-easi',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiComponent {

  @Prop({ reflect: true })
  showText: boolean = false;

  @Prop({ mutable: true })
  value: IEasi = easiDefault;
  @Watch('value')
  setValue() {
    if (!this.value)
      this.value = easiDefault;

    this.score = calculateScore(this.value);
    this.scoreChange.emit(this.score);
  }

  @Prop({ mutable: true })
  score: IEasiScore | null = null;

  @State()
  selectedRegion: EasiRegions = EasiRegions.Head;

  componentWillLoad() {
    this.setValue();
  }

  render() {
    if (!this.value) return;

    return <Host class={{ invalid: this.score?.total == null }}>
      <header>
        <a-easi-ernie value={this.value}
          selectedRegion={this.selectedRegion} onSelectRegion={e => this.changeRegionHandler(e, e.detail)} />
        <span class="score">{this.score?.total != null && Math.round(this.score.total)}</span>

        <a-easi-select class="child-adult" required
          show-text
          options={[true, false]}
          optionsText={{ 'true': 'Child', 'false': 'Adult' }}
          value={this.value.isChild}
          onValueChange={e => this.changeIsChildHandler(e, e.detail)}>
        </a-easi-select>

      </header>
      <main class={{
        [this.selectedRegion]: true
      }}>
        <nav aria-role="menu">
          {Object.values(EasiRegions).map(region => <label
            aria-role="menuitemradio" aria-checked={this.selectedRegion === region}
            onClick={e => this.changeRegionHandler(e, region)}>
            <span>
              <a-easi-messages
                value={this.score?.[region] == null ? easiRequiredMessage : easiEmptyMessages}
                type="warning" />
              {easiText.region[region]}
            </span>
          </label>
          )}
        </nav>
        {this.selectedRegion != null && <section class="region">
          <div class="row extent">
            <label>Extent</label>
            <a-easi-select class="extent" required
              showText={this.showText}
              options={enumValues(EasiExtents)}
              optionsText={easiText.extent}
              value={this.value[this.selectedRegion].extent}
              onValueChange={e => this.changeExtentHandler(e, e.detail)}>
            </a-easi-select>
          </div>
          <section class="signs">
            {Object.values(EasiSigns).map(sign =>
              <div class={{
                row: true,
                disabled: !this.value[this.selectedRegion].extent
              }}>
                <label>{easiText.sign[sign]}</label>
                <a-easi-select class="severites" required
                  showText={this.showText} disabled={!this.value[this.selectedRegion].extent}
                  options={enumValues(EasiSeverities)}
                  optionsText={easiText.severity}
                  value={this.value[this.selectedRegion][sign]}
                  onValueChange={e => this.changeSeverityHandler(e, sign, e.detail)}>
                </a-easi-select>
              </div>
            )}
          </section>
        </section>
        }
      </main>
    </Host>;
  }

  changeRegionHandler(e: Event, value: EasiRegions | null): void {
    e.stopPropagation();

    this.selectedRegion = value || EasiRegions.Head;
  }

  changeIsChildHandler(e: Event, change: any): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      isChild: change == null ? false : !!change
    }

    this.value = value;
    this.valueChange.emit(value);
  }

  changeExtentHandler(e: Event, extent: EasiExtents): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        extent,
      }
    }

    this.value = value;
    this.valueChange.emit(value);
  }

  changeSeverityHandler(e: Event, sign: EasiSigns, severity: EasiSeverities): void {
    e.stopPropagation();

    const value = {
      ...this.value,
      [this.selectedRegion]: {
        ...this.value[this.selectedRegion],
        [sign]: severity,
      }
    }

    this.value = value;
    this.valueChange.emit(value);
  }

  @Event({ bubbles: false, cancelable: false, composed: false })
  valueChange!: EventEmitter<IEasi>

  @Event({ bubbles: false, cancelable: false, composed: false })
  scoreChange!: EventEmitter<IEasiScore>
}
