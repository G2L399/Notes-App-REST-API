import { modalParent, styles } from "./notes-modal-element.js";

export class NotesModal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.notesApp = this.closest("notes-app");
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = ``;

    this.shadowRoot.appendChild(styles);

    this.shadowRoot.appendChild(modalParent);

    this.modal = this.shadowRoot.getElementById("modal");
    this.inputTitle = this.shadowRoot.getElementById("title");
    this.inputContent = this.shadowRoot.getElementById("content");
    this.form = this.shadowRoot.getElementById("noteForm");
    this.modalTitle = this.shadowRoot.querySelector(".modal-content header h2");
    this.closeButton = this.shadowRoot.querySelector(".close-button");
    this.submitButton = this.shadowRoot
      .querySelector(".submitButton")
      .querySelector("button");

    this.closeButton.addEventListener("click", () => {
      this.editingId = null;
      this.hideModal();
    });
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (this.notesApp.editingId) {
        this.notesApp.handleSubmitEdit();
      } else {
        this.notesApp.handleSubmitAdd();
      }
    });
  }
  hideModal() {
    this.modal.hidePopover();
  }
}
