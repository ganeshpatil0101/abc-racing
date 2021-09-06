const localStorageMock = (function() {
    let store = {}
  
    return {
      getItem: function(key) {
        return JSON.stringify({
          "navbar": {
            "bgColor": "mediumseagreen",
            "color": "white"
          },
          "slider": {
            "bgColor": "#dbdbdb",
            "color": "white"
          },
          "topRacers": {
            "bgColor": "#c9d0f4",
            "color": "white"
          },
          "fixtures": {
            "bgColor": "#e4bfb3",
            "color": "white"
          } 
        });
      },
      setItem: function(key, value) {
        store[key] = value.toString()
      },
      removeItem: function(key) {
        delete store[key]
      },
      clear: function() {
        store = {}
      }
    }
  })();
  
Object.defineProperty(window, 'localStorage', {
value: localStorageMock
});
