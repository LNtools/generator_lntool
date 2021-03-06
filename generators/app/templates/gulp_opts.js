'use strict';
const path = require('path');

/** global configs */
const urlProduction = "https://especialess3.lanacion.com.ar/";
const uploadPath = '/<%= year %>/<%= month %>/<%= slug %>/';
const date = new Date();
const absolutePath = path.join(urlProduction, uploadPath)
                        .replace(/\\/g, "/").replace("https:/e", "https://e"); // fix windows path;

if(uploadPath[uploadPath.length - 1] !== "/" ){
	uploadPath += "/";
}

var conf = {
    app_cwd:'source/',
    dest:'build/',
    // autotuneJson:'build/data/autotune.json',
    autotuneJson:'source/data/autotune.json',
    commit: Math.floor(Date.now() / 1000),
	urlProduction: urlProduction,
	absolutePath: absolutePath,
	
	meta_data: { // data para para los templates
		title: "<%= appname %>",
    url_esp: absolutePath,
    url_img_esp: path.join(absolutePath, "/img/social.png"),
		social_txt: "<%= description %>",
		dateModified: `${date.toISOString().slice(0,10)} ${date.getHours()}:${date.getMinutes()}:00`

    },

	deploy: {
    	uploadPath: uploadPath,
    	credentialsPath: './s3Credentials.json',
		pathProduction : urlProduction
	}


};

module.exports.conf = conf;

module.exports.js_all = 'all.v'+conf.commit+'.min.js';

module.exports.js_all = 'all.v'+conf.commit+'.min.js';

module.exports.js_vendor = 'vendor.v'+conf.commit+'.min.js';

module.exports.css_file_min = 'all.v'+conf.commit+'.min.css';
