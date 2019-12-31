import * as core from '@actions/core';
// import * as jfrog from './jfrog-cli-installer';
// import { configureEnvironment } from './jfrog-cli-config';
import * as maven from './maven-build';

async function run() {
  try {
    // let jfrogCliVersion = core.getInput('jfrog-cli-version', {required: false});
    // console.log('jfrogCliVersion', jfrogCliVersion);
    // jfrog.getCli(jfrogCliVersion, 'amd64', 'jfrog-cli');
    // console.log('Configuring env');
    // await configureEnvironment();
    await maven.build();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
