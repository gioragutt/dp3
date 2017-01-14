#/bin/bash

dest_path="../client/src/assets/mock_loggers.ts"
printf "import { Loggers } from '../app/pages/logs/logger'
export const MockLoggers: Loggers = " > $dest_path
python generate_loggers.py | json_pp | sed "s/\"/'/g" >> $dest_path
