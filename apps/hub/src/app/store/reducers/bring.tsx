import deepEqual from 'fast-deep-equal'
import { useSelector } from 'react-redux'

import type { AppRootState } from './'

enum ActionType {
  '/bringID/setPoints' = '/bringID/setPoints',
  '/bringID/setProofs' = '/bringID/setProofs',
  '/bringID/setScore' = '/bringID/setScore',
}

type Action<payload> = {
  type: ActionType
  payload?: payload
  error?: boolean
}

type State = {
  points: number
  proofs: any[]
  score: number
}

const initState: State = {
  points: 0,
  proofs: [],
  score: 0,
}

export const setPoints = (points: number): Action<number> => ({
  type: ActionType['/bringID/setPoints'],
  payload: points,
})

export const setScore = (score: number): Action<number> => ({
  type: ActionType['/bringID/setScore'],
  payload: score,
})

export const setProofs = (proofs: any[]): Action<any[]> => ({
  type: ActionType['/bringID/setProofs'],
  payload: proofs,
})

export default function bringID(state = initState, action: Action<any>): State {
  switch (action.type) {
    case ActionType['/bringID/setPoints']:
      return { ...state, points: action.payload }

    case ActionType['/bringID/setScore']:
      return { ...state, score: action.payload }

    case ActionType['/bringID/setProofs']:
      return { ...state, proofs: action.payload }

    default:
      return state
  }
}

export const useBringID: () => State = () => {
  return useSelector((state: AppRootState) => {
    return state.bringID
  }, deepEqual)
}
