import { Component, Prop, Host, h } from '@stencil/core';
import { IEasiMessages, easiMessageTypes, EasiEmptyMessages } from '../models';

@Component({
  tag: 'a-easi-messages',
  styleUrl: 'component.css',
  shadow: true
})
export class EasiMessagesComponent {

  @Prop()
  value: IEasiMessages = EasiEmptyMessages;
  @Prop()
  type: easiMessageTypes;

  render() {

    return <Host aria-role="menu"
      count={Object.keys(this.value).length}>
    </Host>;
  }

}
