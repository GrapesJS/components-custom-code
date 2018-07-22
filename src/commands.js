import {
  commandCustomCode,
  keyCustomCode,
} from './config';

export default (editor, opts = {}) => {
  const cmd = editor.Commands;
  const { modalTitle, codeViewOptions } = opts;

  cmd.add(commandCustomCode, {
    run(editor, sender, opts = {}) {
      this.editor = editor;
      this.options = opts;
      this.target = opts.target || editor.getSelected();
      const target = this.target;

      if (target && target.get('editable')) {
        const title = opts.title || modalTitle;
        const content = this.getContent();
        const code = target.get(keyCustomCode) || '';
        editor.Modal.open({ title, content });
        this.getCodeViewer().setContent(code);
      }
    },

    stop(editor) {
      editor.Modal.close();
    },

    getContent() {
      const { options, editor, target } = this;
      const content = document.createElement('div');
      const codeViewer = this.getCodeViewer();
      content.appendChild(codeViewer.getElement());

      const btn = document.createElement('button');
      const pfx = options.pfx || editor.getConfig('stylePrefix');
      content.appendChild(btn);
      btn.innerHTML = options.labelBtn || 'Save';
      btn.className = `${pfx}btn-prim ${pfx}btn-import__custom-code`;
      btn.onclick = () => {
        const code = codeViewer.getContent();
        target.set(keyCustomCode, code);
        editor.Modal.close();
      };

      return content;
    },

    getCodeViewer() {
      const { editor } = this;

      if (!this.codeViewer) {
        this.codeViewer = editor.CodeManager.createViewer({
          codeName: 'htmlmixed',
          theme: 'hopscotch',
          readOnly: 0,
          ...codeViewOptions,
        });
      }

      return this.codeViewer;
    }
  });
};
