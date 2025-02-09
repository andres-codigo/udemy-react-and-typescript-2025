import { useReducer, type ReactNode } from 'react';
import {
	Timer,
	TimersState,
	initialState,
	TimersContextValue,
	TimersContext,
} from './timers-context';

type TimersContextProviderProps = {
	children: ReactNode;
};

type StartTimersAction = { type: 'START_TIMERS' };
type StopTimersAction = { type: 'STOP_TIMERS' };
type AddTimerAction = { type: 'ADD_TIMER'; payload: Timer };

type Action = StartTimersAction | StopTimersAction | AddTimerAction;

function timersReducer(state: TimersState, action: Action): TimersState {
	if (action.type === 'START_TIMERS') {
		return { ...state, isRunning: true };
	}
	if (action.type === 'STOP_TIMERS') {
		return { ...state, isRunning: false };
	}
	if (action.type === 'ADD_TIMER') {
		return {
			...state,
			timers: [
				...state.timers,
				{
					name: action.payload.name,
					duration: action.payload.duration,
				},
			],
		};
	}
	return state;
}

export default function TimersContextProvider({
	children,
}: TimersContextProviderProps) {
	// Dispatch action to update state
	const [timersState, dispatch] = useReducer(timersReducer, initialState);

	const ctx: TimersContextValue = {
		timers: timersState.timers,
		isRunning: timersState.isRunning,
		addTimer: (timerData) => {
			dispatch({ type: 'ADD_TIMER', payload: timerData });
		},
		startTimers: () => {
			dispatch({ type: 'START_TIMERS' });
			// ...
		},
		stopTimers: () => {
			dispatch({ type: 'STOP_TIMERS' });
		},
	};

	return (
		<TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
	);
}
