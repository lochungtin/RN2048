const base: number = Math.pow(2, 32);

export const keygen = (): string => Math.floor(Math.random() * base).toString(16);