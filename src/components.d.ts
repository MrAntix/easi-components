/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EasiRegions,
  IEasi,
  IEasiScore,
} from './models';


export namespace Components {
  interface AEasi {
    'score': IEasiScore;
    'showText': boolean;
    'value': IEasi;
  }
  interface AEasiErnie {
    'selectedRegion': EasiRegions;
    'value': IEasi;
  }
  interface AEasiSelect {
    'disabled': boolean;
    'nullValue': any;
    'options': any[];
    'optionsText': { [key: string]: string };
    'showText': boolean;
    'value': any;
  }
}

declare global {


  interface HTMLAEasiElement extends Components.AEasi, HTMLStencilElement {}
  var HTMLAEasiElement: {
    prototype: HTMLAEasiElement;
    new (): HTMLAEasiElement;
  };

  interface HTMLAEasiErnieElement extends Components.AEasiErnie, HTMLStencilElement {}
  var HTMLAEasiErnieElement: {
    prototype: HTMLAEasiErnieElement;
    new (): HTMLAEasiErnieElement;
  };

  interface HTMLAEasiSelectElement extends Components.AEasiSelect, HTMLStencilElement {}
  var HTMLAEasiSelectElement: {
    prototype: HTMLAEasiSelectElement;
    new (): HTMLAEasiSelectElement;
  };
  interface HTMLElementTagNameMap {
    'a-easi': HTMLAEasiElement;
    'a-easi-ernie': HTMLAEasiErnieElement;
    'a-easi-select': HTMLAEasiSelectElement;
  }
}

declare namespace LocalJSX {
  interface AEasi extends JSXBase.HTMLAttributes<HTMLAEasiElement> {
    'onChange'?: (event: CustomEvent<IEasi>) => void;
    'onScoreChange'?: (event: CustomEvent<IEasiScore>) => void;
    'score'?: IEasiScore;
    'showText'?: boolean;
    'value'?: IEasi;
  }
  interface AEasiErnie extends JSXBase.HTMLAttributes<HTMLAEasiErnieElement> {
    'onSelectRegion'?: (event: CustomEvent<EasiRegions>) => void;
    'selectedRegion'?: EasiRegions;
    'value'?: IEasi;
  }
  interface AEasiSelect extends JSXBase.HTMLAttributes<HTMLAEasiSelectElement> {
    'disabled'?: boolean;
    'nullValue'?: any;
    'onChange'?: (event: CustomEvent<any>) => void;
    'options'?: any[];
    'optionsText'?: { [key: string]: string };
    'showText'?: boolean;
    'value'?: any;
  }

  interface IntrinsicElements {
    'a-easi': AEasi;
    'a-easi-ernie': AEasiErnie;
    'a-easi-select': AEasiSelect;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


