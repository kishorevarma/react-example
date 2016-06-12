
# React Test

- users can see a list of articles
- users can press a button to load more articles


## Instructions

- To Make it work in local, clone this repository, do ``` npm install ```
- install nginx and add following config 

```
		location / {
           proxy_pass http://localhost:3000/;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
        }

        location /bauer/ {
           proxy_pass http://localhost:8081/;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
        }
```
 
## Technology

- Webpack for bundling and React hot loader for dev environment
- Nodejs Express for creating a simple rest service
- React Flux setup which I have used in the example might look over kill in this scenario
  But its more conveneint to add new stores and features.

## Details

- use React for rendering the HTML list and button ui
- use the Flux data flow pattern
- code must be unit tested
- use local JSON files as pages of articles to display
- all articles have unique ids, titles and images. one article is:

```
{
	id: 1,
	title: "article title 1",
	image: "http://placehold.it/300x250&text=image 1"
}
```
