export enum EasiRegions {
  Head = 'head',
  Trunk = 'trunk',
  Upper = 'upper',
  Lower = 'lower'
}

export enum EasiSigns {
  Erythema = 'erythema',
  EdemaPapulation = 'edemaPapulation',
  Excoriation = 'excoriation',
  Lichenification = 'lichenification'
}

export enum EasiSeverities {
  None = 0,
  Mild = 1,
  MildToModerate = 1.5,
  Moderate = 2,
  ModerateToSevere = 2.5,
  Severe = 3
}

export enum EasiExtents {
  E0 = 0,
  E1_9,
  E10_29,
  E30_49,
  E50_69,
  E70_89,
  E90_100
}

export interface IEasi {
  isChild: boolean;
  [EasiRegions.Head]: IEasiRegion;
  [EasiRegions.Trunk]: IEasiRegion;
  [EasiRegions.Upper]: IEasiRegion;
  [EasiRegions.Lower]: IEasiRegion;
}

export interface IEasiRegion {
  extent: EasiExtents;
  [EasiSigns.Erythema]: EasiSeverities;
  [EasiSigns.EdemaPapulation]: EasiSeverities;
  [EasiSigns.Excoriation]: EasiSeverities;
  [EasiSigns.Lichenification]: EasiSeverities;
}

export interface IEasiScore {
  total: number;
  [EasiRegions.Head]: number;
  [EasiRegions.Trunk]: number;
  [EasiRegions.Upper]: number;
  [EasiRegions.Lower]: number;
}

export const EasiText_en: IEasiText = {
  sign: {
    [EasiSigns.Erythema]: 'Erythema',
    [EasiSigns.EdemaPapulation]: 'Edema / Papulation',
    [EasiSigns.Excoriation]: 'Excoriation',
    [EasiSigns.Lichenification]: 'Lichenification'
  },
  region: {
    [EasiRegions.Head]: 'Head & Neck',
    [EasiRegions.Trunk]: 'Trunk',
    [EasiRegions.Upper]: 'Upper Limbs',
    [EasiRegions.Lower]: 'Lower Limbs'
  },
  severity: {
    [EasiSeverities.None]: 'None',
    [EasiSeverities.Mild]: 'Mild',
    [EasiSeverities.MildToModerate]: 'Mild to Moderate',
    [EasiSeverities.Moderate]: 'Moderate',
    [EasiSeverities.ModerateToSevere]: 'Moderate to Severe',
    [EasiSeverities.Severe]: 'Severe'
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

export const EasiDefault: IEasi = {
  isChild: false,
  [EasiRegions.Head]: {
    extent: EasiExtents.E0,
    [EasiSigns.Erythema]: EasiSeverities.None,
    [EasiSigns.EdemaPapulation]: EasiSeverities.None,
    [EasiSigns.Excoriation]: EasiSeverities.None,
    [EasiSigns.Lichenification]: EasiSeverities.None
  },
  [EasiRegions.Trunk]: {
    extent: EasiExtents.E0,
    [EasiSigns.Erythema]: EasiSeverities.None,
    [EasiSigns.EdemaPapulation]: EasiSeverities.None,
    [EasiSigns.Excoriation]: EasiSeverities.None,
    [EasiSigns.Lichenification]: EasiSeverities.None
  },
  [EasiRegions.Upper]: {
    extent: EasiExtents.E0,
    [EasiSigns.Erythema]: EasiSeverities.None,
    [EasiSigns.EdemaPapulation]: EasiSeverities.None,
    [EasiSigns.Excoriation]: EasiSeverities.None,
    [EasiSigns.Lichenification]: EasiSeverities.None
  },
  [EasiRegions.Lower]: {
    extent: EasiExtents.E0,
    [EasiSigns.Erythema]: EasiSeverities.None,
    [EasiSigns.EdemaPapulation]: EasiSeverities.None,
    [EasiSigns.Excoriation]: EasiSeverities.None,
    [EasiSigns.Lichenification]: EasiSeverities.None
  }
};

export function enumValues<T>(e: any): T[] {
  return Object.values(e).filter(v => typeof v !== 'string') as T[];
}

export function calculateScore(value: IEasi): IEasiScore {
  return Object.values(EasiRegions).reduce(
    (score, region) => {
      score[region] = calculateRegionScore(value, region);
      score.total += score[region];

      return score;
    },
    { total: 0 }
  );
}

export function calculateRegionScore(
  value: IEasi,
  region: EasiRegions
): number {
  return (
    (value[region][EasiSigns.Erythema] +
      value[region][EasiSigns.EdemaPapulation] +
      value[region][EasiSigns.Excoriation] +
      value[region][EasiSigns.Lichenification]) *
    value[region].extent *
    getRegionMultiplier(value.isChild, region)
  );
}

export function getRegionMultiplier(isChild: boolean, region: EasiRegions) {
  switch (region) {
    default:
      throw new Error(`unknown region: ${region}`);
    case EasiRegions.Head:
      return isChild ? 0.2 : 0.1;
    case EasiRegions.Trunk:
      return isChild ? 0.3 : 0.3;
    case EasiRegions.Upper:
      return isChild ? 0.2 : 0.2;
    case EasiRegions.Lower:
      return isChild ? 0.3 : 0.4;
  }
}

export function calculateRegionLevel(value: IEasiRegion): number {
  return Math.round(
    ((value[EasiSigns.Erythema] +
      value[EasiSigns.EdemaPapulation] +
      value[EasiSigns.Excoriation] +
      value[EasiSigns.Lichenification]) *
      value.extent) /
      7.2
  );
}
