import { EasiRegions } from "./EasiRegions";
import { getRegionMultiplier } from "./getRegionMultiplier";

describe('getRegionMultiplier', () => {
    it('returns null if isChild is null', () => {
        expect(getRegionMultiplier(null!, EasiRegions.Head)).toBeNull();
    });

    it('returns correct multiplier for Head region', () => {
        expect(getRegionMultiplier(true, EasiRegions.Head)).toBe(0.2);
        expect(getRegionMultiplier(false, EasiRegions.Head)).toBe(0.1);
    });

    it('returns correct multiplier for Trunk region', () => {
        expect(getRegionMultiplier(true, EasiRegions.Trunk)).toBe(0.3);
        expect(getRegionMultiplier(false, EasiRegions.Trunk)).toBe(0.3);
    });

    it('returns correct multiplier for Upper region', () => {
        expect(getRegionMultiplier(true, EasiRegions.Upper)).toBe(0.2);
        expect(getRegionMultiplier(false, EasiRegions.Upper)).toBe(0.2);
    });

    it('returns correct multiplier for Lower region', () => {
        expect(getRegionMultiplier(true, EasiRegions.Lower)).toBe(0.3);
        expect(getRegionMultiplier(false, EasiRegions.Lower)).toBe(0.4);
    });

    it('throws error for unknown region', () => {
        const unknown = 'UNKNOWN' as unknown as any;
        expect(() => getRegionMultiplier(true, unknown)).toThrow(`unknown region: ${unknown}`);
    });
});