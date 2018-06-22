import { PLATFORM } from "aurelia-pal";
import { FrameworkConfiguration } from "aurelia-framework";
import { Inputs } from "../../constants/inputs";

const rootPath = "./templates/bootstrap4";

export function configure(config: FrameworkConfiguration) {

  config.globalResources(
    [
      // resources
      PLATFORM.moduleName(`${rootPath}/resources/guid`),
    ]
      // inputs
      .concat(getInputs()));
}

function getInputs() {
  return Object.keys(Inputs.controls).map((key) => {
    return PLATFORM.moduleName(`${rootPath}/inputs/${key}/${Inputs.controls[key]}`);
  });
}
