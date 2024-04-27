import { easiClone } from "./easiClone";
import { calculateRegionLevel } from "./calculateRegionLevel";
import { calculateScore } from "./calculateScore";
import { easiDefault } from "./easiDefault";
import { EasiExtents } from "./EasiExtents";
import { EasiSigns } from "./EasiSigns";
import { EasiRegions } from "./EasiRegions";

describe('calculateScore', () => {
  it('default easi scores null', () => {
    const result = calculateScore(easiDefault);
    expect(result.total).toEqual(null);
  });

  it('isChild set others null scores null', () => {
    const value = { ...easiDefault, isChild: false };

    const result = calculateScore(value);
    expect(result.total).toEqual(null);
  });

  it('isChild null and extents 0 scores null', () => {
    const value = easiClone(easiDefault);
    value.isChild = null;
    value[EasiRegions.Head].extent = EasiExtents.E0;
    value[EasiRegions.Trunk].extent = EasiExtents.E0;
    value[EasiRegions.Upper].extent = EasiExtents.E0;
    value[EasiRegions.Lower].extent = EasiExtents.E0;

    const result = calculateScore(value);
    expect(result.total).toEqual(null);
  });

  it('extents 0 scores 0', () => {
    const value = easiClone(easiDefault);
    value.isChild = false;
    value[EasiRegions.Head].extent = EasiExtents.E0;
    value[EasiRegions.Trunk].extent = EasiExtents.E0;
    value[EasiRegions.Upper].extent = EasiExtents.E0;
    value[EasiRegions.Lower].extent = EasiExtents.E0;

    const result = calculateScore(value);
    expect(result.total).toEqual(0);
  });

  it('calc region when any null', () => {
    const result = calculateRegionLevel({
      extent: null,
      [EasiSigns.Erythema]: null,
      [EasiSigns.EdemaPapulation]: null,
      [EasiSigns.Excoriation]: null,
      [EasiSigns.Lichenification]: null
    });
    expect(result).toEqual(null);
  });

  it('calc region when extent is 0', () => {
    const result = calculateRegionLevel({
      extent: 0,
      [EasiSigns.Erythema]: null,
      [EasiSigns.EdemaPapulation]: null,
      [EasiSigns.Excoriation]: null,
      [EasiSigns.Lichenification]: null
    });
    expect(result).toEqual(0);
  });

  it('child score is different to adult', () => {
    const base = {
      head: {
        edemaPapulation: 3,
        erythema: 3,
        excoriation: 3,
        extent: 3,
        lichenification: 3
      },
      lower: {
        edemaPapulation: 3,
        erythema: 3,
        excoriation: 3,
        extent: 3,
        lichenification: 3
      },
      trunk: {
        edemaPapulation: 3,
        erythema: 3,
        excoriation: 3,
        extent: 3,
        lichenification: 3
      },
      upper: {
        edemaPapulation: 3,
        erythema: 3,
        excoriation: 3,
        extent: 3,
        lichenification: 3
      }
    };

    const adult = calculateScore({
      isChild: false,
      ...base
    });

    const child = calculateScore({
      isChild: true,
      ...base
    });

    expect(Object.values(adult)).not.toEqual(Object.values(child));
  });
});
