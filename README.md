# Opinionated Action Handling Spring Builds and Releases

NOTE: WIP, don't try unless you know what you're doing!

Some Spring projects use build and release process using combination of a
Gradle/Maven, Bamboo, Artifactory, Bintray and Maven Central. This is an attempt
to replace Bamboo build with GitHub Actions.

Essentially what we want to have with this GitHub Actions is an easy way to
start building your Spring project and then later with config modifications
start adding more features like publishing snapshots into artifactory,
releasing milestones, promoting buils and doing a whole release dance.


```yaml
on:
  push:
    branches:
      - master

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Set up JDK 1.8
      uses: actions/setup-java@v1
      with:
        java-version: 1.8
    - uses: jvalkeal/spring-build-action@master
```

```yaml
on:
  push:
    branches:
      - 'release/v*'

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - uses: actions/checkout@v1
    - name: Set up JDK 1.8
      uses: actions/setup-java@v1
      with:
        java-version: 1.8
    - uses: jvalkeal/spring-build-action@master
      with:
        bump-version: true
```

## Usual Build Process using Bamboo

Flow for snapshot builds:
* Bamboo build from master or version branch
* Snapshot build which publishes artifacts to libs-snapshot-local

Flow for milestone builds:
* Bamboo build from master or version branch
* GitHub tag
* Milestone build which publishes artifacts to libs-milestone-local

Flow for release builds:
* Bamboo build from master or version branch
* GitHub tag
* Release build which publishes artifacts to libs-staging-local
* Promotion from libs-stating-local to libs-release-local
* Push to Bintray
* Maven central sync from Bintray

## Bamboo build into Artifactory

