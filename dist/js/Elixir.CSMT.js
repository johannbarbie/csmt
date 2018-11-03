'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $List$ from './Elixir.List.js';

import $CSMT$Utils$ from './Elixir.CSMT.Utils.js';

import $CSMT$Trees$Tree$ from './Elixir.CSMT.Trees.Tree.js';

import $Base$ from './Elixir.Base.js';

import $Integer$ from './Elixir.Integer.js';

import $Enum$ from './Elixir.Enum.js';

import $CSMT$Nodes$Node$ from './Elixir.CSMT.Nodes.Node.js';

import $IO$ from './Elixir.IO.js';

import $RuntimeError$ from './Elixir.RuntimeError.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('audit_tree'), 1), new ElixirScript.Core.Tuple(Symbol.for('delete!'), 2), new ElixirScript.Core.Tuple(Symbol.for('get_with_inclusion_proof'), 2), new ElixirScript.Core.Tuple(Symbol.for('insert'), 3), new ElixirScript.Core.Tuple(Symbol.for('new'), 3), new ElixirScript.Core.Tuple(Symbol.for('verify_audit_proof'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [254504487480732297781213888397436885775])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/Users/johann/dev/csmt/lib/csmt.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(191), ElixirScript.Core.BitString.integer(119), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(6), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(158), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(87), ElixirScript.Core.BitString.integer(148), ElixirScript.Core.BitString.integer(229), ElixirScript.Core.BitString.integer(238), ElixirScript.Core.BitString.integer(221), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(155), ElixirScript.Core.BitString.integer(15))], [Symbol.for('module'), Symbol.for('Elixir.CSMT')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function audit_tree(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree')], __function_args__, (tree0) => {
            return true;
        })) !== null) {
            let [tree0] = __arg_matches__;

            const [root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('root'), $CSMT$Utils$.get_node(tree0, ElixirScript.Core.Functions.call_property(tree0, 'root')));

            return $List$.flatten(do_audit_tree(tree0, root0, []));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function check_for_leaf(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right'), ElixirScript.Core.Patterns.variable('k')], __function_args__, (left0, right0, k0) => {
            return true;
        })) !== null) {
            let [left0, right0, k0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303365180')], (x5764607523033651800) => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303365052')], (x5764607523033650520) => {
                    return x5764607523033650520;
                }, (x5764607523033650520) => {
                    return x5764607523033650520 === null || x5764607523033650520 === false;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(right0, 'key'), k0);
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(right0, 'size'), 1));
            }, (x5764607523033651800) => {
                return x5764607523033651800 === null || x5764607523033651800 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303365180')], (x5764607523033651800) => {
                return x5764607523033651800;
            }, (x5764607523033651800) => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303365148')], (x5764607523033651480) => {
                return x5764607523033651480;
            }, (x5764607523033651480) => {
                return x5764607523033651480 === null || x5764607523033651480 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(left0, 'key'), k0);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(left0, 'size'), 1)));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function delete__emark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree')
        }], [Symbol.for('root'), ElixirScript.Core.Patterns.variable('root')], [Symbol.for('size'), ElixirScript.Core.Patterns.variable('size')]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (root0, size0, tree0, k0) => {
            return true;
        })) !== null) {
            let [root0, size0, tree0, k0] = __arg_matches__;

            const [root1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('root'), $CSMT$Utils$.get_node(tree0, root0));

            const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), do_delete(tree0, root1, k0));

            $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root1, 'hash'))

            return ElixirScript.Core.maps.put(Symbol.for('size'), size0 - 1, ElixirScript.Core.maps.put(Symbol.for('root'), ElixirScript.Core.Functions.call_property(new_root0, 'hash'), tree0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function distance(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y')], __function_args__, (x0, y0) => {
            return true;
        })) !== null) {
            let [x0, y0] = __arg_matches__;

            const [x1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.erlang.element(1, $Integer$.parse($Base$.encode16(x0), 16)));

            const [y1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('y'), ElixirScript.Core.erlang.element(1, $Integer$.parse($Base$.encode16(y0), 16)));

            const [result0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('result'), ElixirScript.Core.erlang.bxor(x1, y1));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                const [result1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('result'), ElixirScript.Core.erlang.trunc(ElixirScript.Core.math.log2(result0)));

                return result1 + 1;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return -1;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(result0, 0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_audit_tree(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]]])), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (tree0, left0, right0, root0, acc0) => {
            return true;
        })) !== null) {
            let [tree0, left0, right0, root0, acc0] = __arg_matches__;

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $CSMT$Utils$.get_node(tree0, left0));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $CSMT$Utils$.get_node(tree0, right0));

            return ElixirScript.Core.erlang.list_concatenation([do_audit_tree(tree0, left1, ElixirScript.Core.Functions.concat('L', acc0))], [do_audit_tree(tree0, right1, ElixirScript.Core.Functions.concat('R', acc0))]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), []], [Symbol.for('metadata'), ElixirScript.Core.Patterns.variable('m')]])), ElixirScript.Core.Patterns.variable('acc')], __function_args__, (m0, leaf0, acc0) => {
            return true;
        })) !== null) {
            let [m0, leaf0, acc0] = __arg_matches__;

            return ElixirScript.Core.erlang.list_to_tuple($Enum$.reverse(ElixirScript.Core.Functions.concat(m0, acc0)));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_delete(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (tree0, left0, right0, root0, k0) => {
            return true;
        })) !== null) {
            let [tree0, left0, right0, root0, k0] = __arg_matches__;

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $CSMT$Utils$.get_node(tree0, left0));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $CSMT$Utils$.get_node(tree0, right0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303365372')], (x5764607523033653720) => {
                const [l_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('l_dist'), distance(k0, ElixirScript.Core.Functions.call_property(left1, 'key')));

                const [r_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('r_dist'), distance(k0, ElixirScript.Core.Functions.call_property(right1, 'key')));

                return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.equals(l_dist0, r_dist0), () => {
                    return ElixirScript.Core.erlang.error($RuntimeError$.exception('key does not exist'));
                }], [l_dist0 < r_dist0, () => {
                    const [left2] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), do_delete(tree0, left1, k0));

                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                    const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, left2, right1));

                    $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                    return new_root0;
                }], [l_dist0 > r_dist0, () => {
                    const [right2] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), do_delete(tree0, right1, k0));

                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                    const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, left1, right2));

                    $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                    return new_root0;
                }]);
            }, (x5764607523033653720) => {
                return x5764607523033653720 === null || x5764607523033653720 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(right1, 'hash'))

                    return left1;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(left1, 'hash'))

                    return right1;
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(left1, 'key'), k0));
            }, () => {
                return true;
            })).call(this, check_for_leaf(left1, right1, k0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), []], [Symbol.for('key'), ElixirScript.Core.Patterns.variable('key')]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (key0, leaf0, k0) => {
            return true;
        })) !== null) {
            let [key0, leaf0, k0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.error($RuntimeError$.exception('key does not exist'));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return $IO$.puts('found a key here');
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(key0, k0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_get_with_inclusion_proof(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), null, null, ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (tree0, left0, right0, root0, k0) => {
            return true;
        })) !== null) {
            let [tree0, left0, right0, root0, k0] = __arg_matches__;

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $CSMT$Utils$.get_node(tree0, left0));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $CSMT$Utils$.get_node(tree0, right0));

            const [l_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('l_dist'), distance(k0, ElixirScript.Core.Functions.call_property(left1, 'key')));

            const [r_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('r_dist'), distance(k0, ElixirScript.Core.Functions.call_property(right1, 'key')));

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.equals(l_dist0, r_dist0), () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                    return [ElixirScript.Core.Functions.call_property(right1, 'key'), Symbol.for('MINRS')];
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return [Symbol.for('MAXLS'), ElixirScript.Core.Functions.call_property(left1, 'key')];
                }, () => {
                    return true;
                })).call(this, k0 > ElixirScript.Core.Functions.call_property(root0, 'key'));
            }], [l_dist0 < r_dist0, () => {
                return do_get_with_inclusion_proof(tree0, right1, 'L', left1, k0);
            }], [l_dist0 > r_dist0, () => {
                return do_get_with_inclusion_proof(tree0, left1, 'R', right1, k0);
            }]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('sibling'), ElixirScript.Core.Patterns.variable('direction'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('hash'), ElixirScript.Core.Patterns.variable('salted_hash')], [Symbol.for('children'), []], [Symbol.for('metadata'), ElixirScript.Core.Patterns.variable('value')], [Symbol.for('key'), ElixirScript.Core.Patterns.variable('key')]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (tree0, sibling0, direction0, salted_hash0, value0, key0, leaf0, k0) => {
            return true;
        })) !== null) {
            let [tree0, sibling0, direction0, salted_hash0, value0, key0, leaf0, k0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return get_non_inclusion_proof(new ElixirScript.Core.Tuple(tree0, k0, key0, direction0, sibling0));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return [new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.call_property(sibling0, 'hash'), rev_dir(direction0)), new ElixirScript.Core.Tuple(value0, salted_hash0)];
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(key0, k0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('sibling'), ElixirScript.Core.Patterns.variable('direction'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (tree0, sibling0, direction0, left0, right0, root0, k0) => {
            return true;
        })) !== null) {
            let [tree0, sibling0, direction0, left0, right0, root0, k0] = __arg_matches__;

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $CSMT$Utils$.get_node(tree0, left0));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $CSMT$Utils$.get_node(tree0, right0));

            const [l_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('l_dist'), distance(k0, ElixirScript.Core.Functions.call_property(left1, 'key')));

            const [r_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('r_dist'), distance(k0, ElixirScript.Core.Functions.call_property(right1, 'key')));

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.equals(l_dist0, r_dist0), () => {
                return get_non_inclusion_proof(new ElixirScript.Core.Tuple(k0, ElixirScript.Core.Functions.call_property(root0, 'key'), direction0, sibling0));
            }], [l_dist0 < r_dist0, () => {
                const [result0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('result'), do_get_with_inclusion_proof(tree0, right1, 'L', left1, k0));

                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
                    }), ElixirScript.Core.Patterns.variable('_')), ElixirScript.Core.Patterns.variable('_')]
                })], () => {
                    return ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.call_property(sibling0, 'hash'), rev_dir(direction0)), result0);
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[ElixirScript.Core.Patterns.variable('key'), Symbol.for('MINRS')], 'L']
                })], (key0) => {
                    return [key0, min_in_subtree(tree0, sibling0)];
                }, (key0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[Symbol.for('MAXLS'), ElixirScript.Core.Patterns.variable('key')], 'R']
                })], (key0) => {
                    return [max_in_subtree(sibling0), key0];
                }, (key0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return result0;
                }, () => {
                    return true;
                })).call(this, new ElixirScript.Core.Tuple(result0, direction0));
            }], [l_dist0 > r_dist0, () => {
                const [result0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('result'), do_get_with_inclusion_proof(tree0, left1, 'R', right1, k0));

                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                        values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
                    }), ElixirScript.Core.Patterns.variable('_')), ElixirScript.Core.Patterns.variable('_')]
                })], () => {
                    return ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(ElixirScript.Core.Functions.call_property(sibling0, 'hash'), rev_dir(direction0)), result0);
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[ElixirScript.Core.Patterns.variable('key'), Symbol.for('MINRS')], 'L']
                })], (key0) => {
                    return [key0, min_in_subtree(tree0, sibling0)];
                }, (key0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [[Symbol.for('MAXLS'), ElixirScript.Core.Patterns.variable('key')], 'R']
                })], (key0) => {
                    return [max_in_subtree(sibling0), key0];
                }, (key0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                    return result0;
                }, () => {
                    return true;
                })).call(this, new ElixirScript.Core.Tuple(result0, direction0));
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_insert(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]]])), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')], __function_args__, (tree0, left0, right0, root0, k0, v0) => {
            return true;
        })) !== null) {
            let [tree0, left0, right0, root0, k0, v0] = __arg_matches__;

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $CSMT$Utils$.get_node(tree0, left0));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $CSMT$Utils$.get_node(tree0, right0));

            const [l_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('l_dist'), distance(k0, ElixirScript.Core.Functions.call_property(left1, 'key')));

            const [r_dist0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('r_dist'), distance(k0, ElixirScript.Core.Functions.call_property(right1, 'key')));

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.equals(l_dist0, r_dist0), () => {
                const [new_leaf0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_leaf'), $CSMT$Utils$.make_map_node(tree0, k0, v0));

                $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_leaf0, 'hash'), new_leaf0)

                const [min_key0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('min_key'), ElixirScript.Core.erlang.min(ElixirScript.Core.Functions.call_property(left1, 'key'), ElixirScript.Core.Functions.call_property(right1, 'key')));

                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                    const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, root0, new_leaf0));

                    $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                    return new_root0;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                    const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, new_leaf0, root0));

                    $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                    return new_root0;
                }, () => {
                    return true;
                })).call(this, k0 < min_key0);
            }], [l_dist0 < r_dist0, () => {
                const [left2] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), do_insert(tree0, left1, k0, v0));

                $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, left2, right1));

                $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                return new_root0;
            }], [l_dist0 > r_dist0, () => {
                const [right2] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), do_insert(tree0, right1, k0, v0));

                $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'))

                const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, left1, right2));

                $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                return new_root0;
            }]);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), []], [Symbol.for('metadata'), ElixirScript.Core.Patterns.variable('_')], [Symbol.for('key'), ElixirScript.Core.Patterns.variable('key')]])), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')], __function_args__, (tree0, key0, leaf0, k0, v0) => {
            return true;
        })) !== null) {
            let [tree0, key0, leaf0, k0, v0] = __arg_matches__;

            const [new_leaf0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_leaf'), $CSMT$Utils$.make_map_node(tree0, k0, v0));

            $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_leaf0, 'hash'), new_leaf0)

            return ElixirScript.Core.SpecialForms.cond([ElixirScript.Core.erlang.equals(k0, key0), () => {
                return ElixirScript.Core.erlang.error($RuntimeError$.exception('key exists'));
            }], [k0 > key0, () => {
                const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, leaf0, new_leaf0));

                $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                return new_root0;
            }], [k0 < key0, () => {
                const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), $CSMT$Utils$.make_map_node(tree0, new_leaf0, leaf0));

                $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(new_root0, 'hash'), new_root0)

                return new_root0;
            }]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function do_verify_audit_proof(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('leaf_hash'), [], ElixirScript.Core.Patterns.variable('_')], __function_args__, (leaf_hash0) => {
            return true;
        })) !== null) {
            let [leaf_hash0] = __arg_matches__;

            return leaf_hash0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('leaf_hash'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('hash'), ElixirScript.Core.Patterns.variable('direction')]
        }), ElixirScript.Core.Patterns.variable('t')), ElixirScript.Core.Patterns.variable('tree')], __function_args__, (leaf_hash0, hash0, direction0, t0, tree0) => {
            return true;
        })) !== null) {
            let [leaf_hash0, hash0, direction0, t0, tree0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause(['L'], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, $CSMT$Utils$.make_hash(tree0, hash0 + leaf_hash0), t0, tree0));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause(['R'], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, $CSMT$Utils$.make_hash(tree0, leaf_hash0 + hash0), t0, tree0));
            }, () => {
                return true;
            })).call(this, direction0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_non_inclusion_proof(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('key'), ElixirScript.Core.Patterns.variable('direction'), ElixirScript.Core.Patterns.variable('sibling')]
        })], __function_args__, (tree0, k0, key0, direction0, sibling0) => {
            return true;
        })) !== null) {
            let [tree0, k0, key0, direction0, sibling0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[true, 'L']], () => {
                return [key0, min_in_subtree(tree0, sibling0)];
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[true, 'R']], () => {
                return [key0, Symbol.for('MINRS')];
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[false, 'L']], () => {
                return [Symbol.for('MAXLS'), key0];
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[false, 'R']], () => {
                return [max_in_subtree(sibling0), key0];
            }, () => {
                return true;
            })).call(this, [k0 > key0, direction0]);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function get_with_inclusion_proof(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree')
        }], [Symbol.for('root'), ElixirScript.Core.Patterns.variable('root')]])), ElixirScript.Core.Patterns.variable('k')], __function_args__, (root0, tree0, k0) => {
            return true;
        })) !== null) {
            let [root0, tree0, k0] = __arg_matches__;

            const [root1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('root'), $CSMT$Utils$.get_node(tree0, root0));

            const [result0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('result'), do_get_with_inclusion_proof(tree0, null, null, root1, k0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
            }), ElixirScript.Core.Patterns.variable('_'))], () => {
                const [value0, hash0, proof0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('value'), ElixirScript.Core.Patterns.variable('hash')]
                }), ElixirScript.Core.Patterns.variable('proof')), $Enum$.reverse(result0));

                const _ref5440322 = [value0, hash0, proof0];

                return new Map([[Symbol.for('key'), k0], [Symbol.for('value'), value0], [Symbol.for('hash'), hash0], [Symbol.for('proof'), proof0]]);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[ElixirScript.Core.Patterns.variable('key'), Symbol.for('MINRS')]], (key0) => {
                return [get_with_inclusion_proof(tree0, key0), null];
            }, (key0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[Symbol.for('MAXLS'), ElixirScript.Core.Patterns.variable('key')]], (key0) => {
                return [null, get_with_inclusion_proof(tree0, key0)];
            }, (key0) => {
                return true;
            }), ElixirScript.Core.Patterns.clause([[ElixirScript.Core.Patterns.variable('key1'), ElixirScript.Core.Patterns.variable('key2')]], (key10, key20) => {
                return [get_with_inclusion_proof(tree0, key10), get_with_inclusion_proof(tree0, key20)];
            }, (key10, key20) => {
                return true;
            })).call(this, result0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function insert(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree')
        }], [Symbol.for('size'), 0]])), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')], __function_args__, (tree0, k0, v0) => {
            return true;
        })) !== null) {
            let [tree0, k0, v0] = __arg_matches__;

            const [root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('root'), $CSMT$Utils$.make_map_node(tree0, k0, v0));

            $CSMT$Utils$.set_node(tree0, ElixirScript.Core.Functions.call_property(root0, 'hash'), root0)

            return ElixirScript.Core.maps.put(Symbol.for('size'), 1, ElixirScript.Core.maps.put(Symbol.for('root'), ElixirScript.Core.Functions.call_property(root0, 'hash'), tree0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Trees.Tree')
        }], [Symbol.for('root'), ElixirScript.Core.Patterns.variable('root')], [Symbol.for('size'), ElixirScript.Core.Patterns.variable('size')]])), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('v')], __function_args__, (root0, size0, tree0, k0, v0) => {
            return true;
        })) !== null) {
            let [root0, size0, tree0, k0, v0] = __arg_matches__;

            const [root1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('root'), $CSMT$Utils$.get_node(tree0, root0));

            const [new_root0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('new_root'), do_insert(tree0, root1, k0, v0));

            ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return null;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return $CSMT$Utils$.delete_node(tree0, ElixirScript.Core.Functions.call_property(root1, 'hash'));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Functions.call_property(tree0, 'size') > 1)

            return ElixirScript.Core.maps.put(Symbol.for('size'), size0 + 1, ElixirScript.Core.maps.put(Symbol.for('root'), ElixirScript.Core.Functions.call_property(new_root0, 'hash'), tree0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function max_in_subtree(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('root')], __function_args__, (root0) => {
            return true;
        })) !== null) {
            let [root0] = __arg_matches__;

            return ElixirScript.Core.Functions.call_property(root0, 'key');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function min_in_subtree(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), [ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('_')]]])], __function_args__, (tree0, left0) => {
            return true;
        })) !== null) {
            let [tree0, left0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, tree0, $CSMT$Utils$.get_node(tree0, left0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.CSMT.Nodes.Node')
        }], [Symbol.for('children'), []], [Symbol.for('key'), ElixirScript.Core.Patterns.variable('key')]])], __function_args__, (key0) => {
            return true;
        })) !== null) {
            let [key0] = __arg_matches__;

            return key0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function __new__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree_name'), ElixirScript.Core.Patterns.variable('hash_function'), ElixirScript.Core.Patterns.variable('backend')], __function_args__, (tree_name0, hash_function0, backend0) => {
            return true;
        })) !== null) {
            let [tree_name0, hash_function0, backend0] = __arg_matches__;

            const [tree0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('tree'), $CSMT$Utils$.make_tree(tree_name0, hash_function0, backend0));

            const [tree1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('tree'), $CSMT$Utils$.get_backend_module(backend0).init_backend(tree0));

            return ElixirScript.Core.maps.put(Symbol.for('size'), 0, ElixirScript.Core.maps.put(Symbol.for('root'), $CSMT$Utils$.make_hash(tree1, new ElixirScript.Core.BitString()), tree1));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function rev_dir(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('dir')], __function_args__, (dir0) => {
            return true;
        })) !== null) {
            let [dir0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause(['L'], () => {
                return 'R';
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return 'L';
            }, () => {
                return true;
            })).call(this, dir0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function verify_audit_proof(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('tree'), ElixirScript.Core.Patterns.variable('proof')], __function_args__, (tree0, proof0) => {
            return true;
        })) !== null) {
            let [tree0, proof0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(ElixirScript.Core.Functions.call_property(tree0, 'root'), do_verify_audit_proof(ElixirScript.Core.Functions.call_property(proof0, 'hash'), ElixirScript.Core.Functions.call_property(proof0, 'proof'), tree0)));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    audit_tree,
    delete__emark__,
    get_with_inclusion_proof,
    insert,
    __new__,
    verify_audit_proof,
    __MODULE__: Symbol.for('Elixir.CSMT'),
    __info__
};
