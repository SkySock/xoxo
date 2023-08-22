import Ajv, {JTDSchemaType} from "ajv/dist/jtd"
import {AuthDTO} from "../../dto/auth";
import {RegistrationUserDTO} from "../../dto/auth";

const ajv = new Ajv();


const authSchema: JTDSchemaType<AuthDTO> = {
    properties: {
        password: {type: "string"},
        username: {type: "string"}
    },
};


const registrationSchema: JTDSchemaType<RegistrationUserDTO> = {
    properties: {
        gender: {enum: ["MALE", "FEMALE"]},
        display_name: {type: "string"},
        password: {type: "string"},
        username: {type: "string"},
        birthday: {type: "timestamp"}
    },
};

export const authValidateFn = ajv.compile(authSchema);
export const registrationValidateFn = ajv.compile(registrationSchema);
