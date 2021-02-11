import {
  call,
  put,
  takeEvery,
  takeLatest,
  all,
  delay,
} from 'redux-saga/effects';

import { loadUsers, errorUsers } from './../actions/actions';
import { REQUEST_USERS } from './../actions/consts';

function* fetchUsers(action) {
  try {
    const users = yield fetch('/users').then((response) => response.json());
    yield delay(1000);
    yield put(loadUsers(users.results));
  } catch (e) {
    yield put(errorUsers());
  }
}

function* usersWatcher() {
  yield takeEvery(REQUEST_USERS, fetchUsers);
}

export default function* rootSaga() {
  yield all([usersWatcher()]);
}
