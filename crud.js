export async function renderNotes() {
  const notes = await getNotes();
  const data = notes.data;

  data.sort(
    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
  );

  this.main.innerHTML = "";
  data.forEach((note) => {
    const card = createNoteCard.call(this, note);
    this.main.appendChild(card);
  });
}

export async function getNotes() {
  const notesData = await fetch("https://notes-api.dicoding.dev/v2/notes")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));

  return notesData;
}

export function saveNotes(notes) {
  fetch("https://notes-api.dicoding.dev/v2/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(notes),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}

export async function getArchivedNotes() {
  fetch("https://notes-api.dicoding.dev/v2/notes/archived")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}

export async function getNoteById(id) {
  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => console.error(error));
}

export function archiveNote(id) {
  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}/archive`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

export function unarchiveNote(id) {
  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}/unarchive`, {
    method: "POST",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.error(error));
}

export function deleteNote(id) {
  console.log(id);

  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      this.renderNotes();
      return data;
    })
    .catch((error) => console.error(error));
}

// export function editNote(id) {
//   console.log(id);

//   this.editingId = id;
//   this.notesModal.modalTitle.textContent = "Edit Note";
//   this.showModal();
//   const notes = this.getNotes();
//   const note = notes.find((n) => n.id === id);
//   if (note) {
//     this.notesModal.inputTitle.value = note.title;
//     this.notesModal.inputContent.value = note.body;
//   }
// }

function createNoteCard(note) {
  const card = createElement("div", {
    className: "note-card",
    dataset: { id: note.id },
  });

  const titleEl = createElement("h3", {}, note.title);
  const bodyEl = createElement("p", {}, note.body);
  const createdEl = createElement(
    "small",
    {},
    `Created: ${new Date(note.createdAt).toLocaleString()}`
  );
  const archivedEl = createElement("small", {}, `Archived: ${note.archived}`);

  const editButton = createElement(
    "button",
    { className: "edit-button", disabled: true },
    "Edit"
  );
  const deleteButton = createElement(
    "button",
    { className: "delete-button" },
    "Delete"
  );
  const buttonContainer = createElement(
    "div",
    { className: "button-container" },
    editButton,
    deleteButton
  );

  card.append(titleEl, bodyEl, createdEl, archivedEl, buttonContainer);

  card.addEventListener("click", (event) => {
    if (
      !event.target.classList.contains("edit-button") &&
      !event.target.classList.contains("delete-button")
    ) {
      this.notesFull.showFullNote(note.title, note.body);
    }
  });

  editButton.addEventListener("click", (event) => {
    event.stopPropagation();

    this.editNote(note.id);
  });

  deleteButton.addEventListener("click", (event) => {
    event.stopPropagation();
    this.deleteNote(note.id);
  });

  return card;
}
/**
 * @description Creates an HTML element
 * @param {string} tag - The tag name of the element to create
 * @param {object} props - The properties of the element to create
 * @param {...*} children - The children of the element to create
 * @returns {HTMLElement}
 */
export const createElement = (tag, props = {}, ...children) => {
  const element = document.createElement(tag);

  Object.keys(props).forEach((key) => {
    if (key === "className") {
      element.className = props[key];
    } else if (key === "dataset") {
      Object.entries(props[key]).forEach(([dataKey, dataValue]) => {
        element.dataset[dataKey] = dataValue;
      });
    } else if (key === "style") {
      Object.assign(element.style, props[key]);
    } else {
      element[key] = props[key];
    }
  });

  children.forEach((child) => {
    if (typeof child === "string") {
      element.appendChild(document.createTextNode(child));
    } else if (child instanceof Node) {
      element.appendChild(child);
    }
  });

  return element;
};
