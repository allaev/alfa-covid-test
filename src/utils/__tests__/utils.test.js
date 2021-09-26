import * as Utils from '../utils';

describe('Utils tests', () => {
	describe('Function parseKeyString must return a parsed string', () => {
		it('Must return a parsed string', () => {
			const string = "life_expectancy";

			expect(Utils.parseKeyString(string)).toEqual("Life expectancy");
		});
  })
})
