'use strict';
const path = require('path');
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  initializing() {
    this.props = {};
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to ' + chalk.red('neutrino-react') + ' generator!'
    ));

    var prompts = [{
      type: 'input',
      name: 'projectName',
      message: 'Your project name',
      default: path.basename(process.cwd())
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('src/**/*'),
      this.destinationPath('src/')
    );

    this.fs.copy(
      this.templatePath('README.md'),
      this.destinationPath('README.md')
    );

    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        projectName: this.props.projectName
      }
    );
  }

  install() {
    this.installDependencies();
  }
};
