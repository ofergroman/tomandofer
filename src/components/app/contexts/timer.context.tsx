import React, {createContext, ReactNode, useCallback, useEffect, useState} from 'react';

export type TimerContextProps = { timer: number; startCountdown: (startTime: number) => void; }
export const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export type TimerProviderProps = { children: ReactNode; initialTime: number; }
export const TimerProvider: React.FC<TimerProviderProps> = ({ children, initialTime }) => {
    const [timer, setTimer] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    const startCountdown = useCallback(() => {
        setTimer(initialTime);
        setIsRunning(true);
    }, []);

    useEffect(() => {
        if (isRunning && timer > 0) {
            const interval = setInterval(() => {
                setTimer(prevTimer => {
                    if (prevTimer <= 1) {
                        setIsRunning(false);
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTimer - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isRunning, timer]);

  return (
    <TimerContext.Provider value={{ timer, startCountdown }}>
      {children}
    </TimerContext.Provider>
  );
};