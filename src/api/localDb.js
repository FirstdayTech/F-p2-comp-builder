class LocalDB {
  #name = 'local_db';
  #collections = new Map();

  constructor(name) {
    this.#name = name;
  }

  collection(name) {
    if (!this.#collections.has(name)) {
      const newCollection = new DBCollection(name, this.#name);
      this.#collections.set(name, newCollection);
      return newCollection;
    }

    return this.#collections.get(name);
  }

  createCollection(name) {
    const collection = this.collection(name);
    StorageManager.save(this.#name, name, {});
    return collection;
  }

  deleteCollection(name) {
    this.#collections.delete(name);
    localStorage.removeItem(`${this.#name}_${name}`);
  }
}


class DBCollection {
  #name = 'collection';
  #documents = {};
  #dbName = null;

  constructor(name, dbName) {
    this.#name = name;
    this.#dbName = dbName;
    this.#documents = StorageManager.load(dbName, name);
  }

  #saveDocuments() {
    StorageManager.save(this.#dbName, this.#name, this.#documents);
  }

  save(doc) {
    if (doc instanceof Array) {
      for (const d of doc) {
        this.save(d);
      }
      return;
    }
    this.#documents[doc.id] = doc;
    this.#saveDocuments();
  }

  get(id) {
    return this.#documents[id];
  }

  getAll() {
    return this.#documents;
  }

  find(filter) {
    const result = Object.values(this.#documents).filter(doc => {
      return Object.entries(filter).every(([key, value]) => doc[key] === value);
    });
    return result;
  }

  update(doc, filter) {
    const indexesToUpdate = this.#selectWithFilter(filter);
    indexesToUpdate.forEach(id => {
      this.#documents[id] = { ...this.#documents[id], ...doc };
    });
    this.#saveDocuments();
  }

  delete(filter) {
    const indexesToDelete = this.#selectWithFilter(filter);
    indexesToDelete.forEach(id => {
      delete this.#documents[id];
    });
    this.#saveDocuments();
  }

  #selectWithFilter(filter) {
    const indexes = Object.keys(this.#documents).filter(id => {
      return Object.entries(filter).every(([key, value]) => this.#documents[id][key] === value);
    });
    return indexes;
  }
}

class StorageManager {
  static save(dbName, collectionName, documents) {
    localStorage.setItem(`${dbName}_${collectionName}`, JSON.stringify(documents));
  }

  static load(dbName, collectionName) {
    const storedDocs = localStorage.getItem(`${dbName}_${collectionName}`);
    if (storedDocs) {
      return JSON.parse(storedDocs);
    }
    return {};
  }
}

const db = new LocalDB('comp-builder-db');
export default db;