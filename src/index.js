function liveTime() {
  var greeting = React.createElement('h1', {}, 'Hello World!');
  var time = React.createElement('h2', {}, `It is ${new Date().toLocaleTimeString()}`);
  var app = React.createElement('div', {}, greeting, time);

  ReactDOM.render(
      app, 
      document.getElementById('react-app-root')
  );

}

setInterval(liveTime, 1000);
