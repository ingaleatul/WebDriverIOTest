## Automated PR

- [ ] This PR is an automated / Renovate PR. If so, skip the rest of the checklist.

## General PR Hygiene

- [ ] There is a Jira ticket to track this work
- [ ] The Jira ID is part of this PR's title for auto-hooking (e.g., "EXH-123 Implements awesomeness")
- [ ] This PR satisfies Jira ticket's acceptance criteria (Otherwise, explain in this section why no criteria have been addressed)

--Describe what portion of functionality this PR addresses:---  

- [ ] This PR is a hotfix and the team has agreed to not complete the rest of the PR template

## Testing & Validation

- [ ] This work has been tested/validated and is ready for a production deployment
- [ ] The code has been tested with the cloud (e.g. AWS) components that it's intended to interact with? (if relevant)
- [ ] The code has been tested according to established test criteria

## Security

- [ ] No secrets are being committed (i.e. credentials, PII)
- [ ] This PR does not have any significant security implications (as outlined in the lists below)

    Using the flow diagram (at the bottom of this PR) and the lists below, please determine if this PR has security implications. 
    Please document the implications here:  

- Application Security
  - new third-party packages
  - new GraphQL resolvers
  - APIs have rate limiting
  - endpoints implement secure authorization/authentication 
  - endpoints have happy/sad path testing for authorization/authentication
  - secured from SQL injections  
- Infrastructure
  - s3 buckets
  - api gateway endpoints
  - roles and permissions
- Data: New connections or new data persisted
  - RDS instances
  - local/distributed filesystem
  - external API calls
  - key-value stores
  - PII is kept from logs
  - Data is secured at-rest/in-transit
  
## Code Review

- [ ] There is no unused functionality or blocks of commented out code (otherwise, please explain below)
- [ ] In addition to this PR, all relevant documentation (e.g. Confluence) and architecture diagrams (e.g. Miro, draw.io, Lucidcharts) were updated
  - --NOTE:-- Provide links below OR explain why there is no documentation updates/creation needed

## General Reminders

- [ ] This PR is linked in the Jira ticket
- [ ] I have added code commentary in appropriate areas

[PR Workflow Diagram](blob:https://agrium.atlassian.net/4d2f74a7-96fc-4397-bb0e-d541c9d08c23#media-blob-url=true&id=b70c75f7-dcc4-4274-a64b-f6dcc4704396&collection=contentId-1454932572&contextId=1454932572&mimeType=image%2Fpng&name=Security-Guild-Review-Flow.png&size=176824&width=1275&height=1280)
