import { EasiRegions } from "./EasiRegions";
import { EasiSeverities } from "./EasiSeverities";
import { EasiSigns } from "./EasiSigns";
import { IEasiText } from "./IEasiText";

export const easiText_en: IEasiText = {
    sign: {
        [EasiSigns.Erythema]: 'Erythema',
        [EasiSigns.EdemaPapulation]: 'Edema / Papulation',
        [EasiSigns.Excoriation]: 'Excoriation',
        [EasiSigns.Lichenification]: 'Lichenification'
    },
    region: {
        [EasiRegions.Head]: 'Head & Neck',
        [EasiRegions.Trunk]: 'Trunk',
        [EasiRegions.Upper]: 'Upper Limbs',
        [EasiRegions.Lower]: 'Lower Limbs'
    },
    severity: {
        [EasiSeverities.None]: 'None',
        [EasiSeverities.Mild]: 'Mild',
        [EasiSeverities.MildToModerate]: 'Mild to Moderate',
        [EasiSeverities.Moderate]: 'Moderate',
        [EasiSeverities.ModerateToSevere]: 'Moderate to Severe',
        [EasiSeverities.Severe]: 'Severe'
    },
    extent: {
        0: '0%',
        1: '1 - 9%',
        2: '10 - 29%',
        3: '30 - 49%',
        4: '50 - 69%',
        5: '70 - 89%',
        6: '90 - 100%'
    }
};
