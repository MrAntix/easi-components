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

export interface IEasiValue {
  [EasiRegion.Head]: IEasiRegionValue;
  [EasiRegion.Trunk]: IEasiRegionValue;
  [EasiRegion.Upper]: IEasiRegionValue;
  [EasiRegion.Lower]: IEasiRegionValue;
  score: number;
}

export interface IEasiRegionValue {
  extent: EasiExtent;
  [EasiSign.Erythema]: EasiSeverity;
  [EasiSign.EdemaPapulation]: EasiSeverity;
  [EasiSign.Excoriation]: EasiSeverity;
  [EasiSign.Lichenification]: EasiSeverity;
  score: number;
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
    1: '1 - 9%',
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

export const EasiDefault: IEasiValue = {
  [EasiRegion.Head]: {
    extent: EasiExtent.E0,
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None,
    score: 0
  },
  [EasiRegion.Trunk]: {
    extent: EasiExtent.E0,
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None,
    score: 0
  },
  [EasiRegion.Upper]: {
    extent: EasiExtent.E0,
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None,
    score: 0
  },
  [EasiRegion.Lower]: {
    extent: EasiExtent.E0,
    [EasiSign.Erythema]: EasiSeverity.None,
    [EasiSign.EdemaPapulation]: EasiSeverity.None,
    [EasiSign.Excoriation]: EasiSeverity.None,
    [EasiSign.Lichenification]: EasiSeverity.None,
    score: 0
  },
  score: 0
};

export function enumValues<T>(e: any): T[] {
  return Object.values(e).filter(v => typeof v !== 'string') as any;
}

export function calculateScore(value: IEasiValue): number {
  return (
    value[EasiRegion.Head].score +
    value[EasiRegion.Trunk].score +
    value[EasiRegion.Upper].score +
    value[EasiRegion.Lower].score
  );
}

export function calculateRegionScore(
  isChild: boolean,
  region: EasiRegion,
  value: IEasiRegionValue
): number {
  return (
    (value[EasiSign.Erythema] +
      value[EasiSign.EdemaPapulation] +
      value[EasiSign.Excoriation] +
      value[EasiSign.Lichenification]) *
    value.extent *
    getRegionMultiplier(isChild, region)
  );
}

export function getRegionMultiplier(isChild: boolean, region: EasiRegion) {
  switch (region) {
    default:
      throw new Error(`unknown region: ${region}`);
    case EasiRegion.Head:
      return isChild ? 0.2 : 0.1;
    case EasiRegion.Trunk:
      return isChild ? 0.3 : 0.3;
    case EasiRegion.Upper:
      return isChild ? 0.2 : 0.2;
    case EasiRegion.Lower:
      return isChild ? 0.3 : 0.4;
  }
}

export function calculateRegionLevel(value: IEasiRegionValue): number {
  return Math.round(
    ((value[EasiSign.Erythema] +
      value[EasiSign.EdemaPapulation] +
      value[EasiSign.Excoriation] +
      value[EasiSign.Lichenification]) *
      value.extent) /
      7.2
  );
}
