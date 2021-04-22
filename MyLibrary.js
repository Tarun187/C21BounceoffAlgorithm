function myisTouching(ob1,ob2){
    if (ob1.x - ob2.x < ob2.width/2 + ob1.width/2
      && ob2.x - ob1.x < ob2.width/2 + ob1.width/2
      && ob1.y - ob2.y < ob2.height/2 + ob1.height/2
      && ob2.y - ob1.y < ob2.height/2 + ob1.height/2) {
    
        return true ;
  }
  else {
    return false ;
  }
  }
function myBounceOff(m,n){
  if (m.x - n.x < n.width/2 + m.width/2
    && fixedRect.x - m.x < n.width/2 + m.width/2) {
      m.velocityX = m.velocityX * (-1);
      n.velocityX = n.velocityX * (-1);
}
if (m.y - n.y < n.height/2 + m.height/2
  && n.y -m.y < n.height/2 + m.height/2){
    m.velocityY = m.velocityY * (-1);
  n.velocityY = n.velocityY * (-1);
} 
}

