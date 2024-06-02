import sinon from 'sinon';
import { expect } from 'chai';
import { beforeEach } from 'mocha';
import Block, { CommonProps } from './Block.ts';
import store from './store.ts';
import Router from './Router.ts';

class TestPageClass extends Block<CommonProps> {
    render() {
        return '<div>Page</div>';
    }
}

describe('Router test', () => {
    let router: Router;

    beforeEach(() => {
        router = new Router('#app', store);
        router.use('/', TestPageClass).use('/test', TestPageClass).start();
    });

    it('initial initialization works', () => {
        expect(window.location.pathname).to.eq('/');
    });

    it('method router.go works', () => {
        router.go('/test');

        expect(window.location.pathname).to.eq('/test');
    });

    it('method router.back works', () => {
        // @ts-expect-error back is private
        const historyForwardStub = sinon.stub(router.history, 'back');

        router.back();

        expect(historyForwardStub.calledOnce).to.be.true;
        historyForwardStub.restore();
    });

    it('method router.forward works', () => {
        // @ts-expect-error history is private
        const historyForwardStub = sinon.stub(router.history, 'forward');

        router.forward();

        expect(historyForwardStub.called).to.be.true;
        historyForwardStub.restore();
    });
});
