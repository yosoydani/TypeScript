import{ LikeComponent } from './like';

var button = new LikeComponent(10, true);
button.onClick();
console.log(`likesCount ${button.likesCount} isSeleceted ${button.isSelected}`);


