jest.autoMockOff();
jest.mock('../../js/AppDispatcher');

describe('ArticleListStore', function() {
  var AppConstants = require('../../js/constants/AppConstants');
  var _ = require('underscore');
  var AppDispatcher;
  var ArticlesListStore;
  var callback;

  // mock actions
  var firstPageArticles = {
    type: AppConstants.REQUEST_ARTICLES_SUCCESS,
    pageId: 1,
    response: {
      data: [
        { id: 1, image: "http://placehold.it/100x100&text=image 1", title: "article title 1"},
        { id: 2, image: "http://placehold.it/100x100&text=image 2", title: "article title 2"},
        { id: 3, image: "http://placehold.it/100x100&text=image 3", title: "article title 3"}
      ]
    }   
  };

  beforeEach(function() {
    AppDispatcher = require('../../js/AppDispatcher');
    ArticlesListStore = require('../../js/stores/ArticlesListStore');
    callback = AppDispatcher.register.mock.calls[0][0];
  });


  it('registers a callback with the dispatcher', function() {
    expect(AppDispatcher.register.mock.calls.length).toBe(1);
  }); 


  it('should initialize with no articles', function() {
    var all = ArticlesListStore.get();
    expect(all).toEqual({});
  });


  it('Get 3 articles form store', function() {
    callback(firstPageArticles);
    var all = ArticlesListStore.get();
    expect(_.keys(all).length).toBe(3);
  });

  it('Get next page Id', function() {
    callback(firstPageArticles);
    var nextPageId = ArticlesListStore.getNextPageId();
    expect(nextPageId).toBe(2);
  });

});
