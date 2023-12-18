import * as assert from 'assert';
import * as sinon from 'sinon';
import { cuireRiz } from '../src/riceCooker';

describe('cuireRiz function', () => {
    let clock: sinon.SinonFakeTimers;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        clock.restore();
    });

    it('should print "Votre Riz est prêt !" after 10 seconds', () => {
        const consoleLogStub = sinon.stub(console, 'log');
        cuireRiz('type', 100);
        clock.tick(10000);
        assert.equal(consoleLogStub.calledWith('Votre Riz est prêt !'), true);
        consoleLogStub.restore();
    });
});
