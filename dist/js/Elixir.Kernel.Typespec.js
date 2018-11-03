'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Code$Typespec$ from './Elixir.Code.Typespec.js';

import $Code$ from './Elixir.Code.js';

import $Collectable$ from './Elixir.Collectable.js';

import $CompileError$ from './Elixir.CompileError.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Enum$ from './Elixir.Enum.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Macro$ from './Elixir.Macro.js';

import $List$ from './Elixir.List.js';

import $Macro$Env$ from './Elixir.Macro.Env.js';

import $Exception$ from './Elixir.Exception.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Module$ from './Elixir.Module.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('beam_callbacks'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_specs'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_typedocs'), 1), new ElixirScript.Core.Tuple(Symbol.for('beam_types'), 1), new ElixirScript.Core.Tuple(Symbol.for('defines_type?'), 2), new ElixirScript.Core.Tuple(Symbol.for('deftypespec'), 6), new ElixirScript.Core.Tuple(Symbol.for('spec_to_ast'), 2), new ElixirScript.Core.Tuple(Symbol.for('spec_to_callback'), 2), new ElixirScript.Core.Tuple(Symbol.for('translate_typespecs_for_module'), 2), new ElixirScript.Core.Tuple(Symbol.for('type_to_ast'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [282561873722607851742358100989919942706])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/kernel/typespec.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(147), ElixirScript.Core.BitString.integer(111), ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(197), ElixirScript.Core.BitString.integer(174), ElixirScript.Core.BitString.integer(4), ElixirScript.Core.BitString.integer(94), ElixirScript.Core.BitString.integer(218), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(16), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(130), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(216), ElixirScript.Core.BitString.integer(50))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.Typespec')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

export default {
    __MODULE__: Symbol.for('Elixir.Kernel.Typespec'),
    __info__
};
