import type grapesjs from 'grapesjs';
import { PluginOptions } from '.';
import { keyCustomCode, commandNameCustomCode, typeCustomCode } from './utils';

export default (editor: grapesjs.Editor, opts: PluginOptions = {}) => {
  const { Components } = editor;
  const { toolbarBtnCustomCode } = opts;
  let timedInterval: NodeJS.Timeout;

  Components.addType('script', {
    view: {
      onRender() {
        // @ts-ignore
        const { model, el } = this;
        const isCC = model.closestType(typeCustomCode);
        isCC && (el.innerHTML = '');
      }
    },
  });

  Components.addType(typeCustomCode, {
    model: {
      defaults: {
        name: 'Custom Code',
        editable: true,
        components: {
          tagName: 'span',
          components: { type: 'textnode', content: 'Insert here your custom code' }
        },
        ...opts.propsCustomCode,
      },

      /**
       * Initilize the component
       */
      init() {
        // @ts-ignore
        this.on(`change:${keyCustomCode}`, this.onCustomCodeChange);
        const initialCode = this.get(keyCustomCode);
        !this.components().length && this.components(initialCode);
        const toolbar = this.get('toolbar');
        const id = 'custom-code';

        // Add the custom code toolbar button if requested and it's not already in
        // @ts-ignore
        if (toolbarBtnCustomCode && !toolbar.filter(tlb => tlb.id === id ).length) {
          // @ts-ignore
          toolbar.unshift({
            id,
            command: commandNameCustomCode,
            label: `<svg viewBox="0 0 24 24">
              <path d="M14.6 16.6l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4m-5.2 0L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4z"></path>
            </svg>`,
            ...toolbarBtnCustomCode
          });
        }
      },

      /**
       * Callback to launch on keyCustomCode change
       */
      // @ts-ignore
      onCustomCodeChange() {
        // @ts-ignore
        this.components(this.get(keyCustomCode));
      },
    },

    view: {
      events: {
        dblclick: 'onActive',
      },

      init() {
        // @ts-ignore
        this.listenTo(this.model.components(), 'add remove reset', this.onComponentsChange);
        // @ts-ignore
        this.onComponentsChange();
      },

      /**
       * Things to do once inner components of custom code are changed
       */
      // @ts-ignore
      onComponentsChange() {
        timedInterval && clearInterval(timedInterval);
        timedInterval = setTimeout(() => {
          // @ts-ignore
          const { model, el } = this;
          const content = model.get(keyCustomCode) || '';
          let droppable = true;

          // Avoid rendering codes with scripts
          if (content.indexOf('<script') >= 0 && opts.placeholderScript) {
            el.innerHTML = opts.placeholderScript;
            droppable = false;
          }

          model.set({ droppable });
        }, 0);
      },

      onActive() {
        // @ts-ignore
        const { model, em } = this;
        em.get('Commands').run(commandNameCustomCode, { target: model });
      },
    },
  });
}
