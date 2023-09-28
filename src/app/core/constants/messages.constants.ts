export class Message{
    static required = (field:string) => { return `${field} is required`; };
    static email = "Please enter a proper email";
    static minLength = (fieldName:string,length:number) => { return `${fieldName} must be atleast ${length} characters long.`; }
    static maxLength = (fieldName:string,length:number) => { return `${fieldName} is exceeding max length of ${length} characters.`; }
    static number = "Please enter digits only.";
}