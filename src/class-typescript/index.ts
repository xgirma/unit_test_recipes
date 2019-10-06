export default class Contact {
    private contactName: string | undefined;

    constructor(name?: string){
        this.contactName = name;
    }

    get name(): string {
        return <string>this.contactName;
    }

    set name(name: string) {
        this.contactName = name;
    }
}
