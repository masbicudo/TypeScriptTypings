// Type definitions for react-outside-event
// Project: https://github.com/gajus/react-outside-event
// Definitions by: Miguel Angelo
// Definitions: https://github.com/masbicudo/TypeScriptTypings

/**
 * Created by Miguel Angelo on 16/04/2016.
 */
declare module "react-outside-event" {
    import * as React from 'react';
    class ElementClass extends React.Component<any, any> { }
    export default function fn<T extends (typeof ElementClass)>(targetComponentClass: T, eventNames?: string[]): T;
}