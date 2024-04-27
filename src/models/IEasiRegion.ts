import { EasiExtents } from './EasiExtents';
import { EasiSeverities } from './EasiSeverities';
import { EasiSigns } from './EasiSigns';

export interface IEasiRegion {
    extent: EasiExtents | null;
    [EasiSigns.Erythema]: EasiSeverities | null;
    [EasiSigns.EdemaPapulation]: EasiSeverities | null;
    [EasiSigns.Excoriation]: EasiSeverities | null;
    [EasiSigns.Lichenification]: EasiSeverities | null;
}
