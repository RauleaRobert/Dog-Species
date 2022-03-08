export class Dog {
    breedNames: string;
    subBreedNames: string[];

    constructor(obj: any){
        this.breedNames = obj.breedNames,
        this.subBreedNames = obj.subBreedNames
    }
}
