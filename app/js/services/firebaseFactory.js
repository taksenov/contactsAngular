app.factory('firebaseFactory', ['fbURL','$firebase', function (fbURL,$firebase) {
	var fb = {},
		ref = new Firebase(fbURL),
        sync = $firebase(ref).$asArray();

	fb.listContacts = function() {
  		return sync;
	};
	
	//fb.inboxMail = function(id) {
    //
	//	var url = fbURL+id,
	//	    ref = new Firebase(url),
     // 		sync = $firebase(ref).$asObject();
    //
     // 	return sync;
    //
	//}
    //
	//fb.addMail = function(arr) {
	//	var date = new Date();
	//	arr.date = +date;
	//	return sync.$add(arr);
	//}
    //
	//fb.saveMail = function() {
	//	return sync.$save();
	//}
    //
	//fb.deleteMail = function(obj) {
	//	return sync.$remove(obj);
	//}

	return fb;
}]);
