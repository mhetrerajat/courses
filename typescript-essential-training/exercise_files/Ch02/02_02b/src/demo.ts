interface Contact {
    id: number;
    name: string;
    birthDate: Date;
    optionalField?: string;
    address: Address
}

interface Address {
    pincode: number;
}

let primary: Contact = {
    id: 1,
    name: "abc",
    birthDate: new Date("1992-12-01"),
    address: { pincode: 112321 }
}
console.log(primary);