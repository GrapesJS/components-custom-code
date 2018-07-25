import grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadCommands from './commands';

export default grapesjs.plugins.add('grapesjs-custom-code', (editor, opts = {}) => {
  const options = { ...{
    // Label of the custom code block
    blockLabel: 'Custom Code',

    // Object to extend the default custom code block, eg. { label: 'Custom Code', category: 'Extra', ... }.
    // Pass a falsy value to avoid adding the block
    blockCustomCode: {},

    // Object to extend the default custom code properties, eg. `{ name: 'Custom Code', droppable: false, ... }`
    propsCustomCode: {},

    // Initial content of the custom code component
    placeholderContent: '<span>Insert here your custom code</span>',

    // Object to extend the default component's toolbar button for the code, eg. `{ label: '</>', attributes: { title: 'Open custom code' } }`
    // Pass a falsy value to avoid adding the button
    toolbarBtnCustomCode: {},

    // Content to show when the custom code contains `<script>`
    placeholderScript: `<div style="pointer-events: none; padding: 10px;">
      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
        </svg>
      Custom code with <i>&lt;script&gt;</i> can't be rendered on the canvas
    </div>`,

    // Title for the custom code modal
    modalTitle: 'Insert your code',

    // Additional options for the code viewer, eg. `{ theme: 'hopscotch', readOnly: 0 }`
    codeViewOptions: {},

    // Label for the default save button
    buttonLabel: 'Save',

    // Object to extend the default custom code command.
    // Check the source to see all available methods
    commandCustomCode: {},
  },  ...opts };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add commands
  loadCommands(editor, options);
});
