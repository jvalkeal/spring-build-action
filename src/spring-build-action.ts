import * as core from '@actions/core';
import * as exec from '@actions/exec';
import { BuildCommandBuilder } from './build-command-builder';

async function run() {
  try {
    // read input configs, we get user set values here
    let useWrapper = core.getInput('use-wrapper', {required: false}) === 'true';
    let buildMode = core.getInput('build-mode', {required: false});

    const builder = new BuildCommandBuilder();
    builder.useWrapper = useWrapper;
    builder.buildMode = buildMode;
    const buildExec = await builder.build();

    // discover runtime config from a cloned project

    // merge these configs, what user defined overrides

    // sanitity check and fail fast if we think config
    // or prepared env is screwed up

    // we only support maven or gradle so dispatch to
    // one of those or throw error

    await exec.exec(buildExec.commandLine, buildExec.args);

  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
