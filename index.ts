/** biome-ignore-all lint/style/useShorthandFunctionType: meow */
import { Effect } from 'effect'

export const actOnEntity = <
  TEntityTypeReturnedFromRegistry extends TEntityTypeSupportedInActing,
  TEntityTypeSupportedInActing extends EntityType,
  EntityAcquirementError = never,
  EntityAcquirementRequirements = never,
  ActingError = never,
  ActingRequirements = never,
  RegistryAcquirementError = never,
  RegistryAcquirementRequirements = never,
>(
  registryEffect: Effect.Effect<
    Registry, RegistryAcquirementError, RegistryAcquirementRequirements
  >
) => {
  const target1 = Effect.gen(function* () {
    yield* Effect.succeed({} as any) as Effect.Effect<
      Entity<TEntityTypeReturnedFromRegistry>, EntityAcquirementError, EntityAcquirementRequirements
    >
    yield* Effect.succeed({} as any) as Effect.Effect<
      Entity<TEntityTypeSupportedInActing>, ActingError, ActingRequirements
    >

    return {} as Registry
  })

  /* `target1` Effect Type Parameters */

  // type Success = Registry

  // type Failure = [
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeReturnedFromRegistry>,
  //     EntityAcquirementError,
  //     EntityAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeSupportedInActing>,
  //     ActingError,
  //     ActingRequirements
  //   >>
  // ] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never

  // type Requirements = [
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeReturnedFromRegistry>,
  //     EntityAcquirementError,
  //     EntityAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeSupportedInActing>,
  //     ActingError,
  //     ActingRequirements
  //   >>
  // ] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never

  const target2 = Effect.gen(function*() {
    yield* registryEffect
    return yield* target1
  })

  /* `target2` Effect Type Parameters */

  // type Success = Registry

  // type Failure =
  //   | RegistryAcquirementError
  //   | (
  //     [
  //       | YieldWrap<Effect<
  //         Entity<TEntityTypeReturnedFromRegistry>,
  //         EntityAcquirementError,
  //         EntityAcquirementRequirements
  //       >>
  //       | YieldWrap<Effect<
  //         Entity<TEntityTypeSupportedInActing>,
  //         ActingError,
  //         ActingRequirements
  //       >>
  //     ] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>]
  //       ? E
  //       : never
  //   )

  // type Requirements =
  //   | RegistryAcquirementRequirements
  //   | (
  //     [
  //       | YieldWrap<Effect<
  //         Entity<TEntityTypeReturnedFromRegistry>,
  //         EntityAcquirementError,
  //         EntityAcquirementRequirements
  //       >>
  //       | YieldWrap<Effect<
  //         Entity<TEntityTypeSupportedInActing>,
  //         ActingError,
  //         ActingRequirements
  //       >>
  //     ] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>]
  //       ? R
  //       : never
  //   )

  const target3 = Effect.gen(function*() {
    yield* registryEffect
    yield* Effect.succeed({} as any) as Effect.Effect<
      Entity<TEntityTypeReturnedFromRegistry>, EntityAcquirementError, EntityAcquirementRequirements
    >
    yield* Effect.succeed({} as any) as Effect.Effect<
      Entity<TEntityTypeSupportedInActing>, ActingError, ActingRequirements
    >
  })

  /* `target3` Effect Type Parameters */

  // type Success = Registry

  // type Failure = [
  //   | YieldWrap<Effect<
  //     Registry,
  //     RegistryAcquirementError,
  //     RegistryAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeReturnedFromRegistry>,
  //     EntityAcquirementError,
  //     EntityAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeSupportedInActing>,
  //     ActingError,
  //     ActingRequirements
  //   >>
  // ] extends [YieldWrap<Effect<infer _A, infer E, infer _R>>] ? E : never

  // type Requirements = [
  //   | YieldWrap<Effect<
  //     Registry,
  //     RegistryAcquirementError,
  //     RegistryAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeReturnedFromRegistry>,
  //     EntityAcquirementError,
  //     EntityAcquirementRequirements
  //   >>
  //   | YieldWrap<Effect<
  //     Entity<TEntityTypeSupportedInActing>,
  //     ActingError,
  //     ActingRequirements
  //   >>
  // ] extends [YieldWrap<Effect<infer _A, infer _E, infer R>>] ? R : never
}

interface Registry {
  _tag: 'Registry'
}

interface Entity<TType extends EntityType> {
  _tag: 'Entity'
  type: TType
}

type EntityType = 'red' | 'blue' | 'green'
