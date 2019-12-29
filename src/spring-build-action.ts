import * as core from '@actions/core';
import * as jfrog from './jfrog-cli-installer';

async function run() {
    try {
        let jfrogCliVersion = core.getInput('jfrog-cli-version', {required: false});
        console.log('jfrogCliVersion', jfrogCliVersion);
        jfrog.getCli(jfrogCliVersion, 'amd64', 'jfrog-cli');
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
