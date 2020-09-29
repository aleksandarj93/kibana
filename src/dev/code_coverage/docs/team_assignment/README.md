# Team Assignments

Team assignment occurs once per ci run.

The "orchestration" entry point is a [Jenkinsfile Scripted Pipeline](https://github.com/elastic/kibana/blob/f73bc48b3bbbb5ad2042c1aa267aea2150b7b742/.ci/Jenkinsfile_coverage#L21)  
This Jenkinsfile runs a [shell script](https://github.com/elastic/kibana/blob/master/src/dev/code_coverage/shell_scripts/generate_team_assignments_and_ingest_coverage.sh#L33) that kicks everything off.

## Team Assignment Data File Creation (Before Ingestion)
We create a data file containing all paths in the repo, with a team assigned.   
Example Team Assignments Block: 
```
src/dev/code_coverage/ingest_coverage/team_assignment/enumerate_patterns.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/enumeration_helpers.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/flush.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/index.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/parse_owners.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/parse_owners_helpers.js kibana-qa
src/dev/code_coverage/ingest_coverage/team_assignment/parsing_helpers.js kibana-qa
```

## Team Assignment Data File Usage (During Code Coverage Ingestion) 


Subsequently, we use the data file during ingestion.
We search the data file, for any given "coveredFilePath"
 - Given the above assignments block, and lets say the "coveredFilePath" during ingestion is 
   - `src/dev/code_coverage/ingest_coverage/team_assignment/enumerate_patterns.js`
   - The team assignment would be `kibana-qa`
