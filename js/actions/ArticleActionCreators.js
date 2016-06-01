import { dispatchAsync } from '../AppDispatcher';
import ActionTypes from '../constants/AppConstants';
import * as APIUtils from '../utils/APIUtils';
import ArticleListStore from '../stores/ArticlesListStore';


export const getArticlesList = (pageId) => {	

	dispatchAsync(APIUtils.getArticlesList(pageId), {
		request: ActionTypes.REQUEST_ARTICLES,
    	success: ActionTypes.REQUEST_ARTICLES_SUCCESS,
    	failure: ActionTypes.REQUEST_ARTICLES_ERROR
	}, { pageId });
	
}
