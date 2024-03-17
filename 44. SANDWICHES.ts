function make_sandwich(...items: string[]) {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

make_sandwich("jam", "butter");
make_sandwich("chicken", "lettuce", "tomato");
make_sandwich("potato", "ketchup", "mustard", "mayo");