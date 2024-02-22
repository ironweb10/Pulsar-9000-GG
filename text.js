javascript:(function() {
  var menu = document.createElement('div');
  menu.setAttribute('id', 'bookmark-menu');
  menu.style.position = 'fixed';
  menu.style.top = '50%';
  menu.style.left = '50%';
  menu.style.transform = 'translate(-50%, -50%)';
  menu.style.padding = '20px';
  menu.style.backgroundColor = '#fff';
  menu.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
  menu.style.zIndex = '9999';
  menu.style.cursor = 'move';

  var minimizeButton = document.createElement('button');
  minimizeButton.textContent = '-';
  minimizeButton.style.position = 'absolute';
  minimizeButton.style.top = '5px';
  minimizeButton.style.right = '5px';
  minimizeButton.style.padding = '5px';
  minimizeButton.style.fontSize = '20px';
  minimizeButton.style.borderRadius = '50%';
  minimizeButton.style.border = 'none';
  minimizeButton.style.backgroundColor = '#ccc';
  minimizeButton.style.color = '#000';

  var maximizeButton = document.createElement('a');
  maximizeButton.href = 'javascript:(function() { document.getElementById("bookmark-menu").style.display = "block"; document.getElementById("bookmark-maximize-button").style.display = "none"; })()';
  maximizeButton.style.position = 'fixed';
  maximizeButton.style.bottom = '10px';
  maximizeButton.style.right = '10px';
  maximizeButton.style.display = 'none';

  var maximizeButtonImage = document.createElement('img');
  maximizeButtonImage.src = 'https://iconape.com/wp-content/png_logo_vector/incognito.png';
  maximizeButtonImage.style.width = '50px';
  maximizeButtonImage.style.height = '50px';

  maximizeButton.appendChild(maximizeButtonImage);

  minimizeButton.addEventListener('click', function() {
    menu.style.display = 'none';
    maximizeButton.style.display = 'block';
  });

  var button1 = createButton('Launch incognito mode', function() {
    var win = window.open();
    var url = "https://history-bypass.ironweb10.repl.co";
    var iframe = win.document.createElement('iframe');
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";
    iframe.src = url;
    win.document.body.appendChild(iframe);
  });

  var button2 = createButton('Enable inspect', function() {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function() {
      eruda.init();
    };
  });

  var button3 = createButton('Script 3', function() {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function() {
      eruda.init();
    };
  });

  var button4 = createButton('Script 4', function() {
    var script = document.createElement('script');
    script.src = "//cdn.jsdelivr.net/npm/eruda";
    document.body.appendChild(script);
    script.onload = function() {
      eruda.init();
    };
  });

  menu.appendChild(minimizeButton);
  menu.appendChild(button1);
  menu.appendChild(button2);
  menu.appendChild(button3);
  menu.appendChild(button4);

  document.body.appendChild(menu);
  document.body.appendChild(maximizeButton);

  function createButton(label, script) {
    var button = document.createElement('button');
    button.textContent = label;
    button.style.marginBottom = '10px';
    button.style.padding = '10px 20px';
    button.style.fontSize = '16px';
    button.style.borderRadius = '5px';
    button.style.border = 'none';
    button.style.backgroundColor = '#007bff';
    button.style.color = '#fff';
    button.style.cursor = 'pointer';
    button.addEventListener('click', script);
    return button;
  }

  var isDragging = false;
  var initialX = 0;
  var initialY = 0;

  menu.addEventListener('mousedown', function(event) {
    isDragging = true;
    initialX = event.clientX - menu.offsetLeft;
    initialY = event.clientY - menu.offsetTop;
  });

  document.addEventListener('mousemove', function(event) {
    if (isDragging) {
      var newX = event.clientX - initialX;
      var newY = event.clientY - initialY;
      menu.style.left = newX + 'px';
      menu.style.top = newY + 'px';
    }
  });

  document.addEventListener('mouseup', function() {
    isDragging = false;
  });

  window.addEventListener('scroll', function() {
    if (menu.style.display === 'none') {
      maximizeButton.style.display = 'block';
    }
  });
})();