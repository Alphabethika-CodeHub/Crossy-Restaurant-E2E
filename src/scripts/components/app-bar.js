class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
        <div class="app-bar__menu">
            <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand">
            <h1>Crossy Restaurants</h1>
        </div>
        <nav id="navigationDrawer" class="app-bar__navigation">
            <ul>
                <li><a href="#/restaurants">Home</a></li>
                <li><a href="#/like">Likes</a></li>
                <li><a rel="noreferrer" href="https://github.com/Alphabethika-CodeHub" target="_blank">About</a></li>
            </ul>
        </nav>
    </header>`;
  }
}

customElements.define('app-bar', AppBar);
