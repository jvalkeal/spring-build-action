import * as core from '@actions/core';
import * as io from '@actions/io';
import * as exec from '@actions/exec';
import * as tc from '@actions/tool-cache';
import * as fs from 'fs';
import * as path from 'path';
// import * as semver from 'semver';
import * as httpm from 'typed-rest-client/HttpClient';

let tempDirectory = process.env['RUNNER_TEMP'] || '';
const IS_WINDOWS = process.platform === 'win32';

if (!tempDirectory) {
   let baseLocation;
   if (IS_WINDOWS) {
     // On windows use the USERPROFILE env variable
     baseLocation = process.env['USERPROFILE'] || 'C:\\';
   } else {
     if (process.platform === 'darwin') {
       baseLocation = '/Users';
     } else {
       baseLocation = '/home';
     }
   }
   tempDirectory = path.join(baseLocation, 'actions', 'temp');
}

export async function getCli(
  version: string
): Promise<void> {
  const http = new httpm.HttpClient('spring-build-action');
  const cli = await tc.downloadTool('https://dl.bintray.com/jfrog/jfrog-cli-go/1.32.4/jfrog-cli-linux-amd64/jfrog');

}
