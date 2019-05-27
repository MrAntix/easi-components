export enum EasiRegion {
  Head = 'head',
  Trunk = 'trunk',
  Upper = 'upper',
  Lower = 'lower'
}

export interface IEasiRegionScore {
  severity: EasiSeverity;
  extentn: EasiExtent;
}

export enum EasiSign {
  Erythema = 'erythema',
  EdemaPapulation = 'edemaPapulation',
  Excoriation = 'excoriation',
  Lichenification = 'lichenification'
}

export enum EasiSeverity {
  None = 0,
  Mild = 1,
  MildToModerate = 1.5,
  Moderate = 2,
  ModerateToSevere = 2.5,
  Severe = 3
}

export enum EasiExtent {
  E0 = 0,
  E1_9,
  E10_29,
  E30_49,
  E50_69,
  E70_89,
  E90_100
}

export interface IEasi {
  [EasiRegion.Head]: IEasiRegionValue;
  [EasiRegion.Trunk]: IEasiRegionValue;
  [EasiRegion.Upper]: IEasiRegionValue;
  [EasiRegion.Lower]: IEasiRegionValue;
}

export interface IEasiRegionValue {
  [EasiSign.Erythema]: EasiSeverity;
  [EasiSign.EdemaPapulation]: EasiSeverity;
  [EasiSign.Excoriation]: EasiSeverity;
  [EasiSign.Lichenification]: EasiSeverity;
}

export const EasiText_en: IEasiText = {
  sign: {
    [EasiSign.Erythema]: 'Erythema',
    [EasiSign.EdemaPapulation]: 'Edema / Papulation',
    [EasiSign.Excoriation]: 'Excoriation',
    [EasiSign.Lichenification]: 'Lichenification'
  },
  region: {
    [EasiRegion.Head]: 'Head & Neck',
    [EasiRegion.Trunk]: 'Trunk',
    [EasiRegion.Upper]: 'Upper Limbs',
    [EasiRegion.Lower]: 'Lower Limbs'
  },
  severity: {
    [EasiSeverity.None]: 'None',
    [EasiSeverity.Mild]: 'Mild',
    [EasiSeverity.MildToModerate]: 'Mild to Moderate',
    [EasiSeverity.Moderate]: 'Moderate',
    [EasiSeverity.ModerateToSevere]: 'Moderate to Severe',
    [EasiSeverity.Severe]: 'Severe'
  },
  extent: {
    0: '0%',
    1: '0 - 9%',
    2: '10 - 29%',
    3: '30 - 49%',
    4: '50 - 69%',
    5: '70 - 89%',
    6: '90 - 100%'
  }
};

export interface IEasiText {
  sign: { [key: string]: string };
  region: { [key: string]: string };
  severity: { [key: number]: string };
  extent: { [key: number]: string };
}

export const EasiText = EasiText_en;

export const EasiDefault = {
  [EasiRegion.Head]: {
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None
  },
  [EasiRegion.Trunk]: {
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None
  },
  [EasiRegion.Upper]: {
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None
  },
  [EasiRegion.Lower]: {
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None
  }
};

export function enumValues<T>(e: any): T[] {
  return Object.values(e).filter(v => typeof v !== 'string') as any;
}
