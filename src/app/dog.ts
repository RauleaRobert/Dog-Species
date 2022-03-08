export class Dog {
    breedName: string;
    subBreedNames: string[];

    constructor(obj: any){
        this.breedName = obj.breedName,
        this.subBreedNames = obj.subBreedNames
    }
}
