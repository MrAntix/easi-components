import { Component, Prop, Host, h } from '@stencil/core';
import { IEasiMessages, easiEmptyMessages, easiMessageTypes } from '../../models';

@Component({
  tag: 'a-easi-messages',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiMessagesComponent {

  @Prop()
  value: IEasiMessages = easiEmptyMessages;
  @Prop()
  type: easiMessageTypes = 'warning';

  render() {

    return <Host
      count={Object.keys(this.value).length}>
    </Host>;
  }

}
