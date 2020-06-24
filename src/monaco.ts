// Monaco Editor https://microsoft.github.io/monaco-editor/playground.html

import {
  editor,
  languages,
  Range,
  CancellationToken,
  Position,
  MarkerSeverity,
  IRange,
} from 'monaco-editor';


const text1 = [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
        ].join('\n');

const text2 = `
# ハロー
`

const editor1 = editor.create(document.getElementById('container1'), {
  // lineNumbers: "off",
	roundedSelection: false,
	scrollBeyondLastLine: false,
	readOnly: false,
	theme: "vs-dark",
});
const editor2 = editor.create(document.getElementById('container2'), {});
const session1 = editor.createModel(text1,"javascript");
const session2 = editor.createModel(text2,"javascript");
editor1.setModel(session1);
editor2.setModel(session2);

document.getElementById('mybutton').onclick = () => {
  alert(session1.getValue());
}

//         require.config({ 
//     paths: { 'vs': './node_modules/monaco-editor/min/vs' },
//     'vs/nls' : {
//         availableLanguages : {
//                 "*" : "ja"
//         }
//     }
// });

// require(['vs/editor/editor.main'], function() {
//     session = monaco.editor.createModel(text,"javascript");
//     editor1 = monaco.editor.create(document.getElementById('container1'), {});
//     editor2 = monaco.editor.create(document.getElementById('container2'), {});
//     editor1.setModel(session);
//     editor2.setModel(session);
// });