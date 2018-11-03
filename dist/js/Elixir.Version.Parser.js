'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $String$ from './Elixir.String.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('lexer'), 2), new ElixirScript.Core.Tuple(Symbol.for('parse_requirement'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_version'), 1), new ElixirScript.Core.Tuple(Symbol.for('parse_version'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [404280311440518703391709561249838600])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/version.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(220), ElixirScript.Core.BitString.integer(142), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(76), ElixirScript.Core.BitString.integer(127), ElixirScript.Core.BitString.integer(63), ElixirScript.Core.BitString.integer(138), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(230), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(8))], [Symbol.for('module'), Symbol.for('Elixir.Version.Parser')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Version.Parser'),
    __info__
};
