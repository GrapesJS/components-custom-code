import type grapesjs from 'grapesjs';
import loadComponents from './components';
import loadBlocks from './blocks';
import loadCommands from './commands';

export type PluginOptions = {
  /**
   * Object to extend the default custom code block. Pass a falsy value to avoid adding the block
   * @example
   * { label: 'Custom Code', category: 'Extra', ... }
   */
   blockCustomCode?: Partial<grapesjs.BlockOptions>;

  /**
   * Object to extend the default custom code properties.
   * @example
   * { name: 'Custom Code', droppable: false, ... }
   */
   propsCustomCode?: grapesjs.ComponentDefinition;

  /**
   * Object to extend the default component's toolbar button for the code. Pass a falsy value to avoid adding the button
   * @example
   * { label: '</>', attributes: { title: 'Open custom code' } }
   */
   toolbarBtnCustomCode?: Record<string, any>;

   /**
    * Content to show when the custom code contains `<script>`
    */
   placeholderScript?: string;

   /**
    * Title for the custom code modal
    * @default 'Insert your code'
    */
   modalTitle?: string;

   /**
    * Additional options for the code viewer.
    * @example
    * { theme: 'hopscotch', readOnly: 0 }
    */
   codeViewOptions?: Record<string, any>;

   /**
    * Label for the default save button
    * @default 'Save'
    */
    buttonLabel?: string;

    /**
     * Object to extend the default custom code command.
     */
    commandCustomCode?: Record<string, any>;
};

const plugin: grapesjs.Plugin<PluginOptions> = (editor, opts = {}) => {
  const options: PluginOptions = {
    blockCustomCode: {},
    propsCustomCode: {},
    toolbarBtnCustomCode: {},
    placeholderScript: `<div style="pointer-events: none; padding: 10px;">
      <svg viewBox="0 0 24 24" style="height: 30px; vertical-align: middle;">
        <path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"></path>
        </svg>
      Custom code with <i>&lt;script&gt;</i> can't be rendered on the canvas
    </div>`,
    modalTitle: 'Insert your code',
    codeViewOptions: {},
    buttonLabel: 'Save',
    commandCustomCode: {},
    ...opts
  };

  // Add components
  loadComponents(editor, options);

  // Add blocks
  loadBlocks(editor, options);

  // Add commands
  loadCommands(editor, options);
};

export default plugin;
