import { EasiRegions } from "./EasiRegions";
import { IEasi } from "./IEasi";
import { IEasiScore } from "./IEasiScore";
import { calculateRegionScore } from "./calculateRegionScore";


export function calculateScore(value: IEasi): IEasiScore {
    return Object.values(EasiRegions).reduce(
        (score, region) => {
            score[region] = calculateRegionScore(value, region);

            if (score.total == null || score[region] == null) score.total = null;
            else score.total += score[region];

            return score;
        },
        { total: 0 } as any
    );
}
