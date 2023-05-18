let undoStack = [];
let redoStack = [];

function saveState(state) {
  undoStack.push(state);
  redoStack = [];
}

function undo() {
  if (undoStack.length === 0) {
    return; 
  }
  
  const prevState = undoStack.pop();
  
  redoStack.push(prevState);
  
  updateState(prevState);
}

function redo() {
  if (redoStack.length === 0) {
    return; // nothing to redo
  }
  
  const nextState = redoStack.pop();
  
  undoStack.push(nextState);
  
  updateState(nextState);
}

function updateState(state) {

}
