import sinon from 'sinon';
import { expect } from 'chai';
import { describe } from 'mocha';
import Block, { CommonProps } from './Block';

interface TestComponentProps extends CommonProps {
    spanText?: string;
    buttonText?: string;
}
class TestComponent extends Block<TestComponentProps> {
    render() {
        return `
            <div>
                <p data-testid="test-span">{{spanText}}</p>
                <button data-testid="test-button" type="button">{{buttonText}}</button>
            </div>`;
    }
}

describe('Block test', () => {
    const spanText = 'test span text';
    const buttonText = 'test button text';
    let component: Block<TestComponentProps>;

    beforeEach(() => {
        component = new TestComponent({
            spanText,
            buttonText,
        });
    });

    it('should create a component with props from the constructor', () => {
        const text = component.element?.querySelector('[data-testid="test-span"]')?.textContent;

        expect(text).to.be.eq(spanText);
    });

    it('should have reactive behavior', () => {
        const newText = 'new text';

        component.setProps({ spanText: newText });

        const text = component.element?.querySelector('[data-testid="test-span"]')?.textContent;
        expect(text).to.be.eq(newText);
    });

    it('should set events on the element', () => {
        const clickHandlerStub = sinon.stub();
        const componentWithStub = new TestComponent({
            events: {
                click: clickHandlerStub,
            },
        });

        const event = new MouseEvent('click');
        componentWithStub.element?.dispatchEvent(event);

        expect(clickHandlerStub.calledOnce).to.be.true;
    });

    it('should call dispatchComponentDidMount when is added to the DOM', () => {
        const clock = sinon.useFakeTimers();
        // @ts-expect-error element is private
        const spyCDM = sinon.spy(component, 'componentDidMount');

        const element = component.getContent();
        document.body.append(element!);
        clock.next();

        expect(spyCDM.calledOnce).to.be.true;
    });

    it('should hide element wnen hide method is called', () => {
        component.hide();

        const element = component.element;
        expect(element?.style.display).to.be.eq('none');
    });
});
