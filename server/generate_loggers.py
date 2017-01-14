#!/usr/bin/env python

import jsonpickle


class Logger(object):

    def _init_children(self, subloggers):
        if subloggers is not None:
            self.children = dict()
            for sublogger in subloggers:
                sublogger._update_father(self)
                self.children[sublogger.name] = sublogger

    def __init__(self, name, level, subloggers=None):
        self.name = name
        self.level = level
        self.children = None
        self._init_children(subloggers)
    
    def _update_father(self, father):
        self.name = "{0}.{1}".format(father.name, self.name)


# def to_json(self):
# return json.dumps(self, default=lambda o: o.__dict__, sort_keys=True,
# indent=4)

ERROR = "ERROR"
INFO = "INFO"
DEBUG = "DEBUG"

loggers = {
    "DBM-CENTRAL": Logger("DBM-CENTRAL", INFO, [
        Logger("DBM-CHILD1", ERROR, [
            Logger("DBM-GRAND1-CHILD1", DEBUG),
            Logger("DBM-GRAND1-CHILD2", DEBUG, [
                Logger("DBM-GRAND1-CHILD2-CHILD1", DEBUG)
            ])
        ]),
        Logger("DBM-CHILD2", INFO)
    ]),
    "BUS": Logger("BUS", INFO),
    "INTERFACE": Logger("INTERFACE", INFO, [
        Logger("DEBUG-MANAGER", ERROR, [
            Logger("GOLDEN-OAK-FATHER", DEBUG, [
                Logger("GOLDEN-OAK-SON1", DEBUG, [
                    Logger("GOLDEN-OAK-GRANDSON-1", INFO),
                    Logger("GOLDEN-OAK-SUPER-EXTRA-LONG-LOGGER-NAME-NONE-GETS", ERROR)
                ])
            ])
        ])
    ])
}

if __name__ == "__main__":
    print jsonpickle.encode(loggers, unpicklable=False)
