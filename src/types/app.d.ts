declare global {
    export type Nullable<T> = T | null;

    export type Keys<T extends Record<string, unknown>> = keyof T;
    export type Values<T extends Record<string, unknown>> = T[Keys<T>];

    export type Indexed<T = unknown> = {
        [key in string]: T;
    };

    export type PlainObject<T = unknown> = {
        [k in string]: T;
    };
}

export { };
