import * as core from '@actions/core';
import * as io from '@actions/io';
import * as exec from '@actions/exec';

export async function build(
): Promise<void> {
  await exec.exec('./mvnw', ['clean', 'install']);
}
