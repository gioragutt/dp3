export type LogLevel = 'ERROR' | 'INFO' | 'DEBUG';

export type Loggers = { [string: string]: Logger };

export interface Logger {
    name: string;
    level: LogLevel;
    children?: Loggers;
}

