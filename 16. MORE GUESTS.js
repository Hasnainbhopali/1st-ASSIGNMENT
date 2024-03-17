// Making guest list
var Guests = ["ALI", "HASSAN", "HUSSAIN"];
Guests.forEach(function (guest) {
    console.log("ASSALAMUALAIKUM ".concat(guest, " WOULD YOU LIKE TO JOIN US FOR FOR DINNER?"));
});
//unable to attend
var unabletoattend = "HUSSAIN";
console.log("".concat(unabletoattend, " can't make it to dinner."));
// Replace the guest
var newGuest = "MUSTAFA";
Guests[Guests.indexOf(unabletoattend)] = newGuest;
// New invitations
Guests.forEach(function (Guest) {
    console.log("ASSALAMUALAIKUM ".concat(Guest, ", would you like to join us at dinner?"));
});
var guests = ["ALI", "HASSAN", "MUSTAFA"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("ABUBAKR");
guests.splice(guests.length / 2, 0, "UMER");
guests.push("USMAN");
guests.forEach(function (guest) {
    console.log("ASSALAMUALAIKUM ".concat(guest, ", would you like to join us for dinner?"));
});
