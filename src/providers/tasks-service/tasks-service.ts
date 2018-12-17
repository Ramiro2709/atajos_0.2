import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SQLiteObject } from '@ionic-native/sqlite';



/*
  Generated class for the TasksServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TasksServiceProvider {

  db: SQLiteObject = null;

  constructor(
    public http: HttpClient) {
    console.log('Hello TasksServiceProvider Provider');
  }

  //Elige Database creada
  setDatabase(db: SQLiteObject){
    if(this.db === null){
      this.db = db;
    }
  }

  prueba_borrartabla(){
    let sql = 'DROP TABLE contactos_local';
    return this.db.executeSql(sql, [])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
;
  }

  createTable_contactos(){
    //let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    let sql = 'CREATE TABLE IF NOT EXISTS contactos_local(id INTEGER PRIMARY KEY, nombre_localidad TEXT, nombre TEXT, direccion TEXT, pagina TEXT, categoria INTERGER)';
    return this.db.executeSql(sql, [])
      .then(() => console.log('Creada tabla contactos_local'))
      .catch(e => console.log(e));

  }

  createTable_numeros(){
    //let sql = 'CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, completed INTEGER)';
    let sql = 'CREATE TABLE IF NOT EXISTS numeros_local(id_numero INTEGER PRIMARY KEY AUTOINCREMENT, id_contacto INTERGER, numero_numero INTERGER)';
    return this.db.executeSql(sql, [])
      .then(() => console.log('Creada tabla numeros_local'))
      .catch(e => console.log(e));

  }

  getAll(){
    let sql = 'SELECT * FROM contactos_local';
    return this.db.executeSql(sql, [])
    .then(response => {
      console.log("Get Favoritos");
      let tasks = [];
      for (let index = 0; index < response.rows.length; index++) {
        tasks.push( response.rows.item(index) );
      }
      return Promise.resolve( tasks );
    })
    .catch(error => Promise.reject(error));
  }

  insert(task: any){
    let sql = 'INSERT INTO tasks(title, completed) VALUES(?,?)';
    return this.db.executeSql(sql, [task.title, task.completed])
      .then(() => console.log('Executed SQL'))
      .catch(e => console.log(e));
}

  InsertFavorito(item){
    //console.log("Entro InsertFavorito");
    let sql = 'INSERT INTO contactos_local(id,nombre_localidad,nombre,direccion,pagina,categoria) VALUES(?,?,?,?,?,?)';
    console.log(
      item['id'] + " - " +
      item['nombre_localidad'] + " - " +
      item['nombre'] + " - " +
      item['direccion'] + " - " +
      item['pagina'] + " - " +
      item['categoria']
    );
    return this.db.executeSql(sql, [item['id'],item['nombre_localidad'],item['nombre'],item['direccion'],item['pagina'],item['categoria']])
      .then(() => {
        console.log('Insertado Favorito');
        //this.fav.getAllTasks();
      })
      
      .catch(e => console.log("Error Insertando"));
  }

  /*
  insert_prueba(){
    let sql = 'INSERT INTO contactos_local(id_localidad,nombre_telefono,direccion_telefono,paginaweb_telefono,id_categoria) VALUES(?,?,?,?,?)';
    return this.db.executeSql(sql, [29,'nom prueba','dir prueba','pag prueba',1]);
  }
  */
  
  /*
  update(task: any){
    let sql = 'UPDATE tasks SET title=?, completed=? WHERE id=?';
    return this.db.executeSql(sql, [task.title, task.completed, task.id]);
  }

  delete(task: any){
    let sql = 'DELETE FROM tasks WHERE id=?';
    return this.db.executeSql(sql, [task.id]);
  }

  */

}
