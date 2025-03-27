export type LengthOfString<
  S extends string,
  Acc extends 0[] = []
> = S extends `${string}${infer $Rest}`
  ? LengthOfString<$Rest, [ ...Acc, 0 ]>
  : Acc["length"];

export type IsStringOfLength<S extends string, Length extends number> = LengthOfString<S> extends Length ? true : false

type StringOfLength<Min, Max> = string & {
  min: Min;
  max: Max;
  readonly StringOfLength: unique symbol // this is the phantom type
};

const isStringOfLength = <Min extends number, Max extends number>(
  str: string,
  min: Min,
  max: Max,
): str is StringOfLength<Min, Max> => str.length >= min && str.length <= max;

export const stringOfLength = <Min extends number, Max extends number>(
  input: unknown,
  min: Min,
  max: Max,
): StringOfLength<Min, Max> => {
  if (typeof input !== "string") {
    throw new Error("invalid input");
  }

  if (!isStringOfLength(input, min, max)) {
    throw new Error("input is not between specified min and max");
  }

  return input; // the type of input here is now StringOfLength<Min,Max>
};
