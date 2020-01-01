import { ExecOptions } from '@actions/exec/lib/interfaces';
import * as fs from 'fs';
const commandExists = require('command-exists');

export interface BuildExec {
  commandLine: string,
  args?: string[],
  options?: ExecOptions
}

export class BuildCommandBuilder {

  buildMode: string | undefined;
  useWrapper: boolean | undefined;
  args?: string[];
  defaultMavenArgs = ['clean', 'install'];
  defaultGradleArgs = ['clean', 'build'];

  public async build(): Promise<BuildExec> {
    const commandLine = await this.getCommandLine();
    let a: string[] = [];
    if (commandLine.includes('mvn')) {
      a = this.defaultMavenArgs;
    }
    if (commandLine.includes('gradle')) {
      a = this.defaultGradleArgs;
    }
    return {
      commandLine: commandLine,
      args: a
    };
  }

  private async getCommandLine(): Promise<string> {
    let commandLine: string | undefined;
    let error = 'Unknown error';
    const IS_WINDOWS = process.platform === 'win32';
    const mavenWrapperCommand = IS_WINDOWS ? 'mvnw.cmd' : 'mvnw';
    const gradleWrapperCommand = IS_WINDOWS ? 'gradle.bat' : 'gradle';

    const mavenPomExists = fs.existsSync('pom.xml');
    const mavenExists = commandExists('mvn');
    const mavenWrapperExists = fs.existsSync(mavenWrapperCommand);
    const gradleBuildExists = fs.existsSync('build.gradle');
    const gradleWrapperExists = fs.existsSync(gradleWrapperCommand);
    const gradleExists = commandExists('gradle');

    if (this.buildMode === 'maven') {
      if (!mavenPomExists) {
        error = 'pom.xml does not exist';
      } else if (this.useWrapper && !mavenWrapperExists) {
        error = 'mvn wrapper does not exist';
      } else if (!this.useWrapper && !mavenExists) {
        error = 'mvn does not exist';
      } else {
        commandLine = this.useWrapper ? './' + mavenWrapperCommand : 'mvn';
      }
    } else if (this.buildMode === 'gradle') {
      if (!gradleBuildExists) {
        error = 'gradle.build does not exist';
      } else if (this.useWrapper && !gradleWrapperExists) {
        error = 'gradle wrapper does not exist';
      } else if (!this.useWrapper && !gradleExists) {
        error = 'gradle does not exist';
      } else {
        commandLine = this.useWrapper ? './' + gradleWrapperCommand : 'gradle';
      }
    } else {
      if (!mavenPomExists) {
        error = 'pom.xml does not exist';
      } else if (this.useWrapper && !mavenWrapperExists) {
        error = 'mvn wrapper does not exist';
      } else if (!this.useWrapper && !mavenExists) {
        error = 'mvn does not exist';
      } else {
        commandLine = this.useWrapper ? './' + mavenWrapperCommand : 'mvn';
      }
      if (!commandLine) {
        if (!gradleBuildExists) {
          error = 'gradle.build does not exist';
        } else if (this.useWrapper && !gradleWrapperExists) {
          error = 'gradle wrapper does not exist';
        } else if (!this.useWrapper && !gradleExists) {
          error = 'gradle does not exist';
        } else {
          commandLine = this.useWrapper ? './' + gradleWrapperCommand : 'gradle';
        }
      }
    }


    if (commandLine) {
      return commandLine;
    } else {
      return Promise.reject(error);
    }
  }
}
