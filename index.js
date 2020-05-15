// Code your solutions in this file
const gifts = ["teddy bear", "drone", "doll"];
 
function wrapGift(gift) {
  # For Ruby or Pythonistas, note that the " is now a ` (back-tick)
  # We'll discuss interpolation in detail elsewhere, but note that
  # JavaScript uses ` like Ruby uses ".
  console.log(`Wrapped ${gift} and added a bow!`);
}

wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);