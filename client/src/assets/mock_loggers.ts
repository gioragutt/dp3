import { Loggers } from '../app/pages/logs/logger'
export const MockLoggers: Loggers = {
   'DBM-CENTRAL' : {
      'name' : 'DBM-CENTRAL',
      'children' : {
         'DBM-CENTRAL.DBM-CHILD1' : {
            'name' : 'DBM-CENTRAL.DBM-CHILD1',
            'children' : {
               'DBM-CHILD1.DBM-GRAND1-CHILD2' : {
                  'name' : 'DBM-CHILD1.DBM-GRAND1-CHILD2',
                  'level' : 'DEBUG',
                  'children' : {
                     'DBM-GRAND1-CHILD2.DBM-GRAND1-CHILD2-CHILD1' : {
                        'name' : 'DBM-GRAND1-CHILD2.DBM-GRAND1-CHILD2-CHILD1',
                        'children' : null,
                        'level' : 'DEBUG'
                     }
                  }
               },
               'DBM-CHILD1.DBM-GRAND1-CHILD1' : {
                  'level' : 'DEBUG',
                  'children' : null,
                  'name' : 'DBM-CHILD1.DBM-GRAND1-CHILD1'
               }
            },
            'level' : 'ERROR'
         },
         'DBM-CENTRAL.DBM-CHILD2' : {
            'children' : null,
            'level' : 'INFO',
            'name' : 'DBM-CENTRAL.DBM-CHILD2'
         }
      },
      'level' : 'INFO'
   },
   'INTERFACE' : {
      'children' : {
         'INTERFACE.DEBUG-MANAGER' : {
            'name' : 'INTERFACE.DEBUG-MANAGER',
            'level' : 'ERROR',
            'children' : {
               'DEBUG-MANAGER.GOLDEN-OAK-FATHER' : {
                  'name' : 'DEBUG-MANAGER.GOLDEN-OAK-FATHER',
                  'children' : {
                     'GOLDEN-OAK-FATHER.GOLDEN-OAK-SON1' : {
                        'name' : 'GOLDEN-OAK-FATHER.GOLDEN-OAK-SON1',
                        'level' : 'DEBUG',
                        'children' : {
                           'GOLDEN-OAK-SON1.GOLDEN-OAK-SUPER-EXTRA-LONG-LOGGER-NAME-NONE-GETS' : {
                              'name' : 'GOLDEN-OAK-SON1.GOLDEN-OAK-SUPER-EXTRA-LONG-LOGGER-NAME-NONE-GETS',
                              'level' : 'ERROR',
                              'children' : null
                           },
                           'GOLDEN-OAK-SON1.GOLDEN-OAK-GRANDSON-1' : {
                              'name' : 'GOLDEN-OAK-SON1.GOLDEN-OAK-GRANDSON-1',
                              'children' : null,
                              'level' : 'INFO'
                           }
                        }
                     }
                  },
                  'level' : 'DEBUG'
               }
            }
         }
      },
      'level' : 'INFO',
      'name' : 'INTERFACE'
   },
   'BUS' : {
      'children' : null,
      'level' : 'INFO',
      'name' : 'BUS'
   }
}
