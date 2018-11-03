'use strict';
import ElixirScript from './ElixirScript.Core.js';
function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('compatible_calendars?'), 2), new ElixirScript.Core.Tuple(Symbol.for('truncate'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [279961511270599366944038057694634032768])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/calendar.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(210), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(160), ElixirScript.Core.BitString.integer(51), ElixirScript.Core.BitString.integer(83), ElixirScript.Core.BitString.integer(213), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(222), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(240), ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(115), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(33), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(128))], [Symbol.for('module'), Symbol.for('Elixir.Calendar')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Calendar'),
    __info__
};
