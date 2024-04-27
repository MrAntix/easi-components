import { EasiRegions } from "./EasiRegions";


export interface IEasiScore {
    total: number | null;
    [EasiRegions.Head]: number | null;
    [EasiRegions.Trunk]: number | null;
    [EasiRegions.Upper]: number | null;
    [EasiRegions.Lower]: number | null;
}
