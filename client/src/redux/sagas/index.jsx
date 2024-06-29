import { call, put, takeLatest } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  const posts = yield call(api.fetchPosts);
  console.log("post:", posts);
  yield put(actions.getPosts.getPostSuccess(posts));
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
}

// generator function ES6

export default mySaga;
