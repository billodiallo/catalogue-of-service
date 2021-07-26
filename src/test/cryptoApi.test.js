import deepFreeze from 'deep-freeze';
import cryptoApi from '../reducers/cryptoApi';
import { FETCHING_API_ASSETS, FETCHING_API_SUCCESS, FETCHING_API_FAILURE } from '../helpers/help';
import { fetchApiAssets, fetchApiSuccess, fetchApiFailure } from '../actions/index';

it('fetch API Asset list update', () => {
  const stateBefore = [];
  const stateAfter = {
    fetching: true,
    updated: false,
    apiError: false,
    status: FETCHING_API_ASSETS,
  };
  deepFreeze(stateBefore);
  deepFreeze(fetchApiAssets);

  expect(
    cryptoApi(stateBefore, fetchApiAssets()),
  ).toEqual(stateAfter);
});
