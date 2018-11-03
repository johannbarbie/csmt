'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CSMT$Utils$ from './Elixir.CSMT.Utils.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('delete_node'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_node'), 2), new ElixirScript.Core.Tuple(Symbol.for('set_node'), 3)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [329339147091743779658621868665847699555])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/storage/storage.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(247), ElixirScript.Core.BitString.integer(196), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(155), ElixirScript.Core.BitString.integer(49), ElixirScript.Core.BitString.integer(48), ElixirScript.Core.BitString.integer(77), ElixirScript.Core.BitString.integer(116), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(156), ElixirScript.Core.BitString.integer(167), ElixirScript.Core.BitString.integer(199), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(180), ElixirScript.Core.BitString.integer(88), ElixirScript.Core.BitString.integer(99))], [Symbol.for('module'), Symbol.for('Elixir.Storage')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function delete_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('backend'), ElixirScript.Core.Patterns.variable('key')], __function_args__, (backend0, key0) => {
            return true;
        })) !== null) {
            let [backend0, key0] = __arg_matches__;

            const [backend_module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('backend_module'), $CSMT$Utils$.get_backend_module(backend0));

            return backend_module0.delete_node(backend0, key0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('backend'), ElixirScript.Core.Patterns.variable('key')], __function_args__, (backend0, key0) => {
            return true;
        })) !== null) {
            let [backend0, key0] = __arg_matches__;

            const [backend_module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('backend_module'), $CSMT$Utils$.get_backend_module(backend0));

            return backend_module0.get_node(backend0, key0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function set_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('backend'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (backend0, key0, value0) => {
            return true;
        })) !== null) {
            let [backend0, key0, value0] = __arg_matches__;

            const [backend_module0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('backend_module'), $CSMT$Utils$.get_backend_module(backend0));

            return backend_module0.set_node(backend0, key0, value0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    delete_node,
    get_node,
    set_node,
    __MODULE__: Symbol.for('Elixir.Storage'),
    __info__
};
