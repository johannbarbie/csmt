'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('append'), 2), new ElixirScript.Core.Tuple(Symbol.for('delete_at'), 2), new ElixirScript.Core.Tuple(Symbol.for('duplicate'), 2), new ElixirScript.Core.Tuple(Symbol.for('insert_at'), 3), new ElixirScript.Core.Tuple(Symbol.for('to_list'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [137833261555204401311965558849621931744])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/tuple.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(177), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(23), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(24), ElixirScript.Core.BitString.integer(65), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(47), ElixirScript.Core.BitString.integer(8), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(224))], [Symbol.for('module'), Symbol.for('Elixir.Tuple')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Tuple'),
    __info__
};
