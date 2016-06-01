import { register } from '../AppDispatcher';
import { createStore } from '../utils/StoreUtils'
import { isEmpty } from 'underscore';
import selectn from 'selectn';


let _articles = [];
let _nextPageId = 1;

const ArticlesListStore = createStore({
	get() {
		return _articles;
	},

	getNextPageId() {
		return _nextPageId;
	},

	isEmpty() {
		return  _nextPageId >= 4 ? true : false; 
	}
});

//light weight and simple stores without switch cases.

ArticlesListStore.dispatchToken = register(action => {
	const articles = selectn('response.data', action);
	const pageId = selectn('pageId', action);

	if(articles) {
		_articles =  _articles.concat(articles);
		_nextPageId = pageId + 1;
		ArticlesListStore.emitChange();
	}
});

export default ArticlesListStore;