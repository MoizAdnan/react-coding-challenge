import { Planning } from "./Models/Planning";
import { AttributeCount } from "./Models/PlanningCount";

//getCount takes data and check each value of a specified key i.e industry, and stores it in a new object.
//If value of a key is found again then the count of that key is incremented and stored in the object.
//After the process ends, the resulting data is then stored in a variable of PlanningCount model so that it can be used in graphs directly
export function getCount(data: Planning[], key: string): AttributeCount[] {
  let reducedData = data.reduce(function (
    previousValue: any,
    currentValue: any
  ) {
    if (currentValue[key] !== "") {
      if (previousValue[currentValue[key]]) {
        previousValue[currentValue[key]] += 1;
      } else {
        previousValue[currentValue[key]] = 1;
      }
    }
    return previousValue;
  },
  {});

  let count: AttributeCount[] = [];
  Object.keys(reducedData).forEach((item) => {
    count.push({ key: item, value: reducedData[item] });
  });
  return count;
}

//getSkillsCount has the same functionality of getCount, except it stores both required and optional skill values in the same object 
export function getSkillsCount(data: Planning[]): AttributeCount[] {
  let reducedData = data.reduce(function (
    previousValue: any,
    currentValue: any
  ) {
    if (currentValue.requiredSkills.length !== 0) {
      currentValue.requiredSkills.forEach((item: any) => {
        if (previousValue[item.name]) {
          previousValue[item.name] += 1;
        } else {
          previousValue[item.name] = 1;
        }
      });
    }
    if (currentValue.optionalSkills.length !== 0) {
      currentValue.requiredSkills.forEach((item: any) => {
        if (previousValue[item.name]) {
          previousValue[item.name] += 1;
        } else {
          previousValue[item.name] = 1;
        }
      });
    }
    return previousValue;
  },
  {});

  let count: AttributeCount[] = [];
  Object.keys(reducedData).forEach((item) => {
    count.push({ key: item, value: reducedData[item] });
  });
  return count;
}
