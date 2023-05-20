const template = document.createElement('template');
template.innerHTML = `
<div class="container">
<header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
  <a href="main.html" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
  <img src="img/A-5QUUnFFVg.jpg">
  </a>

  <div class="col-md-3 text-end">
    <button type="button" class="btn btn-outline-primary me-2">Login</button>
    <button type="button" class="btn btn-primary">Sign-up</button>
  </div>
</header>
</div>
`
document.body.appendChild(template.content);
