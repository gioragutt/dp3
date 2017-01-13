export type LogLevel = 'error' | 'info' | 'debug';

export type Loggers = { [string: string]: Logger };

export interface Logger {
    name: string;
    level: LogLevel;
    children?: Loggers;
}

