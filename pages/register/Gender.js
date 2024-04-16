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

export default function Gender() {

    const onChange = (event) => {
        var optionsElement = document.getElementById("SelectOptions");
        // uploadElement.style.visibility = "hidden";
        switch (event.target.value) {
            case "Male":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                break;

            case "Female":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "vis document.getElementById("SelectOptions"));
                break;

            case "Others":
                optionsElement.style.visibility = "visible";
                // uploadElement.style.visibility = "visible";
                // ReactDOM.render(document.getElementById("SelectOptions"));
                break;
        }
    }

    return (
        <FormControl isRequired>
            <FormLabel>Select Gender</FormLabel>
            <Select id="Gender" onChange={onChange}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
            </Select>
        </FormControl>
    );
}

