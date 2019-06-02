import {
  EasiDefault,
  calculateScore,
  calculateRegionLevel,
  EasiSigns,
  EasiRegions
} from './models';

describe('models', () => {
  describe('calculateScore', () => {
    it('default easi scores null', () => {
      const result = calculateScore(EasiDefault);
      expect(result.total).toEqual(null);
    });

    it('extents 0 scores 0', () => {
      const value = EasiDefault;
      value[EasiRegions.Head].extent = 0;
      value[EasiRegions.Trunk].extent = 0;
      value[EasiRegions.Upper].extent = 0;
      value[EasiRegions.Lower].extent = 0;

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
});
