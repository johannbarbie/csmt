'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $CSMT$Nodes$Node$ from './Elixir.CSMT.Nodes.Node.js';

import $CSMT$Trees$Tree$ from './Elixir.CSMT.Trees.Tree.js';

import $Storage$ from './Elixir.Storage.js';

import $UUID$ from './Elixir.UUID.js';

import $Access$ from './Elixir.Access.js';

import $CSMT$Utils$ from './Elixir.CSMT.Utils.js';

import $Map$ from './Elixir.Map.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('closest_pow_2'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_node'), 1), new ElixirScript.Core.Tuple(Symbol.for('decode_tree'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete_node'), 2), new ElixirScript.Core.Tuple(Symbol.for('encode_node'), 1), new ElixirScript.Core.Tuple(Symbol.for('encode_tree'), 1), new ElixirScript.Core.Tuple(Symbol.for('generate_tree_id'), 0), new ElixirScript.Core.Tuple(Symbol.for('get_backend_module'), 1), new ElixirScript.Core.Tuple(Symbol.for('get_node'), 2), new ElixirScript.Core.Tuple(Symbol.for('make_hash'), 2), new ElixirScript.Core.Tuple(Symbol.for('make_map_node'), 3), new ElixirScript.Core.Tuple(Symbol.for('make_node'), 3), new ElixirScript.Core.Tuple(Symbol.for('make_node'), 5), new ElixirScript.Core.Tuple(Symbol.for('make_tree'), 3), new ElixirScript.Core.Tuple(Symbol.for('salt_node'), 2), new ElixirScript.Core.Tuple(Symbol.for('set_node'), 3), new ElixirScript.Core.Tuple(Symbol.for('tuple_list_to_map'), 1)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [249788549899643944925931579389078152080])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/utils.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(187), ElixirScript.Core.BitString.integer(235), ElixirScript.Core.BitString.integer(134), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(31), ElixirScript.Core.BitString.integer(255), ElixirScript.Core.BitString.integer(118), ElixirScript.Core.BitString.integer(203), ElixirScript.Core.BitString.integer(173), ElixirScript.Core.BitString.integer(202), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(227), ElixirScript.Core.BitString.integer(104), ElixirScript.Core.BitString.integer(35), ElixirScript.Core.BitString.integer(144))], [Symbol.for('module'), Symbol.for('Elixir.CSMT.Utils')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function decode_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('node')], __function_args__, (node0) => {
            return true;
        })) !== null) {
            let [node0] = __arg_matches__;

            return $CSMT$Nodes$Node$.decode(node0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function delete_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('key')], __function_args__, (tree0, key0) => {
            return true;
        })) !== null) {
            let [tree0, key0] = __arg_matches__;

            return $Storage$.delete_node(ElixirScript.Core.Functions.call_property(tree0, 'backend'), key0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function encode_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('node')], __function_args__, (node0) => {
            return true;
        })) !== null) {
            let [node0] = __arg_matches__;

            return $CSMT$Nodes$Node$.encode(node0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function generate_tree_id(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $UUID$.uuid4(Symbol.for('hex'));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_backend_module(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('backend')], __function_args__, (backend0) => {
            return true;
        })) !== null) {
            let [backend0] = __arg_matches__;

            const [backend1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('backend'), $CSMT$Utils$.tuple_list_to_map(backend0));

            return ElixirScript.Core.erlang.binary_to_existing_atom('Elixir.' + $Access$.get(backend1, 'module'), Symbol.for('utf8'));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('key')], __function_args__, (tree0, key0) => {
            return true;
        })) !== null) {
            let [tree0, key0] = __arg_matches__;

            return decode_node($Storage$.get_node(ElixirScript.Core.Functions.call_property(tree0, 'backend'), key0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function make_hash(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('data')], __function_args__, (tree0, data0) => {
            return true;
        })) !== null) {
            let [tree0, data0] = __arg_matches__;

            return crypto.hash(ElixirScript.Core.Functions.call_property(tree0, 'hashFunction'), data0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function make_map_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('treeId'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('hash'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('children'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('metadata'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('key'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('size'), ElixirScript.Core.Patterns.variable('_')]])), ElixirScript.Core.Patterns.variable('right')], __function_args__, (tree0, left0, right0) => {
            return true;
        })) !== null) {
            let [tree0, left0, right0] = __arg_matches__;

            return $CSMT$Nodes$Node$.__new__([new ElixirScript.Core.Tuple(Symbol.for('treeId'), ElixirScript.Core.Functions.call_property(tree0, 'treeId')), new ElixirScript.Core.Tuple(Symbol.for('hash'), $CSMT$Utils$.make_hash(tree0, ElixirScript.Core.Functions.call_property(left0, 'hash') + ElixirScript.Core.Functions.call_property(right0, 'hash'))), new ElixirScript.Core.Tuple(Symbol.for('children'), [ElixirScript.Core.Functions.call_property(left0, 'hash'), ElixirScript.Core.Functions.call_property(right0, 'hash')]), new ElixirScript.Core.Tuple(Symbol.for('size'), ElixirScript.Core.Functions.call_property(left0, 'size') + ElixirScript.Core.Functions.call_property(right0, 'size')), new ElixirScript.Core.Tuple(Symbol.for('key'), ElixirScript.Core.erlang.max(ElixirScript.Core.Functions.call_property(left0, 'key'), ElixirScript.Core.Functions.call_property(right0, 'key')))]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (tree0, key0, value0) => {
            return true;
        })) !== null) {
            let [tree0, key0, value0] = __arg_matches__;

            return $CSMT$Nodes$Node$.__new__([new ElixirScript.Core.Tuple(Symbol.for('treeId'), ElixirScript.Core.Functions.call_property(tree0, 'treeId')), new ElixirScript.Core.Tuple(Symbol.for('hash'), $CSMT$Utils$.make_hash(tree0, $CSMT$Utils$.salt_node(key0, value0))), new ElixirScript.Core.Tuple(Symbol.for('children'), []), new ElixirScript.Core.Tuple(Symbol.for('size'), 1), new ElixirScript.Core.Tuple(Symbol.for('metadata'), value0), new ElixirScript.Core.Tuple(Symbol.for('key'), key0)]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function make_tree(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree_name'), ElixirScript.Core.Patterns.variable('hash_function'), ElixirScript.Core.Patterns.variable('backend')], __function_args__, (tree_name0, hash_function0, backend0) => {
            return true;
        })) !== null) {
            let [tree_name0, hash_function0, backend0] = __arg_matches__;

            return $CSMT$Trees$Tree$.__new__([new ElixirScript.Core.Tuple(Symbol.for('treeId'), generate_tree_id()), new ElixirScript.Core.Tuple(Symbol.for('treeName'), tree_name0), new ElixirScript.Core.Tuple(Symbol.for('hashFunction'), hash_function0), new ElixirScript.Core.Tuple(Symbol.for('root'), null), new ElixirScript.Core.Tuple(Symbol.for('backend'), backend0)]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function salt_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')], __function_args__, (k0, v0) => {
            return true;
        })) !== null) {
            let [k0, v0] = __arg_matches__;

            return k0 + v0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function set_node(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('value')], __function_args__, (tree0, key0, value0) => {
            return true;
        })) !== null) {
            let [tree0, key0, value0] = __arg_matches__;

            return $Storage$.set_node(ElixirScript.Core.Functions.call_property(tree0, 'backend'), key0, encode_node(value0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function tuple_list_to_map(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tpl')], __function_args__, (tpl0) => {
            return true;
        })) !== null) {
            let [tpl0] = __arg_matches__;

            return $Map$.__new__(tpl0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    decode_node,
    delete_node,
    encode_node,
    generate_tree_id,
    get_backend_module,
    get_node,
    make_hash,
    make_map_node,
    make_tree,
    salt_node,
    set_node,
    tuple_list_to_map,
    __MODULE__: Symbol.for('Elixir.CSMT.Utils'),
    __info__
};
