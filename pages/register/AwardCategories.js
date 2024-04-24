import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import ReactDOM from "react-dom";
// import ResearchRolesNational from './ResearchRolesNational';
// import ResearchRolesRegional from './ResearchRolesRegional';
// import AcademicRolesNational from './AcademicRolesNational';
// import AcademicRolesRegional from './AcademicRolesRegional';
// import StartupDocs from '../Startup-Excellence/Startup';
// import IndustryDocs from '../Industry-Excellance/Industry.js';

export default function AwardCategories() {
  const onChange = (event) => {
    var optionsElement = document.getElementById("SelectOptions");
    // uploadElement.style.visibility = "hidden";
    switch (event.target.value) {
      case "RE (Student) UG ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";
        break;

      case "RE (Student) PG ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "vis document.getElementById("SelectOptions"));
        break;

      case "RE (Student) PhD ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";
        // ReactDOM.render(document.getElementById("SelectOptions"));
        break;

      case "RE (Teaching faculty) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";
        break;
      case "RE (Industry/ Govt. Organization/Consultancy Firm)":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";
        break;

      case "AE (Student) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "AE (Polytechnic Student)":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "AE (Teaching Faculty) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "AE (HoD) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "AE (Principal/Director) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "AE (Institute) ":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "Startup Excellence":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";

        break;
      case "Industry Excellence":
        optionsElement.style.visibility = "visible";
        // uploadElement.style.visibility = "visible";
        break;
    }
  };

  return (
    <FormControl isRequired>
      <FormLabel>Select Award Category</FormLabel>
      <Select id="Category" onChange={onChange}>
        <option value="RE (Student) UG ">RE (Student) UG </option>
        <option value="RE (Student) PG ">RE (Student) PG </option>
        <option value="RE (Student) PhD ">RE (Student) PhD </option>
        <option value="RE (Teaching faculty) ">RE (Teaching faculty) </option>
        <option value="RE (Industry/ Govt. Organization/Consultancy Firm)">
          RE (Industry/ Govt. Organization/Consultancy Firm)
        </option>
        <option value="AE (Student) ">AE (Student) </option>
        <option value="AE (Polytechnic Student)">
          AE (Polytechnic Student)
        </option>
        <option value="AE (Teaching Faculty) ">AE (Teaching Faculty) </option>
        <option value="AE (HoD) ">AE (HoD) </option>
        <option value="AE (Principal/Director) ">
          AE (Principal/Director){" "}
        </option>
        <option value="AE (Institute) ">AE (Institute) </option>
        <option value="Industry Excellence">Industry Excellence</option>
        <option value="Startup Excellence">Startup Excellence</option>
      </Select>
    </FormControl>
  );
}
