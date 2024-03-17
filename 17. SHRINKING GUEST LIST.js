"use strict";
// Making guest list
let Guests = ["ALI", "HASSAN", "HUSSAIN"];
Guests.forEach(guest => {
    console.log(`ASSALAMUALAIKUM ${guest} WOULD YOU LIKE TO JOIN US FOR FOR DINNER?`);
});
//unable to attend
let unabletoattend = "HUSSAIN";
console.log(`${unabletoattend} can't make it to dinner.`);
// Replace the guest
let newGuest = "MUSTAFA";
Guests[Guests.indexOf(unabletoattend)] = newGuest;
// New invitations
Guests.forEach(Guest => {
    console.log(`ASSALAMUALAIKUM ${Guest}, would you like to join us at dinner?`);
});
let guests = ["ALI", "HASSAN", "MUSTAFA"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("ABUBAKR");
guests.splice(guests.length / 2, 0, "UMER");
guests.push("USMAN");
guests.forEach(guest => {
    console.log(`ASSALAMUALAIKUM ${guest}, would you like to join us for dinner?`);
});
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`ASSALAMUALAIKUM ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests);
