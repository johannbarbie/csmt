'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('downcase'), 3), new ElixirScript.Core.Tuple(Symbol.for('titlecase_once'), 2), new ElixirScript.Core.Tuple(Symbol.for('upcase'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [339822687203807198112883014793887850929])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(167), ElixirScript.Core.BitString.integer(120), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(70), ElixirScript.Core.BitString.integer(149), ElixirScript.Core.BitString.integer(40), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(217), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(140), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(153), ElixirScript.Core.BitString.integer(161), ElixirScript.Core.BitString.integer(177))], [Symbol.for('module'), Symbol.for('Elixir.String.Casing')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Casing'),
    __info__
};
