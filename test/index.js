const assert = require('assert');
const service = require('../services/greeter');

describe('Greeter', () => {
    describe('No query parameters provided', () => {
        it('should greet the world', () => {
            assert.equal(service.buildMessage(), 'Hello world');
        });
    });

    describe('Only name provided', () => {
        it('should greet by the name', () => {
            assert.equal(service.buildMessage('Alex'), 'Hi Alex');
        });
    });

    describe('Only city provided', () => {
        it('should greet the whole city', () => {
            assert.equal(service.buildMessage(null, 'Lisbon'), 'Good evening Lisbon');
        });
    });

    describe('Both name and city provided', () => {
        it('should greet the citizen', () => {
            assert.equal(service.buildMessage('Joana', 'Boston'), 'Hi Joana from Boston');
        });
    });
});
