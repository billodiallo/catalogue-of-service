import deepFreeze from 'deep-freeze';
import page from '../reducers/page';
import { nextPage, prevPage, updatePage } from '../actions/index';

it('increases page number, happy path', () => {
  const stateBefore = 0;

  const stateAfter = 1;

  deepFreeze(stateBefore);
  deepFreeze(stateAfter);
  expect(
    page(stateBefore, nextPage()),
  ).toEqual(stateAfter);
});

it('test not going above 40, ', () => {
  const stateBefore = 40;
  const stateAfter = 40;
  deepFreeze(stateBefore);
  deepFreeze(stateAfter);
  expect(page(stateBefore, nextPage())).toEqual(stateAfter);
});
