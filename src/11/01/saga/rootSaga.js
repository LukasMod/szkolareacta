import { put, takeEvery, all, delay } from 'redux-saga/effects';
import { loadUsers, errorUsers, addUser } from './../actions/usersActions';
import { REQUEST_USERS, REQUEST_USER } from './../actions/consts';

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

function* fetchUser(action) {
  try {
    const user = yield fetch('/user').then((response) => response.json());
    yield put(addUser(user.results));
  } catch (e) {
    yield put(errorUsers());
  }
}

function* newUserWatcher() {
  yield takeEvery(REQUEST_USER, fetchUser);
}

export default function* rootSaga() {
  yield all([usersWatcher(), newUserWatcher()]);
}
