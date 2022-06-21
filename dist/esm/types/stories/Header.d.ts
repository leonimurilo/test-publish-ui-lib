/// <reference types="react" />
import './header.css';
declare type User = {
    name: string;
};
export interface HeaderProps {
    user?: User;
    onLogin: () => void;
    onLogout: () => void;
    onCreateAccount: () => void;
}
declare const Header: {
    ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps): JSX.Element;
    defaultProps: {
        user: null;
    };
};
export { Header };
