const jsApiList = [
	"checkJsApi",
	"onMenuShareTimeline",
	"onMenuShareAppMessage",
	"onMenuShareQQ",
	"onMenuShareWeibo",
	"onMenuShareQZone",
	"hideMenuItems",
	"showMenuItems",
	"hideAllNonBaseMenuItem",
	"showAllNonBaseMenuItem",
	"translateVoice",
	"startRecord",
	"stopRecord",
	"onVoiceRecordEnd",
	"playVoice",
	"onVoicePlayEnd",
	"pauseVoice",
	"stopVoice",
	"uploadVoice",
	"downloadVoice",
	"chooseImage",
	"previewImage",
	"uploadImage",
	"downloadImage",
	"getNetworkType",
	"openLocation",
	"getLocation",
	"hideOptionMenu",
	"showOptionMenu",
	"closeWindow",
	"scanQRCode",
	"chooseWXPay",
	"openProductSpecificView",
	"addCard",
	"chooseCard",
	"openCard",
];
const shareInfo = {
	title: document.getElementsByTagName("title")[0]?.innerText, // 分享标题
	desc: document.getElementsByTagName("meta")["description"]?.content, // 分享描述
	link: window.location.href, // 分享链接
	imgUrl: "https://blog.rexhang.com/images/avatar.png", // 分享图标
	type: "", // 分享类型,music、video或link，不填默认为link
	dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
	success: function (res) {
		// alert('分享成功了诶!内容是：'+_jsonToStr(res));
		alert("感谢分享~");
	},
	cancel: function (res) {
		// alert('取消分享了诶！'+_jsonToStr(res));
		alert("呜呜居然取消了分享~");
	},
};

jQuery.getJSON(
	"https://rexhang.com/wx_test/api.php?url=" +
		encodeURIComponent(location.href.split("#")[0]),
	function (data) {
		wx.config({
			debug: false,
			appId: "wxaad1993fd8fa617a",
			timestamp: data.timestamp,
			nonceStr: data.nonceStr,
			signature: data.signature,
			jsApiList,
		});
		wx.ready(function () {
			// 注册朋友分享配置
			wx.onMenuShareAppMessage(shareInfo);
			// 注册朋友圈分享配置
			wx.onMenuShareTimeline(shareInfo);
			// 注册QQ分享配置
			wx.onMenuShareQQ(shareInfo);
			// 注册QQ空间分享配置
			wx.onMenuShareQZone(shareInfo);
			// 注册微博分享配置
			wx.onMenuShareWeibo(shareInfo);
		});
		wx.error(function (res) {
			alert(res.errMsg);
		});
	}
);