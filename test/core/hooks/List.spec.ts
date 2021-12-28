import List from '../../../src/core/hooks/List';
import * as md5 from 'md5';

const cases = []
cases[0] = `
- 1
- 2
  - 2.1
  - 2.2
- 3
  + 3.1
- 4
  * 4.2
`;

cases[1] = `
- 1
  - 2
       - 2.1
    - 2.2
 - 3
          + 3.1
 - 4
* 4.2
`;

cases[2] = `
- 1
1. test

- 1.1
   - 1.1.2
       - blank
  - 1.2
 - 2
          + blank
      - 2.1
	* 2.2
 1. test
   2. 2
`;

cases[3] = `
1. test
	2. test
1. test
   一. test
   1. test
   
   
   a. test
- test
`;

const listHook = new List({ config: {}});
Object.defineProperty(listHook, '$engine', {
  value: { md5 },
});

describe('core/hooks/list', () => {
  it('checklist replace', () => {
    cases.forEach((item) => {
      expect(listHook.toHtml(item, (text) => ({ html: text }))).toMatchSnapshot();
    });
  });
});
