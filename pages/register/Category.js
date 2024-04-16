import {
    FormControl,
    FormLabel,
    Select
} from '@chakra-ui/react';
import ReactDOM from 'react-dom';
// import ResearchRolesNational from './ResearchRolesNational';
// import ResearchRolesRegional from './ResearchRolesRegional';
// import AcademicRolesNational from './AcademicRolesNational';
// import AcademicRolesRegional from './AcademicRolesRegional';
// import StartupDocs from '../Startup-Excellence/Startup';
// import IndustryDocs from '../Industry-Excellance/Industry.js';

export default function Category() {

    const onChange = (event) => {
        var optionsElement = document.getElementById("SelectOptions");
        // uploadElement.style.visibility = "hidden";
        switch (event.target.value) {
            case "National":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                break;

            case "Regional":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "vis document.getElementById("SelectOptions"));
                break;
            case "Others(Industry/Startup/Consultancy)":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "vis document.getElementById("SelectOptions"));
                break;

        }
    }

    return (
        <FormControl isRequired>
            <FormLabel>Select your Category Specification</FormLabel>
            <Select id="Categoryspecify" onChange={onChange}>
                <option value="National">National</option>
                <option value="Regional">Regional</option>
                <option value="Others(Industry/Startup/Consultancy/)">Others(Industry/Startup/Consultancy/)</option>
            </Select>
        </FormControl>
    );
}

