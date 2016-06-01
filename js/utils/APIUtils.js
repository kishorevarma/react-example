import 'whatwg-fetch';
import 'core-js/es6/promise';


//it uses ES6 fetch function we are using a polly fill 
let fetchData = (url, resKey) => {
	return fetch(url).then(response => 
		response.json().then(json => {
			return {[resKey] : json};
    	})
  	);
}

export const getArticlesList = (id)  => {
	let pageId = id || 1; //default to get the 1 page data;
	let url = `/bauer/articles/page/${pageId}`;
	return fetchData(url, "data");
}