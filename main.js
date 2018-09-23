const UrlParam = function() {
// private
	function add(url, name, value) {
		if (url === '') {
			return `?${name}=${encodeURI(value)}`;
		}
		return `${url}&${name}=${encodeURI(value)}`;
	};
	function change(url, name, value) {
		const token = `${name}=`;
		let params = url.split('&');
		let pos = -1;
	
		for (let i = 0; i < params.length; i++) {
			pos = params[i].indexOf(token);
			if (pos !== -1) {
				params[i] = params[i].replace(params[i].substr(pos + token.length), encodeURI(value));
				break;
			}
		}
		return params.join('&');
	};
// public
	return {
		write: function(url, name, value) {
			return (url.match(`${name}=`)) ?
				change(...arguments) :
				add(...arguments);
		},
		delete: function(url, name) {
			const token = `${name}=`;
			let posBegin = url.indexOf(token);
			if (posBegin === -1) {
				return url;
			}
			let posEnd = url.substr(posBegin).indexOf('&');

			if (posEnd === -1) {
				return url.replace(url.substr(posBegin - 1), '');
			}
			let res = url.replace(url.substr(posBegin - 1, posEnd + 1), '');
			if (res[0] === '&') {
				return `?${res.substr(1)}`;
			}
			return res;
		}
	}
};