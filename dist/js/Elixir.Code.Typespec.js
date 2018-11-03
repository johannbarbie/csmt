'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Enum$ from './Elixir.Enum.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $String$ from './Elixir.String.js';

import $Collectable$ from './Elixir.Collectable.js';

import $List$ from './Elixir.List.js';

import $Access$ from './Elixir.Access.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Code$Typespec$ from './Elixir.Code.Typespec.js';

import $Kernel$ from './Elixir.Kernel.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('fetch_callbacks'), 1), new ElixirScript.Core.Tuple(Symbol.for('fetch_specs'), 1), new ElixirScript.Core.Tuple(Symbol.for('fetch_types'), 1), new ElixirScript.Core.Tuple(Symbol.for('spec_to_quoted'), 2), new ElixirScript.Core.Tuple(Symbol.for('type_to_quoted'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [75539139309967499645457072865685419535])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/code/typespec.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(56), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(79), ElixirScript.Core.BitString.integer(29), ElixirScript.Core.BitString.integer(13), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(14), ElixirScript.Core.BitString.integer(52), ElixirScript.Core.BitString.integer(57), ElixirScript.Core.BitString.integer(189), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(122), ElixirScript.Core.BitString.integer(54), ElixirScript.Core.BitString.integer(15))], [Symbol.for('module'), Symbol.for('Elixir.Code.Typespec')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Code.Typespec'),
    __info__
};
