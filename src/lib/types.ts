export type ContactFormErrorType = {
    email?: string[] | undefined;
    name?: string[] | undefined;
    subject?: string[] | undefined;
    message?: string[] | undefined;
}

export type ContactFormType = {
    email: any;
    name: any;
    subject: any;
    message: any;
    createdAt: any
}