// export const ProcessesList: string[] = [
//     'DBM-CENTRAL', 'GOLDEN-OAK', 'LOGIC', 'WESTERN-LIGHT',
//     'R2D2', 'WALLE', 'RUNTIME-HTTP-SERVER', 'AIS',
//     'TILTAN-NON-AIP', 'JUKEBOX', 'DATABASE-READER-SERVER',
//     'CONFIG', 'TRANSMIT', 'LINK5', 'TIME-ARROW', 'ADIR',
//     'FIRE-SICKLE', '123', '345', '567', 'fasdfsdf'
// ];

export const ProcessesList: string[] = (() => {
    let list: string[] = [];
    for (let i = 0; i < 20; i++) {
        list.push('' + i);
    }
    return list;
})();
