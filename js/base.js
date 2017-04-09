// 构造函数,原型,AMD,CommonJS,Node
(function(root, factory) {
	if(typeof define === 'function' && define.amd) {
		// AMD. Register as an anonymous module.
		// AMD. 注册作为一个匿名模块。 
		define(['jquery'], factory);
	} else if(typeof exports === 'object') {
		// Node. Does not work with strict CommonJS, but only CommonJS-like environments that support module.exports, like Node.
		//不严格的CommonJS工作，但只有这样的出口环境支持CommonJS模块.
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals (root is window)
		// 浏览器全局变量 root==window
		root.sihan = factory(root.jQuery);
	}

}(this, function($) {

	function Sihan(options) {
		this.options = options;
	}

	Sihan.defaults = {
		height: 100
	};

	Sihan.prototype.build = function() {
		
	};

	return new Sihan();
}));
//插件机制
//(function($) {
//	$.fn.slide = function(options) {
//		$.fn.slide.defaults = {
//			type: "slide"
//		};
//		return this.each(function() {
//
//		})
//	};
//})(jQuery);
//jQuery(".slideTxtBox").slide({});