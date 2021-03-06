'use strict';
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Vector3 = new Schema({
	x: Number,
	y: Number,
	z: Number
});
let Color3 = new Schema({
	red: Number,
	green: Number,
	blue: Number
});

let PictureSchema = new Schema({
	playerName: {
		type: String
	},
	backgroundName: {
		type: String
	},
	createdDate: {
		type: Date,
		default: Date.now
	},
	avatarPosition: {
		type: Vector3
		//required: 'Missing the avatar position'
	},
	skinColor: Color3,
	hairColor: Color3,
	shirtColor: Color3,
	gender: String,
	bodySprite: String,
	likes: {
		type: Number,
		default: 0
	},
	dislikes: {
		type: Number,
		default: 0
	},
});

module.exports = mongoose.model('Pictures', PictureSchema);