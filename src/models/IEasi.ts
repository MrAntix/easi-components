import { EasiRegions } from './EasiRegions';
import { IEasiRegion } from './IEasiRegion';

export interface IEasi {
    isChild: boolean | null;
    [EasiRegions.Head]: IEasiRegion;
    [EasiRegions.Trunk]: IEasiRegion;
    [EasiRegions.Upper]: IEasiRegion;
    [EasiRegions.Lower]: IEasiRegion;
}
