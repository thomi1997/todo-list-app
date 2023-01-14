import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Todos } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private dbPath = '/todos';

  tutorialsRef: AngularFirestoreCollection<Todos>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Todos> {
    return this.tutorialsRef;
  }

  create(todo: Todos): any {
    return this.tutorialsRef.add({ ...todo });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}
