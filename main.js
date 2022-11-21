const notesForm = document.querySelector("#notesForm")
const noteInput = document.querySelector("#noteInput")
const noteSubmit = document.querySelector("#noteSubmit")
const toDoList = document.querySelector("#toDoList")
const resetButton= document.querySelector("#noteSubmit3")




localStorage.clear()
let toDoListStorage = []
toDoListStorage = localStorage.getItem("notes") ? JSON.parse(localStorage.getItem("notes")) : []
// let button = `<button onclick"deleteNote(this)">END TASK</button>`
console.log(toDoListStorage);
notesForm.addEventListener("submit", e => {
    e.preventDefault()
    toDoListStorage.push(noteInput.value)
    localStorage.setItem("notes", JSON.stringify(localStorage))
    listBuilder(noteInput.value)
    noteInput.value = ""
})

const listBuilder = (string) => {
    const note = document.createElement("li")
    note.innerHTML = `${string} <button onclick="deleteNote(this)" id="noteSubmit2">END TASK</button>`
    toDoList.appendChild(note)
}

const deleteNote = (btn) => {
    let endTask = btn.parentNode
    const index = toDoListStorage.indexOf(endTask)
    toDoListStorage.splice(index, 1)
    localStorage.setItem("notes", JSON.stringify(toDoListStorage))
    endTask.remove()
}



resetButton.onclick ()