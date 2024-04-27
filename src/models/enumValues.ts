
export function enumValues<T>(e: any): T[] {
    return Object.values(e).filter(v => typeof v !== 'string') as T[];
}
