import * as notesMethods from "./crud.js";
import * as handleSubmit from "./handleSubmit.js";
import { NotesFull } from "./notes-full.js";
import { NotesModal } from "./notes-modal.js";
import { styles, header, main, slot } from "./notes-app-element.js";

class NotesApp extends HTMLElement {
  constructor() {
    super();
    this.notesFull = this.querySelector("notes-full");
    this.notesModal = this.querySelector("notes-modal");

    this.attachShadow({ mode: "open" });
    this.editingId = null;
  }

  connectedCallback() {
    const param = new URLSearchParams(window.location.search);
    const isArchived = param.get("isArchived");
    let status;
    console.log(isArchived);
    isArchived === null ? param.set("isArchived", "false") : (status = false);
    window.history.replaceState(
      {},
      "",
      `${window.location.pathname}?${param.toString()}`
    );

    this.shadowRoot.innerHTML = ``;
    this.shadowRoot.appendChild(styles);
    this.shadowRoot.appendChild(header);
    this.shadowRoot.appendChild(main);
    this.shadowRoot.appendChild(slot);
    const archive = this.shadowRoot.getElementById("archive");
    archive.checked = status;
    archive.addEventListener("change", () => {
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?isArchived=${archive.checked}`
      );
      this.renderNotes(archive.checked);
    });
    this.main = this.shadowRoot.getElementById("notes");
    this.addButton = this.shadowRoot.querySelector(".addNewNote");
    this.addButton.addEventListener("click", () => {
      this.notesModal.modalTitle.textContent = "Add New Note";
      this.showModal();
      this.notesModal.form.reset();
      this.editingId = null;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        this.notesModal.hideModal();
        this.editingId = null;
      }
    });

    this.renderNotes(status);
  }

  showModal() {
    this.notesModal.modal.showPopover();
  }
}
Object.assign(NotesApp.prototype, notesMethods);
Object.assign(NotesApp.prototype, handleSubmit);

customElements.define("notes-app", NotesApp);
customElements.define("notes-full", NotesFull);
customElements.define("notes-modal", NotesModal);
