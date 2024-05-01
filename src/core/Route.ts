import { isEqual } from '../utils/isEqual';
import { render } from '../utils/render';
import Block, { CommonProps } from './Block';

class Route {
    private _pathname: string;
    private _blockClass: typeof Block<CommonProps>;
    private _block: null | Block<CommonProps>;
    private _props: CommonProps;
    private _rootQuery: string;

    constructor(
        pathname: string,
        view: typeof Block<CommonProps>,
        props: CommonProps,
        rootQuery: string
    ) {
        this._pathname = pathname;
        this._blockClass = view;
        this._block = null;
        this._props = props;
        this._rootQuery = rootQuery;
    }

    navigate(pathname: string) {
        if (this.match(pathname)) {
            this._pathname = pathname;
            this.render();
        }
    }

    leave() {
        if (this._block) {
            this._block = null;
        }
    }

    match(pathname: string) {
        return isEqual(pathname, this._pathname);
    }

    render() {
        if (!this._block) {
            this._block = new this._blockClass(this._props);
            render(this._rootQuery, this._block);
            return;
        }

        this._block.show();
    }
}

export default Route;
