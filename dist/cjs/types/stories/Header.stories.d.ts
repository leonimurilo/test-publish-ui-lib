/// <reference types="react" />
import { ComponentStory, ComponentMeta } from '@storybook/react';
declare const _default: ComponentMeta<{
    ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps): JSX.Element;
    defaultProps: {
        user: null;
    };
}>;
export default _default;
export declare const LoggedIn: ComponentStory<{
    ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps): JSX.Element;
    defaultProps: {
        user: null;
    };
}>;
export declare const LoggedOut: ComponentStory<{
    ({ user, onLogin, onLogout, onCreateAccount }: import("./Header").HeaderProps): JSX.Element;
    defaultProps: {
        user: null;
    };
}>;
