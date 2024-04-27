import { EasiRegions } from './EasiRegions';
import { EasiSigns } from './EasiSigns';
import { IEasi } from './IEasi';

export const easiDefault: IEasi = Object.freeze({
    isChild: null,
    [EasiRegions.Head]: Object.freeze({
        extent: null,
        [EasiSigns.Erythema]: null,
        [EasiSigns.EdemaPapulation]: null,
        [EasiSigns.Excoriation]: null,
        [EasiSigns.Lichenification]: null
    }),
    [EasiRegions.Trunk]: Object.freeze({
        extent: null,
        [EasiSigns.Erythema]: null,
        [EasiSigns.EdemaPapulation]: null,
        [EasiSigns.Excoriation]: null,
        [EasiSigns.Lichenification]: null
    }),
    [EasiRegions.Upper]: Object.freeze({
        extent: null,
        [EasiSigns.Erythema]: null,
        [EasiSigns.EdemaPapulation]: null,
        [EasiSigns.Excoriation]: null,
        [EasiSigns.Lichenification]: null
    }),
    [EasiRegions.Lower]: Object.freeze({
        extent: null,
        [EasiSigns.Erythema]: null,
        [EasiSigns.EdemaPapulation]: null,
        [EasiSigns.Excoriation]: null,
        [EasiSigns.Lichenification]: null
    })
});
