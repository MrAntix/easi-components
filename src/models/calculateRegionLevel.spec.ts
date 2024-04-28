import { EasiExtents } from "./EasiExtents";
import { EasiSeverities } from "./EasiSeverities";
import { EasiSigns } from "./EasiSigns";
import { IEasiRegion } from "./IEasiRegion";
import { calculateRegionLevel } from "./calculateRegionLevel";

describe('calculateRegionLevel', () => {
    let value: IEasiRegion;

    beforeEach(() => {
        value = {
            extent: EasiExtents.E1_9,
            [EasiSigns.Erythema]: EasiSeverities.Mild,
            [EasiSigns.EdemaPapulation]: EasiSeverities.Mild,
            [EasiSigns.Excoriation]: EasiSeverities.Mild,
            [EasiSigns.Lichenification]: EasiSeverities.Mild,
        };
    });

    it('returns 0 if extent is E0', () => {
        value.extent = EasiExtents.E0;
        expect(calculateRegionLevel(value)).toBe(0);
    });

    it('returns null if any region value is null', () => {
        value[EasiSigns.Erythema] = null;
        expect(calculateRegionLevel(value)).toBeNull();
    });

    it('calculates the region level correctly', () => {
        const expectedLevel = Math.round((4 * value.extent!) / 7.2);
        expect(calculateRegionLevel(value)).toBe(expectedLevel);
    });
});