// Type definitions for object-assign 4.0.1
// Project: https://github.com/es-shims/es5-shim
// Definitions by: Miguel Angelo <https://github.com/masbicudo>
// Definitions: https://github.com/masbicudo/DefinitelyTyped

declare module "object-keys" {
    interface IKeyShim {
        (o: Object): string[];
        shim: () => ((o: Object) => string[]);
    }

    var keysShim: IKeyShim;
    export = keysShim;
}
