import { PositionChange } from '../transformation/position-change';

export interface Draggable {
  onDragStart();
  onDragLocationChange(change: PositionChange);
  onDragFinish(change: PositionChange);
  onSelect();
}
