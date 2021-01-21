import { Injectable } from '@angular/core';
import { Pet } from '../model/pet';
import { Observable, from } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable()

export class PetService {
    pet: Pet = new Pet();

    constructor(private firestore: AngularFirestore) {}

     
     buscaPetPorId(id: any): Observable<any> {
        return from(new Observable(observe => {
      
            this.firestore.collection('pet').doc(id).snapshotChanges().subscribe(response => {
              

                console.log(response);

                let pet: Pet = new Pet();
                pet.id = response.payload.id;
              

                pet.setData(response.payload.data());
                observe.next(pet);

               
            }, (err) => {

                observe.error("Erro ao buscar o ID!");
            })



        }));

    }

   
   
}
