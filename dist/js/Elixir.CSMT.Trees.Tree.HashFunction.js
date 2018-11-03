'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('atom'), 1), new ElixirScript.Core.Tuple(Symbol.for('atoms'), 0), new ElixirScript.Core.Tuple(Symbol.for('value'), 1), new ElixirScript.Core.Tuple(Symbol.for('values'), 0)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [265503891280416369641371541909624584243])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/protos/tree.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(128), ElixirScript.Core.BitString.integer(62), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(162), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(28), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(51))], [Symbol.for('module'), Symbol.for('Elixir.CSMT.Trees.Tree.HashFunction')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree.HashFunction'),
    __info__
};
