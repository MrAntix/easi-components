/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EasiExtents,
  EasiRegions,
  EasiSeverities,
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
  interface AEasiExtent {
    'disabled': boolean;
    'showText': boolean;
    'value': EasiExtents;
  }
  interface AEasiSeverity {
    'disabled': boolean;
    'showText': boolean;
    'value': EasiSeverities;
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

  interface HTMLAEasiExtentElement extends Components.AEasiExtent, HTMLStencilElement {}
  var HTMLAEasiExtentElement: {
    prototype: HTMLAEasiExtentElement;
    new (): HTMLAEasiExtentElement;
  };

  interface HTMLAEasiSeverityElement extends Components.AEasiSeverity, HTMLStencilElement {}
  var HTMLAEasiSeverityElement: {
    prototype: HTMLAEasiSeverityElement;
    new (): HTMLAEasiSeverityElement;
  };
  interface HTMLElementTagNameMap {
    'a-easi': HTMLAEasiElement;
    'a-easi-ernie': HTMLAEasiErnieElement;
    'a-easi-extent': HTMLAEasiExtentElement;
    'a-easi-severity': HTMLAEasiSeverityElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
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
  interface AEasiExtent extends JSXBase.HTMLAttributes<HTMLAEasiExtentElement> {
    'disabled'?: boolean;
    'onChange'?: (event: CustomEvent<EasiExtents>) => void;
    'showText'?: boolean;
    'value'?: EasiExtents;
  }
  interface AEasiSeverity extends JSXBase.HTMLAttributes<HTMLAEasiSeverityElement> {
    'disabled'?: boolean;
    'onChange'?: (event: CustomEvent<EasiSeverities>) => void;
    'showText'?: boolean;
    'value'?: EasiSeverities;
  }

  interface IntrinsicElements {
    'a-easi': AEasi;
    'a-easi-ernie': AEasiErnie;
    'a-easi-extent': AEasiExtent;
    'a-easi-severity': AEasiSeverity;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


