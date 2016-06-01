import React, { PropTypes } from 'react';
import * as ArticleActionCreator from '../actions/ArticleActionCreators';
import ArticleStore from '../stores/ArticlesListStore';
import connectToStores from '../utils/connectToStores';
import { map } from 'underscore';
import Article from './Article';

/**
 * [requestData request data from the server]
 * @return {[Array]} [List of articles]
 */
function requestData(props) {
	const { nextPageId } = props;
	ArticleActionCreator.getArticlesList(nextPageId);
}

/**
 * [getState retrieves state from stores]
 * @return {[type]} [this function will be called from the connectToStore higher order component]
 */
function getState(props) {
	const { pageId } = props;
	return {
		articles: ArticleStore.get(pageId),
		nextPageId: ArticleStore.getNextPageId(),
		isCompleted: ArticleStore.isEmpty()
	}
}

/**  
 *  decorator used as a higher order react commponent. 
 *  That is the the central location(reuseable component) to observe the stores and 
 *  pass the state  as props to the decorated component (that is this scenario ArticleList)
 */
@connectToStores([ArticleStore], getState)
export default class ArticlesList {

	static propTypes = {
		articles: PropTypes.array.isRequired,
		nextPageId: PropTypes.number.isRequired,
		isCompleted: PropTypes.bool.isRequired
	};

	constructor() {
		this.handleLoadMoreClick = this.handleLoadMoreClick.bind(this);
	}

	componentWillMount() { 
		requestData(this.props);
	}

	render() {
		var {articles, nextPageId, isCompleted} = {...this.props};
		return (
			<div className="cont">
				<div className="articlesCont">
					{
						map(articles, function(article) {
							return ( <Article {...article} key={article.id}></Article> );
						})
					}
				</div>

				<div className="more">
					{!isCompleted && 
						<button onClick={this.handleLoadMoreClick}> load more </button>
					}
				</div>
			</div>
		)
	}

	handleLoadMoreClick() {
		let nextPageId = this.props.nextPageId;
		ArticleActionCreator.getArticlesList(nextPageId);
	}
}