/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import {
  EasiExtent,
  EasiRegion,
  EasiSeverity,
  IEasi,
} from './models';


export namespace Components {
  interface AEasi {
    'selectedRegion': EasiRegion;
    'showText': boolean;
    'value': IEasi;
  }
  interface AEasiErnie {
    'head': number;
    'lower': number;
    'selectedRegion': EasiRegion;
    'trunk': number;
    'upper': number;
    'value': IEasi;
  }
  interface AEasiExtent {
    'value': EasiExtent;
  }
  interface AEasiRegion {
    'value': EasiRegion;
  }
  interface AEasiSeverity {
    'showText': boolean;
    'value': EasiSeverity;
  }
}

declare namespace LocalJSX {
  interface AEasi extends JSXBase.HTMLAttributes {
    'onChange'?: (event: CustomEvent<IEasi>) => void;
    'selectedRegion'?: EasiRegion;
    'showText'?: boolean;
    'value'?: IEasi;
  }
  interface AEasiErnie extends JSXBase.HTMLAttributes {
    'head'?: number;
    'lower'?: number;
    'onSelectRegion'?: (event: CustomEvent<EasiRegion>) => void;
    'selectedRegion'?: EasiRegion;
    'trunk'?: number;
    'upper'?: number;
    'value'?: IEasi;
  }
  interface AEasiExtent extends JSXBase.HTMLAttributes {
    'onChange'?: (event: CustomEvent<EasiExtent>) => void;
    'value'?: EasiExtent;
  }
  interface AEasiRegion extends JSXBase.HTMLAttributes {
    'onChange'?: (event: CustomEvent<EasiRegion>) => void;
    'value'?: EasiRegion;
  }
  interface AEasiSeverity extends JSXBase.HTMLAttributes {
    'onChange'?: (event: CustomEvent<EasiSeverity>) => void;
    'showText'?: boolean;
    'value'?: EasiSeverity;
  }

  interface IntrinsicElements {
    'a-easi': AEasi;
    'a-easi-ernie': AEasiErnie;
    'a-easi-extent': AEasiExtent;
    'a-easi-region': AEasiRegion;
    'a-easi-severity': AEasiSeverity;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
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

  interface HTMLAEasiRegionElement extends Components.AEasiRegion, HTMLStencilElement {}
  var HTMLAEasiRegionElement: {
    prototype: HTMLAEasiRegionElement;
    new (): HTMLAEasiRegionElement;
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
    'a-easi-region': HTMLAEasiRegionElement;
    'a-easi-severity': HTMLAEasiSeverityElement;
  }

  interface ElementTagNameMap extends HTMLElementTagNameMap {}
}

