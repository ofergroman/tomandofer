import React, {createContext, useContext, ReactNode, useCallback, useEffect, useState} from 'react';

export interface TimerContextProps {
    timer: number;
    startCountdown: (startTime: number) => void;
}

const TimerContext = createContext<TimerContextProps | undefined>(undefined);

export const useTimer = () => {
    const context = useContext(TimerContext);
    if (!context) {
        throw new Error('useTimer must be used within a TimerProvider');
    }
    return context;
}

export type TimerProviderProps = { children: ReactNode; initialTime: number; }
export const TimerProvider: React.FC<TimerProviderProps> = ({ children, initialTime }) => {
    const [timer, setTimer] = useState(initialTime);
    const [isRunning, setIsRunning] = useState(false);

    const startCountdown = useCallback(() => {
        setTimer(initialTime);
        setIsRunning(true);
    }, [initialTime]);

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