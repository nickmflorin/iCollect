export function snapshotToArray(snapshot) {
    var returnArr = [];

    snapshot.forEach(function(childSnapshot) {
        var item = childSnapshot.val();
        item.id = childSnapshot.key;
        returnArr.push(item);
    });

    return returnArr;
};

export function dictToArray(dict) {
	var returnArr = []
	
	Object.keys(dict).forEach(function(key){
		var item = Object.assign({}, dict[key])
		item.id = key 
		returnArr.push(item)
	})
    return returnArr
};
