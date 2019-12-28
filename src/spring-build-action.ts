import * as core from '@actions/core';

async function run() {
    try {
        let jfrogCliVersion = core.getInput('jfrog-cli-version', {required: false});
        console.log('jfrogCliVersion', jfrogCliVersion);
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
