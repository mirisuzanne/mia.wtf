---
title: Custom element, two ways
date: 2024-01-24
tags:
  - css
  - custom elements
---

Sometimes I build
a custom element,
and then I have second thoughts about it.

<!-- intro -->

- <code style="--color-tile:hotpink">hotpink</code>
- <code><color-tile>teal</color-tile></code>
- <code style="--color-tile:#22f6">#22f6</code>
- <code><color-tile>#f226</color-tile></code>

The first is just
a clever use of CSS.
The second (registered) custom element
simplifies the markup,
but adds a JS dependency.
The markup:

- `<code style="--color-tile:hotpink">hotpink</code>`
- `<color-tile>teal</color-tile>`

Maybe that small syntax improvement
is a job for
_HTML templating_,
rather than a custom element?

If we had support
for the full `attr()` function
in CSS,
we could simplify
the CSS markup.
Now it's a custom attribute,
instead of a custom element:

- `<code color-tile="hotpink">hotpink</code>`

Down the road
I can imagine more
interactive features
for the component.
That could sway things
towards use of JS.
But still --
is it a custom element?
I'm not sure.

What do you think?

<iframe
  webc:is="code-pen"
  src="https://codepen.io/miriamsuzanne/embed/KKEXQKr"
  title="Custom element, two ways"
  height="400"
></iframe>

<script>
class ColorTile extends HTMLElement {
  static register(tagName) {
    if ("customElements" in window) {
      customElements.define(tagName || "color-tile", ColorTile);
    }
  }

  static observedAttributes = ['for-color'];

  static #appendShadowTemplate = (node) => {
    const template = document.createElement("template");
    template.innerHTML = `<span part="tile"></span><slot></slot>`;
    const shadowRoot = node.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }

  static #adoptShadowStyles = (node) => {
    const shadowStyle = new CSSStyleSheet();
    shadowStyle.replaceSync(`
      * { box-sizing: border-box; }
      [part=tile] {
        aspect-ratio: 1;
        background:
          linear-gradient(var(--tile-color) 0 100%),
          linear-gradient(45deg, black 50%, white 50%);
        border: thin solid;
        content: '';
        display: inline-block;
        inline-size: 1cap;
        margin-inline-end: 0.5ch;
      }
    `);
    node.shadowRoot.adoptedStyleSheets = [shadowStyle];
  }

  color;
  #tile;

  constructor() {
    super();
    ColorTile.#appendShadowTemplate(this);
    ColorTile.#adoptShadowStyles(this);

    this.#tile = this.shadowRoot.querySelector('[part=tile]');
  }

  attributeChangedCallback(attr) {
    if (attr === 'for-color') this.#applyColor();
  }

  connectedCallback() {
    this.#initColor();
    this.#applyColor();
  }

  disconnectedCallback() {
  }

  setColor(tileColor) { this.setAttribute('for-color', tileColor); }

  #initColor = () => {
    if (!this.color) this.setColor(this.innerText);
  }

  #applyColor = () => {
    this.color = this.getAttribute('for-color');
    this.#tile.style.setProperty('--tile-color', this.color);
  }
}

ColorTile.register();
</script>
