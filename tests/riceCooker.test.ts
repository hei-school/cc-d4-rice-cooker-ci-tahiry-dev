import * as assert from 'assert';
import * as sinon from 'sinon';
import { cuireRiz } from '../src/riceCooker'; // Adjust the import path accordingly

describe('cuireRiz function', () => {
    let clock: sinon.SinonFakeTimers;

    beforeEach(() => {
        // Setup: Fake timers using sinon
        clock = sinon.useFakeTimers();
    });

    afterEach(() => {
        // Teardown: Restore timers
        clock.restore();
    });

    it('should print "Votre Riz est prêt !" after 10 seconds', () => {
        // Setup
        const consoleLogStub = sinon.stub(console, 'log');

        // Call cuireRiz function from the imported module
        cuireRiz('type', 100);

        // Fast-forward the clock by 10 seconds
        clock.tick(10000);

        // Verify
        assert.equal(consoleLogStub.calledWith('Votre Riz est prêt !'), true);

        // Teardown
        consoleLogStub.restore();
    });
});
