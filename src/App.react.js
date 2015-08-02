var React = require('react');
var Router = require('director').Router;
var Palettes = require('./Palettes.react');

var App = React.createClass({ 
  getInitialState: function() {
    return {
      palettes: []
    }
  },

  componentDidMount: function() {
    this._getJSON('palettes.json', this._updatePalettes);
    this._initRouter();
  },

  render: function() {
    return (
      <div>
      <Palettes palettes={this.state.palettes} />
      </div>
    )
  },

  _showPalette: function() {
    
  },

  _showAll: function() {
    return (
      <div>
      <Palettes palettes={this.state.palettes} />
      </div>
    )
  },

  _getJSON: function(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  _initRouter: function() {
      this.router = Router({
        '/'             : this._showAll,
        '/palettes/:id' : this._showPalette
      });
      this.router.configure({ html5history: true });
      this.router.init();
  }

});

module.exports = App;