'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Keyword$ from './Elixir.Keyword.js';

import $Map$ from './Elixir.Map.js';

import $Enumerable$ from './Elixir.Enumerable.js';

import $Kernel$ from './Elixir.Kernel.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('delete'), 2), new ElixirScript.Core.Tuple(Symbol.for('drop'), 2), new ElixirScript.Core.Tuple(Symbol.for('empty'), 1), new ElixirScript.Core.Tuple(Symbol.for('equal?'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch'), 2), new ElixirScript.Core.Tuple(Symbol.for('fetch!'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 2), new ElixirScript.Core.Tuple(Symbol.for('get'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_and_update'), 3), new ElixirScript.Core.Tuple(Symbol.for('get_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('has_key?'), 2), new ElixirScript.Core.Tuple(Symbol.for('keys'), 1), new ElixirScript.Core.Tuple(Symbol.for('merge'), 2), new ElixirScript.Core.Tuple(Symbol.for('merge'), 3), new ElixirScript.Core.Tuple(Symbol.for('pop'), 2), new ElixirScript.Core.Tuple(Symbol.for('pop'), 3), new ElixirScript.Core.Tuple(Symbol.for('pop_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('put'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new'), 3), new ElixirScript.Core.Tuple(Symbol.for('put_new_lazy'), 3), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('split'), 2), new ElixirScript.Core.Tuple(Symbol.for('take'), 2), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('update'), 4), new ElixirScript.Core.Tuple(Symbol.for('update!'), 3), new ElixirScript.Core.Tuple(Symbol.for('values'), 1)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('__using__'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [118009283978661934046557820513761786188])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/dict.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(198), ElixirScript.Core.BitString.integer(2), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(90), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(234), ElixirScript.Core.BitString.integer(121), ElixirScript.Core.BitString.integer(76))], [Symbol.for('module'), Symbol.for('Elixir.Dict')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Dict'),
    __info__
};
