import { createSelector } from 'reselect';
import get from 'lodash/get';
import { AppState } from '../store';

export const getNetwork = (state: AppState) => get(state, 'network', {});

export const getNetworkConnectivity = createSelector(getNetwork, (network) =>
  get(network, 'isConnected'),
);
