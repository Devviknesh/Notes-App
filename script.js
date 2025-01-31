function saveNote() {
    let note = document.getElementById("note").value;
    localStorage.setItem("savedNote", note);
    alert("Note saved!");
}

window.onload = function() {
    document.getElementById("note").value = localStorage.getItem("savedNote") || "";
};
