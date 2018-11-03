'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$ from './Elixir.List.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('tokenize'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [281793519321622330995801023575529281145])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/unicode/tokenizer.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(211), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(117), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(204), ElixirScript.Core.BitString.integer(172), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(186), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(214), ElixirScript.Core.BitString.integer(121))], [Symbol.for('module'), Symbol.for('Elixir.String.Tokenizer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Tokenizer'),
    __info__
};
