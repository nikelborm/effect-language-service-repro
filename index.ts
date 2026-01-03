import * as Effect from "effect/Effect"
import * as Function from 'effect/Function'
import * as Fn from 'effect/Function'
import { pipe } from 'effect/Function'

const good = pipe('asd')
const bad1 = Function.pipe('asd')
const bad2 = Fn.pipe('asd')
// Effect.gen(function*(){})
