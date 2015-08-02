var React = require('react');

var Palette = React.createClass({
  render: function() {
    var tempTitle = this._listPalettes();
    return (
      <div>
      {tempTitle}
      </div>
    );
  },

  _listPalettes: function() {
    var self = this;
    var allPalettes = self.props.palette;

    return allPalettes.map(function(item) {
      return (
        <div className='palette' data-js={item.id}>
          <a href={'/palettes/' + item.id}>
            <h3>{item.title}</h3>
          </a>
          <p>{item.category}</p>
          <div className='colorContainer'>
          {self._listPaletteColors(item)}
          </div>
        </div>
      );
    })
  },

  _listPaletteColors: function(p) {
    var colorKeys = Object.getOwnPropertyNames(p.colors);
    var paletteColors = colorKeys.map(function(colKey, i) {
      return (
        <div className='color' key={p.id + colKey} style={{backgroundColor: p.colours[colKey]}}>
          <div className='hex' style={{color: p.colors[colKey]}} >{p.colors[colKey]}</div>
        </div>
      )
    });
    return (
      paletteColors
    )
  },

});

module.exports = Palette;