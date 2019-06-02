import {
  EasiDefault,
  calculateScore,
  calculateRegionLevel,
  EasiSigns
} from './models';

describe('models', () => {
  describe('calculateScore', () => {
    it('default easi scores null', () => {
      const result = calculateScore(EasiDefault);
      expect(result.total).toEqual(null);
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
