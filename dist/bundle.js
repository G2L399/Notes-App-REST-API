/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/crud.js":
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   archiveNote: () => (/* binding */ archiveNote),\n/* harmony export */   createElement: () => (/* binding */ createElement),\n/* harmony export */   deleteNote: () => (/* binding */ deleteNote),\n/* harmony export */   getArchivedNotes: () => (/* binding */ getArchivedNotes),\n/* harmony export */   getNoteById: () => (/* binding */ getNoteById),\n/* harmony export */   getNotes: () => (/* binding */ getNotes),\n/* harmony export */   renderNotes: () => (/* binding */ renderNotes),\n/* harmony export */   saveNotes: () => (/* binding */ saveNotes),\n/* harmony export */   unarchiveNote: () => (/* binding */ unarchiveNote)\n/* harmony export */ });\nasync function renderNotes() {\r\n  const notes = await getNotes();\r\n  const data = notes.data;\r\n\r\n  data.sort(\r\n    (a, b) => new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()\r\n  );\r\n\r\n  this.main.innerHTML = \"\";\r\n  data.forEach((note) => {\r\n    const card = createNoteCard.call(this, note);\r\n    this.main.appendChild(card);\r\n  });\r\n}\r\n\r\nasync function getNotes() {\r\n  const notesData = await fetch(\"https://notes-api.dicoding.dev/v2/notes\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      return data;\r\n    })\r\n    .catch((error) => console.error(error));\r\n\r\n  return notesData;\r\n}\r\n\r\nfunction saveNotes(notes) {\r\n  fetch(\"https://notes-api.dicoding.dev/v2/notes\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(notes),\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => console.log(data))\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\nasync function getArchivedNotes() {\r\n  fetch(\"https://notes-api.dicoding.dev/v2/notes/archived\")\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      return data;\r\n    })\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\nasync function getNoteById(id) {\r\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`)\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      return data;\r\n    })\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\nfunction archiveNote(id) {\r\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}/archive`, {\r\n    method: \"POST\",\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => data)\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\nfunction unarchiveNote(id) {\r\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}/unarchive`, {\r\n    method: \"POST\",\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => data)\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\nfunction deleteNote(id) {\r\n  console.log(id);\r\n\r\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${id}`, {\r\n    method: \"DELETE\",\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => {\r\n      this.renderNotes();\r\n      return data;\r\n    })\r\n    .catch((error) => console.error(error));\r\n}\r\n\r\n// export function editNote(id) {\r\n//   console.log(id);\r\n\r\n//   this.editingId = id;\r\n//   this.notesModal.modalTitle.textContent = \"Edit Note\";\r\n//   this.showModal();\r\n//   const notes = this.getNotes();\r\n//   const note = notes.find((n) => n.id === id);\r\n//   if (note) {\r\n//     this.notesModal.inputTitle.value = note.title;\r\n//     this.notesModal.inputContent.value = note.body;\r\n//   }\r\n// }\r\n\r\nfunction createNoteCard(note) {\r\n  const card = createElement(\"div\", {\r\n    className: \"note-card\",\r\n    dataset: { id: note.id },\r\n  });\r\n\r\n  const titleEl = createElement(\"h3\", {}, note.title);\r\n  const bodyEl = createElement(\"p\", {}, note.body);\r\n  const createdEl = createElement(\r\n    \"small\",\r\n    {},\r\n    `Created: ${new Date(note.createdAt).toLocaleString()}`\r\n  );\r\n  const archivedEl = createElement(\"small\", {}, `Archived: ${note.archived}`);\r\n\r\n  const editButton = createElement(\r\n    \"button\",\r\n    { className: \"edit-button\", disabled: true },\r\n    \"Edit\"\r\n  );\r\n  const deleteButton = createElement(\r\n    \"button\",\r\n    { className: \"delete-button\" },\r\n    \"Delete\"\r\n  );\r\n  const buttonContainer = createElement(\r\n    \"div\",\r\n    { className: \"button-container\" },\r\n    editButton,\r\n    deleteButton\r\n  );\r\n\r\n  card.append(titleEl, bodyEl, createdEl, archivedEl, buttonContainer);\r\n\r\n  card.addEventListener(\"click\", (event) => {\r\n    if (\r\n      !event.target.classList.contains(\"edit-button\") &&\r\n      !event.target.classList.contains(\"delete-button\")\r\n    ) {\r\n      this.notesFull.showFullNote(note.title, note.body);\r\n    }\r\n  });\r\n\r\n  editButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n\r\n    this.editNote(note.id);\r\n  });\r\n\r\n  deleteButton.addEventListener(\"click\", (event) => {\r\n    event.stopPropagation();\r\n    this.deleteNote(note.id);\r\n  });\r\n\r\n  return card;\r\n}\r\n/**\r\n * @description Creates an HTML element\r\n * @param {string} tag - The tag name of the element to create\r\n * @param {object} props - The properties of the element to create\r\n * @param {...*} children - The children of the element to create\r\n * @returns {HTMLElement}\r\n */\r\nconst createElement = (tag, props = {}, ...children) => {\r\n  const element = document.createElement(tag);\r\n\r\n  Object.keys(props).forEach((key) => {\r\n    if (key === \"className\") {\r\n      element.className = props[key];\r\n    } else if (key === \"dataset\") {\r\n      Object.entries(props[key]).forEach(([dataKey, dataValue]) => {\r\n        element.dataset[dataKey] = dataValue;\r\n      });\r\n    } else if (key === \"style\") {\r\n      Object.assign(element.style, props[key]);\r\n    } else {\r\n      element[key] = props[key];\r\n    }\r\n  });\r\n\r\n  children.forEach((child) => {\r\n    if (typeof child === \"string\") {\r\n      element.appendChild(document.createTextNode(child));\r\n    } else if (child instanceof Node) {\r\n      element.appendChild(child);\r\n    }\r\n  });\r\n\r\n  return element;\r\n};\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/crud.js?");

/***/ }),

/***/ "./src/handleSubmit.js":
/*!*****************************!*\
  !*** ./src/handleSubmit.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   handleSubmitAdd: () => (/* binding */ handleSubmitAdd),\n/* harmony export */   handleSubmitEdit: () => (/* binding */ handleSubmitEdit)\n/* harmony export */ });\nfunction handleSubmitAdd() {\r\n  const title = this.notesModal.inputTitle.value;\r\n  const content = this.notesModal.inputContent.value;\r\n  const note = { title, body: content };\r\n\r\n  fetch(\"https://notes-api.dicoding.dev/v2/notes\", {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(note),\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => console.log(data))\r\n    .catch((error) => console.error(error));\r\n\r\n  this.renderNotes();\r\n  this.notesModal.hideModal();\r\n  this.notesModal.form.reset();\r\n}\r\n\r\nfunction handleSubmitEdit() {\r\n  if (!this.editingId) return;\r\n\r\n  const title = this.notesModal.inputTitle.value;\r\n  const content = this.notesModal.inputContent.value;\r\n  const note = { title, body: content };\r\n\r\n  fetch(`https://notes-api.dicoding.dev/v2/notes/${this.editingId}`, {\r\n    method: \"POST\",\r\n    headers: {\r\n      \"Content-Type\": \"application/json\",\r\n    },\r\n    body: JSON.stringify(note),\r\n  })\r\n    .then((response) => response.json())\r\n    .then((data) => console.log(data))\r\n    .catch((error) => console.error(error));\r\n\r\n  this.renderNotes();\r\n  this.notesModal.hideModal();\r\n  this.notesModal.form.reset();\r\n  this.editingId = null;\r\n}\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/handleSubmit.js?");

/***/ }),

/***/ "./src/notes-app.js":
/*!**************************!*\
  !*** ./src/notes-app.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n/* harmony import */ var _handleSubmit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleSubmit.js */ \"./src/handleSubmit.js\");\n/* harmony import */ var _notes_full_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./notes-full.js */ \"./src/notes-full.js\");\n/* harmony import */ var _notes_modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./notes-modal.js */ \"./src/notes-modal.js\");\n\r\n\r\n\r\n\r\n\r\nclass NotesApp extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.notesFull = this.querySelector(\"notes-full\");\r\n    this.notesModal = this.querySelector(\"notes-modal\");\r\n\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.editingId = null;\r\n  }\r\n\r\n  connectedCallback() {\r\n    this.shadowRoot.innerHTML = /*html*/ `\r\n      <link rel=\"stylesheet\" href=\"./notes.css\" />\r\n      <header>\r\n        <h1>Notes App</h1>\r\n        <button class=\"addNewNote\" popovertarget=\"#modal\">Add Notes</button>\r\n      </header>\r\n\r\n      <main id=\"notes\"></main>\r\n  \r\n      <slot></slot>\r\n    `;\r\n    this.main = this.shadowRoot.getElementById(\"notes\");\r\n\r\n    this.addButton = this.shadowRoot.querySelector(\".addNewNote\");\r\n\r\n    this.addButton.addEventListener(\"click\", () => {\r\n      console.log(this.notesModal, this.notesFull);\r\n\r\n      this.notesModal.modalTitle.textContent = \"Add New Note\";\r\n      this.showModal();\r\n      this.notesModal.form.reset();\r\n      this.editingId = null;\r\n    });\r\n    document.addEventListener(\"keydown\", (e) => {\r\n      if (e.key === \"Escape\") {\r\n        this.notesModal.hideModal();\r\n        this.editingId = null;\r\n      }\r\n    });\r\n\r\n    this.renderNotes();\r\n  }\r\n\r\n  showModal() {\r\n    this.notesModal.modal.showPopover();\r\n  }\r\n}\r\nObject.assign(NotesApp.prototype, _crud_js__WEBPACK_IMPORTED_MODULE_0__);\r\nObject.assign(NotesApp.prototype, _handleSubmit_js__WEBPACK_IMPORTED_MODULE_1__);\r\n\r\ncustomElements.define(\"notes-app\", NotesApp);\r\ncustomElements.define(\"notes-full\", _notes_full_js__WEBPACK_IMPORTED_MODULE_2__.NotesFull);\r\ncustomElements.define(\"notes-modal\", _notes_modal_js__WEBPACK_IMPORTED_MODULE_3__.NotesModal);\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/notes-app.js?");

/***/ }),

/***/ "./src/notes-full-element.js":
/*!***********************************!*\
  !*** ./src/notes-full-element.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   modalParent: () => (/* binding */ modalParent),\n/* harmony export */   styles: () => (/* binding */ styles)\n/* harmony export */ });\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n\r\n\r\nconst styles = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", {\r\n  rel: \"stylesheet\",\r\n  href: \"./notes.css\",\r\n});\r\nconst modalParent = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\r\n  className: \"modalParent\",\r\n  id: \"viewModal\",\r\n  popover: \"manual\",\r\n});\r\nconst modal = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", { className: \"modal\" });\r\nconst modalContent = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", { className: \"modal-content\" });\r\nconst header = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\");\r\nconst viewTitle = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", { id: \"viewTitle\" });\r\nconst closeViewButton = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\r\n  \"button\",\r\n  { className: \"close-view-button\", popovertarget: \"#viewModal\" },\r\n  \"\\u00D7\"\r\n);\r\nconst viewContent = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"p\", { id: \"viewContent\" });\r\n\r\nheader.appendChild(viewTitle);\r\nheader.appendChild(closeViewButton);\r\nmodalContent.appendChild(header);\r\nmodalContent.appendChild(viewContent);\r\nmodal.appendChild(modalContent);\r\nmodalParent.appendChild(modal);\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/notes-full-element.js?");

/***/ }),

/***/ "./src/notes-full.js":
/*!***************************!*\
  !*** ./src/notes-full.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotesFull: () => (/* binding */ NotesFull)\n/* harmony export */ });\n/* harmony import */ var _notes_full_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notes-full-element.js */ \"./src/notes-full-element.js\");\n\r\n\r\nclass NotesFull extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n  }\r\n  connectedCallback() {\r\n    this.shadowRoot.innerHTML = ``;\r\n    this.shadowRoot.appendChild(_notes_full_element_js__WEBPACK_IMPORTED_MODULE_0__.styles);\r\n    this.shadowRoot.appendChild(_notes_full_element_js__WEBPACK_IMPORTED_MODULE_0__.modalParent);\r\n\r\n    this.viewModal = this.shadowRoot.getElementById(\"viewModal\");\r\n    this.viewTitle = this.shadowRoot.getElementById(\"viewTitle\");\r\n    this.viewContent = this.shadowRoot.getElementById(\"viewContent\");\r\n    this.closeViewButton = this.shadowRoot.querySelector(\".close-view-button\");\r\n\r\n    this.closeViewButton.addEventListener(\"click\", () => {\r\n      this.hideViewModal();\r\n    });\r\n    document.addEventListener(\"keydown\", (e) => {\r\n      if (e.key === \"Escape\") {\r\n        this.hideViewModal();\r\n        this.editingId = null;\r\n      }\r\n    });\r\n  }\r\n  showViewModal() {\r\n    this.viewModal.showPopover();\r\n  }\r\n  hideViewModal() {\r\n    this.viewModal.hidePopover();\r\n  }\r\n  showFullNote(title, body) {\r\n    if (title && body) {\r\n      this.viewTitle.textContent = title;\r\n      this.viewContent.textContent = body;\r\n      this.showViewModal();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/notes-full.js?");

/***/ }),

/***/ "./src/notes-modal.js":
/*!****************************!*\
  !*** ./src/notes-modal.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   NotesModal: () => (/* binding */ NotesModal)\n/* harmony export */ });\n/* harmony import */ var _crud_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crud.js */ \"./src/crud.js\");\n\r\n\r\nclass NotesModal extends HTMLElement {\r\n  constructor() {\r\n    super();\r\n    this.attachShadow({ mode: \"open\" });\r\n    this.notesApp = this.closest(\"notes-app\");\r\n  }\r\n  connectedCallback() {\r\n    this.shadowRoot.innerHTML = /*html*/ `\r\n\r\n    `;\r\n    const styles = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"link\", {\r\n      rel: \"stylesheet\",\r\n      href: \"./notes.css\",\r\n    });\r\n    this.shadowRoot.appendChild(styles);\r\n\r\n    const modalParent = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", {\r\n      className: \"modalParent\",\r\n      id: \"modal\",\r\n      popover: \"manual\",\r\n    });\r\n    const modal = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", { className: \"modal\" });\r\n    const modalContent = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", { className: \"modal-content\" });\r\n    const header = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"header\");\r\n    const modalTitle = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"h2\", { id: \"modalTitle\" });\r\n    const closeButton = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\r\n      \"button\",\r\n      { className: \"close-button\", popovertarget: \"#modal\" },\r\n      \"\\u00D7\"\r\n    );\r\n    const form = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"form\", {\r\n      id: \"noteForm\",\r\n      className: \"form-group\",\r\n    });\r\n    const titleLabel = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"label\", { htmlFor: \"title\" }, \"Title\");\r\n    const title = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"input\", {\r\n      type: \"text\",\r\n      id: \"title\",\r\n      minlength: \"4\",\r\n      name: \"title\",\r\n      required: true,\r\n    });\r\n    const contentLabel = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\r\n      \"label\",\r\n      { htmlFor: \"content\" },\r\n      \"Content\"\r\n    );\r\n    const content = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"textarea\", {\r\n      id: \"content\",\r\n      name: \"content\",\r\n      required: true,\r\n    });\r\n    const submitButton = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"div\", { className: \"submitButton\" });\r\n    const saveButton = (0,_crud_js__WEBPACK_IMPORTED_MODULE_0__.createElement)(\"button\", { type: \"submit\" }, \"Save\");\r\n\r\n    header.appendChild(modalTitle);\r\n    header.appendChild(closeButton);\r\n    modalContent.appendChild(header);\r\n    modalContent.appendChild(form);\r\n    form.appendChild(titleLabel);\r\n    form.appendChild(title);\r\n    form.appendChild(contentLabel);\r\n    form.appendChild(content);\r\n    form.appendChild(submitButton);\r\n    submitButton.appendChild(saveButton);\r\n    modal.appendChild(modalContent);\r\n    modalParent.appendChild(modal);\r\n    this.shadowRoot.appendChild(modalParent);\r\n\r\n    this.modal = this.shadowRoot.getElementById(\"modal\");\r\n    this.inputTitle = this.shadowRoot.getElementById(\"title\");\r\n    this.inputContent = this.shadowRoot.getElementById(\"content\");\r\n    this.form = this.shadowRoot.getElementById(\"noteForm\");\r\n    this.modalTitle = this.shadowRoot.querySelector(\".modal-content header h2\");\r\n    this.closeButton = this.shadowRoot.querySelector(\".close-button\");\r\n\r\n    this.closeButton.addEventListener(\"click\", () => {\r\n      this.editingId = null;\r\n      this.hideModal();\r\n    });\r\n    this.form.addEventListener(\"submit\", (e) => {\r\n      e.preventDefault();\r\n      if (this.notesApp.editingId) {\r\n        this.notesApp.handleSubmitEdit();\r\n      } else {\r\n        this.notesApp.handleSubmitAdd();\r\n      }\r\n    });\r\n  }\r\n  hideModal() {\r\n    this.modal.hidePopover();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://notes-app-rest-api/./src/notes-modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/notes-app.js");
/******/ 	
/******/ })()
;