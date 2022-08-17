import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: "Mutation";
  ping?: Maybe<PingPong>;
};

export type MutationPingArgs = {
  pingPong?: InputMaybe<PingPongInput>;
};

export type PingPong = {
  __typename?: "PingPong";
  click?: Maybe<Scalars["Int"]>;
  color?: Maybe<Scalars["String"]>;
};

export type PingPongInput = {
  click?: InputMaybe<Scalars["Int"]>;
  color?: InputMaybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  noop?: Maybe<Scalars["Boolean"]>;
};

export type Subscription = {
  __typename?: "Subscription";
  pong?: Maybe<PingPong>;
};

export type PingMutationVariables = Exact<{
  pingPong?: InputMaybe<PingPongInput>;
}>;

export type PingMutation = {
  __typename?: "Mutation";
  ping?: {
    __typename?: "PingPong";
    color?: string | null;
    click?: number | null;
  } | null;
};

export type PongSubscriptionVariables = Exact<{ [key: string]: never }>;

export type PongSubscription = {
  __typename?: "Subscription";
  pong?: {
    __typename?: "PingPong";
    color?: string | null;
    click?: number | null;
  } | null;
};

export const PingDocument = gql`
  mutation Ping($pingPong: PingPongInput) {
    ping(pingPong: $pingPong) {
      color
      click
    }
  }
`;
export type PingMutationFn = Apollo.MutationFunction<
  PingMutation,
  PingMutationVariables
>;

/**
 * __usePingMutation__
 *
 * To run a mutation, you first call `usePingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [pingMutation, { data, loading, error }] = usePingMutation({
 *   variables: {
 *      pingPong: // value for 'pingPong'
 *   },
 * });
 */
export function usePingMutation(
  baseOptions?: Apollo.MutationHookOptions<PingMutation, PingMutationVariables>
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<PingMutation, PingMutationVariables>(
    PingDocument,
    options
  );
}
export type PingMutationHookResult = ReturnType<typeof usePingMutation>;
export type PingMutationResult = Apollo.MutationResult<PingMutation>;
export type PingMutationOptions = Apollo.BaseMutationOptions<
  PingMutation,
  PingMutationVariables
>;
export const PongDocument = gql`
  subscription Pong {
    pong {
      color
      click
    }
  }
`;

/**
 * __usePongSubscription__
 *
 * To run a query within a React component, call `usePongSubscription` and pass it any options that fit your needs.
 * When your component renders, `usePongSubscription` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePongSubscription({
 *   variables: {
 *   },
 * });
 */
export function usePongSubscription(
  baseOptions?: Apollo.SubscriptionHookOptions<
    PongSubscription,
    PongSubscriptionVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useSubscription<PongSubscription, PongSubscriptionVariables>(
    PongDocument,
    options
  );
}
export type PongSubscriptionHookResult = ReturnType<typeof usePongSubscription>;
export type PongSubscriptionResult = Apollo.SubscriptionResult<
  PongSubscription
>;
