class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>          
            @media only screen and (max-width: 800px) {
              .hero-image {
                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heroimage-small.jpg");
                background-position: center;
              }
            }

            @media only screen and (min-width: 800px) {
              .hero-image {
                background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/heroimage-large.jpg");
                background-position: center;
              }
            }
        </style>

        <div class="hero-image">
            <div class="hero-text">
                <h1 tabindex="-1">Crossy Restaurants</h1>
            </div>
        </div>`;
  }
}

customElements.define('hero-element', HeroElement);
