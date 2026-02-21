import Id from "../value-object/id.value-object";
import AggregateRoot from "./aggregate-root.interface";

export class BaseEntity implements AggregateRoot {
  private _id: Id;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(id?: Id, createdAt?: Date, updatedAt?: Date) {
    this._id = id;
    this._createdAt = createdAt || new Date();
    this._updatedAt = updatedAt || new Date();
  }

  get id(): Id {
    return this._id;
  }
  get createdAt(): Date {
    return this._createdAt;
  }
  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(updateAt: Date) {
    this._updatedAt = updateAt;
  }
}
