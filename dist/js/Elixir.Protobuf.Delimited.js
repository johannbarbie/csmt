'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('decode'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [234778688986158497488891210511133014842])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/deps/exprotobuf/lib/exprotobuf/delimited.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(176), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(17), ElixirScript.Core.BitString.integer(236), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(91), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(242), ElixirScript.Core.BitString.integer(182), ElixirScript.Core.BitString.integer(168), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(109), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(58))], [Symbol.for('module'), Symbol.for('Elixir.Protobuf.Delimited')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Protobuf.Delimited'),
    __info__
};
