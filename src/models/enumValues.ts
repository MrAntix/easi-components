/**
 * get the values form an enum
 * @param e enum
 * @returns array of values for the enum
 */
export function enumValues<T>(e: any): T[] {
    return Object.values(e).filter(v => typeof v === 'number') as T[];
}
