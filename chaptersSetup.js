/* Index chapters creation */
const addChapter = (id, chapter) => {
  var newSubtitle = document.createElement("li");
  var newContent = document.createTextNode(chapter.toLowerCase());
  newSubtitle.appendChild(newContent);

  var currentSubtitle = document.getElementById(id);
  currentSubtitle.appendChild(newSubtitle);
};
