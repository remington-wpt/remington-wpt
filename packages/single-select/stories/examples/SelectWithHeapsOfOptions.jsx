import React from 'react';
import Select from '@atlaskit/single-select';

const selectItems = [
  {
    heading: 'Cities',
    items: [
      { content: 'ABAP', value: 'ABAP' },
      { content: 'ActionScript', value: 'ActionScript' },
      { content: 'Ada', value: 'Ada' },
      { content: 'Arduino', value: 'Arduino' },
      { content: 'Autoit', value: 'Autoit' },
      { content: 'C', value: 'C' },
      { content: 'C++', value: 'C++' },
      { content: 'CSS', value: 'CSS' },
      { content: 'CSharp', value: 'CSharp' },
      { content: 'CUDA', value: 'CUDA' },
      { content: 'Clojure', value: 'Clojure' },
      { content: 'CoffeeScript', value: 'CoffeeScript' },
      { content: 'D', value: 'D' },
      { content: 'Dart', value: 'Dart' },
      { content: 'Delphi', value: 'Delphi' },
      { content: 'Elixir', value: 'Elixir' },
      { content: 'Erlang', value: 'Erlang' },
      { content: 'Fortran', value: 'Fortran' },
      { content: 'FoxPro', value: 'FoxPro' },
      { content: 'Go', value: 'Go' },
      { content: 'Groovy', value: 'Groovy' },
      { content: 'Haskell', value: 'Haskell' },
      { content: 'Haxe', value: 'Haxe' },
      { content: 'Html', value: 'Html' },
      { content: 'Java', value: 'Java' },
      { content: 'JavaScript', value: 'JavaScript' },
      { content: 'Julia', value: 'Julia' },
      { content: 'Kotlin', value: 'Kotlin' },
      { content: 'LaTex', value: 'LaTex' },
      { content: 'LiveScript', value: 'LiveScript' },
      { content: 'Lua', value: 'Lua' },
      { content: 'MATLAB', value: 'MATLAB' },
      { content: 'Mathematica', value: 'Mathematica' },
      { content: 'OCaml', value: 'OCaml' },
      { content: 'ObjectPascal', value: 'ObjectPascal' },
      { content: 'Objective-C', value: 'Objective-C' },
      { content: 'Objective-J', value: 'Objective-J' },
      { content: 'Octave', value: 'Octave' },
      { content: 'PHP', value: 'PHP' },
      { content: 'Perl', value: 'Perl' },
      { content: 'PowerShell', value: 'PowerShell' },
      { content: 'Prolog', value: 'Prolog' },
      { content: 'Puppet', value: 'Puppet' },
      { content: 'Python', value: 'Python' },
      { content: 'QML', value: 'QML' },
      { content: 'R', value: 'R' },
      { content: 'Racket', value: 'Racket' },
      { content: 'Ruby', value: 'Ruby' },
      { content: 'Rust', value: 'Rust' },
      { content: 'SQL', value: 'SQL' },
      { content: 'Sass', value: 'Sass' },
      { content: 'Scala', value: 'Scala' },
      { content: 'Scheme', value: 'Scheme' },
      { content: 'Shell', value: 'Shell' },
      { content: 'Smalltalk', value: 'Smalltalk' },
      { content: 'StandardML', value: 'StandardML' },
      { content: 'Swift', value: 'Swift' },
      { content: 'Tcl', value: 'Tcl' },
      { content: 'TeX', value: 'TeX' },
      { content: 'TypeScript', value: 'TypeScript' },
      { content: 'VHDL', value: 'VHDL' },
      { content: 'Vala', value: 'Vala' },
      { content: 'VbNet', value: 'VbNet' },
      { content: 'Verilog', value: 'Verilog' },
      { content: 'XML', value: 'XML' },
      { content: 'XQuery', value: 'XQuery' },
      { content: 'reStructuredText', value: 'reStructuredText' },
    ],
  },
];

export default (
  <div style={{ width: '200px' }}>
    <Select
      items={selectItems}
      placeholder="Language"
      shouldFitContainer
    />
  </div>
);
