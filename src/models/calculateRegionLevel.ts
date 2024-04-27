import { EasiExtents } from './EasiExtents';
import { EasiSigns } from './EasiSigns';
import { IEasiRegion } from './IEasiRegion';

export function calculateRegionLevel(value: IEasiRegion): number | null {
    if (value.extent === EasiExtents.E0) return 0;
    if (Object.values(value).some(v => v == null)) return null;

    return Math.round(
        ((value[EasiSigns.Erythema]! +
            value[EasiSigns.EdemaPapulation]! +
            value[EasiSigns.Excoriation]! +
            value[EasiSigns.Lichenification]!) *
            value.extent!) /
        7.2
    ) ?? null;
}
