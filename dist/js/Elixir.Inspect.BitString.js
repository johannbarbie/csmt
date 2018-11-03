'use strict';
import ElixirScript from './ElixirScript.Core.js';
import $Inspect$ from './Elixir.Inspect.js';

import $Inspect$BitString$ from './Elixir.Inspect.BitString.js';

import $Inspect$Integer$ from './Elixir.Inspect.Integer.js';

import $Inspect$Algebra$ from './Elixir.Inspect.Algebra.js';

import $String$ from './Elixir.String.js';

import $Code$Identifier$ from './Elixir.Code.Identifier.js';

import $Inspect$Opts$ from './Elixir.Inspect.Opts.js';

function __info__(kind) {
    const __info__map__ = new Map([[Symbol.for('functions'), [new ElixirScript.Core.Tuple(Symbol.for('__impl__'), 1), new ElixirScript.Core.Tuple(Symbol.for('inspect'), 2)]], [Symbol.for('macros'), []], [Symbol.for('attributes'), [new ElixirScript.Core.Tuple(Symbol.for('vsn'), [29468101436146047329955882293103553968]), new ElixirScript.Core.Tuple(Symbol.for('behaviour'), [$Inspect$]), new ElixirScript.Core.Tuple(Symbol.for('protocol_impl'), [new ElixirScript.Core.Tuple(Symbol.for('protocol'), $Inspect$), new ElixirScript.Core.Tuple(Symbol.for('for'), {})])]], [Symbol.for('compile'), [new ElixirScript.Core.Tuple(Symbol.for('version'), [55, 46, 50, 46, 54]), new ElixirScript.Core.Tuple(Symbol.for('options'), []), new ElixirScript.Core.Tuple(Symbol.for('source'), '/private/tmp/elixir-20181026-69137-ms45yr/elixir-1.7.4/lib/elixir/lib/inspect.ex')]], [Symbol.for('md5'), new ElixirScript.Core.BitString(ElixirScript.Core.BitString.integer(22), ElixirScript.Core.BitString.integer(43), ElixirScript.Core.BitString.integer(89), ElixirScript.Core.BitString.integer(146), ElixirScript.Core.BitString.integer(200), ElixirScript.Core.BitString.integer(246), ElixirScript.Core.BitString.integer(10), ElixirScript.Core.BitString.integer(190), ElixirScript.Core.BitString.integer(171), ElixirScript.Core.BitString.integer(78), ElixirScript.Core.BitString.integer(69), ElixirScript.Core.BitString.integer(219), ElixirScript.Core.BitString.integer(192), ElixirScript.Core.BitString.integer(105), ElixirScript.Core.BitString.integer(237), ElixirScript.Core.BitString.integer(176))], [Symbol.for('module'), Symbol.for('Elixir.Inspect.BitString')]]);

    const value = __info__map__.get(kind);

    if (value !== null) {
        return value;
    }

    throw new ElixirScript.Core.Patterns.MatchError(kind);
}

function __impl__(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('for')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return {};
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('target')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$BitString$;
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([Symbol.for('protocol')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return $Inspect$;
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

function each_bit(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('_'), 0, ElixirScript.Core.Patterns.variable('_')], __function_args__, () => {
            return true;
        })) !== null) {
            let [] = __arg_matches__;

            return '...';
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(), ElixirScript.Core.Patterns.variable('_counter'), ElixirScript.Core.Patterns.variable('_opts')], __function_args__, (_counter0, _opts0) => {
            return true;
        })) !== null) {
            let [_counter0, _opts0] = __arg_matches__;

            return Symbol.for('doc_nil');
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), 8)), ElixirScript.Core.Patterns.variable('_counter'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (h0, _counter0, opts0) => {
            return true;
        })) !== null) {
            let [h0, _counter0, opts0] = __arg_matches__;

            return $Inspect$Integer$.inspect(h0, opts0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.integer({
            'value': ElixirScript.Core.Patterns.variable()
        }), ElixirScript.Core.BitString.bitstring({
            'value': ElixirScript.Core.Patterns.variable()
        })), ElixirScript.Core.Patterns.variable('counter'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (h0, t0, counter0, opts0) => {
            return true;
        })) !== null) {
            let [h0, t0, counter0, opts0] = __arg_matches__;

            return $Inspect$Algebra$.flex_glue($Inspect$Algebra$.concat($Inspect$Integer$.inspect(h0, opts0), ','), each_bit(t0, decrement(counter0), opts0));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('bitstring'), ElixirScript.Core.Patterns.variable('_counter'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (bitstring0, _counter0, opts0) => {
            return true;
        })) !== null) {
            let [bitstring0, _counter0, opts0] = __arg_matches__;

            const [size0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('size'), ElixirScript.Core.erlang.bit_size(bitstring0));

            const [h0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.bitStringMatch(ElixirScript.Core.BitString.size(ElixirScript.Core.BitString.integer({
                'value': ElixirScript.Core.Patterns.variable()
            }), size0)), bitstring0);

            return $Inspect$Integer$.inspect(h0, opts0) + ('::size(' + (ElixirScript.Core.erlang.integer_to_binary(size0) + ')'));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (term0, opts0) => {
            return ElixirScript.Core.erlang.is_binary(term0);
        })) !== null) {
            let [term0, opts0] = __arg_matches__;

            const [bins0, base0, printable_limit0] = ElixirScript.Core.Patterns.match(new Map([[Symbol.for('__struct__'), {
                __MODULE__: Symbol.for('Elixir.Inspect.Opts')
            }], [Symbol.for('binaries'), ElixirScript.Core.Patterns.variable('bins')], [Symbol.for('base'), ElixirScript.Core.Patterns.variable('base')], [Symbol.for('printable_limit'), ElixirScript.Core.Patterns.variable('printable_limit')]]), opts0);

            return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('x576460752303364637')], (x5764607523033646370) => {
                return inspect_bitstring(term0, opts0);
            }, (x5764607523033646370) => {
                return x5764607523033646370 === null || x5764607523033646370 === false;
            }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.variable('_')], () => {
                const [inspected0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inspected'), ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), '']
                })], (escaped0) => {
                    return [34, escaped0, 34];
                }, (escaped0) => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([ElixirScript.Core.Patterns.type(ElixirScript.Core.Tuple, {
                    values: [ElixirScript.Core.Patterns.variable('escaped'), ElixirScript.Core.Patterns.variable('_')]
                })], (escaped0) => {
                    return [34, escaped0, 34, ' <> ...'];
                }, (escaped0) => {
                    return true;
                })).call(this, $Code$Identifier$.escape(term0, 34, printable_limit0)));

                return $Inspect$Algebra$.color(ElixirScript.Core.erlang.iolist_to_binary(inspected0), Symbol.for('string'), opts0);
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                return false;
            }, () => {
                return true;
            }), ElixirScript.Core.Patterns.clause([true], () => {
                return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                    return ElixirScript.Core.Patterns.defmatch(ElixirScript.Core.Patterns.clause([false], () => {
                        return false;
                    }, () => {
                        return true;
                    }), ElixirScript.Core.Patterns.clause([true], () => {
                        return $String$.printable__qmark__(term0, printable_limit0);
                    }, () => {
                        return true;
                    })).call(this, ElixirScript.Core.erlang.equals(bins0, Symbol.for('infer')));
                }, () => {
                    return true;
                }), ElixirScript.Core.Patterns.clause([true], () => {
                    return true;
                }, () => {
                    return true;
                })).call(this, ElixirScript.Core.erlang.equals(bins0, Symbol.for('as_strings')));
            }, () => {
                return true;
            })).call(this, ElixirScript.Core.erlang.equals(base0, Symbol.for('decimal'))));
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('term'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (term0, opts0) => {
            return true;
        })) !== null) {
            let [term0, opts0] = __arg_matches__;

            return inspect_bitstring(term0, opts0);
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

function inspect_bitstring(...__function_args__) {
    function recur(...__function_args__) {
        let __arg_matches__ = null;

        let __intermediate__ = null;

        if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default(['', ElixirScript.Core.Patterns.variable('opts')], __function_args__, (opts0) => {
            return true;
        })) !== null) {
            let [opts0] = __arg_matches__;

            return $Inspect$Algebra$.color('<<>>', Symbol.for('binary'), opts0);
        } else if ((__arg_matches__ = ElixirScript.Core.Patterns.match_or_default([ElixirScript.Core.Patterns.variable('bitstring'), ElixirScript.Core.Patterns.variable('opts')], __function_args__, (bitstring0, opts0) => {
            return true;
        })) !== null) {
            let [bitstring0, opts0] = __arg_matches__;

            const [left0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('left'), $Inspect$Algebra$.color('<<', Symbol.for('binary'), opts0));

            const [right0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('right'), $Inspect$Algebra$.color('>>', Symbol.for('binary'), opts0));

            const [inner0] = ElixirScript.Core.Patterns.match(ElixirScript.Core.Patterns.variable('inner'), each_bit(bitstring0, ElixirScript.Core.Functions.call_property(opts0, 'limit'), opts0));

            return $Inspect$Algebra$.group($Inspect$Algebra$.concat($Inspect$Algebra$.concat(left0, $Inspect$Algebra$.nest(inner0, 2)), right0));
        }

        throw new ElixirScript.Core.Patterns.MatchError(__function_args__);
    }

    return ElixirScript.Core.Functions.trampoline(new ElixirScript.Core.Functions.Recurse(recur.bind(null, ...__function_args__)));
}

export default {
    __impl__,
    inspect,
    __MODULE__: Symbol.for('Elixir.Inspect.BitString'),
    __info__
};
