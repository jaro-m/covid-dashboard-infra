# covid-dashboard-infra

## Links for supporting infra

Local development with azure functions
<https://docs.microsoft.com/en-us/azure/azure-functions/functions-run-local?tabs=v4%2Clinux%2Ccsharp%2Cportal%2Cbash>

Local development with azurite (loacal storage emulator)
<https://docs.microsoft.com/en-us/azure/storage/common/storage-use-azurite?tabs=visual-studio>

## Clone the repo

To clone the repo inlcuding its submodules using git version 2.13 or later:

```bash
git clone --recurse-submodules -j8 git://github.com/ebosenphe/covid-dashboard-infra
```

(`j` flag only available in git version 2.8+ and it allows to fetch submodules in parallel)

With older git version up to 2.12:

```bash
git clone --recursive git://github.com/ebosenphe/covid-dashboard-infra
```

For already cloned repo (or older git versions) use:

```bash
git clone git://github.com/ebosenphe/covid-dashboard-infra
cd covid-dashboard-infra
git submodule update --init --recursive
```

## Run the project

### Run `docker-compose`

```bash
docker-compose up --build
```

Adding `-d` flag would run the containers in detached mode.
If it's run in detached mode, then you can access logs running:

```bash
docker-compose logs
```

### PgAdmin

The host name of the `pgadmin` service is in the `docker_compose.yml` file in the root directory, and it is `covid19-pgadmin`. Open a browser and type this in the address bar:

```text
http://covid19-pgadmin:5050/
```

The `username` and `password` are set in the environmental variables for the docker (this might change, ask `dashboard` devs).

### Restoring DB

Run this to restore the database (_.dump_ file is needed for that):

```bash
pg_restore -h localhost -p 5432 -U postgres -d covid19 -v covid19.dump
```

### Environmental variables

The keys that has to be set up (usually in `.env.dev` file):

```text
API_ENV
POSTGRES_CONNECTION_STRING
DeploymentBlobStorage

```

### Run services

Generic APIs:
`http://localhost:8080/generic/metrics`

Download API v2:
`http://localhost:5000/api/v2/data?areaType=overview&metric=capacityPillarOne&format=json&release=2022-01-14`
(most parameter keys are required, values can be changed for the needed ones)
