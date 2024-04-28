import { EasiExtents } from "./EasiExtents";
import { EasiRegions } from "./EasiRegions";
import { EasiSeverities } from "./EasiSeverities";
import { EasiSigns } from "./EasiSigns";
import { IEasi } from "./IEasi";
import { calculateRegionScore } from "./calculateRegionScore";
import { easiDefault } from "./easiDefault";

import * as getRegionMultiplierModule from './getRegionMultiplier';


describe('calculateRegionScore', () => {
    let value: IEasi = easiDefault;
    const region: EasiRegions = EasiRegions.Head;

    beforeEach(() => {
        value = {
            ...value,
            isChild: true,
            [region]: {
                extent: EasiExtents.E1_9,
                [EasiSigns.Erythema]: EasiSeverities.Mild,
                [EasiSigns.EdemaPapulation]: EasiSeverities.Mild,
                [EasiSigns.Excoriation]: EasiSeverities.Mild,
                [EasiSigns.Lichenification]: EasiSeverities.Mild,
            }
        };
    });

    it('returns null if isChild is null', () => {
        value.isChild = null;

        expect(calculateRegionScore(value, region)).toBeNull();
    });

    it('returns 0 if extent is E0', () => {
        value[region].extent = EasiExtents.E0;

        expect(calculateRegionScore(value, region)).toBe(0);
    });

    it('returns null if any region value is null', () => {
        value[region][EasiSigns.Erythema] = null;

        expect(calculateRegionScore(value, region)).toBeNull();
    });

    it('returns null if regionMultiplier is null', () => {
        jest.spyOn(getRegionMultiplierModule, 'getRegionMultiplier').mockImplementation(() => null);

        expect(calculateRegionScore(value, region)).toBeNull();
    });

    it('calculates the region score correctly', () => {
        const regionMultiplier = 1;
        jest.spyOn(getRegionMultiplierModule, 'getRegionMultiplier').mockImplementation(() => regionMultiplier);
        const expectedScore = 4 * regionMultiplier;

        expect(calculateRegionScore(value, region)).toBe(expectedScore);
    });
});
