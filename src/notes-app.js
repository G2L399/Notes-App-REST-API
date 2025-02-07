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
    this.loading = false;
  }

  connectedCallback() {
    this.initComponent();
  }

  async initComponent() {
    const param = new URLSearchParams(window.location.search);
    const isArchived = param.get("isArchived");
    let status;

    if (!isArchived) {
      param.set("isArchived", "false");
      status = false;
    } else {
      isArchived === "true" ? (status = true) : (status = false);
      console.log(status);
    }
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

    this.main = this.shadowRoot.getElementById("notes");
    await this.renderNotes();
    this.addButton = this.shadowRoot.querySelector(".addNewNote");
    this.archive = this.shadowRoot.getElementById("archive");
    this.archiveLabel = this.shadowRoot.getElementById("archiveLabel");
    this.archive.checked = status;
    this.archiveLabel.textContent = `Currently Showing ${
      status ? "Archived" : "Unarchived"
    } Notes. Click Me To Change `;
    this.archive.addEventListener("change", async () => {
      this.changeLoading();
      window.history.replaceState(
        {},
        "",
        `${window.location.pathname}?isArchived=${this.archive.checked}`
      );
      await this.renderNotes();
      this.deleteButton = this.shadowRoot.querySelectorAll(".delete-button");

      this.archiveLabel.textContent = `Currently Showing ${
        this.archive.checked ? "Archived" : "Unarchived"
      } Notes. Click Me To Change`;
      this.changeLoading();
    });

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
  }
  changeLoading() {
    this.loading = !this.loading;
    this.archive.disabled = this.loading;
    this.addButton.disabled = this.loading;
    const currentDeleteButtons =
      this.shadowRoot.querySelectorAll(".delete-button");
    const currentArchiveButtons =
      this.shadowRoot.querySelectorAll(".edit-button");

    currentArchiveButtons.forEach((button) => (button.disabled = this.loading));
    currentDeleteButtons.forEach((button) => (button.disabled = this.loading));
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
