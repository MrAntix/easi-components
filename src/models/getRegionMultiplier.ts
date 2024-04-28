import { EasiRegions } from './EasiRegions';

export function getRegionMultiplier(isChild: boolean, region: EasiRegions): number | null {
    if (isChild == null) return null;

    switch (region) {
        default:
            throw new Error(`unknown region: ${region}`);
        case EasiRegions.Head:
            return isChild ? 0.2 : 0.1;
        case EasiRegions.Trunk:
            return 0.3;
        case EasiRegions.Upper:
            return 0.2;
        case EasiRegions.Lower:
            return isChild ? 0.3 : 0.4;
    }
}
