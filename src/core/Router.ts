import Block, { CommonProps } from './Block';
import Route from './Route';

class Router {
    private static __instance: Router | null = null;
    private routes: Route[] = [];
    private history: History = window.history;
    private _currentRoute: Route | null = null;
    private _rootQuery!: string;

    constructor(rootQuery: string) {
        if (Router.__instance) {
            // eslint-disable-next-line no-constructor-return
            return Router.__instance;
        }

        this._rootQuery = rootQuery;

        // eslint-disable-next-line @typescript-eslint/no-this-alias
        Router.__instance = this;
    }

    use(pathname: string, block: typeof Block<CommonProps>, props: CommonProps = {}) {
        const route = new Route(pathname, block, props, this._rootQuery);

        this.routes.push(route);

        return this;
    }

    start() {
        window.onpopstate = ((event) => {
            this._onRoute((event.currentTarget as Window).location.pathname);
        });

        this._onRoute(window.location.pathname);
    }

    _onRoute(pathname: string) {
        const route = this.getRoute(pathname);
        if (!route) {
            return;
        }

        if (this._currentRoute && this._currentRoute !== route) {
            this._currentRoute.leave();
        }

        this._currentRoute = route;
        route.render();
    }

    go(pathname: string) {
        this.history.pushState({}, '', pathname);
        this._onRoute(pathname);
    }

    back() {
        this.history.back();
    }

    forward() {
        this.history.forward();
    }

    getRoute(pathname: string) {
        return this.routes.find((route) => route.match(pathname));
    }
}

export default Router;
