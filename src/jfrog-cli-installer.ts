import * as core from '@actions/core';
import * as io from '@actions/io';
import * as exec from '@actions/exec';
import * as tc from '@actions/tool-cache';
import * as fs from 'fs';
import * as path from 'path';
// import * as semver from 'semver';
import * as httpm from 'typed-rest-client/HttpClient';

// let tempDirectory = process.env['RUNNER_TEMP'] || '';
// const IS_WINDOWS = process.platform === 'win32';

// if (!tempDirectory) {
//    let baseLocation;
//    if (IS_WINDOWS) {
//      // On windows use the USERPROFILE env variable
//      baseLocation = process.env['USERPROFILE'] || 'C:\\';
//    } else {
//      if (process.platform === 'darwin') {
//        baseLocation = '/Users';
//      } else {
//        baseLocation = '/home';
//      }
//    }
//    tempDirectory = path.join(baseLocation, 'actions', 'temp');
// }

export async function getCli(
  version: string,
  arch: string,
  jfrogPackage: string
): Promise<void> {
  // let toolPath = tc.find(jfrogPackage, version);

  // if (toolPath) {
  //   core.info(`Tool found in cache ${toolPath}`);
  // }

  // let destinationFolder: string = path.join(
  //   tempDirectory,
  //   'temp_' + Math.floor(Math.random() * 2000000000)
  // );
  // await io.mkdirP(destinationFolder);

  // const http = new httpm.HttpClient('spring-build-action');
  // const cli = await tc.downloadTool('https://dl.bintray.com/jfrog/jfrog-cli-go/1.32.4/jfrog-cli-linux-amd64/jfrog');
  // fs.chmodSync(cli, '755');

  // console.log('XXX cli', cli);

  // io.mv(cli, path.join(destinationFolder, 'jfrog'));

  // // const stats = fs.statSync(cli);
  // // console.log('XXX stats', stats);

  // toolPath = await tc.cacheDir(destinationFolder, jfrogPackage, version, arch);

  // core.addPath(toolPath);
}

// jfrog rt config rt-server --interactive=false --url=http://localhost:8081/artifactory --user=admin --password=password
