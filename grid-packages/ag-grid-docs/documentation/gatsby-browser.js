import { navigate, withPrefix } from 'gatsby';
import { getPageName } from './src/utils/get-page-name';
import { LocalStorage } from './src/utils/local-storage';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './src/bootstrap.scss';
import './src/themes/prism-coy-without-shadows.css';
import 'fontsource-roboto';

export const shouldUpdateScroll = ({ prevRouterProps, routerProps: { location: { pathname } } }) => {
    if (!prevRouterProps) { return true; }

    const { location: { pathname: previousPathname } } = prevRouterProps;

    const previousPageName = getPageName(previousPathname);
    const pageName = getPageName(pathname);

    if (pageName !== previousPageName) {
        const docPageWrapper = document.getElementById('doc-page-wrapper');

        if (docPageWrapper) {
            docPageWrapper.scrollIntoView();
            return false;
        }
    }

    return true;
};

const frameworkStorageKey = 'framework';

const getRelativePath = path => path.replace(withPrefix('/'), '/');

export const onPreRouteUpdate = ({ location }) => {
    if (getRelativePath(location.pathname) === '/') {
        const selectedFramework = LocalStorage.get(frameworkStorageKey) || 'javascript';

        navigate(`/${selectedFramework}/`, { replace: true });
    }
};

export const onRouteUpdate = ({ location }) => {
    if (LocalStorage.exists()) {
        const frameworkFromUrl = getRelativePath(location.pathname).split('/').filter(p => p !== '')[0];

        if (frameworkFromUrl) {
            LocalStorage.set(frameworkStorageKey, frameworkFromUrl);
        }
    }
};