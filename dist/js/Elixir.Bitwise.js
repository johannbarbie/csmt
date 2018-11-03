'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), []], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('&&&'), 2), new ElixirScript.Core.Tuple(Symbol.for('<<<'), 2), new ElixirScript.Core.Tuple(Symbol.for('>>>'), 2), new ElixirScript.Core.Tuple(Symbol.for('^^^'), 2), new ElixirScript.Core.Tuple(Symbol.for('__using__'), 1), new ElixirScript.Core.Tuple(Symbol.for('band'), 2), new ElixirScript.Core.Tuple(Symbol.for('bnot'), 1), new ElixirScript.Core.Tuple(Symbol.for('bor'), 2), new ElixirScript.Core.Tuple(Symbol.for('bsl'), 2), new ElixirScript.Core.Tuple(Symbol.for('bsr'), 2), new ElixirScript.Core.Tuple(Symbol.for('bxor'), 2), new ElixirScript.Core.Tuple(Symbol.for('|||'), 2), new ElixirScript.Core.Tuple(Symbol.for('~~~'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [266677041315097167447578031096685325565])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/bitwise.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(67), ElixirScript.Core.BitString.integer(106), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(36), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(53), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(135), ElixirScript.Core.BitString.integer(143), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(253))], [Symbol.for('module'), Symbol.for('Elixir.Bitwise')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Bitwise'),
    __info__
};
