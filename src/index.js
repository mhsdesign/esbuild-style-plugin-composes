
import { styles as button } from "./button";
import { styles as text } from "./text";

console.log({
    button,
    text
});

document.body.innerHTML = `
    <div class="${button["button"]}">Button</div>
    <div class="${text["text"]}">Text</div>
`
