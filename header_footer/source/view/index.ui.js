/*******************************************************************************
 * Author :and TimeStamp :2015-10-26
 ******************************************************************************/
var nf = sm("do_Notification");
var app = sm("do_App");
// //返回按钮
var page = sm("do_Page");
var close = ui("close");
close.on("touch", function() {
	app.closePage();
})
page.on("back", function(data) {
	app.closePage();
})
// //
var listview = ui("listview");
var listdata = mm("do_ListData");

listdata.addData([ {
	"index" : "1",
	"name" : "ListView带缺省header和footer"
}, {
	"index" : "2",
	"name" : "ListView带自定义header和footer"
} ]);
listview.bindItems(listdata);

var root = ui("$");
var app = sm("do_App");
listview.on("touch", function(index) {
	switch (index) {
	case 0:
		app.openPage({
			source : "source://view/head_foot_view/index.ui",
			statusBarState : "transparent"
		});
		break;
	case 1:
		app.openPage({
			source : "source://view/custom_head_foot_view/index.ui",
			statusBarState : "transparent"
		});
		break;
	}
});
