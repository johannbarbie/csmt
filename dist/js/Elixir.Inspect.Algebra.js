'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $IO$ANSI$ from './Elixir.IO.ANSI.js';

import $Keyword$ from './Elixir.Keyword.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

import $String$ from './Elixir.String.js';

import $Inspect$ from './Elixir.Inspect.js';

import $Process$ from './Elixir.Process.js';

import $Inspect$Map$ from './Elixir.Inspect.Map.js';

import $Kernel$Utils$ from './Elixir.Kernel.Utils.js';

import $Inspect$Error$ from './Elixir.Inspect.Error.js';

import $String$Chars$ from './Elixir.String.Chars.js';

import $Exception$ from './Elixir.Exception.js';

import $Kernel$ from './Elixir.Kernel.js';

import $Enum$ from './Elixir.Enum.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('break'), 0), new ElixirScript.Core.Tuple(Symbol.for('break'), 1), new ElixirScript.Core.Tuple(Symbol.for('collapse_lines'), 1), new ElixirScript.Core.Tuple(Symbol.for('color'), 3), new ElixirScript.Core.Tuple(Symbol.for('concat'), 1), new ElixirScript.Core.Tuple(Symbol.for('concat'), 2), new ElixirScript.Core.Tuple(Symbol.for('container_doc'), 5), new ElixirScript.Core.Tuple(Symbol.for('container_doc'), 6), new ElixirScript.Core.Tuple(Symbol.for('empty'), 0), new ElixirScript.Core.Tuple(Symbol.for('flex_break'), 0), new ElixirScript.Core.Tuple(Symbol.for('flex_break'), 1), new ElixirScript.Core.Tuple(Symbol.for('flex_glue'), 2), new ElixirScript.Core.Tuple(Symbol.for('flex_glue'), 3), new ElixirScript.Core.Tuple(Symbol.for('fold_doc'), 2), new ElixirScript.Core.Tuple(Symbol.for('force_unfit'), 1), new ElixirScript.Core.Tuple(Symbol.for('format'), 2), new ElixirScript.Core.Tuple(Symbol.for('glue'), 2), new ElixirScript.Core.Tuple(Symbol.for('glue'), 3), new ElixirScript.Core.Tuple(Symbol.for('group'), 1), new ElixirScript.Core.Tuple(Symbol.for('group'), 2), new ElixirScript.Core.Tuple(Symbol.for('line'), 0), new ElixirScript.Core.Tuple(Symbol.for('line'), 2), new ElixirScript.Core.Tuple(Symbol.for('nest'), 2), new ElixirScript.Core.Tuple(Symbol.for('nest'), 3), new ElixirScript.Core.Tuple(Symbol.for('next_break_fits'), 1), new ElixirScript.Core.Tuple(Symbol.for('next_break_fits'), 2), new ElixirScript.Core.Tuple(Symbol.for('space'), 2), new ElixirScript.Core.Tuple(Symbol.for('string'), 1), new ElixirScript.Core.Tuple(Symbol.for('surround'), 3), new ElixirScript.Core.Tuple(Symbol.for('surround_many'), 5), new ElixirScript.Core.Tuple(Symbol.for('surround_many'), 6), new ElixirScript.Core.Tuple(Symbol.for('to_doc'), 2)]], [Symbol.for('macros'), [new ElixirScript.Core.Tuple(Symbol.for('is_doc'), 1)]], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [40401113031129768012132051477707446718])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect/algebra.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(30), ElixirScript.Core.BitString.integer(100), ElixirScript.Core.BitString.integer(248), ElixirScript.Core.BitString.integer(169), ElixirScript.Core.BitString.integer(144), ElixirScript.Core.BitString.integer(18), ElixirScript.Core.BitString.integer(7), ElixirScript.Core.BitString.integer(184), ElixirScript.Core.BitString.integer(103), ElixirScript.Core.BitString.integer(41), ElixirScript.Core.BitString.integer(74), ElixirScript.Core.BitString.integer(212), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(129), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(190))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.Algebra')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function ansi(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('color')], __function_args__, (color0) => {
            return true;
        })) !== null) {
            let [color0] = __arg_matches__;

            return $IO$ANSI$.format_fragment(color0, true);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function apply_nesting(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('k'), Symbol.for('cursor')], __function_args__, (k0) => {
            return true;
        })) !== null) {
            let [k0] = __arg_matches__;

            return k0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('reset')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return 0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('j')], __function_args__, (i0, j0) => {
            return true;
        })) !== null) {
            let [i0, j0] = __arg_matches__;

            return i0 + j0;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function __break__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('string')], __function_args__, (string0) => {
            return ElixirScript.Core.erlang.is_binary(string0);
        })) !== null) {
            let [string0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_break'), string0, Symbol.for('strict'));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function collapse(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.binary('\n'), ElixirScript.Core.BitString.binary({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('t')), ElixirScript.Core.Patterns.variable('max'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('i')], __function_args__, (_0, t0, max0, count0, i0) => {
            return true;
        })) !== null) {
            let [_0, t0, max0, count0, i0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, max0, count0 + 1, i0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail('', ElixirScript.Core.Patterns.variable('t')), ElixirScript.Core.Patterns.variable('max'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('i')], __function_args__, (t0, max0, count0, i0) => {
            return true;
        })) !== null) {
            let [t0, max0, count0, i0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, t0, max0, count0, i0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('t'), ElixirScript.Core.Patterns.variable('max'), ElixirScript.Core.Patterns.variable('count'), ElixirScript.Core.Patterns.variable('i')], __function_args__, (t0, max0, count0, i0) => {
            return true;
        })) !== null) {
            let [t0, max0, count0, i0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(ElixirScript.Core.binary.copy('\n', ElixirScript.Core.erlang.min(max0, count0)) + ElixirScript.Core.binary.copy(' ', i0), t0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function color(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('color_key'), new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Inspect.Opts')
        }], [Symbol.for('syntax_colors'), ElixirScript.Core.Patterns.variable('syntax_colors')]])], __function_args__, (doc0, color_key0, syntax_colors0) => {
            return ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))));
        })) !== null) {
            let [doc0, color_key0, syntax_colors0] = __arg_matches__;

            const [precolor0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('precolor'), $Keyword$.get(syntax_colors0, color_key0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303297438')], (x5764607523032974380) => {
                return doc0;
            }, (x5764607523032974380) => {
                return x5764607523032974380 === null || x5764607523032974380 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                const [postcolor0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('postcolor'), $Keyword$.get(syntax_colors0, Symbol.for('reset'), Symbol.for('reset')));

                return concat(new ElixirScript.Core.Tuple(Symbol.for('doc_color'), doc0, precolor0), new ElixirScript.Core.Tuple(Symbol.for('doc_color'), empty(), postcolor0));
            }, () => {
                return true;
            })).call(this, precolor0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function concat(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('docs')], __function_args__, (docs0) => {
            return ElixirScript.Core.erlang.is_list(docs0);
        })) !== null) {
            let [docs0] = __arg_matches__;

            return fold_doc(docs0, concat);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc1'), ElixirScript.Core.Patterns.variable('doc2')], __function_args__, (doc10, doc20) => {
            return (ElixirScript.Core.erlang.is_binary(doc10) || (doc10 === Symbol.for('doc_line') || doc10 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc10) && (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc10) === Symbol.for('doc_string')))))))))) && (ElixirScript.Core.erlang.is_binary(doc20) || (doc20 === Symbol.for('doc_line') || doc20 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc20) && (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc20) === Symbol.for('doc_string'))))))))));
        })) !== null) {
            let [doc10, doc20] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_cons'), doc10, doc20);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function container_doc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('collection'), ElixirScript.Core.Patterns.variable('right'), ElixirScript.Core.Patterns.variable('inspect'), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (left0, collection0, right0, inspect0, fun0, opts0) => {
            return (ElixirScript.Core.erlang.is_binary(left0) || (left0 === Symbol.for('doc_line') || left0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(left0) && (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, left0) === Symbol.for('doc_string')))))))))) && ElixirScript.Core.erlang.is_list(collection0) && (ElixirScript.Core.erlang.is_binary(right0) || (right0 === Symbol.for('doc_line') || right0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(right0) && (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, right0) === Symbol.for('doc_string')))))))))) && ElixirScript.Core.erlang.is_function(fun0, 2) && ElixirScript.Core.erlang.is_list(opts0);
        })) !== null) {
            let [left0, collection0, right0, inspect0, fun0, opts0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([[]], () => {
                return concat(left0, right0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                const [__break__0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('break'), $Keyword$.get(opts0, Symbol.for('break'), Symbol.for('maybe')));

                const [separator0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('separator'), $Keyword$.get(opts0, Symbol.for('separator'), ','));

                const [docs0, simple__qmark__0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('docs'), ElixirScript.Core.Patterns.variable('simple?')]
                }), container_each(collection0, ElixirScript.Core.Functions.call_property(inspect0, 'limit'), inspect0, fun0, [], ElixirScript.Core.erlang.equals(__break__0, Symbol.for('maybe'))));

                const _ref2818986 = new ElixirScript.Core.Tuple(docs0, simple__qmark__0);

                const [flex__qmark__0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('flex?'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return ElixirScript.Core.erlang.equals(__break__0, Symbol.for('flex'));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return true;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303298302')], (other5764607523032983020) => {
                    return ElixirScript.Core.erlang.error(new ElixirScript.Core.Tuple(Symbol.for('badbool'), Symbol.for('or'), other5764607523032983020));
                }, (other5764607523032983020) => {
                    return true;
                })).call(this, simple__qmark__0));

                const [docs1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('docs'), fold_doc(docs0, (...__function_args__) => {
                    function recur(...__function_args__) {
                        let __arg_matches__ = null;

                        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x1'), ElixirScript.Core.Patterns.variable('x2')], __function_args__, (x10, x20) => {
                            return true;
                        })) !== null) {
                            let [x10, x20] = __arg_matches__;

                            return join(x10, x20, flex__qmark__0, separator0);
                        }

                        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
                    }

                    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
                }));

                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([true], () => {
                    return group(concat(concat(left0, nest(docs1, 1)), right0));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([false], () => {
                    return group(glue(nest(glue(left0, '', docs1), 2), '', right0));
                }, () => {
                    return true;
                })).call(this, flex__qmark__0);
            }, () => {
                return true;
            })).call(this, collection0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function container_each(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_limit'), ElixirScript.Core.Patterns.variable('_opts'), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('simple?')], __function_args__, (_limit0, _opts0, _fun0, acc0, simple__qmark__0) => {
            return true;
        })) !== null) {
            let [_limit0, _opts0, _fun0, acc0, simple__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(ElixirScript.Core.lists.reverse(acc0), simple__qmark__0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), 0, ElixirScript.Core.Patterns.variable('_opts'), ElixirScript.Core.Patterns.variable('_fun'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('simple?')], __function_args__, (_opts0, _fun0, acc0, simple__qmark__0) => {
            return true;
        })) !== null) {
            let [_opts0, _fun0, acc0, simple__qmark__0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(ElixirScript.Core.lists.reverse(ElixirScript.Core.Functions.concat('...', acc0)), simple__qmark__0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('terms')), ElixirScript.Core.Patterns.variable('limit'), ElixirScript.Core.Patterns.variable('opts'), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('simple?')], __function_args__, (term0, terms0, limit0, opts0, fun0, acc0, simple__qmark__0) => {
            return ElixirScript.Core.erlang.is_list(terms0);
        })) !== null) {
            let [term0, terms0, limit0, opts0, fun0, acc0, simple__qmark__0] = __arg_matches__;

            const [limit1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('limit'), decrement(limit0));

            const [doc0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('doc'), fun0(term0, new Map([...opts0, [Symbol.for('limit'), limit1]])));

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, terms0, limit1, opts0, fun0, ElixirScript.Core.Functions.concat(doc0, acc0), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return simple__qmark__(doc0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303298270')], (other5764607523032982700) => {
                return ElixirScript.Core.erlang.error(new ElixirScript.Core.Tuple(Symbol.for('badbool'), Symbol.for('and'), other5764607523032982700));
            }, (other5764607523032982700) => {
                return true;
            })).call(this, simple__qmark__0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')), ElixirScript.Core.Patterns.variable('limit'), ElixirScript.Core.Patterns.variable('opts'), ElixirScript.Core.Patterns.variable('fun'), ElixirScript.Core.Patterns.variable('acc'), ElixirScript.Core.Patterns.variable('simple?')], __function_args__, (left0, right0, limit0, opts0, fun0, acc0, simple__qmark__0) => {
            return true;
        })) !== null) {
            let [left0, right0, limit0, opts0, fun0, acc0, simple__qmark__0] = __arg_matches__;

            const [limit1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('limit'), decrement(limit0));

            const [left1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), fun0(left0, new Map([...opts0, [Symbol.for('limit'), limit1]])));

            const [right1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), fun0(right0, new Map([...opts0, [Symbol.for('limit'), limit1]])));

            const [simple__qmark__1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('simple?'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return simple__qmark__(right1);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303298238')], (other5764607523032982380) => {
                return ElixirScript.Core.erlang.error(new ElixirScript.Core.Tuple(Symbol.for('badbool'), Symbol.for('and'), other5764607523032982380));
            }, (other5764607523032982380) => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return simple__qmark__(left1);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303298206')], (other5764607523032982060) => {
                return ElixirScript.Core.erlang.error(new ElixirScript.Core.Tuple(Symbol.for('badbool'), Symbol.for('and'), other5764607523032982060));
            }, (other5764607523032982060) => {
                return true;
            })).call(this, simple__qmark__0)));

            const [doc0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('doc'), join(left1, right1, simple__qmark__1, ' |'));

            return new ElixirScript.Core.Tuple(ElixirScript.Core.lists.reverse(ElixirScript.Core.Functions.concat(doc0, acc0)), simple__qmark__1);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function decrement(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('infinity')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('infinity');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('counter')], __function_args__, (counter0) => {
            return true;
        })) !== null) {
            let [counter0] = __arg_matches__;

            return counter0 - 1;
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function empty(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('doc_nil');
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function fits__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (w0, k0, b__qmark__0) => {
            return k0 > w0 && b__qmark__0;
        })) !== null) {
            let [w0, k0, b__qmark__0] = __arg_matches__;

            return false;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), []], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('tail'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.variable('t')]
        })], __function_args__, (w0, k0, b__qmark__0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_fits'), ElixirScript.Core.Patterns.variable('x'), Symbol.for('disabled')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('flat_no_break'), x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), Symbol.for('flat_no_break'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_fits'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('flat_no_break'), x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_fits'), ElixirScript.Core.Patterns.variable('x'), Symbol.for('enabled')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('break_no_flat'), x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), Symbol.for('break_no_flat'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_force'), ElixirScript.Core.Patterns.variable('x')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('break_no_flat'), x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), Symbol.for('break_no_flat'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_break'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('_'))], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), Symbol.for('break_no_flat'), Symbol.for('doc_line')]
        }), ElixirScript.Core.Patterns.variable('_'))], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), Symbol.for('break'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_break'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('_'))], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), Symbol.for('break'), Symbol.for('doc_line')]
        }), ElixirScript.Core.Patterns.variable('_'))], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), Symbol.for('break'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_group'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('flat'), x0), new ElixirScript.Core.Tuple(Symbol.for('tail'), b__qmark__0, t0))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('doc_line')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, i0, t0) => {
            return true;
        })) !== null) {
            let [w0, i0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, i0, false, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('doc_nil')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_collapse'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, b__qmark__0, i0, t0) => {
            return true;
        })) !== null) {
            let [w0, b__qmark__0, i0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, i0, b__qmark__0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_color'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, m0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, m0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_string'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('l')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, l0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, l0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0 + l0, b__qmark__0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('s')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, s0, t0) => {
            return ElixirScript.Core.erlang.is_binary(s0);
        })) !== null) {
            let [w0, k0, b__qmark__0, s0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0 + ElixirScript.Core.erlang.byte_size(s0), b__qmark__0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_force'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('_'))], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return false;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_break'), ElixirScript.Core.Patterns.variable('s'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, s0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, s0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0 + ElixirScript.Core.erlang.byte_size(s0), true, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_nest'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('break')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, m0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, m0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_nest'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('j'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, m0, x0, j0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, m0, x0, j0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(apply_nesting(i0, k0, j0), m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_cons'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, m0, x0, y0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, m0, x0, y0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, [new ElixirScript.Core.Tuple(i0, m0, x0), ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, y0), t0)]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.variable('b?'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_group'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, b__qmark__0, i0, m0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, b__qmark__0, i0, m0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, b__qmark__0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), new ElixirScript.Core.Tuple(Symbol.for('tail'), b__qmark__0, t0))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function flex_break(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('string')], __function_args__, (string0) => {
            return ElixirScript.Core.erlang.is_binary(string0);
        })) !== null) {
            let [string0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_break'), string0, Symbol.for('flex'));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function flex_glue(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, ' ', x10));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc1'), ElixirScript.Core.Patterns.variable('break_string'), ElixirScript.Core.Patterns.variable('doc2')], __function_args__, (doc10, break_string0, doc20) => {
            return ElixirScript.Core.erlang.is_binary(break_string0);
        })) !== null) {
            let [doc10, break_string0, doc20] = __arg_matches__;

            return concat(doc10, concat(flex_break(break_string0), doc20));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function fold_doc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[], ElixirScript.Core.Patterns.variable('_folder_fun')], __function_args__, (_folder_fun0) => {
            return true;
        })) !== null) {
            let [_folder_fun0] = __arg_matches__;

            return empty();
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([[ElixirScript.Core.Patterns.variable('doc')], ElixirScript.Core.Patterns.variable('_folder_fun')], __function_args__, (doc0, _folder_fun0) => {
            return true;
        })) !== null) {
            let [doc0, _folder_fun0] = __arg_matches__;

            return doc0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('docs')), ElixirScript.Core.Patterns.variable('folder_fun')], __function_args__, (doc0, docs0, folder_fun0) => {
            return ElixirScript.Core.erlang.is_function(folder_fun0, 2);
        })) !== null) {
            let [doc0, docs0, folder_fun0] = __arg_matches__;

            return folder_fun0(doc0, fold_doc(docs0, folder_fun0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function format(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('width')], __function_args__, (doc0, width0) => {
            return (ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))))) && (ElixirScript.Core.erlang.equals(width0, Symbol.for('infinity')) || width0 >= 0);
        })) !== null) {
            let [doc0, width0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, width0, 0, [new ElixirScript.Core.Tuple(0, Symbol.for('flat'), doc0)]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), []], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return [];
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('doc_nil')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), Symbol.for('doc_line')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, i0, t0) => {
            return true;
        })) !== null) {
            let [w0, i0, t0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(indent(i0), format(w0, i0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_cons'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('y')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, m0, x0, y0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, m0, x0, y0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, [new ElixirScript.Core.Tuple(i0, m0, x0), ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, y0), t0)]));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_color'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('c')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, m0, x0, c0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, m0, x0, c0, t0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(ansi(c0), format(w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_string'), ElixirScript.Core.Patterns.variable('s'), ElixirScript.Core.Patterns.variable('l')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, s0, l0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, s0, l0, t0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(s0, format(w0, k0 + l0, t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('s')]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, s0, t0) => {
            return ElixirScript.Core.erlang.is_binary(s0);
        })) !== null) {
            let [w0, k0, s0, t0] = __arg_matches__;

            return ElixirScript.Core.Functions.concat(s0, format(w0, k0 + ElixirScript.Core.erlang.byte_size(s0), t0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_force'), ElixirScript.Core.Patterns.variable('x')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, m0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, m0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_fits'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, m0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, m0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, m0, x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_collapse'), ElixirScript.Core.Patterns.variable('max')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, i0, max0, t0) => {
            return true;
        })) !== null) {
            let [w0, i0, max0, t0] = __arg_matches__;

            return collapse(format(w0, i0, t0), max0, 0, i0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('m'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_break'), ElixirScript.Core.Patterns.variable('s'), Symbol.for('flex')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, m0, s0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, m0, s0, t0] = __arg_matches__;

            const [k1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('k'), k0 + ElixirScript.Core.erlang.byte_size(s0));

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303295518')], (x5764607523032955180) => {
                return ElixirScript.Core.Functions.concat(indent(i0), format(w0, i0, t0));
            }, (x5764607523032955180) => {
                return x5764607523032955180 === null || x5764607523032955180 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.Functions.concat(s0, format(w0, k1, t0));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return fits__qmark__(w0, k1, true, t0);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.erlang.equals(m0, Symbol.for('flat'));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(w0, Symbol.for('infinity')))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('mode'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_break'), ElixirScript.Core.Patterns.variable('s'), Symbol.for('strict')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, mode0, s0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, mode0, s0, t0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.Functions.concat(s0, format(w0, k0 + ElixirScript.Core.erlang.byte_size(s0), t0));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.Functions.concat(indent(i0), format(w0, i0, t0));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(mode0, Symbol.for('break')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('mode'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_nest'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('j'), ElixirScript.Core.Patterns.variable('nest')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, mode0, x0, j0, nest0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, mode0, x0, j0, nest0, t0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, mode0, x0), t0)));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(apply_nesting(i0, k0, j0), mode0, x0), t0)));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return false;
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return ElixirScript.Core.erlang.equals(mode0, Symbol.for('break'));
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(nest0, Symbol.for('break')));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(nest0, Symbol.for('always'))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), Symbol.for('break'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_group'), ElixirScript.Core.Patterns.variable('x'), Symbol.for('inherit')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, x0, t0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('break'), x0), t0)));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('w'), ElixirScript.Core.Patterns.variable('k'), ElixirScript.Core.Patterns.headTail(ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [ElixirScript.Core.Patterns.variable('i'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                values: [Symbol.for('doc_group'), ElixirScript.Core.Patterns.variable('x'), ElixirScript.Core.Patterns.variable('_')]
            })]
        }), ElixirScript.Core.Patterns.variable('t'))], __function_args__, (w0, k0, i0, x0, t0) => {
            return true;
        })) !== null) {
            let [w0, k0, i0, x0, t0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303295134')], (x5764607523032951340) => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('break'), x0), t0)));
            }, (x5764607523032951340) => {
                return x5764607523032951340 === null || x5764607523032951340 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, w0, k0, ElixirScript.Core.Functions.concat(new ElixirScript.Core.Tuple(i0, Symbol.for('flat'), x0), t0)));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return fits__qmark__(w0, k0, false, [new ElixirScript.Core.Tuple(i0, Symbol.for('flat'), x0)]);
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return true;
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(w0, Symbol.for('infinity'))));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function glue(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, ' ', x10));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc1'), ElixirScript.Core.Patterns.variable('break_string'), ElixirScript.Core.Patterns.variable('doc2')], __function_args__, (doc10, break_string0, doc20) => {
            return ElixirScript.Core.erlang.is_binary(break_string0);
        })) !== null) {
            let [doc10, break_string0, doc20] = __arg_matches__;

            return concat(doc10, concat(__break__(break_string0), doc20));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function group(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0')], __function_args__, (x00) => {
            return true;
        })) !== null) {
            let [x00] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, Symbol.for('self')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('mode')], __function_args__, (doc0, mode0) => {
            return ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))));
        })) !== null) {
            let [doc0, mode0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_group'), doc0, mode0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function indent(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([0], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '\n';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('i')], __function_args__, (i0) => {
            return true;
        })) !== null) {
            let [i0] = __arg_matches__;

            return '\n' + ElixirScript.Core.binary.copy(' ', i0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function join(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('doc_nil'), Symbol.for('doc_nil'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return Symbol.for('doc_nil');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('left'), Symbol.for('doc_nil'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (left0) => {
            return true;
        })) !== null) {
            let [left0] = __arg_matches__;

            return left0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('doc_nil'), ElixirScript.Core.Patterns.variable('right'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')], __function_args__, (right0) => {
            return true;
        })) !== null) {
            let [right0] = __arg_matches__;

            return right0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right'), true, ElixirScript.Core.Patterns.variable('sep')], __function_args__, (left0, right0, sep0) => {
            return true;
        })) !== null) {
            let [left0, right0, sep0] = __arg_matches__;

            return flex_glue(concat(left0, sep0), right0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right'), false, ElixirScript.Core.Patterns.variable('sep')], __function_args__, (left0, right0, sep0) => {
            return true;
        })) !== null) {
            let [left0, right0, sep0] = __arg_matches__;

            return glue(concat(left0, sep0), right0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function nest(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('x0'), ElixirScript.Core.Patterns.variable('x1')], __function_args__, (x00, x10) => {
            return true;
        })) !== null) {
            let [x00, x10] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, x00, x10, Symbol.for('always')));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), Symbol.for('cursor'), ElixirScript.Core.Patterns.variable('mode')], __function_args__, (doc0, mode0) => {
            return (ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))))) && (mode0 === Symbol.for('break') || mode0 === Symbol.for('always'));
        })) !== null) {
            let [doc0, mode0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_nest'), doc0, Symbol.for('cursor'), mode0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), Symbol.for('reset'), ElixirScript.Core.Patterns.variable('mode')], __function_args__, (doc0, mode0) => {
            return (ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))))) && (mode0 === Symbol.for('break') || mode0 === Symbol.for('always'));
        })) !== null) {
            let [doc0, mode0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_nest'), doc0, Symbol.for('reset'), mode0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), 0, ElixirScript.Core.Patterns.variable('_mode')], __function_args__, (doc0, _mode0) => {
            return ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))));
        })) !== null) {
            let [doc0, _mode0] = __arg_matches__;

            return doc0;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('level'), ElixirScript.Core.Patterns.variable('mode')], __function_args__, (doc0, level0, mode0) => {
            return (ElixirScript.Core.erlang.is_binary(doc0) || (doc0 === Symbol.for('doc_line') || doc0 === Symbol.for('doc_nil')) || ElixirScript.Core.erlang.is_tuple(doc0) && (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_cons') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_nest') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_break') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_group') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_color') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_force') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_fits') || (ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_collapse') || ElixirScript.Core.erlang.element(1, doc0) === Symbol.for('doc_string')))))))))) && ElixirScript.Core.erlang.is_integer(level0) && level0 > 0 && (mode0 === Symbol.for('break') || mode0 === Symbol.for('always'));
        })) !== null) {
            let [doc0, level0, mode0] = __arg_matches__;

            return new ElixirScript.Core.Tuple(Symbol.for('doc_nest'), doc0, level0, mode0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function simple__qmark__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('doc_cons'), ElixirScript.Core.Patterns.variable('left'), ElixirScript.Core.Patterns.variable('right')]
        })], __function_args__, (left0, right0) => {
            return true;
        })) !== null) {
            let [left0, right0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return new ElixirScript.Core.Functions.Recurse(recur.bind(null, right0));
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('other576460752303298110')], (other5764607523032981100) => {
                return ElixirScript.Core.erlang.error(new ElixirScript.Core.Tuple(Symbol.for('badbool'), Symbol.for('and'), other5764607523032981100));
            }, (other5764607523032981100) => {
                return true;
            })).call(this, simple__qmark__(left0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('doc_color'), ElixirScript.Core.Patterns.variable('doc'), ElixirScript.Core.Patterns.variable('_')]
        })], __function_args__, (doc0) => {
            return true;
        })) !== null) {
            let [doc0] = __arg_matches__;

            return new ElixirScript.Core.Functions.Recurse(recur.bind(null, doc0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
            values: [Symbol.for('doc_string'), ElixirScript.Core.Patterns.variable('_'), ElixirScript.Core.Patterns.variable('_')]
        })], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('doc_nil')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return true;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('other')], __function_args__, (other0) => {
            return true;
        })) !== null) {
            let [other0] = __arg_matches__;

            return ElixirScript.Core.erlang.is_binary(other0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function to_doc(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: ElixirScript.Core.Patterns.variable('_')
        }]])), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Inspect.Opts')
        }]]))], __function_args__, (struct0, opts0) => {
            return true;
        })) !== null) {
            let [struct0, opts0] = __arg_matches__;

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303298782')], (x5764607523032987820) => {
                return $Inspect$Map$.inspect(struct0, opts0);
            }, (x5764607523032987820) => {
                return x5764607523032987820 === null || x5764607523032987820 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                return ElixirScript.Core.SpecialForms._try(() => {
                    return $Inspect$.inspect(struct0, opts0);
                }, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('caught_exception')], (caught_exception0) => {
                    return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303298718')], (x5764607523032987180) => {
                        return ElixirScript.Core.SpecialForms._try(() => {
                            $Process$.put(Symbol.for('inspect_trap'), true)

                            const [res0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('res'), $Inspect$Map$.inspect(struct0, new Map([...opts0, [Symbol.for('syntax_colors'), []]])));

                            const [res1] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('res'), ElixirScript.Core.erlang.iolist_to_binary(format(res0, Symbol.for('infinity'))));

                            const [message0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('message'), 'got ' + ($String$Chars$.to_string($Kernel$.inspect(ElixirScript.Core.Functions.call_property(caught_exception0, '__struct__'))) + (' with message ' + ($String$Chars$.to_string($Kernel$.inspect($Exception$.message(caught_exception0))) + (' while inspecting ' + $String$Chars$.to_string(res1))))));

                            const [exception0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('exception'), $Inspect$Error$.exception([new ElixirScript.Core.Tuple(Symbol.for('message'), message0)]));

                            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303298622')], (x5764607523032986220) => {
                                return ElixirScript.Core.erlang.raise(Symbol.for('error'), $Kernel$Utils$.raise(exception0), __STACKTRACE__);
                            }, (x5764607523032986220) => {
                                return x5764607523032986220 === null || x5764607523032986220 === false;
                            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                                return $Inspect$.inspect(exception0, opts0);
                            }, () => {
                                return true;
                            })).call(this, ElixirScript.Core.Functions.call_property(opts0, 'safe'));
                        }, null, null, null, () => {
                            return $Process$.__delete__(Symbol.for('inspect_trap'));
                        });
                    }, (x5764607523032987180) => {
                        return x5764607523032987180 === null || x5764607523032987180 === false;
                    }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                        return $Inspect$Map$.inspect(struct0, opts0);
                    }, () => {
                        return true;
                    })).call(this, $Process$.get(Symbol.for('inspect_trap')));
                }, (caught_exception0) => {
                    return true;
                })), null, null, null);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Functions.call_property(opts0, 'structs'));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('arg'), ElixirScript.Core.Patterns.capture(new Map([[Symbol.for('__struct__'), {
            __MODULE__: Symbol.for('Elixir.Inspect.Opts')
        }]]))], __function_args__, (arg0, opts0) => {
            return true;
        })) !== null) {
            let [arg0, opts0] = __arg_matches__;

            return $Inspect$.inspect(arg0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __break__,
    color,
    concat,
    container_doc,
    empty,
    flex_break,
    flex_glue,
    fold_doc,
    format,
    glue,
    group,
    nest,
    to_doc,
    __MODULE__: Symbol.for('Elixir.Inspect.Algebra'),
    __info__
};
