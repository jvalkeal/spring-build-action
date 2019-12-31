import * as path from 'path';

export function getTempDirectory(): string {
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
  return tempDirectory;
}
