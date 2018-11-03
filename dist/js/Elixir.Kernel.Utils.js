'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Keyword$ from './Elixir.Keyword.js';

import $Macro$ from './Elixir.Macro.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $ArgumentError$ from './Elixir.ArgumentError.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

import $Module$ from './Elixir.Module.js';

import $Kernel$ from './Elixir.Kernel.js';

import $List$ from './Elixir.List.js';

import $Exception$ from './Elixir.Exception.js';

import $Enum$ from './Elixir.Enum.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

import $Collectable$ from './Elixir.Collectable.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('announce_struct'), 1), new ElixirScript.Core.Tuple(Symbol.for('defdelegate'), 2), new ElixirScript.Core.Tuple(Symbol.for('defguard'), 3), new ElixirScript.Core.Tuple(Symbol.for('defstruct'), 2), new ElixirScript.Core.Tuple(Symbol.for('destructure'), 2), new ElixirScript.Core.Tuple(Symbol.for('raise'), 1)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('defguard'), 2)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [237951761357405761477640622050981617517])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/kernel/utils.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(179), ElixirScript.Core.BitString.integer(3), ElixirScript.Core.BitString.integer(215), ElixirScript.Core.BitString.integer(157), ElixirScript.Core.BitString.integer(208), ElixirScript.Core.BitString.integer(58), ElixirScript.Core.BitString.integer(194), ElixirScript.Core.BitString.integer(0), ElixirScript.Core.BitString.integer(233), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(170), ElixirScript.Core.BitString.integer(123), ElixirScript.Core.BitString.integer(163), ElixirScript.Core.BitString.integer(254), ElixirScript.Core.BitString.integer(159), ElixirScript.Core.BitString.integer(109))], [Symbol.for('module'), Symbol.for('Elixir.Kernel.Utils')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function raise(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('msg')], __function_args__, (msg0) => {
            return ElixirScript.Core.erlang.is_binary(msg0);
        })) !== null) {
            let [msg0] = __arg_matches__;

            return $RuntimeError$.exception(msg0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('module')], __function_args__, (module0) => {
            return ElixirScript.Core.erlang.is_atom(module0);
        })) !== null) {
            let [module0] = __arg_matches__;

            return module0.exception([]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }], [Symbol.for('__exception__'), true]]))], __function_args__, (exception0) => {
            return true;
        })) !== null) {
            let [exception0] = __arg_matches__;

            return exception0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return $ArgumentError$.exception('raise/1 and reraise/2 expect a module name, string or exception ' + ('as the first argument, got: ' + $String$Chars$.to_string($Kernel$.inspect(other0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    raise,
    __MODULE__: Symbol.for('Elixir.Kernel.Utils'),
    __info__
};
