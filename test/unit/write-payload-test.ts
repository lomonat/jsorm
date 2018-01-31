import { sinon, expect } from '../test-helper';
import WritePayload from '../../src/util/write-payload';
import { Person, PersonWithKebabcaseKeys } from '../fixtures';

describe('WritePayload', function() {

  it('snakecases attributes', function() {
    let person = new Person({ first_name: 'Joe' });
    let payload = new WritePayload(person, true);
    expect(payload.asJSON()).to.deep.equal({
      data: {
        type: 'people',
        attributes: {
          first_name: 'Joe',
        }
      }
    });
  });

  it('kebabcases attributes', function() {
    let person = new PersonWithKebabcaseKeys({ first_name: 'Joe' });
    let payload = new WritePayload(person, true);
    expect(payload.asJSON()).to.deep.equal({
      data: {
        type: 'people',
        attributes: {
          'first-name': 'Joe',
        }
      }
    });
  });

});
