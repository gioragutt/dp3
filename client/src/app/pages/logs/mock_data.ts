import { Loggers } from './logger';

export const LoggersData: Loggers = {
    'BUS': {
        name: 'BUS',
        level: 'INFO'
    },
    'DBM-CENTRAL': {
        name: 'DBM-CENTRAL',
        level: 'INFO',
        children: {
            'HANDLER' : {
                name: 'HANDLER',
                level: 'DEBUG',
                children: {
                    'NESTED': {
                        name: 'NESTED',
                        level: 'INFO'
                    }
                }
            },
            'HANDLER-2': {
                name: 'HANDLER-2',
                level: 'ERROR'
            }
        }
    },
    'GOLDEN-OAK': {
        name: 'GOLDEN-OAK',
        level: 'ERROR',
        children: {
            'HANDLER' : {
                name: 'HANDLER',
                level: 'DEBUG',
                children: {
                    'NESTED': {
                        name: 'NESTED',
                        level: 'INFO'
                    }
                }
            },
            'HANDLER-2-WITH-A-TYPICALLY-LONG-NAME-FFS-INTERFACE-Y-U-DO-DIS': {
                name: 'HANDLER-2-WITH-A-TYPICALLY-LONG-NAME-FFS-INTERFACE-Y-U-DO-DIS',
                level: 'ERROR'
            }
        }
    }
};

export const ProcessesList: string[] = [
    'DBM-CENTRAL', 'GOLDEN-OAK', 'LOGIC', 'WESTERN-LIGHT',
    'R2D2', 'WALLE', 'RUNTIME-HTTP-SERVER', 'AIS',
    'TILTAN-NON-AIP', 'JUKEBOX', 'DATABASE-READER-SERVER',
    'CONFIG', 'TRANSMIT', 'LINK5', 'TIME-ARROW', 'ADIR',
    'FIRE-SICKLE', '123', '345', '567', 'fasdfsdf'
];

// export const ProcessesList: string[] = (() => {
//     let list: string[] = [];
//     for (let i = 0; i < 35; i++) {
//         list.push('' + i);
//     }
//     return list;
// })();    
