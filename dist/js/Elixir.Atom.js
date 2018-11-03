'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('to_char_list'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_charlist'), 1), new ElixirScript.Core.Tuple(Symbol.for('to_string'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [181515064314540984167379431968138671998])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/atom.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(136), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(177), ElixirScript.Core.BitString.integer(201), ElixirScript.Core.BitString.integer(17), ElixirScript.Core.BitString.integer(114), ElixirScript.Core.BitString.integer(145), ElixirScript.Core.BitString.integer(55), ElixirScript.Core.BitString.integer(126))], [Symbol.for('module'), Symbol.for('Elixir.Atom')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Atom'),
    __info__
};
