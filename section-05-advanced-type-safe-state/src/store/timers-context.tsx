import { createContext, useContext } from 'react';

export type Timer = {
	name: string;
	duration: number;
};

export type TimersState = {
	isRunning: boolean;
	timers: Timer[];
};

export const initialState: TimersState = {
	isRunning: true,
	timers: [],
};

export type TimersContextValue = TimersState & {
	addTimer: (timerData: Timer) => void;
	startTimers: () => void;
	stopTimers: () => void;
};

export const TimersContext = createContext<TimersContextValue | null>(null);

export function useTimersContext() {
	const timersCtx = useContext(TimersContext);

	if (timersCtx === null) {
		throw new Error('TimersContext is null - that should not be the case');
	}

	return timersCtx;
}
