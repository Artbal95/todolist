import {ToastType} from "../store/types/global.types";

const toastOptions: ToastType = (title, description, status) => ({
    title,
    description,
    status,
    position: 'top-right',
    duration: 3000,
    isClosable: true,
})

export default toastOptions