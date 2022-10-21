(() => {
  // stylePlugin:/home/marchenry/Code/experiments/esbuidCssModules/src/button.module.css
  var button_module_default = {
    "button": "_button_bw4zf_2 _mixin_1gyx8_2"
  };

  // stylePlugin:/home/marchenry/Code/experiments/esbuidCssModules/src/text.module.css
  var text_module_default = {
    "text": "_text_tiv5k_2 _mixin_1gyx8_2"
  };

  // src/index.js
  console.log({
    button: button_module_default,
    text: text_module_default
  });
  document.body.innerHTML = `
    <div class="${button_module_default["button"]}">Button</div>
    <div class="${text_module_default["text"]}">Text</div>
`;
})();
