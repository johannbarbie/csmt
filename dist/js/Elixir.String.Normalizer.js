'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $String$Unicode$ from './Elixir.String.Unicode.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('normalize'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [303240264784740840157632871612729301559])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/unicode/properties.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(228), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(243), ElixirScript.Core.BitString.integer(92), ElixirScript.Core.BitString.integer(112), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(60), ElixirScript.Core.BitString.integer(39), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(183), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(250), ElixirScript.Core.BitString.integer(124), ElixirScript.Core.BitString.integer(154), ElixirScript.Core.BitString.integer(55))], [Symbol.for('module'), Symbol.for('Elixir.String.Normalizer')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.String.Normalizer'),
    __info__
};
