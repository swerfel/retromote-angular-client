export interface EditableElement {
  startEditing();
  discardEdit();
  confirmEdit();
  isEditing(): boolean;
}
