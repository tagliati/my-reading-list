let axios = require('axios');
let fs = require('fs'); 
let cheerio = require('cheerio');

axios.get('https://mangarock.com/manga/mrs-serie-68010')
    .then((response) => {
	            if(response.status === 200) {
						const html = response.data;
						console.log(html)
						const $ = cheerio.load(html); 
						console.log($("[data-test=chapter-table] tr").first().find('a').text().trim());
			        }
	        }, (error) => console.log(err) );
