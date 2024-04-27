export function easiClone<T>(o: T): T {
    return JSON.parse(JSON.stringify(o));
}
