// Making guest list
let Guests: string[]= ["ALI" , "HASSAN" , "HUSSAIN"];
Guests.forEach(guest => {
    console.log(`ASSALAMUALAIKUM ${guest} WOULD YOU LIKE TO JOIN US FOR FOR DINNER?`);
});

//unable to attend
let unabletoattend ="HUSSAIN";
console.log(`${unabletoattend} can't make it to dinner.`);

// Replace the guest
let newGuest = "MUSTAFA";
Guests[Guests.indexOf(unabletoattend)] = newGuest;

// New invitations
Guests.forEach(Guest => {
    console.log(`ASSALAMUALAIKUM ${Guest}, would you like to join us at dinner?`);
});

let guests: string[] = ["ALI", "HASSAN", "MUSTAFA"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
guests.unshift("ABUBAKR");
guests.splice(guests.length / 2, 0, "UMER");
guests.push("USMAN");

guests.forEach(guest => {
    console.log(`ASSALAMUALAIKUM ${guest}, would you like to join us for dinner?`);
});