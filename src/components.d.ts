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
  IEasiValue,
} from './models';


export namespace Components {
  interface AEasi {
    'isChild': boolean;
    'selectedRegion': EasiRegion;
    'showText': boolean;
    'value': IEasiValue;
  }
  interface AEasiErnie {
    'selectedRegion': EasiRegion;
    'value': IEasiValue;
  }
  interface AEasiExtent {
    'disabled': boolean;
    'value': EasiExtent;
  }
  interface AEasiSeverity {
    'disabled': boolean;
    'showText': boolean;
    'value': EasiSeverity;
  }
}

declare namespace LocalJSX {
  interface AEasi extends JSXBase.HTMLAttributes {
    'isChild'?: boolean;
    'onChange'?: (event: CustomEvent<IEasiValue>) => void;
    'selectedRegion'?: EasiRegion;
    'showText'?: boolean;
    'value'?: IEasiValue;
  }
  interface AEasiErnie extends JSXBase.HTMLAttributes {
    'onSelectRegion'?: (event: CustomEvent<EasiRegion>) => void;
    'selectedRegion'?: EasiRegion;
    'value'?: IEasiValue;
  }
  interface AEasiExtent extends JSXBase.HTMLAttributes {
    'disabled'?: boolean;
    'onChange'?: (event: CustomEvent<EasiExtent>) => void;
    'value'?: EasiExtent;
  }
  interface AEasiSeverity extends JSXBase.HTMLAttributes {
    'disabled'?: boolean;
    'onChange'?: (event: CustomEvent<EasiSeverity>) => void;
    'showText'?: boolean;
    'value'?: EasiSeverity;
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
