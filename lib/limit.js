const fs = require("fs");

exports.isLimit = function (sender, isPremium, isCreator, limitCount, _db) {
	if (isOwner) return false;
	if (isPremium) return false;
	let found = false;
	for (let i of _db) {
		if (i.id === sender) {
			let limits = i.limit;
			if (limits >= limitCount) {
				found = true;
				return true;
			} else {
				found = true;
				return false;
			}
		}
	}
	if (found === false) {
		const obj = { id: sender, limit: 0 };
		_db.push(obj);
		fs.writeFileSync("./lib/json/limit.json", JSON.stringify(_db));
		return false;
	}
};
exports.limitAdd = function (sender, _db) {
	let found = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i;
		}
	});
	if (found !== false) {
		_db[found].limit += 1;
		fs.writeFileSync("./lib/json/limit.json", JSON.stringify(_db));
	}
};
exports.getLimit = function (sender, limitCount, _db) {
	let found = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			found = i;
		}
	});
	if (found !== false) {
		return limitCount - _db[found].limit;
	} else {
		return limitCount;
	}
};
exports.giveLimit = function (pemain, duit, _db) {
	let position = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === pemain) {
			position = i;
		}
	});
	if (position !== false) {
		_db[position].limit -= duit;
		fs.writeFileSync("./lib/json/limit.json", JSON.stringify(_db));
	} else {
		const njt = duit - duit - duit;
		const bulim = {
			id: pemain,
			limit: njt,
		};
		_db.push(bulim);
		fs.writeFileSync("./lib/json/limit.json", JSON.stringify(_db));
	}
};
exports.addBalance = function (sender, duit, _db) {
	let position = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			position = i;
		}
	});
	if (position !== false) {
		_db[position].balance += duit;
		fs.writeFileSync("./lib/json/balance.json", JSON.stringify(_db));
	} else {
		const bulin = {
			id: sender,
			balance: duit,
		};
		_db.push(bulin);
		fs.writeFileSync("./lib/json/balance.json", JSON.stringify(_db));
	}
};
exports.kurangBalance = function (sender, duit, _db) {
	let position = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			position = i;
		}
	});
	if (position !== false) {
		_db[position].balance -= duit;
		fs.writeFileSync("./lib/json/balance.json", JSON.stringify(_db));
	}
};
exports.getBalance = function (sender, _db) {
	let position = false;
	Object.keys(_db).forEach((i) => {
		if (_db[i].id === sender) {
			position = i;
		}
	});
	if (position !== false) {
		return _db[position].balance;
	} else {
		return 0;
	}
};