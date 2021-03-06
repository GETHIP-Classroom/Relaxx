import {Videos} from '../imports/api/videos.js';
import {Musics} from '../imports/api/musics.js';
import {Soundclouds} from '../imports/api/soundclouds.js';
import {Games} from '../imports/api/games.js';

Router.route('/game/:_id', function () {
  this.render("eachgame");
  }
);

Router.route('/videos/:_tag', function () {
  this.render("searchvideos");
  }
);

Router.route('/music/:_tag', function () {
  this.render("searchmusic");
  }
);

Router.route('/login', function () {
  this.render("login");
});

Router.route('/register', function () {
  this.render("register");
});

Router.route('/profile', function () {
  this.render("profile");
});

Router.route('/music', function () {
  this.render("music");
});


Router.route('/videos', function () {
  this.render("videos");
});

Router.route('/games', function() {
  this.render("games");
});

Router.route('/home', function() {
  this.render("home");
});

Router.route('/', function() {
  this.render("relaxx");
});
