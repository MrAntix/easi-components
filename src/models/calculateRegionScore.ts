import { EasiExtents } from "./EasiExtents";
import { EasiRegions } from "./EasiRegions";
import { EasiSigns } from "./EasiSigns";
import { IEasi } from "./IEasi";
import { getRegionMultiplier } from "./getRegionMultiplier";


export function calculateRegionScore(
    value: IEasi,
    region: EasiRegions
): number | null {
    if (value.isChild == null) return null;
    if (value[region].extent === EasiExtents.E0) return 0;
    if (Object.values(value[region]).some(v => v == null)) return null;

    return (
        (value[region][EasiSigns.Erythema]! +
            value[region][EasiSigns.EdemaPapulation]! +
            value[region][EasiSigns.Excoriation]! +
            value[region][EasiSigns.Lichenification]!) *
        value[region].extent! *
        getRegionMultiplier(value.isChild, region)!
    ) ?? null;
}
