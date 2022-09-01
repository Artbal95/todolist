import {CreateTodosType} from "../types/todos.types";
import validator from "validator";

const isValidateTodosHelper = (form: CreateTodosType): boolean => {
    const isEmpty = Object.values(form).every(formItem => formItem.length)
    const isEmail = validator.isEmail(form.email)
    return isEmpty && isEmail
}

export default isValidateTodosHelper