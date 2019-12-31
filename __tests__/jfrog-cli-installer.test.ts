import * as io from '@actions/io';
import * as path from 'path';

const toolDir = path.join(__dirname, 'runner', 'tools');
const tempDir = path.join(__dirname, 'runner', 'temp');
process.env['RUNNER_TOOL_CACHE'] = toolDir;
process.env['RUNNER_TEMP'] = tempDir;
// import * as jfrog from '../src/jfrog-cli-installer';

describe('installer tests', () => {

  beforeAll(async () => {

  }, 300000);

  afterAll(async () => {
    try {
      await io.rmRF(toolDir);
      await io.rmRF(tempDir);
    } catch {
      console.log('Failed to remove test directories');
    }
  }, 100000);

  it('test xxx', async () => {
    // await jfrog.getCli('1.32.4', 'amd64', 'jfrog-cli');
  }, 100000)

});
